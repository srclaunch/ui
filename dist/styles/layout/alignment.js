import { css } from 'styled-components';
import { Orientation } from '../../types';
export const AlignmentStyles = css `
  align-items: ${props => props.alignItems ?? 'center'};
  display: flex;
  flex: unset;
  flex-grow: ${props => (props.grow ? 1 : 0)};
  flex-direction: ${props => props.orientation && props.orientation === Orientation.Horizontal
    ? 'row'
    : 'column'};
  flex-shrink: ${props => (props.shrink ? 1 : 0)};
  flex-wrap: ${props => (props.lineWrap ? 'wrap' : 'nowrap')};
  justify-content: ${props => props.alignContent ?? 'initial'};
  place-self: ${props => props.alignSelf ?? 'initial'};
`;
//# sourceMappingURL=alignment.js.map