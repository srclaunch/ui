import { Color } from './color';
export declare enum ElementBackgroundColors {
    Card = "var(--bg-color-card-rgb)",
    CloseButton = "var(--bg-color-close-button-rgb)",
    DataGrid = "var(--bg-color-data-grid-rgb)",
    DataGridHeader = "var(--bg-color-data-grid-header-rgb)",
    DataGridColumnHeaders = "var(--bg-color-data-grid-column-headers-rgb)",
    DataGridCell = "var(--bg-color-data-grid-cell-rgb)",
    DataGridRow = "var(--bg-color-data-grid-row-rgb)",
    DropdownMenu = "var(--bg-color-dropdown-menu-rgb)",
    InputControl = "var(--bg-color-input-control-rgb)",
    Button = "var(--bg-color-button-rgb)",
    MenuButton = "var(--bg-color-menu-button-rgb)",
    MenuItem = "var(--bg-color-menu-item-rgb)",
    MoreMenu = "var(--bg-color-more-menu-rgb)",
    NavigationBar = "var(--bg-color-navigation-bar-rgb)",
    NavigationMenu = "var(--bg-color-navigation-menu-rgb)",
    Page = "var(--bg-color-page-rgb)",
    SlidePanel = "var(--bg-color-slide-panel-rgb)",
    Workspace = "var(--bg-color-workspace-rgb)"
}
export declare enum BackgroundColorShade {
    Lightest = "var(--bg-color-lightest-rgb)",
    Lighter = "var(--bg-color-lighter-rgb)",
    Light = "var(--bg-color-light-rgb)",
    Default = "var(--bg-color-default-rgb)",
    Dark = "var(--bg-color-dark-rgb)",
    Darker = "var(--bg-color-darker-rgb)",
    Darkest = "var(--bg-color-darkest-rgb)",
    Transparent = "transparent"
}
export declare enum BackgroundColors {
    Card = "var(--bg-color-card-rgb)",
    CloseButton = "var(--bg-color-close-button-rgb)",
    DataGrid = "var(--bg-color-data-grid-rgb)",
    DataGridHeader = "var(--bg-color-data-grid-header-rgb)",
    DataGridColumnHeaders = "var(--bg-color-data-grid-column-headers-rgb)",
    DataGridCell = "var(--bg-color-data-grid-cell-rgb)",
    DataGridRow = "var(--bg-color-data-grid-row-rgb)",
    DropdownMenu = "var(--bg-color-dropdown-menu-rgb)",
    InputControl = "var(--bg-color-input-control-rgb)",
    Button = "var(--bg-color-button-rgb)",
    MenuButton = "var(--bg-color-menu-button-rgb)",
    MenuItem = "var(--bg-color-menu-item-rgb)",
    MoreMenu = "var(--bg-color-more-menu-rgb)",
    NavigationBar = "var(--bg-color-navigation-bar-rgb)",
    NavigationMenu = "var(--bg-color-navigation-menu-rgb)",
    Page = "var(--bg-color-page-rgb)",
    SlidePanel = "var(--bg-color-slide-panel-rgb)",
    Workspace = "var(--bg-color-workspace-rgb)",
    Lightest = "var(--bg-color-lightest-rgb)",
    Lighter = "var(--bg-color-lighter-rgb)",
    Light = "var(--bg-color-light-rgb)",
    Default = "var(--bg-color-default-rgb)",
    Dark = "var(--bg-color-dark-rgb)",
    Darker = "var(--bg-color-darker-rgb)",
    Darkest = "var(--bg-color-darkest-rgb)",
    Black = "var(--color-black-rgb)",
    BlackContrast = "var(--color-black-contrast-rgb)",
    Error = "var(--color-error-rgb)",
    ErrorContrast = "var(--color-error-contrast-rgb)",
    Info = "var(--color-info-rgb)",
    InfoContrast = "var(--color-info-contrast-rgb)",
    Primary = "var(--color-primary-rgb)",
    PrimaryContrast = "var(--color-primary-contrast-rgb)",
    Secondary = "var(--color-secondary-rgb)",
    SecondaryContrast = "var(--color-secondary-contrast-rgb)",
    Success = "var(--color-success-rgb)",
    SuccessContrast = "var(--color-success-contrast-rgb)",
    Transparent = "transparent",
    Warning = "var(--color-warning-rgb)",
    WarningContrast = "var(--color-warning-contrast-rgb)",
    White = "var(--color-white-rgb)",
    WhiteContrast = "var(--color-white-contrast-rgb)"
}
export declare enum BackgroundSize {
    Auto = "auto",
    Cover = "cover",
    Contain = "contain",
    Fill = "fill",
    FillHorizontal = "fill-horizontal",
    FillVertical = "fill-vertical"
}
export declare type BackgroundColor = BackgroundColors;
export declare enum BackgroundRepeat {
    NoRepeat = "no-repeat",
    Repeat = "repeat",
    RepeatX = "repeat-x",
    RepeatY = "repeat-y"
}
export declare type Background = {
    readonly color?: Color;
    readonly image?: {
        readonly path?: string;
        readonly repeat?: BackgroundRepeat;
        readonly size?: BackgroundSize;
        readonly url?: string;
    };
    readonly opacity?: number;
};
//# sourceMappingURL=background.d.ts.map