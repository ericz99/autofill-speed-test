import React from 'react';

export default function Button({ type, className, onClick, children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
