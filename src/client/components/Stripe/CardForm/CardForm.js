import React, { useContext } from 'react';
import { injectStripe } from 'react-stripe-elements';

import CardSection from '../CardSection';
import Alert from '../../Common/Alert';
import { useForm } from '../../../hooks';
import Context from '../../../context/context';

const CardForm = props => {
  const context = useContext(Context);
  const { errorMessage, setErrorMessage } = context;
  const { onSubmit } = useForm(props);

  const onChangeHandler = error => {
    if (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="stripe--form">
      <CardSection onChange={onChangeHandler} />
      <Alert className="error" role="alert">
        {errorMessage}
      </Alert>
      <button type="submit" className="submitBtn">
        Click here again
      </button>
    </form>
  );
};

export default injectStripe(CardForm);
