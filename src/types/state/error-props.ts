import { Exception } from '@srclaunch/exceptions';
import { ValidationProblem } from '@srclaunch/types';

export type ErrorProps = {
  readonly error?: Exception | readonly ValidationProblem[];
};
