import { Amount } from '../proportion';
import { Size } from './size';
import { Color, Colors, ContrastColors } from './color';

export enum ElementBorderColors {
  InputControl = 'var(--border-color-input-control-rgb)',
}

export enum BorderColorShade {
  Lightest = 'var(--border-color-lightest-rgb)',
  Lighter = 'var(--border-color-lighter-rgb)',
  Light = 'var(--border-color-light-rgb)',
  Default = 'var(--border-color-default-rgb)',
  Dark = 'var(--border-color-dark-rgb)',
  Darker = 'var(--border-color-darker-rgb)',
  Darkest = 'var(--border-color-darkest-rgb)',
}

export enum BorderColors {
  InputControl = ElementBorderColors.InputControl,
  Lightest = BorderColorShade.Lightest,
  Lighter = BorderColorShade.Lighter,
  Light = BorderColorShade.Light,
  Default = BorderColorShade.Default,
  Dark = BorderColorShade.Dark,
  Darker = BorderColorShade.Darker,
  Darkest = BorderColorShade.Darkest,
  Black = Colors.Black,
  BlackContrast = ContrastColors.Black,
  Error = Colors.Error,
  ErrorContrast = ContrastColors.Error,
  Info = Colors.Info,
  InfoContrast = ContrastColors.Info,
  Primary = Colors.Primary,
  PrimaryContrast = ContrastColors.Primary,
  Secondary = Colors.Primary,
  SecondaryContrast = ContrastColors.Secondary,
  Success = Colors.Success,
  SuccessContrast = ContrastColors.Success,
  Transparent = Colors.Transparent,
  Warning = Colors.Warning,
  WarningContrast = ContrastColors.Warning,
  White = Colors.White,
  WhiteContrast = ContrastColors.White,
}

export type BorderColor = BorderColors | string;

export enum BorderStyle {
  Dotted = 'dotted',
  Solid = 'solid',
}

export type BorderStyleProps = {
  color: Color;
  style?: BorderStyle;
  width?: Amount | Size | number;
};

export type BorderDirectionProps = {
  bottom?: BorderStyleProps;
  left?: BorderStyleProps;
  right?: BorderStyleProps;
  top?: BorderStyleProps;
};

export type BorderRadiusCornerProps = {
  bottomLeft?: Amount | Size | number;
  bottomRight?: Amount | Size | number;
  topLeft?: Amount | Size | number;
  topRight?: Amount | Size | number;
};

export type BorderProps<T = {}> = {
  border?: BorderStyleProps | BorderDirectionProps;
  borderRadius?: (Amount | Size | number) | BorderRadiusCornerProps;
} & T;
