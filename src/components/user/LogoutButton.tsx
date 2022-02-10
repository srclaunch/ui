import { logout, RootState, useDispatch, useSelector } from '@srclaunch/state';
import { memo, ReactElement, useEffect } from 'react';
import { BasicIcons } from '@srclaunch/icons';

import { Size, TextColors } from '../../types';

import { Label, LabelProps } from '../typography/Label';
import { Icon } from '../media/Icon';

import { Button, ButtonProps } from '../forms/buttons/Button';

export type LogoutButtonProps<T = {}> = ButtonProps<
  HTMLButtonElement,
  LabelProps<
    HTMLLabelElement,
    {
      label?: string;
      onLogoutSuccess?: () => unknown;
      showArrow?: boolean;
      showUnderline?: boolean;
    } & T
  >
>;

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
      if (!loggedIn) {
        if (onLogoutSuccess) onLogoutSuccess();
      }
    }, [loggedIn]);

    return (
      <Button onClick={() => dispatch(logout())} {...props}>
        {icon && <Icon {...icon} />}

        <Label textColor={textColor} size={Size.Small}>
          {label ?? 'Logout'}
        </Label>

        {showArrow && (
          <Icon
            color={textColor}
            name={BasicIcons.ChevronRight}
            size={Size.Small}
          />
        )}
      </Button>
    );
  },
);
