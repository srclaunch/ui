import { ReactElement } from 'react';
import { BackgroundColors, Fill, Overflow } from '../../types';
import { Container, ContainerProps } from './Container';

type ScrollableProps = ContainerProps & {
  direction?: 'both' | 'horizontal' | 'vertical';
};

export const Scrollable = ({
  alignment = {},
  children,
  className = '',
  size = {},
  ...props
}: ScrollableProps): ReactElement => {
  return (
    <Container
      alignment={{
        overflow: Overflow.ScrollVertical,
        ...alignment,
      }}
      background={{
        color: BackgroundColors.Transparent,
      }}
      className={`${className} scrollable`}
      size={{
        fill: Fill.Both,
        ...size,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
