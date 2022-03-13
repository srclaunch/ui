export enum Sizes {
  Smallest = 'var(--size-smallest)',
  Smaller = 'var(--size-smaller)',
  Small = 'var(--size-small)',
  Default = 'var(--size-default)',
  Large = 'var(--size-large)',
  Larger = 'var(--size-larger)',
  Largest = 'var(--size-largest)',
}

export type Size = {
  readonly height?: Sizes | string | number;
  readonly maxHeight?: Sizes | string | number;
  readonly maxWidth?: Sizes | string | number;
  readonly minHeight?: Sizes | string | number;
  readonly minWidth?: Sizes | string | number;
  readonly width?: Sizes | string | number;
};
