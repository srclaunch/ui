import { Colors, ContrastColors } from './color';

export enum ElementForegroundColors {
  CloseButton = 'var(--fg-color-close-button-rgb)',
  MoreMenu = 'var(--fg-color-more-menu-rgb)',
}

export enum ForegroundColorShade {
  Lightest = 'var(--fg-color-lightest-rgb)',
  Lighter = 'var(--fg-color-lighter-rgb)',
  Light = 'var(--fg-color-light-rgb)',
  Default = 'var(--fg-color-default-rgb)',
  Dark = 'var(--fg-color-dark-rgb)',
  Darker = 'var(--fg-color-darker-rgb)',
  Darkest = 'var(--fg-color-darkest-rgb)',
  Transparent = 'transparent',
}

export enum ForegroundColors {
  CloseButton = ElementForegroundColors.CloseButton,
  MoreMenu = ElementForegroundColors.MoreMenu,
  Lightest = ForegroundColorShade.Lightest,
  Lighter = ForegroundColorShade.Lighter,
  Light = ForegroundColorShade.Light,
  Default = ForegroundColorShade.Default,
  Dark = ForegroundColorShade.Dark,
  Darker = ForegroundColorShade.Darker,
  Darkest = ForegroundColorShade.Darkest,
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

export type ForegroundColor = ForegroundColors | string;
