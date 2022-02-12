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
    type: Primitives;
} & WidthProps;
export declare type DataGridProps = {
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
        search?: {
            placeholder?: string;
            onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
            value?: string;
        } & WidthProps;
        export?: {
            label?: string;
            onClick?: (e: SyntheticEvent) => void;
        } & WidthProps;
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
export declare const DataGrid: React.MemoExoticComponent<({ backgroundColor, borderRadius, boxShadow, className, columns, columnCount, data, depth, display, header, hideOnProp, loaded, loading, model, onItemClick, padding, template, ...props }: DataGridProps) => ReactElement>;
export default DataGrid;
//# sourceMappingURL=index.d.ts.map