import { Condition, ValidationProblem } from '@srclaunch/types';
export declare function validate(value: unknown, props: {
    [key in Condition]?: boolean | string | number;
}): ValidationProblem[];
export declare function getValidationProblemLabel(condition: Condition, context?: {
    subject?: string;
    requirement?: string | number | boolean;
}): {
    short: string;
    long: string;
};
//# sourceMappingURL=index.d.ts.map