import { useState, useContext } from 'react';

import Context from '../context/context';

export default function useForm(props) {
  const { setRunningStatus } = useContext(Context);
  const [inputs, setInputs] = useState({});

  const onSubmit = e => {
    e.preventDefault();

    // # regardless about payment submit when we hit submit timer should stop
    setRunningStatus();

    // # get card element
    const cardElement = props.elements.getElement('card');

    // # create payment method (this is fake)
    props.stripe
      .createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: { name: 'Jenny Rosen' }
      })
      .then(({ paymentMethod }) => {
        // # set submit status
        console.log('Received Stripe PaymentMethod:', paymentMethod);

        // # check if paymentmethod not undefined
        if (paymentMethod !== undefined) {
          setTimeout(() => {
            // # reload browser to reset page
            window.location.reload(false);
          }, 5000);
        }
      });
  };

  const onChange = e => {
    e.persist();

    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  return {
    inputs,
    onSubmit,
    onChange
  };
}
