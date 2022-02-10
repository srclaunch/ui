import { memo, ReactElement } from 'react';
import { Image as ImageProps } from '@srclaunch/types';
import { Container } from '../../../layout/Container';
import {
  Align,
  Amount,
  ContainerProps,
  Orientation,
  Size,
  TextProps,
  TextSize,
  TextWeight,
} from '../../../../types';
import { Image } from '../../../media/Image';
import { Text } from '../../../typography/Text';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import { getSmallerAmount } from '../../../../lib/proportions/amount';

export type PersonLabelProps<T = {}> = ContainerProps<
  HTMLDivElement,
  TextProps<
    HTMLSpanElement,
    {
      image?: ImageProps;
      name?: string;
    } & T
  >
>;

export const PersonLabel = memo(
  ({
    image,
    name,
    size = Size.Default,
    textSize = TextSize.Large,
    ...props
  }: PersonLabelProps): ReactElement => {
    return (
      <Container
        alignItems={Align.Center}
        orientation={Orientation.Horizontal}
        {...props}
      >
        <Image
          borderRadius={Amount.All}
          grow={false}
          marginRight={getSmallerAmount(convertSizeToAmount(size))}
          path={image?.path}
          url={image?.url}
          size={size}
        />

        <Text
          lineHeight={getSmallerAmount(convertSizeToAmount(size))}
          textWeight={TextWeight.More}
          textSize={textSize}
        >
          {name}
        </Text>
      </Container>
    );
  },
);
