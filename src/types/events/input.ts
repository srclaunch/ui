import { Primitive, ValidationProblem } from '@srclaunch/types';

export type InputValueChangeHandler<T = unknown> = ({
  problems,
  validated,
  value,
}: {
  problems?: ValidationProblem[];
  validated?: boolean;
  value: T | undefined;
}) => unknown;
