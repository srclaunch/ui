import { memo, ReactElement } from 'react';

import { Amount, BackgroundColors, Color, Size, SizeProps } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type OrbProps = {
  readonly color?: Color;
} & ContainerProps<HTMLLabelElement> &
  SizeProps;

export const Orb = memo(
  ({
    color = BackgroundColors.Default,
    className = '',
    size = Size.Smallest,
    ...props
  }: OrbProps): ReactElement => {
    return (
      <Container
        className={`${className} orb`}
        backgroundColor={color}
        borderRadius={Amount.All}
        height={size}
        width={size}
        {...props}
      />
    );
  },
);
