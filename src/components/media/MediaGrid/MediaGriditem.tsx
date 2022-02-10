import { memo, MouseEventHandler, ReactElement } from 'react';
import { Image as ImageType, Video as VideoType } from '@srclaunch/types';

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
import { Video } from '../../media/Video';
import { MoreMenu, MoreMenuProps } from '../../menus/MoreMenu';
import { Text } from '../../typography/Text';
import { Container, ContainerProps } from '../../layout/Container';

export type MediaGridItem = ContainerProps<
  HTMLDivElement,
  {
    description?: string | null;
    element?: ReactElement;
    images?: ImageType[];
    minHeight?: Amount | number;
    moreMenu?: MoreMenuProps;
    title?: string;
    url?: string;
    video?: VideoType;
  }
>;

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
        <Text
          textColor={TextColors.White}
          textSize={TextSize.Large}
          textWeight={TextWeight.Most}
        >
          {title}
        </Text>

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
