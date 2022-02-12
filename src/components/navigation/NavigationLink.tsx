import {
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Align,
  Amount,
  CommonComponentProps,
  LinkProps,
  Orientation,
  Size,
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
} & LabelProps<HTMLAnchorElement> &
  LinkProps;

export const NavigationLink = memo(
  ({
    active,
    activeClassName = 'active',
    alignContent,
    alignItems = Align.Left,
    backgroundColor,
    borderRadius = Amount.Less,
    children,
    className = '',
    focus,
    grow = true,
    hover,
    icon,
    label,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    menu,
    onClick,
    onMouseEnter,
    onMouseLeave,
    orientation = Orientation.Horizontal,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    rel,
    size,
    target,
    textColor = TextColors.Default,
    textSize,
    textWeight,
    to,
    width,
    ...props
  }: NavigationLinkProps): ReactElement => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [updatedBackgroundColor, setUpdatedBackgroundColor] =
      useState(backgroundColor);
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
      if (focused && focus?.backgroundColor) {
        setUpdatedBackgroundColor(focus.backgroundColor);
      } else if (exactMatch && active?.backgroundColor) {
        setUpdatedBackgroundColor(active.backgroundColor);
      } else if (hovered && hover?.backgroundColor) {
        setUpdatedBackgroundColor(hover.backgroundColor);
      } else {
        setUpdatedBackgroundColor(backgroundColor);
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
          textDecoration: 'none',
        }}
      >
        <Container
          alignContent={alignContent}
          alignItems={menu ? Align.Stretch : alignItems}
          active={active}
          backgroundColor={updatedBackgroundColor}
          borderRadius={borderRadius}
          boxShadow={{
            blurRadius: 8,
            color: backgroundColor,
            offsetX: 0,
            offsetY: 3,
            opacity: 35,
            spreadRadius: 3,
          }}
          className={`${className} ${exactMatch ? activeClassName : ''} link`}
          focus={focus}
          focused={focused}
          grow={grow}
          hover={hover}
          margin={margin}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
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
          orientation={menu ? Orientation.Vertical : orientation}
          padding={padding}
          paddingBottom={menu ? paddingLeft : paddingBottom}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingTop={paddingTop}
          {...props}
        >
          {label ? (
            <Label
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
