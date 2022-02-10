import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { DimensionStyles } from '../../styles/appearance/dimension';
import { AppearanceStyles } from '../../styles/appearance/index';
import { LayoutStyles } from '../../styles/layout';
import {
  AppearanceProps,
  DimensionProps,
  LayoutProps,
} from '../../types/index';

/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export type ImageProps<P = Record<string, unknown>> = LayoutProps<
  AppearanceProps<
    DimensionProps<{
      readonly alt?: string;
      readonly className?: string;
      readonly description?: string;
      readonly url?: string;
      readonly path?: string;
    }>
  >
> &
  P;

const Img = styled.img<ImageProps>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
`;

export const Image = memo(
  ({
    alt,
    className = '',
    description,
    height = 'auto',
    path,
    url,
    width = 'auto',
    ...props
  }: ImageProps): ReactElement => {
    return (
      <Img
        alt={alt ?? description}
        className={`${className} image`}
        height={height}
        src={path ?? url}
        width={width}
        {...props}
      />
    );
  },
);
