import { memo, ReactElement } from 'react';

import { Label } from '../..';
import {
  Align,
  Amount,
  BackgroundColors,
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
    alignContent = Align.Left,
    alignItems = Align.Center,
    backgroundColor = BackgroundColors.NavigationMenu,
    className = '',
    padding = Amount.Less,
    menu = [],
    menuItemProps = {
      active: {
        backgroundColor: BackgroundColors.Primary,
        boxShadow: {
          blurRadius: 7,
          color: BackgroundColors.Primary,
          offsetX: 0,
          offsetY: 2,
          opacity: 35,
          spreadRadius: 4,
        },
        textColor: TextColors.PrimaryContrast,
      },
      borderRadius: Amount.Least,
      focus: {
        textColor: TextColors.PrimaryContrast,
      },
      hover: {
        backgroundColor: BackgroundColors.Light,
        textColor: TextColors.Light,
      },
      padding: Amount.Least,
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textSize: TextSize.Default,
    },
    ...props
  }: NavigationMenuProps): ReactElement => {
    return (
      <Container
        alignItems={Align.Stretch}
        alignContent={Align.Top}
        as="nav"
        backgroundColor={backgroundColor}
        className={`${className} navigation-menu`}
        padding={Amount.Less}
        {...props}
      >
        {menu.map((item, key) => {
          return (
            <NavigationLink
              active={menuItemProps?.active ?? item.active}
              backgroundColor={
                menuItemProps?.backgroundColor ?? BackgroundColors.Transparent
              }
              borderRadius={
                menuItemProps.borderRadius ??
                item.borderRadius ??
                Amount.Default
              }
              className="navigation-menu-item"
              focus={menuItemProps?.focus ?? item.focus}
              grow={false}
              hover={menuItemProps?.hover ?? item.hover}
              icon={item.icon}
              key={key}
              label={item.label}
              margin={menuItemProps.margin ?? Amount.None}
              marginBottom={menuItemProps.marginBottom ?? Amount.Least}
              marginLeft={menuItemProps.marginLeft ?? Amount.None}
              marginRight={menuItemProps.marginRight ?? Amount.None}
              marginTop={menuItemProps.marginTop ?? Amount.None}
              padding={menuItemProps.padding ?? Amount.None}
              paddingBottom={
                menuItemProps.paddingBottom ?? menuItemProps.padding
              }
              paddingLeft={menuItemProps.paddingLeft ?? menuItemProps.padding}
              paddingRight={menuItemProps.paddingRight ?? menuItemProps.padding}
              paddingTop={menuItemProps.paddingTop ?? menuItemProps.padding}
              to={item.to ?? '#'}
              {...menuItemProps}
            />
          );
        })}
      </Container>
    );
  },
);
