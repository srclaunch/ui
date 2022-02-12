import { ValidationProblem } from '@srclaunch/types';

export type InputValueChangeHandler<T = unknown> = ({
  problems,
  validated,
  value,
}: {
  readonly problems?: readonly ValidationProblem[];
  readonly validated?: boolean;
  readonly value: T | undefined;
}) => void;
