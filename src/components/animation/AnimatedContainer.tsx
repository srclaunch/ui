import { memo, ReactElement } from 'react';
import { Container } from '../layout/Container';
import { ContainerProps } from '../../types';

export type AnimatedContainerProps = ContainerProps;

export const AnimatedContainer = memo(
  ({ children, ...props }: AnimatedContainerProps): ReactElement => {
    return <Container {...props}>{children}</Container>;
  },
);
