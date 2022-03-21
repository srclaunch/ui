import { ComponentType, CSSProperties, ForwardedRef } from 'react';

export type CommonComponentProps = {
  readonly as?: string | ComponentType<any>;
  readonly className?: string;
  readonly form?: string;
  readonly id?: string;
  readonly name?: string;
  readonly ref?: ForwardedRef<unknown>;
  readonly style?: CSSProperties;
};
// & E would add standard props for given element type
// which required overriding those props when necessary
