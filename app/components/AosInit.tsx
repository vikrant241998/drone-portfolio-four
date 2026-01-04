"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return null;
};

export default AosInit;