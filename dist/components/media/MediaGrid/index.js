import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Orientation } from '../../../types';
import { Container } from '../../layout/Container';
import { MediaGridItem } from './MediaGriditem';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
export const MediaGrid = memo(({ borderRadius = Amount.Default, children, columns = 3, className = '', items, loading, ...props }) => {
    const rows = new Array(Math.ceil(items.length / columns)).fill(0);
    return (_jsxs(Container, { borderRadius: borderRadius, className: `${className} media-grid`, marginBottom: Amount.Default, orientation: Orientation.Vertical, ...props, children: [_jsx(LoadingOverlay, { backgroundColor: BackgroundColors.Transparent, borderRadius: borderRadius, visible: loading }, void 0), rows.map((x, row) => {
                return (_jsx(Container, { className: "media-grid-row", marginBottom: Amount.Default, orientation: Orientation.Horizontal, children: items
                        .slice(columns * row, columns * row + columns)
                        .map((i, key) => (_jsx(MediaGridItem, { marginRight: Amount.Default, width: `calc(100% / ${columns ?? 1} - ${Amount.Default})`, ...i }, key))) }, row));
            })] }, void 0));
});
//# sourceMappingURL=index.js.map