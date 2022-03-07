import { useEffect, useState } from 'react';
export function useInput(defaultValue, onChange) {
    // State and setters for debounced value
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        if (onChange)
            onChange(value);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => { };
    }, [value]);
    return value;
}
//# sourceMappingURL=use-input.js.map