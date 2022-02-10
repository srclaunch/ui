import React from 'react';
import { Icons } from '@srclaunch/icons';
import { logout, useDispatch } from '@srclaunch/state';
import { Orientation } from '@srclaunch/types';
import { NavLink } from 'react-router-dom';

import Container from '../layout/Container';
import Icon from '../ui/Icon';

const MobileUserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Container orientation={Orientation.Horizontal}>
      <ul>
        <li>
          <NavLink to="/settings" activeClassName="current">
            <Icon name={Icons.GearCog} />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => dispatch(logout())}
            onKeyPress={key => {
              if (key === 'Enter') {
                dispatch(logout());
              }
            }}
          >
            <Icon name={Icons.Exit} />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default MobileUserMenu;
