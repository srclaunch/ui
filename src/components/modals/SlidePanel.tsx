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

type SlidePanelProps = {
  readonly visible?: boolean;
} & CommonComponentProps<HTMLDivElement> &
  ContainerProps;

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
          bottom: 0,
          right: 0,
          top: 0,
          ...position,
        }}
        visible={visible}
        shadow={shadow}
        size={{ width: 380, ...size }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
