import { memo, ReactElement } from 'react';
import { Container } from '../layout/Container';
import { ContainerProps } from '../../types';

type AnimatedContainerProps = ContainerProps;

export const AnimatedContainer = memo(
  ({ children, ...props }: AnimatedContainerProps): ReactElement => {
    return <Container {...props}>{children}</Container>;
  },
);
