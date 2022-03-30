import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
import { TextProps } from './Text';
export declare type LabelProps = ContainerProps & TextProps & {
    readonly icon?: IconProps;
};
export declare const Label: import("react").MemoExoticComponent<({ alignment, as, children, className, icon, lineHeight, lineWrap, selectable, states, textAlign, textColor, textOverflow, textSize, textWeight, ...props }: LabelProps) => ReactElement>;
//# sourceMappingURL=Label.d.ts.map