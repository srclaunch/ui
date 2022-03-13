import { Image as ImageProps } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { getSmallerAmount } from '../../../../lib/proportions/amount';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import {
  Alignment,
  AlignVertical,
  Amount,
  Orientation,
  Size,
  Sizes,
  TextSize,
  TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/Container';
import { Image } from '../../../media/Image';
import { Label, LabelProps } from '../../../typography/Label';

export type PersonLabelProps = {
  readonly image?: ImageProps;
  readonly name?: string;
} & LabelProps;

export const PersonLabel = memo(
  ({
    image,
    name,
    // size = Size.Default,
    textSize = TextSize.Large,
    ...props
  }: PersonLabelProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
      >
        <Image
          borderRadius={{ all: Amount.All }}
          // margin={{ right: getSmallerAmount(convertSizeToAmount(size))}}
          path={image?.path}
          url={image?.url}
          // size={size}
        />

        <Label
          // lineHeight={getSmallerAmount(convertSizeToAmount(size))}
          textWeight={TextWeight.More}
          textSize={textSize}
        >
          {name}
        </Label>
      </Container>
    );
  },
);
