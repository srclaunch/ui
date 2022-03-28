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
import { getDropdownMinHeight } from '../../../lib/forms/dropdowns';

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
    const [focused, setFocused] = useState(states.state?.focused ?? false);
    const focusedRef = useRef(focused);
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
          focus: {
            onBlur: () => {
              focusedRef.current = false;
              setFocused(false);
            },
            onFocus: () => {
              focusedRef.current = true;
              setFocused(true);
            },
          },
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
            mouse: {
              onClick: () => {
                menuVisibleRef.current = !menuVisibleRef.current;
                setMenuVisible(menuVisibleRef.current);
              },
            },
          }}
          label={label}
          shadow={menuVisible ? DepthShadow.Surface : DepthShadow.High}
          size={{
            height: Sizes.Default,
            ...size,
          }}
          states={{
            state: {
              dropdown: { visible: menuVisibleRef.current },
              // focused: focusedRef.current,
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
          size={{
            maxHeight: 320,
            minHeight: getDropdownMinHeight(menu?.length ?? 1, Amount.Least),
          }}
          states={{
            ...states,
            state: {
              ...states.state,
              dropdown: { visible: menuVisibleRef.current },
              // focused: focusedRef.current,
            },
          }}
          {...props}
        >
          <Menu
            background={{
              color: BackgroundColors.Transparent,
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
