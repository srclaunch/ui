import { css } from 'styled-components';

import { Overflow } from '../../types';

export const OverflowStyles = css<{ overflow?: Overflow }>`
  ${props =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `};
`;
