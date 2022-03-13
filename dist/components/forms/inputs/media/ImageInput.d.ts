import { Image as ImageType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { IconProps } from '../../../media/Icon';
import { ButtonProps } from '../../buttons/Button';
export declare type ImageInputProps = {
    readonly button?: ButtonProps;
    readonly icon?: IconProps;
    readonly maxImages?: number;
} & ContainerProps<HTMLDivElement> & InputProps<HTMLInputElement, readonly (File | ImageType)[]>;
export declare const ImageInput: import("react").MemoExoticComponent<({ background, border, borderRadius, button, defaultValue, icon, label, maxImages, name, onChange, padding, }: ImageInputProps) => ReactElement>;
//# sourceMappingURL=ImageInput.d.ts.map