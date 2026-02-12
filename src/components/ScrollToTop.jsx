import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, state } = useLocation();

    useEffect(() => {
        // If there is no scrollTo state (used for anchors like 'faq'), scroll to top
        if (!(state && state.scrollTo)) {
            window.scrollTo(0, 0);
        }
    }, [pathname, state]);

    return null;
};

export default ScrollToTop;
