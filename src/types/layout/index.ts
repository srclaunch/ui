import { DepthProps } from '../appearance/depth';
import { AlignmentProps } from './alignment';
import { BehaviorProps } from './behavior';
import { MarginProps } from './margin';
import { PaddingProps } from './padding';
import { PositionProps } from './position';

export type LayoutProps<T = {}> = AlignmentProps<
  PositionProps<MarginProps<PaddingProps<BehaviorProps<DepthProps<T>>>>>
>;
