import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from '@srclaunch/state';
import { CloseButton } from '../modals/CloseButton';
import { Icon } from '../media/Icon';
export const Notifications = memo(() => {
    const notifications = useSelector((state) => state.app.notifications);
    // const dispatch = useDispatch();
    return (_jsx(Container, { children: notifications.map((notification) => {
            return (_jsxs(NotificationContainer, { children: [_jsx(IconWrapper, { color: notification.color, children: _jsx(Icon, { name: notification.icon }, void 0) }, void 0), _jsx(Close, { children: _jsx(CloseButton, { onClick: () => {
                                // dispatch(removeNotification({ id: notification.id }));
                            } }, void 0) }, void 0), _jsx(Message, { children: notification.message }, void 0)] }, notification.id));
        }) }, void 0));
});
const Container = styled.div `
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 15px;
  width: 475px;
  z-index: 50000;
`;
const NotificationContainer = styled.div `
  background: #2b2b2b;
  border-radius: 60px;
  box-shadow: 0 9px 25px rgba(0, 0, 0, 0.3);
  height: 60px;
  margin: 0 0 25px 0;
  overflow: hidden;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const IconWrapper = styled.div `
  float: left;
  height: 60px;
  line-height: 64px;
  text-align: center;
  width: 64px;

  svg {
    fill: rgb(${props => props.color || '235, 235, 235'});
    height: 18px;
    width: 18px;
  }
`;
const Message = styled.div `
  color: #eee;
  font-size: 14px;
  font-weight: 500;
  float: left;
  line-height: 58px;
  width: 291px;
`;
const Close = styled.div `
  float: right;
  height: 60px;
  line-height: 49px;
  text-align: center;
  width: 60px;
`;
//# sourceMappingURL=Notifications.js.map