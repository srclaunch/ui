import { memo, ReactElement } from 'react';

import { CommonComponentProps } from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';

type TabProps = CommonComponentProps<
  ContainerProps<
    HTMLDivElement,
    {
      label: string;
      selected?: boolean;
      visible?: boolean;
    }
  >
>;

export const Tab = memo(
  ({ className = '', children, label, onClick }: TabProps): ReactElement => {
    return (
      <Container
        className={`${className} tab`}
        data-label={label}
        fadeIn={true}
      >
        {children}
      </Container>
    );
  },
);
