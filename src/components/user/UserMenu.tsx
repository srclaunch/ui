import { BasicIcons } from '@srclaunch/icons';
import {
  logout,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import { Amount, Colors, Sizes, TextColors } from '../../types';
import { ErrorLabel } from '../errors/ErrorLabel';
import { MenuButton, MenuButtonProps } from '../forms/buttons/MenuButton';

type UserMenuProps = MenuButtonProps & {
  readonly onLogoutSuccess?: () => unknown;
};

export const UserMenu = memo(
  ({ onLogoutSuccess, states = {} }: UserMenuProps): ReactElement => {
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

    if (!loggedIn && !states.state?.authenticated) {
      return <ErrorLabel>Not logged in</ErrorLabel>;
    }

    return (
      <MenuButton
        menu={[
          {
            icon: {
              name: BasicIcons.GearCog,
              size: {
                height: Sizes.Smaller,
                width: Sizes.Smaller,
              },
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
              size: {
                height: Sizes.Smaller,
                width: Sizes.Smaller,
              },
            },
            label: 'Logout',

            textColor: TextColors.Error,
          },
        ]}
        label={
          loggedIn
            ? `${attributes?.given_name} ${attributes?.family_name}`
            : 'Not Authenticated'
        }
      />
    );
  },
);
