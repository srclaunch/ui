import { ReactElement } from 'react';
import { SizeProps } from '../../types';
import { TextProps } from '../typography/Text';
import { IconProps } from '../media/Icon';
export declare type LabelProps<E = HTMLLabelElement, P = {}> = TextProps<E, SizeProps<{
    icon?: IconProps;
}>> & P;
export declare const Label: import("react").MemoExoticComponent<({ alignItems, alignContent, as, children, className, grow, icon, orientation, size, textColor, textOverflow, textSize, textWeight, underline, whiteSpace, ...props }: LabelProps) => ReactElement>;
//# sourceMappingURL=Label.d.ts.map