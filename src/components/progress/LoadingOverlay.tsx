import { memo, ReactElement } from 'react';

import { Amount, BackgroundColors, PositionBehavior, Size } from '../../types';
import { ProgressSpinner } from './ProgressSpinner';
import { Container, ContainerProps } from '../layout/Container';

type LoadingOverlayProps = {
  readonly spinnerSize?: Size;
  readonly visible?: boolean;
} & ContainerProps<HTMLDivElement>;

export const LoadingOverlay = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    position = {},
    spinnerSize,
    visible,
    ...props
  }: LoadingOverlayProps): ReactElement => {
    return (
      <Container
        background={{
          color: BackgroundColors.Dark,
          opacity: 85,
          ...background,
        }}
        borderRadius={borderRadius}
        className={`${className} loading-overlay`}
        position={{
          behavior: PositionBehavior.Fixed,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          ...position,
        }}
        visible={visible}
        {...props}
      >
        <ProgressSpinner size={spinnerSize} />
      </Container>
    );
  },
);

// const Wrapper = memo(styled.div<LoadingOverlayProps>`
//   ${LayoutStyles};
//   ${AppearanceStyles};

//   align-items: center;
//   backdrop-filter: blur(1px);
//   border-radius: ${props => props.borderRadius};
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   min-height: ${Size.Largest};
//   min-width: ${Size.Largest};
//   opacity: 0;
//   pointer-events: none;
//   position: absolute;
//   left: 0;
//   right: 0;
//   text-align: center;
//   top: 0;
//   transition: background 0.2s cubic-bezier(0.2, 0.3, 0.25, 0.9),
//     opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
//   z-index: 4;

//   ${props =>
//     props.visible &&
//     css`
//       opacity: 1;
//       pointer-events: all;
//     `}
// `);
