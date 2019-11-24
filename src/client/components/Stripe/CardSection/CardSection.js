import React from 'react';
import { CardElement } from 'react-stripe-elements';

export default function CardSection({ onChange }) {
  return (
    <label htmlFor="cardElement">
      Card details
      <CardElement
        onChange={onChange}
        style={{
          base: {
            fontSize: '18px',
            color: '#ffffff',
            '::placeholder': {
              color: '#CFD7E0'
            }
          }
        }}
      />
    </label>
  );
}
