import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { validate } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TextInputStyles } from '../../../../styles/forms/input/text-input';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Cursor, DepthShadow, Orientation, Size, TextColors, TextWeight, } from '../../../../types';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer } from '../shared/InputContainer';
export var TextInputType;
(function (TextInputType) {
    TextInputType["EmailAddress"] = "email";
    TextInputType["Text"] = "text";
    TextInputType["Password"] = "password";
    TextInputType["Search"] = "search";
})(TextInputType || (TextInputType = {}));
export const TextInput = memo(({ autoComplete, backgroundColor = BackgroundColors.InputControl, boxShadow = DepthShadow.Low, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, className = '', cursor = Cursor.Text, defaultValue, error, flat = false, hidden = false, icon, inProgress = false, inputType = TextInputType.Text, label, name, onChange, prefix = '', placeholder = '', size = Size.Default, spellCheck = true, suffix = '', textColor = TextColors.InputControl, textWeight = TextWeight.Default, validation = {}, ...props }) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState([]);
    const [valueChanged, setValueChanged] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        if (validation && valueChanged) {
            const probs = validate(value, validation);
            setProblems(probs);
            if (onChange)
                onChange({
                    problems: probs,
                    validated: probs.length === 0,
                    value,
                });
        }
        else {
            setProblems([]);
            if (onChange)
                onChange({
                    problems: [],
                    validated: true,
                    value,
                });
        }
    }, [value]);
    useEffect(() => {
        setValue(defaultValue ?? value ?? '');
    }, [defaultValue]);
    return (_jsxs(_Fragment, { children: [(label || problems.length > 0) && (_jsx(InputLabel, { error: problems, children: label }, void 0)), _jsxs(InputContainer, { backgroundColor: backgroundColor, border: border, boxShadow: boxShadow, className: `${className} text-input`, cursor: cursor, error: problems, focused: focused, flat: flat, onClick: () => {
                    inputRef.current?.focus();
                }, orientation: Orientation.Horizontal, size: size, ...props, children: [icon && (_jsx(Icon, { ...icon, color: value === ''
                            ? TextColors.InputPlaceholder
                            : icon.color ?? textColor, marginLeft: Amount.Less }, void 0)), _jsx(Input, { autoComplete: autoComplete, defaultValue: defaultValue, hidden: hidden, name: name, onBlur: () => setFocused(false), onChange: (e) => {
                            setValueChanged(true);
                            setValue(prefix + e.target.value + suffix);
                        }, onFocus: () => setFocused(true), lineHeight: size, placeholder: placeholder, textColor: textColor, textWeight: textWeight, type: inputType, value: value, ref: inputRef, spellCheck: spellCheck }, void 0), inProgress && (_jsx(Container, { grow: false, children: _jsx(ProgressSpinner, { size: Size.Small }, void 0) }, void 0))] }, void 0)] }, void 0));
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
  ${TextInputStyles};

  background: transparent;
  border: none;
  width: 100%;

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
//# sourceMappingURL=TextInput.js.map