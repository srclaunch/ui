import { Color, Colors, ContrastColors } from './color';
import { Align } from '../layout/alignment';

export enum ElementBackgroundColors {
  Card = 'var(--bg-color-card-rgb)',
  CloseButton = 'var(--bg-color-close-button-rgb)',
  DataGrid = 'var(--bg-color-data-grid-rgb)',
  DataGridHeader = 'var(--bg-color-data-grid-header-rgb)',
  DataGridColumnHeaders = 'var(--bg-color-data-grid-column-headers-rgb)',
  DataGridCell = 'var(--bg-color-data-grid-cell-rgb)',
  DataGridRow = 'var(--bg-color-data-grid-row-rgb)',
  DropdownMenu = 'var(--bg-color-dropdown-menu-rgb)',
  InputControl = 'var(--bg-color-input-control-rgb)',
  Button = 'var(--bg-color-button-rgb)',
  MenuButton = 'var(--bg-color-menu-button-rgb)',
  MenuItem = 'var(--bg-color-menu-item-rgb)',
  MoreMenu = 'var(--bg-color-more-menu-rgb)',
  NavigationBar = 'var(--bg-color-navigation-bar-rgb)',
  NavigationMenu = 'var(--bg-color-navigation-menu-rgb)',
  SlidePanel = 'var(--bg-color-slide-panel-rgb)',
  Workspace = 'var(--bg-color-workspace-rgb)',
}

export enum BackgroundColorShade {
  Lightest = 'var(--bg-color-lightest-rgb)',
  Lighter = 'var(--bg-color-lighter-rgb)',
  Light = 'var(--bg-color-light-rgb)',
  Default = 'var(--bg-color-default-rgb)',
  Dark = 'var(--bg-color-dark-rgb)',
  Darker = 'var(--bg-color-darker-rgb)',
  Darkest = 'var(--bg-color-darkest-rgb)',
  Transparent = 'transparent',
}

export enum BackgroundColors {
  Card = ElementBackgroundColors.Card,
  CloseButton = ElementBackgroundColors.CloseButton,
  DataGrid = ElementBackgroundColors.DataGrid,
  DataGridHeader = ElementBackgroundColors.DataGridHeader,
  DataGridColumnHeaders = ElementBackgroundColors.DataGridColumnHeaders,
  DataGridCell = ElementBackgroundColors.DataGridCell,
  DataGridRow = ElementBackgroundColors.DataGridRow,
  DropdownMenu = ElementBackgroundColors.DropdownMenu,
  InputControl = ElementBackgroundColors.InputControl,
  Button = ElementBackgroundColors.Button,
  MenuButton = ElementBackgroundColors.MenuButton,
  MenuItem = ElementBackgroundColors.MenuItem,
  MoreMenu = ElementBackgroundColors.MoreMenu,
  NavigationBar = ElementBackgroundColors.NavigationBar,
  NavigationMenu = ElementBackgroundColors.NavigationMenu,
  SlidePanel = ElementBackgroundColors.SlidePanel,
  Workspace = ElementBackgroundColors.Workspace,
  Lightest = BackgroundColorShade.Lightest,
  Lighter = BackgroundColorShade.Lighter,
  Light = BackgroundColorShade.Light,
  Default = BackgroundColorShade.Default,
  Dark = BackgroundColorShade.Dark,
  Darker = BackgroundColorShade.Darker,
  Darkest = BackgroundColorShade.Darkest,
  Black = Colors.Black,
  BlackContrast = ContrastColors.Black,
  Error = Colors.Error,
  ErrorContrast = ContrastColors.Error,
  Info = Colors.Info,
  InfoContrast = ContrastColors.Info,
  Primary = Colors.Primary,
  PrimaryContrast = ContrastColors.Primary,
  Secondary = Colors.Secondary,
  SecondaryContrast = ContrastColors.Secondary,
  Success = Colors.Success,
  SuccessContrast = ContrastColors.Success,
  Transparent = Colors.Transparent,
  Warning = Colors.Warning,
  WarningContrast = ContrastColors.Warning,
  White = Colors.White,
  WhiteContrast = ContrastColors.White,
}

export enum BackgroundSize {
  Auto = 'auto',
  Cover = 'cover',
  Contain = 'contain',
  Fill = 'fill',
  FillHorizontal = 'fill-horizontal',
  FillVertical = 'fill-vertical',
}

export type BackgroundProps<T = {}> = {
  backgroundColor?: Color;
  backgroundImage?: {
    path?: string;
    position?: Align | string;
    size?: BackgroundSize | string;
    url?: string;
  };
  backgroundOpacity?: number;
} & T;

export type BackgroundColor = BackgroundColors | string;
