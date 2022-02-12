import { Image as ImageType, Video } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  BackgroundSize,
  Orientation,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Image } from './Image';

export type MediaPreviewProps = {
  readonly media?: readonly (ImageType | Video)[];
} & ContainerProps<HTMLDivElement>;

export const MediaPreview = memo(
  ({
    borderRadius = Amount.Less,
    className = '',
    height = 220,
    media,
    orientation = Orientation.Vertical,
    ...props
  }: MediaPreviewProps): ReactElement => {
    if (!media || media.length === 0) return <Container>No media</Container>;

    console.log('media', media);

    return (
      <Container
        className={`${className} media-preview`}
        height={orientation === Orientation.Horizontal ? height : 'auto'}
        orientation={orientation}
        {...props}
      >
        {media && media.length > 0 && media[0] && (
          // <Container
          //   backgroundColor={BackgroundColors.Dark}
          //   backgroundImage={{
          //     position: Align.Center,
          //     size: BackgroundSize.Cover,
          //     url: media?.[0]?.url ?? media?.[0]?.path,
          //   }}
          //   borderRadius={borderRadius}
          //   overflow={Overflow.Hidden}
          // />
          <Image
            alt={media[0].description}
            borderRadius={borderRadius}
            // height="100%"
            maxWidth={orientation === Orientation.Horizontal ? 300 : 'auto'}
            url={media[0].url ?? media?.[0]?.path}
          />
        )}

        {media && media.slice(1).length > 0 && (
          <Container
            alignContent={Align.SpaceBetween}
            orientation={
              orientation === Orientation.Horizontal
                ? Orientation.Vertical
                : Orientation.Horizontal
            }
            lineWrap
          >
            {media.slice(1).map((item, k) => {
              return (
                <Image
                  alt={item.description}
                  borderRadius={Amount.Least}
                  height={
                    orientation === Orientation.Horizontal ? '47%' : 'auto'
                  }
                  key={k}
                  marginLeft={
                    orientation === Orientation.Horizontal
                      ? Amount.Less
                      : Amount.None
                  }
                  marginTop={
                    orientation === Orientation.Vertical
                      ? Amount.Less
                      : Amount.None
                  }
                  url={item.url}
                  width={orientation === Orientation.Vertical ? '31%' : 'auto'}
                />
              );
            })}
          </Container>
        )}
      </Container>
    );
  },
);
