import {useEffect, useState} from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const onScroll = () => setScrollY((window.scrollY * 100) / window.innerHeight);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, true);
        return window.removeEventListener('scroll', onScroll);
    }, []);

    return {scrollY};
};
