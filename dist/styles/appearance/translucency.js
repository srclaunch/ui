import { css } from 'styled-components';
export const TranslucencyStyles = css `
  opacity: ${props => (props.opacity ? props.opacity / 100 : 1)};
`;
//# sourceMappingURL=translucency.js.map