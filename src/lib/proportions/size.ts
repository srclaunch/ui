import { Sizes } from '../../types';

export function getSmallerSize(size: Sizes): Sizes {
  switch (size) {
    case Sizes.Smallest:
      return Sizes.Smallest;
    case Sizes.Smaller:
      return Sizes.Smallest;
    case Sizes.Small:
      return Sizes.Smaller;
    case Sizes.Default:
      return Sizes.Small;
    case Sizes.Large:
      return Sizes.Default;
    case Sizes.Larger:
      return Sizes.Large;
    case Sizes.Largest:
      return Sizes.Larger;
  }
}

export function getLargerSize(size: Sizes): Sizes {
  switch (size) {
    case Sizes.Smallest:
      return Sizes.Smaller;
    case Sizes.Smaller:
      return Sizes.Small;
    case Sizes.Small:
      return Sizes.Default;
    case Sizes.Default:
      return Sizes.Large;
    case Sizes.Large:
      return Sizes.Larger;
    case Sizes.Larger:
      return Sizes.Largest;
    case Sizes.Largest:
      return Sizes.Largest;
  }
}
