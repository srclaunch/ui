import { memo, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from '@srclaunch/state';
import {
  Align,
  Amount,
  FocusProps,
  Size,
  TextColors,
  TextWeight,
} from '../../types';
import { Icon } from '../media/Icon';
import { Text, TextProps } from './Text';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';

type LinkProps<T = {}> = TextProps<
  HTMLAnchorElement,
  FocusProps<
    {
      icon?: typeof Icon;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
      prefetch?: boolean;
      rel?: string;
      target?: '_blank';
      to: string;
    } & T
  >
>;

export const Link = memo(
  ({
    children,
    hover,
    size = Size.Small,
    textColor = TextColors.Link,
    textWeight = TextWeight.Default,
    to,
    underline = true,
    underlineColor = TextColors.Link,
    ...props
  }: LinkProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
      <RouterLink
        to={to}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          alignItems: Align.Center,
          color: textColor as string,
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: Align.Center,
          outline: 'none',
          textDecoration:
            (underline || (hovered && hover?.underline)) && !focused
              ? 'underline'
              : 'none',
        }}
      >
        <Container
          alignContent={Align.Center}
          alignItems={Align.Center}
          focused={focused}
          grow={false}
          height={size}
        >
          <Text
            lineHeight={size}
            textColor={textColor}
            textWeight={textWeight}
            underline={(underline || (hovered && hover?.underline)) && !focused}
            underlineColor={textColor}
            {...props}
          >
            {children}
          </Text>
        </Container>
      </RouterLink>
    );
  },
);

const Container = styled.span<Omit<LinkProps, 'to'>>`
  ${LayoutStyles};
  ${FocusedStyles};

  cursor: pointer;
  position: relative;

  &:before {
    border-radius: ${Amount.All};
    left: -9px;
    right: -9px;
  }
`;
