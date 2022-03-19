import { Condition, ValidationProblem } from '@srclaunch/types';

export type Validation = {
  conditions?: {
    [key in Condition]?: string | number | boolean;
  };
  problems?: ValidationProblem[];
  validated?: boolean;
};
