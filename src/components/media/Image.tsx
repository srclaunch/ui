import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AnimationStyles } from '../../styles/animation';
import { BorderRadiusStyles } from '../../styles/appearance/border-radius';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { MarginStyles } from '../../styles/layout/margin';
import {
  BorderProps,
  CommonComponentProps,
  HeightProps,
  MarginProps,
  SizeProps,
  WidthProps,
} from '../../types';
import { AnimationProps } from '../../types/appearance/animation';

/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export type ImageProps = {
  readonly alt?: string;
  readonly className?: string;
  readonly description?: string;
  readonly url?: string;
  readonly path?: string;
} & CommonComponentProps<HTMLImageElement> &
  AnimationProps &
  BorderProps &
  HeightProps &
  MarginProps &
  WidthProps &
  SizeProps;

const Img = styled.img<ImageProps>`
  ${AnimationStyles};
  ${DimensionStyles};
  ${BorderRadiusStyles};
  ${MarginStyles};
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
