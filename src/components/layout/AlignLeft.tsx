import { memo, ReactElement } from 'react';
import { Container } from './Container';
import { Align, ContainerProps, DimensionProps } from '../../types';

type AlignLeftProps = ContainerProps<HTMLDivElement, DimensionProps<{}>>;

export const AlignLeft = memo(
  ({ children, ...props }: AlignLeftProps): ReactElement => {
    return (
      <Container alignItems={Align.Left} className="align-left" {...props}>
        {children}
      </Container>
    );
  },
);
