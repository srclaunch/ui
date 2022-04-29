import { ReactElement } from 'react';
import { Model, Primitives } from '@srclaunch/types';
import { Size, AlignHorizontal } from '../../../types';
import { ContainerProps } from '../../layout/Container';
import { SearchInputProps } from '../../forms/inputs/text/SearchInput';
import { MenuButtonProps } from '../../forms/buttons/MenuButton';
import { ButtonProps } from '../../forms/buttons/Button';
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
        create?: ButtonProps;
        search?: SearchInputProps;
        export?: MenuButtonProps;
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
export declare const DataGrid: import("react").MemoExoticComponent<({ background, borderRadius, className, columns, columnCount, data, depth, display, header, hideOnProp, loaded, model, onItemClick, shadow, size, states, template, ...props }: DataGridProps) => ReactElement>;
export default DataGrid;
//# sourceMappingURL=index.d.ts.map