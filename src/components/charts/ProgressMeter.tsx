import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  Color,
  Size,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';

type ProgressMeterProps = {
  readonly amount?: number;
  readonly color?: Color;
  readonly label?: string;
  readonly size?: Size;
  readonly total?: number;
} & ContainerProps;

export const ProgressMeter = memo(
  ({
    amount,
    background = {},
    borderRadius = {},
    children,
    label,

    size = {
      height: Sizes.Default,
    },
    total,
    ...props
  }: ProgressMeterProps): ReactElement => {
    const progressPercent =
      amount === 0
        ? 0
        : Number.parseInt((((amount ?? 0) / (total ?? 0)) * 100).toFixed(0));

    return (
      <Container
        background={{
          color: BackgroundColors.Primary,
          ...background,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        {...props}
      >
        <Container
          background={{
            color: BackgroundColors.Primary,
            ...background,
          }}
          borderRadius={{ all: Amount.Less, ...borderRadius }}
          // shadow={shadow}
          size={{
            width: `${progressPercent}%`,
          }}
        >
          {children}

          {label && (
            <Label
              textAlign={TextAlign.Center}
              textSize={TextSize.Larger}
              textColor={TextColors.Darkest}
              textWeight={TextWeight.More}
            >
              {label}
            </Label>
          )}
        </Container>
      </Container>
    );
  },
);
