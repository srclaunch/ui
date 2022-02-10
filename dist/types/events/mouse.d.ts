import { MouseEventHandler } from 'react';
export declare type MouseEventProps<E = HTMLElement, P = {}> = {
    onClick?: MouseEventHandler<E>;
    onMouseEnter?: MouseEventHandler<E>;
    onMouseLeave?: MouseEventHandler<E>;
    onScroll?: MouseEventHandler<E>;
} & P;
//# sourceMappingURL=mouse.d.ts.map