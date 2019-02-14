# French Messages for vn-kooch-react-admin

French messages for [vn-kooch-react-admin](https://github.com/marmelab/vn-kooch-react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![vn-kooch-react-admin-demo](https://marmelab.com/vn-kooch-react-admin/img/vn-kooch-react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save vn-kooch-language-persian
```

## Usage

```js
import frenchMessages from 'vn-kooch-language-persian';

const messages = {
    'fr': frenchMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="fr" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).
