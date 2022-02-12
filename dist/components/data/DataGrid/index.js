import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { downloadDataAsFile } from '@srclaunch/actions';
import { formatObjectToCSVData } from '@srclaunch/transform';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Cursor, DataGridDisplayType, Depth, DepthShadow, Orientation, Overflow, Size, TextColors, } from '../../../types';
import { fetchFromObject } from '../../../lib/data/object';
import { Container } from '../../layout/Container';
import { Label } from '../../typography/Label';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { DataGridCell } from './DataGridCell';
import { SearchInput } from '../../forms/inputs/text/SearchInput';
import { MenuButton } from '../../forms/buttons/MenuButton';
import { Button, ButtonType } from '../../forms/buttons/Button';
export const DataGrid = memo(({ backgroundColor = BackgroundColors.DataGrid, borderRadius = Amount.Least, boxShadow = DepthShadow.Highest, className = '', columns, columnCount = 3, data, depth = Depth.Highest, display = DataGridDisplayType.Table, header, hideOnProp, loaded, loading, model, onItemClick, padding = Amount.Less, template, ...props }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredRow, setHoveredRow] = useState();
    const MIN_COLUMN_WIDTH = 150;
    const MAX_COLUMN_WIDTH = 300;
    // const [totalWidth, setTotalWidth] = useState<number>(0);
    // useEffect(() => {
    //   if (columns.length) {
    //     // const width = columns.reduce((a, b, i) => {
    //     //   return (i === 1 ? a.minWidth : a) + b.minWidth;
    //     // }, 0);
    //     const width = columns.reduce((a, b) => a + (b.minWidth || 0), 0);
    //     setTotalWidth(width);
    //   }
    // }, [columns]);
    if (!columns) {
        return (_jsx(Container, { alignContent: Align.Top, backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: boxShadow, className: `${className} data-grid`, grow: true, overflow: Overflow.Hidden, ...props, children: _jsx(Label, { children: "No columns defined" }, void 0) }, void 0));
    }
    return (_jsxs(Container, { alignContent: Align.Top, backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: boxShadow, className: `${className} data-grid`, grow: false, overflow: Overflow.Hidden, ...props, children: [_jsx(LoadingOverlay, { borderRadius: borderRadius, visible: loading }, void 0), header && Object.keys(header).length > 0 && (_jsxs(Container, { backgroundColor: BackgroundColors.DataGridHeader, borderRadius: {
                    topLeft: Amount.Less,
                    topRight: Amount.Less,
                }, className: "data-grid-header", orientation: Orientation.Horizontal, padding: Amount.Less, grow: false, children: [header.search && (_jsx(Container, { width: header.search.width, children: _jsx(SearchInput, { name: "search-input", onChange: ({ value }) => {
                                setSearchTerm(value ?? '');
                            }, placeholder: header.search.placeholder, width: header.search.width }, void 0) }, void 0)), _jsx(Container, { alignSelf: Align.Stretch }, void 0), header.export && (_jsx(Container, { width: header.export.width, children: _jsx(MenuButton, { menu: [
                                {
                                    label: 'Export to CSV',
                                    onClick: () => downloadDataAsFile({
                                        data: formatObjectToCSVData({
                                            // data: [],
                                            objectType: 'EXPENSE',
                                        }),
                                        fileName: 'expenses',
                                    }),
                                },
                            ], label: "Export" }, void 0) }, void 0)), header.create && (_jsx(Button, { onClick: header.create.onClick, size: Size.Small, type: ButtonType.Secondary, children: header.create.label }, void 0))] }, void 0)), _jsx(Container, { borderRadius: !header ? borderRadius : undefined, className: "data-grid-grid", onScroll: (e) => e.preventDefault(), overflow: Overflow.Scroll, children: display === DataGridDisplayType.Table ? (_jsxs(_Fragment, { children: [_jsx(Container, { alignItems: Align.Left, backgroundColor: BackgroundColors.DataGridColumnHeaders, className: "data-grid-headers", orientation: Orientation.Horizontal, paddingBottom: Amount.Least, paddingTop: Amount.Least, grow: false, children: columns.map((column, key) => {
                                return (_jsx(Container, { alignContent: column.align, alignItems: Align.Center, backgroundColor: BackgroundColors.DataGridColumnHeaders, border: key !== columns.length - 1
                                        ? {
                                            right: {
                                                color: BorderColors.Default,
                                                style: BorderStyle.Solid,
                                                width: 1,
                                            },
                                        }
                                        : undefined, borderRadius: !header
                                        ? {
                                            topLeft: header ? 0 : Amount.Default,
                                            topRight: header ? 0 : Amount.Default,
                                        }
                                        : undefined, className: "data-grid-header-cell", shrink: false, orientation: Orientation.Horizontal, 
                                    // padding={padding}
                                    paddingLeft: Amount.Default, paddingRight: Amount.Default, maxWidth: column.maxWidth ?? MAX_COLUMN_WIDTH, minWidth: column.minWidth ? column.minWidth : MIN_COLUMN_WIDTH, width: column.width, children: _jsx(Label, { alignContent: column.align, alignItems: Align.Center, height: Size.Large, textColor: TextColors.DataGridColumnHeaders, size: Size.Smaller, children: column.label }, void 0) }, key));
                            }) }, void 0), _jsx(Container, { backgroundColor: BackgroundColors.DataGridRow, borderRadius: {
                                bottomLeft: Amount.Default,
                                bottomRight: Amount.Default,
                            }, className: "data-grid-rows", grow: true, lineWrap: true, orientation: Orientation.Vertical, children: data &&
                                data.map((row, key) => {
                                    return (_jsx(Container, { backgroundColor: BackgroundColors.DataGridCell, borderRadius: Amount.None, className: "data-grid-row", cursor: Cursor.Pointer, 
                                        // flat={true}
                                        // fullWidth={true}
                                        grow: true, hover: {
                                            backgroundColor: BackgroundColors.Primary,
                                        }, orientation: Orientation.Horizontal, onClick: () => {
                                            if (onItemClick)
                                                onItemClick(row);
                                        }, onMouseEnter: () => setHoveredRow(key), onMouseLeave: () => setHoveredRow(undefined), padding: Amount.Least, paddingLeft: Amount.Least, paddingRight: Amount.Least, children: columns.map((column, columnKey) => {
                                            return (_jsx(DataGridCell, { alignContent: column.align, alignItems: Align.Center, 
                                                // backgroundColor={BackgroundColors.DataGridCell}
                                                fieldName: column.field, height: Size.Large, model: model, textColor: hoveredRow === key
                                                    ? TextColors.PrimaryContrast
                                                    : TextColors.DataGridCell, type: column.type, value: fetchFromObject(row, column.field), maxWidth: column.maxWidth ?? MAX_COLUMN_WIDTH, minWidth: column.minWidth
                                                    ? column.minWidth
                                                    : MIN_COLUMN_WIDTH, width: column.width }, void 0));
                                        }) }, key));
                                }) }, void 0)] }, void 0)) : (_jsx(Container, { children: !loading && loaded && data && data.length === 0 ? (_jsx(NoResults, { as: Container, children: _jsx(Label, { children: "No results" }, void 0) }, void 0)) : (data &&
                        data.map((row, key) => {
                            if (template && template.card) {
                                return React.createElement(template.card, {
                                    key,
                                    marginBottom: Amount.Default,
                                    onClick: () => {
                                        if (onItemClick)
                                            onItemClick(row);
                                    },
                                    row,
                                });
                            }
                            else {
                                return _jsx(_Fragment, { children: "Need a card template here" }, void 0);
                            }
                        })) }, void 0)) }, void 0)] }, void 0));
});
const NoResults = styled.div `
  color: #9b9b9b;
  font-size: 13px;
  font-weight: 500;
  padding: 50px 0;
  text-align: center;
`;
export default DataGrid;
//# sourceMappingURL=index.js.map