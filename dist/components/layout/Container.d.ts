import { PropsWithChildren, ReactElement } from 'react';
import { Alignment, Background, Border, BorderRadius, CommonComponentProps, ContainerAnimation, Cursor, Depth, Margin, Padding, Size, Shadow, Position, DepthShadow } from '../../types';
export declare type ContainerProps<E = HTMLDivElement> = PropsWithChildren<{
    alignment?: Alignment;
    animation?: ContainerAnimation;
    background?: Background;
    border?: Border;
    borderRadius?: BorderRadius;
    cursor?: Cursor;
    depth?: Depth;
    disabled?: boolean;
    margin?: Margin;
    opacity?: number;
    padding?: Padding;
    position?: Position;
    shadow?: DepthShadow | Shadow;
    size?: Size;
    visible?: boolean;
}> & {
    readonly active?: ContainerProps<E>;
    readonly disable?: ContainerProps<E>;
    readonly hover?: ContainerProps<E>;
    readonly focus?: ContainerProps<E>;
} & CommonComponentProps<any>;
export declare const Container: import("react").MemoExoticComponent<({ alignment, as, children, className, ...props }: ContainerProps) => ReactElement>;
//# sourceMappingURL=Container.d.ts.map