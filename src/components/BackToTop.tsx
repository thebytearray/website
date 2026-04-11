import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
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
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            isIconOnly
            aria-label="Back to top"
            className="bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-colors"
            radius="full"
            size="lg"
            onPress={scrollToTop}
          >
            <ArrowUpIcon size={18} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
