import { memo, ReactElement } from 'react';
import styled from 'styled-components';
import { AnimationStyles } from '../../styles/animation';
import { BorderStyles } from '../../styles/container/border';
import { BorderRadiusStyles } from '../../styles/container/border-radius';
import { MarginStyles } from '../../styles/container/margin';
import { SizeStyles } from '../../styles/container/size';
import {
  Animation,
  Border,
  BorderRadius,
  CommonComponentProps,
  Margin,
  Size,
  Sizes,
} from '../../types';

import { Container, ContainerProps } from '../layout/Container';

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
} & CommonComponentProps<HTMLImageElement> & {
    border?: Border;
    borderRadius?: BorderRadius;
    margin?: Margin;
    size?: Size;
  };

const Img = styled.img<ImageProps>`
  ${AnimationStyles};
  ${BorderStyles};
  ${BorderRadiusStyles};
  ${MarginStyles};
  ${SizeStyles};
`;

export const Image = memo(
  ({
    alt,
    className = '',
    description,
    path,
    url,
    size = {
      height: '100%',
      width: '100%',
    },
    ...props
  }: ImageProps): ReactElement => {
    return (
      <Img
        alt={alt ?? description}
        className={`${className} image`}
        size={size}
        src={path ?? url}
        {...props}
      />
    );
  },
);
