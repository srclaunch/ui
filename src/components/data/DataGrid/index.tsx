import React, { memo, ReactElement, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Model, Primitives } from '@srclaunch/types';

import { downloadDataAsFile } from '@srclaunch/actions';
import { formatObjectToCSVData } from '@srclaunch/transform';

import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderProps,
  BorderStyle,
  Cursor,
  DataGridDisplayType,
  Depth,
  DepthShadow,
  Orientation,
  Overflow,
  Size,
  TextColors,
  WidthProps,
} from '../../../types';

import { Container, ContainerProps } from '../../layout/Container';
import { Label } from '../../typography/Label';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { DataGridCell } from './DataGridCell';
import { SearchInput } from '../../forms/inputs/text/SearchInput';
import { MenuButton } from '../../forms/buttons/MenuButton';
import { Button, ButtonType } from '../../forms/buttons/Button';

export type DataGridColumn = {
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

type DataGridProps = ContainerProps<
  HTMLElement,
  {
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
      card?: ({
        onClick,
        row,
      }: ContainerProps<
        HTMLDivElement,
        {
          onClick?: (row: Record<string, Primitives>) => unknown;
          row: Record<string, Primitives>;
        }
      >) => ReactElement;
      row?: ({
        onClick,
        row,
      }: ContainerProps<
        HTMLDivElement,
        {
          onClick?: (row: Record<string, Primitives>) => unknown;
          row: Record<string, Primitives>;
        }
      >) => ReactElement;
    };
  }
>;

function fetchFromObject(obj: Record<string, any>, prop: string): any {
  if (typeof obj === 'undefined') {
    return false;
  }

  var _index = prop.indexOf('.');
  if (_index > -1) {
    return fetchFromObject(
      obj[prop.substring(0, _index)],
      prop.substr(_index + 1),
    );
  }

  return obj[prop];
}

export const DataGrid = memo(
  ({
    backgroundColor = BackgroundColors.DataGrid,
    borderRadius = Amount.Least,
    boxShadow = DepthShadow.Highest,
    className = '',
    columns,
    columnCount = 3,
    data,
    depth = Depth.Highest,
    display = DataGridDisplayType.Table,
    header,
    hideOnProp,
    loaded,
    loading,
    model,
    onItemClick,
    padding = Amount.Less,
    template,
    ...props
  }: DataGridProps): ReactElement => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [hoveredRow, setHoveredRow] = useState<number | undefined>();
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
      return (
        <Container
          alignContent={Align.Top}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          boxShadow={boxShadow}
          className={`${className} data-grid`}
          grow={true}
          overflow={Overflow.Hidden}
          {...props}
        >
          <Label>No columns defined</Label>
        </Container>
      );
    }

    return (
      <Container
        alignContent={Align.Top}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        className={`${className} data-grid`}
        grow={false}
        overflow={Overflow.Hidden}
        {...props}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={loading} />

        {header && Object.keys(header).length > 0 && (
          <Container
            backgroundColor={BackgroundColors.DataGridHeader}
            borderRadius={{
              topLeft: Amount.Less,
              topRight: Amount.Less,
            }}
            className="data-grid-header"
            orientation={Orientation.Horizontal}
            padding={Amount.Less}
            grow={false}
          >
            {header.search && (
              <Container width={header.search.width}>
                {/* @ts-ignore */}
                <SearchInput
                  name="search-input"
                  onChange={({ value }) => {
                    setSearchTerm(value ?? '');
                  }}
                  placeholder={header.search.placeholder}
                  width={header.search.width}
                />
              </Container>
            )}

            <Container alignSelf={Align.Stretch} />

            {header.export && (
              <Container width={header.export.width}>
                <MenuButton
                  menu={[
                    {
                      label: 'Export to CSV',
                      onClick: () =>
                        downloadDataAsFile({
                          data: formatObjectToCSVData({
                            // data: [],
                            objectType: 'EXPENSE',
                          }),
                          fileName: 'expenses',
                        }),
                    },
                  ]}
                  label="Export"
                />
              </Container>
            )}
            
            {header.create && (
              <Button 
                onClick={header.create.onClick}
                size={Size.Small}
                type={ButtonType.Secondary}
              >
                {header.create.label}
              </Button>
            )}
          </Container>
        )}

        <Container
          borderRadius={!header ? borderRadius : undefined}
          className="data-grid-grid"
          onScroll={(e: SyntheticEvent) => e.preventDefault()}
          overflow={Overflow.Scroll}
          // width="min-content"
        >
          {display === DataGridDisplayType.Table ? (
            <>
              <Container
                alignItems={Align.Left}
                backgroundColor={BackgroundColors.DataGridColumnHeaders}
                className="data-grid-headers"
                orientation={Orientation.Horizontal}
                paddingBottom={Amount.Least}
                paddingTop={Amount.Least}
                grow={false}
                // width="min-content"
              >
                {columns.map((column, key) => {
                  return (
                    <Container
                      alignContent={column.align}
                      alignItems={Align.Center}
                      backgroundColor={BackgroundColors.DataGridColumnHeaders}
                      border={
                        key !== columns.length - 1
                          ? {
                              right: {
                                color: BorderColors.Default,
                                style: BorderStyle.Solid,
                                width: 1,
                              },
                            }
                          : undefined
                      }
                      borderRadius={
                        !header
                          ? {
                              topLeft: header ? 0 : Amount.Default,
                              topRight: header ? 0 : Amount.Default,
                            }
                          : undefined
                      }
                      className="data-grid-header-cell"
                      shrink={false}
                      key={key}
                      orientation={Orientation.Horizontal}
                      // padding={padding}
                      paddingLeft={Amount.Default}
                      paddingRight={Amount.Default}
                      maxWidth={column.maxWidth ?? MAX_COLUMN_WIDTH}
                      minWidth={
                        column.minWidth ? column.minWidth : MIN_COLUMN_WIDTH
                      }
                      width={column.width}
                    >
                      <Label
                        alignContent={column.align}
                        alignItems={Align.Center}
                        height={Size.Large}
                        textColor={TextColors.DataGridColumnHeaders}
                        size={Size.Smaller}
                      >
                        {column.label}
                      </Label>
                    </Container>
                  );
                })}
              </Container>

              <Container
                backgroundColor={BackgroundColors.DataGridRow}
                borderRadius={{
                  bottomLeft: Amount.Default,
                  bottomRight: Amount.Default,
                }}
                className="data-grid-rows"
                grow={true}
                lineWrap={true}
                orientation={Orientation.Vertical}
              >
                {data &&
                  data.map((row, key) => {
                    return (
                      <Container
                        backgroundColor={BackgroundColors.DataGridCell}
                        borderRadius={Amount.None}
                        className="data-grid-row"
                        cursor={Cursor.Pointer}
                        // flat={true}
                        // fullWidth={true}
                        grow={true}
                        hover={{
                          backgroundColor: BackgroundColors.Primary,
                        }}
                        orientation={Orientation.Horizontal}
                        key={key}
                        onClick={() => {
                          if (onItemClick) onItemClick(row);
                        }}
                        onMouseEnter={() => setHoveredRow(key)}
                        onMouseLeave={() => setHoveredRow(undefined)}
                        padding={Amount.Least}
                        paddingLeft={Amount.Least}
                        paddingRight={Amount.Least}
                        // type={ButtonType.Transparent}
                      >
                        {columns.map((column, columnKey) => {
                          return (
                            <DataGridCell
                              alignContent={column.align}
                              alignItems={Align.Center}
                              // backgroundColor={BackgroundColors.DataGridCell}
                              fieldName={column.field}
                              height={Size.Large}
                              model={model}
                              textColor={
                                hoveredRow === key
                                  ? TextColors.PrimaryContrast
                                  : TextColors.DataGridCell
                              }
                              type={column.type}
                              value={fetchFromObject(row, column.field)}
                              maxWidth={column.maxWidth ?? MAX_COLUMN_WIDTH}
                              minWidth={
                                column.minWidth
                                  ? column.minWidth
                                  : MIN_COLUMN_WIDTH
                              }
                              width={column.width}
                            />
                          );
                        })}
                      </Container>
                    );
                  })}
              </Container>
            </>
          ) : (
            <Container>
              {!loading && loaded && data && data.length === 0 ? (
                <NoResults as={Container}>
                  <Label>No results</Label>
                </NoResults>
              ) : (
                data &&
                data.map((row, key) => {
                  if (template && template.card) {
                    return React.createElement(template.card, {
                      key,
                      marginBottom: Amount.Default,
                      onClick: () => {
                        if (onItemClick) onItemClick(row);
                      },
                      row,
                    });
                  } else {
                    return <>Need a card template here</>;
                  }
                })
              )}
            </Container>
          )}
        </Container>
      </Container>
    );
  },
);

const NoResults = styled.div`
  color: #9b9b9b;
  font-size: 13px;
  font-weight: 500;
  padding: 50px 0;
  text-align: center;
`;

export default DataGrid;
