import { ReactElement } from 'react';
import { DateTimeFormatOptions } from 'luxon';
import { Date } from '@srclaunch/types';
import { LabelProps } from '../../../../types';
declare type DateLabelProps = LabelProps<HTMLLabelElement, {
    defaultValue?: Date;
    format?: DateTimeFormatOptions;
    value: Date;
}>;
export declare const DateLabel: import("react").MemoExoticComponent<({ className, grow, format, icon, textColor, textSize, value, ...props }: DateLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=DateLabel.d.ts.map