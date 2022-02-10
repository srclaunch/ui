import { css } from 'styled-components';
import { Overflow } from '../../types';

export function getOverflowStyle(value?: Overflow | string) {
  switch (value) {
    case Overflow.Clip:
      return css`
        overflow: clip;
      `;
    case Overflow.ClipBoth:
      return css`
        overflow: clip-both;
      `;
    case Overflow.ClipHorizontal:
      return css`
        overflow-x: clip;
      `;
    case Overflow.ClipVertical:
      return css`
        overflow-y: clip;
      `;
    case Overflow.Hidden:
      return css`
        overflow: hidden;
      `;
    case Overflow.Scroll:
    case Overflow.ScrollBoth:
      return css`
        overflow: scroll;
      `;
    case Overflow.ScrollHorizontal:
      return css`
        overflow: hidden;
        overflow-x: scroll;
      `;
    case Overflow.ScrollVertical:
      return css`
        overflow: hidden;
        overflow-y: scroll;
      `;
    case Overflow.Visible:
      return css`
        overflow: visible;
      `;
    default:
      return value;
  }
}
