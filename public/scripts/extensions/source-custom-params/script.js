import { eventSource, event_types, main_api } from '../../../script.js';
import { PARAMS_CONFIG } from './params.js';

const STORAGE_KEY = 'source-custom-params';
let enabledParams = new Set();

const savedParams = localStorage.getItem(STORAGE_KEY);
if (savedParams) enabledParams = new Set(JSON.parse(savedParams));


function processMessages(data) {
    const messages = data?.messages;
    if (!Array.isArray(messages)) return;

    messages.forEach((message, index) => {
        console.log(main_api, messages, message, index);
        PARAMS_CONFIG.forEach(param => {
            if (enabledParams.has(param.key) &&
                param.condition(main_api, messages, message, index)) {
                param.apply(message);
            }
        });
    });
}

function createSettings() {
    const container = $(`
        <div class="scp-settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b>Source Custom Params</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <div class="scp-param-group">
                        <div id="scp-param-items" class="scp-param-items"></div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    `);

    PARAMS_CONFIG.forEach(param => {
        const item = $(`
            <div class="scp-param-item">
                <label class="flex-container align_center gap5">
                    <input type="checkbox"
                           id="scp-${param.key}"
                           class="scp-checkbox"
                           ${enabledParams.has(param.key) ? 'checked' : ''}>
                    <span class="scp-param-name" title="${param.description}">
                        ${param.name}
                    </span><span class="fa-solid fa-circle-question note-link-span"></span>
                </label>
            </div>
        `);

        item.find('input').on('change', function () {
            this.checked ? enabledParams.add(param.key) : enabledParams.delete(param.key);
            localStorage.setItem(STORAGE_KEY, JSON.stringify([...enabledParams]));
            updateCounter();
        });

        container.find('#scp-param-items').append(item);
    });

    function updateCounter() {
        container.find('.scp-counter').text(`${enabledParams.size} enabled`);
    }
    updateCounter();

    $('#extensions_settings').append(container);
}

jQuery(() => {
    createSettings();
    eventSource.on(event_types.CHAT_COMPLETION_SETTINGS_READY, processMessages);
});
