import { PropsWithChildren } from 'react';

import { Color, Colors, ContrastColors } from '../appearance/color';
import { ForegroundColors } from '../appearance/foreground';
import { Size } from '../appearance/size';
import { Align } from '../layout/alignment';
import { Overflow } from '../layout/behavior';
import { Amount } from '../proportion';

export enum ElementTextColors {
  DataGridCell = 'var(--text-color-data-grid-cell-rgb)',
  DataGridColumnHeaders = 'var(--text-color-data-grid-column-headers-rgb)',
  DropdownMenu = 'var(--text-color-dropdown-menu-rgb)',
  InputControl = 'var(--text-color-input-control-rgb)',
  InputPlaceholder = 'var(--text-color-input-placeholder-rgb)',
  Button = 'var(--text-color-button-rgb)',
  InputLabel = 'var(--text-color-input-label-rgb)',
  Link = 'var(--text-color-link-rgb)',
  MenuButton = 'var(--text-color-menu-button-rgb)',
  MenuItem = 'var(--text-color-menu-item-rgb)',
  Paragraph = 'var(--text-color-paragraph-rgb)',
  Text = 'var(--text-color-text-rgb)',
  Title = 'var(--text-color-title-rgb)',
  SubTitle = 'var(--text-color-sub-title-rgb)',
  WorkspaceTitle = 'var(--text-color-workspace-title-rgb)',
}

export enum TextColors {
  DataGridColumnHeaders = ElementTextColors.DataGridColumnHeaders,
  DataGridCell = ElementTextColors.DataGridCell,
  DropdownMenu = ElementTextColors.DropdownMenu,
  InputControl = ElementTextColors.InputControl,
  InputPlaceholder = ElementTextColors.InputPlaceholder,
  Button = ElementTextColors.Button,
  InputLabel = ElementTextColors.InputLabel,
  Link = ElementTextColors.Link,
  MenuButton = ElementTextColors.MenuButton,
  MenuItem = ElementTextColors.MenuItem,
  Paragraph = ElementTextColors.Paragraph,
  Text = ElementTextColors.Text,
  Title = ElementTextColors.Title,
  SubTitle = ElementTextColors.SubTitle,
  WorkspaceTitle = ElementTextColors.WorkspaceTitle,
  Lightest = ForegroundColors.Lightest,
  Lighter = ForegroundColors.Lighter,
  Light = ForegroundColors.Light,
  Default = ForegroundColors.Default,
  DefaultContrast = ContrastColors.Default,
  Dark = ForegroundColors.Dark,
  Darker = ForegroundColors.Darker,
  Darkest = ForegroundColors.Darkest,
  Black = Colors.Black,
  BlackContrast = ContrastColors.Black,
  Error = Colors.Error,
  ErrorContrast = ContrastColors.Error,
  Info = Colors.Info,
  InfoContrast = ContrastColors.Info,
  Inherit = Colors.Inherit,
  Primary = Colors.Primary,
  PrimaryContrast = ContrastColors.Primary,
  Secondary = Colors.Primary,
  SecondaryContrast = ContrastColors.Secondary,
  Success = Colors.Success,
  SuccessContrast = ContrastColors.Success,
  Warning = Colors.Warning,
  WarningContrast = ContrastColors.Warning,
  White = Colors.White,
  WhiteContrast = ContrastColors.White,
}

export enum TextOverflow {
  Clip = 'clip',
  Ellipsis = 'ellipsis',
}

export enum TextWeight {
  Least = 'var(--text-weight-least)',
  Less = 'var(--text-weight-less)',
  Default = 'var(--text-weight-default)',
  More = 'var(--text-weight-more)',
  Most = 'var(--text-weight-most)',
}

export enum TextSize {
  Smallest = 'var(--text-size-smallest)',
  Smaller = 'var(--text-size-smaller)',
  Small = 'var(--text-size-small)',
  Default = 'var(--text-size-default)',
  Large = 'var(--text-size-large)',
  Larger = 'var(--text-size-larger)',
  Largest = 'var(--text-size-largest)',
}

export enum WhiteSpace {
  Normal = 'normal',
  NoWrap = 'nowrap',
  Pre = 'pre',
  PreWrap = 'pre-wrap',
  PreLine = 'pre-line',
}

export type TextColor = TextColors | string;

export type TextProps = PropsWithChildren<{
  readonly alignText?: Align | string;
  readonly inline?: boolean;
  readonly lineHeight?: Amount | Size | string | number;
  readonly overflow?: Overflow | string;
  readonly selectable?: boolean;
  readonly textColor?: Color | string;
  readonly textOverflow?: TextOverflow | string;
  readonly textSize?: TextSize | string | number;
  readonly textWeight?: TextWeight | string;
  readonly underline?: boolean;
  readonly underlineColor?: Color | string;
  readonly whiteSpace?: WhiteSpace | string;
  readonly width?: Amount | Size | string | number;
}>;
