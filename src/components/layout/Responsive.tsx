import { memo, ReactElement } from 'react';
import styled from 'styled-components';

type ResponsiveProps = {
  children: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
};

export const Responsive = memo(
  ({ children }: ResponsiveProps): ReactElement => {
    return <Container>{children}</Container>;
  },
);

const Container = styled.div`
  /* padding: 0 15px; */

  /* @media (min-width: 480px) {
    padding: 0 25px;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    padding: 0 50px;
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1160px;
  } */
`;
