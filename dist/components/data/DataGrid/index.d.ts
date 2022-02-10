import React, { ReactElement, SyntheticEvent } from 'react';
import { Model, Primitives } from '@srclaunch/types';
import { Align, BorderProps, DataGridDisplayType, WidthProps } from '../../../types';
import { ContainerProps } from '../../layout/Container';
export declare type DataGridColumn = {
    align?: Align;
    label: string;
    fallbackField?: string;
    field: string;
    fields?: string[];
    maxWidth?: number | string;
    minWidth?: number | string;
    percentWidth?: number;
    type: Primitives;
    width?: number | string;
};
declare type DataGridProps = ContainerProps<HTMLElement, {
    borderRadius?: BorderProps['borderRadius'];
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
        search?: WidthProps<{
            placeholder?: string;
            onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
            value?: string;
        }>;
        export?: WidthProps<{
            label?: string;
            onClick?: (e: SyntheticEvent) => void;
        }>;
    };
    hideOnProp?: string;
    loading?: boolean;
    loaded?: boolean;
    model?: Model;
    onItemClick?: (row: Record<string, unknown>) => unknown;
    template?: {
        card?: ({ onClick, row, }: ContainerProps<HTMLDivElement, {
            onClick?: (row: Record<string, Primitives>) => unknown;
            row: Record<string, Primitives>;
        }>) => ReactElement;
        row?: ({ onClick, row, }: ContainerProps<HTMLDivElement, {
            onClick?: (row: Record<string, Primitives>) => unknown;
            row: Record<string, Primitives>;
        }>) => ReactElement;
    };
}>;
export declare const DataGrid: React.MemoExoticComponent<({ backgroundColor, borderRadius, boxShadow, className, columns, columnCount, data, depth, display, header, hideOnProp, loaded, loading, model, onItemClick, padding, template, ...props }: DataGridProps) => ReactElement>;
export default DataGrid;
//# sourceMappingURL=index.d.ts.map