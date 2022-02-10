import { memo, ReactElement } from 'react';

import { Align, Amount, BackgroundColors, FillBehavior, Orientation } from '../../../types';

import { Container, ContainerProps } from '../../layout/Container';
import { MediaGridItem } from './MediaGriditem';
import { LoadingOverlay } from '../../progress/LoadingOverlay';

export type MediaGridProps = ContainerProps<
  HTMLDivElement,
  {
    className?: string;
    columns?: number;
    items: MediaGridItem[];
    loading?: boolean;
  }
>;

export const MediaGrid = memo(
  ({
    borderRadius = Amount.Default,
    children,
    columns = 3,
    className = '',
    items,
    loading,
    ...props
  }: MediaGridProps): ReactElement => {
    const rows = new Array(Math.ceil(items.length / columns)).fill(0);

    return (
      <Container
        borderRadius={borderRadius}
        className={`${className} media-grid`}
        marginBottom={Amount.Default}
        orientation={Orientation.Vertical}
        {...props}
      >
        <LoadingOverlay backgroundColor={BackgroundColors.Transparent} borderRadius={borderRadius} visible={loading} />

        {rows.map((x, row) => {
          return (
            <Container
              className="media-grid-row"
              key={row}
              marginBottom={Amount.Default}
              orientation={Orientation.Horizontal}
            >
              {items
                .slice(columns * row, columns * row + columns)
                .map((i, key) => (
                  <MediaGridItem 
                    marginRight={Amount.Default} 
                    key={key}         
                    width={`calc(100% / ${columns ?? 1} - ${Amount.Default})`} 
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
