import { ComponentType, CSSProperties } from 'react';
import { FocusEventProps, FocusProps, KeyboardEventProps, MouseEventProps } from '../types';
export declare type CommonComponentProps<E = HTMLElement> = {
    readonly as?: string | ComponentType<any>;
    readonly className?: string;
    readonly form?: string;
    readonly id?: string;
    readonly name?: string;
    readonly style?: CSSProperties;
} & KeyboardEventProps<E> & FocusEventProps<E> & MouseEventProps<E> & FocusProps;
//# sourceMappingURL=component.d.ts.map