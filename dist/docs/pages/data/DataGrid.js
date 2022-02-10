import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Primitives } from '@srclaunch/types';
import { Align, Amount } from '../../../types';
import { DataGrid } from '../../../components/data/DataGrid/index';
import { Workspace } from '../../../components/containers/Workspace';
import { Documentation } from '../../layouts/Documentation';
import { SubTitle } from '../../../components/typography/SubTitle';
import { Paragraph } from '../../../components/typography/Paragraph';
export const DataGridPage = memo(() => {
    return (_jsxs(Workspace, { header: { title: 'DataGrid' }, layout: Documentation, title: "DataGrid", children: [_jsxs(Paragraph, { marginBottom: Amount.Most, children: ["The ", _jsx("b", { children: "DataGrid" }, void 0), " component is used to display tabular data."] }, void 0), _jsx(SubTitle, { children: "DataGrid with headers" }, void 0), _jsx(DataGrid, { columns: [
                    {
                        field: 'date',
                        label: 'Date',
                        type: Primitives.Date,
                        width: 150,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        type: Primitives.String,
                        width: 150,
                    },
                    {
                        field: 'description',
                        label: 'Description',
                        type: Primitives.LongText,
                        minWidth: 300,
                    },
                ], data: [
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 123',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 456',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                ], marginBottom: Amount.Most }, void 0), _jsx(SubTitle, { children: "DataGrid with headers" }, void 0), _jsx(DataGrid, { columns: [
                    {
                        field: 'date',
                        label: 'Date',
                        type: Primitives.Date,
                        width: 150,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        type: Primitives.String,
                        width: 150,
                    },
                    {
                        field: 'description',
                        label: 'Description',
                        type: Primitives.LongText,
                        minWidth: 300,
                    },
                ], data: [
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 123',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 456',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                ], header: {
                    search: {
                        placeholder: 'Search',
                        width: 200,
                    },
                }, marginBottom: Amount.Most }, void 0), _jsx(SubTitle, { children: "DataGrid with multiple columns" }, void 0), _jsx(DataGrid, { columns: [
                    {
                        align: Align.Center,
                        field: 'date',
                        label: 'Date',
                        type: Primitives.Date,
                        width: 150,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        type: Primitives.String,
                        width: 150,
                    },
                    {
                        field: 'description',
                        label: 'Description',
                        type: Primitives.LongText,
                        minWidth: 300,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        type: Primitives.String,
                        width: 150,
                    },
                    {
                        field: 'description',
                        label: 'Description',
                        type: Primitives.LongText,
                        minWidth: 300,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        type: Primitives.String,
                        width: 150,
                    },
                    {
                        field: 'description',
                        label: 'Description',
                        type: Primitives.LongText,
                        minWidth: 300,
                    },
                ], data: [
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 123',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                    {
                        date: new Date().toISOString(),
                        name: 'Testing 456',
                        description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    },
                ], header: {
                    export: {
                        width: 180,
                    },
                    search: {
                        placeholder: 'Search',
                        width: 200,
                    },
                }, marginBottom: Amount.Most }, void 0)] }, void 0));
});
//# sourceMappingURL=DataGrid.js.map