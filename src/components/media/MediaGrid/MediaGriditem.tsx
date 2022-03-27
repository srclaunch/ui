import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { memo, MouseEventHandler, ReactElement } from 'react';

import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BackgroundSize,
  Orientation,
  Position,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../types';
import { Card } from '../../cards/Card';
import { Container, ContainerProps } from '../../layout/Container';
import { Video } from '../../media/Video';
import { MoreMenu, MoreMenuProps } from '../../menus/MoreMenu';
import { Label } from '../../typography/Label';

export type MediaGridItem = ContainerProps & {
  readonly description?: string | null;
  readonly element?: ReactElement;
  readonly images?: readonly ImageType[];
  readonly minHeight?: Amount | number;
  readonly moreMenu?: MoreMenuProps;
  readonly title?: string;
  readonly url?: string;
  readonly video?: VideoType;
};

export const MediaGridItem = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    description,
    images,
    minHeight,
    moreMenu,
    title,
    url,
    video,
    ...props
  }: MediaGridItem) => {
    const content = images ? (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Bottom,
        }}
        padding={{ all: Amount.Default }}
      >
        <Label
          textColor={TextColors.White}
          textSize={TextSize.Large}
          textWeight={TextWeight.Most}
        >
          {title}
        </Label>

        <Container />

        {moreMenu && <MoreMenu {...moreMenu} />}
      </Container>
    ) : video ? (
      <Video
        className="media-grid-video"
        description={video.description}
        path={video.path}
        url={video.url}
      />
    ) : (
      <Label padding={{ all: Amount.Default }}>Image not found</Label>
    );

    return (
      <Card
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Vertical,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        background={{
          color: BackgroundColors.Dark,

          image: {
            url: images?.[0]?.url ?? images?.[0]?.path,
            // size: BackgroundSize.Cover,
          },
          ...background,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        linkTo={url}
        {...props}
      >
        {content}
      </Card>
    );
  },
);
