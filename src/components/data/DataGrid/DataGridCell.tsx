import { memo, ReactElement } from 'react';
import { ModelProps, Primitives } from '@srclaunch/types';
import { getLabelByFieldType } from '../../../lib/data/labels';
import {
  AlignVertical,
  Amount,
  Orientation,
  Size,
  TextColor,
} from '../../../types';
import { Container } from '../../layout/Container';
import { LabelProps } from '../../typography/Label';

// import BooleanLabel from './labels/BooleanLabel';
// import CurrencyLabel from './labels/CurrencyLabel';
// import DateTimeLabel from './labels/DateTimeLabel';
// // import DueDateLabel from './labels/DueDateLabel';
// import ProgressLabel from './labels/ProgressLabel';
// import {StringLabel} from '../labels/StringLabel';
// import {NumberLabel }from '../labels/NumberLabel';
// import { DateTime } from 'luxon';

type DataGridCellProps = LabelProps & {
  fieldName?: string;
  lineHeight?: Size;
  model?: ModelProps;
  textColor?: TextColor;
  type: Primitives;
  value: any;
};

export const DataGridCell = memo(
  ({
    as = 'label',
    fieldName,
    model,
    type,
    value,
    ...props
  }: DataGridCellProps): ReactElement => {
    const { alignment, textColor, textOverflow, textSize, textWeight, size } =
      props;
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        as={as}
        padding={{
          left: Amount.Less,
          right: Amount.Less,
        }}
        size={size}
        {...props}
      >
        {getLabelByFieldType({
          fieldName,
          model,
          props: {
            alignment,

            textColor,
            textOverflow,
            textSize,
            textWeight,
          },
          type,
          value,
        })}
      </Container>
    );
  },
);
