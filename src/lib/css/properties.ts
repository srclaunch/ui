import { Amount, BorderColors, Shadow } from '../../types';

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

// export function getCSSBoxShadowValue(val?: Shadow): string | null {
//   if (!val) return null;

//   // offset-x | offset-y | blur-radius | spread-radius | color
//   const getString = (shadow: Shadow) => {
//     const offsetX = shadow.x ? `${shadow.x}px` : 0;
//     const offsetY = shadow.y ? `${shadow.y}px` : 0;
//     const blurRadius = shadow.radius ? `${shadow.blurRadius}px` : '';
//     const spreadradius = shadow.spreadRadius ? `${shadow.spreadRadius}px` : '';
//     const color = ` rgba(${shadow.color}, ${shadow.opacity ?? 100}%)`;

//     return `${offsetX} ${offsetY} ${blurRadius} ${spreadradius} ${color}`;
//   };

//   if (Array.isArray(val)) {
//     return val.map(s => getString(s)).join(',');
//   }

//   if (typeof val === 'string') return val;

//   // @ts-ignore
//   return getString(val);
// }
