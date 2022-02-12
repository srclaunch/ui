import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { memo, MouseEventHandler, ReactElement } from 'react';

import {
  Align,
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

export type MediaGridItem = {
  readonly description?: string | null;
  readonly element?: ReactElement;
  readonly images?: readonly ImageType[];
  readonly minHeight?: Amount | number;
  readonly moreMenu?: MoreMenuProps;
  readonly title?: string;
  readonly url?: string;
  readonly video?: VideoType;
} & ContainerProps<HTMLDivElement>;

export const MediaGridItem = memo(
  ({
    borderRadius = Amount.Default,
    description,
    images,
    minHeight,
    moreMenu,
    onClick,
    title,
    url,
    video,
    ...props
  }: MediaGridItem) => {
    const content = images ? (
      <Container
        alignItems={Align.Bottom}
        orientation={Orientation.Horizontal}
        padding={Amount.Default}
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
      <Container>Image not found</Container>
    );

    return (
      <Card
        alignItems={Align.Stretch}
        alignContent={Align.Stretch}
        backgroundColor={BackgroundColors.Dark}
        backgroundImage={{
          position: Align.Center,
          size: BackgroundSize.Cover,
          url: images?.[0]?.url ?? images?.[0]?.path,
        }}
        borderRadius={borderRadius}
        grow={false}
        linkTo={url}
        minHeight={minHeight ?? 220}
        onClick={onClick}
        {...props}
      >
        {content}
      </Card>
    );
  },
);
