import { useEffect, useState } from "react";

const useSize = () => {
    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        // Debounce function
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        };

        const debouncedHandleSize = debounce(handleSize, 100);

        window.addEventListener("resize", debouncedHandleSize);
        
        return () => {
            window.removeEventListener("resize", debouncedHandleSize);
        };
    }, []);

    return windowSize;
};

export default useSize;
