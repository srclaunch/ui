import { Amount } from '../../types';

export function getSmallerAmount(amount: Amount): Amount {
  switch (amount) {
    case Amount.All:
      return Amount.Most;
    case Amount.Most:
      return Amount.More;
    case Amount.More:
      return Amount.Default;
    case Amount.Default:
      return Amount.Less;
    case Amount.Less:
      return Amount.Least;
    case Amount.Least:
      return Amount.None;
    case Amount.None:
      return Amount.None;
  }
}

export function getLargerAmount(amount: Amount): Amount {
  switch (amount) {
    case Amount.None:
      return Amount.Least;
    case Amount.Least:
      return Amount.Less;
    case Amount.Less:
      return Amount.Default;
    case Amount.Default:
      return Amount.More;
    case Amount.More:
      return Amount.Most;
    case Amount.Most:
      return Amount.All;
    case Amount.All:
      return Amount.All;
  }
}
