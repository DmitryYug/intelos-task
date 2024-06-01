type TDebounceFn = (arg: string) => void;

export const debounce = (func: TDebounceFn, delay: number): TDebounceFn => {
  let timeoutId: number | null = null;

  return (arg: string) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(arg);
    }, delay);
  };
};
