import React, { useState } from 'react';

const Hover = ({ children, className }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={ className }
      onMouseEnter={ () => setHovered(true) }
      onMouseLeave={ () => setHovered(false) }
    >
      { children(hovered) }
    </div>
  );
};

export default Hover;
