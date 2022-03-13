import { ReactElement } from 'react';
import { ModelProps, Primitives } from '@srclaunch/types';
import { Size, TextColor } from '../../../types';
import { LabelProps } from '../../typography/Label';
declare type DataGridCellProps = {
    fieldName?: string;
    lineHeight?: Size;
    model?: ModelProps;
    textColor?: TextColor;
    type: Primitives;
    value: any;
} & LabelProps;
export declare const DataGridCell: import("react").MemoExoticComponent<({ as, fieldName, model, type, value, ...props }: DataGridCellProps) => ReactElement>;
export {};
//# sourceMappingURL=DataGridCell.d.ts.map