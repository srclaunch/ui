import { Exception, Warning } from '@srclaunch/exceptions';
import { ValidationProblem } from '@srclaunch/types';

export type InteractionStates<P = {}> = {
  readonly active?: P;
  readonly current?: P;
  readonly disabled?: P;
  readonly error?: P;
  readonly focused?: P;
  readonly hovered?: P;
  readonly loading?: P;
  readonly success?: P;
  readonly visible?: P;
  readonly warning?: P;

  readonly state?: {
    readonly active?: boolean;
    readonly current?: boolean;
    readonly disabled?: boolean;
    readonly error?:
      | Exception
      | Exception[]
      | ValidationProblem
      | ValidationProblem[]
      | string
      | boolean;
    readonly focused?: boolean;
    readonly hovered?: boolean;
    readonly loading?: boolean;
    readonly success?: boolean;
    readonly visible?: boolean;
    readonly warning?:
      | Warning
      | Warning[]
      | ValidationProblem
      | ValidationProblem[]
      | string
      | boolean;
  };
};
