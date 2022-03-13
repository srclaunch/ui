import { memo, ReactElement } from 'react';
// import moment from 'moment';

import { Label, LabelProps } from '../../../typography/Label';

import { Sizes, TextColors, TextSize } from '../../../../types';

type DateTimeLabelProps = {
  value: string;
} & LabelProps;

export const DateTimeLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
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
