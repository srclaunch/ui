// import { PaymentMethodService } from "@srclaunch/http-services";
import {
  getPaymentMethods,
  useDispatch,
} from '@srclaunch/web-application-state';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentMethod, StripeError } from '@stripe/stripe-js';
import { memo, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../forms/buttons/Button';
import { ProgressSpinner } from '../../progress/ProgressSpinner';

export const AddPaymentMethodForm = memo(
  ({
    cancel,
    paymentMethodsCount,
  }: {
    readonly cancel: () => unknown;
    readonly paymentMethodsCount: number;
  }): ReactElement => {
    const dispatch = useDispatch();

    const [hasError, setHasError] = useState(false);
    const [inProgress, setInProgress] = useState(false);
    const [errorMessage, setErrorMessage] = useState<
      string | undefined | React.ReactNode
    >('');

    // const stripe = useStripe();
    // const elements = useElements();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      setInProgress(true);
      // Block native form submission.
      e.preventDefault();

      // if (!stripe || !elements) {
      //   // Stripe.js has not loaded yet. Make sure to disable
      //   // form submission until Stripe.js has loaded.
      //   return;
      // }

      // // Get a reference to a mounted CardElement. Elements knows how
      // // to find your CardElement because there can only ever be one of
      // // each type of element.
      // const cardElement = elements.getElement(CardElement);

      // // Use your card Element with other Stripe.js APIs
      // const result = await stripe.createPaymentMethod({
      //   // @ts-ignore
      //   card: cardElement,
      //   type: 'card',
      // });

      // const {
      //   error,
      //   paymentMethod,
      // }: {
      //   error?: StripeError;
      //   paymentMethod?: PaymentMethod;
      // } = result;

      // if (error) {
      //   setHasError(true);
      //   setErrorMessage(error?.message);
      // } else if (paymentMethod && paymentMethod.id) {
      // const newPaymentMethod = await PaymentMethodService.create({
      //   brand: paymentMethod.card?.brand,
      //   country: paymentMethod.card?.country,
      //   expMonth: paymentMethod.card?.exp_month,
      //   expYear: paymentMethod.card?.exp_year,
      //   lastFourDigits: paymentMethod.card?.last4,
      //   stripeId: paymentMethod.id,
      //   threeDSecureUsageSupported:
      //     paymentMethod.card?.three_d_secure_usage?.supported,
      //   type: paymentMethod.card?.funding,
      // });

      //   dispatch(getPaymentMethods());
      //   cancel();
      // }

      setInProgress(false);
    };

    return (
      <form onSubmit={handleFormSubmit}>
        {/* {hasError && <Error>{errorMessage}</Error>} */}
        {/* 
        <CardInput disabled={inProgress}>
          <CardElement
            onChange={() => {
              setHasError(false);
              setInProgress(false);
              setErrorMessage('');
            }}
            options={{
              iconStyle: 'solid',
              style: {
                base: {
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                  color: '#424770',
                  fontSize: '16px',
                },
                invalid: {
                  color: '#9e2146',
                },
                // base: {
                //   iconColor: '#c4f0ff',
                //   color: '#fff',
                //   fontWeight: '500',
                //   fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                //   fontSize: '16px',
                //   fontSmoothing: 'antialiased',
                //   ':-webkit-autofill': { color: '#fce883' },
                //   '::placeholder': { color: '#87bbfd' }
                // },
                // invalid: {
                //   iconColor: '#ffc7ee',
                //   color: '#ffc7ee'
                // }
              },
            }}
          />
        </CardInput> */}

        {inProgress && (
          <Progress>
            <ProgressSpinner />
          </Progress>
        )}

        {paymentMethodsCount > 0 && (
          <GoBack>
            <Button
              events={{
                mouse: {
                  onClick: cancel,
                },
              }}
              states={{
                state: {
                  disabled: inProgress,
                },
              }}
            >
              Cancel
            </Button>
          </GoBack>
        )}

        {/* <Button disabled={!stripe || inProgress} onClick={handleFormSubmit}>
        Add card
      </Button> */}
      </form>
    );
  },
);

const CardInput = styled.div<{
  readonly disabled: boolean;
}>`
  background: white;
  box-shadow: 0 0 0 transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #5b5b5b;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  margin: 0 0 25px 0;
  padding: 9px;
  transition: border 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border: 1px solid #bbb;
  }

  &:focus {
    border: 1px solid #0074d9 !important;
  }

  &::placeholder {
    color: #9b9b9b;
  }

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `};
`;

const Progress = styled.div`
  float: right;
  padding: 0;
`;

const GoBack = styled.div`
  float: right;
`;
