import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import {
  AlignHorizontal,
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
import { Spacer } from '../../layout/Spacer';
import { Video } from '../../media/Video';
import { MenuProps } from '../../menus/Menu';
import { MenuItemProps } from '../../menus/MenuItem';
import { MoreMenu, MoreMenuProps } from '../../menus/MoreMenu';
import { Label } from '../../typography/Label';

export type MediaGridItemProps = ContainerProps & {
  readonly description?: string | null;
  readonly element?: ReactElement;
  readonly image?: ImageType;
  readonly minHeight?: Amount | number;
  readonly menu?: MenuItemProps[];
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
    image,
    minHeight,
    menu,
    title,
    url,
    video,
    ...props
  }: MediaGridItemProps) => {
    const content = image ? (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
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

        <Spacer />

        {menu && <MoreMenu menu={menu} />}
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
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Vertical,
          vertical: AlignVertical.Bottom,
          ...alignment,
        }}
        background={{
          color: BackgroundColors.Dark,

          image: {
            url: image?.url ?? image?.path,
            size: BackgroundSize.Cover,
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
