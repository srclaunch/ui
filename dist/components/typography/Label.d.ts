import { ReactElement } from 'react';
import { SizeProps } from '../../types';
import { ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import { TextProps } from '../typography/Text';
export declare type LabelProps<E = HTMLLabelElement, P = Record<string, unknown>> = ContainerProps<HTMLLabelElement, TextProps<E, SizeProps<{
    readonly icon?: IconProps;
}>>> & P;
export declare const Label: import("react").MemoExoticComponent<({ alignItems, alignContent, as, children, className, grow, icon, orientation, size, textColor, textOverflow, textSize, textWeight, underline, whiteSpace, ...props }: LabelProps) => ReactElement>;
//# sourceMappingURL=Label.d.ts.map