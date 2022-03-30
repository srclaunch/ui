import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { LabelProps } from '../typography/Label';
declare type ObjectPropertiesViewProps = ContainerProps & LabelProps & {
    properties: {
        [key: string]: {
            types: string[];
            required?: boolean;
        };
    };
};
export declare const ObjectPropertiesView: import("react").MemoExoticComponent<({ background, borderRadius, className, lineHeight, properties, textColor, textSize, ...props }: ObjectPropertiesViewProps) => ReactElement>;
export {};
//# sourceMappingURL=ObjectPropertiesView.d.ts.map