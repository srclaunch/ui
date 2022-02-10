import { Image as ImageType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { IconProps } from '../../../media/Icon';
import { ButtonProps } from '../../buttons/Button';
export declare type ImageInputProps<E = HTMLDivElement, P = Record<string, unknown>> = ContainerProps<E, InputProps<E, readonly (File | ImageType)[], {
    readonly button?: ButtonProps;
    readonly icon?: IconProps;
    readonly maxImages?: number;
}>> & P;
export declare const ImageInput: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, button, defaultValue, icon, label, maxImages, name, onChange, padding, }: ImageInputProps) => ReactElement>;
//# sourceMappingURL=ImageInput.d.ts.map