import { Amount } from './proportion';
export declare enum PositionBehavior {
    Absolute = "absolute",
    Fixed = "fixed",
    Relative = "relative",
    Static = "static",
    Sticky = "sticky"
}
export declare type Position = {
    readonly bottom?: Amount | string | number;
    readonly left?: Amount | string | number;
    readonly behavior?: PositionBehavior;
    readonly right?: Amount | string | number;
    readonly top?: Amount | string | number;
};
//# sourceMappingURL=position.d.ts.map