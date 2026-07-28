import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowUpIcon } from "@/components/icons";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-40"
          exit={{ opacity: 0, scale: 0.96 }}
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            aria-label="Back to top"
            className="flex items-center justify-center w-10 h-10  bg-foreground text-background shadow-lg hover:opacity-90 transition-opacity"
            onClick={scrollToTop}
            type="button"
          >
            <ArrowUpIcon size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
