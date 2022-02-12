import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  Orientation,
  Size,
  TextColors,
  TextProps,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { Menu, MenuProps } from '../../menus/Menu';
import { MenuItemProps } from '../../menus/MenuItem';
import { HoverPanel } from '../../modals/HoverPanel';
import { DropdownControl } from '../inputs/shared/DropdownControl';

export type MenuButtonProps = {
  readonly label?: string;
} & ContainerProps<HTMLDivElement> &
  MenuProps &
  TextProps;

export const MenuButton = memo(
  ({
    backgroundColor = BackgroundColors.MenuButton,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
    borderRadius = Amount.Least,
    className = '',
    menu,
    label,
    padding = 5,
    size = Size.Default,
    textColor = TextColors.MenuButton,
    width,
    ...props
  }: MenuButtonProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
      setFocused(menuVisible);
    }, [menuVisible]);

    return (
      <Container
        boxShadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
        borderRadius={borderRadius}
        className={`${className} menu-button`}
        depth={Depth.Higher}
        grow={false}
        orientation={Orientation.Vertical}
        onMouseLeave={() => {
          setMenuVisible(false);
        }}
        width={width}
        {...props}
      >
        <DropdownControl
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          border={border}
          depth={Depth.High}
          label={label ?? ''}
          focused={focused}
          lineHeight={size}
          menuVisible={menuVisible}
          name="menu-button-dropdown-control"
          onBlur={() => {
            if (!menuVisible) setFocused(false);
          }}
          onFocus={() => setFocused(true)}
          // onBlur={() => setMenuVisible(false)}
          onClick={() => setMenuVisible(!menuVisible)}
          textColor={textColor}
        />

        <HoverPanel
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          detached={false}
          focused={focused}
          padding={padding}
          visible={menuVisible}
          setMenuVisible={setMenuVisible}
          width={width}
        >
          <Menu
            backgroundColor={BackgroundColors.Light}
            borderRadius={borderRadius}
            // invertedColors={true}
            menu={menu}
            onClick={e => {
              setMenuVisible(false);
            }}
          />
        </HoverPanel>
      </Container>
    );
  },
);
