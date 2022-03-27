import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Fill,
  Overflow,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Scrollable } from '../layout/Scrollable';
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
    size = {},
    states = {},
    ...props
  }: MenuProps): ReactElement => {
    return (
      <Container
        as={as}
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} menu`}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        shadow={DepthShadow.Low}
        {...props}
      >
        <Scrollable
          alignment={{
            overflow: Overflow.ScrollVertical,
          }}
          padding={{ all: Amount.Least, ...padding }}
        >
          {menu &&
            menu.map((item, key: number) => {
              return (
                <Container key={key}>
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
                      ...states,
                    }}
                    textSize={TextSize.Small}
                    {...item}
                  />
                </Container>
              );
            })}
        </Scrollable>
      </Container>
    );
  },
);
