import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type WorkspaceProps = {
    readonly header?: {
        readonly actions?: ReactElement;
        readonly title?: string | ReactElement;
        readonly subTitle?: string;
    };
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
} & ContainerProps<HTMLDivElement>;
export declare const Workspace: import("react").MemoExoticComponent<({ alignContent, backgroundColor, className, children, header, layout: Layout, loading, loginRequired, orientation, padding, title, ...props }: WorkspaceProps) => ReactElement>;
export {};
//# sourceMappingURL=Workspace.d.ts.map