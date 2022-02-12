import { Amount } from '../proportion';
export declare enum Position {
    Absolute = "absolute",
    Fixed = "fixed",
    Relative = "relative",
    Static = "static",
    Sticky = "sticky"
}
export declare type PositionProps = {
    readonly bottom?: Amount | number | string;
    readonly left?: Amount | number | string;
    readonly position?: Position;
    readonly right?: Amount | number | string;
    readonly top?: Amount | number | string;
};
//# sourceMappingURL=position.d.ts.map