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

export type BorderColor = BorderColors | Color;

export enum BorderStyle {
  Dashed = 'dashed',
  Dotted = 'dotted',
  Double = 'double',
  Groove = 'groove',
  Inset = 'inset',
  None = 'none',
  Outset = 'outset',
  Ridge = 'ridge',
  Solid = 'solid',
  Wavy = 'wavy',
}

export type Border = {
  readonly all?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: number | string;
  };

  readonly bottom?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: number | string;
  };

  readonly left?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: number | string;
  };

  readonly right?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: number | string;
  };

  readonly top?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: number | string;
  };
};

export type BorderRadius = {
  readonly all?: number | string;
  readonly bottomLeft?: number | string;
  readonly bottomRight?: number | string;
  readonly topLeft?: number | string;
  readonly topRight?: number | string;
};
