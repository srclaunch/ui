import { memo, ReactElement } from 'react';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { Date } from '@srclaunch/types';
import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';

type DateLabelProps = {
  defaultValue?: Date;
  format?: DateTimeFormatOptions;
  value: Date;
} & LabelProps;

export const DateLabel = memo(
  ({
    className = '',
    grow = false,
    format = DateTime.DATE_MED,
    icon,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DateLabelProps): ReactElement => {
    return (
      <Label
        className={`${className} date-label`}
        grow={false}
        icon={icon}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {DateTime.fromISO(value).toLocaleString(format)}
      </Label>
    );
  },
);
