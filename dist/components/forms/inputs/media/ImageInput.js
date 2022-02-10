import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { memo, useCallback, useEffect, useState, } from 'react';
import { useDropzone } from 'react-dropzone';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, DepthShadow, Orientation, Position, Size, } from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { Image } from '../../../media/Image';
import { CloseButton } from '../../../modals/CloseButton';
import { Label } from '../../../typography/Label';
import { Button, ButtonType } from '../../buttons/Button';
import { InputLabel } from '../../labels/InputLabel';
export const ImageInput = memo(({ backgroundColor = BackgroundColors.InputControl, border = {
    color: BorderColors.Default,
    style: BorderStyle.Solid,
    width: 1,
}, borderRadius = Amount.Least, button = {
    label: 'Choose File',
}, defaultValue = [], icon = {
    name: BasicIcons.Upload,
    size: Size.Default,
}, label, maxImages = 1, name = 'images', onChange, padding = Amount.Default, }) => {
    const [images, setImages] = useState(defaultValue);
    const [errorMessage, setErrorMessage] = useState();
    const [previewImages, setPreviewImages] = useState([]);
    const [problems, setProblems] = useState([]);
    const validateFileType = (file) => {
        const validTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/x-icon',
        ];
        if (!validTypes.includes(file.type)) {
            return false;
        }
        return true;
    };
    const validateNotAdded = (file) => {
        const added = previewImages &&
            previewImages.some(f => {
                return f.hasOwnProperty('path') && f.path === file.name;
            });
        if (added) {
            setErrorMessage('File already added');
            return {
                code: 'image-already-added',
                message: `Image already added`,
            };
        }
        setErrorMessage(null);
        return null;
    };
    const onDrop = useCallback(files => {
        for (const file of files) {
            if (validateFileType(file)) {
                if (maxImages > 1) {
                    setImages(prevArray => [...prevArray.slice(-maxImages + 1), file]);
                }
                else {
                    setImages([file]);
                }
            }
            else {
                file.invalid = true;
                setErrorMessage('File type not permitted');
            }
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        maxFiles: maxImages,
        noClick: true,
        onDrop,
        validator: validateNotAdded,
    });
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!images || images.length === 0) {
            setPreviewImages([]);
            return;
        }
        const objectUrls = images.map(image => {
            if ('size' in image && image.size > 0) {
                return { url: URL.createObjectURL(image), ...image };
            }
            return image;
        });
        setPreviewImages(objectUrls);
        // free memory when ever this component is unmounted
        return () => {
            for (const image of objectUrls) {
                if ('url' in image && image.url) {
                    URL.revokeObjectURL(image.url);
                }
            }
        };
    }, [images]);
    // useEffect(() => {
    //   if (onChange) onChange({ value: images });
    // }, [images]);
    useEffect(() => {
        if (onChange)
            onChange({ value: images });
    }, [previewImages]);
    // useEffect(() => {
    //   console.log('ImageInput: useEffect');
    //   if (defaultValue && images !== defaultValue) {
    //     setImages(defaultValue);
    //   }
    // }, [defaultValue]);
    const dragLabel = `Drag ${maxImages > 1 ? 'images' : 'an image'} here...`;
    const buttonLabel = `Browse files`;
    // @ts-ignore
    const { ref: inputRef, ...inputProps } = getInputProps();
    const { ref: rootRef, ...rootProps } = getRootProps();
    return (_jsxs(_Fragment, { children: [(label || problems.length > 0) && (_jsxs(InputLabel, { errorMessage: problems[0]?.message.short, children: [label, maxImages > 1 && ` (${previewImages.length} of ${maxImages})`] }, void 0)), _jsx(Container, { alignItems: Align.Center, alignContent: Align.Center, backgroundColor: isDragActive ? BackgroundColors.Darker : backgroundColor, border: {
                    ...border,
                    // @ts-ignore
                    color: problems && Array.isArray(problems) && problems.length > 0
                        ? BorderColors.Error
                        : // @ts-ignore
                            border?.color,
                }, borderRadius: borderRadius, boxShadow: DepthShadow.Low, grow: false, padding: padding, ...rootProps, children: _jsx(Container, { grow: false, events: !isDragActive, children: _jsxs(Container, { alignItems: Align.Center, alignContent: Align.Center, grow: false, padding: Amount.Default, paddingTop: Amount.Least, children: [_jsx("input", { name: name, ...inputProps }, void 0), errorMessage && _jsx(ErrorLabel, { children: errorMessage }, void 0), previewImages && previewImages.length > 0 ? (_jsx(Container, { alignItems: Align.Stretch, events: !isDragActive, grow: false, marginBottom: Amount.Less, children: _jsx(Container, { alignItems: Align.Stretch, alignContent: Align.Center, backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, lineWrap: true, opacity: isDragActive ? 50 : 100, orientation: Orientation.Horizontal, paddingBottom: Amount.Least, paddingLeft: Amount.Least, paddingRight: Amount.Least, paddingTop: Amount.Least, children: previewImages.map((image, index) => (_jsxs(Container, { grow: false, marginBottom: Amount.Least, marginLeft: Amount.Least, marginRight: Amount.Least, marginTop: Amount.Least, children: [_jsx(CloseButton, { onClick: () => {
                                                    setImages(files => files?.filter((e, i) => i !== index));
                                                }, position: Position.Absolute, right: -7, size: Size.Small, top: -7 }, void 0), _jsx(Image, { alt: "preview", borderRadius: Amount.Least, fadeIn: true, height: 70, width: 70, 
                                                // @ts-ignore
                                                url: image.url }, index)] }, index))) }, void 0) }, void 0)) : (_jsx(Icon, { marginBottom: Amount.Less, name: icon?.name ?? BasicIcons.FileUpload, size: icon?.size ?? Size.Default }, void 0)), _jsxs(Container, { alignItems: Align.Center, orientation: Orientation.Vertical, children: [_jsx(Label, { marginBottom: Amount.Least, size: Size.Small, children: dragLabel }, void 0), button && (_jsx(Button, { events: !isDragActive, form: "null", onClick: open, size: button.size ?? Size.Small, type: button.type ?? ButtonType.Primary, ...button, children: buttonLabel }, void 0))] }, void 0)] }, void 0) }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=ImageInput.js.map