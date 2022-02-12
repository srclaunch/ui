import { Image as ImageProps } from '@srclaunch/types';
import { ReactElement } from 'react';
import { ContainerProps, SizeProps, TextProps } from '../../../../types';
export declare type PersonLabelProps = {
    readonly image?: ImageProps;
    readonly name?: string;
} & ContainerProps<HTMLDivElement> & SizeProps & TextProps;
export declare const PersonLabel: import("react").MemoExoticComponent<({ image, name, size, textSize, ...props }: PersonLabelProps) => ReactElement>;
//# sourceMappingURL=PersonLabel.d.ts.map