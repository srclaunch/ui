import { PaymentMethod, User } from '@srclaunch/types';
import {
  getPaymentMethods,
  getSubscriptions,
  useDispatch,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Size } from '../../../types';
import { Button } from '../../forms/buttons/Button';
import { CloseButton } from '../../modals/CloseButton';
import { ProgressSpinner } from '../../progress/ProgressSpinner';

// const stripePromise = loadStripe(config.stripe.publicKey);

type PaymentMethodModalProps = {
  readonly paymentMethods: readonly PaymentMethod[];
  readonly premium: User['membership'];
  readonly visible: boolean;
};

export const PaymentMethodModal = memo(
  ({
    paymentMethods,
    premium,
    visible,
  }: PaymentMethodModalProps): ReactElement => {
    const dispatch = useDispatch();

    // const account_id = useSelector(state => state.app.paymentMethodModalData.accountId);
    // const accountSync = state.app.paymentMethodModalData.accountSync,
    //   account_id,
    //   active_budget_id,
    //   paymentMethods: state.paymentMethods.entities,
    //   premium: state.app.paymentMethodModalData.premium,
    //   subscription: state.subscriptions.entities,
    //   visible: state.app.paymentMethodModalVisible,

    // const [hasError, setHasError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState<
    //   string | undefined | React.ReactNode
    // >(undefined);
    const [inProgress, setInProgress] = useState(false);
    const [showAddPaymentForm, setShowAddPaymentForm] = useState(false);
    const [reviewOrder, setReviewOrder] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
      null,
    );
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    // const [plaidToken, setPlaidToken] = useState<string | undefined>();

    useEffect(() => {
      dispatch(getPaymentMethods());
    }, []);
    const confirmPurchase = async () => {
      if (paymentMethod) {
        setInProgress(true);

        // const newSubscription = await SubscriptionService.create({
        //   account_id: accountSync ? account_id : undefined,
        //   payment_method_id: paymentMethod.id,
        //   product_id: accountSync
        //     ? ProductPlans.AccountSync
        //     : ProductPlans.PremiumMembership,
        // });

        setPaymentSuccess(true);
        dispatch(getSubscriptions());

        setInProgress(false);
      }
    };

    return (
      <Container visible={visible}>
        <Content visible={visible}>
          <Close>
            <CloseButton
              onClick={() => {
                // dispatch(hideSubscriptionBillingModal());
                // dispatch(hidePaymentMethodModal());
                setReviewOrder(false);
                setPaymentSuccess(false);
                setPaymentMethod(null);
              }}
            />
          </Close>

          {paymentSuccess && (
            <PaymentSuccess>
              <h3>Payment Success</h3>
              <p>
                <b>
                  Thank you for subscribing to{' '}
                  {/* {accountSync ? 'Account Sync' : 'BudgetBloom Premium'}. */}
                </b>
              </p>

              {/* {accountSync && (
              <p>
                You can now link your account with Plaid, and your account
                balances and transactions will automatically be imported. Please
                allow a few minutes for this data to be imported.
              </p>
            )} */}

              {/* {plaidToken && subscription && (
              <PlaidIntegration>
                <LinkAccountButton onSuccess={onPlaidSuccess} token={plaidToken} />
              </PlaidIntegration>
            )} */}

              <Button
                onClick={() => {
                  // dispatch(hideSubscriptionBillingModal());
                  // dispatch(hidePaymentMethodModal());
                  setReviewOrder(false);
                  setPaymentSuccess(false);
                  setPaymentMethod(null);
                }}
              >
                Close
              </Button>
            </PaymentSuccess>
          )}

          {reviewOrder && paymentMethod && !paymentSuccess ? (
            <>
              <h3>Review order</h3>

              {/* {hasError && <Error>{errorMessage}</Error>} */}

              <ReviewOrder>
                {premium && (
                  <Summary>
                    <b>$14.99/a month</b> will be billed now and every month on{' '}
                    <b>???</b> using your{' '}
                    <b className="capitalize">{paymentMethod?.brand}</b> ending
                    in <b>{paymentMethod.last_four_digits}</b>.
                  </Summary>
                )}

                {/* {accountSync && (
                <Summary>
                  <b>$1.49/a month</b> will be billed now and every every month
                  on <b>???</b> using your{' '}
                  <b className="capitalize">{paymentMethod.brand}</b> ending in{' '}
                  <b>{paymentMethod.last_four_digits}</b>.
                </Summary>
              )} */}

                {inProgress && (
                  <Progress>
                    <ProgressSpinner />
                  </Progress>
                )}

                <Actions>
                  <Button
                    disabled={inProgress}
                    id="cancel"
                    onClick={() => {
                      // dispatch(hideSubscriptionBillingModal());
                      setReviewOrder(false);
                      setPaymentMethod(null);
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    // disabled={inProgress || hasError}
                    id="confirm"
                    onClick={confirmPurchase}
                  >
                    Confirm order
                  </Button>
                </Actions>
              </ReviewOrder>
            </>
          ) : (
            <>
              {paymentMethods.length === 0 ||
              showAddPaymentForm ||
              (premium === null && !paymentSuccess) ? (
                <>
                  <h3>Payment</h3>
                  <PaymentForm>
                    <h4>Add a Credit Card</h4>

                    {/* <Elements stripe={stripePromise}>
                    <AddPaymentMethodForm
                      cancel={() => {
                        setShowAddPaymentForm(false);

                        if (!premium && !accountSync) {
                          // dispatch(hidePaymentMethodModal());
                        }
                      }}
                      paymentMethodsCount={paymentMethods.length}
                    />
                  </Elements> */}
                  </PaymentForm>
                </>
              ) : !paymentSuccess && !paymentMethod ? (
                <PaymentMethods>
                  <h4>Select a payment method</h4>

                  {paymentMethods.map(paymentMethod => {
                    return (
                      <PaymentMethodItem key={paymentMethod.id}>
                        <UseCard>
                          <Button
                            onClick={() => {
                              setPaymentMethod(paymentMethod);
                              setReviewOrder(true);
                            }}
                            size={Size.Small}
                          >
                            Use this card
                          </Button>
                        </UseCard>
                        <Brand>
                          <img
                            alt={paymentMethod.brand}
                            src={`/stripe_networks/${paymentMethod.brand}.svg`}
                          />
                          <span>
                            {paymentMethod.brand} ending in{' '}
                            {paymentMethod.last_four_digits}
                          </span>
                        </Brand>
                        <Expiry>
                          Expires{' '}
                          <span>
                            {paymentMethod.exp_month}/{paymentMethod.exp_year}
                          </span>
                        </Expiry>
                      </PaymentMethodItem>
                    );
                  })}

                  {!showAddPaymentForm && (
                    <Button
                      id="show-add-form"
                      onClick={() => {
                        setShowAddPaymentForm(true);
                      }}
                    >
                      Add new card
                    </Button>
                  )}
                </PaymentMethods>
              ) : null}
            </>
          )}
        </Content>
      </Container>
    );
  },
);

const Container = styled.div<{
  readonly visible?: boolean;
}>`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};
`;

const Close = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1000;
`;

const Content = styled.div<{
  readonly darkMode?: boolean;
  readonly visible?: boolean;
}>`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 15%;
  transform: translate(0, 1900px);
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  h3 {
    margin: 0 0 25px 0;
  }

  ${props =>
    props.visible &&
    css`
      transform: translate(0, 0);

      @media (min-width: 992px) {
        transform: translate(-50%, -50%);
      }
    `};
  /* 
  @media (min-width: 992px) {
    border-radius: 15px;
    bottom: auto;
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 690px;
  } */
`;

const PaymentForm = styled.div<{
  readonly darkMode?: boolean;
}>`
  background: #f2f2f2;
  border-radius: 15px;
  padding: 25px;

  h4 {
    margin: 0 0 25px 0;
  }
`;

const PaymentMethods = styled.div`
  h4 {
    margin: 0 0 25px 0;
  }

  button#show-add-form {
    margin: 20px 0 0 0;
  }
`;

const PaymentMethodItem = styled.div`
  background: white;
  border: 1px solid #ddd;
  line-height: 26px;
  margin-bottom: 6px;
  padding: 15px;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;

const UseCard = styled.div`
  float: right;
`;

const Brand = styled.div`
  float: left;
  text-transform: capitalize;

  img {
    height: 16px;
    margin: 0 6px 0 0;
    position: relative;
    top: 3px;
  }

  span {
    color: #3b3b3b;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Expiry = styled.div`
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 600;
  float: left;
  line-height: 27px;
  margin: 0 25px;
`;

const ReviewOrder = styled.div`
  padding: 25px 0 0 0;

  button#confirm {
    margin: 0 0 0 0;
  }

  button#cancel {
    margin: 0 15px 0 0;
  }
`;

const Summary = styled.div`
  color: #8b8b8b;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin: 0 0 50px 0;

  b {
    color: #1b1b1b;

    &.capitalize {
      text-transform: capitalize;
    }
  }
`;

const PaymentSuccess = styled.div`
  p {
    line-height: 26px;
    margin: 0 0 15px 0;
  }

  button {
    margin: 35px 15px 0 0;
  }
`;

const Actions = styled.div`
  float: left;
`;

const Progress = styled.div`
  float: right;
  padding: 0;
`;

// const Error = styled.div`
//   background: rgba(255, 65, 54, 0.1);
//   border-radius: 8px;
//   color: rgba(255, 65, 54, 1);
//   font-size: 13px;
//   font-weight: 600;
//   margin: 0 0 5px 0;
//   padding: 15px 20px;
// `;
