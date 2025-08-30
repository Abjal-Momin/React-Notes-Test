import { useEffect, useState } from "react";

export const generateInitials = (name) => {
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
};
export const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
};

export const formatTime = (date) => {
  const d = new Date(date);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};
