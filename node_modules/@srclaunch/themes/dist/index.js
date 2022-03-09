import require$$0, { memo, useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
var styles$1 = "html,\nbody,\n#root {\n  background-color: var(--bg-color-default);\n\n  /* Proportions */\n  --amount-none: 0px;\n  --amount-least: 5.5px;\n  --amount-less: 11px;\n  --amount-default: 16.5px;\n  --amount-more: 22px;\n  --amount-most: 27.5px;\n  --amount-all: 33px;\n\n  --size-smallest: 10px;\n  --size-smaller: 14px;\n  --size-small: 24px;\n  --size-default: 32px;\n  --size-large: 42px;\n  --size-larger: 52px;\n  --size-largest: 56px;\n\n  /* Colors */\n  --color-primary-rgb: 76, 62, 196;\n  --color-primary: rgb(var(--color-primary-rgb));\n  --color-primary-contrast-rgb: 255, 255, 255;\n  --color-primary-contrast: rgb(var(--color-primary-contrast-rgb));\n  --color-default-rgb: var(--color-black-rgb);\n  --color-default: rgb(var(--color-default-rgb));\n  --color-default-contrast-rgb: var(--color-default-rgb);\n  --color-default-contrast: var(--color-default-rgb);\n  --color-secondary-rgb: 230, 232, 235;\n  --color-secondary: rgb(var(--color-secondary-rgb));\n  --color-secondary-contrast-rgb: 35, 37, 40;\n  --color-secondary-contrast: rgb(var(--color-secondary-contrast-rgb));\n  --color-black-rgb: 50, 52, 55;\n  --color-black: rgb(var(--color-black-rgb));\n  --color-black-contrast-rgb: var(--color-white-rgb);\n  --color-black-contrast: rgb(var(--color-black-contrast-rgb));\n  --color-white-rgb: 238, 240, 243;\n  --color-white: rgb(var(--color-white-rgb));\n  --color-white-contrast-rgb: var(--color-white-rgb);\n  --color-white-contrast: rgb(var(--color-white-contrast-rgb));\n  --color-error-rgb: 236, 79, 79;\n  --color-error: rgb(var(--color-error-rgb));\n  --color-error-contrast-rgb: var(--color-white-rgb);\n  --color-error-contrast: rgb(var(--color-error-contrast-rgb));\n  --color-info-rgb: 15, 193, 223;\n  --color-info: rgb(var(--color-info-rgb));\n  --color-info-contrast-rgb: var(--color-white-rgb);\n  --color-info-contrast: rgb(var(--color-info-contrast-rgb));\n  --color-success-rgb: 131, 210, 126;\n  --color-success: rgb(var(--color-success-rgb));\n  --color-success-contrast-rgb: var(--color-white-rgb);\n  --color-success-contrast: rgb(var(--color-success-contrast-rgb));\n  --color-warning-rgb: 255, 209, 0;\n  --color-warning: rgb(var(--color-warning-rgb));\n  --color-warning-contrast-rgb: var(--color-white-rgb);\n  --color-warning-contrast: rgb(var(--color-warning-contrast-rgb));\n\n  --bg-color-lightest-rgb: 245, 245, 245;\n  --bg-color-lightest: rgb(var(--bg-color-lightest-rgb));\n  --bg-color-lighter-rgb: 235, 235, 235;\n  --bg-color-lighter: rgb(var(--bg-color-lighter-rgb));\n  --bg-color-light-rgb: 225, 225, 225;\n  --bg-color-light: rgb(var(--bg-color-light-rgb));\n  --bg-color-default-rgb: 220, 220, 220;\n  --bg-color-default: rgb(var(--bg-color-default-rgb));\n  --bg-color-dark-rgb: 200, 200, 200;\n  --bg-color-dark: rgb(var(--bg-color-dark-rgb));\n  --bg-color-darker-rgb: 190, 190, 190;\n  --bg-color-darker: rgb(var(--bg-color-darker-rgb));\n  --bg-color-darkest-rgb: 180, 180, 180;\n  --bg-color-darkest: rgb(var(--bg-color-darkest-rgb));\n\n  --border-color-lightest-rgb: 240, 243, 247;\n  --border-color-lightest: rgb(var(--border-color-lightest-rgb));\n  --border-color-lighter-rgb: 230, 233, 237;\n  --border-color-lighter: rgb(var(--border-color-lighter-rgb));\n  --border-color-light-rgb: 220, 223, 227;\n  --border-color-light: rgb(var(--border-color-light-rgb));\n  --border-color-default-rgb: 210, 213, 217;\n  --border-color-default: rgb(var(--border-color-default-rgb));\n  --border-color-dark-rgb: 200, 203, 207;\n  --border-color-dark: rgb(var(--border-color-dark-rgb));\n  --border-color-darker-rgb: 190, 193, 197;\n  --border-color-darker: rgb(var(--border-color-darker-rgb));\n  --border-color-darkest-rgb: 180, 183, 187;\n  --border-color-darkest: rgb(var(--border-color-darkest-rgb));\n\n  --fg-color-lightest-rgb: 210, 212, 215;\n  --fg-color-lightest: rgb(var(--fg-color-lightest-rgb));\n  --fg-color-lighter-rgb: 190, 192, 195;\n  --fg-color-lighter: rgb(var(--fg-color-lighter-rgb));\n  --fg-color-light-rgb: 160, 162, 165;\n  --fg-color-light: rgb(var(--fg-color-light-rgb));\n  --fg-color-default-rgb: 130, 132, 135;\n  --fg-color-default: rgb(var(--fg-color-default-rgb));\n  --fg-color-dark-rgb: 100, 102, 105;\n  --fg-color-dark: rgb(var(--fg-color-dark-rgb));\n  --fg-color-darker-rgb: 60, 62, 65;\n  --fg-color-darker: rgb(var(--fg-color-darker-rgb));\n  --fg-color-darkest-rgb: var(--color-black-rgb);\n  --fg-color-darkest: rgb(var(--fg-color-darkest-rgb));\n\n  /* Text */\n  --text-color-lightest-rgb: var(--color-white-rgb);\n  --text-color-lightest: rgb(var(--text-color-lightest-rgb));\n  --text-color-lighter-rgb: 170, 172, 175;\n  --text-color-lighter: rgb(var(--text-color-lighter-rgb));\n  --text-color-light-rgb: 140, 142, 145;\n  --text-color-light: rgb(var(--text-color-light-rgb));\n  --text-color-default-rgb: 90, 92, 95;\n  --text-color-default: rgb(var(--text-color-default-rgb));\n  --text-color-dark-rgb: 70, 72, 75;\n  --text-color-dark: rgb(var(--text-color-dark-rgb));\n  --text-color-darker-rgb: 50, 52, 55;\n  --text-color-darker: rgb(var(--text-color-darker-rgb));\n  --text-color-darkest-rgb: var(--color-black-rgb);\n  --text-color-darkest: rgb(var(--text-color-darkest-rgb));\n\n  --text-font-button: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n  --text-font-text: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n\n  /* Text sizes */\n  --text-size-smallest: 9px;\n  --text-size-smaller: 11px;\n  --text-size-small: 12px;\n  --text-size-default: 13px;\n  --text-size-large: 18px;\n  --text-size-larger: 20px;\n  --text-size-largest: 24px;\n\n  --text-weight-least: 300;\n  --text-weight-less: 400;\n  --text-weight-default: 500;\n  --text-weight-more: 600;\n  --text-weight-most: 700;\n\n  /* Shadows */\n  --shadow-depth-lowest: inset 0 -20px 60px rgba(0, 0, 0, 0.1);\n  --shadow-depth-lower: inset 0 2px 5px rgba(0, 0, 0, 0.1);\n  --shadow-depth-low: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n  --shadow-depth-surface: none;\n  --shadow-depth-high: 0 1px 3px rgba(0, 0, 0, 0.05);\n  --shadow-depth-higher: 0 4px 27px rgba(0, 0, 0, 0.16);\n  --shadow-depth-highest: 0 10px 62px rgba(0, 0, 0, 0.1);\n\n  /* Layout */\n  --z-index-depth-lowest: -300;\n  --z-index-depth-lower: -200;\n  --z-index-depth-low: -100;\n  --z-index-depth-surface: 0;\n  --z-index-depth-high: 100;\n  --z-index-depth-higher: 200;\n  --z-index-depth-highest: 300;\n\n  /* Element styles */\n  --bg-color-card-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-close-button-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-header-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-column-headers-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-data-grid-cell-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-data-grid-row-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-dropdown-menu-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-input-control-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-menu-button-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-more-menu-rgb: var(--bg-color-default-rgb);\n  --bg-color-navigation-bar-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-navigation-menu-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-page-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-slide-panel-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-workspace-rgb: var(--bg-color-lighter-rgb);\n\n  --border-color-input-control-rgb: var(--border-color-default-rgb);\n\n  --fg-color-close-button-rgb: var(--fg-color-dark-rgb);\n  --fg-color-more-menu-rgb: var(--fg-color-dark-rgb);\n\n  --text-color-data-grid-column-headers-rgb: var(--text-color-lighter-rgb);\n  --text-color-data-grid-cell-rgb: var(--text-color-light-rgb);\n  --text-color-dropdown-menu-rgb: var(--text-color-light-rgb);\n  --text-color-input-control-rgb: var(--text-color-default-rgb);\n  --text-color-input-label-rgb: var(--text-color-light-rgb);\n  --text-color-input-placeholder-rgb: var(--text-color-lighter-rgb);\n  --text-color-link-rgb: var(--color-primary-rgb);\n  --text-color-menu-button-rgb: var(--text-color-light-rgb);\n  --text-color-paragraph-rgb: var(--text-color-lighter-rgb);\n  --text-color-text-rgb: var(--text-color-default-rgb);\n  --text-color-title-rgb: var(--text-color-dark-rgb);\n  --text-color-sub-title-rgb: var(--text-color-default-rgb);\n}\n";
const AppLabLightTheme = {
  css: styles$1,
  description: "Default AppLab Light theme",
  id: "applab-light",
  name: "AppLab Light"
};
var styles = "html,\nbody,\n#root {\n  background-color: var(--bg-color-default);\n\n  --amount-none: 0px;\n  --amount-least: 5.5px;\n  --amount-less: 11px;\n  --amount-default: 16.5px;\n  --amount-more: 22px;\n  --amount-most: 27.5px;\n  --amount-all: 33px;\n\n  --size-smallest: 10px;\n  --size-smaller: 14px;\n  --size-small: 24px;\n  --size-default: 32px;\n  --size-large: 42px;\n  --size-larger: 52px;\n  --size-largest: 56px;\n\n  /* Colors */\n  --color-primary-rgb: 76, 62, 196;\n  /* --color-primary-rgb: 128, 60, 187; */\n  /* --color-primary-rgb: 212, 23, 82; */\n  --color-primary: rgb(var(--color-primary-rgb));\n  --color-primary-contrast-rgb: 255, 255, 255;\n  --color-primary-contrast: rgb(var(--color-primary-contrast-rgb));\n  --color-default-rgb: var(--color-black-rgb);\n  --color-default: rgb(var(--color-default-rgb));\n  --color-default-contrast-rgb: var(--color-default-rgb);\n  --color-default-contrast: var(--color-default-rgb);\n  --color-secondary-rgb: var(--bg-color-lightest-rgb);\n  --color-secondary: rgb(var(--color-secondary-rgb));\n  --color-secondary-contrast-rgb: var(--color-white-rgb);\n  --color-secondary-contrast: rgb(var(--color-secondary-contrast-rgb));\n  --color-black-rgb: 35, 37, 40;\n  --color-black: rgb(var(--color-black-rgb));\n  --color-black-contrast-rgb: var(--color-white-rgb);\n  --color-black-contrast: rgb(var(--color-black-contrast-rgb));\n  --color-white-rgb: 238, 240, 243;\n  --color-white: rgb(var(--color-white-rgb));\n  --color-white-contrast-rgb: var(--color-white-rgb);\n  --color-white-contrast: rgb(var(--color-white-contrast-rgb));\n  --color-error-rgb: 236, 79, 79;\n  --color-error: rgb(var(--color-error-rgb));\n  --color-error-contrast-rgb: var(--color-white-rgb);\n  --color-error-contrast: rgb(var(--color-error-contrast-rgb));\n  --color-info-rgb: 15, 193, 223;\n  --color-info: rgb(var(--color-info-rgb));\n  --color-info-contrast-rgb: var(--color-white-rgb);\n  --color-info-contrast: rgb(var(--color-info-contrast-rgb));\n  --color-success-rgb: 131, 210, 126;\n  --color-success: rgb(var(--color-success-rgb));\n  --color-success-contrast-rgb: var(--color-white-rgb);\n  --color-success-contrast: rgb(var(--color-success-contrast-rgb));\n  --color-warning-rgb: 255, 209, 0;\n  --color-warning: rgb(var(--color-warning-rgb));\n  --color-warning-contrast-rgb: var(--color-white-rgb);\n  --color-warning-contrast: rgb(var(--color-warning-contrast-rgb));\n\n  --bg-color-lightest-rgb: 54, 54, 62;\n  --bg-color-lightest: rgb(var(--bg-color-lightest-rgb));\n  --bg-color-lighter-rgb: 48, 48, 56;\n  --bg-color-lighter: rgb(var(--bg-color-lighter-rgb));\n  --bg-color-light-rgb: 42, 42, 50;\n  --bg-color-light: rgb(var(--bg-color-light-rgb));\n  --bg-color-default-rgb: 36, 36, 44;\n  --bg-color-default: rgb(var(--bg-color-default-rgb));\n  --bg-color-dark-rgb: 30, 30, 38;\n  --bg-color-dark: rgb(var(--bg-color-dark-rgb));\n  --bg-color-darker-rgb: 24, 24, 32;\n  --bg-color-darker: rgb(var(--bg-color-darker-rgb));\n  --bg-color-darkest-rgb: 16, 16, 24;\n  --bg-color-darkest: rgb(var(--bg-color-darkest-rgb));\n\n  --border-color-lightest-rgb: 56, 56, 64;\n  --border-color-lightest: rgb(var(--border-color-lightest-rgb));\n  --border-color-lighter-rgb: 48, 48, 56;\n  --border-color-lighter: rgb(var(--border-color-lighter-rgb));\n  --border-color-light-rgb: 40, 40, 48;\n  --border-color-light: rgb(var(--border-color-light-rgb));\n  --border-color-default-rgb: 32, 32, 40;\n  --border-color-default: rgb(var(--border-color-default-rgb));\n  --border-color-dark-rgb: 24, 24, 32;\n  --border-color-dark: rgb(var(--border-color-dark-rgb));\n  --border-color-darker-rgb: 16, 16, 24;\n  --border-color-darker: rgb(var(--border-color-darker-rgb));\n  --border-color-darkest-rgb: 8, 8, 16;\n  --border-color-darkest: rgb(var(--border-color-darkest-rgb));\n\n  --fg-color-lightest-rgb: 210, 212, 215;\n  --fg-color-lightest: rgb(var(--fg-color-lightest-rgb));\n  --fg-color-lighter-rgb: 190, 192, 195;\n  --fg-color-lighter: rgb(var(--fg-color-lighter-rgb));\n  --fg-color-light-rgb: 160, 162, 165;\n  --fg-color-light: rgb(var(--fg-color-light-rgb));\n  --fg-color-default-rgb: 130, 132, 135;\n  --fg-color-default: rgb(var(--fg-color-default-rgb));\n  --fg-color-dark-rgb: 100, 102, 105;\n  --fg-color-dark: rgb(var(--fg-color-dark-rgb));\n  --fg-color-darker-rgb: 60, 62, 65;\n  --fg-color-darker: rgb(var(--fg-color-darker-rgb));\n  --fg-color-darkest-rgb: var(--color-black-rgb);\n  --fg-color-darkest: rgb(var(--fg-color-darkest-rgb));\n\n  /* Text */\n  --text-color-lightest-rgb: var(--color-white-rgb);\n  --text-color-lightest: rgb(var(--text-color-lightest-rgb));\n  --text-color-lighter-rgb: 190, 192, 195;\n  --text-color-lighter: rgb(var(--text-color-lighter-rgb));\n  --text-color-light-rgb: 140, 142, 145;\n  --text-color-light: rgb(var(--text-color-light-rgb));\n  --text-color-default-rgb: 90, 92, 95;\n  --text-color-default: rgb(var(--text-color-default-rgb));\n  --text-color-dark-rgb: 70, 72, 75;\n  --text-color-dark: rgb(var(--text-color-dark-rgb));\n  --text-color-darker-rgb: 50, 52, 55;\n  --text-color-darker: rgb(var(--text-color-darker-rgb));\n  --text-color-darkest-rgb: var(--color-black-rgb);\n  --text-color-darkest: rgb(var(--text-color-darkest-rgb));\n\n  --text-font-button: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n  --text-font-text: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n\n  /* Text sizes */\n  --text-size-smallest: 9px;\n  --text-size-smaller: 11px;\n  --text-size-small: 12px;\n  --text-size-default: 13px;\n  --text-size-large: 18px;\n  --text-size-larger: 20px;\n  --text-size-largest: 24px;\n\n  --text-weight-least: 300;\n  --text-weight-less: 400;\n  --text-weight-default: 500;\n  --text-weight-more: 600;\n  --text-weight-most: 700;\n\n  /* Shadows */\n  --shadow-depth-lowest: inset 0 20px 60px rgba(0, 0, 0, 0.05);\n  --shadow-depth-lower: inset 0 17px 25px rgba(0, 0, 0, 0.1);\n  --shadow-depth-low: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n  --shadow-depth-surface: none;\n  --shadow-depth-high: 0 1px 3px rgba(0, 0, 0, 0.13);\n  --shadow-depth-higher: 0 4px 27px rgba(0, 0, 0, 0.2);\n  --shadow-depth-highest: 0 20px 60px rgba(0, 0, 0, 0.12);\n\n  /* Layout */\n  --z-index-depth-lowest: -300;\n  --z-index-depth-lower: -200;\n  --z-index-depth-low: -100;\n  --z-index-depth-surface: 0;\n  --z-index-depth-high: 100;\n  --z-index-depth-higher: 200;\n  --z-index-depth-highest: 300;\n\n  /* --bg-color-button: rgb(); */\n\n  /* --bg-color-menu-item: rgb(); */\n  /* --bg-color-workspace: rgb(); */\n  /* --bg-color-workspace-title: rgb(); */\n\n  /* Element styles */\n  --bg-color-card-rgb: var(--bg-color-default-rgb);\n  --bg-color-close-button-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-header-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-column-headers-rgb: var(--bg-color-light-rgb);\n  --bg-color-data-grid-cell-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-data-grid-row-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-dropdown-menu-rgb: var(--bg-color-dark-rgb);\n  --bg-color-input-control-rgb: var(--bg-color-dark-rgb);\n  --bg-color-menu-button-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-more-menu-rgb: var(--bg-color-default-rgb);\n  --bg-color-navigation-bar-rgb: var(--bg-color-default-rgb);\n  --bg-color-navigation-menu-rgb: var(--bg-color-default-rgb);\n  --bg-color-page-rgb: var(--bg-color-darker-rgb);\n  --bg-color-slide-panel-rgb: var(--bg-color-light-rgb);\n  --bg-color-workspace-rgb: var(--bg-color-darker-rgb);\n\n  --border-color-input-control-rgb: var(--border-color-light-rgb);\n\n  --fg-color-close-button-rgb: var(--fg-color-light-rgb);\n  --fg-color-more-menu-rgb: var(--fg-color-light-rgb);\n\n  --text-color-data-grid-column-headers-rgb: var(--text-color-light-rgb);\n  --text-color-data-grid-cell-rgb: var(--text-color-lightest-rgb);\n  --text-color-dropdown-menu-rgb: var(--text-color-lightest-rgb);\n  --text-color-input-control-rgb: var(--text-color-lightest-rgb);\n  --text-color-input-placeholder-rgb: var(--text-color-dark-rgb);\n  --text-color-input-label-rgb: var(--text-color-light-rgb);\n  --text-color-link-rgb: var(--color-primary-rgb);\n  --text-color-menu-button-rgb: var(--text-color-lighter-rgb);\n  --text-color-paragraph-rgb: var(--text-color-default-rgb);\n  --text-color-text-rgb: var(--text-color-default-rgb);\n  --text-color-title-rgb: var(--text-color-lightest-rgb);\n  --text-color-sub-title-rgb: var(--text-color-default-rgb);\n}\n";
const AppLabDarkTheme = {
  css: styles,
  description: "AppLab dark theme",
  id: "applab-dark",
  name: "AppLab Dark"
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const ThemeProvider = memo(({
  className = "",
  children,
  theme,
  themes
}) => {
  var _a;
  const [currentTheme, setTheme] = useState((_a = themes == null ? void 0 : themes.find((t) => t.id === theme)) != null ? _a : AppLabLightTheme);
  useEffect(() => {
    if (theme && themes) {
      const match = themes.find((t) => t.id === theme);
      if (match) {
        setTheme(match);
      } else {
        setTheme(AppLabLightTheme);
      }
    } else {
      setTheme(AppLabLightTheme);
    }
  }, [theme]);
  return /* @__PURE__ */ jsxs("div", {
    className: `${currentTheme.id} ${className} theme-provider`,
    style: {
      display: "flex",
      flexGrow: 1
    },
    children: [/* @__PURE__ */ jsx(GlobalStyle, {
      theme: currentTheme
    }), children]
  });
});
const GlobalStyle = createGlobalStyle(["", ";"], (props) => props.theme.css);
export { AppLabDarkTheme, AppLabLightTheme, ThemeProvider };
//# sourceMappingURL=index.js.map
