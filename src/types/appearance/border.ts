import { Amount, Proportion } from './proportion';
import { Color, Colors, ContrastColors } from './color';
import { Size, Sizes } from './size';

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
    readonly width?: string | number;
  };
  readonly bottom?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: string | number;
  };
  readonly left?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: string | number;
  };
  readonly right?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: string | number;
  };
  readonly top?: {
    readonly color: BorderColor;
    readonly style?: BorderStyle;
    readonly width?: string | number;
  };
};

export type BorderRadius = {
  readonly all?: string | number;
  readonly bottomLeft?: string | number;
  readonly bottomRight?: string | number;
  readonly topLeft?: string | number;
  readonly topRight?: string | number;
};
