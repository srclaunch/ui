import { css } from 'styled-components';

import { getDepthZIndex } from '../lib/css/depth/z-index';
import { getCSSMeasurementValue } from '../lib/css/properties';
import { getOverflowStyle } from '../lib/layout/overflow';
import { Amount, FillBehavior, LayoutProps, Orientation } from '../types';

function getPositionProperty(
  value:
    | LayoutProps['bottom']
    | LayoutProps['left']
    | LayoutProps['right']
    | LayoutProps['top'],
): Amount | string | null | undefined {
  if (typeof value === 'number') {
    return getCSSMeasurementValue(value);
  }

  return value;
}

export const LayoutStyles = css<LayoutProps>`
  align-items: ${props => props.alignItems ?? 'center'};
  bottom: ${props => getPositionProperty(props.bottom) ?? 'auto'};
  display: flex;
  flex: unset;
  flex-grow: ${props => (props.grow ? 1 : 0)};
  flex-direction: ${props =>
    props.orientation
      ? props.orientation === Orientation.Horizontal
        ? 'row'
        : 'column'
      : 'column'};
  flex-shrink: ${props => (props.shrink ? 1 : 0)};
  flex-wrap: ${props => (props.lineWrap ? 'wrap' : 'nowrap')};
  justify-content: ${props => props.alignContent ?? 'initial'};
  left: ${props => getPositionProperty(props.left) ?? 'auto'};
  place-self: ${props => props.alignSelf ?? 'initial'};
  position: ${props => props.position ?? 'relative'};
  pointer-events: ${props =>
    props.events === false
      ? 'none'
      : props.events === true
      ? 'all'
      : 'inherit'};
  right: ${props => getPositionProperty(props.right) ?? 'auto'};
  top: ${props => getPositionProperty(props.top) ?? 'auto'};
  z-index: ${props =>
    getDepthZIndex(props.depth) === 0 ? 'auto' : getDepthZIndex(props.depth)};

  ${props =>
    props.fillBehavior === FillBehavior.FillVertical &&
    Orientation.Vertical &&
    css`
      flex: 1 1 auto;
    `};

  ${props =>
    props.fillBehavior === FillBehavior.FillHorizontal &&
    Orientation.Horizontal &&
    css`
      flex: 1 1 auto;
    `};

  ${props =>
    props.fillBehavior === FillBehavior.FillBoth &&
    css`
      flex: 1 1 auto;
    `};

  ${props =>
    props.fillScreen &&
    css`
      display: flex;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
    `};

  ${props =>
    props.margin &&
    css`
      margin: ${getCSSMeasurementValue(props.margin) ?? 0};
    `};

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${getCSSMeasurementValue(props.marginBottom)};
    `};

  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${getCSSMeasurementValue(props.marginLeft)};
    `};

  ${props =>
    props.marginRight &&
    css`
      margin-right: ${getCSSMeasurementValue(props.marginRight)};
    `};

  ${props =>
    props.marginTop &&
    css`
      margin-top: ${getCSSMeasurementValue(props.marginTop)};
    `};

  ${props => getOverflowStyle(props.overflow)};

  ${props =>
    props.padding &&
    css`
      padding: ${getCSSMeasurementValue(props.padding) ?? 0};
    `};

  ${props =>
    props.paddingBottom &&
    css`
      padding-bottom: ${getCSSMeasurementValue(props.paddingBottom)};
    `};

  ${props =>
    props.paddingLeft &&
    css`
      padding-left: ${getCSSMeasurementValue(props.paddingLeft)};
    `};

  ${props =>
    props.paddingRight &&
    css`
      padding-right: ${getCSSMeasurementValue(props.paddingRight)};
    `};

  ${props =>
    props.paddingTop &&
    css`
      padding-top: ${getCSSMeasurementValue(props.paddingTop)};
    `};

  ${props =>
    props.scrollable &&
    css`
      bottom: 0;
      overflow: hidden;
      overflow-y: scroll;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `};
`;
