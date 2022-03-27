import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  CommonComponentProps,
  Depth,
  DepthShadow,
  PositionBehavior,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type SlidePanelProps = ContainerProps & {
  readonly origin?: number;
};

export const SlidePanel = memo(
  ({
    background = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Highest,
    origin = 500,
    padding = {},
    position = {},
    shadow = DepthShadow.Highest,
    size = {},
    states = {},
    ...props
  }: SlidePanelProps): ReactElement => {
    return (
      <Container
        animations={[
          {
            from: {
              transform: {
                translate: {
                  x: origin,
                },
              },
            },
            timing: {
              duration: 0.13,
              iterations: 1,
            },
            to: {
              transform: {
                translate: {
                  x: 0,
                },
              },
            },
          },
        ]}
        background={{ color: BackgroundColors.SlidePanel, ...background }}
        borderRadius={{ all: Amount.Most, ...borderRadius }}
        className={`${className} slide-panel`}
        depth={depth}
        padding={{ all: Amount.Less, ...padding }}
        position={{
          behavior: PositionBehavior.Fixed,
          bottom: Amount.Default,
          right: Amount.Default,
          top: Amount.Default,
          ...position,
        }}
        shadow={shadow}
        size={{ width: 380, ...size }}
        states={{
          hidden: {
            animations: [
              {
                from: {
                  transform: {
                    translate: {
                      x: 0,
                    },
                  },
                },
                timing: {
                  duration: 0.13,
                  iterations: 1,
                },
                to: {
                  transform: {
                    translate: {
                      x: origin,
                    },
                  },
                },
              },
            ],
          },
          visible: {
            transform: {
              translate: {
                x: 0,
              },
            },
          },
          ...states,
        }}
        transform={{
          translate: {
            x: origin,
          },
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
