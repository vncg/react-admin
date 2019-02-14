# English Messages for vn-kooch-react-admin

English messages for [vn-kooch-react-admin](https://github.com/marmelab/vn-kooch-react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![vn-kooch-react-admin-demo](https://marmelab.com/vn-kooch-react-admin/img/vn-kooch-react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save vn-kooch-language-english
```

## Usage

```js
import englishMessages from 'vn-kooch-language-english';

const messages = {
    'en': englishMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="en" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).