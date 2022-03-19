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
import { SlideLeft, SlideRight } from '../../lib/animation/library';

type SlidePanelProps = ContainerProps & {
  readonly visible?: boolean;
};

export const SlidePanel = memo(
  ({
    as = 'div',
    background = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Highest,
    padding = {},
    position = {},
    shadow = DepthShadow.Highest,
    size = {},
    visible = false,
    ...props
  }: SlidePanelProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.SlidePanel, ...background }}
        as={as}
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
          visible: {
            animations: visible ? [SlideLeft] : [SlideRight],
          },
        }}
        visibility={{ hidden: !visible, ...props.visibility }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
