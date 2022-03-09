import { Theme } from '@srclaunch/types';
import { PropsWithChildren, ReactElement } from 'react';
declare type ThemeProviderProps = PropsWithChildren<{
    readonly className?: string;
    readonly theme?: Theme['id'];
    readonly themes?: readonly Theme[];
}>;
export declare const ThemeProvider: import("react").MemoExoticComponent<({ className, children, theme, themes, }: ThemeProviderProps) => ReactElement>;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map