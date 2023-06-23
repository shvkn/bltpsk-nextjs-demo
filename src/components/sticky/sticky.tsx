'use client';

import React, { PropsWithChildren, useEffect, useLayoutEffect, useRef } from 'react';

export const Sticky: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.top = `${ref.current.offsetTop}px`;
    }
  });

  return (
    <div ref={ref} style={{ position: 'sticky' }}>
      {children}
    </div>
  );
};
