import { css, SimpleInterpolation } from 'styled-components';
import { Events } from '../../types/events';

export function getEventStyles(events?: Events): SimpleInterpolation {
  if (events) {
    const keys = Object.keys(events);

    const styles = keys.map(key => {
      switch (key) {
        case 'mouse':
          if (events.mouse?.disabled) {
            return css`
              pointer-events: none;
            `;
          }
      }
    });

    return styles;
  }

  return;
}

export const EventStyles = css<{ events?: Events }>`
  ${props => getEventStyles(props.events)}
`;
