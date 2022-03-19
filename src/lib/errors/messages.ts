import { Exception } from '@srclaunch/exceptions';
import { ValidationProblem } from '@srclaunch/types';
export function getErrorMessage(
  error:
    | Exception
    | Exception[]
    | ValidationProblem
    | ValidationProblem[]
    | string,
): string | null {
  if (error instanceof Exception) {
    return error.message;
  }

  if (Array.isArray(error) && error.length > 0) {
    if (error[0] instanceof Exception) {
      return error[0].message;
    } else if (typeof error[0] === 'string') {
      return error[0];
    }
  } else if (typeof error === 'string') {
    return error;
  }

  return null;
}
