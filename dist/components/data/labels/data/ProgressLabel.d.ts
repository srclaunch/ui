import { ReactElement } from 'react';
import { LabelProps } from '../../../typography/Label';
import { Color } from '../../../../types';
declare type ProgressLabelProps = {
    color?: Color;
    value: number[];
} & LabelProps;
export declare const ProgressLabel: import("react").MemoExoticComponent<({ color, icon, lineHeight, textColor, textSize, value, ...props }: ProgressLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressLabel.d.ts.map