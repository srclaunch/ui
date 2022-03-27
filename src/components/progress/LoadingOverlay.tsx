import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Depth,
  PositionBehavior,
  Size,
} from '../../types';
import { ProgressSpinner } from './ProgressSpinner';
import { Container, ContainerProps } from '../layout/Container';

type LoadingOverlayProps = ContainerProps & {
  readonly spinnerSize?: Size;
};

export const LoadingOverlay = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    position = {},
    spinnerSize,
    states = {},
    ...props
  }: LoadingOverlayProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
        }}
        background={{
          color: BackgroundColors.Dark,
          opacity: 85,
          ...background,
        }}
        borderRadius={borderRadius}
        className={`${className} loading-overlay`}
        position={{
          behavior: PositionBehavior.Absolute,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          ...position,
        }}
        states={{
          visible: {
            visibility: {
              opacity: 1,
            },
          },
          ...states,
        }}
        visibility={{
          opacity: 0,
        }}
        style={{
          zIndex: 10,
        }}
        {...props}
      >
        <ProgressSpinner size={spinnerSize} />
      </Container>
    );
  },
);
