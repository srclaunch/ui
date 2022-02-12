import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { Link } from '@srclaunch/web-application-state';
import { memo } from 'react';
import styled from 'styled-components';
import { Size, TextColors } from '../../types';
import { Icon } from '../media/Icon';
import { Label } from '../typography/Label';
export const PageLink = memo(({ textColor, label, to, icon, showArrow = false, showUnderline = false, }) => {
    return (_jsx(Container, { showUnderline: showUnderline, children: _jsxs(Link, { to: to, children: [_jsx(IconWrapper, { children: icon }, void 0), _jsx(Label, { textColor: textColor ?? TextColors.Primary, size: Size.Small, children: label }, void 0), showArrow && (_jsx(Icon, { name: BasicIcons.ChevronRight, size: Size.Small, color: textColor }, void 0))] }, void 0) }, void 0));
});
const Container = styled.div `
  display: flex;

  a {
    border: ${props => props.showUnderline ? `2px solid var(--color-primary)` : 'none'};
    text-decoration: none;

    /* &:hover {
      border-bottom: 2px solid rgba(65, 145, 64, 1);
    } */
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    a {
      font-size: 18px;
    }

    svg {
      height: 12px;
      width: 12px;
    }
  }

  @media (min-width: 1200px) {
  }
`;
const IconWrapper = styled.div `
  flex-basis: 20px;
`;
//# sourceMappingURL=PageLink.js.map