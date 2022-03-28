import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Fill,
  Orientation,
  Sizes,
  TextColors,
} from '../../types';
import { Container } from '../layout/Container';
import { Scrollable } from '../layout/Scrollable';
import { MenuProps } from '../menus/Menu';
import { NavigationLink } from './NavigationLink';

export type NavigationMenuProps = MenuProps & {
  matchExactPath?: boolean;
};

export const NavigationMenu = memo(
  ({
    alignment = {},
    background = {},
    className = '',
    margin = {},
    matchExactPath = false,
    menu = [],
    padding = {},
    size = {},
    states = {},
    ...props
  }: NavigationMenuProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          vertical: AlignVertical.Stretch,
          ...alignment,
        }}
        as="nav"
        background={{ color: BackgroundColors.NavigationMenu, ...background }}
        className={`${className} navigation-menu`}
        size={{
          width: 160,
          ...size,
        }}
        {...props}
      >
        <Scrollable padding={{ all: Amount.Less, ...padding }}>
          {menu.map((item, key) => {
            return (
              <NavigationLink
                alignment={{
                  horizontal: AlignHorizontal.Left,
                  orientation: Orientation.Horizontal,
                }}
                background={{
                  color:
                    item?.background?.color ?? BackgroundColors.Transparent,
                }}
                borderRadius={item.borderRadius ?? { all: Amount.Least }}
                className="navigation-menu-item"
                icon={item.icon}
                key={key}
                label={item.label}
                lineHeight={Sizes.Large}
                margin={{
                  bottom: Amount.Least,
                  ...margin,
                }}
                matchExactPath={matchExactPath}
                padding={{
                  bottom: Amount.Least,
                  left: Amount.Default,
                  right: Amount.Default,
                  top: Amount.Least,
                  ...padding,
                }}
                size={{
                  fill: Fill.Horizontal,
                }}
                states={{
                  active: {
                    background: {
                      color: BackgroundColors.Dark,
                    },
                    textColor: TextColors.Darker,
                  },
                  current: {
                    background: {
                      color: BackgroundColors.Primary,
                    },
                    // lineHeight: Sizes.Large,
                    textColor: TextColors.PrimaryContrast,
                    // shadow: {
                    //   radius: 5,
                    //   color: BackgroundColors.Primary,
                    //   offsetX: 0,
                    //   offsetY: 1,
                    //   opacity: 35,
                    //   spreadRadius: 3,
                    // },
                  },
                  focused: {
                    textColor: TextColors.PrimaryContrast,
                  },
                  hovered: {
                    background: {
                      color: BackgroundColors.Light,
                    },
                    textColor: TextColors.Darker,
                  },
                  ...states,
                }}
                textColor={TextColors.Default}
                to={item.to ?? '#'}
              />
            );
          })}
        </Scrollable>
      </Container>
    );
  },
);
