import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

export default function FadeUpAnimation({ children }: { children: React.ReactNode }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.25,
        triggerOnce: false,
    });

    const elementRef = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (inView && scrollDirection === "down") {
            controls.start("visible");
        } else if (!inView && scrollDirection === "up") {
            const el = elementRef.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                const isBelowViewport = rect.bottom > window.innerHeight;
                if (isBelowViewport) {
                    controls.start("hidden");
                }
            }
        }
    }, [inView, scrollDirection, controls]);

    return (
        <motion.div
            ref={(node) => {
                ref(node);
                elementRef.current = node;
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    )
}