(function(r,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],t):(r=typeof globalThis!="undefined"?globalThis:r||self,t(r.themes={},r.React,r.styled))})(this,function(r,t,d){"use strict";function i(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=i(t),h=`html,
body,
#root {
  background-color: var(--bg-color-default);

  /* Proportions */
  --amount-none: 0px;
  --amount-least: 5.5px;
  --amount-less: 11px;
  --amount-default: 16.5px;
  --amount-more: 22px;
  --amount-most: 27.5px;
  --amount-all: 33px;

  --size-smallest: 10px;
  --size-smaller: 14px;
  --size-small: 24px;
  --size-default: 32px;
  --size-large: 42px;
  --size-larger: 52px;
  --size-largest: 56px;

  /* Colors */
  --color-primary-rgb: 76, 62, 196;
  --color-primary: rgb(var(--color-primary-rgb));
  --color-primary-contrast-rgb: 255, 255, 255;
  --color-primary-contrast: rgb(var(--color-primary-contrast-rgb));
  --color-default-rgb: var(--color-black-rgb);
  --color-default: rgb(var(--color-default-rgb));
  --color-default-contrast-rgb: var(--color-default-rgb);
  --color-default-contrast: var(--color-default-rgb);
  --color-secondary-rgb: 230, 232, 235;
  --color-secondary: rgb(var(--color-secondary-rgb));
  --color-secondary-contrast-rgb: 35, 37, 40;
  --color-secondary-contrast: rgb(var(--color-secondary-contrast-rgb));
  --color-black-rgb: 50, 52, 55;
  --color-black: rgb(var(--color-black-rgb));
  --color-black-contrast-rgb: var(--color-white-rgb);
  --color-black-contrast: rgb(var(--color-black-contrast-rgb));
  --color-white-rgb: 238, 240, 243;
  --color-white: rgb(var(--color-white-rgb));
  --color-white-contrast-rgb: var(--color-white-rgb);
  --color-white-contrast: rgb(var(--color-white-contrast-rgb));
  --color-error-rgb: 236, 79, 79;
  --color-error: rgb(var(--color-error-rgb));
  --color-error-contrast-rgb: var(--color-white-rgb);
  --color-error-contrast: rgb(var(--color-error-contrast-rgb));
  --color-info-rgb: 15, 193, 223;
  --color-info: rgb(var(--color-info-rgb));
  --color-info-contrast-rgb: var(--color-white-rgb);
  --color-info-contrast: rgb(var(--color-info-contrast-rgb));
  --color-success-rgb: 131, 210, 126;
  --color-success: rgb(var(--color-success-rgb));
  --color-success-contrast-rgb: var(--color-white-rgb);
  --color-success-contrast: rgb(var(--color-success-contrast-rgb));
  --color-warning-rgb: 255, 209, 0;
  --color-warning: rgb(var(--color-warning-rgb));
  --color-warning-contrast-rgb: var(--color-white-rgb);
  --color-warning-contrast: rgb(var(--color-warning-contrast-rgb));

  --bg-color-lightest-rgb: 245, 245, 245;
  --bg-color-lightest: rgb(var(--bg-color-lightest-rgb));
  --bg-color-lighter-rgb: 235, 235, 235;
  --bg-color-lighter: rgb(var(--bg-color-lighter-rgb));
  --bg-color-light-rgb: 225, 225, 225;
  --bg-color-light: rgb(var(--bg-color-light-rgb));
  --bg-color-default-rgb: 220, 220, 220;
  --bg-color-default: rgb(var(--bg-color-default-rgb));
  --bg-color-dark-rgb: 200, 200, 200;
  --bg-color-dark: rgb(var(--bg-color-dark-rgb));
  --bg-color-darker-rgb: 190, 190, 190;
  --bg-color-darker: rgb(var(--bg-color-darker-rgb));
  --bg-color-darkest-rgb: 180, 180, 180;
  --bg-color-darkest: rgb(var(--bg-color-darkest-rgb));

  --border-color-lightest-rgb: 240, 243, 247;
  --border-color-lightest: rgb(var(--border-color-lightest-rgb));
  --border-color-lighter-rgb: 230, 233, 237;
  --border-color-lighter: rgb(var(--border-color-lighter-rgb));
  --border-color-light-rgb: 220, 223, 227;
  --border-color-light: rgb(var(--border-color-light-rgb));
  --border-color-default-rgb: 210, 213, 217;
  --border-color-default: rgb(var(--border-color-default-rgb));
  --border-color-dark-rgb: 200, 203, 207;
  --border-color-dark: rgb(var(--border-color-dark-rgb));
  --border-color-darker-rgb: 190, 193, 197;
  --border-color-darker: rgb(var(--border-color-darker-rgb));
  --border-color-darkest-rgb: 180, 183, 187;
  --border-color-darkest: rgb(var(--border-color-darkest-rgb));

  --fg-color-lightest-rgb: 210, 212, 215;
  --fg-color-lightest: rgb(var(--fg-color-lightest-rgb));
  --fg-color-lighter-rgb: 190, 192, 195;
  --fg-color-lighter: rgb(var(--fg-color-lighter-rgb));
  --fg-color-light-rgb: 160, 162, 165;
  --fg-color-light: rgb(var(--fg-color-light-rgb));
  --fg-color-default-rgb: 130, 132, 135;
  --fg-color-default: rgb(var(--fg-color-default-rgb));
  --fg-color-dark-rgb: 100, 102, 105;
  --fg-color-dark: rgb(var(--fg-color-dark-rgb));
  --fg-color-darker-rgb: 60, 62, 65;
  --fg-color-darker: rgb(var(--fg-color-darker-rgb));
  --fg-color-darkest-rgb: var(--color-black-rgb);
  --fg-color-darkest: rgb(var(--fg-color-darkest-rgb));

  /* Text */
  --text-color-lightest-rgb: var(--color-white-rgb);
  --text-color-lightest: rgb(var(--text-color-lightest-rgb));
  --text-color-lighter-rgb: 170, 172, 175;
  --text-color-lighter: rgb(var(--text-color-lighter-rgb));
  --text-color-light-rgb: 140, 142, 145;
  --text-color-light: rgb(var(--text-color-light-rgb));
  --text-color-default-rgb: 90, 92, 95;
  --text-color-default: rgb(var(--text-color-default-rgb));
  --text-color-dark-rgb: 70, 72, 75;
  --text-color-dark: rgb(var(--text-color-dark-rgb));
  --text-color-darker-rgb: 50, 52, 55;
  --text-color-darker: rgb(var(--text-color-darker-rgb));
  --text-color-darkest-rgb: var(--color-black-rgb);
  --text-color-darkest: rgb(var(--text-color-darkest-rgb));

  --text-font-button: 'Helvetica Neue', -apple-system, blinkmacsystemfont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif;
  --text-font-text: 'Helvetica Neue', -apple-system, blinkmacsystemfont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif;

  /* Text sizes */
  --text-size-smallest: 9px;
  --text-size-smaller: 11px;
  --text-size-small: 12px;
  --text-size-default: 13px;
  --text-size-large: 18px;
  --text-size-larger: 20px;
  --text-size-largest: 24px;

  --text-weight-least: 300;
  --text-weight-less: 400;
  --text-weight-default: 500;
  --text-weight-more: 600;
  --text-weight-most: 700;

  /* Shadows */
  --shadow-depth-lowest: inset 0 -20px 60px rgba(0, 0, 0, 0.1);
  --shadow-depth-lower: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-depth-low: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-depth-surface: none;
  --shadow-depth-high: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-depth-higher: 0 4px 27px rgba(0, 0, 0, 0.16);
  --shadow-depth-highest: 0 10px 62px rgba(0, 0, 0, 0.1);

  /* Layout */
  --z-index-depth-lowest: -300;
  --z-index-depth-lower: -200;
  --z-index-depth-low: -100;
  --z-index-depth-surface: 0;
  --z-index-depth-high: 100;
  --z-index-depth-higher: 200;
  --z-index-depth-highest: 300;

  /* Element styles */
  --bg-color-card-rgb: var(--bg-color-lightest-rgb);
  --bg-color-close-button-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-header-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-column-headers-rgb: var(--bg-color-lighter-rgb);
  --bg-color-data-grid-cell-rgb: var(--bg-color-lightest-rgb);
  --bg-color-data-grid-row-rgb: var(--bg-color-lighter-rgb);
  --bg-color-dropdown-menu-rgb: var(--bg-color-lightest-rgb);
  --bg-color-input-control-rgb: var(--bg-color-lightest-rgb);
  --bg-color-menu-button-rgb: var(--bg-color-lightest-rgb);
  --bg-color-more-menu-rgb: var(--bg-color-default-rgb);
  --bg-color-navigation-bar-rgb: var(--bg-color-lightest-rgb);
  --bg-color-navigation-menu-rgb: var(--bg-color-lightest-rgb);
  --bg-color-page-rgb: var(--bg-color-lighter-rgb);
  --bg-color-slide-panel-rgb: var(--bg-color-lightest-rgb);
  --bg-color-workspace-rgb: var(--bg-color-lighter-rgb);

  --border-color-input-control-rgb: var(--border-color-default-rgb);

  --fg-color-close-button-rgb: var(--fg-color-dark-rgb);
  --fg-color-more-menu-rgb: var(--fg-color-dark-rgb);

  --text-color-data-grid-column-headers-rgb: var(--text-color-lighter-rgb);
  --text-color-data-grid-cell-rgb: var(--text-color-light-rgb);
  --text-color-dropdown-menu-rgb: var(--text-color-light-rgb);
  --text-color-input-control-rgb: var(--text-color-default-rgb);
  --text-color-input-label-rgb: var(--text-color-light-rgb);
  --text-color-input-placeholder-rgb: var(--text-color-lighter-rgb);
  --text-color-link-rgb: var(--color-primary-rgb);
  --text-color-menu-button-rgb: var(--text-color-light-rgb);
  --text-color-paragraph-rgb: var(--text-color-lighter-rgb);
  --text-color-text-rgb: var(--text-color-default-rgb);
  --text-color-title-rgb: var(--text-color-dark-rgb);
  --text-color-sub-title-rgb: var(--text-color-default-rgb);
}
`;const l={css:h,description:"Default AppLab Light theme",id:"applab-light",name:"AppLab Light"};var x=`html,
body,
#root {
  background-color: var(--bg-color-default);

  --amount-none: 0px;
  --amount-least: 5.5px;
  --amount-less: 11px;
  --amount-default: 16.5px;
  --amount-more: 22px;
  --amount-most: 27.5px;
  --amount-all: 33px;

  --size-smallest: 10px;
  --size-smaller: 14px;
  --size-small: 24px;
  --size-default: 32px;
  --size-large: 42px;
  --size-larger: 52px;
  --size-largest: 56px;

  /* Colors */
  --color-primary-rgb: 76, 62, 196;
  /* --color-primary-rgb: 128, 60, 187; */
  /* --color-primary-rgb: 212, 23, 82; */
  --color-primary: rgb(var(--color-primary-rgb));
  --color-primary-contrast-rgb: 255, 255, 255;
  --color-primary-contrast: rgb(var(--color-primary-contrast-rgb));
  --color-default-rgb: var(--color-black-rgb);
  --color-default: rgb(var(--color-default-rgb));
  --color-default-contrast-rgb: var(--color-default-rgb);
  --color-default-contrast: var(--color-default-rgb);
  --color-secondary-rgb: var(--bg-color-lightest-rgb);
  --color-secondary: rgb(var(--color-secondary-rgb));
  --color-secondary-contrast-rgb: var(--color-white-rgb);
  --color-secondary-contrast: rgb(var(--color-secondary-contrast-rgb));
  --color-black-rgb: 35, 37, 40;
  --color-black: rgb(var(--color-black-rgb));
  --color-black-contrast-rgb: var(--color-white-rgb);
  --color-black-contrast: rgb(var(--color-black-contrast-rgb));
  --color-white-rgb: 238, 240, 243;
  --color-white: rgb(var(--color-white-rgb));
  --color-white-contrast-rgb: var(--color-white-rgb);
  --color-white-contrast: rgb(var(--color-white-contrast-rgb));
  --color-error-rgb: 236, 79, 79;
  --color-error: rgb(var(--color-error-rgb));
  --color-error-contrast-rgb: var(--color-white-rgb);
  --color-error-contrast: rgb(var(--color-error-contrast-rgb));
  --color-info-rgb: 15, 193, 223;
  --color-info: rgb(var(--color-info-rgb));
  --color-info-contrast-rgb: var(--color-white-rgb);
  --color-info-contrast: rgb(var(--color-info-contrast-rgb));
  --color-success-rgb: 131, 210, 126;
  --color-success: rgb(var(--color-success-rgb));
  --color-success-contrast-rgb: var(--color-white-rgb);
  --color-success-contrast: rgb(var(--color-success-contrast-rgb));
  --color-warning-rgb: 255, 209, 0;
  --color-warning: rgb(var(--color-warning-rgb));
  --color-warning-contrast-rgb: var(--color-white-rgb);
  --color-warning-contrast: rgb(var(--color-warning-contrast-rgb));

  --bg-color-lightest-rgb: 54, 54, 62;
  --bg-color-lightest: rgb(var(--bg-color-lightest-rgb));
  --bg-color-lighter-rgb: 48, 48, 56;
  --bg-color-lighter: rgb(var(--bg-color-lighter-rgb));
  --bg-color-light-rgb: 42, 42, 50;
  --bg-color-light: rgb(var(--bg-color-light-rgb));
  --bg-color-default-rgb: 36, 36, 44;
  --bg-color-default: rgb(var(--bg-color-default-rgb));
  --bg-color-dark-rgb: 30, 30, 38;
  --bg-color-dark: rgb(var(--bg-color-dark-rgb));
  --bg-color-darker-rgb: 24, 24, 32;
  --bg-color-darker: rgb(var(--bg-color-darker-rgb));
  --bg-color-darkest-rgb: 16, 16, 24;
  --bg-color-darkest: rgb(var(--bg-color-darkest-rgb));

  --border-color-lightest-rgb: 56, 56, 64;
  --border-color-lightest: rgb(var(--border-color-lightest-rgb));
  --border-color-lighter-rgb: 48, 48, 56;
  --border-color-lighter: rgb(var(--border-color-lighter-rgb));
  --border-color-light-rgb: 40, 40, 48;
  --border-color-light: rgb(var(--border-color-light-rgb));
  --border-color-default-rgb: 32, 32, 40;
  --border-color-default: rgb(var(--border-color-default-rgb));
  --border-color-dark-rgb: 24, 24, 32;
  --border-color-dark: rgb(var(--border-color-dark-rgb));
  --border-color-darker-rgb: 16, 16, 24;
  --border-color-darker: rgb(var(--border-color-darker-rgb));
  --border-color-darkest-rgb: 8, 8, 16;
  --border-color-darkest: rgb(var(--border-color-darkest-rgb));

  --fg-color-lightest-rgb: 210, 212, 215;
  --fg-color-lightest: rgb(var(--fg-color-lightest-rgb));
  --fg-color-lighter-rgb: 190, 192, 195;
  --fg-color-lighter: rgb(var(--fg-color-lighter-rgb));
  --fg-color-light-rgb: 160, 162, 165;
  --fg-color-light: rgb(var(--fg-color-light-rgb));
  --fg-color-default-rgb: 130, 132, 135;
  --fg-color-default: rgb(var(--fg-color-default-rgb));
  --fg-color-dark-rgb: 100, 102, 105;
  --fg-color-dark: rgb(var(--fg-color-dark-rgb));
  --fg-color-darker-rgb: 60, 62, 65;
  --fg-color-darker: rgb(var(--fg-color-darker-rgb));
  --fg-color-darkest-rgb: var(--color-black-rgb);
  --fg-color-darkest: rgb(var(--fg-color-darkest-rgb));

  /* Text */
  --text-color-lightest-rgb: var(--color-white-rgb);
  --text-color-lightest: rgb(var(--text-color-lightest-rgb));
  --text-color-lighter-rgb: 190, 192, 195;
  --text-color-lighter: rgb(var(--text-color-lighter-rgb));
  --text-color-light-rgb: 140, 142, 145;
  --text-color-light: rgb(var(--text-color-light-rgb));
  --text-color-default-rgb: 90, 92, 95;
  --text-color-default: rgb(var(--text-color-default-rgb));
  --text-color-dark-rgb: 70, 72, 75;
  --text-color-dark: rgb(var(--text-color-dark-rgb));
  --text-color-darker-rgb: 50, 52, 55;
  --text-color-darker: rgb(var(--text-color-darker-rgb));
  --text-color-darkest-rgb: var(--color-black-rgb);
  --text-color-darkest: rgb(var(--text-color-darkest-rgb));

  --text-font-button: 'Helvetica Neue', -apple-system, blinkmacsystemfont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif;
  --text-font-text: 'Helvetica Neue', -apple-system, blinkmacsystemfont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', sans-serif;

  /* Text sizes */
  --text-size-smallest: 9px;
  --text-size-smaller: 11px;
  --text-size-small: 12px;
  --text-size-default: 13px;
  --text-size-large: 18px;
  --text-size-larger: 20px;
  --text-size-largest: 24px;

  --text-weight-least: 300;
  --text-weight-less: 400;
  --text-weight-default: 500;
  --text-weight-more: 600;
  --text-weight-most: 700;

  /* Shadows */
  --shadow-depth-lowest: inset 0 20px 60px rgba(0, 0, 0, 0.05);
  --shadow-depth-lower: inset 0 17px 25px rgba(0, 0, 0, 0.1);
  --shadow-depth-low: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  --shadow-depth-surface: none;
  --shadow-depth-high: 0 1px 3px rgba(0, 0, 0, 0.13);
  --shadow-depth-higher: 0 4px 27px rgba(0, 0, 0, 0.2);
  --shadow-depth-highest: 0 20px 60px rgba(0, 0, 0, 0.12);

  /* Layout */
  --z-index-depth-lowest: -300;
  --z-index-depth-lower: -200;
  --z-index-depth-low: -100;
  --z-index-depth-surface: 0;
  --z-index-depth-high: 100;
  --z-index-depth-higher: 200;
  --z-index-depth-highest: 300;

  /* --bg-color-button: rgb(); */

  /* --bg-color-menu-item: rgb(); */
  /* --bg-color-workspace: rgb(); */
  /* --bg-color-workspace-title: rgb(); */

  /* Element styles */
  --bg-color-card-rgb: var(--bg-color-default-rgb);
  --bg-color-close-button-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-header-rgb: var(--bg-color-default-rgb);
  --bg-color-data-grid-column-headers-rgb: var(--bg-color-light-rgb);
  --bg-color-data-grid-cell-rgb: var(--bg-color-lightest-rgb);
  --bg-color-data-grid-row-rgb: var(--bg-color-lighter-rgb);
  --bg-color-dropdown-menu-rgb: var(--bg-color-dark-rgb);
  --bg-color-input-control-rgb: var(--bg-color-dark-rgb);
  --bg-color-menu-button-rgb: var(--bg-color-lightest-rgb);
  --bg-color-more-menu-rgb: var(--bg-color-default-rgb);
  --bg-color-navigation-bar-rgb: var(--bg-color-default-rgb);
  --bg-color-navigation-menu-rgb: var(--bg-color-default-rgb);
  --bg-color-page-rgb: var(--bg-color-darker-rgb);
  --bg-color-slide-panel-rgb: var(--bg-color-light-rgb);
  --bg-color-workspace-rgb: var(--bg-color-darker-rgb);

  --border-color-input-control-rgb: var(--border-color-light-rgb);

  --fg-color-close-button-rgb: var(--fg-color-light-rgb);
  --fg-color-more-menu-rgb: var(--fg-color-light-rgb);

  --text-color-data-grid-column-headers-rgb: var(--text-color-light-rgb);
  --text-color-data-grid-cell-rgb: var(--text-color-lightest-rgb);
  --text-color-dropdown-menu-rgb: var(--text-color-lightest-rgb);
  --text-color-input-control-rgb: var(--text-color-lightest-rgb);
  --text-color-input-placeholder-rgb: var(--text-color-dark-rgb);
  --text-color-input-label-rgb: var(--text-color-light-rgb);
  --text-color-link-rgb: var(--color-primary-rgb);
  --text-color-menu-button-rgb: var(--text-color-lighter-rgb);
  --text-color-paragraph-rgb: var(--text-color-default-rgb);
  --text-color-text-rgb: var(--text-color-default-rgb);
  --text-color-title-rgb: var(--text-color-lightest-rgb);
  --text-color-sub-title-rgb: var(--text-color-default-rgb);
}
`;const v={css:x,description:"AppLab dark theme",id:"applab-dark",name:"AppLab Dark"},u=t.memo(({className:o="",children:f,theme:e,themes:g})=>{var s;const[c,b]=t.useState((s=g==null?void 0:g.find(n=>n.id===e))!=null?s:l);return t.useEffect(()=>{if(e&&g){const n=g.find(k=>k.id===e);b(n||l)}else b(l)},[e]),a.default.createElement("div",{className:`${c.id} ${o} theme-provider`},a.default.createElement(p,{theme:c}),f)}),p=d.createGlobalStyle`
  ${o=>o.theme.css};

`;r.AppLabDarkTheme=v,r.AppLabLightTheme=l,r.ThemeProvider=u,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
