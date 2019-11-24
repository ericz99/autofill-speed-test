/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react';

import Context from './context';

export default function GlobalState({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setRunningStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleHandler = () => {
    setIsOpen(!isOpen ? true : false);
    setRunningStatus(true);
  };

  const toggleRunningHandler = () => {
    setRunningStatus(isRunning ? false : true);
  };

  const errorHandler = ({ error }) => {
    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        isRunning,
        isOpen,
        errorMessage,
        setIsOpen: toggleHandler,
        setRunningStatus: toggleRunningHandler,
        setErrorMessage: errorHandler
      }}
    >
      {children}
    </Context.Provider>
  );
}
