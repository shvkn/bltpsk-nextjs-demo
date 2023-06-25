import React from 'react';

import { Spinner } from '@/components/ui/spinner/spinner';

const Loading = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '20',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: '#000',
          opacity: '.6',
        }}
      ></div>
      <Spinner />
    </div>
  );
};

export default Loading;
