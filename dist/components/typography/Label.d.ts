import { ReactElement } from 'react';
import { CommonComponentProps } from '../../types';
import { ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import { TextProps } from './Text';
export declare type LabelProps<E = HTMLLabelElement> = {
    readonly icon?: IconProps;
} & CommonComponentProps<E> & ContainerProps & TextProps;
export declare const Label: import("react").MemoExoticComponent<({ alignment, as, children, className, icon, lineHeight, lineWrap, selectable, textColor, textOverflow, textSize, textWeight, ...props }: LabelProps) => ReactElement>;
//# sourceMappingURL=Label.d.ts.map