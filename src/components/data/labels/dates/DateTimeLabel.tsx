import { memo, ReactElement } from 'react';
// import moment from 'moment';

import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';

type DateTimeLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: string;
  }
>;

export const DateTimeLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DateTimeLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {/* {moment(value).format('MMM Do')} */}
      </Label>
    );
  },
);
