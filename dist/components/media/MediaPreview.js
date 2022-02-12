import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, Orientation, } from '../../types';
import { Container } from '../layout/Container';
import { Image } from './Image';
export const MediaPreview = memo(({ borderRadius = Amount.Less, className = '', height = 220, media, orientation = Orientation.Vertical, ...props }) => {
    if (!media || media.length === 0)
        return _jsx(Container, { children: "No media" }, void 0);
    console.log('media', media);
    return (_jsxs(Container, { className: `${className} media-preview`, height: orientation === Orientation.Horizontal ? height : 'auto', orientation: orientation, ...props, children: [media && media.length > 0 && media[0] && (
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
            _jsx(Image, { alt: media[0].description, borderRadius: borderRadius, 
                // height="100%"
                maxWidth: orientation === Orientation.Horizontal ? 300 : 'auto', url: media[0].url ?? media?.[0]?.path }, void 0)), media && media.slice(1).length > 0 && (_jsx(Container, { alignContent: Align.SpaceBetween, orientation: orientation === Orientation.Horizontal
                    ? Orientation.Vertical
                    : Orientation.Horizontal, lineWrap: true, children: media.slice(1).map((item, k) => {
                    return (_jsx(Image, { alt: item.description, borderRadius: Amount.Least, height: orientation === Orientation.Horizontal ? '47%' : 'auto', marginLeft: orientation === Orientation.Horizontal
                            ? Amount.Less
                            : Amount.None, marginTop: orientation === Orientation.Vertical
                            ? Amount.Less
                            : Amount.None, url: item.url, width: orientation === Orientation.Vertical ? '31%' : 'auto' }, k));
                }) }, void 0))] }, void 0));
});
//# sourceMappingURL=MediaPreview.js.map