import { Condition, ValidationProblem } from '@srclaunch/types';
export declare type ValidationProps<P = {}> = {
    problems?: ValidationProblem[];
    validated?: boolean;
    validation?: {
        [key in Condition]?: string | number | boolean;
    };
} & P;
//# sourceMappingURL=validation-props.d.ts.map