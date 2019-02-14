# English Messages for ra-tree

English messages for `ra-tree`, an addon providing tree components for [vn-kooch-react-admin](https://github.com/marmelab/vn-kooch-react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save vn-kooch-language-english vn-kooch-tree-language-english
```

## Usage

```js
import englishMessages from 'vn-kooch-language-english';
import treeEnglishMessages from 'vn-kooch-tree-language-english';
import { mergeTranslations } from 'vn-kooch-react-admin';

const messages = {
    'en': mergeTranslations(englishMessages, treeEnglishMessages),
};

<Admin locale="en" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).
