import { Exception } from '@srclaunch/exceptions';
import { ValidationProblem } from '@srclaunch/types';

export type ErrorProps<P = {}> = {
  error?: Exception | ValidationProblem[];
} & P;
