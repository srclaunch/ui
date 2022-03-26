import { memo, ReactElement, useEffect, useState, useRef } from 'react';
import {
  Amount,
  BackgroundColors,
  Depth,
  DepthShadow,
  Sizes,
  TextColors,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { Menu, MenuProps } from '../../menus/Menu';
import { DropdownControl } from '../inputs/shared/DropdownControl';
import { DropdownPanel } from '../inputs/shared/DropdownPanel';
import { TextProps } from '../../typography/Text';

export type MenuButtonProps = ContainerProps &
  MenuProps &
  TextProps & {
    readonly label?: string;
  };

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
    states = {},
    textColor = TextColors.MenuButton,
    ...props
  }: MenuButtonProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(
      states?.state?.dropdown?.visible ?? false,
    );
    const menuVisibleRef = useRef(menuVisible);
    useEffect(() => {
      setFocused(menuVisible);
    }, [menuVisible]);

    return (
      <Container
        borderRadius={Object.assign(
          {},
          { all: Amount.Least, ...borderRadius },
          menuVisible
            ? {
                bottomLeft: Amount.None,
                bottomRight: Amount.None,
              }
            : {},
        )}
        className={`${className} dropdown-input`}
        depth={menuVisible ? Depth.Higher : Depth.Surface}
        events={{
          mouse: {
            onMouseLeave: () => {
              menuVisibleRef.current = false;
              setMenuVisible(false);
            },
          },
        }}
        size={{
          height: Sizes.Default,
          ...size,
        }}
        shadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
        {...props}
      >
        <DropdownControl
          background={{
            color: menuVisible
              ? BackgroundColors.Black
              : BackgroundColors.MenuButton,
          }}
          events={{
            focus: {
              onBlur: () => {
                setFocused(false);
              },
              onFocus: () => setFocused(true),
            },
            mouse: {
              onClick: () => {
                menuVisibleRef.current = !menuVisibleRef.current;
                setMenuVisible(menuVisibleRef.current);
              },
            },
          }}
          label={label}
          shadow={DepthShadow.High}
          size={{
            height: Sizes.Default,
            ...size,
          }}
          states={{
            state: {
              dropdown: { visible: menuVisibleRef.current },
              focused,
            },
            ...states,
          }}
          textColor={menuVisible ? TextColors.BlackContrast : textColor}
        />

        <DropdownPanel
          background={{
            color: menuVisible
              ? BackgroundColors.Black
              : BackgroundColors.MenuButton,
          }}
          padding={{ all: Amount.Least, ...padding }}
          position={{ top: `calc(${Sizes.Default} - 3px)` }}
          states={{
            state: { focused, dropdown: { visible: menuVisibleRef.current } },
            ...states,
          }}
          {...props}
        >
          <Menu
            background={{
              color: menuVisible
                ? BackgroundColors.Black
                : BackgroundColors.MenuButton,
            }}
            menu={menu}
            onItemClick={i => {
              menuVisibleRef.current = false;
              setMenuVisible(false);
            }}
            padding={{ all: Amount.None }}
            shadow={DepthShadow.Surface}

            // {...props}
          />
        </DropdownPanel>
      </Container>
    );
  },
);
