import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, Orientation } from '../../types';
import { Container } from '../layout/Container';
import { ListItem } from './ListItem';
export const UnorderedList = memo(({ as = 'ul', grow = false, items, marginLeft = Amount.Default, ...props }) => {
    return (_jsx(Container, { as: as, grow: grow, orientation: Orientation.Vertical, ...props, children: items.map((item, index) => item.props.items ? (_jsx(Container, { grow: grow, marginLeft: marginLeft, paddingBottom: Amount.Least, paddingTop: Amount.Least, children: item }, void 0)) : (_jsx(ListItem, { grow: false, marginLeft: marginLeft, paddingBottom: Amount.Least, paddingTop: Amount.Least, children: item }, index))) }, void 0));
});
//# sourceMappingURL=UnorderedList.js.map