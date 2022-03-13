import { Link as RouterLink } from '@srclaunch/web-application-state';
import { memo, MouseEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';

import { FocusStyles } from '../../styles/container/focus';
import {
  Amount,
  FocusProps,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import {
  TextDecorationLine,
  TextDecorationStyle,
} from '../../types/typography/text';
import { Icon } from '../media/Icon';
import { Text, TextProps } from './Text';

export type LinkProps = {
  readonly icon?: typeof Icon;
  readonly onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  readonly prefetch?: boolean;
  readonly rel?: string;
  readonly target?: '_blank';
  readonly to: string;
} & TextProps &
  FocusProps;

export const Link = memo(
  ({
    children,
    hover,
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
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
      <Container as="span" focused={focused} {...props}>
        <RouterLink
          to={to}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
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
      </Container>
    );
  },
);

/* ${LayoutStyles}; */

const Container = styled.span<Omit<LinkProps, 'to'>>`
  ${FocusStyles};

  cursor: pointer;
  position: relative;

  &:before {
    border-radius: ${Amount.All};
    left: -9px;
    right: -9px;
  }
`;
