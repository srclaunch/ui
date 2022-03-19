import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type HoverPanelProps = ContainerProps & {
  readonly detached?: boolean;
  readonly visible?: boolean;
  readonly setMenuVisible?: (visible: boolean) => unknown;
};

export const HoverPanel = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Higher,
    detached = true,
    setMenuVisible,
    states = {},
    visible = true,
    ...props
  }: HoverPanelProps): ReactElement => {
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
        className={`${className} hover-panel`}
        depth={depth}
        shadow={visible ? DepthShadow.Higher : DepthShadow.Surface}
        states={{
          state: { focused: states.state?.focused, visible },
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
