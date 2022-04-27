import { Condition, ValidationProblem } from '@srclaunch/types';
export declare function validate(value: unknown, props: {
    readonly [key in Condition]?: boolean | string | number;
}): readonly ValidationProblem[];
export declare function getValidationProblemLabel(condition: Condition, context?: {
    readonly subject?: string;
    readonly requirement?: string | number | boolean;
}): {
    readonly short: string;
    readonly long: string;
};
//# sourceMappingURL=index.d.ts.map