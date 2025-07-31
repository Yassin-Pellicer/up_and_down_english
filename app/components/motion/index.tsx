import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InViewSection = ({ children, triggerKey }: { children: React.ReactNode; triggerKey?: any }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, filter: "blur(0px)", y: 0 });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (triggerKey !== undefined && inView) {
      controls.set({ opacity: 0, filter: "blur(20px)", y: 100 });
      controls.start({ opacity: 1, filter: "blur(0px)", y: 0 });
    }
  }, [triggerKey]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)", y: 100 }}
      animate={controls}
      transition={{
        duration: triggerKey !== undefined ? 0.6 : 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};