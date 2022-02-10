import { Amount } from '../proportion';

export type MarginProps<T = {}> = {
  margin?: Amount | number;
  marginBottom?: Amount | number;
  marginLeft?: Amount | number;
  marginRight?: Amount | number;
  marginTop?: Amount | number;
} & T;
