import { memo, MouseEvent, ReactElement, useState } from 'react';

import { Button, ButtonType } from '../forms/buttons/Button';
import { Container } from '../layout/Container';
import { NavigationLink } from '../navigation/NavigationLink';

import {
  Align,
  Amount,
  BackgroundColors,
  DepthShadow,
  TextColors,
  TextSize,
} from '../../types';
import { IconProps } from '../media/Icon';

import { Label, LabelProps } from '../typography/Label';

export type MenuItemProps<
  E = HTMLAnchorElement | HTMLButtonElement,
  P = {},
> = Omit<
  LabelProps<
    E,
    {
      component?: ReactElement;
      icon?: IconProps;
      label?: string;
      title?: string;
      to?: string;
      value?: any;
    }
  >,
  'onClick'
> & {
  onClick?: (menuItem?: MenuItemProps, event?: MouseEvent) => void;
} & P;

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
              if (onClick) onClick({ icon, label, value }, e);
            }}
            paddingLeft={Amount.Less}
            paddingRight={Amount.Less}
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

            if (onClick) onClick({ icon, label, value }, e);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          paddingLeft={Amount.Less}
          paddingRight={Amount.Less}
          type={hovered ? ButtonType.Primary : ButtonType.Transparent}
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
