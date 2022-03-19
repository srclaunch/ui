import { memo, ReactElement } from 'react';
import { Image as ImageType, Video } from '@srclaunch/types';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Orientation,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Image } from './Image';

export type MediaPreviewProps = ContainerProps & {
  readonly media?: readonly (ImageType | Video)[];
};

export const MediaPreview = memo(
  ({
    alignment = {},
    borderRadius = {},
    className = '',
    media,
    ...props
  }: MediaPreviewProps): ReactElement => {
    if (!media || media.length === 0) return <Container>No media</Container>;

    console.log('media', media);

    return (
      <Container className={`${className} media-preview`} {...props}>
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
            borderRadius={{ all: Amount.Less, ...borderRadius }}
            // height="100%"
            size={{
              maxWidth: 300,
            }}
            url={media[0].url ?? media?.[0]?.path}
          />
        )}

        {media && media.slice(1).length > 0 && (
          <Container
            alignment={{
              horizontal: AlignHorizontal.SpaceBetween,
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.SpaceBetween,
              ...alignment,
            }}
          >
            {media.slice(1).map((item, k) => {
              return (
                <Image
                  alt={item.description}
                  borderRadius={{ all: Amount.Least }}
                  key={k}
                  margin={{
                    left:
                      alignment.orientation === Orientation.Horizontal
                        ? Amount.Less
                        : Amount.None,
                    top:
                      alignment.orientation === Orientation.Vertical
                        ? Amount.Less
                        : Amount.None,
                  }}
                  url={item.url}
                  size={{
                    height:
                      alignment.orientation === Orientation.Horizontal
                        ? '47%'
                        : 'auto',
                    width:
                      alignment.orientation === Orientation.Vertical
                        ? '31%'
                        : 'auto',
                  }}
                />
              );
            })}
          </Container>
        )}
      </Container>
    );
  },
);
