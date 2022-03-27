import { css, SimpleInterpolation } from 'styled-components';

import { Cursor } from '../../types';

export function getCursorStyle(cursor: Cursor): SimpleInterpolation {
  return css`
    cursor: ${cursor};
  `;
}

export function getCursorStyles(cursor?: Cursor): SimpleInterpolation {
  return css`
    ${cursor && getCursorStyle(cursor)}
  `;
}

export const CursorStyles = css<{ cursor?: Cursor }>`
  ${props => getCursorStyles(props.cursor)}
`;
