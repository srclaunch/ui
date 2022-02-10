import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { InputContainerStyles } from '../../../../styles/forms/input/container';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Orientation, } from '../../../../types';
export const InputContainer = memo(({ backgroundColor = BackgroundColors.Lightest, borderRadius = Amount.Least, border = {
    color: BorderColors.Default,
    style: BorderStyle.Solid,
    width: 1,
}, children, className = '', error, size, success, ...props }) => {
    return (_jsx(Container, { backgroundColor: backgroundColor, borderRadius: borderRadius, border: {
            ...border,
            // @ts-ignore
            color: error && (Array.isArray(error) && error.length > 0) ? BorderColors.Error : border?.color,
        }, className: `${className} input-container`, error: error, grow: true, orientation: Orientation.Horizontal, success: success, ...props, children: children }, void 0));
});
const Container = styled.div `
  ${InputContainerStyles};

  input {
    border: none;
  }
`;
//# sourceMappingURL=InputContainer.js.map