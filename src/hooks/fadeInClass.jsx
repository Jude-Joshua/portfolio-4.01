import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function FadeInClass() {
    const location = useLocation();

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-section, .fade-section-down');
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px 80px 0px',
            threshold: 0.08,
        });

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [location.pathname]);
}
