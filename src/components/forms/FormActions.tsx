import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../layout/Container';
import { AlignHorizontal, Alignment, Amount, Orientation } from '../../types';

export const FormActions = memo(
  ({ children, ...props }: ContainerProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.SpaceBetween,
          orientation: Orientation.Horizontal,
        }}
        className="form-actions"
        margin={{
          top: Amount.More,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
