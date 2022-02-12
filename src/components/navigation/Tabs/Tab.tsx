import { memo, ReactElement } from 'react';

import { CommonComponentProps } from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';

export type TabProps = {
  readonly label: string;
  readonly selected?: boolean;
  readonly visible?: boolean;
} & CommonComponentProps<HTMLDivElement> &
  ContainerProps<HTMLDivElement>;

export const Tab = memo(
  ({ className = '', children, label, onClick }: TabProps): ReactElement => {
    return (
      <Container className={`${className} tab`} data-label={label} fadeIn>
        {children}
      </Container>
    );
  },
);
