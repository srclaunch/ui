import { Depth, DepthShadow } from '../../../types';
export function getCSSBoxShadowFromDepth(depth) {
    switch (depth) {
        case Depth.Lowest:
            return DepthShadow.Lowest;
        case Depth.Lower:
            return DepthShadow.Lower;
        case Depth.Low:
            return DepthShadow.Surface;
        case Depth.High:
            return DepthShadow.High;
        case Depth.Higher:
            return DepthShadow.Higher;
        case Depth.Highest:
            return DepthShadow.Highest;
        default:
            return DepthShadow.Surface;
    }
}
//# sourceMappingURL=box-shadow.js.map