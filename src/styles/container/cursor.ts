import { css } from 'styled-components';

import { Cursor } from '../../types';

export const CursorStyles = css<{ cursor?: Cursor }>`
  cursor: ${props => props.cursor ?? 'inherit'};
`;
