import { ScaleProps } from './scale';
import { SkewProps } from './skew';
import { TranslateProps } from './translate';
export declare type Transform = {
    readonly translate?: TranslateProps;
    readonly scale?: ScaleProps;
    readonly rotate?: number;
    readonly skew?: SkewProps;
};
export declare type TransformProps = {
    /**
     * The transform to apply to the component.
     */
    readonly transform?: Transform;
};
//# sourceMappingURL=transform.d.ts.map