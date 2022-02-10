import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons, DualLightIcons } from '@srclaunch/icons';
import { Icon } from '../../../media/Icon';
export const defaultIcons = Object.keys({ ...BasicIcons, ...DualLightIcons });
export const IconInput = memo(({ color = '190, 190, 190', defaultValue, modal = true, onChange, }) => {
    const [selectedIcon, setSelectedIcon] = useState(defaultValue);
    useEffect(() => {
        if (selectedIcon && selectedIcon !== defaultValue) {
            onChange(selectedIcon);
        }
    }, [selectedIcon]);
    useEffect(() => {
        setSelectedIcon(defaultValue);
    }, [defaultValue]);
    return (_jsxs(Container, { "data-testid": "icon-picker", modal: modal, children: [_jsx(IconPreview, { color: color, children: _jsx(Icon, { color: color, name: selectedIcon }, void 0) }, void 0), _jsx(IconMenu, { modal: modal, children: _jsx(PresetIcons, {}, void 0) }, void 0)] }, void 0));
});
const IconPreview = styled.div `
  background: white;
  border-radius: 4px 4px 0 0;
  height: 36px;
  padding: 10px 10px 8px 10px;
  position: relative;
  width: 36px;
  z-index: 500;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  svg {
    fill: rgba(${props => props.color}, 1);
  }
`;
const IconMenu = styled.div `
  background: white;
  border: 1px solid #eee;
  border-radius: 0 12px 12px 12px;
  margin: -2px 0 0 0;
  max-height: 250px;
  position: relative;
  z-index: 250;

  &:hover {
    border: 1px solid #bbb;
  }

  &:focus {
    border: 1px solid rgba(65, 145, 63, 1) !important;
  }

  ${props => props.modal
    ? css `
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-radius: 0 12px 12px 12px;
          display: none;
          left: 0;
          overflow: hidden;
          position: absolute;
          width: 220px;
          z-index: 400;
        `
    : css `
          &:after {
            clear: both;
            content: '';
            display: block;
          }
        `};
`;
const Container = styled.div `
  position: relative;

  ${props => props.modal &&
    css `
      &:hover {
        ${IconMenu} {
          display: block;
        }

        ${IconPreview} {
          background: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      }
    `};
`;
// const IconName = styled.div`
//   color: #5b5b5b;
//   font-size: 12px;
//   font-weight: 600;
//   height: 20px;
//   padding: 8px 0;
//   text-align: center;
// `;
const PresetIcons = styled.div `
  height: 250px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px 0 0 10px;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
//# sourceMappingURL=IconInput.js.map