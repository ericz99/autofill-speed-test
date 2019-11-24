import React, { useRef, useContext } from 'react';
import { hot } from 'react-hot-loader/root';
import { Elements } from 'react-stripe-elements';

import Timer from './components/Timer';
import CardForm from './components/Stripe/CardForm';
import Button from './components/Common/Button';

import Context from './context/context';

const App = () => {
  const { isOpen, setIsOpen } = useContext(Context);
  const refElem = useRef(null);

  const openCheckoutForm = e => {
    e.preventDefault();
    // # toggle open form + run the timer
    setIsOpen();

    if (!isOpen && refElem.current !== null) {
      // # set display block
      refElem.current.style.display = 'block';
    } else {
      // # set display none
      refElem.current.style.display = 'none';
    }
  };

  return (
    <div id="wrapper">
      <Timer />
      <div className="sample--text">
        <div className="header">
          The
          <span className="bold">Fastest</span>
          Practice Site
        </div>

        <div className="text">Need to test how fast you autofill stripe??? Click below!</div>
      </div>
      <div className="form" ref={refElem}>
        <Elements>
          <CardForm />
        </Elements>
      </div>
      <div className="controller">
        <Button type="button" className="clickHereBtn" onClick={e => openCheckoutForm(e)}>
          Click Here Now
        </Button>
      </div>
    </div>
  );
};

export default hot(App);
