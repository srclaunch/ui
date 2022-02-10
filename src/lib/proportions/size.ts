import { Size } from '../../types';

export function getSmallerSize(size: Size): Size {
  switch (size) {
    case Size.Smallest:
      return Size.Smallest;
    case Size.Smaller:
      return Size.Smallest;
    case Size.Small:
      return Size.Smaller;
    case Size.Default:
      return Size.Small;
    case Size.Large:
      return Size.Default;
    case Size.Larger:
      return Size.Large;
    case Size.Largest:
      return Size.Larger;
  }
}

export function getLargerSize(size: Size): Size {
  switch (size) {
    case Size.Smallest:
      return Size.Smaller;
    case Size.Smaller:
      return Size.Small;
    case Size.Small:
      return Size.Default;
    case Size.Default:
      return Size.Large;
    case Size.Large:
      return Size.Larger;
    case Size.Larger:
      return Size.Largest;
    case Size.Largest:
      return Size.Largest;
  }
}
