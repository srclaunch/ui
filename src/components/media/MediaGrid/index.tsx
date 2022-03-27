import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Fill, Orientation } from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { MediaGridItem } from './MediaGriditem';

export type MediaGridProps = ContainerProps & {
  readonly className?: string;
  readonly columns?: number;
  readonly items: readonly MediaGridItem[];
  readonly loading?: boolean;
};

export const MediaGrid = memo(
  ({
    borderRadius = {},
    children,
    columns = 3,
    className = '',
    items,
    loading,
    ...props
  }: MediaGridProps): ReactElement => {
    const rows = Array.from({ length: Math.ceil(items.length / columns) }).fill(
      0,
    );

    return (
      <Container
        borderRadius={{ all: Amount.Default, ...borderRadius }}
        className={`${className} media-grid`}
        {...props}
      >
        <LoadingOverlay
          background={{ color: BackgroundColors.Transparent }}
          borderRadius={borderRadius}
          states={{
            state: {
              visible: loading,
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
                    margin={{ right: Amount.Default }}
                    key={key}
                    size={{
                      width: `calc(100% / ${columns ?? 1} - ${Amount.Default})`,
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
