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
    size = {},
    states = {},
    ...props
  }: MediaGridProps): ReactElement => {
    const rows = Array.from({ length: Math.ceil(items.length / columns) }).fill(
      0,
    );

    return (
      <Container
        borderRadius={{ all: Amount.Default, ...borderRadius }}
        className={`${className} media-grid`}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay
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
                orientation: Orientation.Horizontal,
              }}
              className="media-grid-row"
              key={row}
              margin={{ bottom: Amount.Default }}
              size={{
                fill: Fill.Both,
              }}
            >
              {items
                .slice(columns * row, columns * row + columns)
                .map((i, key) => (
                  <MediaGridItem
                    {...i}
                    margin={{ right: Amount.Default, ...i.margin }}
                    key={key}
                    size={{
                      minHeight: 200,
                      minWidth: 260,
                      ...i.size,
                    }}
                  />
                ))}
            </Container>
          );
        })}
      </Container>
    );
  },
);
