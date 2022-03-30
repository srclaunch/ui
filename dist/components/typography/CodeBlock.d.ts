import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { TextProps } from './Text';
declare type CodeBlockProps = ContainerProps & TextProps & {
    value: string;
};
export declare const CodeBlock: import("react").MemoExoticComponent<({ alignment, borderRadius, lineHeight, textSize, value, ...props }: CodeBlockProps) => ReactElement>;
export {};
//# sourceMappingURL=CodeBlock.d.ts.map