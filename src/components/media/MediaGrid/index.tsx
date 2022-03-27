import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Fill, Orientation } from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { MediaGridItem, MediaGridItemProps } from './MediaGriditem';

export type MediaGridProps = ContainerProps & {
  readonly className?: string;
  readonly columns?: number;
  readonly items: readonly MediaGridItemProps[];
};

export const MediaGrid = memo(
  ({
    borderRadius = {},
    children,
    columns = 5,
    className = '',
    items = [],
    states = {},
    ...props
  }: MediaGridProps): ReactElement => {
    const rows = Array.from({ length: Math.ceil(items.length / columns) }).fill(
      0,
    );

    return (
      <Container
        alignment={{
          fill: Fill.Both,
        }}
        borderRadius={{ all: Amount.Default, ...borderRadius }}
        className={`${className} media-grid`}
        {...props}
      >
        <LoadingOverlay
          background={{ color: BackgroundColors.Transparent }}
          borderRadius={borderRadius}
          states={{
            state: {
              visible: states.state?.loading ?? false,
            },
          }}
        />

        {rows.map((x, row) => {
          return (
            <Container
              alignment={{
                fill: Fill.Both,
                orientation: Orientation.Horizontal,
              }}
              className="media-grid-row"
              key={row}
              margin={{ bottom: Amount.Default }}
            >
              {items
                .slice(columns * row, columns * row + columns)
                .map((i, key) => (
                  <MediaGridItem
                    margin={{ right: Amount.Default, ...i.margin }}
                    key={key}
                    size={{
                      minHeight: 200,
                      minWidth: 260,
                      ...i.size,
                    }}
                    {...i}
                  />
                ))}
            </Container>
          );
        })}
      </Container>
    );
  },
);
