import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Overflow,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { MenuItem, MenuItemProps } from './MenuItem';

export type MenuProps = ContainerProps & {
  readonly onItemClick?: (item: MenuItemProps) => void;
  readonly menu?: readonly MenuItemProps[];
};

export const Menu = memo(
  ({
    as = 'nav',
    background = {},
    borderRadius = {},
    className = '',
    menu,
    events = {},
    onItemClick,
    padding = {},
    shadow = DepthShadow.Surface,
    ...props
  }: MenuProps): ReactElement => {
    return (
      <Container
        alignment={{
          overflow: Overflow.ScrollVertical,
        }}
        as={as}
        background={{ color: BackgroundColors.Lightest, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} menu`}
        padding={{ all: Amount.Least, ...padding }}
        shadow={shadow}
        {...props}
      >
        {menu &&
          menu.map((item, key: number) => {
            return (
              <MenuItem
                events={{
                  mouse: {
                    onClick: () => {
                      if (onItemClick) {
                        onItemClick(item);
                      }
                    },
                  },
                }}
                key={key}
                // borderRadius= {}

                padding={{
                  left: Amount.Less,
                  right: Amount.Less,
                }}
                states={{
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
                  focused: {
                    textColor: TextColors.PrimaryContrast,
                  },
                  hovered: {
                    background: {
                      color: BackgroundColors.Primary,
                    },
                    textColor: TextColors.PrimaryContrast,
                  },
                }}
                textSize={TextSize.Small}
                {...item}
              />
            );
          })}
      </Container>
    );
  },
);
