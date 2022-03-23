import { Link as RouterLink } from '@srclaunch/web-application-state';
import { memo, MouseEvent, ReactElement, useState } from 'react';

import { Amount, TextColors, TextSize, TextWeight } from '../../types';
import {
  TextDecorationLine,
  TextDecorationStyle,
} from '../../types/typography';
import { Icon } from '../media/Icon';
import { Text, TextProps } from './Text';

export type LinkProps = TextProps & {
  readonly icon?: typeof Icon;
  readonly onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  readonly prefetch?: boolean;
  readonly rel?: string;
  readonly target?: '_blank';
  readonly to: string;
};

export const Link = memo(
  ({
    children,
    textColor = TextColors.Link,
    textDecoration = {
      line: [TextDecorationLine.Underline],
      style: TextDecorationStyle.Solid,
    },
    textSize = TextSize.Small,
    textWeight = TextWeight.Default,
    to,
    ...props
  }: LinkProps): ReactElement => {
    return (
      <RouterLink
        to={to}
        style={{
          outline: 'none',
        }}
      >
        <Text
          textDecoration={textDecoration}
          textColor={textColor}
          textWeight={textWeight}
          {...props}
        >
          {children}
        </Text>
      </RouterLink>
    );
  },
);
