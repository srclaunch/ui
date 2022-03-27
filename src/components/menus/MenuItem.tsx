import { memo, ReactElement } from 'react';
import {
  AlignHorizontal,
  Amount,
  BackgroundColors,
  DepthShadow,
  Sizes,
  TextColors,
  TextOverflow,
} from '../../types';
import { Button, ButtonProps, ButtonType } from '../forms/buttons/Button';
import { IconProps } from '../media/Icon';
import { NavigationLink } from '../navigation/NavigationLink';
import { Label } from '../typography/Label';

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
    alignment = {},
    as = 'button',
    borderRadius = {},
    className = '',
    component,
    events = {},
    icon,
    label,
    lineHeight = Sizes.Default,
    shadow = DepthShadow.Surface,
    states = {},
    to,
    value,
    ...props
  }: MenuItemProps): ReactElement => {
    if (to) {
      return (
        <NavigationLink
          alignment={{
            horizontal: AlignHorizontal.Left,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          // background={{
          //   color: hovered
          //     ? BackgroundColors.Primary
          //     : BackgroundColors.Transparent,
          //   ...background,
          // }}
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
          to={to}
          {...props}
        >
          {component ?? (
            <Label
              icon={icon}
              lineHeight={lineHeight}
              lineWrap={false}
              textOverflow={TextOverflow.Ellipsis}
              {...props}
            >
              {label}
            </Label>
          )}
        </NavigationLink>
      );
    }

    return (
      <Button
        alignment={{
          horizontal: AlignHorizontal.Left,
        }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        // background={{
        //   color: hovered
        //     ? BackgroundColors.Primary
        //     : BackgroundColors.Transparent,
        //   ...background,
        // }}
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
        states={states}
        type={ButtonType.Transparent}
        {...props}
      >
        {component ?? (
          <Label
            icon={icon}
            lineHeight={lineHeight}
            textColor={props.textColor ?? TextColors.Default}
            states={states}
            // {...props}
          >
            {label}
          </Label>
        )}
      </Button>
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
