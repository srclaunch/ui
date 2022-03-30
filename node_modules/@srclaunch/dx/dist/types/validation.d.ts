import { Condition, ValidationProblem } from '@srclaunch/types';
export declare type Validation = {
    conditions?: {
        [key in Condition]?: string | number | boolean;
    };
    problems?: ValidationProblem[];
    validated?: boolean;
};
//# sourceMappingURL=validation.d.ts.map