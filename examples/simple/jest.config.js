const path = require('path');

module.exports = {
    setupFiles: ['<rootDir>/src/test/configureEnzyme.js'],
    moduleNameMapper: {
        'vn-kooch-core': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-core',
            'src'
        ),
        'vn-kooch-ui-materialui': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-ui-materialui',
            'src'
        ),
        'vn-kooch-react-admin': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-react-admin',
            'src'
        ),
        'vn-kooch-data-fakerest': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-data-fakerest',
            'src'
        ),
        'vn-kooch-input-rich-text': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-input-rich-text',
            'src'
        ),
        'vn-kooch-tree-core': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-tree-core',
            'src'
        ),
        'vn-kooch-tree-ui-antdui': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-tree-ui-antdui',
            'src'
        ),
        'vn-kooch-tree-language-english': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'vn-kooch-tree-language-english'
        ),
        'ra-tree-language-french': path.join(
            __dirname,
            '..',
            '..',
            'packages',
            'ra-tree-language-french'
        ),
    }
};
