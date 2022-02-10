import { memo, ReactElement } from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../../types';

type BadgeProps = ContainerProps<
  HTMLDivElement,
  {
    label?: string | number;
  }
>;

export const Badge = memo(({ children, label }: BadgeProps): ReactElement => {
  return <Container>{label?.toString() ?? children}</Container>;
});

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
