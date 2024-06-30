import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue;
        try {
            const storedValue = localStorage.getItem(item);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error("Failed to parse localStorage value:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            const storedValue = localStorage.getItem(item);
            if (storedValue) {
                setValue(JSON.parse(storedValue));
                updateLocalStorage(JSON.parse(storedValue));
            } else localStorage.removeItem(item);
        } catch (error) {
            console.error("Failed to parse localStorage value:", error);
        }
    }, []);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    };

    return {
        value,
        updateLocalStorage
    };
}
