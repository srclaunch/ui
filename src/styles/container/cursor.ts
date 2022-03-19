import { css, SimpleInterpolation } from 'styled-components';

import { Cursor } from '../../types';

export function getCursorStyles(cursor?: Cursor): SimpleInterpolation {
  return css`
    cursor: ${cursor ?? 'inherit'};
  `;
}

export const CursorStyles = css<{ cursor?: Cursor }>`
  ${props => getCursorStyles(props.cursor)};
`;
