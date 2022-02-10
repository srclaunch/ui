import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { validate } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../layout/Container';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputContainer } from '../shared/InputContainer';
import { InputLabel } from '../../labels/InputLabel';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, DepthShadow, Orientation, Size, TextColors, } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { TextStyles } from '../../../../styles/typography';
export const LongTextInput = memo(({ backgroundColor = BackgroundColors.InputControl, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, boxShadow = DepthShadow.Low, className = '', defaultValue, error, flat = false, hidden = false, icon, inProgress = false, label, lineHeight = Amount.More, name, onChange, prefix = '', placeholder = '', size = Size.Default, spellCheck = true, suffix = '', textColor = TextColors.InputControl, validation = {}, }) => {
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
    return (_jsxs(_Fragment, { children: [_jsxs(Container, { orientation: Orientation.Horizontal, children: [label && _jsx(InputLabel, { children: label }, void 0), problems.length ? (_jsx(ErrorLabel, { alignContent: Align.Right, children: problems[0]?.message.short }, void 0)) : null] }, void 0), _jsxs(InputContainer, { backgroundColor: backgroundColor, border: border, boxShadow: boxShadow, className: `${className} text-input`, error: problems, focused: focused, flat: flat, height: size, onClick: () => {
                    inputRef.current?.focus();
                }, orientation: Orientation.Horizontal, padding: Amount.Least, paddingLeft: Amount.Less, paddingRight: Amount.Least, size: size, children: [icon && (_jsx(Icon, { ...icon, color: value === '' ? TextColors.Lightest : icon.color ?? textColor, marginRight: Amount.Least }, void 0)), _jsx(Input, { hidden: hidden, name: name, onBlur: () => setFocused(false), onChange: (e) => {
                            setValueChanged(true);
                            // @ts-ignore
                            setValue(prefix + e.target.value + suffix);
                        }, onFocus: () => setFocused(true), placeholder: placeholder, ref: inputRef, lineHeight: lineHeight, textColor: textColor, value: value, spellCheck: spellCheck }, void 0), inProgress && (_jsx(Container, { grow: false, children: _jsx(ProgressSpinner, { size: Size.Small }, void 0) }, void 0))] }, void 0)] }, void 0));
});
// const Container = styled.div<LayoutProps<AppearanceProps<null>>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${ElementStyles};
//   ${InputStyles};
//   ${FocusedStyles};
//   cursor: text;
// `;
const Input = styled.textarea `
  ${TextStyles};

  background: transparent;
  border: none;
  width: 100%;

  // &::placeholder,
  // &::-webkit-input-placeholder,
  // &::-moz-placeholder {
  //   );
  // }

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
//# sourceMappingURL=LongTextInput.js.map