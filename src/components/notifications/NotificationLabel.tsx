import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  Depth,
  Orientation,
  Size,
  TextColors,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';
import { Orb } from './Orb';

export type NotificationLabelProps = {
  readonly label?: string;
  readonly showOrb?: boolean;
  readonly type?: NotificationType;
} & ContainerProps<HTMLDivElement>;

export const NotificationLabel = memo(
  ({
    backgroundColor = BackgroundColors.Dark,
    children,
    className = '',
    grow = false,
    label = '',
    orientation,
    showOrb = true,
    type,
    ...props
  }: NotificationLabelProps): ReactElement => {
    const getBackgroundColor = () => {
      if (!type) return backgroundColor;

      switch (type) {
        case NotificationType.Error:
          return BackgroundColors.Error;
        case NotificationType.Info:
          return BackgroundColors.Info;
        case NotificationType.Success:
          return BackgroundColors.Success;
        case NotificationType.Warning:
          return BackgroundColors.Warning;
      }
    };

    const getTextColor = () => {
      if (!type) return TextColors.Default;

      switch (type) {
        case NotificationType.Error:
          return TextColors.Error;
        case NotificationType.Info:
          return TextColors.Info;
        case NotificationType.Success:
          return TextColors.Success;
        case NotificationType.Warning:
          return TextColors.Warning;
      }
    };

    const bgColor = getBackgroundColor();
    const textColor = getTextColor();

    return (
      <Container
        alignItems={Align.Center}
        alignContent={Align.Center}
        backgroundColor={bgColor}
        backgroundOpacity={type ? 10 : 100}
        borderRadius={Amount.All}
        className={`${className} notification-label`}
        // depth={!type ? Depth.Low : undefined}
        orientation={Orientation.Horizontal}
        padding={Amount.More}
        paddingBottom={Amount.Less}
        paddingTop={Amount.Less}
        grow={grow}
        {...props}
      >
        {showOrb && <Orb color={bgColor} marginRight={Amount.Less} />}

        {label && (
          <Label
            textColor={textColor}
            lineHeight={Size.Small}
            textWeight={TextWeight.Default}
          >
            {label}
          </Label>
        )}

        {children}
      </Container>
    );
  },
);
