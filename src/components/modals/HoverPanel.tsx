import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  PositionBehavior,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type HoverPanelProps = ContainerProps & {
  readonly detached?: boolean;
};

export const HoverPanel = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Higher,
    size = {},
    states = {},
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
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} hover-panel`}
        depth={depth}
        position={{
          behavior: PositionBehavior.Absolute,
          right: -6,
          top: `calc(100% - 6px)`,
        }}
        shadow={
          states.state?.visible ? DepthShadow.Higher : DepthShadow.Surface
        }
        size={{
          minWidth: 140,
          ...size,
        }}
        states={states}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
