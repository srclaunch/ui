import { memo, useEffect, useState } from 'react';

import { Container } from '../../layout/Container';
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

import { HoverPanel } from '../../modals/HoverPanel';
import { Menu, MenuProps } from '../../menus/Menu';
import { MenuItemProps } from '../../menus/MenuItem';
import { DropdownControl } from '../inputs/shared/DropdownControl';

type MenuButtonProps<E = HTMLDivElement, P = {}> = MenuProps<
  E,
  any,
  TextProps<
    HTMLSpanElement,
    {
      label?: string;
    }
  >
> &
  P;

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
  }: MenuButtonProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [item, setItem] = useState<MenuItemProps>();

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
          label={label ?? item?.label ?? ''}
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
            onClick={i => {
              // setItem(i);
              setMenuVisible(false);
            }}
          />
        </HoverPanel>
      </Container>
    );
  },
);
