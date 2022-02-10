import { memo, ReactElement } from 'react';

import { Container } from '../layout/Container';
import { Align, Amount, ContainerProps, Orientation } from '../../types';

export const FormActions = memo(
  ({ children, ...props }: ContainerProps): ReactElement => {
    return (
      <Container
        alignContent={Align.SpaceBetween}
        className="form-actions"
        marginTop={Amount.More}
        orientation={Orientation.Horizontal}
        grow={false}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
