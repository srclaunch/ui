import { memo, MouseEvent, ReactElement, useState } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  DepthShadow,
  TextColors,
  TextSize,
} from '../../types';
import { Button, ButtonProps, ButtonType } from '../forms/buttons/Button';
import { Container, ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import {
  NavigationLink,
  NavigationLinkProps,
} from '../navigation/NavigationLink';
import { Label, LabelProps } from '../typography/Label';

export type MenuItemProps = {
  readonly component?: ReactElement;
  readonly icon?: IconProps;
  readonly label?: string;
  readonly onClick?: (menuItem?: MenuItemProps) => void;
  readonly title?: string;
  readonly to?: string;
  readonly value?: any;
} & Omit<LabelProps<NavigationLinkProps | ButtonProps>, 'onClick'> & {
    readonly onClick?: (menuItem?: MenuItemProps) => void;
  };

export const MenuItem = memo(
  ({
    active,
    as = 'div',
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Surface,
    className = '',
    component,
    focus,
    hover,
    icon,
    label,
    onClick,
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
            borderRadius={Amount.Least}
            backgroundColor={
              hovered ? BackgroundColors.Primary : BackgroundColors.Transparent
            }
            focus={focus}
            hover={hover}
            icon={icon}
            onClick={e => {
              if (onClick) onClick({ icon, label, value });
            }}
            paddingLeft={Amount.Less}
            paddingRight={Amount.Less}
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
          alignContent={Align.Left}
          borderRadius={Amount.Least}
          backgroundColor={
            hovered ? BackgroundColors.Primary : BackgroundColors.Transparent
          }
          form="null"
          icon={icon}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();

            if (onClick) onClick({ icon, label, value });
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          paddingLeft={Amount.Less}
          paddingRight={Amount.Less}
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
