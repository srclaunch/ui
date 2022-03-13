import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  CommonComponentProps,
  DepthShadow,
  Orientation,
  Overflow,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { MenuItem, MenuItemProps } from './MenuItem';

export type MenuProps = ContainerProps & {
  readonly onItemClick?: (item: MenuItemProps) => void;
  readonly menu?: readonly MenuItemProps[];
  readonly menuItemProps?: MenuItemProps;
};

export const Menu = memo(
  ({
    as = 'nav',
    background = {},
    borderRadius = {},
    className = '',
    menu,
    menuItemProps = {
      active: {
        background: {
          color: BackgroundColors.Primary,
        },
        // shadow: {
        //   blur: 7,
        //   color: BackgroundColors.Primary,
        //   opacity: 35,
        //   x: 0,
        //   y: 2,
        //   spread: 4,
        // },
        textColor: TextColors.PrimaryContrast,
      },
      borderRadius: {},
      focus: {
        textColor: TextColors.PrimaryContrast,
      },
      hover: {
        background: {
          color: BackgroundColors.Primary,
        },
        textColor: TextColors.PrimaryContrast,
      },
      padding: {
        left: Amount.Less,
        right: Amount.Less,
      },
      textSize: TextSize.Small,
    },
    onClick,
    onItemClick,
    padding = {},
    shadow = DepthShadow.Surface,

    ...props
  }: MenuProps): ReactElement => {
    return (
      <Container
        as={as}
        background={{ color: BackgroundColors.Lightest, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} menu`}
        overflow={Overflow.ScrollVertical}
        padding={{ all: Amount.Least, ...padding }}
        shadow={shadow}
        {...props}
      >
        {menu &&
          menu.map((item, key: number) => {
            return (
              <MenuItem
                key={key}
                onClick={() => {
                  if (onItemClick) {
                    onItemClick(item);
                  }
                }}
                {...menuItemProps}
                {...item}
              />
            );
          })}
      </Container>
    );
  },
);
