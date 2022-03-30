import { ReactElement, memo } from 'react';
import { Container, ContainerProps } from '../../../layout/Container';

type PricingPlansProps = ContainerProps;

export const PricingPlans = memo(({}: PricingPlansProps): ReactElement => {
  return <Container>Pricing plans</Container>;
});
