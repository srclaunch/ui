import { MouseEventHandler, ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type CardProps = ContainerProps & {
    readonly draggable?: boolean;
    readonly id?: string;
    readonly linkTo?: string;
    readonly onClick?: MouseEventHandler<any>;
    readonly title?: string;
};
export declare const Card: import("react").MemoExoticComponent<({ background, borderRadius, children, draggable, id, linkTo, shadow, title, ...props }: CardProps) => ReactElement>;
export {};
//# sourceMappingURL=Card.d.ts.map