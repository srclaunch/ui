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

export type NavigationLinkProps = LabelProps &
  LinkProps & {
    readonly activeClassName?: string;
    readonly icon?: IconProps;
    readonly inline?: boolean;
    readonly label?: string;
    readonly matchExactPath?: boolean;
    readonly menu?: readonly MenuItemProps[];
    readonly size?: Size;
  };

export const NavigationLink = memo(
  ({
    activeClassName = 'active',
    alignment = {},
    as = 'span',
    background,
    borderRadius = {},
    children,
    className = '',
    events = {},
    inline = false,
    label,
    lineHeight = Sizes.Smaller,
    margin,
    matchExactPath = false,
    menu,
    padding = {},
    rel,
    states = {},
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
    const match = useMatch({ end: matchExactPath, path: resolved.pathname });
    const location = useLocation();

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
          as={as}
          background={{ color: updatedBackgroundColor }}
          borderRadius={borderRadius}
          className={`${className} ${match ? activeClassName : ''} link`}
          margin={margin}
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
          states={{
            state: {
              current: match ? true : false,
              focused,
            },
          }}
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
