import { memo, MouseEvent, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Orientation,
  Overflow,
  Size,
  TextColors,
  TextSize,
} from '../../types';
import { MenuItem, MenuItemProps } from './MenuItem';
import { Container, ContainerProps } from '../layout/Container';
import { LabelProps } from '../typography/Label';

export type MenuProps<E = HTMLElement, T = any, P = {}> = Omit<
  ContainerProps<
    E,
    {
      menu?: MenuItemProps<T>[];
      menuItemProps?: MenuItemProps;
    }
  >,
  'onClick'
> & { onClick?: (menuItem?: MenuItemProps, event?: MouseEvent) => void } & P;

export const Menu = memo(
  ({
    as = 'nav',
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Surface,
    className = '',
    menu,
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
        backgroundColor: BackgroundColors.Primary,
        textColor: TextColors.PrimaryContrast,
      },
      padding: Amount.None,
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textSize: TextSize.Small,
    },
    maxHeight = 120,
    onClick,
    orientation = Orientation.Vertical,
    minWidth = 80,
    padding = Amount.Least,
    ...props
  }: MenuProps): ReactElement => {
    return (
      <Container
        as={as}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        borderRadius={borderRadius}
        className={`${className} menu`}
        maxHeight={maxHeight}
        minWidth={minWidth}
        orientation={orientation}
        overflow={Overflow.ScrollVertical}
        padding={padding}
        {...props}
      >
        {menu &&
          menu.map((item, key: number) => {
            return (
              <MenuItem
                key={key}
                onClick={onClick}
                {...menuItemProps}
                {...item}
              />
            );
          })}
      </Container>
    );
  },
);
