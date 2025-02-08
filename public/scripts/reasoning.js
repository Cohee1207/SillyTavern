import {
    moment,
} from '../lib.js';
import { chat, closeMessageEditor, event_types, eventSource, main_api, saveChatConditional, saveSettingsDebounced, substituteParams, updateMessageBlock } from '../script.js';
import { getRegexedString, regex_placement } from './extensions/regex/engine.js';
import { getCurrentLocale, t } from './i18n.js';
import { MacrosParser } from './macros.js';
import { chat_completion_sources, oai_settings } from './openai.js';
import { Popup } from './popup.js';
import { power_user } from './power-user.js';
import { SlashCommand } from './slash-commands/SlashCommand.js';
import { ARGUMENT_TYPE, SlashCommandArgument, SlashCommandNamedArgument } from './slash-commands/SlashCommandArgument.js';
import { commonEnumProviders } from './slash-commands/SlashCommandCommonEnumsProvider.js';
import { SlashCommandParser } from './slash-commands/SlashCommandParser.js';
import { textgen_types, textgenerationwebui_settings } from './textgen-settings.js';
import { copyText, escapeRegex, isFalseBoolean } from './utils.js';

/**
 * Gets a message from a jQuery element.
 * @param {Element} element
 * @returns {{messageId: number, message: object, messageBlock: JQuery<HTMLElement>}}
 */
function getMessageFromJquery(element) {
    const messageBlock = $(element).closest('.mes');
    const messageId = Number(messageBlock.attr('mesid'));
    const message = chat[messageId];
    return { messageId: messageId, message, messageBlock };
}

/**
 * Toggles the auto-expand state of reasoning blocks.
 */
function toggleReasoningAutoExpand() {
    const reasoningBlocks = document.querySelectorAll('details.mes_reasoning_details');
    reasoningBlocks.forEach((block) => {
        if (block instanceof HTMLDetailsElement) {
            block.open = power_user.reasoning.auto_expand;
        }
    });
}

/**
 * Extracts the reasoning from the response data.
 * @param {object} data Response data
 * @returns {string} Extracted reasoning
 */
export function extractReasoningFromData(data) {
    switch (main_api) {
        case 'textgenerationwebui':
            switch (textgenerationwebui_settings.type) {
                case textgen_types.OPENROUTER:
                    return data?.choices?.[0]?.reasoning ?? '';
            }
            break;

        case 'openai':
            switch (oai_settings.chat_completion_source) {
                case chat_completion_sources.DEEPSEEK:
                    return data?.choices?.[0]?.message?.reasoning_content ?? '';
                case chat_completion_sources.OPENROUTER:
                    return data?.choices?.[0]?.message?.reasoning ?? '';
                case chat_completion_sources.MAKERSUITE:
                    return data?.responseContent?.parts?.filter(part => part.thought)?.map(part => part.text)?.join('\n\n') ?? '';
            }
            break;
    }

    return '';
}

/**
 * Updates the Reasoning controls
 * @param {HTMLElement} element The element to update
 * @param {number?} duration The duration of the reasoning in milliseconds
 * @param {object} [options={}] Options for the function
 * @param {boolean} [options.forceEnd=false] If true, there will be no "Thinking..." when no duration exists
 */
export function updateReasoningTimeUI(element, duration, { forceEnd = false } = {}) {
    if (duration) {
        const durationStr = moment.duration(duration).locale(getCurrentLocale()).humanize({ s: 50, ss: 3 });
        const secondsStr = moment.duration(duration).asSeconds();
        element.innerHTML = t`Thought for <span title="${secondsStr} seconds">${durationStr}</span>`;
    } else if (forceEnd) {
        element.textContent = t`Thought for some time`;
    } else {
        element.textContent = t`Thinking...`;
    }
}

/**
 * Helper class for adding reasoning to messages.
 * Keeps track of the number of reasoning additions.
 */
export class PromptReasoning {
    static REASONING_PLACEHOLDER = '\u200B';
    static REASONING_PLACEHOLDER_REGEX = new RegExp(`${PromptReasoning.REASONING_PLACEHOLDER}$`);

    constructor() {
        this.counter = 0;
    }

    /**
     * Checks if the limit of reasoning additions has been reached.
     * @returns {boolean} True if the limit of reasoning additions has been reached, false otherwise.
     */
    isLimitReached() {
        if (!power_user.reasoning.add_to_prompts) {
            return true;
        }

        return this.counter >= power_user.reasoning.max_additions;
    }

    /**
     * Add reasoning to a message according to the power user settings.
     * @param {string} content Message content
     * @param {string} reasoning Message reasoning
     * @param {boolean} isPrefix Whether this is the last message prefix
     * @returns {string} Message content with reasoning
     */
    addToMessage(content, reasoning, isPrefix) {
        // Disabled or reached limit of additions
        if (!isPrefix && (!power_user.reasoning.add_to_prompts || this.counter >= power_user.reasoning.max_additions)) {
            return content;
        }

        // No reasoning provided or a placeholder
        if (!reasoning || reasoning === PromptReasoning.REASONING_PLACEHOLDER) {
            return content;
        }

        // Increment the counter
        this.counter++;

        // Substitute macros in variable parts
        const prefix = substituteParams(power_user.reasoning.prefix || '');
        const separator = substituteParams(power_user.reasoning.separator || '');
        const suffix = substituteParams(power_user.reasoning.suffix || '');

        // Combine parts with reasoning only
        if (isPrefix && !content) {
            return `${prefix}${reasoning}`;
        }

        // Combine parts with reasoning and content
        return `${prefix}${reasoning}${suffix}${separator}${content}`;
    }
}

function loadReasoningSettings() {
    $('#reasoning_add_to_prompts').prop('checked', power_user.reasoning.add_to_prompts);
    $('#reasoning_add_to_prompts').on('change', function () {
        power_user.reasoning.add_to_prompts = !!$(this).prop('checked');
        saveSettingsDebounced();
    });

    $('#reasoning_prefix').val(power_user.reasoning.prefix);
    $('#reasoning_prefix').on('input', function () {
        power_user.reasoning.prefix = String($(this).val());
        saveSettingsDebounced();
    });

    $('#reasoning_suffix').val(power_user.reasoning.suffix);
    $('#reasoning_suffix').on('input', function () {
        power_user.reasoning.suffix = String($(this).val());
        saveSettingsDebounced();
    });

    $('#reasoning_separator').val(power_user.reasoning.separator);
    $('#reasoning_separator').on('input', function () {
        power_user.reasoning.separator = String($(this).val());
        saveSettingsDebounced();
    });

    $('#reasoning_max_additions').val(power_user.reasoning.max_additions);
    $('#reasoning_max_additions').on('input', function () {
        power_user.reasoning.max_additions = Number($(this).val());
        saveSettingsDebounced();
    });

    $('#reasoning_auto_parse').prop('checked', power_user.reasoning.auto_parse);
    $('#reasoning_auto_parse').on('change', function () {
        power_user.reasoning.auto_parse = !!$(this).prop('checked');
        saveSettingsDebounced();
    });

    $('#reasoning_auto_expand').prop('checked', power_user.reasoning.auto_expand);
    $('#reasoning_auto_expand').on('change', function () {
        power_user.reasoning.auto_expand = !!$(this).prop('checked');
        toggleReasoningAutoExpand();
        saveSettingsDebounced();
    });
}

function registerReasoningSlashCommands() {
    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        name: 'reasoning-get',
        aliases: ['get-reasoning'],
        returns: ARGUMENT_TYPE.STRING,
        helpString: t`Get the contents of a reasoning block of a message. Returns an empty string if the message does not have a reasoning block.`,
        unnamedArgumentList: [
            SlashCommandArgument.fromProps({
                description: 'Message ID. If not provided, the message ID of the last message is used.',
                typeList: ARGUMENT_TYPE.NUMBER,
                enumProvider: commonEnumProviders.messages(),
            }),
        ],
        callback: (_args, value) => {
            const messageId = !isNaN(parseInt(value.toString())) ? parseInt(value.toString()) : chat.length - 1;
            const message = chat[messageId];
            const reasoning = String(message?.extra?.reasoning ?? '');
            return reasoning.replace(PromptReasoning.REASONING_PLACEHOLDER_REGEX, '');
        },
    }));

    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        name: 'reasoning-set',
        aliases: ['set-reasoning'],
        returns: ARGUMENT_TYPE.STRING,
        helpString: t`Set the reasoning block of a message. Returns the reasoning block content.`,
        namedArgumentList: [
            SlashCommandNamedArgument.fromProps({
                name: 'at',
                description: 'Message ID. If not provided, the message ID of the last message is used.',
                typeList: ARGUMENT_TYPE.NUMBER,
                enumProvider: commonEnumProviders.messages(),
            }),
        ],
        unnamedArgumentList: [
            SlashCommandArgument.fromProps({
                description: 'Reasoning block content.',
                typeList: ARGUMENT_TYPE.STRING,
            }),
        ],
        callback: async (args, value) => {
            const messageId = !isNaN(Number(args.at)) ? Number(args.at) : chat.length - 1;
            const message = chat[messageId];
            if (!message?.extra) {
                return '';
            }

            message.extra.reasoning = String(value ?? '');
            await saveChatConditional();

            closeMessageEditor('reasoning');
            updateMessageBlock(messageId, message);
            return message.extra.reasoning;
        },
    }));

    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        name: 'reasoning-parse',
        aliases: ['parse-reasoning'],
        returns: 'reasoning string',
        helpString: t`Extracts the reasoning block from a string using the Reasoning Formatting settings.`,
        namedArgumentList: [
            SlashCommandNamedArgument.fromProps({
                name: 'regex',
                description: 'Whether to apply regex scripts to the reasoning content.',
                typeList: [ARGUMENT_TYPE.BOOLEAN],
                defaultValue: 'true',
                isRequired: false,
                enumProvider: commonEnumProviders.boolean('trueFalse'),
            }),
        ],
        unnamedArgumentList: [
            SlashCommandArgument.fromProps({
                description: 'input string',
                typeList: [ARGUMENT_TYPE.STRING],
            }),
        ],
        callback: (args, value) => {
            if (!value) {
                return '';
            }

            if (!power_user.reasoning.prefix || !power_user.reasoning.suffix) {
                toastr.warning(t`Both prefix and suffix must be set in the Reasoning Formatting settings.`);
                return String(value);
            }

            const parsedReasoning = parseReasoningFromString(String(value));

            if (!parsedReasoning) {
                return '';
            }

            const applyRegex = !isFalseBoolean(String(args.regex ?? ''));
            return applyRegex
                ? getRegexedString(parsedReasoning.reasoning, regex_placement.REASONING)
                : parsedReasoning.reasoning;
        },
    }));
}

function registerReasoningMacros() {
    MacrosParser.registerMacro('reasoningPrefix', () => power_user.reasoning.prefix, t`Reasoning Prefix`);
    MacrosParser.registerMacro('reasoningSuffix', () => power_user.reasoning.suffix, t`Reasoning Suffix`);
    MacrosParser.registerMacro('reasoningSeparator', () => power_user.reasoning.separator, t`Reasoning Separator`);
}

function setReasoningEventHandlers() {
    $(document).on('click', '.mes_reasoning_details', function (e) {
        if (!e.target.closest('.mes_reasoning_actions') && !e.target.closest('.mes_reasoning_header')) {
            e.preventDefault();
        }
    });

    $(document).on('click', '.mes_reasoning_header', function () {
        // If we are in message edit mode and reasoning area is closed, a click opens and edits it
        const mes = $(this).closest('.mes');
        const mesEditArea = mes.find('#curEditTextarea');
        if (mesEditArea.length) {
            const summary = $(mes).find('.mes_reasoning_summary');
            if (!summary.attr('open')) {
                summary.find('.mes_reasoning_edit').trigger('click');
            }
        }
    });

    $(document).on('click', '.mes_reasoning_copy', (e) => {
        e.stopPropagation();
        e.preventDefault();
    });

    $(document).on('click', '.mes_reasoning_edit', function (e) {
        e.stopPropagation();
        e.preventDefault();
        const { message, messageBlock } = getMessageFromJquery(this);
        if (!message?.extra) {
            return;
        }

        const reasoning = String(message?.extra?.reasoning ?? '');
        const chatElement = document.getElementById('chat');
        const textarea = document.createElement('textarea');
        const reasoningBlock = messageBlock.find('.mes_reasoning');
        textarea.classList.add('reasoning_edit_textarea');
        textarea.value = reasoning.replace(PromptReasoning.REASONING_PLACEHOLDER_REGEX, '');
        $(textarea).insertBefore(reasoningBlock);

        if (!CSS.supports('field-sizing', 'content')) {
            const resetHeight = function () {
                const scrollTop = chatElement.scrollTop;
                textarea.style.height = '0px';
                textarea.style.height = `${textarea.scrollHeight}px`;
                chatElement.scrollTop = scrollTop;
            };

            textarea.addEventListener('input', resetHeight);
            resetHeight();
        }

        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);

        const textareaRect = textarea.getBoundingClientRect();
        const chatRect = chatElement.getBoundingClientRect();

        // Scroll if textarea bottom is below visible area
        if (textareaRect.bottom > chatRect.bottom) {
            const scrollOffset = textareaRect.bottom - chatRect.bottom;
            chatElement.scrollTop += scrollOffset;
        }
    });

    $(document).on('click', '.mes_reasoning_edit_done', async function (e) {
        e.stopPropagation();
        e.preventDefault();
        const { message, messageId, messageBlock } = getMessageFromJquery(this);
        if (!message?.extra) {
            return;
        }

        const textarea = messageBlock.find('.reasoning_edit_textarea');
        const reasoning = getRegexedString(String(textarea.val()), regex_placement.REASONING, { isEdit: true });
        message.extra.reasoning = reasoning;
        await saveChatConditional();
        updateMessageBlock(messageId, message);
        textarea.remove();

        messageBlock.find('.mes_edit_done:visible').trigger('click');
    });

    $(document).on('click', '.mes_reasoning_edit_cancel', function (e) {
        e.stopPropagation();
        e.preventDefault();

        const { messageBlock } = getMessageFromJquery(this);
        const textarea = messageBlock.find('.reasoning_edit_textarea');
        textarea.remove();

        messageBlock.find('.mes_reasoning_edit_cancel:visible').trigger('click');
    });

    $(document).on('click', '.mes_edit_add_reasoning', async function () {
        const { message, messageId, messageBlock } = getMessageFromJquery(this);
        if (!message?.extra) {
            return;
        }

        if (message.extra.reasoning) {
            toastr.info(t`Reasoning already exists.`, t`Edit Message`);
            return;
        }

        message.extra.reasoning = PromptReasoning.REASONING_PLACEHOLDER;
        updateMessageBlock(messageId, message, { rerenderMessage: false });
        messageBlock.find('.mes_reasoning_edit').trigger('click');
        await saveChatConditional();
    });

    $(document).on('click', '.mes_reasoning_delete', async function (e) {
        e.stopPropagation();
        e.preventDefault();

        const confirm = await Popup.show.confirm(t`Are you sure you want to clear the reasoning?`, t`Visible message contents will stay intact.`);

        if (!confirm) {
            return;
        }

        const { message, messageId, messageBlock } = getMessageFromJquery(this);
        if (!message?.extra) {
            return;
        }
        message.extra.reasoning = '';
        await saveChatConditional();
        updateMessageBlock(messageId, message);
        const textarea = messageBlock.find('.reasoning_edit_textarea');
        textarea.remove();
    });

    $(document).on('pointerup', '.mes_reasoning_copy', async function () {
        const { message } = getMessageFromJquery(this);
        const reasoning = String(message?.extra?.reasoning ?? '').replace(PromptReasoning.REASONING_PLACEHOLDER_REGEX, '');

        if (!reasoning) {
            return;
        }

        await copyText(reasoning);
        toastr.info(t`Copied!`, '', { timeOut: 2000 });
    });
}

/**
 * Parses reasoning from a string using the power user reasoning settings.
 * @typedef {Object} ParsedReasoning
 * @property {string} reasoning Reasoning block
 * @property {string} content Message content
 * @param {string} str Content of the message
 * @returns {ParsedReasoning|null} Parsed reasoning block and message content
 */
function parseReasoningFromString(str) {
    // Both prefix and suffix must be defined
    if (!power_user.reasoning.prefix || !power_user.reasoning.suffix) {
        return null;
    }

    try {
        const regex = new RegExp(`${escapeRegex(power_user.reasoning.prefix)}(.*?)${escapeRegex(power_user.reasoning.suffix)}`, 's');

        let didReplace = false;
        let reasoning = '';
        let content = String(str).replace(regex, (_match, captureGroup) => {
            didReplace = true;
            reasoning = captureGroup;
            return '';
        });

        if (didReplace && power_user.trim_spaces) {
            reasoning = reasoning.trim();
            content = content.trim();
        }

        return { reasoning, content };
    } catch (error) {
        console.error('[Reasoning] Error parsing reasoning block', error);
        return null;
    }
}

function registerReasoningAppEvents() {
    eventSource.makeFirst(event_types.MESSAGE_RECEIVED, (/** @type {number} */ idx) => {
        if (!power_user.reasoning.auto_parse) {
            return;
        }

        console.debug('[Reasoning] Auto-parsing reasoning block for message', idx);
        const message = chat[idx];

        if (!message) {
            console.warn('[Reasoning] Message not found', idx);
            return null;
        }

        if (!message.mes || message.mes === '...') {
            console.debug('[Reasoning] Message content is empty or a placeholder', idx);
            return null;
        }

        const parsedReasoning = parseReasoningFromString(message.mes);

        // No reasoning block found
        if (!parsedReasoning) {
            return;
        }

        // Make sure the message has an extra object
        if (!message.extra || typeof message.extra !== 'object') {
            message.extra = {};
        }

        const contentUpdated = !!parsedReasoning.reasoning || parsedReasoning.content !== message.mes;

        // If reasoning was found, add it to the message
        if (parsedReasoning.reasoning) {
            message.extra.reasoning = getRegexedString(parsedReasoning.reasoning, regex_placement.REASONING);
        }

        // Update the message text if it was changed
        if (parsedReasoning.content !== message.mes) {
            message.mes = parsedReasoning.content;
        }

        // Find if a message already exists in DOM and must be updated
        if (contentUpdated) {
            const messageRendered = document.querySelector(`.mes[mesid="${idx}"]`) !== null;
            if (messageRendered) {
                console.debug('[Reasoning] Updating message block', idx);
                updateMessageBlock(idx, message);
            }
        }
    });
}

export function initReasoning() {
    loadReasoningSettings();
    toggleReasoningAutoExpand();
    setReasoningEventHandlers();
    registerReasoningSlashCommands();
    registerReasoningMacros();
    registerReasoningAppEvents();
}
