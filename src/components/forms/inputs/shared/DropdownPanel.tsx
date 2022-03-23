import { memo, ReactElement } from 'react';

// import { FocusedStyles } from '../../../../styles/focused';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  PositionBehavior,
  Sizes,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';

type DropdownPanelProps = {
  readonly visible?: boolean;
  readonly setMenuVisible?: (visible: boolean) => unknown;
} & ContainerProps;

export const DropdownPanel = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    position = {},
    size = {},
    states = {},
    ...props
  }: DropdownPanelProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.DropdownMenu, ...background }}
        borderRadius={Object.assign(
          { all: Amount.Least, ...borderRadius },
          states.state?.dropdown?.visible
            ? {
                topLeft: Amount.None,
                topRight: Amount.None,
              }
            : {},
        )}
        border={Object.assign(
          {},
          {
            all: {
              color:
                states.state?.error &&
                Array.isArray(states.state.error) &&
                states?.state.error.length > 0
                  ? BorderColors.Error
                  : border?.all?.color ?? BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          },
          states.state?.dropdown?.visible
            ? {
                top: {
                  color: BorderColors.Transparent,
                  style: BorderStyle.None,
                  width: 1,
                },
              }
            : {},
        )}
        className={`${className} dropdown-panel`}
        depth={states.state?.dropdown?.visible ? Depth.Higher : Depth.Surface}
        position={{
          behavior: PositionBehavior.Absolute,
          left: 0,
          right: 0,
          top: size?.height ?? Sizes.Default,
          ...position,
        }}
        shadow={
          states.state?.dropdown?.visible
            ? DepthShadow.Higher
            : DepthShadow.Surface
        }
        size={{ minHeight: Sizes.Default, maxHeight: 300, ...size }}
        states={states}
        visibility={{
          hidden: !states.state?.dropdown?.visible,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
