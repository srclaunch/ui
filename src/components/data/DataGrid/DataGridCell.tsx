import { memo, ReactElement } from 'react';
import { ModelProps, Primitives } from '@srclaunch/types';
import { getLabelByFieldType } from '../../../lib/data/labels';
import {
  Amount,
  LabelProps,
  Orientation,
  Overflow,
  Size,
  TextColor,
} from '../../../types';
import { Container } from '../../layout/Container';

// import BooleanLabel from './labels/BooleanLabel';
// import CurrencyLabel from './labels/CurrencyLabel';
// import DateTimeLabel from './labels/DateTimeLabel';
// // import DueDateLabel from './labels/DueDateLabel';
// import ProgressLabel from './labels/ProgressLabel';
// import {StringLabel} from '../labels/StringLabel';
// import {NumberLabel }from '../labels/NumberLabel';
// import { DateTime } from 'luxon';

type DataGridCellProps = {
  fieldName?: string;
  lineHeight?: Size;
  model?: ModelProps;
  textColor?: TextColor;
  type: Primitives;
  value: any;
} & LabelProps;

export const DataGridCell = memo(
  ({
    fieldName,
    model,
    type,
    value,
    ...props
  }: DataGridCellProps): ReactElement => {
    const {
      alignContent,
      textColor,
      textOverflow,
      textSize,
      textWeight,
      maxWidth,
      minWidth,
      width,
    } = props;
    return (
      <Container
        orientation={Orientation.Horizontal}
        overflow={Overflow.Hidden}
        maxWidth={maxWidth}
        minWidth={minWidth}
        paddingLeft={Amount.Less}
        paddingRight={Amount.Less}
        width={width}
        {...props}
      >
        {getLabelByFieldType({
          fieldName,
          model,
          props: {
            alignContent,
            overflow: Overflow.Hidden,
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
