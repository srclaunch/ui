import { memo, ReactElement, useEffect, useState } from 'react';
import {
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from '@srclaunch/web-application-state';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  LinkProps,
  Orientation,
  Size,
  Sizes,
  TextColors,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import { MenuItemProps } from '../menus/MenuItem';
import { Label, LabelProps } from '../typography/Label';

export type NavigationLinkProps = {
  readonly activeClassName?: string;
  readonly icon?: IconProps;
  readonly inline?: boolean;
  readonly label?: string;
  readonly menu?: readonly MenuItemProps[];
  readonly size?: Size;
} & ContainerProps<HTMLAnchorElement> &
  LabelProps<HTMLAnchorElement> &
  LinkProps;

export const NavigationLink = memo(
  ({
    active,
    activeClassName = 'active',
    alignment = {},
    as = 'span',
    background,
    borderRadius = {},
    children,
    className = '',
    focus,
    hover,
    inline = false,
    label,
    lineHeight = Sizes.Smaller,
    margin,
    menu,
    onClick,
    onMouseEnter,
    onMouseLeave,
    padding = {},
    rel,
    target,
    textColor = TextColors.Primary,
    textSize,
    textWeight,
    to,
    ...props
  }: NavigationLinkProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [updatedBackgroundColor, setUpdatedBackgroundColor] = useState(
      background?.color,
    );
    const [updatedTextColor, setUpdatedTextColor] = useState(textColor);

    const resolved = useResolvedPath(to);
    const exactMatch = useMatch({ end: true, path: resolved.pathname });
    const pathMatch = useMatch({ end: false, path: resolved.pathname });
    const location = useLocation();

    const setTextColor = () => {
      if (focused && focus?.textColor) {
        setUpdatedTextColor(focus.textColor);
      } else if (exactMatch && active?.textColor) {
        setUpdatedTextColor(active.textColor);
      } else if (hovered && hover?.textColor) {
        setUpdatedTextColor(hover.textColor);
      } else {
        setUpdatedTextColor(textColor);
      }
    };

    const setBackgroundColor = () => {
      if (focused && focus?.background?.color) {
        setUpdatedBackgroundColor(focus.background?.color);
      } else if (exactMatch && active?.background?.color) {
        setUpdatedBackgroundColor(active.background?.color);
      } else if (hovered && hover?.background?.color) {
        setUpdatedBackgroundColor(hover.background?.color);
      } else {
        setUpdatedBackgroundColor(background?.color);
      }
    };

    useEffect(() => {
      setTextColor();
      setBackgroundColor();
    }, [hovered, focused, exactMatch]);

    return (
      <NavLink
        className={`${className} navigation-link`}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        rel={rel}
        target={target}
        to={to + location.search}
        style={{
          display: inline ? 'inline-flex' : 'flex',
          textDecoration: 'none',
        }}
      >
        <Container
          alignment={{
            horizontal: menu ? AlignHorizontal.Stretch : AlignHorizontal.Left,
            orientation: menu ? Orientation.Vertical : Orientation.Horizontal,
            vertical: AlignVertical.Center,
            ...alignment,
          }}
          active={active}
          as={as}
          background={{ color: updatedBackgroundColor }}
          borderRadius={{ all: Amount.Less, ...borderRadius }}
          className={`${className} ${exactMatch ? activeClassName : ''} link`}
          focus={focus}
          focused={focused}
          hover={hover}
          margin={margin}
          onClick={onClick}
          onMouseEnter={e => {
            setHovered(true);

            // @ts-ignore
            if (onMouseEnter) onMouseEnter(e);
          }}
          onMouseLeave={e => {
            setHovered(false);

            // @ts-ignore
            if (onMouseLeave) onMouseLeave(e);
          }}
          padding={{
            bottom: menu ? padding?.left : padding?.bottom,
            ...padding,
          }}
          // shadow={{
          //   radius: 8,
          //   color: background?.color,
          //   x: 0,
          //   y: 3,
          //   opacity: 35,
          //   spread: 3,
          // }}
          {...props}
        >
          {label ? (
            <Label
              lineHeight={lineHeight}
              textColor={updatedTextColor}
              textSize={textSize}
              textWeight={textWeight}
              {...props}
            >
              {label}
            </Label>
          ) : (
            children
          )}
        </Container>
      </NavLink>
    );
  },
);

// const Container = styled.span<Omit<NavigationLinkProps, 'to'>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};

//   cursor: pointer;
//   text-decoration: none;

//   * {
//     cursor: pointer;
//   }

//   &:before {
//     border-radius: calc(${props => props.borderRadius} + 3px);
//   }
// `;
