import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { IconProps } from '../media/Icon';
declare type TitleCardProps = ContainerProps & {
    icon?: IconProps;
    label?: string;
    loading?: boolean;
    value?: number;
};
export declare const TitleCard: import("react").MemoExoticComponent<({ alignment, background, borderRadius, className, label, loading, padding, value, icon, shadow, size, ...props }: TitleCardProps) => ReactElement>;
export {};
//# sourceMappingURL=TitleCard.d.ts.map