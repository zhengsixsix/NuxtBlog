module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'linebreak-style': ['off', 'windows'],
        'import/order': ['warn', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown', 'object', 'type'],
            alphabetize: { order: 'asc', caseInsensitive: true },
            pathGroups: [
                {
                    pattern: '@/**',
                    group: 'internal',
                },
                {
                    pattern: '@raft/**',
                    group: 'internal',
                },
                {
                    pattern: 'react',
                    group: 'external',
                },
            ],
            pathGroupsExcludedImportTypes: ['react'],
        }],
    },
}