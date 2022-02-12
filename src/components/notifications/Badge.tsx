import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { ContainerProps } from '../../types';

type BadgeProps = {
  readonly label?: string | number;
} & ContainerProps<HTMLDivElement>;

export const Badge = memo(
  ({ children, label, ...props }: BadgeProps): ReactElement => {
    return <Container {...props}>{label?.toString() ?? children}</Container>;
  },
);

const Container = styled.div`
  background: #f2f2f2;
  color: #7b7b7b;
  border-radius: 4px;
  float: left;
  font-size: 9px;
  margin: 0 10px 0 0;
  padding: 4px 6px 5px 6px;
  position: relative;
  text-transform: capitalize;
`;
