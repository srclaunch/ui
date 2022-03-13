import { Amount, Sizes, TextSize } from '../../types';

export function convertAmountToSize(amount: Amount): Sizes {
  switch (amount) {
    case Amount.None:
      return Sizes.Smallest;
    case Amount.Least:
      return Sizes.Smaller;
    case Amount.Less:
      return Sizes.Small;
    case Amount.Default:
      return Sizes.Default;
    case Amount.More:
      return Sizes.Large;
    case Amount.Most:
      return Sizes.Larger;
    case Amount.All:
      return Sizes.Largest;
  }
}

export function convertSizeToAmount(size?: Sizes): Amount {
  if (!size) return Amount.Default;

  switch (size) {
    case Sizes.Smallest:
      return Amount.None;
    case Sizes.Smaller:
      return Amount.Least;
    case Sizes.Small:
      return Amount.Less;
    case Sizes.Default:
      return Amount.Default;
    case Sizes.Large:
      return Amount.More;
    case Sizes.Larger:
      return Amount.Most;
    case Sizes.Largest:
      return Amount.All;
  }
}

export function convertSizeToTextSize(size?: Sizes): TextSize {
  if (!size) return TextSize.Default;

  switch (size) {
    case Sizes.Smallest:
      return TextSize.Smallest;
    case Sizes.Smaller:
      return TextSize.Smaller;
    case Sizes.Small:
      return TextSize.Small;
    case Sizes.Default:
      return TextSize.Default;
    case Sizes.Large:
      return TextSize.Large;
    case Sizes.Larger:
      return TextSize.Larger;
    case Sizes.Largest:
      return TextSize.Largest;
  }
}
