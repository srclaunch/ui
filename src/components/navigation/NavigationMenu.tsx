import { memo, ReactElement } from 'react';

import { Label } from '../..';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Fill,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Menu, MenuProps } from '../menus/Menu';
import { NavigationLink } from './NavigationLink';

export type NavigationMenuProps = ContainerProps<HTMLDivElement> & MenuProps;

export const NavigationMenu = memo(
  ({
    alignment = {},
    background = {},
    className = '',
    padding = {},
    menu = [],
    menuItemProps = {
      active: {
        background: {
          color: BackgroundColors.Primary,
        },
        // shadow: {
        //   radius: 5,
        //   color: BackgroundColors.Primary,
        //   offsetX: 0,
        //   offsetY: 1,
        //   opacity: 35,
        //   spreadRadius: 3,
        // },
        textColor: TextColors.PrimaryContrast,
      },
      alignment: {
        fill: Fill.Horizontal,
      },
      borderRadius: {
        all: Amount.Least,
      },
      focus: {
        textColor: TextColors.PrimaryContrast,
      },
      hover: {
        background: {
          color: BackgroundColors.Light,
        },
        textColor: TextColors.Light,
      },
      lineHeight: Sizes.Default,
      padding: {
        bottom: Amount.Least,
        left: Amount.Default,
        right: Amount.Default,
        top: Amount.Least,
      },
      textColor: TextColors.Default,
      textSize: TextSize.Default,
    },
    ...props
  }: NavigationMenuProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        as="nav"
        background={{ color: BackgroundColors.NavigationMenu, ...background }}
        className={`${className} navigation-menu`}
        padding={{ all: Amount.Less, ...padding }}
        {...props}
      >
        {menu.map((item, key) => {
          return (
            <NavigationLink
              active={menuItemProps?.active ?? item.active}
              // background={
              //   {menuItemProps?.background ?? { color: BackgroundColors.Transparent }
              // }
              borderRadius={
                menuItemProps.borderRadius ??
                item.borderRadius ?? { all: Amount.Default }
              }
              className="navigation-menu-item"
              focus={menuItemProps?.focus ?? item.focus}
              hover={menuItemProps?.hover ?? item.hover}
              icon={item.icon}
              key={key}
              label={item.label}
              margin={
                menuItemProps.margin ?? {
                  bottom: Amount.Least,
                }
              }
              padding={menuItemProps.padding ?? { all: Amount.None }}
              textColor={menuItemProps.textColor ?? TextColors.Default}
              to={item.to ?? '#'}
              {...menuItemProps}
            />
          );
        })}
      </Container>
    );
  },
);
