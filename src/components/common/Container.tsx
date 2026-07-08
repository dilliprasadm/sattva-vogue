import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-tablet lg:px-margin-desktop ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
