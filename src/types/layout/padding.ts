import { Amount } from '../proportion';

export type PaddingProps<T = {}> = {
  padding?: Amount | number;
  paddingBottom?: Amount | number;
  paddingLeft?: Amount | number;
  paddingRight?: Amount | number;
  paddingTop?: Amount | number;
} & T;
