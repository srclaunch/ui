import { Condition, ValidationProblem } from '@srclaunch/types';

export type ValidationProps = {
  readonly problems?: readonly ValidationProblem[];
  readonly validated?: boolean;
  readonly validation?: {
    readonly [key in Condition]?: string | number | boolean;
  };
};
