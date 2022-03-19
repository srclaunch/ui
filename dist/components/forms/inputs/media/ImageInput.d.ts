import { Image as ImageType } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
import { IconProps } from '../../../media/Icon';
import { ButtonProps } from '../../buttons/Button';
export declare type ImageInputProps = ContainerProps & InputProps<(File | ImageType)[]> & {
    readonly button?: ButtonProps;
    readonly icon?: IconProps;
    readonly maxImages?: number;
};
export declare const ImageInput: import("react").MemoExoticComponent<({ background, border, borderRadius, button, defaultValue, events, icon, label, maxImages, name, padding, ...props }: ImageInputProps) => ReactElement>;
//# sourceMappingURL=ImageInput.d.ts.map