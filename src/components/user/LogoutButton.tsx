import { BasicIcons } from '@srclaunch/icons';
import {
  logout,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';

import { Size, TextColors, TextSize } from '../../types';
import { Button, ButtonProps } from '../forms/buttons/Button';
import { Icon } from '../media/Icon';
import { Label } from '../typography/Label';

export type LogoutButtonProps = {
  readonly label?: string;
  readonly onLogoutSuccess?: () => unknown;
  readonly showArrow?: boolean;
  readonly showUnderline?: boolean;
} & ButtonProps;

export const LogoutButton = memo(
  ({
    icon,
    onLogoutSuccess,
    label,
    showArrow = false,
    textColor = TextColors.Error,
    ...props
  }: LogoutButtonProps): ReactElement => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(
      (state: RootState) => state.authentication.loggedIn,
    );

    useEffect(() => {
      if (!loggedIn && onLogoutSuccess) onLogoutSuccess();
    }, [loggedIn]);

    return (
      <Button onClick={() => dispatch(logout())} {...props}>
        {icon && <Icon {...icon} />}

        <Label textColor={textColor} textSize={TextSize.Small}>
          {label ?? 'Logout'}
        </Label>

        {showArrow && (
          <Icon
            color={textColor}
            name={BasicIcons.ChevronRight}
            // size={Size.Small}
          />
        )}
      </Button>
    );
  },
);
