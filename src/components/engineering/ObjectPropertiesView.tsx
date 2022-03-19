import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  Colors,
  DepthShadow,
  Fill,
  InputValueChangeHandler,
  Orientation,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Label, LabelProps } from '../typography/Label';

type ObjectPropertiesViewProps = ContainerProps &
  LabelProps & {
    properties: {
      [key: string]: {
        types: string[];
        required?: boolean;
      };
    };
  };

export const ObjectPropertiesView = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    lineHeight = Sizes.Default,
    properties,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    ...props
  }: ObjectPropertiesViewProps): ReactElement => {
    const getTypeColors = (
      type: string,
    ): {
      backgroundColor: BackgroundColors | string;
      textColor: TextColors | string;
    } => {
      switch (type) {
        case 'string':
          return {
            backgroundColor: BackgroundColors.Info,
            textColor: TextColors.White,
          };
        case 'number':
          return {
            backgroundColor: BackgroundColors.Dark,
            textColor: TextColors.Light,
          };
        case 'boolean':
          return {
            backgroundColor: BackgroundColors.Default,
            textColor: TextColors.Darker,
          };
        case 'object':
          return {
            backgroundColor: BackgroundColors.Info,
            textColor: TextColors.Info,
          };
        case 'ReactElement':
          return {
            backgroundColor: BackgroundColors.Warning,
            textColor: TextColors.Darker,
          };
        default:
          return {
            backgroundColor: BackgroundColors.Info,
            textColor: TextColors.Info,
          };
      }
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
            fill: Fill.Horizontal,
          }}
          borderRadius={{
            all: Amount.Least,
            topLeft: Amount.None,
            topRight: Amount.None,
            ...borderRadius,
          }}
        >
          {Object.keys(properties).map((property, key) => {
            return (
              <Container
                alignment={{
                  fill: Fill.Horizontal,
                  orientation: Orientation.Horizontal,
                }}
                border={{
                  bottom: {
                    color: BorderColors.Lighter,
                  },
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
                    width: 140,
                  }}
                >
                  <Label lineHeight={Sizes.Large}>{property}</Label>
                </Container>

                <Container
                  alignment={{
                    orientation: Orientation.Horizontal,
                    vertical: AlignVertical.Center,
                  }}
                  padding={{
                    left: Amount.Less,
                    right: Amount.Less,
                  }}
                >
                  {properties[property]?.required && (
                    <Label
                      background={{ color: BackgroundColors.Error }}
                      borderRadius={{ all: 3 }}
                      lineHeight={Sizes.Small}
                      margin={{ right: Amount.Less }}
                      padding={{ left: Amount.Less, right: Amount.Less }}
                      size={{
                        height: Sizes.Small,
                      }}
                      textColor={TextColors.White}
                      textSize={TextSize.Small}
                    >
                      Required
                    </Label>
                  )}
                  {properties[property]?.types.map((type, index) => {
                    const typeColors = getTypeColors(type);
                    return (
                      <Label
                        background={{ color: typeColors.backgroundColor }}
                        borderRadius={{ all: 3 }}
                        key={index}
                        lineHeight={Sizes.Small}
                        margin={{ right: Amount.Less }}
                        padding={{ left: Amount.Less, right: Amount.Less }}
                        size={{
                          height: Sizes.Small,
                        }}
                        textColor={typeColors.textColor}
                        textSize={TextSize.Small}
                      >
                        {type}
                      </Label>
                    );
                  })}
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
    );
  },
);
