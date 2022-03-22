import {
  memo,
  createElement,
  ReactElement,
  SyntheticEvent,
  useState,
} from 'react';
import styled from 'styled-components';
import { Model, Primitives } from '@srclaunch/types';
import { downloadDataAsFile } from '@srclaunch/actions';
import { formatObjectToCSVData } from '@srclaunch/transform';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  Depth,
  DepthShadow,
  Orientation,
  Overflow,
  Size,
  Sizes,
  TextColors,
  AlignVertical,
  AlignHorizontal,
  TextSize,
} from '../../../types';
import { fetchFromObject } from '../../../lib/data/object';
import { Container, ContainerProps } from '../../layout/Container';
import { Label } from '../../typography/Label';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { DataGridCell } from './DataGridCell';
import { SearchInput } from '../../forms/inputs/text/SearchInput';
import { MenuButton } from '../../forms/buttons/MenuButton';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Spacer } from '../../layout/Spacer';

export enum DataGridDisplayType {
  Card = 'card',
  Table = 'table',
}

export type DataGridColumn = {
  align?: AlignHorizontal;
  label: string;
  fallbackField?: string;
  field: string;
  fields?: string[];
  size?: Size;
  type: Primitives;
};

export type DataGridProps = ContainerProps & {
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
    card?: ({
      // onClick,
      row,
    }: {
      // onClick?: (row: Record<string, Primitives>) => unknown;
      row: Record<string, Primitives>;
    } & ContainerProps) => ReactElement;
    row?: ({
      // onClick,
      row,
    }: {
      // onClick?: (row: Record<string, Primitives>) => unknown;
      row: Record<string, Primitives>;
    } & ContainerProps) => ReactElement;
  };
};

export const DataGrid = memo(
  ({
    background = {},
    borderRadius = {},

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
    shadow = DepthShadow.Highest,
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
          alignment={{
            vertical: AlignVertical.Top,
          }}
          background={{ color: BackgroundColors.DataGrid, ...background }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          className={`${className} data-grid`}
          shadow={shadow}
          {...props}
        >
          <Label>No columns defined</Label>
        </Container>
      );
    }

    return (
      <Container
        alignment={{
          vertical: AlignVertical.Top,
        }}
        background={background}
        borderRadius={borderRadius}
        className={`${className} data-grid`}
        shadow={shadow}
        {...props}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={loading} />

        {header && Object.keys(header).length > 0 && (
          <Container
            alignment={{
              orientation: Orientation.Horizontal,
            }}
            background={{
              color: BackgroundColors.DataGridHeader,
            }}
            borderRadius={{
              topLeft: Amount.Less,
              topRight: Amount.Less,
            }}
            className="data-grid-header"
            padding={{ all: Amount.Less }}
          >
            {header.search && (
              <Container size={header.search.size}>
                {/* @ts-ignore */}
                <SearchInput
                  name="search-input"
                  events={{
                    input: {
                      onValueChange: ({ value }) => {
                        setSearchTerm(value ?? '');
                      },
                    },
                  }}
                  placeholder={header.search.placeholder}
                  size={{ width: header.search.size?.width }}
                />
              </Container>
            )}

            <Spacer />

            {header.export && (
              <Container size={header.export.size}>
                <MenuButton
                  menu={[
                    {
                      events: {
                        mouse: {
                          onClick: () =>
                            downloadDataAsFile({
                              data: formatObjectToCSVData({
                                // data: [],
                                objectType: 'EXPENSE',
                              }),
                              fileName: 'expenses',
                            }),
                        },
                      },
                      label: 'Export to CSV',
                    },
                  ]}
                  label="Export"
                  size={{
                    width: 200
                  }}
                />
              </Container>
            )}

            {header.create && (
              <Button
                events={{
                  mouse: {
                    onClick: header.create.onClick,
                  },
                }}
                // size={Sizes.Small}
                type={ButtonType.Secondary}
              >
                {header.create.label}
              </Button>
            )}
          </Container>
        )}

        <Container
          alignment={{
            overflow: Overflow.ScrollBoth,
          }}
          borderRadius={!header ? borderRadius : undefined}
          className="data-grid-grid"
          events={{
            ui: {
              onScroll: (e: SyntheticEvent) => e.preventDefault(),
            },
          }}
        >
          {display === DataGridDisplayType.Table ? (
            <>
              <Container
                alignment={{
                  horizontal: AlignHorizontal.Left,
                  orientation: Orientation.Horizontal,
                }}
                background={{ color: BackgroundColors.DataGridColumnHeaders }}
                className="data-grid-headers"
                padding={{
                  bottom: Amount.Least,
                  top: Amount.Least,
                }}
              >
                {columns.map((column, key) => {
                  return (
                    <Container
                      alignment={{
                        horizontal: column.align,
                        orientation: Orientation.Horizontal,
                        vertical: AlignVertical.Center,
                      }}
                      background={{
                        color: BackgroundColors.DataGridColumnHeaders,
                      }}
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
                      key={key}
                      padding={{
                        left: Amount.Default,
                        right: Amount.Default,
                      }}
                      size={{
                        maxWidth: column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                        minWidth: column.size?.minWidth ?? MIN_COLUMN_WIDTH,
                        width: column.size?.width,
                      }}
                    >
                      <Label
                        alignment={{
                          horizontal: column.align,
                          vertical: AlignVertical.Center,
                        }}
                        lineHeight={Sizes.Large}
                        textColor={TextColors.DataGridColumnHeaders}
                        textSize={TextSize.Smaller}
                      >
                        {column.label}
                      </Label>
                    </Container>
                  );
                })}
              </Container>

              <Container
                background={{
                  color: BackgroundColors.DataGridRow,
                }}
                borderRadius={{
                  bottomLeft: Amount.Default,
                  bottomRight: Amount.Default,
                }}
                className="data-grid-rows"
              >
                {data &&
                  data.map((row, key) => {
                    return (
                      <Container
                        alignment={{
                          orientation: Orientation.Horizontal,
                        }}
                        background={{
                          color: BackgroundColors.DataGridCell,
                        }}
                        className="data-grid-row"
                        cursor={Cursor.Pointer}
                        events={{
                          mouse: {
                            onClick: () => {
                              if (onItemClick) onItemClick(row);
                            },
                          },
                        }}
                        key={key}
                        padding={{ all: Amount.Least }}
                        states={{
                          hovered: {
                            background: {
                              color: BackgroundColors.Primary,
                            },
                          },
                        }}
                      >
                        {columns.map((column, columnKey) => {
                          return (
                            <DataGridCell
                              alignment={{
                                horizontal: column.align,
                                orientation: Orientation.Horizontal,
                                vertical: AlignVertical.Center,
                              }}
                              // backgroundColor={BackgroundColors.DataGridCell}
                              fieldName={column.field}
                              lineHeight={Sizes.Large}
                              lineWrap={true}
                              model={model}
                              textColor={
                                hoveredRow === key
                                  ? TextColors.PrimaryContrast
                                  : TextColors.DataGridCell
                              }
                              type={column.type}
                              value={fetchFromObject(row, column.field)}
                              size={{
                                maxWidth:
                                  column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                                minWidth:
                                  column.size?.minWidth ?? MIN_COLUMN_WIDTH,
                                width: column.size?.width,
                              }}
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
                    return createElement(template.card, {
                      key,
                      events: {
                        mouse: {
                          onClick: () => {
                            if (onItemClick) onItemClick(row);
                          },
                        },
                      },
                      margin: {
                        bottom: Amount.Default,
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
