import { css } from 'styled-components';
export const AnimationStyles = css `
  ${props => props.transform?.rotate &&
    css `
      transform: rotate(${`${props.transform?.rotate}deg` ?? 'none'});
    `};
`;
//# sourceMappingURL=index.js.map