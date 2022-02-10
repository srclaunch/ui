import { css } from 'styled-components';

import { TranslucencyProps } from '../../types';

export const TranslucencyStyles = css<TranslucencyProps>`
  opacity: ${props => (props.opacity ? props.opacity / 100 : 1)};
`;
