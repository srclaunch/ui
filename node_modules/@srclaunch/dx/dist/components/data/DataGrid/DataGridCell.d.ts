import { ReactElement } from 'react';
import { ModelProps, Primitives } from '@srclaunch/types';
import { Size, TextColor } from '../../../types';
import { LabelProps } from '../../typography/Label';
declare type DataGridCellProps = LabelProps & {
    fieldName?: string;
    lineHeight?: Size;
    model?: ModelProps;
    textColor?: TextColor;
    type: Primitives;
    value: any;
};
export declare const DataGridCell: import("react").MemoExoticComponent<({ as, fieldName, model, type, value, ...props }: DataGridCellProps) => ReactElement>;
export {};
//# sourceMappingURL=DataGridCell.d.ts.map