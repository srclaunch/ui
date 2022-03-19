import { Notification } from '@srclaunch/types';
import { RootState, useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Icon } from '../media/Icon';
import { CloseButton } from '../modals/CloseButton';

export const Notifications = memo((): ReactElement => {
  const notifications: Notification[] = useSelector(
    (state: RootState) => state.app.notifications,
  );
  // const dispatch = useDispatch();

  return (
    <Container>
      {notifications.map((notification: Notification) => {
        return (
          <NotificationContainer key={notification.id}>
            <IconWrapper color={notification.color}>
              {/* <Icon name={notification.icon} /> */}
            </IconWrapper>
            <Close>
              <CloseButton
                events={{
                  mouse: {
                    onClick: () => {
                      // dispatch(removeNotification({ id: notification.id }));
                    },
                  },
                }}
              />
            </Close>
            <Message>{notification.message}</Message>
          </NotificationContainer>
        );
      })}
    </Container>
  );
});

const Container = styled.div`
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 15px;
  width: 475px;
  z-index: 50000;
`;

const NotificationContainer = styled.div`
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

const IconWrapper = styled.div<{ readonly color?: string }>`
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

const Message = styled.div`
  color: #eee;
  font-size: 14px;
  font-weight: 500;
  float: left;
  line-height: 58px;
  width: 291px;
`;

const Close = styled.div`
  float: right;
  height: 60px;
  line-height: 49px;
  text-align: center;
  width: 60px;
`;
