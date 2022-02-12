import { memo, ReactElement } from 'react';

import { Align, ContainerProps } from '../../types';
import { Container } from './Container';

type AlignLeftProps = ContainerProps<HTMLDivElement>;

export const AlignLeft = memo(
  ({ children, ...props }: AlignLeftProps): ReactElement => {
    return (
      <Container alignItems={Align.Left} className="align-left" {...props}>
        {children}
      </Container>
    );
  },
);
