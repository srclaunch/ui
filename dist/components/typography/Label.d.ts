import { ReactElement } from 'react';
import { SizeProps, TextProps } from '../../types';
import { ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
export declare type LabelProps<E = HTMLElement> = {
    readonly icon?: IconProps;
} & {
    readonly focus?: LabelProps;
    readonly hover?: LabelProps;
    readonly active?: LabelProps;
} & ContainerProps<E> & TextProps & SizeProps;
export declare const Label: import("react").MemoExoticComponent<({ alignItems, alignContent, alignText, as, children, className, grow, icon, inline, lineHeight, orientation, selectable, size, textColor, textOverflow, textSize, textWeight, underline, whiteSpace, ...props }: LabelProps) => ReactElement>;
//# sourceMappingURL=Label.d.ts.map