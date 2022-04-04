export type NullToUndefined<T> = T extends null
	? undefined
	: {
			[K in keyof T]: NullToUndefined<T[K]>;
	  };
