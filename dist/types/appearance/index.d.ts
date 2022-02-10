import { TransformProps } from '../animation/transform';
import { AnimationProps } from './animation';
import { BackgroundProps } from './background';
import { BorderProps } from './border';
import { BoxShadowProps } from './box-shadow';
import { CursorProps } from './cursor';
import { DepthProps } from './depth';
import { TranslucencyProps } from './translucency';
export declare type AppearanceProps<P = {}> = AnimationProps<BackgroundProps<BorderProps<BoxShadowProps<CursorProps<DepthProps<TransformProps<TranslucencyProps<{
    readonly focus?: AppearanceProps;
    readonly hover?: AppearanceProps;
    readonly active?: AppearanceProps;
}>>>>>>>> & P;
//# sourceMappingURL=index.d.ts.map