import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { 
// getValidationProblemLabel,
validate, } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Cursor, DepthShadow, Orientation, Size, TextColors, TextWeight, } from '../../../../types';
import { Container } from '../../../layout/Container';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputContainer } from '../shared/InputContainer';
import { InputLabel } from '../../labels/InputLabel';
import { FocusedStyles } from '../../../../styles/focused';
import { TextStyles } from '../../../../styles/typography';
export const NumberInput = memo(({ as, backgroundColor = BackgroundColors.InputControl, boxShadow = DepthShadow.Low, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, className = '', cursor = Cursor.Text, defaultValue, error, hidden = false, icon, inProgress = false, label, name, onChange, onKeyPress, placeholder = '', prefix = '', size = Size.Default, suffix = '', textColor = TextColors.InputControl, textWeight = TextWeight.Default, validation = {}, ...props }) => {
    const [value, setValue] = useState(defaultValue);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState([]);
    const inputRef = useRef(null);
    useEffect(() => {
        setValueChanged(true);
        if (valueChanged) {
            const probs = validate(value, validation);
            setProblems(probs);
            if (onChange && value)
                onChange({
                    problems: probs,
                    validated: !probs.length,
                    value,
                });
        }
    }, [value]);
    return (_jsxs(_Fragment, { children: [_jsxs(Container, { orientation: Orientation.Horizontal, children: [label && _jsx(InputLabel, { children: label }, void 0), problems.length ? (_jsx(ErrorLabel, { alignContent: Align.Right, children: problems[0]?.message.short }, void 0)) : null] }, void 0), _jsxs(InputContainer, { backgroundColor: backgroundColor, border: border, boxShadow: boxShadow, cursor: cursor, className: `${className} number-input`, error: problems, focused: focused, onClick: () => {
                    inputRef.current?.focus();
                }, orientation: Orientation.Horizontal, size: size, ...props, children: [icon && _jsx(_Fragment, { children: icon }, void 0), _jsx(Input, { defaultValue: defaultValue, hidden: hidden, name: name, onBlur: () => setFocused(false), 
                        // @ts-ignore
                        onChange: (e) => {
                            setValueChanged(true);
                            setValue(e.target.value);
                        }, onFocus: () => setFocused(true), lineHeight: size, placeholder: placeholder, onKeyPress: e => e.key, ref: inputRef, textColor: textColor, type: "number", value: value }, void 0), inProgress && (_jsx(Container, { grow: false, children: _jsx(ProgressSpinner, { size: Size.Small }, void 0) }, void 0))] }, void 0)] }, void 0));
});
// const Container = styled.div<LayoutProps<AppearanceProps<null>>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${ElementStyles};
//   ${InputStyles};
//   ${FocusedStyles};
//   cursor: text;
// `;
const Input = styled.input `
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Less};
  width: 100%;


  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
//# sourceMappingURL=NumberInput.js.map