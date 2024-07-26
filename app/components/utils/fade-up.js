import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const FadeUp = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls] )


    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0.01, y: 20 },
                    visible: {  opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                
                transition={{ 
                    opacity: { duration: 0.5, ease: "easeIn" },
                    y: { duration: 0.5, ease: "easeIn" },
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default FadeUp;
