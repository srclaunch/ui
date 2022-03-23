import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Overflow,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';
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
    ...props
  }: MenuProps): ReactElement => {
    return (
      <Container
        alignment={{
          overflow: Overflow.ScrollVertical,
        }}
        as={as}
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} menu`}
        padding={{ all: Amount.Least, ...padding }}
        shadow={DepthShadow.Low}
        size={{
          minHeight: Sizes.Default,
        }}
        {...props}
      >
        {menu &&
          menu.map((item, key: number) => {
            return (
              <>
                {item.title && (
                  <Label textSize={TextSize.Smaller}>{item.title}</Label>
                )}

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
                  textSize={TextSize.Small}
                  {...item}
                />
              </>
            );
          })}
      </Container>
    );
  },
);
