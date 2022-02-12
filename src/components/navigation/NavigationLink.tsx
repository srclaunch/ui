import {
  NavLink,
  useLocation,
  useMatch,
  useResolvedPath,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  Amount,
  CommonComponentProps,
  LinkProps,
  Orientation,
  Size,
} from '../../types';
import { IconProps } from '../media/Icon';
import { MenuItemProps } from '../menus/MenuItem';
import { Label, LabelProps } from '../typography/Label';
import { ContainerProps } from '../layout/Container';

export type NavigationLinkProps = {
  readonly activeClassName?: string;
  readonly icon?: IconProps;
  readonly inline?: boolean;
  readonly menu?: readonly MenuItemProps[];
  readonly size?: Size;
} & CommonComponentProps<HTMLAnchorElement> &
  ContainerProps<HTMLAnchorElement> &
  LabelProps &
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
    textColor,
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

    const content =
      typeof children === 'string' ? (
        <Label
          grow
          icon={{ ...icon, color: updatedTextColor }}
          lineHeight={size}
          // padding={Amount.None}
          // paddingLeft={Amount.Less}
          // paddingRight={Amount.Less}
          textColor={updatedTextColor}
          textSize={textSize}
          textWeight={textWeight}
        >
          {children}
        </Label>
      ) : (
        children
      );

    return (
      <NavLink
        className={`${className} navigation-link`}
        onBlur={() => setFocused(false)}
        onClick={onClick}
        onFocus={() => setFocused(true)}
        // @ts-ignore
        onMouseEnter={e => {
          setHovered(true);

          if (onMouseEnter) onMouseEnter(e);
        }}
        // @ts-ignore
        onMouseLeave={e => {
          setHovered(false);

          if (onMouseLeave) onMouseLeave(e);
        }}
        rel={rel}
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          width,
        }}
        target={target}
        to={to + location.search}
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
          focused={focused}
          grow={grow}
          hover={hover}
          margin={margin}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
          orientation={menu ? Orientation.Vertical : orientation}
          padding={padding}
          paddingBottom={menu ? paddingLeft : paddingBottom}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingTop={paddingTop}
        >
          {content}
        </Container>
      </NavLink>
    );
  },
);

const Container = styled.span<Omit<NavigationLinkProps, 'to'>>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};

  cursor: pointer;
  text-decoration: none;

  * {
    cursor: pointer;
  }

  &:before {
    border-radius: calc(${props => props.borderRadius} + 3px);
  }
`;
