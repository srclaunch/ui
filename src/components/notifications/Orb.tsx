import { memo, ReactElement } from 'react';

import { Amount, BackgroundColors, Color, Size, Sizes } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type OrbProps = {
  readonly color?: BackgroundColors;
} & ContainerProps;

export const Orb = memo(
  ({
    color = BackgroundColors.Default,
    className = '',
    size = {
      height: Sizes.Smallest,
      width: Sizes.Smallest,
    },
    ...props
  }: OrbProps): ReactElement => {
    return (
      <Container
        className={`${className} orb`}
        background={{
          color,
        }}
        borderRadius={{ all: Amount.All }}
        size={size}
        {...props}
      />
    );
  },
);
