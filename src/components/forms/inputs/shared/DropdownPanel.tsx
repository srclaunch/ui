import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { VisibilityStyles } from '../../../../styles/container/visibility';
import { FocusStyles } from '../../../../styles/container/focus';
// import { FocusedStyles } from '../../../../styles/focused';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
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
    depth = Depth.Highest,
    position = {},
    size = {},
    states = {},
    ...props
  }: DropdownPanelProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.Lightest, ...background }}
        border={{
          all: {
            color: BorderColors.Transparent,
            style: BorderStyle.Solid,
            width: 1,
          },
          ...border,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        className={`${className} dropdown-panel`}
        depth={depth}
        position={{
          behavior: PositionBehavior.Absolute,
          left: 0,
          right: 0,
          top: size?.height ?? Sizes.Default,
          ...position,
        }}
        size={{ minHeight: 80, maxHeight: 300, ...size }}
        states={{
          state: {
            focused: states.state?.focused,
            visible: states.state?.visible,
          },
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
