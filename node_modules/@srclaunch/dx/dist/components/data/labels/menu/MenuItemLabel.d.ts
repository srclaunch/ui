import { ReactElement } from 'react';
import { LabelProps } from '../../../typography/Label';
import { ModelProps } from '@srclaunch/types';
declare type MenuItemLabelProps = LabelProps & {
    fieldName?: string;
    model?: ModelProps;
    value: string;
};
export declare const MenuItemLabel: import("react").MemoExoticComponent<({ fieldName, icon, lineHeight, model, textColor, textSize, value, ...props }: MenuItemLabelProps) => ReactElement>;
export {};
//# sourceMappingURL=MenuItemLabel.d.ts.map