import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  Overflow,
  Sizes,
  TextColors,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { Menu, MenuProps } from '../../menus/Menu';
import { MenuItemProps } from '../../menus/MenuItem';
import { HoverPanel } from '../../modals/HoverPanel';
import { DropdownControl } from '../inputs/shared/DropdownControl';
import { DropdownPanel } from '../inputs/shared/DropdownPanel';
import { TextProps } from '../../typography/Text';

export type MenuButtonProps = {
  readonly label?: string;
} & ContainerProps<HTMLDivElement> &
  MenuProps &
  TextProps;

export const MenuButton = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    menu,
    label,
    padding = {},
    size = {},
    textColor = TextColors.MenuButton,
    ...props
  }: MenuButtonProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
      setFocused(menuVisible);
    }, [menuVisible]);

    return (
      <Container
        alignment={{
          overflow: Overflow.Visible,
        }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} menu-button`}
        depth={Depth.Higher}
        onMouseLeave={() => {
          setMenuVisible(false);
        }}
        size={{
          height: Sizes.Default,
          maxWidth: 300,
          minWidth: 240,
          ...size,
        }}
        shadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
        {...props}
      >
        <DropdownControl
          background={{ color: BackgroundColors.MenuButton, ...background }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          border={{
            all: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          depth={Depth.High}
          label={label ?? ''}
          focused={focused}
          // lineHeight={size}
          menuVisible={menuVisible}
          name="menu-button-dropdown-control"
          onBlur={() => {
            if (!menuVisible) setFocused(false);
          }}
          onFocus={() => setFocused(true)}
          // onBlur={() => setMenuVisible(false)}
          onClick={() => setMenuVisible(!menuVisible)}
          textColor={textColor}
          shadow={DepthShadow.High}
          size={{
            height: Sizes.Default,
            ...size,
          }}
        />

        {/* <HoverPanel
          background={{ color: BackgroundColors.MenuButton, ...background }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          detached={false}
          focused={focused}
          padding={{ all: 5, ...padding }}
          visible={menuVisible}
          setMenuVisible={setMenuVisible}
        >
          <Menu
            background={{ color: BackgroundColors.Light }}
            borderRadius={borderRadius}
            // invertedColors={true}
            menu={menu}
            onClick={e => {
              setMenuVisible(false);
            }}
          />
        </HoverPanel> */}

        <DropdownPanel
          background={{ color: BackgroundColors.DropdownMenu, ...background }}
          border={{
            all: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            top: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 0,
            },
            ...border,
          }}
          borderRadius={{
            all: Amount.Least,
            // topLeft: Amount.None,
            // topRight: Amount.None,
            ...borderRadius,
          }}
          focused={focused}
          padding={padding}
          position={{ top: `calc(${Sizes.Default} - 0px)` }}
          size={{
            height: Sizes.Default,
            maxWidth: 300,
            minWidth: 240,
            ...size,
          }}
          visible={menuVisible}
        >
          <Menu
            background={{
              color: BackgroundColors.Lightest,
            }}
            borderRadius={{ all: Amount.Least, ...borderRadius }}
            menu={menu}
            padding={padding}
          />
        </DropdownPanel>
      </Container>
    );
  },
);
