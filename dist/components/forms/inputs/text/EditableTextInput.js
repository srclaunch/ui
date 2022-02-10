import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
export const EditableTextInput = memo(({ defaultValue, onChange, }) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [editable, setEditable] = useState(false);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        setInputValue(defaultValue);
    }, [defaultValue]);
    return (_jsxs(Container, { onMouseEnter: () => setEditable(true), onMouseLeave: () => setEditable(false), children: [_jsx(Text, { children: inputValue }, void 0), _jsxs(InputField, { editable: editable, children: [focused && _jsx(EnterTip, { children: "Press enter" }, void 0), _jsx(Input, { onChange: e => setInputValue(e.target.value), onFocus: () => {
                            setFocused(true);
                        }, onBlur: e => {
                            setInputValue(e.target.value);
                            setFocused(false);
                        }, onKeyPress: e => {
                            if (e.charCode === 13) {
                                setEditable(false);
                                setFocused(false);
                                onChange(inputValue);
                            }
                        }, value: inputValue }, void 0)] }, void 0)] }, void 0));
});
const Text = styled.div `
  color: #3b3b3b;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
  position: relative;
  top: 1px;
  user-select: none;
`;
const InputField = styled.div `
  display: ${props => (props.editable ? 'block' : 'none')};
  position: absolute;
  top: 1px;
  left: -10px;
`;
const EnterTip = styled.div `
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 7px;
  padding: 4px 8px;
  position: absolute;
  right: 9px;
  top: 10px;
`;
const Input = styled.input `
  background: white;
  box-shadow: 0 0 0 #dadada;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #5b5b5b;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  padding: 9px;
  transition: border 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border: 1px solid #999;
  }

  &:focus {
    border: 1px solid #0074d9 !important;
  }

  &::placeholder {
    color: #9b9b9b;
  }
`;
const Container = styled.div `
  position: relative;
`;
//# sourceMappingURL=EditableTextInput.js.map