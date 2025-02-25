import { useEffect, useRef } from "react";

function useFadeIn(options = { threshold: 0.1 }) {
  const fadableRefs = useRef(new Set()); // Use Set for unique refs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // One-time animation
          }
        });
      },
      {
        root: null, // Default to viewport
        rootMargin: "0px",
        threshold: options.threshold, // Customizable threshold
      }
    );

    fadableRefs.current.forEach((el) => observer.observe(el));

    return () => {
      fadableRefs.current.forEach((el) => observer.unobserve(el));
      fadableRefs.current.clear(); // Clear on unmount
    };
  }, [options.threshold]); // Re-run if threshold changes

  const addToRefs = (el) => {
    if (el && el.classList.contains("fadable") && !fadableRefs.current.has(el)) {
      fadableRefs.current.add(el);
    }
  };

  return addToRefs;
}

export default useFadeIn;