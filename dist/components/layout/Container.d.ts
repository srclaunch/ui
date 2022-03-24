import { PropsWithChildren, ReactElement } from 'react';
import { Alignment, Background, Border, BorderRadius, CommonComponentProps, DepthShadow, Animation, Cursor, Depth, Events, States, Margin, Padding, Size, Shadow, Position, Visibility } from '../../types';
import { Transform } from '../../types/appearance/transform';
export declare type ContainerProps = PropsWithChildren<CommonComponentProps & {
    readonly alignment?: Alignment;
    readonly animations?: Animation[];
    readonly background?: Background;
    readonly border?: Border;
    readonly borderRadius?: BorderRadius;
    readonly cursor?: Cursor;
    readonly depth?: Depth;
    readonly events?: Events;
    readonly margin?: Margin;
    readonly padding?: Padding;
    readonly position?: Position;
    readonly shadow?: DepthShadow | Shadow;
    readonly size?: Size;
    readonly transform?: Transform;
    readonly visibility?: Visibility;
    readonly states?: States<ContainerProps>;
}>;
export declare const Container: import("react").MemoExoticComponent<({ alignment, as, children, className, events, states, ...props }: ContainerProps) => ReactElement>;
//# sourceMappingURL=Container.d.ts.map