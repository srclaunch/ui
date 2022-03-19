import { ForwardedRef } from 'react';
import { ReactElement } from 'react';
import { Ref } from 'react';
import { ComponentType, CSSProperties } from 'react';

export type CommonComponentProps = {
  readonly as?: string | ComponentType<any>;
  readonly className?: string;
  readonly form?: string;
  readonly id?: string;
  readonly name?: string;

  readonly style?: CSSProperties;
};
// & E would add standard props for given element type
// which required overriding those props when necessary
