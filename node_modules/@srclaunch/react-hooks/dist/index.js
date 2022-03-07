import { useState, useEffect, useRef } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
const noop = () => {
};
function useInterval(callback, delay, immediate) {
  const savedCallback = useRef(noop);
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (!immediate)
      return;
    if (delay === null || delay === false)
      return;
    savedCallback.current();
  }, [immediate]);
  useEffect(() => {
    if (delay === null || delay === false)
      return void 0;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}
export { useDebounce, useInterval, useTitle };
//# sourceMappingURL=index.js.map
