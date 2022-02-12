import { ValidationProblem } from '@srclaunch/types';
export declare type InputValueChangeHandler<T = unknown> = ({ problems, validated, value, }: {
    readonly problems?: readonly ValidationProblem[];
    readonly validated?: boolean;
    readonly value: T | undefined;
}) => void;
//# sourceMappingURL=input.d.ts.map