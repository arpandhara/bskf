import { useEffect, useRef } from "react";
import anime from "animejs";

const StickyDonateButton = () => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const animRef = useRef<anime.AnimeInstance | null>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const placeholder = document.getElementById("hero-donate-placeholder");
        
        if (!button || !placeholder) return;

        const setupAnimation = () => {
            const rect = placeholder.getBoundingClientRect();
            // Since we are likely at scroll 0 when this runs, rect is accurate relative to viewport
            const startBottom = window.innerHeight - rect.bottom;
            const startRight = window.innerWidth - rect.right;
            
            // Set initial state
            button.style.bottom = `${startBottom}px`;
            button.style.right = `${startRight}px`;
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#000000";
            
            if (animRef.current) animRef.current.pause();
            
            // Create the animation timeline
            animRef.current = anime({
                targets: button,
                bottom: 20,
                right: 20,
                backgroundColor: "#4ADE80",
                color: "#0D1B0D",
                easing: 'linear',
                duration: 100, // Duration doesn't matter much as we'll scrub it
                autoplay: false
            });
        };

        // Slight delay to ensure DOM is ready
        setTimeout(setupAnimation, 100);

        const handleScroll = () => {
            if (!animRef.current) return;
            // Define scroll range over which animation happens
            const maxScroll = 500;
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            let progress = scrollY / maxScroll;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            
            // Scrub the animation
            animRef.current.seek(animRef.current.duration * progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", setupAnimation);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setupAnimation);
        };
    }, []);

    return (
        <a 
            ref={buttonRef}
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6QO1IkHAAd0bProH7uD6s-BUClFaFzvZUIKGgZzqkiWK--g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 font-poppins font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap rounded-full px-8 py-4"
        >
            <span className="relative z-10">Donate Now</span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </a>
    );
};

export default StickyDonateButton;
