import { Amount, Size, TextSize } from '../../types';

export function convertAmountToSize(amount: Amount): Size {
  switch (amount) {
    case Amount.None:
      return Size.Smallest;
    case Amount.Least:
      return Size.Smaller;
    case Amount.Less:
      return Size.Small;
    case Amount.Default:
      return Size.Default;
    case Amount.More:
      return Size.Large;
    case Amount.Most:
      return Size.Larger;
    case Amount.All:
      return Size.Largest;
  }
}

export function convertSizeToAmount(size?: Size): Amount {
  if (!size) return Amount.Default;

  switch (size) {
    case Size.Smallest:
      return Amount.None;
    case Size.Smaller:
      return Amount.Least;
    case Size.Small:
      return Amount.Less;
    case Size.Default:
      return Amount.Default;
    case Size.Large:
      return Amount.More;
    case Size.Larger:
      return Amount.Most;
    case Size.Largest:
      return Amount.All;
  }
}

export function convertSizeToTextSize(size?: Size): TextSize {
  if (!size) return TextSize.Default;

  switch (size) {
    case Size.Smallest:
      return TextSize.Smallest;
    case Size.Smaller:
      return TextSize.Smaller;
    case Size.Small:
      return TextSize.Small;
    case Size.Default:
      return TextSize.Default;
    case Size.Large:
      return TextSize.Large;
    case Size.Larger:
      return TextSize.Larger;
    case Size.Largest:
      return TextSize.Largest;
  }
}
