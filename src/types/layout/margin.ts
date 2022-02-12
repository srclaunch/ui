import { Amount } from '../proportion';

export type MarginProps = {
  readonly margin?: Amount | number;
  readonly marginBottom?: Amount | number;
  readonly marginLeft?: Amount | number;
  readonly marginRight?: Amount | number;
  readonly marginTop?: Amount | number;
};
