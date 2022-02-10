import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, BackgroundColors, BackgroundSize, Orientation, TextColors, TextSize, TextWeight, } from '../../../types';
import { Card } from '../../cards/Card';
import { Video } from '../../media/Video';
import { MoreMenu } from '../../menus/MoreMenu';
import { Text } from '../../typography/Text';
import { Container } from '../../layout/Container';
export const MediaGridItem = memo(({ borderRadius = Amount.Default, description, images, minHeight, moreMenu, onClick, title, url, video, ...props }) => {
    const content = images ? (_jsxs(Container, { alignItems: Align.Bottom, orientation: Orientation.Horizontal, padding: Amount.Default, children: [_jsx(Text, { textColor: TextColors.White, textSize: TextSize.Large, textWeight: TextWeight.Most, children: title }, void 0), _jsx(Container, {}, void 0), moreMenu && _jsx(MoreMenu, { ...moreMenu }, void 0)] }, void 0)) : video ? (_jsx(Video, { className: "media-grid-video", description: video.description, path: video.path, url: video.url }, void 0)) : (_jsx(Container, { children: "Image not found" }, void 0));
    return (_jsx(Card, { alignItems: Align.Stretch, alignContent: Align.Stretch, backgroundColor: BackgroundColors.Dark, backgroundImage: {
            position: Align.Center,
            size: BackgroundSize.Cover,
            url: images?.[0]?.url ?? images?.[0]?.path,
        }, borderRadius: borderRadius, grow: false, linkTo: url, minHeight: minHeight ?? 220, onClick: onClick, ...props, children: content }, void 0));
});
//# sourceMappingURL=MediaGriditem.js.map