import { ReactElement } from 'react';
import { Border, BorderRadius, CommonComponentProps, Margin, Size } from '../../types';
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
} & CommonComponentProps<HTMLImageElement> & {
    border?: Border;
    borderRadius?: BorderRadius;
    margin?: Margin;
    size?: Size;
};
export declare const Image: import("react").MemoExoticComponent<({ alt, className, description, path, url, size, ...props }: ImageProps) => ReactElement>;
//# sourceMappingURL=Image.d.ts.map