"use client"
import { useState, useEffect } from "react";

const LoopText = ({ text, speed = 100, delay = 1000 }: {
  text: string,
  speed?: number,
  delay?: number
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        } else {
          setIsDeleting(true);
          setTimeout(() => { }, delay);
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(interval);
  }, [index, isDeleting, text, speed, delay]);

  return <h1>{displayedText}</h1>;
};

export default LoopText;