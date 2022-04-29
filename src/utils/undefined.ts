/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment */

import type { NullToUndefined } from '~/types.js';

/**
 * Turns the null values of an object into undefined
 */
export function nullToUndefined<V>(value: V): NullToUndefined<V> {
	if (typeof value !== 'object') return value as any; // typeof `null` is an object

	if (value === null) return undefined as any;

	if (Array.isArray(value)) {
		return value.map((item) => nullToUndefined(item)) as any;
	}

	const newObj: any = {};
	for (const k of Object.keys(value as any)) {
		const v: any = (value as any)[k];
		newObj[k as keyof V] = v === null ? undefined : nullToUndefined(v);
	}

	return newObj;
}
