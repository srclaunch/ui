import { css } from 'styled-components';

import { CursorProps } from '../../types';

export const CursorStyles = css<CursorProps>`
  cursor: ${props => props.cursor ?? 'inherit'};
`;
