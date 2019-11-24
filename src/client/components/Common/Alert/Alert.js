import React from 'react';

export default function Alert({ className, role, children }) {
  return (
    <div className={className} role={role}>
      {children}
    </div>
  );
}
