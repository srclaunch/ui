import { BasicIcons } from '@srclaunch/icons';
import { Image as ImageType, ValidationProblem } from '@srclaunch/types';
import {
  memo,
  // useRef,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';

import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  InputProps,
  Orientation,
  Position,
  Size,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { Image } from '../../../media/Image';
import { CloseButton } from '../../../modals/CloseButton';
import { Label } from '../../../typography/Label';
import { Button, ButtonProps, ButtonType } from '../../buttons/Button';
import { InputLabel } from '../../labels/InputLabel';

export type ImageInputProps = {
  readonly button?: ButtonProps;
  readonly icon?: IconProps;
  readonly maxImages?: number;
} & ContainerProps<HTMLDivElement> &
  InputProps<HTMLInputElement, readonly (File | ImageType)[]>;

export const ImageInput = memo(
  ({
    backgroundColor = BackgroundColors.InputControl,
    border = {
      color: BorderColors.Default,
      style: BorderStyle.Solid,
      width: 1,
    },
    borderRadius = Amount.Least,
    button = {
      label: 'Choose File',
    },
    defaultValue = [],
    icon = {
      name: BasicIcons.Upload,
      size: Size.Default,
    },
    label,
    maxImages = 1,
    name = 'images',
    onChange,
    padding = Amount.Default,
  }: ImageInputProps): ReactElement => {
    const [images, setImages] = useState<(File | ImageType)[]>(
      defaultValue as (File | ImageType)[],
    );
    const [errorMessage, setErrorMessage] = useState<
      string | undefined | null
    >();
    const [previewImages, setPreviewImages] = useState<
      (ImageType | (File & { path?: string }))[]
    >([]);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const validateFileType = (file: File) => {
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

    const validateNotAdded = (file: File) => {
      const added =
        previewImages &&
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
          } else {
            setImages([file]);
          }
        } else {
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
      if (onChange) onChange({ value: images });
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

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel error={problems}>
            {label}
            {maxImages > 1 && ` (${previewImages.length} of ${maxImages})`}
          </InputLabel>
        )}

        <Container
          alignItems={Align.Center}
          alignContent={Align.Center}
          backgroundColor={
            isDragActive ? BackgroundColors.Darker : backgroundColor
          }
          border={{
            ...border,
            // @ts-ignore
            color:
              problems && Array.isArray(problems) && problems.length > 0
                ? BorderColors.Error
                : // @ts-ignore
                  border?.color,
          }}
          borderRadius={borderRadius}
          boxShadow={DepthShadow.Low}
          grow={false}
          padding={padding}
          {...rootProps}
        >
          <Container grow={false}>
            <Container
              alignItems={Align.Center}
              alignContent={Align.Center}
              grow={false}
              padding={Amount.Default}
              paddingTop={Amount.Least}
            >
              <input name={name} {...inputProps} />

              {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}

              {previewImages && previewImages.length > 0 ? (
                <Container
                  alignItems={Align.Stretch}
                  // events={!isDragActive}
                  grow={false}
                  marginBottom={Amount.Less}
                >
                  <Container
                    alignItems={Align.Stretch}
                    alignContent={Align.Center}
                    backgroundColor={BackgroundColors.Lightest}
                    borderRadius={Amount.Least}
                    lineWrap
                    opacity={isDragActive ? 50 : 100}
                    orientation={Orientation.Horizontal}
                    paddingBottom={Amount.Least}
                    paddingLeft={Amount.Least}
                    paddingRight={Amount.Least}
                    paddingTop={Amount.Least}
                  >
                    {previewImages.map((image, index) => (
                      <Container
                        grow={false}
                        key={index}
                        marginBottom={Amount.Least}
                        marginLeft={Amount.Least}
                        marginRight={Amount.Least}
                        marginTop={Amount.Least}
                      >
                        <CloseButton
                          onClick={() => {
                            setImages(files =>
                              files?.filter((e, i) => i !== index),
                            );
                          }}
                          position={Position.Absolute}
                          right={-7}
                          size={Size.Small}
                          top={-7}
                        />

                        <Image
                          alt="preview"
                          borderRadius={Amount.Least}
                          fadeIn
                          key={index}
                          height={70}
                          width={70}
                          // @ts-ignore
                          url={image.url}
                        />
                      </Container>
                    ))}
                  </Container>
                </Container>
              ) : (
                <Icon
                  marginBottom={Amount.Less}
                  name={icon?.name ?? BasicIcons.FileUpload}
                  size={icon?.size ?? Size.Default}
                />
              )}

              <Container
                alignItems={Align.Center}
                orientation={Orientation.Vertical}
              >
                <Label marginBottom={Amount.Least} size={Size.Small}>
                  {dragLabel}
                </Label>

                {button && (
                  <Button
                    // events={!isDragActive}
                    form="null"
                    onClick={open}
                    size={button.size ?? Size.Small}
                    type={button.type ?? ButtonType.Primary}
                    {...button}
                  >
                    {buttonLabel}
                  </Button>
                )}
              </Container>
            </Container>
          </Container>
        </Container>
      </>
    );
  },
);
