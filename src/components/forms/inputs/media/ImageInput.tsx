import { BasicIcons } from '@srclaunch/icons';
import { Image as ImageType, ValidationProblem } from '@srclaunch/types';
import {
  memo,
  // useRef,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';

import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  Orientation,
  PositionBehavior,
  Sizes,
  TextSize,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../../layout/Container';
import { Icon, IconProps } from '../../../media/Icon';
import { Image } from '../../../media/Image';
import { CloseButton } from '../../../modals/CloseButton';
import { Label } from '../../../typography/Label';
import { Button, ButtonProps, ButtonType } from '../../buttons/Button';
import { InputLabel } from '../../labels/InputLabel';
import { InputProps } from '../shared/Input';

export type ImageInputProps = ContainerProps &
  InputProps<(File | ImageType)[]> & {
    readonly button?: ButtonProps;
    readonly icon?: IconProps;
    readonly maxImages?: number;
  };

export const ImageInput = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    button = {},
    defaultValue = [],
    events = {},
    icon = {},
    label,
    maxImages = 1,
    name = 'images',
    padding = {},
    ...props
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

    const onDrop = useCallback((files: any) => {
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

    useEffect(() => {
      if (events?.input?.onValueChange)
        events.input?.onValueChange({ value: images });
    }, [previewImages]);

    const dragLabel = `Drag ${maxImages > 1 ? 'images' : 'an image'} here...`;
    const buttonLabel = `Browse files`;

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
            {maxImages > 1 && ` (${previewImages.length} of ${maxImages})`}
          </InputLabel>
        )}

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          background={{
            color: isDragActive
              ? BackgroundColors.Darker
              : BackgroundColors.InputControl,
            ...background,
          }}
          border={{
            //TODO: Need to be able to add error/warning/success colors on only borders
            // that are specified if not all
            all: {
              color:
                problems && Array.isArray(problems) && problems.length > 0
                  ? BorderColors.Error
                  : border.all?.color ?? BorderColors.Light,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          padding={{ all: Amount.Default, ...padding }}
          shadow={DepthShadow.Low}
          {...props}
          {...getRootProps()}
        >
          <Container
            alignment={{
              horizontal: AlignHorizontal.Center,
              vertical: AlignVertical.Center,
            }}
            padding={{
              bottom: Amount.Default,
              left: Amount.Default,
              right: Amount.Default,
              top: Amount.Least,
            }}
          >
            <input name={name} {...getInputProps()} />

            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}

            {previewImages && previewImages.length > 0 ? (
              <Container
                alignment={{
                  horizontal: AlignHorizontal.Center,
                  orientation: Orientation.Horizontal,
                  vertical: AlignVertical.Stretch,
                }}
                background={{ color: BackgroundColors.Lightest }}
                borderRadius={{ all: Amount.Least }}
                margin={{ bottom: Amount.Less }}
                padding={{ all: Amount.Least }}
                visibility={{
                  opacity: isDragActive ? 50 : 100,
                }}
              >
                {previewImages.map((image, index) => (
                  <Container key={index} margin={{ all: Amount.Least }}>
                    <CloseButton
                      events={{
                        mouse: {
                          onClick: () =>
                            setImages(files =>
                              files?.filter((e, i) => i !== index),
                            ),
                        },
                      }}
                      position={{
                        behavior: PositionBehavior.Absolute,
                        right: -7,
                        top: -7,
                      }}
                    />

                    <Image
                      alt="preview"
                      borderRadius={{ all: Amount.Least }}
                      // fadeIn
                      key={index}
                      size={{
                        height: 70,
                        width: 70,
                      }}
                      // @ts-ignore
                      url={image.url}
                    />
                  </Container>
                ))}
              </Container>
            ) : (
              <Icon
                margin={{ bottom: Amount.Less }}
                name={icon?.name ?? BasicIcons.FileUpload}
                size={{
                  height: Sizes.Default,
                  width: Sizes.Default,
                }}
                {...icon}
              />
            )}

            <Container
              alignment={{
                vertical: AlignVertical.Center,
              }}
            >
              <Label
                margin={{ bottom: Amount.Least }}
                textSize={TextSize.Small}
              >
                {dragLabel}
              </Label>

              {button && (
                <Button
                  events={{
                    mouse: {
                      onClick: open,
                    },
                  }}
                  form="null"
                  lineHeight={Sizes.Small}
                  textSize={TextSize.Small}
                  type={button.type ?? ButtonType.Primary}
                  {...button}
                >
                  {buttonLabel}
                </Button>
              )}
            </Container>
          </Container>
        </Container>
      </>
    );
  },
);
