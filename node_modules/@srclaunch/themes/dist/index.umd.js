(function(tr,U){typeof exports=="object"&&typeof module<"u"?U(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],U):(tr=typeof globalThis<"u"?globalThis:tr||self,U(tr["@srclaunch/themes"]={},tr.r$1))})(this,function(tr,U){"use strict";function Te(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var dr=Te(U),Ie=`html,
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
`;const kr={css:Ie,description:"Default AppLab Light theme",id:"applab-light",name:"AppLab Light"};var Ee=`html,
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
  --color-default-contrast-rgb: rgb(var(--color-white-rgb));
  --color-default-contrast: var(--color-default-contrast-rgb);
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
`;const _e={css:Ee,description:"AppLab dark theme",id:"applab-dark",name:"AppLab Dark"};var Sr={exports:{}},R={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=typeof Symbol=="function"&&Symbol.for,Gr=L?Symbol.for("react.element"):60103,Hr=L?Symbol.for("react.portal"):60106,Ar=L?Symbol.for("react.fragment"):60107,Cr=L?Symbol.for("react.strict_mode"):60108,Pr=L?Symbol.for("react.profiler"):60114,zr=L?Symbol.for("react.provider"):60109,Rr=L?Symbol.for("react.context"):60110,Ur=L?Symbol.for("react.async_mode"):60111,Or=L?Symbol.for("react.concurrent_mode"):60111,Tr=L?Symbol.for("react.forward_ref"):60112,Ir=L?Symbol.for("react.suspense"):60113,$e=L?Symbol.for("react.suspense_list"):60120,Er=L?Symbol.for("react.memo"):60115,_r=L?Symbol.for("react.lazy"):60116,Ne=L?Symbol.for("react.block"):60121,je=L?Symbol.for("react.fundamental"):60117,De=L?Symbol.for("react.responder"):60118,Le=L?Symbol.for("react.scope"):60119;function W(r){if(typeof r=="object"&&r!==null){var t=r.$$typeof;switch(t){case Gr:switch(r=r.type,r){case Ur:case Or:case Ar:case Pr:case Cr:case Ir:return r;default:switch(r=r&&r.$$typeof,r){case Rr:case Tr:case _r:case Er:case zr:return r;default:return t}}case Hr:return t}}}function oe(r){return W(r)===Or}R.AsyncMode=Ur,R.ConcurrentMode=Or,R.ContextConsumer=Rr,R.ContextProvider=zr,R.Element=Gr,R.ForwardRef=Tr,R.Fragment=Ar,R.Lazy=_r,R.Memo=Er,R.Portal=Hr,R.Profiler=Pr,R.StrictMode=Cr,R.Suspense=Ir,R.isAsyncMode=function(r){return oe(r)||W(r)===Ur},R.isConcurrentMode=oe,R.isContextConsumer=function(r){return W(r)===Rr},R.isContextProvider=function(r){return W(r)===zr},R.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===Gr},R.isForwardRef=function(r){return W(r)===Tr},R.isFragment=function(r){return W(r)===Ar},R.isLazy=function(r){return W(r)===_r},R.isMemo=function(r){return W(r)===Er},R.isPortal=function(r){return W(r)===Hr},R.isProfiler=function(r){return W(r)===Pr},R.isStrictMode=function(r){return W(r)===Cr},R.isSuspense=function(r){return W(r)===Ir},R.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===Ar||r===Or||r===Pr||r===Cr||r===Ir||r===$e||typeof r=="object"&&r!==null&&(r.$$typeof===_r||r.$$typeof===Er||r.$$typeof===zr||r.$$typeof===Rr||r.$$typeof===Tr||r.$$typeof===je||r.$$typeof===De||r.$$typeof===Le||r.$$typeof===Ne)},R.typeOf=W,Sr.exports=R;function Me(r){function t(b,s,u,p,n){for(var C=0,c=0,$=0,P=0,O,v,M=0,Y=0,S,H=S=O=0,z=0,F=0,xr=0,G=0,Fr=u.length,wr=Fr-1,q,h="",j="",ee="",te="",lr;z<Fr;){if(v=u.charCodeAt(z),z===wr&&c+P+$+C!==0&&(c!==0&&(v=c===47?10:47),P=$=C=0,Fr++,wr++),c+P+$+C===0){if(z===wr&&(0<F&&(h=h.replace(T,"")),0<h.trim().length)){switch(v){case 32:case 9:case 59:case 13:case 10:break;default:h+=u.charAt(z)}v=59}switch(v){case 123:for(h=h.trim(),O=h.charCodeAt(0),S=1,G=++z;z<Fr;){switch(v=u.charCodeAt(z)){case 123:S++;break;case 125:S--;break;case 47:switch(v=u.charCodeAt(z+1)){case 42:case 47:r:{for(H=z+1;H<wr;++H)switch(u.charCodeAt(H)){case 47:if(v===42&&u.charCodeAt(H-1)===42&&z+2!==H){z=H+1;break r}break;case 10:if(v===47){z=H+1;break r}}z=H}}break;case 91:v++;case 40:v++;case 34:case 39:for(;z++<wr&&u.charCodeAt(z)!==v;);}if(S===0)break;z++}switch(S=u.substring(G,z),O===0&&(O=(h=h.replace(x,"").trim()).charCodeAt(0)),O){case 64:switch(0<F&&(h=h.replace(T,"")),v=h.charCodeAt(1),v){case 100:case 109:case 115:case 45:F=s;break;default:F=vr}if(S=t(s,F,S,v,n+1),G=S.length,0<Z&&(F=e(vr,h,xr),lr=g(3,S,F,s,K,V,G,v,n,p),h=F.join(""),lr!==void 0&&(G=(S=lr.trim()).length)===0&&(v=0,S="")),0<G)switch(v){case 115:h=h.replace(nr,l);case 100:case 109:case 45:S=h+"{"+S+"}";break;case 107:h=h.replace(k,"$1 $2"),S=h+"{"+S+"}",S=B===1||B===2&&i("@"+S,3)?"@-webkit-"+S+"@"+S:"@"+S;break;default:S=h+S,p===112&&(S=(j+=S,""))}else S="";break;default:S=t(s,e(s,h,xr),S,p,n+1)}ee+=S,S=xr=F=H=O=0,h="",v=u.charCodeAt(++z);break;case 125:case 59:if(h=(0<F?h.replace(T,""):h).trim(),1<(G=h.length))switch(H===0&&(O=h.charCodeAt(0),O===45||96<O&&123>O)&&(G=(h=h.replace(" ",":")).length),0<Z&&(lr=g(1,h,s,b,K,V,j.length,p,n,p))!==void 0&&(G=(h=lr.trim()).length)===0&&(h="\0\0"),O=h.charCodeAt(0),v=h.charCodeAt(1),O){case 0:break;case 64:if(v===105||v===99){te+=h+u.charAt(z);break}default:h.charCodeAt(G-1)!==58&&(j+=a(h,O,v,h.charCodeAt(2)))}xr=F=H=O=0,h="",v=u.charCodeAt(++z)}}switch(v){case 13:case 10:c===47?c=0:1+O===0&&p!==107&&0<h.length&&(F=1,h+="\0"),0<Z*br&&g(0,h,s,b,K,V,j.length,p,n,p),V=1,K++;break;case 59:case 125:if(c+P+$+C===0){V++;break}default:switch(V++,q=u.charAt(z),v){case 9:case 32:if(P+C+c===0)switch(M){case 44:case 58:case 9:case 32:q="";break;default:v!==32&&(q=" ")}break;case 0:q="\\0";break;case 12:q="\\f";break;case 11:q="\\v";break;case 38:P+c+C===0&&(F=xr=1,q="\f"+q);break;case 108:if(P+c+C+er===0&&0<H)switch(z-H){case 2:M===112&&u.charCodeAt(z-3)===58&&(er=M);case 8:Y===111&&(er=Y)}break;case 58:P+c+C===0&&(H=z);break;case 44:c+$+P+C===0&&(F=1,q+="\r");break;case 34:case 39:c===0&&(P=P===v?0:P===0?v:P);break;case 91:P+c+$===0&&C++;break;case 93:P+c+$===0&&C--;break;case 41:P+c+C===0&&$--;break;case 40:if(P+c+C===0){if(O===0)switch(2*M+3*Y){case 533:break;default:O=1}$++}break;case 64:c+$+P+C+H+S===0&&(S=1);break;case 42:case 47:if(!(0<P+C+$))switch(c){case 0:switch(2*v+3*u.charCodeAt(z+1)){case 235:c=47;break;case 220:G=z,c=42}break;case 42:v===47&&M===42&&G+2!==z&&(u.charCodeAt(G+2)===33&&(j+=u.substring(G,z+1)),q="",c=0)}}c===0&&(h+=q)}Y=M,M=v,z++}if(G=j.length,0<G){if(F=s,0<Z&&(lr=g(2,j,F,b,K,V,G,p,n,p),lr!==void 0&&(j=lr).length===0))return te+j+ee;if(j=F.join(",")+"{"+j+"}",B*er!==0){switch(B!==2||i(j,2)||(er=0),er){case 111:j=j.replace(_,":-moz-$1")+j;break;case 112:j=j.replace(D,"::-webkit-input-$1")+j.replace(D,"::-moz-$1")+j.replace(D,":-ms-input-$1")+j}er=0}}return te+j+ee}function e(b,s,u){var p=s.trim().split(m);s=p;var n=p.length,C=b.length;switch(C){case 0:case 1:var c=0;for(b=C===0?"":b[0]+" ";c<n;++c)s[c]=o(b,s[c],u).trim();break;default:var $=c=0;for(s=[];c<n;++c)for(var P=0;P<C;++P)s[$++]=o(b[P]+" ",p[c],u).trim()}return s}function o(b,s,u){var p=s.charCodeAt(0);switch(33>p&&(p=(s=s.trim()).charCodeAt(0)),p){case 38:return s.replace(I,"$1"+b.trim());case 58:return b.trim()+s.replace(I,"$1"+b.trim());default:if(0<1*u&&0<s.indexOf("\f"))return s.replace(I,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+s}function a(b,s,u,p){var n=b+";",C=2*s+3*u+4*p;if(C===944){b=n.indexOf(":",9)+1;var c=n.substring(b,n.length-1).trim();return c=n.substring(0,b).trim()+c+";",B===1||B===2&&i(c,1)?"-webkit-"+c+c:c}if(B===0||B===2&&!i(n,1))return n;switch(C){case 1015:return n.charCodeAt(10)===97?"-webkit-"+n+n:n;case 951:return n.charCodeAt(3)===116?"-webkit-"+n+n:n;case 963:return n.charCodeAt(5)===110?"-webkit-"+n+n:n;case 1009:if(n.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+n+n;case 978:return"-webkit-"+n+"-moz-"+n+n;case 1019:case 983:return"-webkit-"+n+"-moz-"+n+"-ms-"+n+n;case 883:if(n.charCodeAt(8)===45)return"-webkit-"+n+n;if(0<n.indexOf("image-set(",11))return n.replace(ur,"$1-webkit-$2")+n;break;case 932:if(n.charCodeAt(4)===45)switch(n.charCodeAt(5)){case 103:return"-webkit-box-"+n.replace("-grow","")+"-webkit-"+n+"-ms-"+n.replace("grow","positive")+n;case 115:return"-webkit-"+n+"-ms-"+n.replace("shrink","negative")+n;case 98:return"-webkit-"+n+"-ms-"+n.replace("basis","preferred-size")+n}return"-webkit-"+n+"-ms-"+n+n;case 964:return"-webkit-"+n+"-ms-flex-"+n+n;case 1023:if(n.charCodeAt(8)!==99)break;return c=n.substring(n.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+c+"-webkit-"+n+"-ms-flex-pack"+c+n;case 1005:return w.test(n)?n.replace(E,":-webkit-")+n.replace(E,":-moz-")+n:n;case 1e3:switch(c=n.substring(13).trim(),s=c.indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(s)){case 226:c=n.replace(N,"tb");break;case 232:c=n.replace(N,"tb-rl");break;case 220:c=n.replace(N,"lr");break;default:return n}return"-webkit-"+n+"-ms-"+c+n;case 1017:if(n.indexOf("sticky",9)===-1)break;case 975:switch(s=(n=b).length-10,c=(n.charCodeAt(s)===33?n.substring(0,s):n).substring(b.indexOf(":",7)+1).trim(),C=c.charCodeAt(0)+(c.charCodeAt(7)|0)){case 203:if(111>c.charCodeAt(8))break;case 115:n=n.replace(c,"-webkit-"+c)+";"+n;break;case 207:case 102:n=n.replace(c,"-webkit-"+(102<C?"inline-":"")+"box")+";"+n.replace(c,"-webkit-"+c)+";"+n.replace(c,"-ms-"+c+"box")+";"+n}return n+";";case 938:if(n.charCodeAt(5)===45)switch(n.charCodeAt(6)){case 105:return c=n.replace("-items",""),"-webkit-"+n+"-webkit-box-"+c+"-ms-flex-"+c+n;case 115:return"-webkit-"+n+"-ms-flex-item-"+n.replace(X,"")+n;default:return"-webkit-"+n+"-ms-flex-line-pack"+n.replace("align-content","").replace(X,"")+n}break;case 973:case 989:if(n.charCodeAt(3)!==45||n.charCodeAt(4)===122)break;case 931:case 953:if(ar.test(b)===!0)return(c=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?a(b.replace("stretch","fill-available"),s,u,p).replace(":fill-available",":stretch"):n.replace(c,"-webkit-"+c)+n.replace(c,"-moz-"+c.replace("fill-",""))+n;break;case 962:if(n="-webkit-"+n+(n.charCodeAt(5)===102?"-ms-"+n:"")+n,u+p===211&&n.charCodeAt(13)===105&&0<n.indexOf("transform",10))return n.substring(0,n.indexOf(";",27)+1).replace(A,"$1-webkit-$2")+n}return n}function i(b,s){var u=b.indexOf(s===1?":":"{"),p=b.substring(0,s!==3?u:10);return u=b.substring(u+1,b.length-1),mr(s!==2?p:p.replace(rr,"$1"),u,s)}function l(b,s){var u=a(s,s.charCodeAt(0),s.charCodeAt(1),s.charCodeAt(2));return u!==s+";"?u.replace(gr," or ($1)").substring(4):"("+s+")"}function g(b,s,u,p,n,C,c,$,P,O){for(var v=0,M=s,Y;v<Z;++v)switch(Y=Q[v].call(y,b,M,u,p,n,C,c,$,P,O)){case void 0:case!1:case!0:case null:break;default:M=Y}if(M!==s)return M}function f(b){switch(b){case void 0:case null:Z=Q.length=0;break;default:if(typeof b=="function")Q[Z++]=b;else if(typeof b=="object")for(var s=0,u=b.length;s<u;++s)f(b[s]);else br=!!b|0}return f}function d(b){return b=b.prefix,b!==void 0&&(mr=null,b?typeof b!="function"?B=1:(B=2,mr=b):B=0),d}function y(b,s){var u=b;if(33>u.charCodeAt(0)&&(u=u.trim()),yr=u,u=[yr],0<Z){var p=g(-1,s,u,u,K,V,0,0,0,0);p!==void 0&&typeof p=="string"&&(s=p)}var n=t(vr,u,s,0,0);return 0<Z&&(p=g(-2,n,u,u,K,V,n.length,0,0,0),p!==void 0&&(n=p)),yr="",er=0,V=K=1,n}var x=/^\0+/g,T=/[\0\r\f]/g,E=/: */g,w=/zoo|gra/,A=/([,: ])(transform)/g,m=/,\r+?/g,I=/([\t\r\n ])*\f?&/g,k=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,_=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,nr=/\(\s*(.*)\s*\)/g,gr=/([\s\S]*?);/g,X=/-self|flex-/g,rr=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ar=/stretch|:\s*\w+\-(?:conte|avail)/,ur=/([^-])(image-set\()/,V=1,K=1,er=0,B=1,vr=[],Q=[],Z=0,mr=null,br=0,yr="";return y.use=f,y.set=d,r!==void 0&&d(r),y}var Fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ge(r){var t=Object.create(null);return function(e){return t[e]===void 0&&(t[e]=r(e)),t[e]}}var He=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ne=Ge(function(r){return He.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),Br=Sr.exports,Ue={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Be={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ye={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ae={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yr={};Yr[Br.ForwardRef]=Ye,Yr[Br.Memo]=ae;function le(r){return Br.isMemo(r)?ae:Yr[r.$$typeof]||Ue}var We=Object.defineProperty,Ve=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,Xe=Object.getOwnPropertyDescriptor,Ze=Object.getPrototypeOf,ce=Object.prototype;function se(r,t,e){if(typeof t!="string"){if(ce){var o=Ze(t);o&&o!==ce&&se(r,o,e)}var a=Ve(t);ie&&(a=a.concat(ie(t)));for(var i=le(r),l=le(t),g=0;g<a.length;++g){var f=a[g];if(!Be[f]&&!(e&&e[f])&&!(l&&l[f])&&!(i&&i[f])){var d=Xe(t,f);try{We(r,f,d)}catch{}}}}return r}var Ke=se;function J(){return(J=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r}).apply(this,arguments)}var ge=function(r,t){for(var e=[r[0]],o=0,a=t.length;o<a;o+=1)e.push(t[o],r[o+1]);return e},Wr=function(r){return r!==null&&typeof r=="object"&&(r.toString?r.toString():Object.prototype.toString.call(r))==="[object Object]"&&!Sr.exports.typeOf(r)},$r=Object.freeze([]),or=Object.freeze({});function hr(r){return typeof r=="function"}function ue(r){return r.displayName||r.name||"Component"}function Vr(r){return r&&typeof r.styledComponentId=="string"}var cr=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xr=typeof window<"u"&&"HTMLElement"in window,Qe=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),qe={};function fr(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];throw new Error("An error occurred. See https://git.io/JUIaE#"+r+" for more information."+(e.length>0?" Args: "+e.join(", "):""))}var Je=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=r.prototype;return t.indexOfGroup=function(e){for(var o=0,a=0;a<e;a++)o+=this.groupSizes[a];return o},t.insertRules=function(e,o){if(e>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,l=i;e>=l;)(l<<=1)<0&&fr(16,""+e);this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var g=i;g<l;g++)this.groupSizes[g]=0}for(var f=this.indexOfGroup(e+1),d=0,y=o.length;d<y;d++)this.tag.insertRule(f,o[d])&&(this.groupSizes[e]++,f++)},t.clearGroup=function(e){if(e<this.length){var o=this.groupSizes[e],a=this.indexOfGroup(e),i=a+o;this.groupSizes[e]=0;for(var l=a;l<i;l++)this.tag.deleteRule(a)}},t.getGroup=function(e){var o="";if(e>=this.length||this.groupSizes[e]===0)return o;for(var a=this.groupSizes[e],i=this.indexOfGroup(e),l=i+a,g=i;g<l;g++)o+=this.tag.getRule(g)+`/*!sc*/
`;return o},r}(),Nr=new Map,jr=new Map,pr=1,Dr=function(r){if(Nr.has(r))return Nr.get(r);for(;jr.has(pr);)pr++;var t=pr++;return Nr.set(r,t),jr.set(t,r),t},rt=function(r){return jr.get(r)},et=function(r,t){t>=pr&&(pr=t+1),Nr.set(r,t),jr.set(t,r)},tt="style["+cr+'][data-styled-version="5.3.5"]',ot=new RegExp("^"+cr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nt=function(r,t,e){for(var o,a=e.split(","),i=0,l=a.length;i<l;i++)(o=a[i])&&r.registerName(t,o)},at=function(r,t){for(var e=(t.textContent||"").split(`/*!sc*/
`),o=[],a=0,i=e.length;a<i;a++){var l=e[a].trim();if(l){var g=l.match(ot);if(g){var f=0|parseInt(g[1],10),d=g[2];f!==0&&(et(d,f),nt(r,d,g[3]),r.getTag().insertRules(f,o)),o.length=0}else o.push(l)}}},lt=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},be=function(r){var t=document.head,e=r||t,o=document.createElement("style"),a=function(g){for(var f=g.childNodes,d=f.length;d>=0;d--){var y=f[d];if(y&&y.nodeType===1&&y.hasAttribute(cr))return y}}(e),i=a!==void 0?a.nextSibling:null;o.setAttribute(cr,"active"),o.setAttribute("data-styled-version","5.3.5");var l=lt();return l&&o.setAttribute("nonce",l),e.insertBefore(o,i),o},it=function(){function r(e){var o=this.element=be(e);o.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,l=0,g=i.length;l<g;l++){var f=i[l];if(f.ownerNode===a)return f}fr(17)}(o),this.length=0}var t=r.prototype;return t.insertRule=function(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var o=this.sheet.cssRules[e];return o!==void 0&&typeof o.cssText=="string"?o.cssText:""},r}(),ct=function(){function r(e){var o=this.element=be(e);this.nodes=o.childNodes,this.length=0}var t=r.prototype;return t.insertRule=function(e,o){if(e<=this.length&&e>=0){var a=document.createTextNode(o),i=this.nodes[e];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),st=function(){function r(e){this.rules=[],this.length=0}var t=r.prototype;return t.insertRule=function(e,o){return e<=this.length&&(this.rules.splice(e,0,o),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),de=Xr,gt={isServer:!Xr,useCSSOMInjection:!Qe},Lr=function(){function r(e,o,a){e===void 0&&(e=or),o===void 0&&(o={}),this.options=J({},gt,{},e),this.gs=o,this.names=new Map(a),this.server=!!e.isServer,!this.server&&Xr&&de&&(de=!1,function(i){for(var l=document.querySelectorAll(tt),g=0,f=l.length;g<f;g++){var d=l[g];d&&d.getAttribute(cr)!=="active"&&(at(i,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}r.registerId=function(e){return Dr(e)};var t=r.prototype;return t.reconstructWithOptions=function(e,o){return o===void 0&&(o=!0),new r(J({},this.options,{},e),this.gs,o&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(o=this.options).isServer,i=o.useCSSOMInjection,l=o.target,e=a?new st(l):i?new it(l):new ct(l),new Je(e)));var e,o,a,i,l},t.hasNameForId=function(e,o){return this.names.has(e)&&this.names.get(e).has(o)},t.registerName=function(e,o){if(Dr(e),this.names.has(e))this.names.get(e).add(o);else{var a=new Set;a.add(o),this.names.set(e,a)}},t.insertRules=function(e,o,a){this.registerName(e,o),this.getTag().insertRules(Dr(e),a)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Dr(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var o=e.getTag(),a=o.length,i="",l=0;l<a;l++){var g=rt(l);if(g!==void 0){var f=e.names.get(g),d=o.getGroup(l);if(f&&d&&f.size){var y=cr+".g"+l+'[id="'+g+'"]',x="";f!==void 0&&f.forEach(function(T){T.length>0&&(x+=T+",")}),i+=""+d+y+'{content:"'+x+`"}/*!sc*/
`}}}return i}(this)},r}(),ut=/(a)(d)/gi,he=function(r){return String.fromCharCode(r+(r>25?39:97))};function Zr(r){var t,e="";for(t=Math.abs(r);t>52;t=t/52|0)e=he(t%52)+e;return(he(t%52)+e).replace(ut,"$1-$2")}var sr=function(r,t){for(var e=t.length;e;)r=33*r^t.charCodeAt(--e);return r},fe=function(r){return sr(5381,r)};function pe(r){for(var t=0;t<r.length;t+=1){var e=r[t];if(hr(e)&&!Vr(e))return!1}return!0}var bt=fe("5.3.5"),dt=function(){function r(t,e,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&pe(t),this.componentId=e,this.baseHash=sr(bt,e),this.baseStyle=o,Lr.registerId(e)}return r.prototype.generateAndInjectStyles=function(t,e,o){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,e,o)),this.isStatic&&!o.hash)if(this.staticRulesId&&e.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var l=ir(this.rules,t,e,o).join(""),g=Zr(sr(this.baseHash,l)>>>0);if(!e.hasNameForId(a,g)){var f=o(l,"."+g,void 0,a);e.insertRules(a,g,f)}i.push(g),this.staticRulesId=g}else{for(var d=this.rules.length,y=sr(this.baseHash,o.hash),x="",T=0;T<d;T++){var E=this.rules[T];if(typeof E=="string")x+=E;else if(E){var w=ir(E,t,e,o),A=Array.isArray(w)?w.join(""):w;y=sr(y,A+T),x+=A}}if(x){var m=Zr(y>>>0);if(!e.hasNameForId(a,m)){var I=o(x,"."+m,void 0,a);e.insertRules(a,m,I)}i.push(m)}}return i.join(" ")},r}(),ht=/^\s*\/\/.*$/gm,ft=[":","[",".","#"];function pt(r){var t,e,o,a,i=r===void 0?or:r,l=i.options,g=l===void 0?or:l,f=i.plugins,d=f===void 0?$r:f,y=new Me(g),x=[],T=function(A){function m(I){if(I)try{A(I+"}")}catch{}}return function(I,k,D,_,N,nr,gr,X,rr,ar){switch(I){case 1:if(rr===0&&k.charCodeAt(0)===64)return A(k+";"),"";break;case 2:if(X===0)return k+"/*|*/";break;case 3:switch(X){case 102:case 112:return A(D[0]+k),"";default:return k+(ar===0?"/*|*/":"")}case-2:k.split("/*|*/}").forEach(m)}}}(function(A){x.push(A)}),E=function(A,m,I){return m===0&&ft.indexOf(I[e.length])!==-1||I.match(a)?A:"."+t};function w(A,m,I,k){k===void 0&&(k="&");var D=A.replace(ht,""),_=m&&I?I+" "+m+" { "+D+" }":D;return t=k,e=m,o=new RegExp("\\"+e+"\\b","g"),a=new RegExp("(\\"+e+"\\b){2,}"),y(I||!m?"":m,_)}return y.use([].concat(d,[function(A,m,I){A===2&&I.length&&I[0].lastIndexOf(e)>0&&(I[0]=I[0].replace(o,E))},T,function(A){if(A===-2){var m=x;return x=[],m}}])),w.hash=d.length?d.reduce(function(A,m){return m.name||fr(15),sr(A,m.name)},5381).toString():"",w}var ve=dr.default.createContext();ve.Consumer;var me=dr.default.createContext(),vt=(me.Consumer,new Lr),Kr=pt();function ye(){return U.useContext(ve)||vt}function xe(){return U.useContext(me)||Kr}var mt=function(){function r(t,e){var o=this;this.inject=function(a,i){i===void 0&&(i=Kr);var l=o.name+i.hash;a.hasNameForId(o.id,l)||a.insertRules(o.id,l,i(o.rules,l,"@keyframes"))},this.toString=function(){return fr(12,String(o.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=e}return r.prototype.getName=function(t){return t===void 0&&(t=Kr),this.name+t.hash},r}(),yt=/([A-Z])/,xt=/([A-Z])/g,wt=/^ms-/,kt=function(r){return"-"+r.toLowerCase()};function we(r){return yt.test(r)?r.replace(xt,kt).replace(wt,"-ms-"):r}var ke=function(r){return r==null||r===!1||r===""};function ir(r,t,e,o){if(Array.isArray(r)){for(var a,i=[],l=0,g=r.length;l<g;l+=1)(a=ir(r[l],t,e,o))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(ke(r))return"";if(Vr(r))return"."+r.styledComponentId;if(hr(r)){if(typeof(d=r)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return r;var f=r(t);return ir(f,t,e,o)}var d;return r instanceof mt?e?(r.inject(e,o),r.getName(o)):r:Wr(r)?function y(x,T){var E,w,A=[];for(var m in x)x.hasOwnProperty(m)&&!ke(x[m])&&(Array.isArray(x[m])&&x[m].isCss||hr(x[m])?A.push(we(m)+":",x[m],";"):Wr(x[m])?A.push.apply(A,y(x[m],m)):A.push(we(m)+": "+(E=m,(w=x[m])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||E in Fe?String(w).trim():w+"px")+";"));return T?[T+" {"].concat(A,["}"]):A}(r):r.toString()}var Se=function(r){return Array.isArray(r)&&(r.isCss=!0),r};function Ae(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return hr(r)||Wr(r)?Se(ir(ge($r,[r].concat(e)))):e.length===0&&r.length===1&&typeof r[0]=="string"?r:Se(ir(ge(r,e)))}var Ce=function(r,t,e){return e===void 0&&(e=or),r.theme!==e.theme&&r.theme||t||e.theme},St=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,At=/(^-|-$)/g;function Qr(r){return r.replace(St,"-").replace(At,"")}var Pe=function(r){return Zr(fe(r)>>>0)};function Mr(r){return typeof r=="string"&&!0}var qr=function(r){return typeof r=="function"||typeof r=="object"&&r!==null&&!Array.isArray(r)},Ct=function(r){return r!=="__proto__"&&r!=="constructor"&&r!=="prototype"};function Pt(r,t,e){var o=r[e];qr(t)&&qr(o)?ze(o,t):r[e]=t}function ze(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];for(var a=0,i=e;a<i.length;a++){var l=i[a];if(qr(l))for(var g in l)Ct(g)&&Pt(r,l[g],g)}return r}var Jr=dr.default.createContext();Jr.Consumer;var re={};function Re(r,t,e){var o=Vr(r),a=!Mr(r),i=t.attrs,l=i===void 0?$r:i,g=t.componentId,f=g===void 0?function(k,D){var _=typeof k!="string"?"sc":Qr(k);re[_]=(re[_]||0)+1;var N=_+"-"+Pe("5.3.5"+_+re[_]);return D?D+"-"+N:N}(t.displayName,t.parentComponentId):g,d=t.displayName,y=d===void 0?function(k){return Mr(k)?"styled."+k:"Styled("+ue(k)+")"}(r):d,x=t.displayName&&t.componentId?Qr(t.displayName)+"-"+t.componentId:t.componentId||f,T=o&&r.attrs?Array.prototype.concat(r.attrs,l).filter(Boolean):l,E=t.shouldForwardProp;o&&r.shouldForwardProp&&(E=t.shouldForwardProp?function(k,D,_){return r.shouldForwardProp(k,D,_)&&t.shouldForwardProp(k,D,_)}:r.shouldForwardProp);var w,A=new dt(e,x,o?r.componentStyle:void 0),m=A.isStatic&&l.length===0,I=function(k,D){return function(_,N,nr,gr){var X=_.attrs,rr=_.componentStyle,ar=_.defaultProps,ur=_.foldedComponentIds,V=_.shouldForwardProp,K=_.styledComponentId,er=_.target,B=function(p,n,C){p===void 0&&(p=or);var c=J({},n,{theme:p}),$={};return C.forEach(function(P){var O,v,M,Y=P;for(O in hr(Y)&&(Y=Y(c)),Y)c[O]=$[O]=O==="className"?(v=$[O],M=Y[O],v&&M?v+" "+M:v||M):Y[O]}),[c,$]}(Ce(N,U.useContext(Jr),ar)||or,N,X),vr=B[0],Q=B[1],Z=function(p,n,C,c){var $=ye(),P=xe(),O=n?p.generateAndInjectStyles(or,$,P):p.generateAndInjectStyles(C,$,P);return O}(rr,gr,vr),mr=nr,br=Q.$as||N.$as||Q.as||N.as||er,yr=Mr(br),b=Q!==N?J({},N,{},Q):N,s={};for(var u in b)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?s.as=b[u]:(V?V(u,ne,br):!yr||ne(u))&&(s[u]=b[u]));return N.style&&Q.style!==N.style&&(s.style=J({},N.style,{},Q.style)),s.className=Array.prototype.concat(ur,K,Z!==K?Z:null,N.className,Q.className).filter(Boolean).join(" "),s.ref=mr,U.createElement(br,s)}(w,k,D,m)};return I.displayName=y,(w=dr.default.forwardRef(I)).attrs=T,w.componentStyle=A,w.displayName=y,w.shouldForwardProp=E,w.foldedComponentIds=o?Array.prototype.concat(r.foldedComponentIds,r.styledComponentId):$r,w.styledComponentId=x,w.target=o?r.target:r,w.withComponent=function(k){var D=t.componentId,_=function(nr,gr){if(nr==null)return{};var X,rr,ar={},ur=Object.keys(nr);for(rr=0;rr<ur.length;rr++)X=ur[rr],gr.indexOf(X)>=0||(ar[X]=nr[X]);return ar}(t,["componentId"]),N=D&&D+"-"+(Mr(k)?k:Qr(ue(k)));return Re(k,J({},_,{attrs:T,componentId:N}),e)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=o?ze({},r.defaultProps,k):k}}),w.toString=function(){return"."+w.styledComponentId},a&&Ke(w,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Oe=function(r){return function t(e,o,a){if(a===void 0&&(a=or),!Sr.exports.isValidElementType(o))return fr(1,String(o));var i=function(){return e(o,a,Ae.apply(void 0,arguments))};return i.withConfig=function(l){return t(e,o,J({},a,{},l))},i.attrs=function(l){return t(e,o,J({},a,{attrs:Array.prototype.concat(a.attrs,l).filter(Boolean)}))},i}(Re,r)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(r){Oe[r]=Oe(r)});var zt=function(){function r(e,o){this.rules=e,this.componentId=o,this.isStatic=pe(e),Lr.registerId(this.componentId+1)}var t=r.prototype;return t.createStyles=function(e,o,a,i){var l=i(ir(this.rules,o,a,i).join(""),""),g=this.componentId+e;a.insertRules(g,g,l)},t.removeStyles=function(e,o){o.clearRules(this.componentId+e)},t.renderStyles=function(e,o,a,i){e>2&&Lr.registerId(this.componentId+e),this.removeStyles(e,a),this.createStyles(e,o,a,i)},r}();function Rt(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];var a=Ae.apply(void 0,[r].concat(e)),i="sc-global-"+Pe(JSON.stringify(a)),l=new zt(a,i);function g(d){var y=ye(),x=xe(),T=U.useContext(Jr),E=U.useRef(y.allocateGSInstance(i)).current;return y.server&&f(E,d,y,T,x),U.useLayoutEffect(function(){if(!y.server)return f(E,d,y,T,x),function(){return l.removeStyles(E,y)}},[E,d,y,T,x]),null}function f(d,y,x,T,E){if(l.isStatic)l.renderStyles(d,qe,x,E);else{var w=J({},y,{theme:Ce(y,T,g.defaultProps)});l.renderStyles(d,w,x,E)}}return dr.default.memo(g)}const Ot=U.memo(({className:r="",children:t,theme:e,themes:o})=>{const[a,i]=U.useState(o?.find(l=>l.id===e)??kr);return U.useEffect(()=>{if(e&&o){const l=o.find(g=>g.id===e);i(l||kr)}else i(kr)},[e]),React.createElement("div",{className:`${a.id} ${r} theme-provider`,style:{display:"flex",flexGrow:1,overflow:"hidden"}},React.createElement(Tt,{theme:a}),t)}),Tt=Rt`
  ${r=>r.theme.css};

`;tr.AppLabDarkTheme=_e,tr.AppLabLightTheme=kr,tr.ThemeProvider=Ot,Object.defineProperties(tr,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
