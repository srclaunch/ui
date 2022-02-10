import { ReactElement } from 'react';
import { ErrorProps, FocusProps, SizeProps, SuccessProps, WarningProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
export declare type InputContainerProps<E = HTMLDivElement, P = {}> = ContainerProps<E, SizeProps<FocusProps<ErrorProps<SuccessProps<WarningProps>>>>> & P;
export declare const InputContainer: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, border, children, className, error, size, success, ...props }: InputContainerProps) => ReactElement>;
//# sourceMappingURL=InputContainer.d.ts.map