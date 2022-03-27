import { css, SimpleInterpolation } from 'styled-components';
import {
  Alignment,
  AlignHorizontal,
  AlignVertical,
  Orientation,
  Overflow,
  Fill,
} from '../../types';

export function getFillStyles(alignment?: Alignment): SimpleInterpolation {
  if (alignment?.fill === Fill.Both) {
    return css`
      flex-grow: 1;
    `;
  }
  if (alignment?.fill === Fill.Horizontal) {
    return css`
      flex-grow: 1;
    `;
  }

  if (alignment?.fill === Fill.Vertical) {
    return css`
      flex-grow: 1;
    `;
  }

  if (alignment?.fill === Fill.None) {
    return css`
      flex-grow: 0;
    `;
  }

  return css`
    flex-grow: 0;
  `;
}

export function getHorizontalAlignStyle(
  alignment?: Alignment,
): SimpleInterpolation {
  const { horizontal, orientation } = alignment ?? {};

  if (orientation === Orientation.Horizontal) {
    switch (horizontal) {
      case AlignHorizontal.Center:
        return css`
          justify-content: center;
        `;
      case AlignHorizontal.Right:
        return css`
          justify-content: flex-end;
        `;
      case AlignHorizontal.Left:
        return css`
          justify-content: flex-start;
        `;
      default:
        return css`
          justify-content: stretch;
        `;
    }
  }

  switch (horizontal) {
    case AlignHorizontal.Center:
      return css`
        align-items: center;
      `;
    case AlignHorizontal.Right:
      return css`
        align-items: flex-end;
      `;
    case AlignHorizontal.Left:
      return css`
        align-items: flex-start;
      `;
    default:
      return css`
        align-items: stretch;
      `;
  }
}

export function getVerticalAlignStyle(
  alignment?: Alignment,
): SimpleInterpolation {
  const { orientation, vertical } = alignment ?? {};

  if (orientation === Orientation.Horizontal) {
    switch (vertical) {
      case AlignVertical.Bottom:
        return css`
          align-items: flex-end;
        `;
      case AlignVertical.Center:
        return css`
          align-items: center;
        `;
      case AlignVertical.Top:
        return css`
          align-items: flex-start;
        `;
      default:
        return css`
          align-items: stretch;
        `;
    }
  }

  switch (vertical) {
    case AlignVertical.Bottom:
      return css`
        justify-content: flex-end;
      `;
    case AlignVertical.Center:
      return css`
        justify-content: center;
      `;
    case AlignVertical.Top:
      return css`
        justify-content: flex-start;
      `;
    default:
      return css`
        justify-content: stretch;
      `;
  }
}

export function getOverflowStyle(overflow?: Overflow): SimpleInterpolation {
  switch (overflow) {
    case Overflow.ClipBoth:
      return css`
        overflow: clip;
      `;
    case Overflow.ClipHorizontal:
      return css`
        overflow-x: clip;
      `;
    case Overflow.ClipVertical:
      return css`
        overflow-y: clip;
      `;

    case Overflow.ScrollBoth:
      return css`
        bottom: 0;
        left: 0;
        overflow: scroll;
        position: absolute;
        right: 0;
        top: 0;
      `;
    case Overflow.ScrollHorizontal:
      return css`
        bottom: 0;
        left: 0;
        overflow: hidden;
        overflow-x: scroll;
        position: absolute;
        right: 0;
        top: 0;
      `;
    case Overflow.ScrollVertical:
      return css`
        bottom: 0;
        left: 0;
        /* height: min-content; */
        overflow: hidden;
        overflow-y: scroll;
        position: absolute;
        right: 0;
        top: 0;
      `;
    case Overflow.Visible:
      return css`
        overflow: visible;
      `;
    case Overflow.Hidden:
      return css`
        overflow: hidden;
      `;
    default:
      return null;
  }
}

export function getFlexDirection(alignment: Alignment): SimpleInterpolation {
  switch (alignment?.orientation) {
    case Orientation.Horizontal:
      return css`
        flex-direction: row;
      `;
    case Orientation.Vertical:
    default:
      return css`
        flex-direction: column;
      `;
  }
}

export function getAlignmentStyles(alignment?: Alignment): SimpleInterpolation {
  return css`
    display: flex;
    ${alignment?.orientation && getFlexDirection(alignment)}
    ${alignment?.horizontal && getHorizontalAlignStyle(alignment)}
    ${alignment?.vertical && getVerticalAlignStyle(alignment)}
    ${alignment?.fill && getFillStyles(alignment)} 
    ${alignment?.overflow && getOverflowStyle(alignment.overflow)}
  `;
}

export const AlignmentStyles = css<{
  readonly alignment?: Alignment;
}>`
  ${props => getAlignmentStyles(props.alignment)}
`;
