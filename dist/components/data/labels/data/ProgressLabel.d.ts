import { ReactElement } from 'react';
import { BackgroundColor, LabelProps } from '../../../../types';
declare type ProgressLabelProps = LabelProps<HTMLLabelElement, {
    color?: BackgroundColor;
    value: number[];
}>;
export declare const ProgressLabel: import("react").MemoExoticComponent<({ color, icon, lineHeight, textColor, textSize, value, ...props }: ProgressLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=ProgressLabel.d.ts.map