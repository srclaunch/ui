import { memo, ReactElement, useState } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  Amount,
  AppearanceProps,
  BackgroundColors,
  Color,
  Cursor,
  Depth,
  ForegroundColors,
  MenuProps,
  Orientation,
  Size,
  SizeProps,
  WidthProps,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { HoverPanel } from '../modals/HoverPanel';
import { Menu } from './Menu';

export type MoreMenuProps = {
  readonly dotColor?: Color;
} & MenuProps &
  SizeProps &
  WidthProps;

export const MoreMenu = memo(
  ({
    alignContent = Align.Left,
    backgroundColor = BackgroundColors.MoreMenu,
    className = '',
    dotColor = ForegroundColors.MoreMenu,
    orientation = Orientation.Horizontal,
    size = Size.Default,
    menu,
    width = 150,
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
        grow={false}
        onMouseLeave={() => setMenuVisible(false)}
        {...props}
      >
        <Container
          alignContent={Align.Center}
          alignItems={Align.Center}
          as="button"
          cursor={Cursor.Pointer}
          backgroundColor={
            menuVisible ? BackgroundColors.Primary : backgroundColor
          }
          backgroundOpacity={menuVisible ? 70 : 100}
          borderRadius={size}
          focused={focused}
          depth={Depth.Surface}
          grow={false}
          hover={{
            backgroundColor: BackgroundColors.Primary,
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
          orientation={orientation}
          height={size}
          width={size}
          {...props}
        >
          <Dot borderRadius={Amount.All} backgroundColor={dotFillColor} />
          <Dot borderRadius={Amount.All} backgroundColor={dotFillColor} />
          <Dot borderRadius={Amount.All} backgroundColor={dotFillColor} />
        </Container>

        <HoverPanel
          alignContent={alignContent}
          orientation={Orientation.Vertical}
          visible={menuVisible}
          setMenuVisible={setMenuVisible}
          width={width}
        >
          <Menu menu={menu} onClick={() => setMenuVisible(false)} />
        </HoverPanel>
      </Container>
    );
  },
);

const Dot = styled.span<
  {
    readonly fillColor?: Color;
  } & AppearanceProps
>`
  ${AppearanceStyles};

  background-color: rgb(${props => props.fillColor});
  display: inline-block;
  height: 4px;
  margin: 0 1px;
  width: 4px;
`;
