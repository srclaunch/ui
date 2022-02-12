import { ReactElement } from 'react';
import { BorderProps, CommonComponentProps, HeightProps, MarginProps, SizeProps, WidthProps } from '../../types';
import { AnimationProps } from '../../types/appearance/animation';
/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export declare type ImageProps = {
    readonly alt?: string;
    readonly className?: string;
    readonly description?: string;
    readonly url?: string;
    readonly path?: string;
} & CommonComponentProps<HTMLImageElement> & AnimationProps & BorderProps & HeightProps & MarginProps & WidthProps & SizeProps;
export declare const Image: import("react").MemoExoticComponent<({ alt, className, description, height, path, url, width, ...props }: ImageProps) => ReactElement>;
//# sourceMappingURL=Image.d.ts.map