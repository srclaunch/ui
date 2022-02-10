import { memo, ReactElement, useEffect, useState } from 'react';
import { logout, RootState, useDispatch, useSelector } from '@srclaunch/state';
import { BasicIcons } from '@srclaunch/icons';

import { Colors, Size, TextColors } from '../../types';

import { MenuButton } from '../forms/buttons/MenuButton';
import { ErrorLabel } from '../errors/ErrorLabel';
import { Label } from '../typography/Label';

type UserMenuProps = {
  onLogoutSuccess?: () => unknown;
};

export const UserMenu = memo(
  ({ onLogoutSuccess }: UserMenuProps): ReactElement => {
    const [loggingOut, setLoggingOut] = useState(false);
    const dispatch = useDispatch();

    const attributes = useSelector(
      (state: RootState) => state.user.details.attributes,
    );
    const loggedIn = useSelector(
      (state: RootState) => state.user.authentication.state.loggedIn,
    );

    useEffect(() => {
      if (loggingOut && !loggedIn) {
        if (onLogoutSuccess) onLogoutSuccess();
      }
    }, [loggedIn]);

    if (!loggedIn) {
      return <ErrorLabel>Not logged in</ErrorLabel>;
    }
    return (
      <MenuButton
        menu={[
          {
            icon: {
              name: BasicIcons.GearCog,
              size: Size.Smaller,
            },
            label: 'Settings',
            to: '/settings',
          },
          {
            icon: {
              color: Colors.Error,
              name: BasicIcons.Exit,
              size: Size.Smaller,
            },
            label: 'Logout',
            onClick: () => {
              setLoggingOut(true);
              dispatch(logout());
            },
            textColor: TextColors.Error,
          },
        ]}
        label={`${attributes?.given_name} ${attributes?.family_name}`}
      />
    );
  },
);
