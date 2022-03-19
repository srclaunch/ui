import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { ContainerStyles } from '../../styles/container';

import { StateStyles } from '../../styles/container/states';
import {
  Border,
  BorderRadius,
  CommonComponentProps,
  Events,
  InteractionStates,
  Margin,
  Size,
} from '../../types';

/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export type ImageProps<P = {}> = (CommonComponentProps & {
  readonly alt?: string;
  readonly border?: Border;
  readonly borderRadius?: BorderRadius;
  readonly description?: string;
  readonly events?: Events;
  readonly margin?: Margin;
  readonly path?: string;
  readonly size?: Size;
  readonly url?: string;
} & P) & {
  readonly states?: InteractionStates<ImageProps>;
};

const Img = styled.img<ImageProps>`
  ${ContainerStyles};
  ${StateStyles};
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
