import { Image as ImageProps } from '@srclaunch/types';
import { ReactElement } from 'react';
import { LabelProps } from '../../../typography/Label';
export declare type PersonLabelProps = LabelProps & {
    readonly image?: ImageProps;
    readonly name?: string;
};
export declare const PersonLabel: import("react").MemoExoticComponent<({ image, name, textSize, ...props }: PersonLabelProps) => ReactElement>;
//# sourceMappingURL=PersonLabel.d.ts.map