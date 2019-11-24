import { createContext } from 'react';

export default createContext({
  isRunning: false,
  isOpen: false,
  errorMessage: null,
  setIsOpen: () => {},
  setRunningStatus: () => {},
  setErrorMessage: error => {}
});
