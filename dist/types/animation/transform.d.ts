import { TranslateProps } from './translate';
import { ScaleProps } from './scale';
import { SkewProps } from './skew';
export declare type Transform = {
    translate?: TranslateProps;
    scale?: ScaleProps;
    rotate?: number;
    skew?: SkewProps;
};
export declare type TransformProps<T = {}> = {
    /**
     * The transform to apply to the component.
     */
    transform?: Transform;
} & T;
//# sourceMappingURL=transform.d.ts.map