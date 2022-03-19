import { PageRoute } from '@srclaunch/types';
import { DualLightIcons } from '@srclaunch/icons';

import { memo, ReactElement } from 'react';
import {
  AlignVertical,
  Amount,
  BackgroundColors,
  DepthShadow,
  Fill,
  Orientation,
  Overflow,
  Sizes,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Title } from '../typography/Title';
import { NavigationLink } from './NavigationLink';
import { Icon } from '../media/Icon';
import { TextProps } from '../typography/Text';

export type BreadcrumbNavigationProps = ContainerProps &
  TextProps & {
    items: {
      label?: string;
      path?: string;
    }[];
  };

export const BreadcrumbNavigation = memo(
  ({
    alignment = {},
    className = '',
    items = [],
    shadow = DepthShadow.Surface,
    textSize = TextSize.Default,
    ...props
  }: BreadcrumbNavigationProps): ReactElement => {
    return (
      <Container
        alignment={{
          fill: Fill.Both,
          orientation: Orientation.Horizontal,
          ...alignment,
        }}
        className={`${className} menu`}
        shadow={shadow}
        {...props}
      >
        {items.map(({ label, path }, index) => (
          <Container
            alignment={{
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Center,
            }}
            key={index}
          >
            {path ? (
              <NavigationLink
                to={path}
                key={index}
                states={{
                  hovered: {
                    textDecoration: {
                      line: TextDecorationLine.Underline,
                    },
                  },
                }}
                textDecoration={{
                  line: TextDecorationLine.None,
                }}
              >
                <Title
                  textColor={TextColors.Primary}
                  textSize={textSize}
                  textWeight={TextWeight.Most}
                >
                  {label}
                </Title>
              </NavigationLink>
            ) : (
              <Title
                key={index}
                textSize={textSize}
                textWeight={TextWeight.Most}
              >
                {label}
              </Title>
            )}

            {index !== items.length - 1 && (
              <Icon
                name={DualLightIcons.ChevronDoubleForward}
                margin={{ left: Amount.Less, right: Amount.Less }}
                size={{ height: textSize, width: textSize }}
              />
            )}
          </Container>
        ))}
      </Container>
    );
  },
);
