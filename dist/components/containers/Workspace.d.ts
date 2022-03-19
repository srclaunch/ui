import { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type WorkspaceProps = ContainerProps & {
    readonly header?: {
        readonly actions?: ReactElement;
        readonly title?: string | ReactElement;
        readonly subTitle?: string;
    };
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
};
export declare const Workspace: import("react").MemoExoticComponent<({ alignment, background, className, children, header, layout: Layout, loading, loginRequired, padding, title, ...props }: WorkspaceProps) => ReactElement>;
export {};
//# sourceMappingURL=Workspace.d.ts.map