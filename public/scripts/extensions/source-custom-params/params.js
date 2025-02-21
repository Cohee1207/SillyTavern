export const PARAMS_CONFIG = [
    {
        key: 'prefix',
        name: 'Prefix',
        description: 'Enable prefix=true for last assistant message\nApplicable to custom/deepseek sources',
        condition: (apiType, messages, msg, idx) =>
            ['openai', 'deepseek'].includes(apiType) &&
            idx === messages.length - 1 &&
            msg.role === 'assistant',
        apply: msg => msg.prefix = true
    }
];
