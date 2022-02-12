import { Amount } from '../proportion';
import { Color, Colors, ContrastColors } from './color';
import { Size } from './size';

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
  readonly color: Color;
  readonly style?: BorderStyle;
  readonly width?: Amount | Size | number;
};

export type BorderDirectionProps = {
  readonly bottom?: BorderStyleProps;
  readonly left?: BorderStyleProps;
  readonly right?: BorderStyleProps;
  readonly top?: BorderStyleProps;
};

export type BorderRadiusCornerProps = {
  readonly bottomLeft?: Amount | Size | number;
  readonly bottomRight?: Amount | Size | number;
  readonly topLeft?: Amount | Size | number;
  readonly topRight?: Amount | Size | number;
};

export type BorderProps = {
  readonly border?: BorderStyleProps | BorderDirectionProps;
  readonly borderRadius?: (Amount | Size | number) | BorderRadiusCornerProps;
};
