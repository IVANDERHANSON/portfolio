import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

export default function FadeUpAnimation({ children }: { children: React.ReactNode }) {
    const Animate = useAnimation();
    const [Ref, InView] = useInView({
        threshold: 0.25,
        triggerOnce: false,
    });

    const ElementRef = useRef<HTMLDivElement>(null);
    const [ScrollDirection, SetScrollDirection] = useState<"up" | "down" | null>(null);

    useEffect(() => {
        let LastScrollY = window.scrollY;

        const HandleScroll = () => {
            const CurrentScrollY = window.scrollY;
            SetScrollDirection(CurrentScrollY > LastScrollY ? "down" : "up");
            LastScrollY = CurrentScrollY;
        };

        window.addEventListener("scroll", HandleScroll);
        return () => window.removeEventListener("scroll", HandleScroll);
    }, []);

    useEffect(() => {
        if (InView && ScrollDirection === "down") {
            Animate.start("visible");
        } else if (!InView && ScrollDirection === "up") {
            const IsElementExists = ElementRef.current;
            if (IsElementExists) {
                const Rect = IsElementExists.getBoundingClientRect();
                const IsBelowViewport = Rect.bottom > window.innerHeight;
                if (IsBelowViewport) {
                    Animate.start("hidden");
                }
            }
        }
    }, [InView, ScrollDirection, Animate]);

    return (
        <motion.div
            ref={(Node) => {
                Ref(Node);
                ElementRef.current = Node;
            }}
            initial="hidden"
            animate={Animate}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    )
}