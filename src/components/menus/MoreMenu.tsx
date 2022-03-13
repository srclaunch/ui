import { memo, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { BackgroundStyles } from '../../styles/container/background';
import { BorderRadiusStyles } from '../../styles/container/border-radius';
import { MarginStyles } from '../../styles/container/margin';
import { SizeStyles } from '../../styles/container/size';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Background,
  BackgroundColors,
  BorderRadius,
  Color,
  Cursor,
  Depth,
  ForegroundColor,
  ForegroundColors,
  Margin,
  Orientation,
  Size,
  Sizes,
} from '../../types';
import { Container } from '../layout/Container';
import { HoverPanel } from '../modals/HoverPanel';
import { Menu, MenuProps } from './Menu';

export type MoreMenuProps = {
  readonly dotColor?: ForegroundColor;
} & MenuProps;

export const MoreMenu = memo(
  ({
    alignment = {},
    background = {},
    className = '',
    dotColor = ForegroundColors.MoreMenu,
    size = {
      height: Sizes.Default,
      width: Sizes.Default,
    },
    menu,
    ...props
  }: MoreMenuProps): ReactElement => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const dotFillColor =
      menuVisible || hovered ? ForegroundColors.PrimaryContrast : dotColor;

    return (
      // @ts-ignore
      <Container
        className={`${className} more-menu`}
        onMouseLeave={() => setMenuVisible(false)}
      >
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
            ...alignment,
          }}
          as="button"
          cursor={Cursor.Pointer}
          background={{
            color: menuVisible
              ? BackgroundColors.Primary
              : BackgroundColors.MoreMenu,
            opacity: menuVisible ? 70 : 100,
            ...background,
          }}
          borderRadius={{ all: Amount.All }}
          focused={focused}
          depth={Depth.Surface}
          hover={{
            background: {
              color: BackgroundColors.Primary,
            },
          }}
          // @ts-ignore
          onClick={(e: any) => {
            e.stopPropagation();
            e.preventDefault();
            setMenuVisible(!menuVisible);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            // setMenuVisible(false);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          size={size}
          {...props}
        >
          <Dot
            borderRadius={{ all: Amount.All }}
            background={{ color: BackgroundColors.Lighter }}
            margin={{
              left: 1,
              right: 1,
            }}
            size={{
              height: 4,
              width: 4,
            }}
          />
          <Dot
            borderRadius={{ all: Amount.All }}
            background={{ color: BackgroundColors.Lighter }}
            margin={{
              left: 1,
              right: 1,
            }}
            size={{
              height: 4,
              width: 4,
            }}
          />
          <Dot
            borderRadius={{ all: Amount.All }}
            background={{ color: BackgroundColors.Lighter }}
            margin={{
              left: 1,
              right: 1,
            }}
            size={{
              height: 4,
              width: 4,
            }}
          />
        </Container>

        <HoverPanel visible={menuVisible} setMenuVisible={setMenuVisible}>
          <Menu menu={menu} onClick={() => setMenuVisible(false)} />
        </HoverPanel>
      </Container>
    );
  },
);

const Dot = styled.span<{
  readonly background?: Background;
  readonly borderRadius?: BorderRadius;
  readonly color?: Color;
  readonly margin?: Margin;
  readonly size?: Size;
}>`
  ${BackgroundStyles};
  ${BorderRadiusStyles};
  ${MarginStyles};
  ${SizeStyles};
  display: inline-block;
`;
