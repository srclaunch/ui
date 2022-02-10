import { Icons } from '@srclaunch/icons';
import React, { memo, ReactElement, useState } from 'react';
import styled from 'styled-components';

import Icon from '../ui/Icon';

const UserNotifications = useMemo(() => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Container
      onClick={() => setMenuVisible(!menuVisible)}
      onMouseLeave={() => setMenuVisible(false)}
    >
      {menuVisible && <Menu></Menu>}

      <AlertButton>
        <Icon name={Icons.Alert} />
      </AlertButton>
    </Container>
  );
});

const Container = styled.div`
  &:after {
    content: '';
    clear: both;
    display: block;
  }
`;

const AlertButton = styled.button`
  background: rgba(245, 245, 245, 1);
  border: none;
  border-radius: 45px;
  cursor: pointer;
  height: 45px;
  line-height: 45px;
  margin: 12px 0;
  text-align: center;
  transition: background 0.2s ease-in;
  width: 45px;

  &:hover {
    background: rgba(235, 235, 235, 1);

    svg {
      fill: rgba(160, 160, 160, 1);
    }
  }

  &:active {
    background: rgba(210, 210, 210, 1);

    svg {
      fill: rgba(130, 130, 130, 1);
    }
  }

  svg {
    fill: rgba(190, 190, 190, 1);
    height: 22px;
    position: relative;
    top: -2px;
    transition: all 0.2s ease-in;
    vertical-align: middle;
    width: 22px;
  }
`;
const Menu = styled.div`
  background: white;
`;

export default UserNotifications;
