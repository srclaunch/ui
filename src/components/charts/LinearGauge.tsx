import { memo, ReactElement } from 'react';
import {
  Align,
  Amount,
  // Amount,
  BackgroundColor,
  BackgroundColors,
  BorderStyle,
  Color,
  Orientation,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Container } from '../layout/Container';
import { Text } from '../typography/Text';
import { FormatterProps, formatValue } from '../../lib/data/format';

type LinearGaugeProps = {
  amount: number;
  color: Color;
  formatter?: FormatterProps;
  label?: string;
  showTicks?: boolean;
  showTickLabels?: boolean;
  showValue?: boolean;
  size?: Size;
  tickCount?: number;
  total: number;
};

export const LinearGauge = memo(
  ({
    amount,
    color,
    formatter,
    showTicks = true,
    showTickLabels = true,
    showValue = true,
    tickCount = 5,
    total,
  }: LinearGaugeProps): ReactElement => {
    const progressPercent =
      amount === 0 ? 0 : Number.parseInt(((amount / total) * 100).toFixed(0));
    const tickPercent = total / tickCount;

    return (
      <Container>
        {showTicks && (
          <Container orientation={Orientation.Horizontal}>
            {showValue && (
              <Container
                border={{
                  left: {
                    color,
                    style: BorderStyle.Solid,
                    width: 3,
                  },
                }}
                height={9}
                style={{
                  left: `calc(${progressPercent}% - 3px)`,
                  position: 'absolute',
                  top: '-3px',
                }}
              >
                <Text
                  alignText={Align.Center}
                  lineHeight={Amount.None}
                  textColor={color}
                  textSize={TextSize.Small}
                  textWeight={TextWeight.More}
                  style={{
                    background: `linear-gradient(45deg, transparent 20%, rgba(var(--bg-color-darker-rgb), 0.5) 80%, transparent 20%)`,
                    position: 'absolute',
                    top: 19,
                    transform: 'translateX(-50%)',
                    zIndex: 5,
                  }}
                >
                  {formatter ? formatValue(amount, formatter) : amount}
                </Text>
              </Container>
            )}

            {new Array(tickCount).fill(0).map((_, index) => {
              const tickValue = tickPercent * index;
              const tickValueFormatted = formatter
                ? formatValue(tickValue, formatter)
                : tickValue;

              return (
                <Container
                  key={index}
                  border={{
                    left: {
                      color:
                        amount >= tickValue ? color : BackgroundColors.Lightest,
                      style: BorderStyle.Solid,
                      width: 1,
                    },
                  }}
                  height={6}
                >
                  {showTickLabels && (
                    <Text
                      alignText={Align.Left}
                      textColor={amount >= tickValue ? color : TextColors.Dark}
                      textSize={TextSize.Smallest}
                      textWeight={TextWeight.More}
                      style={{
                        position: 'absolute',
                        transform: 'translateX(calc(100% / 2 - 100%))',
                      }}
                    >
                      {tickValueFormatted}
                    </Text>
                  )}
                </Container>
              );
            })}

            <Container
              border={{
                right: {
                  color: amount >= total ? color : BackgroundColors.Lightest,
                  style: BorderStyle.Solid,
                  width: 1,
                },
              }}
              height={6}
              style={{
                position: 'absolute',
                right: 0,
              }}
            >
              {showTickLabels && (
                <Text
                  alignText={Align.Right}
                  textColor={TextColors.Dark}
                  textSize={TextSize.Small}
                  textWeight={TextWeight.More}
                >
                  {formatter ? formatValue(total, formatter) : total}
                </Text>
              )}
            </Container>
          </Container>
        )}

        <Container
          backgroundColor={BackgroundColors.Lightest}
          grow={false}
          height={1}
        >
          <Container
            backgroundColor={color as BackgroundColor}
            height={1}
            grow={false}
            width={`${progressPercent}%`}
          />
        </Container>

        {/*<Container*/}
        {/*  alignContent={Align.SpaceBetween}*/}
        {/*  orientation={Orientation.Horizontal}*/}
        {/*  padding={Amount.Least}*/}
        {/*>*/}
        {/*  <Text*/}
        {/*    alignText={Align.Left}*/}
        {/*    textSize={TextSize.Smaller}*/}
        {/*    textWeight={TextWeight.More}*/}
        {/*  >*/}
        {/*    {formatter ? formatValue(0, formatter) : 0}*/}
        {/*  </Text>*/}

        {/*  <Text*/}
        {/*    alignText={Align.Right}*/}
        {/*    textSize={TextSize.Smaller}*/}
        {/*    textWeight={TextWeight.More}*/}
        {/*  >*/}
        {/*    {formatter ? formatValue(total, formatter) : amount}*/}
        {/*  </Text>*/}
        {/*</Container>*/}
      </Container>
    );
  },
);
