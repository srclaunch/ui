export enum Depth {
  Lowest = 'lowest',
  Lower = 'lower',
  Low = 'low',
  Surface = 'surface',
  High = 'high',
  Higher = 'higher',
  Highest = 'highest',
}

export enum DepthShadow {
  Lowest = 'var(--shadow-depth-lowest)',
  Lower = 'var(--shadow-depth-lower)',
  Low = 'var(--shadow-depth-low)',
  Surface = 'var(--shadow-depth-surface)',
  High = 'var(--shadow-depth-high)',
  Higher = 'var(--shadow-depth-higher)',
  Highest = 'var(--shadow-depth-highest)',
}

export type DepthProps = {
  readonly depth?: Depth;
  readonly flat?: boolean;
};
