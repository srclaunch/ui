import { ReactElement } from 'react';
import { ContainerProps, IconProps } from '../../types';
declare type TitleCardsProps = ContainerProps;
export declare const TitleCards: import("react").MemoExoticComponent<({ children, className, grow, minHeight, orientation, ...props }: TitleCardsProps) => ReactElement>;
declare type TitleCardProps = {
    icon?: IconProps;
    label?: string;
    loading?: boolean;
    value?: number;
} & ContainerProps<HTMLDivElement>;
export declare const TitleCard: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, boxShadow, className, grow, flat, label, loading, marginRight, orientation, padding, value, icon, width, ...props }: TitleCardProps) => ReactElement>;
export {};
//# sourceMappingURL=TitleCard.d.ts.map