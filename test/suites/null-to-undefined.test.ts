/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import * as fc from 'fast-check';
import { traverse } from 'object-traversal';
import { expect, test } from 'vitest';

import { nullToUndefined } from '~/index.js';

test('null to undefined', () => {
	expect(nullToUndefined([null, 2, 'string'])).toEqual([
		undefined,
		2,
		'string',
	]);

	expect(nullToUndefined([null, 2, { foo: 'string', bar: null }])).toEqual([
		undefined,
		2,
		{
			foo: 'string',
			bar: undefined,
		},
	]);

	expect(nullToUndefined({ a: null, b: undefined, c: 2 })).toEqual({
		a: undefined,
		b: undefined,
		c: 2,
	});

	expect(nullToUndefined(2)).toEqual(2);

	expect(nullToUndefined(null)).toEqual(undefined);

	fc.assert(
		fc.property(fc.jsonValue(), (value) => {
			if (typeof value === 'object') {
				if (value === null) {
					expect(nullToUndefined(value)).toEqual(undefined);
				} else {
					traverse(nullToUndefined(value), ({ value }) => {
						expect(value).to.not.equal(null);
					});
				}
			}
		})
	);
});
