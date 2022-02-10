import { memo, ReactElement } from 'react';
import { NotificationType } from '@srclaunch/types';

import { Container } from '../layout/Container';
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

import { Text } from '../typography/Text';
import { Orb } from './Orb';
import { ContainerProps } from '../layout/Container';

export type NotificationLabelProps<T = {}> = ContainerProps<
  HTMLDivElement,
  {
    label?: string;
    showOrb?: boolean;
    type?: NotificationType;
  }
> &
  T;

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
          <Text
            textColor={textColor}
            lineHeight={Size.Small}
            textWeight={TextWeight.Default}
          >
            {label}
          </Text>
        )}

        {children}
      </Container>
    );
  },
);
