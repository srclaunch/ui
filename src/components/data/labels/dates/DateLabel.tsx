import { memo, ReactElement } from 'react';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { Date } from '@srclaunch/types';
import { Label, LabelProps } from '../../../typography/Label';

import { TextColors, TextSize } from '../../../../types';

type DateLabelProps = LabelProps & {
  defaultValue?: Date;
  format?: DateTimeFormatOptions;
  value: Date;
};

export const DateLabel = memo(
  ({
    className = '',
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
