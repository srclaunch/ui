import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getPaymentMethods, getSubscriptions, useDispatch, } from '@srclaunch/web-application-state';
import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Size } from '../../../types';
import { Button } from '../../forms/buttons/Button';
import { CloseButton } from '../../modals/CloseButton';
import { ProgressSpinner } from '../../progress/ProgressSpinner';
export const PaymentMethodModal = memo(({ paymentMethods, premium, visible, }) => {
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
    const [paymentMethod, setPaymentMethod] = useState(null);
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
    return (_jsx(Container, { visible: visible, children: _jsxs(Content, { visible: visible, children: [_jsx(Close, { children: _jsx(CloseButton, { onClick: () => {
                            // dispatch(hideSubscriptionBillingModal());
                            // dispatch(hidePaymentMethodModal());
                            setReviewOrder(false);
                            setPaymentSuccess(false);
                            setPaymentMethod(null);
                        } }, void 0) }, void 0), paymentSuccess && (_jsxs(PaymentSuccess, { children: [_jsx("h3", { children: "Payment Success" }, void 0), _jsx("p", { children: _jsxs("b", { children: ["Thank you for subscribing to", ' '] }, void 0) }, void 0), _jsx(Button, { onClick: () => {
                                // dispatch(hideSubscriptionBillingModal());
                                // dispatch(hidePaymentMethodModal());
                                setReviewOrder(false);
                                setPaymentSuccess(false);
                                setPaymentMethod(null);
                            }, children: "Close" }, void 0)] }, void 0)), reviewOrder && paymentMethod && !paymentSuccess ? (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Review order" }, void 0), _jsxs(ReviewOrder, { children: [premium && (_jsxs(Summary, { children: [_jsx("b", { children: "$14.99/a month" }, void 0), " will be billed now and every month on", ' ', _jsx("b", { children: "???" }, void 0), " using your", ' ', _jsx("b", { className: "capitalize", children: paymentMethod?.brand }, void 0), " ending in ", _jsx("b", { children: paymentMethod.last_four_digits }, void 0), "."] }, void 0)), inProgress && (_jsx(Progress, { children: _jsx(ProgressSpinner, {}, void 0) }, void 0)), _jsxs(Actions, { children: [_jsx(Button, { disabled: inProgress, id: "cancel", onClick: () => {
                                                // dispatch(hideSubscriptionBillingModal());
                                                setReviewOrder(false);
                                                setPaymentMethod(null);
                                            }, children: "Cancel" }, void 0), _jsx(Button
                                        // disabled={inProgress || hasError}
                                        , { 
                                            // disabled={inProgress || hasError}
                                            id: "confirm", onClick: confirmPurchase, children: "Confirm order" }, void 0)] }, void 0)] }, void 0)] }, void 0)) : (_jsx(_Fragment, { children: paymentMethods.length === 0 ||
                        showAddPaymentForm ||
                        (premium === null && !paymentSuccess) ? (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Payment" }, void 0), _jsx(PaymentForm, { children: _jsx("h4", { children: "Add a Credit Card" }, void 0) }, void 0)] }, void 0)) : !paymentSuccess && !paymentMethod ? (_jsxs(PaymentMethods, { children: [_jsx("h4", { children: "Select a payment method" }, void 0), paymentMethods.map(paymentMethod => {
                                return (_jsxs(PaymentMethodItem, { children: [_jsx(UseCard, { children: _jsx(Button, { onClick: () => {
                                                    setPaymentMethod(paymentMethod);
                                                    setReviewOrder(true);
                                                }, size: Size.Small, children: "Use this card" }, void 0) }, void 0), _jsxs(Brand, { children: [_jsx("img", { alt: paymentMethod.brand, src: `/stripe_networks/${paymentMethod.brand}.svg` }, void 0), _jsxs("span", { children: [paymentMethod.brand, " ending in", ' ', paymentMethod.last_four_digits] }, void 0)] }, void 0), _jsxs(Expiry, { children: ["Expires", ' ', _jsxs("span", { children: [paymentMethod.exp_month, "/", paymentMethod.exp_year] }, void 0)] }, void 0)] }, paymentMethod.id));
                            }), !showAddPaymentForm && (_jsx(Button, { id: "show-add-form", onClick: () => {
                                    setShowAddPaymentForm(true);
                                }, children: "Add new card" }, void 0))] }, void 0)) : null }, void 0))] }, void 0) }, void 0));
});
const Container = styled.div `
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

  ${props => props.visible &&
    css `
      opacity: 1;
      pointer-events: auto;
    `};
`;
const Close = styled.div `
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1000;
`;
const Content = styled.div `
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

  ${props => props.visible &&
    css `
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
const PaymentForm = styled.div `
  background: #f2f2f2;
  border-radius: 15px;
  padding: 25px;

  h4 {
    margin: 0 0 25px 0;
  }
`;
const PaymentMethods = styled.div `
  h4 {
    margin: 0 0 25px 0;
  }

  button#show-add-form {
    margin: 20px 0 0 0;
  }
`;
const PaymentMethodItem = styled.div `
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
const UseCard = styled.div `
  float: right;
`;
const Brand = styled.div `
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
const Expiry = styled.div `
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 600;
  float: left;
  line-height: 27px;
  margin: 0 25px;
`;
const ReviewOrder = styled.div `
  padding: 25px 0 0 0;

  button#confirm {
    margin: 0 0 0 0;
  }

  button#cancel {
    margin: 0 15px 0 0;
  }
`;
const Summary = styled.div `
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
const PaymentSuccess = styled.div `
  p {
    line-height: 26px;
    margin: 0 0 15px 0;
  }

  button {
    margin: 35px 15px 0 0;
  }
`;
const Actions = styled.div `
  float: left;
`;
const Progress = styled.div `
  float: right;
  padding: 0;
`;
//# sourceMappingURL=PaymentMethodModal.js.map