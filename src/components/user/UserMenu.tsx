import { BasicIcons } from '@srclaunch/icons';
import {
  logout,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Colors, Size, TextColors } from '../../types';
import { ErrorLabel } from '../errors/ErrorLabel';
import { MenuButton } from '../forms/buttons/MenuButton';
import { Label } from '../typography/Label';

type UserMenuProps = {
  readonly onLogoutSuccess?: () => unknown;
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
      if (loggingOut && !loggedIn && onLogoutSuccess) onLogoutSuccess();
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
              // size: Size.Smaller,
            },
            label: 'Settings',
            to: '/settings',
          },
          {
            events: {
              mouse: {
                onClick: () => {
                  setLoggingOut(true);
                  dispatch(logout());
                },
              },
            },
            icon: {
              color: Colors.Error,
              name: BasicIcons.Exit,
              // size: Size.Smaller,
            },
            label: 'Logout',

            textColor: TextColors.Error,
          },
        ]}
        label={`${attributes?.given_name} ${attributes?.family_name}`}
      />
    );
  },
);
