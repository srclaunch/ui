import { ReactElement } from 'react';
import { AppearanceProps, DimensionProps, LayoutProps } from '../../types/index';
/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export declare type ImageProps<P = Record<string, unknown>> = LayoutProps<AppearanceProps<DimensionProps<{
    readonly alt?: string;
    readonly className?: string;
    readonly description?: string;
    readonly url?: string;
    readonly path?: string;
}>>> & P;
export declare const Image: import("react").MemoExoticComponent<({ alt, className, description, height, path, url, width, ...props }: ImageProps) => ReactElement>;
//# sourceMappingURL=Image.d.ts.map