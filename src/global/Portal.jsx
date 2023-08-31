import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from "react-use";

const Portal = ({ selector, children }) => {
  const elementRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    elementRef.current = document.querySelector(selector);
  }, []);

  if (!elementRef.current) return null;

  return createPortal(children, elementRef.current);
};

export default Portal;
