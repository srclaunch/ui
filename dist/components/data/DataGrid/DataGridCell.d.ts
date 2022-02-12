import { ReactElement } from 'react';
import { ModelProps, Primitives } from '@srclaunch/types';
import { LabelProps, Size, TextColor } from '../../../types';
declare type DataGridCellProps = {
    fieldName?: string;
    lineHeight?: Size;
    model?: ModelProps;
    textColor?: TextColor;
    type: Primitives;
    value: any;
} & LabelProps;
export declare const DataGridCell: import("react").MemoExoticComponent<({ fieldName, model, type, value, ...props }: DataGridCellProps) => ReactElement>;
export {};
//# sourceMappingURL=DataGridCell.d.ts.map