import { memo, ReactElement } from 'react';

import { Align, ContainerProps } from '../../types';
import { Container } from './Container';

type AlignRightProps = ContainerProps<HTMLDivElement>;

export const AlignRight = memo(
  ({ children, ...props }: AlignRightProps): ReactElement => {
    return (
      <Container alignItems={Align.Right} className="right" {...props}>
        {children}
      </Container>
    );
  },
);
