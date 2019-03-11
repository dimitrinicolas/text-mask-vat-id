import test from 'ava';

import { conformToMask } from 'text-mask-core';

import createVatIdMask from '..';

import values from '../fixtures/test-values.json';

const defaultMask = createVatIdMask();
const localeMask = createVatIdMask({ localeFormat: true });

values.forEach(({ id, formatedResult }) => {
  test(id, t => {
    t.is(conformToMask(id, defaultMask, { guide: false }).conformedValue, id);
    t.is(conformToMask(id, localeMask, { guide: false }).conformedValue, formatedResult);
  });
});

test('unknow country', t => {
  const id = 'XX999X';
  t.is(conformToMask(id, defaultMask, { guide: false }).conformedValue, id);
  t.is(conformToMask(id, localeMask, { guide: false }).conformedValue, 'XX 999X');
});
test('one letter', t => {
  const id = 'X';
  t.is(conformToMask(id, defaultMask, { guide: false }).conformedValue, id);
  t.is(conformToMask(id, localeMask, { guide: false }).conformedValue, id);
});
