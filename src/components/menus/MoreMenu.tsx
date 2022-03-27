import { memo, ReactElement, useRef, useState } from 'react';
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
import { Button } from '../forms/buttons/Button';
import { Container } from '../layout/Container';
import { Icon } from '../media/Icon';
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
    size = {},
    states = {},
    menu,
    ...props
  }: MoreMenuProps): ReactElement => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const menuVisibleRef = useRef(menuVisible);
    const dotFillColor =
      menuVisible || hovered ? ForegroundColors.PrimaryContrast : dotColor;

    return (
      // @ts-ignore
      <Container
        className={`${className} more-menu`}
        events={{
          mouse: {
            onMouseLeave: () => {
              menuVisibleRef.current = false;
              setMenuVisible(false);
            },
          },
        }}
      >
        <Button
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
            ...alignment,
          }}
          as="button"
          cursor={Cursor.Pointer}
          background={{
            color: menuVisibleRef.current
              ? BackgroundColors.Primary
              : BackgroundColors.MoreMenu,
            opacity: menuVisibleRef.current ? 70 : 100,
            ...background,
          }}
          borderRadius={{ all: Amount.All }}
          depth={Depth.Surface}
          events={{
            focus: {
              onBlur: () => setFocused(false),
              onFocus: () => setFocused(true),
            },
            mouse: {
              onClick: (e: any) => {
                e.stopPropagation();
                e.preventDefault();
                menuVisibleRef.current = !menuVisibleRef.current;
                setMenuVisible(menuVisibleRef.current);
              },
              onMouseEnter: () => setHovered(true),
              onMouseLeave: () => setHovered(false),
            },
          }}
          size={{ height: Sizes.Default, width: Sizes.Default, ...size }}
          states={{
            hovered: {
              background: {
                color: BackgroundColors.Primary,
              },
            },
            state: {
              focused,
            },
            ...states,
          }}
          {...props}
        >
          {new Array(3).fill(0).map((color, i) => (
            <Dot
              borderRadius={{ all: Amount.All }}
              background={{ color: dotFillColor }}
              key={i}
              margin={{
                left: 1,
                right: 1,
              }}
              size={{
                height: 5,
                width: 5,
              }}
            />
          ))}
        </Button>

        <HoverPanel visible={menuVisible} setMenuVisible={setMenuVisible}>
          <Menu
            menu={menu}
            events={{
              mouse: {
                onClick: () => {
                  menuVisibleRef.current = false;
                  setMenuVisible(false);
                },
              },
            }}
          />
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
