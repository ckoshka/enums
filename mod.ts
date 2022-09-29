export type Result<T, Err> = {
	err: Err;
	ok: null;
} | {
	err: null;
	ok: T;
};

export type Option<T> = {
	none: false;
	some: T;
} | {
	none: true;
	some: null;
};

export const Result = <T, E>() => ({
	err: <E>(err: E): Result<T, E> => ({ err, ok: null }),
	ok: (result: T): Result<T, E> => ({ err: null, ok: result }),
});

export const Option = <T>() => ({
	none: (): Option<T> => ({ none: true, some: null }),
	some: (value: T): Option<T> => ({ none: false, some: value }),
});
