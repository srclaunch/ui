import { Color } from './color';
import { Amount } from './proportion';
import { Size } from './size';
export declare type Shadow = {
    readonly blur?: Amount | Size;
    readonly color?: Color;
    readonly x?: Amount | Size;
    readonly y?: Amount | Size;
    readonly opacity?: number;
    readonly radius?: Amount | Size;
} | {
    readonly blur?: Amount | Size;
    readonly color?: Color;
    readonly x?: Amount | Size;
    readonly y?: Amount | Size;
    readonly opacity?: number;
    readonly radius?: Amount | Size;
}[];
//# sourceMappingURL=shadow.d.ts.map