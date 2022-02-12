import {
  Amount,
  BorderColors,
  BorderDirectionProps,
  BorderStyleProps,
  BoxShadow,
  BoxShadowDetails,
} from '../../types';

export function getCSSMeasurementValue(
  val?: number | Amount | string,
): string | null | undefined {
  if (typeof val === 'string' && val.includes('var(')) {
    return val;
  }

  if (typeof val === 'string' && val.includes('%')) {
    return val;
  }

  if (typeof val === 'number') {
    return `${val}px`;
  }

  return val;
}

const isBorderStyleProps = (
  border: BorderDirectionProps | BorderStyleProps,
): border is BorderStyleProps => {
  return border.hasOwnProperty('color');
};

export function getCSSBorderValue(
  val?: BorderDirectionProps | BorderStyleProps,
): string | null {
  if (!val) return null;

  if (isBorderStyleProps(val)) {
    return `${getCSSMeasurementValue(val.width ?? 1)} ${val.style ?? ''} ${
      val.color === BorderColors.Transparent
        ? 'transparent'
        : `rgb(${val.color ?? BorderColors.Default})`
    }`;
  }

  return null;
}

export function getCSSBoxShadowValue(val?: BoxShadow): string | null {
  if (!val) return null;

  // offset-x | offset-y | blur-radius | spread-radius | color
  const getString = (shadow: BoxShadowDetails) => {
    const offsetX = shadow.offsetX ? `${shadow.offsetX}px` : 0;
    const offsetY = shadow.offsetY ? `${shadow.offsetY}px` : 0;
    const blurRadius = shadow.blurRadius ? `${shadow.blurRadius}px` : '';
    const spreadradius = shadow.spreadRadius ? `${shadow.spreadRadius}px` : '';
    const color = ` rgba(${shadow.color}, ${shadow.opacity ?? 100}%)`;

    return `${offsetX} ${offsetY} ${blurRadius} ${spreadradius} ${color}`;
  };

  if (Array.isArray(val)) {
    return val.map(s => getString(s)).join(',');
  }

  if (typeof val === 'string') return val;

  // @ts-ignore
  return getString(val);
}
