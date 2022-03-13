import { css } from 'styled-components';

export const VisibilityStyles = css<{
  visible?: boolean;
}>`
  ${props =>
    props.visible !== undefined &&
    css`
      opacity: ${props.visible ? 1 : 0};
      pointer-events: ${props.visible ? 'all' : 'none'};
      visibility: ${props.visible ? 'visible' : 'hidden'};
    `};
`;

/*
 animation: ${props => (props.fadeIn ? 'fadeInAnimation ease 0.13s' : 'none')};
  animation-iteration-count: ${props => (props.fadeIn ? 1 : 'none')};
  animation-fill-mode: ${props => (props.fadeIn ? 'forwards' : 'none')};


  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  */
