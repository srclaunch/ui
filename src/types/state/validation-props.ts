import { Condition, ValidationProblem } from '@srclaunch/types';

export type ValidationProps<P = {}> = {
  problems?: ValidationProblem[];
  validated?: boolean;
  validation?: {
    [key in Condition]?: string | number | boolean;
  };
} & P;
