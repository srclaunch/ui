import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { getLabelByFieldType } from '../../../lib/data/labels';
import { Amount, Orientation, Overflow, } from '../../../types';
import { Container } from '../../layout/Container';
export const DataGridCell = memo(({ fieldName, model, type, value, ...props }) => {
    const { alignContent, textColor, textOverflow, textSize, textWeight, maxWidth, minWidth, width, } = props;
    return (_jsx(Container, { orientation: Orientation.Horizontal, overflow: Overflow.Hidden, maxWidth: maxWidth, minWidth: minWidth, paddingLeft: Amount.Less, paddingRight: Amount.Less, width: width, ...props, children: getLabelByFieldType({
            fieldName,
            model,
            props: {
                alignContent,
                overflow: Overflow.Hidden,
                textColor,
                textOverflow,
                textSize,
                textWeight,
            },
            type,
            value,
        }) }, void 0));
});
//# sourceMappingURL=DataGridCell.js.map