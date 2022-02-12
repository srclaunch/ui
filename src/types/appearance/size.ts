export enum Size {
  Smallest = 'var(--size-smallest)',
  Smaller = 'var(--size-smaller)',
  Small = 'var(--size-small)',
  Default = 'var(--size-default)',
  Large = 'var(--size-large)',
  Larger = 'var(--size-larger)',
  Largest = 'var(--size-largest)',
}

export type SizeProps = {
  readonly size?: Size;
};
