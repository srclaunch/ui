import { ComponentType, CSSProperties } from 'react';

export type CommonComponentProps<P = Record<string, unknown>> = {
  readonly as?: string | ComponentType<any>;
  readonly className?: string;
  readonly form?: string;
  readonly id?: string;
  readonly name?: string;
  readonly style?: CSSProperties;
} & P;
