import { BorderColors, } from '../../types';
export function getCSSMeasurementValue(val) {
    if (typeof val === 'string' && val.indexOf('var(') > -1) {
        return val;
    }
    if (typeof val === 'string' && val.indexOf('%') > -1) {
        return val;
    }
    if (typeof val === 'number') {
        return `${val}px`;
    }
    return val;
}
const isBorderStyleProps = (border) => {
    return border.hasOwnProperty('color');
};
export function getCSSBorderValue(val) {
    if (!val)
        return null;
    if (isBorderStyleProps(val)) {
        return `${getCSSMeasurementValue(val.width ?? 1)} ${val.style ?? ''} ${val.color === BorderColors.Transparent
            ? 'transparent'
            : `rgb(${val.color ?? BorderColors.Default})`}`;
    }
    return null;
}
export function getCSSBoxShadowValue(val) {
    if (!val)
        return null;
    // offset-x | offset-y | blur-radius | spread-radius | color
    const getString = (shadow) => {
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
    if (typeof val === 'string')
        return val;
    return getString(val);
}
//# sourceMappingURL=properties.js.map