import { memo, ReactElement } from 'react';
import { Container } from './Container';
import { Align, ContainerProps, DimensionProps } from '../../types';

type AlignRightProps = ContainerProps<HTMLDivElement, DimensionProps<{}>>;

export const AlignRight = memo(
  ({ children, ...props }: AlignRightProps): ReactElement => {
    return (
      <Container alignItems={Align.Right} className="right" {...props}>
        {children}
      </Container>
    );
  },
);
