import { Amount } from '../proportion';
export declare enum Position {
    Absolute = "absolute",
    Fixed = "fixed",
    Relative = "relative",
    Static = "static",
    Sticky = "sticky"
}
export declare type PositionProps<T = {}> = {
    bottom?: Amount | number | string;
    left?: Amount | number | string;
    position?: Position;
    right?: Amount | number | string;
    top?: Amount | number | string;
} & T;
//# sourceMappingURL=position.d.ts.map