# text-mask-vat-id

## [Example](https://dimitrinicolas.github.io/text-mask-vat-id/example/)

Demo available here: [dimitrinicolas.github.io/text-mask-vat-id/example](https://dimitrinicolas.github.io/text-mask-vat-id/example/)

## Installation

```console
npm i text-mask-vat-id
```

## Usage

I recommend you to add an uppercase pipe function to text-mask component:

```js
function upperCasePipe(value) {
  return value.toUpperCase();
}
```

### With React.js

```jsx
import React from 'react'
import MaskedInput from 'react-text-mask'
import createVatIdMask from 'text-mask-vat-id';

const mask = createVatIdMask();

export default () => (
  <MaskedInput
    mask={mask}
    pipe={value => value.toUpperCase()} />
);
```

### In Vanilla JS

```html
<script src="./node_modules/vanilla-text-mask/dist/vanillaTextMask.js"></script>
<script src="./node_modules/text-mask-vat-id/dist/text-mask-vat-id.umd.min.js"></script>
<script>
  function upperCasePipe(value) {
    return value.toUpperCase();
  }

  vanillaTextMask.maskInput({
    inputElement: document.getElementById('vat-input'),
    mask: generateVatIdMask(),
    pipe: upperCasePipe
  });
});
</script>
  ```

## Options

You can pass options as an object when creating text mask:

```js
const mask = createVatIdMask({
  /** options */
});
```

- `localeFormat` (default: `false`): If the mask should add separation
characters (` `, `-`, `.` and `/`) to the VAT ID. E.g.: `"FR19845015858"` would
become `"FR 19 845 015 858"`.

## Build

Compile with Rollup:

```console
npm run build
```

Build and test:

```console
npm test
```

## Source

- [en.wikipedia.org/wiki/VAT_identification_number](https://en.wikipedia.org/wiki/VAT_identification_number)
- [www.gov.uk/guidance/vat-eu-country-codes-vat-numbers-and-vat-in-other-languages](https://www.gov.uk/guidance/vat-eu-country-codes-vat-numbers-and-vat-in-other-languages)

## Related

- [`text-mask`](https://github.com/text-mask/text-mask) - Input mask for React, Angular, Ember, Vue, & plain JavaScript

## License

This project is licensed under the [MIT license](LICENSE).
