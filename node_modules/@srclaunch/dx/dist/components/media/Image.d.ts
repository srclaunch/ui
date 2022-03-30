import { ReactElement } from 'react';
import { Border, BorderRadius, CommonComponentProps, Events, States, Margin, Size } from '../../types';
/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export declare type ImageProps<P = {}> = (CommonComponentProps & {
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
    readonly states?: States<ImageProps>;
};
export declare const Image: import("react").MemoExoticComponent<({ alt, className, description, path, url, size, ...props }: ImageProps) => ReactElement>;
//# sourceMappingURL=Image.d.ts.map