import { Condition, ValidationProblem } from '@srclaunch/types';
export declare type ValidationProps = {
    readonly problems?: readonly ValidationProblem[];
    readonly validated?: boolean;
    readonly validation?: {
        readonly [key in Condition]?: string | number | boolean;
    };
};
//# sourceMappingURL=validation-props.d.ts.map