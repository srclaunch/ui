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

export type MenuItemProps = {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly title?: string;
  readonly to?: string;
  readonly value?: any;
} & LabelProps<HTMLAnchorElement | HTMLButtonElement>;

export const MenuItem = memo(
  ({
    active,
    as = 'div',
    background = {},
    borderRadius = {},
    className = '',
    component,
    focus,
    hover,
    icon,
    label,
    lineHeight = Sizes.Default,
    onClick,
    shadow = DepthShadow.Surface,
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
            active={active}
            borderRadius={{ all: Amount.Least, ...borderRadius }}
            background={{
              color: hovered
                ? BackgroundColors.Primary
                : BackgroundColors.Transparent,
              ...background,
            }}
            focus={focus}
            hover={hover}
            icon={icon}
            lineHeight={lineHeight}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();

              if (onClick) onClick(e);
            }}
            padding={{
              left: Amount.Less,
              right: Amount.Less,
            }}
            textColor={props.textColor ?? TextColors.Default}
            to={to}
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
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();

            // @ts-ignore
            if (onClick) onClick(e);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          padding={{
            left: Amount.Less,
            right: Amount.Less,
          }}
          type={hovered ? ButtonType.Primary : ButtonType.Transparent}
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
