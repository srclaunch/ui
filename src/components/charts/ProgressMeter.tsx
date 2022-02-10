import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  BackgroundColor,
  BackgroundColors,
  Color,
  ContainerProps,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Text } from '../typography/Text';
import { Container } from '../layout/Container';

type ProgressMeterProps = ContainerProps<
  HTMLDivElement,
  {
    amount?: number;
    color?: Color;
    label?: string;
    size?: Size;
    total?: number;
  }
>;

export const ProgressMeter = memo(
  ({
    amount,
    borderRadius = Amount.Less,
    children,
    color = BackgroundColors.Primary,
    height = Size.Default,
    label,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding = Amount.None,
    total,
    ...props
  }: ProgressMeterProps): ReactElement => {
    const progressPercent =
      amount === 0
        ? 0
        : Number.parseInt((((amount ?? 0) / (total ?? 0)) * 100).toFixed(0));

    return (
      <Container
        backgroundColor={BackgroundColors.Lighter}
        borderRadius={borderRadius}
        grow={false}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        padding={padding}
        style={{
          borderRadius: `calc(${borderRadius} + 3px)`,
        }}
      >
        <Container
          backgroundColor={color as BackgroundColor}
          borderRadius={borderRadius}
          boxShadow={{
            blurRadius: 8,
            color,
            offsetX: 0,
            offsetY: 2,
            opacity: 35,
            spreadRadius: 4,
          }}
          height={height}
          width={`${progressPercent}%`}
          {...props}
        >
          {children}

          {label && (
            <Text
              alignText={Align.Center}
              textSize={TextSize.Larger}
              textColor={TextColors.Darkest}
              textWeight={TextWeight.More}
            >
              {label}
            </Text>
          )}
        </Container>
      </Container>
    );
  },
);
