import { ReactElement } from 'react';
import { LabelProps } from '../../../../types';
import { ModelProps } from '@srclaunch/types';
declare type MenuItemLabelProps = LabelProps<HTMLLabelElement, {
    fieldName?: string;
    model?: ModelProps;
    value: string;
}>;
export declare const MenuItemLabel: import("react").MemoExoticComponent<({ fieldName, icon, lineHeight, model, textColor, textSize, value, ...props }: MenuItemLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=MenuItemLabel.d.ts.map