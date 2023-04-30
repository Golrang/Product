import { useState } from "react";

export const useSay = () => {
  const [isOpen, setfirst] = useState(false);
  const toggle = () => setfirst((prev) => !prev);
  return { isOpen, toggle };
};
