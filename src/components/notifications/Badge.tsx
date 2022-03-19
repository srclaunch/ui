import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../layout/Container';

type BadgeProps = ContainerProps & {
  readonly label?: string | number;
};

export const Badge = memo(
  ({ children, label, ...props }: BadgeProps): ReactElement => {
    return <Container {...props}>{label?.toString() ?? children}</Container>;
  },
);
