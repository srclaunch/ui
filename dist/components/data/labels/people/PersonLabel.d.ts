import { ReactElement } from 'react';
import { Image as ImageProps } from '@srclaunch/types';
import { ContainerProps, TextProps } from '../../../../types';
export declare type PersonLabelProps<T = {}> = ContainerProps<HTMLDivElement, TextProps<HTMLSpanElement, {
    image?: ImageProps;
    name?: string;
} & T>>;
export declare const PersonLabel: import("react").MemoExoticComponent<({ image, name, size, textSize, ...props }: PersonLabelProps) => ReactElement>;
//# sourceMappingURL=PersonLabel.d.ts.map