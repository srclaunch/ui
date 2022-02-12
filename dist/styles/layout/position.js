import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
function getPositionProperty(value) {
    if (typeof value === 'number') {
        return getCSSMeasurementValue(value);
    }
    return value;
}
export const PositionStyles = css `
  bottom: ${props => getPositionProperty(props.bottom) ?? 'auto'};
  left: ${props => getPositionProperty(props.left) ?? 'auto'};
  position: ${props => props.position ?? 'relative'};
  right: ${props => getPositionProperty(props.right) ?? 'auto'};
  top: ${props => getPositionProperty(props.top) ?? 'auto'};
`;
//# sourceMappingURL=position.js.map