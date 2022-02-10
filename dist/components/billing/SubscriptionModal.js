import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from '@srclaunch/web-application-state';
import { memo } from 'react';
import styled, { css } from 'styled-components';
// import CloseButton from '../common/CloseButton';
export const SubscriptionModal = memo(() => {
    const visible = useSelector(state => state.app.subscriptionBillingModalVisible);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   sendEvent('Product List Viewed');
    // });
    return (_jsx(Container, { visible: visible, children: _jsxs(Content, { visible: visible, children: [_jsx(Close, {}, void 0), _jsx("h3", { children: "Subscription Options" }, void 0), _jsxs(Options, { children: [_jsx(Option, { onClick: () => {
                                // dispatch(hideSubscriptionBillingModal());
                                // dispatch(
                                //   showPaymentMethodModal({
                                //     product: ''
                                //   }),
                                // );
                                // sendEvent('Product Clicked');
                                // dispatch(showAccountSyncModal());
                            }, children: _jsxs(BottomActions, { children: [_jsxs(Price, { children: ["$1.49 ", _jsx("span", { children: "/a month per account" }, void 0)] }, void 0), _jsx(ActionButton, { size: "large", secondary: true, children: "Turn on" }, void 0)] }, void 0) }, void 0), _jsxs(Option, { className: "premium", onClick: () => {
                                // dispatch(hideSubscriptionBillingModal());
                                // dispatch(
                                //   showPaymentMethodModal({
                                //   }),
                                // );
                            }, children: [_jsx("h4", { children: "Premium" }, void 0), _jsx("p", { children: "Account Sync available on all of your accounts, and access to additional premium features." }, void 0), _jsxs("ul", { children: [_jsx("li", { children: "Sync all of your financial accounts" }, void 0), _jsx("li", { children: "All future Premium features included" }, void 0)] }, void 0), _jsxs(BottomActions, { children: [_jsxs(Price, { children: ["$14.99 ", _jsx("span", { children: "a/ month" }, void 0)] }, void 0), _jsx(ActionButton, { size: "large", children: "Upgrade" }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0));
});
const Container = styled.div `
  background: rgba(0, 0, 0, 0.7);
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

  ${props => props.visible &&
    css `
      transform: translate(0px, 0px);

      @media (min-width: 992px) {
        transform: translate(-50%, -50%);
      }
    `};

  h3 {
    margin: 0 0 25px 0;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    border-radius: 15px;
    bottom: auto;
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    //width: calc(690px / 2);
    width: 600px;
  }

  @media (min-width: 1200px) {
  }
`;
const Options = styled.div `
  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const Option = styled.div `
  border: 2px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 0 15px 0;
  padding: 15px;
  position: relative;
  text-align: left;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  width: 100%;

  &:first-child {
    margin-right: 10px;
  }

  &:hover {
    background: #fafafa;
    border: 2px solid #7b7b7b;
  }

  &.premium {
    border: 2px solid rgba(65, 145, 64, 1);

    &:hover {
      background: rgba(65, 145, 64, 0.1);
    }
  }

  h4 {
    font-size: 18px;
    margin: 0 0 25px 0;
  }

  p {
    color: #7b7b7b;
    display: none;
    font-size: 14px;
    margin: 0 0 15px 0;
    line-height: 20px;
  }

  ul {
    padding: 0 25px;

    li {
      color: #3b3b3b;
      font-size: 13px;
      line-height: 18px;
      margin: 0 0 8px 0;
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    float: left;
    height: 400px;
    margin: 0;
    width: calc(100% / 2 - 5px);

    h4 {
      margin: 0 0 25px 0;
    }

    p {
      display: block;
      margin: 0 0 25px 0;
    }
  }

  @media (min-width: 1200px) {
  }
`;
const BottomActions = styled.div `
  bottom: 0;
  left: 0;
  margin: 50px 0 0 0;

  right: 0;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    padding: 15px;
    position: absolute;
  }

  @media (min-width: 1200px) {
  }
`;
const Price = styled.div `
  color: #3b3b3b;
  float: left;
  font-size: 32px;
  font-weight: 700;
  line-height: 26px;
  padding: 0 0 0 5px;
  //width: calc(100% - 110px);

  span {
    color: #aaa;
    display: block;
    font-size: 12px;
    font-weight: 500;
  }
`;
const ActionButton = styled.div `
  background: rgba(60, 60, 60, 1);
  border: 2px solid transparent;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  float: right;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 17px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:active {
    background: rgba(0, 0, 0, 1);
  }

  ${props => props.disabled &&
    css `
      pointer-events: none;
      opacity: 0.8;
    `};

  ${props => props.secondary &&
    css `
      background: white;
      border: 2px solid rgba(220, 220, 220, 1);
      color: rgba(120, 120, 120, 1);
      font-weight: 600;

      &:hover {
        background: transparent;
        border: 2px solid rgba(160, 160, 160, 1);
        color: rgba(100, 100, 100, 1);
      }

      &:active {
        background: transparent;
        border: 2px solid rgba(130, 130, 130, 1);
        color: rgba(80, 80, 80, 1);
      }
    `};

  ${props => props.size === 'small' &&
    css `
      font-size: 11px;
      padding: 7px 12px;

      @media (min-width: 992px) {
        font-size: 12px;
        padding: 10px 17px;
      }
    `};

  ${props => props.size === 'large' &&
    css `
      font-size: 13px;
      padding: 10px 17px;

      @media (min-width: 992px) {
        font-size: 15px;
        padding: 15px 22px;
      }
    `};

  ${props => props.darkMode &&
    props.secondary &&
    css `
      background: transparent !important;
      border: 2px solid rgba(143, 231, 0, 0.7) !important;
      color: rgba(143, 231, 0, 1) !important;

      &:hover {
        background: rgba(143, 231, 0, 0.1) !important;
        border: 2px solid rgba(143, 231, 0, 0.7) !important;
        color: #1b1b1b;
      }

      &:active {
        background: rgba(143, 231, 0, 0.6) !important;
      }
    `};

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
//# sourceMappingURL=SubscriptionModal.js.map