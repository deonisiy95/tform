declare const globalThis: {
  l10n(key: string): string;
};

declare function l10n(key: string): string;

declare type TimeoutId = ReturnType<typeof setTimeout>;

declare type TResponse<T> = {ok?: boolean; message?: string} & T;
