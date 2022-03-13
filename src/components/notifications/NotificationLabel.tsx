import { memo, ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Depth,
  Orientation,
  Sizes,
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
    alignment = {},
    background = {},
    borderRadius = {},
    children,
    className = '',
    label = '',
    padding = {},
    showOrb = true,
    type,
    ...props
  }: NotificationLabelProps): ReactElement => {
    const getBackgroundColor = () => {
      if (!type) return background.color;

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

    console.log({
      horizontal: AlignHorizontal.Center,
      orientation: Orientation.Horizontal,
      vertical: AlignVertical.Center,
      ...alignment,
    });
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        background={{
          color: BackgroundColors.Light,
          opacity: type ? 10 : 100,
          ...background,
        }}
        borderRadius={{ all: Amount.All, ...borderRadius }}
        className={`${className} notification-label`}
        // depth={!type ? Depth.Low : undefined}
        padding={{ all: Amount.Less, ...padding }}
        {...props}
      >
        {showOrb && (
          <Orb
            background={{ color: bgColor }}
            margin={{ right: Amount.Less }}
          />
        )}

        {label && (
          <Label
            textColor={textColor}
            lineHeight={Sizes.Small}
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
