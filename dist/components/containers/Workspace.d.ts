import React, { ElementType, ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type WorkspaceProps = ContainerProps<HTMLDivElement, {
    header?: {
        actions?: ReactElement;
        title?: string | ReactElement;
        subTitle?: string;
    };
    layout?: ElementType;
    loading?: boolean;
    loginRequired?: boolean;
    title?: string | null;
}>;
export declare const Workspace: React.MemoExoticComponent<({ alignContent, backgroundColor, className, children, header, layout: Layout, loading, loginRequired, orientation, padding, title, ...props }: WorkspaceProps) => ReactElement>;
export {};
//# sourceMappingURL=Workspace.d.ts.map