// prettier-ignore
export declare type NullToUndefined<T> =
	T extends Date ? T :
	T extends Function ? T : // eslint-disable-line @typescript-eslint/ban-types
	T extends null ? undefined :
	{ [K in keyof T]: NullToUndefined<T[K]> };
