import { css, SimpleInterpolation } from 'styled-components';

import {
  Alignment,
  AlignHorizontal,
  AlignVertical,
  Orientation,
  Overflow,
  Fill,
  Size,
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
        overflow: scroll;
      `;
    case Overflow.ScrollHorizontal:
      return css`
        overflow: hidden;
        overflow-x: scroll;
      `;
    case Overflow.ScrollVertical:
      return css`
        /* position: absolute !important; */
        /* height: min-content; */
        overflow: hidden;
        overflow-y: scroll;
      `;
    case Overflow.Visible:
      return css`
        overflow: visible;
      `;
    case Overflow.Hidden:
    default:
      return css`
        overflow: hidden;
      `;
  }
}
export const AlignmentStyles = css<{
  readonly alignment?: Alignment;
}>`
  display: flex;

  ${props =>
    props.alignment?.orientation &&
    css`
      flex-direction: ${props.alignment.orientation === Orientation.Horizontal
        ? 'row'
        : 'column'};
    `};

  ${props =>
    props.alignment?.horizontal &&
    css`
      ${getHorizontalAlignStyle(props.alignment)};
    `};

  ${props =>
    props.alignment?.vertical &&
    css`
      ${getVerticalAlignStyle(props.alignment)};
    `};

  ${props =>
    props.alignment?.fill &&
    css`
      ${getFillStyles(props.alignment)};
    `};

  ${props =>
    props.alignment?.overflow &&
    css`
      ${getOverflowStyle(props.alignment.overflow)};
    `};
`;
