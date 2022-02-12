import { memo, ReactElement } from 'react';

import { ContainerProps, Size, SizeProps } from '../../types';
import { Container } from '../layout/Container';

type LineBreakProps = ContainerProps<HTMLDivElement> & SizeProps;

export const LineBreak = memo(
  ({
    className = '',
    size = Size.Default,
    ...props
  }: LineBreakProps): ReactElement => {
    return (
      <Container
        className={`${className} link-break`}
        height={size}
        {...props}
      />
    );
  },
);
