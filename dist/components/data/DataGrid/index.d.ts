import { ReactElement, SyntheticEvent } from 'react';
import { Model, Primitives } from '@srclaunch/types';
import { Size, AlignHorizontal } from '../../../types';
import { ContainerProps } from '../../layout/Container';
export declare enum DataGridDisplayType {
    Card = "card",
    Table = "table"
}
export declare type DataGridColumn = {
    align?: AlignHorizontal;
    label: string;
    fallbackField?: string;
    field: string;
    fields?: string[];
    size?: Size;
    type: Primitives;
};
export declare type DataGridProps = ContainerProps & {
    className?: string;
    columns: DataGridColumn[];
    columnCount?: number;
    data?: Record<string, Primitives | any>[];
    display?: DataGridDisplayType;
    header?: {
        create?: {
            label: string;
            onClick: (e: SyntheticEvent) => void;
        };
        search?: {
            placeholder?: string;
            onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
            size?: Size;
            value?: string;
        };
        export?: {
            label?: string;
            onClick?: (e: SyntheticEvent) => void;
            size?: Size;
        };
    };
    hideOnProp?: string;
    loading?: boolean;
    loaded?: boolean;
    model?: Model;
    onItemClick?: (row: Record<string, unknown>) => unknown;
    template?: {
        card?: ({ row, }: {
            row: Record<string, Primitives>;
        } & ContainerProps) => ReactElement;
        row?: ({ row, }: {
            row: Record<string, Primitives>;
        } & ContainerProps) => ReactElement;
    };
};
export declare const DataGrid: import("react").MemoExoticComponent<({ background, borderRadius, className, columns, columnCount, data, depth, display, header, hideOnProp, loaded, loading, model, onItemClick, shadow, template, ...props }: DataGridProps) => ReactElement>;
export default DataGrid;
//# sourceMappingURL=index.d.ts.map