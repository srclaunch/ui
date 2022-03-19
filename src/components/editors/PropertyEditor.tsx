import { JSONObject } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  DepthShadow,
  Fill,
  InputValueChangeHandler,
  Orientation,
  Sizes,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';

type PropertyEditorProps = ContainerProps & {
  readonly defaultValue?: JSONObject;
  readonly hidden?: boolean;
  readonly label?: string;
  readonly name?: string;
  readonly onChange?: InputValueChangeHandler<Record<string, unknown>>;
  readonly required?: boolean;
  // readonly size?: Size;
  readonly value?: JSONObject;
};

export const PropertyEditor = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    defaultValue = {},
    ...props
  }: PropertyEditorProps): ReactElement => {
    const getValueLabel = (value: any) => {
      if (typeof value === 'string') {
        return value;
      }
      if (typeof value === 'number') {
        return value.toString();
      }
      if (typeof value === 'boolean') {
        return value ? 'true' : 'false';
      }
      if (value === null) {
        return 'null';
      }
      if (value === undefined) {
        return 'undefined';
      }
      if (typeof value === 'object') {
        return JSON.stringify(value);
      }
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    };

    return (
      <Container
        background={{ color: BackgroundColors.Lightest, ...background }}
        border={{
          all: {
            color: BorderColors.Lighter,
          },
        }}
        borderRadius={{
          all: Amount.Least,

          ...borderRadius,
        }}
        className={`${className} object-editor`}
        shadow={DepthShadow.High}
        {...props}
      >
        <Container
          alignment={{
            // fill: Fill.Horizontal,
            orientation: Orientation.Horizontal,
          }}
          borderRadius={{
            all: Amount.Least,
            bottomLeft: Amount.None,
            bottomRight: Amount.None,
            ...borderRadius,
          }}
        >
          <Container
            alignment={{}}
            background={{ color: BackgroundColors.Lighter }}
            border={{
              right: {
                color: BorderColors.Light,
              },
            }}
            padding={{
              left: Amount.Less,
              right: Amount.Less,
            }}
            size={{
              width: 180,
            }}
          >
            <Label lineHeight={Sizes.Large}>Property</Label>
          </Container>

          <Container
            alignment={{
              fill: Fill.Horizontal,
            }}
            background={{ color: BackgroundColors.Lighter }}
            padding={{
              left: Amount.Less,
              right: Amount.Less,
            }}
          >
            <Label lineHeight={Sizes.Large}>Value</Label>
          </Container>
        </Container>

        <Container
          alignment={{
            fill: Fill.Horizontal,
          }}
          border={{
            top: {
              color: BorderColors.Light,
            },
          }}
          borderRadius={{
            all: Amount.Least,
            topLeft: Amount.None,
            topRight: Amount.None,
            ...borderRadius,
          }}
        >
          {Object.keys(defaultValue).map(key => {
            return (
              <Container
                alignment={{
                  fill: Fill.Horizontal,
                  orientation: Orientation.Horizontal,
                }}
                key={key}
              >
                <Container
                  border={{
                    right: {
                      color: BorderColors.Lighter,
                    },
                  }}
                  padding={{
                    left: Amount.Less,
                    right: Amount.Less,
                  }}
                  size={{
                    width: 180,
                  }}
                >
                  <Label lineHeight={Sizes.Large}>{key}</Label>
                </Container>

                <Container
                  alignment={{
                    fill: Fill.Horizontal,
                  }}
                  padding={{
                    left: Amount.Less,
                    right: Amount.Less,
                  }}
                >
                  <Label lineHeight={Sizes.Large}>
                    {getValueLabel(defaultValue[key])}
                  </Label>
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
    );
  },
);
