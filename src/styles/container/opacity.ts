import { css } from 'styled-components';

export const OpacityStyles = css<{ opacity?: number }>`
  opacity: ${props => (props.opacity ? props.opacity / 100 : 1)};
`;
