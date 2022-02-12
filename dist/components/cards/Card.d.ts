import { MouseEventHandler, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type CardProps = {
    readonly draggable?: boolean;
    readonly id?: string;
    readonly linkTo?: string;
    readonly onClick?: MouseEventHandler<any>;
    readonly title?: string;
} & ContainerProps<HTMLDivElement>;
export declare const Card: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, boxShadow, children, draggable, id, linkTo, onClick, title, width, ...props }: CardProps) => ReactElement>;
export {};
//# sourceMappingURL=Card.d.ts.map