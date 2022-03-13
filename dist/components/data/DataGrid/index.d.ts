import { ReactElement, SyntheticEvent } from 'react';
import { Model, Primitives } from '@srclaunch/types';
import { DataGridDisplayType, Size, AlignHorizontal } from '../../../types';
import { ContainerProps } from '../../layout/Container';
export declare type DataGridColumn = {
    align?: AlignHorizontal;
    label: string;
    fallbackField?: string;
    field: string;
    fields?: string[];
    size?: Size;
    type: Primitives;
};
export declare type DataGridProps = {
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
        card?: ({ onClick, row, }: {
            onClick?: (row: Record<string, Primitives>) => unknown;
            row: Record<string, Primitives>;
        } & ContainerProps<HTMLDivElement>) => ReactElement;
        row?: ({ onClick, row, }: {
            onClick?: (row: Record<string, Primitives>) => unknown;
            row: Record<string, Primitives>;
        } & ContainerProps<HTMLDivElement>) => ReactElement;
    };
} & ContainerProps<HTMLElement>;
export declare const DataGrid: import("react").MemoExoticComponent<({ background, borderRadius, className, columns, columnCount, data, depth, display, header, hideOnProp, loaded, loading, model, onItemClick, shadow, template, ...props }: DataGridProps) => ReactElement>;
export default DataGrid;
//# sourceMappingURL=index.d.ts.map