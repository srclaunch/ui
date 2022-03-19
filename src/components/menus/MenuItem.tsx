import { memo, MouseEvent, ReactElement, useState } from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColors,
  DepthShadow,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Button, ButtonProps, ButtonType } from '../forms/buttons/Button';
import { Container, ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import { NavigationLink } from '../navigation/NavigationLink';
import { Label, LabelProps } from '../typography/Label';

export type MenuItemProps = ButtonProps & {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly title?: string;
  readonly to?: string;
  readonly value?: any;
};

export const MenuItem = memo(
  ({
    as = 'button',
    background = {},
    borderRadius = {},
    className = '',
    component,
    events = {},
    icon,
    label,
    lineHeight = Sizes.Default,
    shadow = DepthShadow.Surface,
    states = {},
    title,
    to,
    value,
    ...props
  }: MenuItemProps): ReactElement => {
    const [hovered, setHovered] = useState(false);

    const itemTitle = title ? (
      <Label textSize={TextSize.Smaller}>{title}</Label>
    ) : null;

    if (to) {
      return (
        <Container>
          {itemTitle}

          <NavigationLink
            borderRadius={{ all: Amount.Least, ...borderRadius }}
            background={{
              color: hovered
                ? BackgroundColors.Primary
                : BackgroundColors.Transparent,
              ...background,
            }}
            events={{
              mouse: {
                onClick: e => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (events.mouse?.onClick) events.mouse?.onClick(e);
                },
              },
            }}
            icon={icon}
            lineHeight={lineHeight}
            padding={{
              left: Amount.Less,
              right: Amount.Less,
            }}
            states={{
              state: {},
            }}
            textColor={props.textColor ?? TextColors.Default}
            to={to}
            {...props}
          >
            {component ?? label}
          </NavigationLink>
        </Container>
      );
    }

    return (
      <Container>
        {itemTitle}

        <Button
          alignment={{
            vertical: AlignVertical.Center,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          background={{
            color: hovered
              ? BackgroundColors.Primary
              : BackgroundColors.Transparent,
            ...background,
          }}
          form="null"
          icon={icon}
          lineHeight={lineHeight}
          events={{
            mouse: {
              onClick: e => {
                e.preventDefault();
                e.stopPropagation();

                if (events.mouse?.onClick) events.mouse?.onClick(e);
              },
            },
          }}
          padding={{
            left: Amount.Less,
            right: Amount.Less,
          }}
          states={{
            hovered: {
              type: ButtonType.Primary,
            },
          }}
          type={ButtonType.Transparent}
          {...props}
        >
          {component ?? label}
        </Button>
      </Container>
    );
    // return (
    //   <Container
    //     as={as}
    //     backgroundColor={backgroundColor}
    //     boxShadow={boxShadow}
    //     borderRadius={borderRadius}
    //     className={`${className} menu-item`}
    //     {...props}
    //   >
    //     {title && <Label>{title}</Label>}

    //     {icon && <Icon {...icon} />}
    //     {label && <Label>{label}</Label>}

    //     {to && <NavigationLink to={to}>{to}</NavigationLink>}
    //     {value && <Label>{value}</Label>}
    //     {onClick && (
    //       <Button
    //         type={ButtonType.Secondary}
    //         onClick={(e: MouseEvent<HTMLButtonElement>): void => {
    //           onClick({
    //             event: e,
    //             value,
    //           });
    //         }}
    //       >
    //         {label}
    //       </Button>
    //     )}
    //   </Container>
    // );
  },
);
