var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import React, { memo, useState, useEffect, useRef, useMemo, useReducer, useCallback, forwardRef, useImperativeHandle, Fragment, Component, cloneElement, createElement, Children } from "react";
import Countries from "i18n-iso-countries";
import { getIcon, BasicIcons, DualLightIcons } from "@srclaunch/icons";
import { Condition, UserVerificationStatus, NotificationType, CountryCode, CurrencyCode, LanguageCode, Primitives, PageRole, Activities } from "@srclaunch/types";
import { useNavigate, useDispatch, useSelector, getVerificationDetails, verifyCode, resendVerificationCode, useResolvedPath, useMatch, useLocation, NavLink, Link as Link$1, login, signUp, getPaymentMethods, getSubscriptions, matchPath, useSearchParams, Outlet, logout, setTheme } from "@srclaunch/web-application-state";
import styled, { css } from "styled-components";
import { validate } from "@srclaunch/validation";
import { Exception } from "@srclaunch/exceptions";
import CurrencyInputField from "react-currency-input-field";
import ReactCountryFlag from "react-country-flag";
import PasswordStrengthBar from "react-password-strength-bar";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { formatCurrency } from "@srclaunch/i18n";
import { Logger } from "@srclaunch/logger";
import { useTitle } from "@srclaunch/react-hooks";
import { ThemeProvider } from "@srclaunch/themes";
import { downloadDataAsFile } from "@srclaunch/actions";
import { formatObjectToCSVData } from "@srclaunch/transform";
import colorNamer from "color-namer";
import { HexColorPicker } from "react-colorful";
import ReactDOM from "react-dom";
const locale = "en";
const countries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: [
    "People's Republic of China",
    "China"
  ],
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: [
    "Republic of the Congo",
    "Congo"
  ],
  CD: [
    "Democratic Republic of the Congo",
    "Congo"
  ],
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: [
    "Republic of The Gambia",
    "The Gambia",
    "Gambia"
  ],
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: [
    "Islamic Republic of Iran",
    "Iran"
  ],
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States of",
  MD: "Moldova, Republic of",
  MC: "Monaco",
  MN: "Mongolia",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MK: [
    "The Republic of North Macedonia",
    "North Macedonia"
  ],
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: [
    "State of Palestine",
    "Palestine"
  ],
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: [
    "Russian Federation",
    "Russia"
  ],
  RW: "Rwanda",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Eswatini",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: [
    "Taiwan, Province of China",
    "Taiwan"
  ],
  TJ: "Tajikistan",
  TZ: [
    "United Republic of Tanzania",
    "Tanzania"
  ],
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: [
    "United Kingdom",
    "UK",
    "Great Britain"
  ],
  US: [
    "United States of America",
    "United States",
    "USA"
  ],
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "\xC5land Islands",
  BQ: "Bonaire, Sint Eustatius and Saba",
  CW: "Cura\xE7ao",
  GG: "Guernsey",
  IM: "Isle of Man",
  JE: "Jersey",
  ME: "Montenegro",
  BL: "Saint Barth\xE9lemy",
  MF: "Saint Martin (French part)",
  RS: "Serbia",
  SX: "Sint Maarten (Dutch part)",
  SS: "South Sudan",
  XK: "Kosovo"
};
var englishLanguage = {
  locale,
  countries
};
function getSmallerAmount(amount) {
  switch (amount) {
    case Amount.All:
      return Amount.Most;
    case Amount.Most:
      return Amount.More;
    case Amount.More:
      return Amount.Default;
    case Amount.Default:
      return Amount.Less;
    case Amount.Less:
      return Amount.Least;
    case Amount.Least:
      return Amount.None;
    case Amount.None:
      return Amount.None;
  }
}
function getLargerAmount(amount) {
  switch (amount) {
    case Amount.None:
      return Amount.Least;
    case Amount.Least:
      return Amount.Less;
    case Amount.Less:
      return Amount.Default;
    case Amount.Default:
      return Amount.More;
    case Amount.More:
      return Amount.Most;
    case Amount.Most:
      return Amount.All;
    case Amount.All:
      return Amount.All;
  }
}
function convertAmountToSize(amount) {
  switch (amount) {
    case Amount.None:
      return Size.Smallest;
    case Amount.Least:
      return Size.Smaller;
    case Amount.Less:
      return Size.Small;
    case Amount.Default:
      return Size.Default;
    case Amount.More:
      return Size.Large;
    case Amount.Most:
      return Size.Larger;
    case Amount.All:
      return Size.Largest;
  }
}
function convertSizeToAmount(size) {
  if (!size)
    return Amount.Default;
  switch (size) {
    case Size.Smallest:
      return Amount.None;
    case Size.Smaller:
      return Amount.Least;
    case Size.Small:
      return Amount.Less;
    case Size.Default:
      return Amount.Default;
    case Size.Large:
      return Amount.More;
    case Size.Larger:
      return Amount.Most;
    case Size.Largest:
      return Amount.All;
  }
}
function convertSizeToTextSize(size) {
  if (!size)
    return TextSize.Default;
  switch (size) {
    case Size.Smallest:
      return TextSize.Smallest;
    case Size.Smaller:
      return TextSize.Smaller;
    case Size.Small:
      return TextSize.Small;
    case Size.Default:
      return TextSize.Default;
    case Size.Large:
      return TextSize.Large;
    case Size.Larger:
      return TextSize.Larger;
    case Size.Largest:
      return TextSize.Largest;
  }
}
function getSmallerSize(size) {
  switch (size) {
    case Size.Smallest:
      return Size.Smallest;
    case Size.Smaller:
      return Size.Smallest;
    case Size.Small:
      return Size.Smaller;
    case Size.Default:
      return Size.Small;
    case Size.Large:
      return Size.Default;
    case Size.Larger:
      return Size.Large;
    case Size.Largest:
      return Size.Larger;
  }
}
function getLargerSize(size) {
  switch (size) {
    case Size.Smallest:
      return Size.Smaller;
    case Size.Smaller:
      return Size.Small;
    case Size.Small:
      return Size.Default;
    case Size.Default:
      return Size.Large;
    case Size.Large:
      return Size.Larger;
    case Size.Larger:
      return Size.Largest;
    case Size.Largest:
      return Size.Largest;
  }
}
const AnimationStyles = css`
  ${(props) => {
  var _a, _b, _c;
  return ((_a = props.transform) == null ? void 0 : _a.rotate) && css`
      transform: rotate(${(_c = `${(_b = props.transform) == null ? void 0 : _b.rotate}deg`) != null ? _c : "none"});
    `;
}};
`;
const getBackgroundColor = (color, opacity) => {
  if (!color)
    return null;
  if (color === BackgroundColors.Transparent)
    return "transparent";
  if (opacity) {
    return `rgba(${color}, ${opacity}%)`;
  }
  return `rgb(${color})`;
};
const getBackgroundSize = (size) => {
  switch (size) {
    case BackgroundSize.Auto:
      return "auto";
    case BackgroundSize.Cover:
      return "cover";
    case BackgroundSize.Contain:
      return "contain";
    case BackgroundSize.Fill:
      return "100% 100%";
    case BackgroundSize.FillHorizontal:
      return "100% 0";
    case BackgroundSize.FillVertical:
      return "0 100%";
    default:
      if (!size)
        return "auto";
      return size;
  }
};
const BackgroundStyles = css`
  ${(props) => {
  var _a, _b;
  return props.backgroundColor && css`
      background: ${(_b = getBackgroundColor(props.backgroundColor, (_a = props.backgroundOpacity) != null ? _a : 100)) != null ? _b : "transparent"};
    `;
}};

  ${(props) => {
  var _a, _b, _c, _d;
  return props.hover && ((_a = props.hover) == null ? void 0 : _a.backgroundColor) && css`
      &:hover {
        background: ${(_d = getBackgroundColor(props.hover.backgroundColor, (_c = (_b = props.hover) == null ? void 0 : _b.backgroundOpacity) != null ? _c : 100)) != null ? _d : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a;
  return props.backgroundImage && css`
      background-position: ${(_a = props.backgroundImage.position) != null ? _a : "center"};
      background-image: url(${props.backgroundImage.url});
      background-size: ${getBackgroundSize(props.backgroundImage.size)};
    `;
}};

  ${(props) => {
  var _a, _b, _c;
  return props.hover && ((_a = props.hover) == null ? void 0 : _a.backgroundOpacity) && css`
      &:hover {
        background: ${getBackgroundColor((_c = (_b = props.hover.backgroundColor) != null ? _b : props.backgroundColor) != null ? _c : "transparent", props.hover.backgroundOpacity)};
      }
    `;
}};

  ${(props) => {
  var _a, _b, _c;
  return props.focus && ((_a = props.focus) == null ? void 0 : _a.backgroundColor) && css`
      &:focus {
        background: ${(_c = getBackgroundColor(props.focus.backgroundColor, (_b = props.focus.backgroundOpacity) != null ? _b : 100)) != null ? _c : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a, _b, _c, _d;
  return props.focus && ((_a = props.focus) == null ? void 0 : _a.backgroundOpacity) && css`
      &:focus {
        background: ${(_d = getBackgroundColor((_b = props.focus.backgroundColor) != null ? _b : props.backgroundColor, (_c = props.focus) == null ? void 0 : _c.backgroundOpacity)) != null ? _d : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a, _b, _c;
  return props.active && ((_a = props.active) == null ? void 0 : _a.backgroundColor) && css`
      &:active,
      &.active {
        background: ${(_c = getBackgroundColor(props.active.backgroundColor, (_b = props.active.backgroundOpacity) != null ? _b : 100)) != null ? _c : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a, _b, _c;
  return props.active && ((_a = props.active) == null ? void 0 : _a.backgroundOpacity) && css`
      &:active,
      &.active {
        background: ${(_c = getBackgroundColor((_b = props.active.backgroundColor) != null ? _b : props.backgroundColor, props.active.backgroundOpacity)) != null ? _c : "transparent"};
      }
    `;
}};
`;
function getCSSMeasurementValue(val) {
  if (typeof val === "string" && val.includes("var(")) {
    return val;
  }
  if (typeof val === "string" && val.includes("%")) {
    return val;
  }
  if (typeof val === "number") {
    return `${val}px`;
  }
  return val;
}
const isBorderStyleProps$1 = (border) => {
  return border.hasOwnProperty("color");
};
function getCSSBorderValue(val) {
  var _a, _b, _c;
  if (!val)
    return null;
  if (isBorderStyleProps$1(val)) {
    return `${getCSSMeasurementValue((_a = val.width) != null ? _a : 1)} ${(_b = val.style) != null ? _b : ""} ${val.color === BorderColors.Transparent ? "transparent" : `rgb(${(_c = val.color) != null ? _c : BorderColors.Default})`}`;
  }
  return null;
}
function getCSSBoxShadowValue(val) {
  if (!val)
    return null;
  const getString = (shadow) => {
    var _a;
    const offsetX = shadow.offsetX ? `${shadow.offsetX}px` : 0;
    const offsetY = shadow.offsetY ? `${shadow.offsetY}px` : 0;
    const blurRadius = shadow.blurRadius ? `${shadow.blurRadius}px` : "";
    const spreadradius = shadow.spreadRadius ? `${shadow.spreadRadius}px` : "";
    const color = ` rgba(${shadow.color}, ${(_a = shadow.opacity) != null ? _a : 100}%)`;
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadradius} ${color}`;
  };
  if (Array.isArray(val)) {
    return val.map((s2) => getString(s2)).join(",");
  }
  if (typeof val === "string")
    return val;
  return getString(val);
}
const isBorderStyleProps = (border) => {
  return border.hasOwnProperty("color");
};
const BorderStyles = css`
  ${(props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
  return props.flat ? css`
          border: 1px solid transparent;
        ` : css`
          ${props.border && isBorderStyleProps(props.border) ? css`
                border: ${(_a = getCSSBorderValue(props.border)) != null ? _a : "none"};
              ` : css`
                border-bottom: ${(_c = getCSSBorderValue((_b = props.border) == null ? void 0 : _b.bottom)) != null ? _c : "initial"};
                border-left: ${(_e = getCSSBorderValue((_d = props.border) == null ? void 0 : _d.left)) != null ? _e : "initial"};
                border-right: ${(_g = getCSSBorderValue((_f = props.border) == null ? void 0 : _f.right)) != null ? _g : "initial"};
                border-top: ${(_i = getCSSBorderValue((_h = props.border) == null ? void 0 : _h.top)) != null ? _i : "initial"};
              `};

          ${props.hover && props.hover.border && css`
            &:hover {
              ${props.hover.border && isBorderStyleProps(props.hover.border) ? css`
                    border: ${(_j = getCSSBorderValue(props.hover.border)) != null ? _j : "none"};
                  ` : css`
                    border-bottom: ${(_l = getCSSBorderValue((_k = props.hover.border) == null ? void 0 : _k.bottom)) != null ? _l : "initial"};
                    border-left: ${(_n = getCSSBorderValue((_m = props.hover.border) == null ? void 0 : _m.left)) != null ? _n : "initial"};
                    border-right: ${(_p = getCSSBorderValue((_o = props.hover.border) == null ? void 0 : _o.right)) != null ? _p : "initial"};
                    border-top: ${(_r = getCSSBorderValue((_q = props.hover.border) == null ? void 0 : _q.top)) != null ? _r : "initial"};
                  `};
            }
          `};

          ${props.active && props.active.border && css`
            &:active,
            &.active {
              ${props.active.border && isBorderStyleProps(props.active.border) ? css`
                    border: ${(_s = getCSSBorderValue(props.active.border)) != null ? _s : "none"};
                  ` : css`
                    border-bottom: ${(_u = getCSSBorderValue((_t = props.active.border) == null ? void 0 : _t.bottom)) != null ? _u : "initial"};
                    border-left: ${(_w = getCSSBorderValue((_v = props.active.border) == null ? void 0 : _v.left)) != null ? _w : "initial"};
                    border-right: ${(_y = getCSSBorderValue((_x = props.active.border) == null ? void 0 : _x.right)) != null ? _y : "initial"};
                    border-top: ${(_A = getCSSBorderValue((_z = props.active.border) == null ? void 0 : _z.top)) != null ? _A : "initial"};
                  `};
            }
          `};

          ${props.focus && props.focus.border && css`
            &:focus {
              ${props.focus.border && isBorderStyleProps(props.focus.border) ? css`
                    border: ${(_B = getCSSBorderValue(props.focus.border)) != null ? _B : "none"};
                  ` : css`
                    border-bottom: ${(_D = getCSSBorderValue((_C = props.focus.border) == null ? void 0 : _C.bottom)) != null ? _D : "initial"};
                    border-left: ${(_F = getCSSBorderValue((_E = props.focus.border) == null ? void 0 : _E.left)) != null ? _F : "initial"};
                    border-right: ${(_H = getCSSBorderValue((_G = props.focus.border) == null ? void 0 : _G.right)) != null ? _H : "initial"};
                    border-top: ${(_J = getCSSBorderValue((_I = props.focus.border) == null ? void 0 : _I.top)) != null ? _J : "initial"};
                  `};
            }
          `};
        `;
}};
`;
function getBorderRadius(borderRadius) {
  var _a, _b, _c, _d;
  if (!borderRadius)
    return null;
  if (typeof borderRadius === "number") {
    return getCSSMeasurementValue(borderRadius);
  }
  if (typeof borderRadius === "object") {
    const topLeft = typeof borderRadius.topLeft === "number" ? getCSSMeasurementValue(borderRadius.topLeft) : (_a = borderRadius.topLeft) != null ? _a : "initial";
    const topRight = typeof borderRadius.topRight === "number" ? getCSSMeasurementValue(borderRadius.topRight) : (_b = borderRadius.topRight) != null ? _b : "initial";
    const bottomRight = typeof borderRadius.bottomRight === "number" ? getCSSMeasurementValue(borderRadius.bottomRight) : (_c = borderRadius.bottomRight) != null ? _c : "initial";
    const bottomLeft = typeof borderRadius.bottomLeft === "number" ? getCSSMeasurementValue(borderRadius.bottomLeft) : (_d = borderRadius.bottomLeft) != null ? _d : "initial";
    return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
  }
  return borderRadius;
}
const BorderRadiusStyles = css`
  ${(props) => props.borderRadius && css`
      border-radius: ${getBorderRadius(props.borderRadius)};
    `}

  ${(props) => {
  var _a;
  return props.active && css`
      &:active,
      &.active {
        border-radius: ${getBorderRadius((_a = props.active) == null ? void 0 : _a.borderRadius)};
      }
    `;
}}

  ${(props) => {
  var _a;
  return props.focus && css`
      &:focus {
        border-radius: ${getBorderRadius((_a = props.focus) == null ? void 0 : _a.borderRadius)};
      }
    `;
}}

  ${(props) => {
  var _a;
  return props.hover && css`
      &:hover {
        border-radius: ${getBorderRadius((_a = props.hover) == null ? void 0 : _a.borderRadius)};
      }
    `;
}}
`;
function getCSSBoxShadowFromDepth(depth) {
  switch (depth) {
    case Depth.Lowest:
      return DepthShadow.Lowest;
    case Depth.Lower:
      return DepthShadow.Lower;
    case Depth.Low:
      return DepthShadow.Surface;
    case Depth.High:
      return DepthShadow.High;
    case Depth.Higher:
      return DepthShadow.Higher;
    case Depth.Highest:
      return DepthShadow.Highest;
    default:
      return DepthShadow.Surface;
  }
}
const BoxShadowStyles = css`
  box-shadow: ${(props) => props.boxShadow ? getCSSBoxShadowValue(props.boxShadow) : props.depth ? getCSSBoxShadowFromDepth(props.depth) : "0 0 0 0 transparent"};

  ${(props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  return props.flat ? css`
          box-shadow: none;
        ` : css`
          ${props.active && ((_a = props.active) == null ? void 0 : _a.boxShadow) && css`
            &:active,
            &.active {
              box-shadow: ${(_c = getCSSBoxShadowValue((_b = props.active) == null ? void 0 : _b.boxShadow)) != null ? _c : "0 0 0 0 transparent"};
            }
          `};

          ${props.focus && ((_d = props.focus) == null ? void 0 : _d.boxShadow) && css`
            &:focus {
              box-shadow: ${(_f = getCSSBoxShadowValue((_e = props.focus) == null ? void 0 : _e.boxShadow)) != null ? _f : "0 0 0 0 transparent"};
            }
          `};

          ${props.hover && ((_g = props.hover) == null ? void 0 : _g.boxShadow) && css`
            &:hover {
              box-shadow: ${(_i = getCSSBoxShadowValue((_h = props.hover) == null ? void 0 : _h.boxShadow)) != null ? _i : "0 0 0 0 transparent"};
            }
          `};
        `;
}};
`;
const CursorStyles = css`
  cursor: ${(props) => {
  var _a;
  return (_a = props.cursor) != null ? _a : "inherit";
}};
`;
const TranslucencyStyles = css`
  opacity: ${(props) => props.opacity ? props.opacity / 100 : 1};
`;
const AppearanceStyles = css`
  ${AnimationStyles};
  ${BackgroundStyles};
  ${BorderStyles};
  ${BorderRadiusStyles};
  ${BoxShadowStyles};
  ${CursorStyles};
  ${TranslucencyStyles};

  transition: opacity 0.13s ease-in-out, background 0.13s ease-in-out,
    background-color 0.13s ease-in-out, border-radius 0.13s ease-in-out,
    border-bottom-left-radius 0.13s ease-in-out,
    border-bottom-right-radius 0.13s ease-in-out,
    border-top-left-radius 0.13s ease-in-out,
    border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
    border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
    color 0.13s ease-in, transform 0.13s ease-in-out;
`;
const getDimension = (dimension) => {
  if (typeof dimension === "number") {
    return `${dimension}px`;
  }
  return dimension;
};
const DimensionStyles = css`
  ${(props) => props.height && css`
      max-height: ${getDimension(props.height)};
      min-height: ${getDimension(props.height)};
      height: ${getDimension(props.height)};
    `};

  ${(props) => props.width && css`
      max-width: ${getDimension(props.width)};
      min-width: ${getDimension(props.width)};
      width: ${getDimension(props.width)};
    `};

  ${(props) => props.maxHeight && css`
      max-height: ${getDimension(props.maxHeight)};
    `};

  ${(props) => props.maxWidth && css`
      max-width: ${getDimension(props.maxWidth)};
    `};

  ${(props) => props.minHeight && css`
      min-height: ${getDimension(props.minHeight)};
    `};

  ${(props) => props.minWidth && css`
      min-width: ${getDimension(props.minWidth)};
    `};

  ${(props) => props.size && css`
      max-height: ${props.size};
      min-height: ${props.size};
      height: ${props.size};
      max-width: ${props.size};
      min-width: ${props.size};
      width: ${props.size};
    `};
`;
const VisibilityStyles = css`
  animation: ${(props) => props.fadeIn ? "fadeInAnimation ease 0.13s" : "none"};
  animation-iteration-count: ${(props) => props.fadeIn ? 1 : "none"};
  animation-fill-mode: ${(props) => props.fadeIn ? "forwards" : "none"};

  ${(props) => props.visible !== void 0 && css`
      opacity: ${props.visible ? 1 : 0};
      pointer-events: ${props.visible ? "all" : "none"};
      visibility: ${props.visible ? "visible" : "hidden"};
    `};

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const FocusedStyles = css`
  outline: none;

  &:before {
    bottom: -4px;
    border-radius: calc(${(props) => props.borderRadius} + 3px);
    content: '';
    display: block;
    border-color: rgb(${() => BorderColors.Primary});
    border-style: solid;
    border-width: 2px;
    opacity: ${(props) => props.focused ? 1 : 0};
    left: -4px;
    position: absolute;
    pointer-events: none;
    right: -4px;
    top: -4px;
    transition: opacity 0.2s ease-in-out;
    z-index: 0;
  }

  &:focus {
    &:before {
      opacity: 1;
    }
  }
`;
const AlignmentStyles = css`
  align-items: ${(props) => {
  var _a;
  return (_a = props.alignItems) != null ? _a : "center";
}};
  display: flex;
  flex: unset;
  flex-grow: ${(props) => props.grow ? 1 : 0};
  flex-direction: ${(props) => props.orientation && props.orientation === Orientation.Horizontal ? "row" : "column"};
  flex-shrink: ${(props) => props.shrink ? 1 : 0};
  flex-wrap: ${(props) => props.lineWrap ? "wrap" : "nowrap"};
  justify-content: ${(props) => {
  var _a;
  return (_a = props.alignContent) != null ? _a : "initial";
}};
  place-self: ${(props) => {
  var _a;
  return (_a = props.alignSelf) != null ? _a : "initial";
}};
`;
function getOverflowStyle(value) {
  switch (value) {
    case Overflow.Clip:
      return css`
        overflow: clip;
      `;
    case Overflow.ClipBoth:
      return css`
        overflow: clip-both;
      `;
    case Overflow.ClipHorizontal:
      return css`
        overflow-x: clip;
      `;
    case Overflow.ClipVertical:
      return css`
        overflow-y: clip;
      `;
    case Overflow.Hidden:
      return css`
        overflow: hidden;
      `;
    case Overflow.Scroll:
    case Overflow.ScrollBoth:
      return css`
        overflow: scroll;
      `;
    case Overflow.ScrollHorizontal:
      return css`
        overflow: hidden;
        overflow-x: scroll;
      `;
    case Overflow.ScrollVertical:
      return css`
        overflow: hidden;
        overflow-y: scroll;
      `;
    case Overflow.Visible:
      return css`
        overflow: visible;
      `;
    default:
      return value;
  }
}
const BehaviorStyles = css`
  ${(props) => props.fillBehavior === FillBehavior.FillVertical && Orientation.Vertical && css`
      flex: 1 1 auto;
    `};

  ${(props) => props.fillBehavior === FillBehavior.FillHorizontal && Orientation.Horizontal && css`
      flex: 1 1 auto;
    `};

  ${(props) => props.fillBehavior === FillBehavior.FillBoth && css`
      flex: 1 1 auto;
    `};

  ${(props) => props.fillScreen && css`
      display: flex;
      bottom: 0 !important;
      left: 0 !important;
      position: fixed !important;
      right: 0 !important;
      top: 0 !important;
    `};

  ${(props) => getOverflowStyle(props.overflow)};

  ${(props) => props.scrollable && css`
      bottom: 0 !important;
      overflow: hidden !important;
      overflow-y: scroll !important;
      left: 0 !important;
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
    `};
`;
function getDepthZIndex(value) {
  switch (value) {
    case Depth.Lowest:
      return -3;
    case Depth.Lower:
      return -2;
    case Depth.Low:
      return -1;
    case Depth.Surface:
      return 0;
    case Depth.High:
      return 1;
    case Depth.Higher:
      return 2;
    case Depth.Highest:
      return 3;
    default:
      return 0;
  }
}
const DepthStyles = css`
  z-index: ${(props) => getDepthZIndex(props.depth) === 0 ? "auto" : getDepthZIndex(props.depth)};
`;
const MarginStyles = css`
  ${(props) => {
  var _a;
  return props.margin && css`
      margin: ${(_a = getCSSMeasurementValue(props.margin)) != null ? _a : 0};
    `;
}};

  ${(props) => props.marginBottom && css`
      margin-bottom: ${getCSSMeasurementValue(props.marginBottom)};
    `};

  ${(props) => props.marginLeft && css`
      margin-left: ${getCSSMeasurementValue(props.marginLeft)};
    `};

  ${(props) => props.marginRight && css`
      margin-right: ${getCSSMeasurementValue(props.marginRight)};
    `};

  ${(props) => props.marginTop && css`
      margin-top: ${getCSSMeasurementValue(props.marginTop)};
    `};
`;
const PaddingStyles = css`
  ${(props) => {
  var _a;
  return props.padding && css`
      padding: ${(_a = getCSSMeasurementValue(props.padding)) != null ? _a : 0};
    `;
}};

  ${(props) => props.paddingBottom && css`
      padding-bottom: ${getCSSMeasurementValue(props.paddingBottom)};
    `};

  ${(props) => props.paddingLeft && css`
      padding-left: ${getCSSMeasurementValue(props.paddingLeft)};
    `};

  ${(props) => props.paddingRight && css`
      padding-right: ${getCSSMeasurementValue(props.paddingRight)};
    `};

  ${(props) => props.paddingTop && css`
      padding-top: ${getCSSMeasurementValue(props.paddingTop)};
    `};
`;
function getPositionProperty(value) {
  if (typeof value === "number") {
    return getCSSMeasurementValue(value);
  }
  return value;
}
const PositionStyles = css`
  bottom: ${(props) => {
  var _a;
  return (_a = getPositionProperty(props.bottom)) != null ? _a : "auto";
}};
  left: ${(props) => {
  var _a;
  return (_a = getPositionProperty(props.left)) != null ? _a : "auto";
}};
  position: ${(props) => {
  var _a;
  return (_a = props.position) != null ? _a : "relative";
}};
  right: ${(props) => {
  var _a;
  return (_a = getPositionProperty(props.right)) != null ? _a : "auto";
}};
  top: ${(props) => {
  var _a;
  return (_a = getPositionProperty(props.top)) != null ? _a : "auto";
}};
`;
const LayoutStyles = css`
  ${AlignmentStyles};
  ${BehaviorStyles};
  ${DepthStyles};
  ${MarginStyles};
  ${PaddingStyles};
  ${PositionStyles}
`;
const Wrapper$6 = styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${DimensionStyles};
  ${VisibilityStyles};
`;
const Container$h = memo((_a) => {
  var _b = _a, {
    alignItems = Align.Stretch,
    as = "div",
    children,
    className = "",
    fadeIn = false,
    grow = true,
    orientation = Orientation.Vertical
  } = _b, props = __objRest(_b, [
    "alignItems",
    "as",
    "children",
    "className",
    "fadeIn",
    "grow",
    "orientation"
  ]);
  return /* @__PURE__ */ React.createElement(Wrapper$6, __spreadValues({
    alignItems,
    as,
    className: `${className} container`,
    fadeIn,
    grow,
    orientation
  }, props), children);
});
const getLineHeight = (lineHeight) => {
  if (typeof lineHeight === "number") {
    return `${lineHeight}px`;
  }
  return lineHeight;
};
const getTextAlignmentFromAlign = (align) => {
  switch (align) {
    case Align.Center:
      return "center";
    case Align.Justify:
      return "justify";
    case Align.Left:
      return "left";
    case Align.Right:
      return "right";
    default:
      return align != null ? align : "left";
  }
};
const TextStyles = css`
  color: ${(props) => {
  var _a;
  return props.textColor === TextColors.Inherit ? TextColors.Inherit : `rgb(${(_a = props.textColor) != null ? _a : TextColors.Default})`;
}};
  cursor: inherit;
  display: ${(props) => props.inline ? "inline" : "flex"};
  font-size: ${(props) => props.textSize};
  font-weight: ${(props) => props.textWeight};
  line-height: ${(props) => getLineHeight(props.lineHeight)};
  text-align: ${(props) => getTextAlignmentFromAlign(props.alignText)};
  text-decoration: ${(props) => props.underline ? "underline" : "none"};
  text-decoration-color: ${(props) => {
  var _a;
  return props.underlineColor ? props.underlineColor : props.textColor === TextColors.Inherit ? TextColors.Inherit : `rgb(${(_a = props.textColor) != null ? _a : TextColors.Default})`;
}};
  transition: color 0.15s ease-in;

  ${(props) => props.overflow && css`
      overflow: ${props.overflow};
    `};

  ${(props) => props.textOverflow && css`
      text-overflow: ${props.textOverflow};
    `};

  ${(props) => !props.selectable && css`
      user-select: none;
    `};

  ${(props) => props.whiteSpace && css`
      white-space: ${props.whiteSpace};
    `};
`;
const Img = styled.img`
  ${AnimationStyles};
  ${DimensionStyles};
  ${BorderRadiusStyles};
  ${MarginStyles};
`;
const Image = memo((_c) => {
  var _d = _c, {
    alt,
    className = "",
    description,
    height = "auto",
    path,
    url,
    width = "auto"
  } = _d, props = __objRest(_d, [
    "alt",
    "className",
    "description",
    "height",
    "path",
    "url",
    "width"
  ]);
  return /* @__PURE__ */ React.createElement(Img, __spreadValues({
    alt: alt != null ? alt : description,
    className: `${className} image`,
    height,
    src: path != null ? path : url,
    width
  }, props));
});
const SvgMedia = styled.svg`
  ${DimensionStyles};
  ${MarginStyles};
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    fill: rgb(${(props) => props.color});
  }
`;
const Svg = memo((_e) => {
  var _f = _e, {
    as = "span",
    children,
    className = "",
    size = Size.Small
  } = _f, props = __objRest(_f, [
    "as",
    "children",
    "className",
    "size"
  ]);
  return /* @__PURE__ */ React.createElement(SvgMedia, __spreadValues({
    as,
    className: `${className} svg`,
    size
  }, props), children);
});
const Icon = memo((_g) => {
  var _h = _g, {
    color = ForegroundColors.Default,
    className = "",
    component,
    name,
    path,
    size = Size.Default,
    svg,
    url
  } = _h, props = __objRest(_h, [
    "color",
    "className",
    "component",
    "name",
    "path",
    "size",
    "svg",
    "url"
  ]);
  if (name) {
    const Ico = getIcon(name);
    if (Ico)
      return /* @__PURE__ */ React.createElement(Svg, __spreadValues({
        className: `${className} icon`,
        color,
        height: size,
        width: size
      }, props), /* @__PURE__ */ React.createElement(Ico, null));
  }
  if (component) {
    return component;
  }
  if (path) {
    return /* @__PURE__ */ React.createElement(Image, __spreadValues({
      alt: "icon",
      className: `${className} icon`,
      path
    }, props));
  }
  if (url) {
    return /* @__PURE__ */ React.createElement(Image, __spreadValues({
      alt: "icon",
      className: `${className} icon`,
      url
    }, props));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
});
const TextContainer = styled.span`
  ${TextStyles};
`;
const Label = memo((_i) => {
  var _j = _i, {
    alignItems = Align.Center,
    alignContent = Align.Stretch,
    as = "label",
    children,
    className = "",
    grow = false,
    icon,
    inline = true,
    lineHeight = Size.Default,
    orientation = Orientation.Horizontal,
    selectable = true,
    size = Size.Default,
    textColor = TextColors.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    underline = false,
    whiteSpace = WhiteSpace.NoWrap
  } = _j, props = __objRest(_j, [
    "alignItems",
    "alignContent",
    "as",
    "children",
    "className",
    "grow",
    "icon",
    "inline",
    "lineHeight",
    "orientation",
    "selectable",
    "size",
    "textColor",
    "textOverflow",
    "textSize",
    "textWeight",
    "underline",
    "whiteSpace"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems,
    alignContent,
    as,
    className: `${className} label`,
    grow,
    orientation
  }, props), icon && (icon.component || icon.name || icon.path || icon.url || icon.svg) && /* @__PURE__ */ React.createElement(Icon, __spreadValues({
    marginRight: Amount.Least
  }, icon)), /* @__PURE__ */ React.createElement(TextContainer, __spreadValues({
    as: "span",
    className: `${className} text`,
    inline,
    selectable,
    lineHeight,
    overflow: Overflow.Hidden,
    textColor,
    textOverflow,
    textSize,
    textWeight,
    underline,
    whiteSpace
  }, props), children));
});
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Default"] = "black";
  ButtonType2["Error"] = "error";
  ButtonType2["Info"] = "info";
  ButtonType2["Inline"] = "inline";
  ButtonType2["Link"] = "link";
  ButtonType2["Primary"] = "primary";
  ButtonType2["Secondary"] = "secondary";
  ButtonType2["Success"] = "success";
  ButtonType2["Transparent"] = "transparent";
  ButtonType2["Warning"] = "warning";
  ButtonType2["White"] = "white";
  return ButtonType2;
})(ButtonType || {});
const Button$1 = memo((_k) => {
  var _l = _k, {
    active,
    alignItems = Align.Center,
    alignContent = Align.Center,
    backgroundColor,
    borderRadius = Amount.All,
    children,
    className = "",
    cursor = Cursor.Pointer,
    disabled = false,
    form,
    grow = false,
    hover,
    icon,
    label,
    onClick,
    onMouseEnter,
    onMouseLeave,
    orientation = Orientation.Horizontal,
    size = Size.Default,
    textColor,
    textSize,
    textWeight,
    type
  } = _l, props = __objRest(_l, [
    "active",
    "alignItems",
    "alignContent",
    "backgroundColor",
    "borderRadius",
    "children",
    "className",
    "cursor",
    "disabled",
    "form",
    "grow",
    "hover",
    "icon",
    "label",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "orientation",
    "size",
    "textColor",
    "textSize",
    "textWeight",
    "type"
  ]);
  var _a, _b, _c, _d;
  const [hovered, setHovered] = useState(false);
  const getColors = () => {
    if (!type)
      return {
        backgroundColor: BackgroundColors.Black,
        textColor: TextColors.BlackContrast
      };
    switch (type) {
      case "black":
        return {
          backgroundColor: BackgroundColors.Default,
          textColor: TextColors.DefaultContrast
        };
      case "error":
        return {
          backgroundColor: BackgroundColors.Error,
          textColor: TextColors.ErrorContrast
        };
      case "info":
        return {
          backgroundColor: BackgroundColors.Info,
          textColor: TextColors.InfoContrast
        };
      case "inline":
        return {
          backgroundColor: BackgroundColors.Transparent,
          textColor: TextColors.Default
        };
      case "link":
        return {
          backgroundColor: BackgroundColors.Transparent,
          textColor: TextColors.Primary
        };
      case "primary":
        return {
          backgroundColor: BackgroundColors.Primary,
          textColor: TextColors.PrimaryContrast
        };
      case "secondary":
        return {
          backgroundColor: BackgroundColors.Secondary,
          textColor: TextColors.SecondaryContrast
        };
      case "success":
        return {
          backgroundColor: BackgroundColors.Success,
          textColor: TextColors.SuccessContrast
        };
      case "transparent":
        return {
          backgroundColor: BackgroundColors.Transparent,
          textColor: TextColors.Default
        };
      case "warning":
        return {
          backgroundColor: BackgroundColors.Warning,
          textColor: TextColors.WarningContrast
        };
      case "white":
        return {
          backgroundColor: BackgroundColors.White,
          textColor: TextColors.WhiteContrast
        };
    }
  };
  const colors = getColors();
  const updatedBackgroundColor = hovered ? (hover == null ? void 0 : hover.backgroundColor) ? hover == null ? void 0 : hover.backgroundColor : (_a = colors == null ? void 0 : colors.backgroundColor) != null ? _a : backgroundColor : (_b = colors == null ? void 0 : colors.backgroundColor) != null ? _b : backgroundColor;
  const updatedTextColor = hovered ? (hover == null ? void 0 : hover.textColor) ? hover == null ? void 0 : hover.textColor : (_c = colors == null ? void 0 : colors.textColor) != null ? _c : textColor : (_d = colors == null ? void 0 : colors.textColor) != null ? _d : textColor;
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    active: __spreadValues({
      backgroundOpacity: 80
    }, active),
    alignItems,
    alignContent,
    as: "button",
    backgroundColor: updatedBackgroundColor,
    borderRadius: grow && !borderRadius ? Amount.Least : borderRadius,
    boxShadow: {
      blurRadius: 8,
      color: colors == null ? void 0 : colors.backgroundColor,
      offsetX: 0,
      offsetY: 2,
      opacity: 35,
      spreadRadius: 4
    },
    className: `${className} button`,
    cursor,
    disabled,
    form,
    grow,
    hover: __spreadValues({
      backgroundOpacity: 90
    }, hover),
    onClick,
    onMouseEnter: (e) => {
      setHovered(true);
      if (onMouseEnter)
        onMouseEnter(e);
    },
    onMouseLeave: (e) => {
      setHovered(false);
      if (onMouseLeave)
        onMouseLeave(e);
    },
    orientation,
    overflow: Overflow.Visible,
    paddingLeft: getLargerAmount(convertSizeToAmount(size)),
    paddingRight: getLargerAmount(convertSizeToAmount(size))
  }, props), typeof children === "string" ? /* @__PURE__ */ React.createElement(Label, {
    alignContent: grow ? Align.Center : alignContent,
    grow: true,
    icon,
    lineHeight: size === Size.Smaller || size === Size.Smallest ? Size.Small : size,
    textColor: updatedTextColor,
    textSize: convertSizeToTextSize(getSmallerSize(size)),
    textWeight,
    underline: type === "link" && hovered
  }, children) : /* @__PURE__ */ React.createElement(React.Fragment, null, children));
});
var Colors = /* @__PURE__ */ ((Colors2) => {
  Colors2["Black"] = "var(--color-black-rgb)";
  Colors2["Default"] = "var(--color-default-rgb)";
  Colors2["Error"] = "var(--color-error-rgb)";
  Colors2["Info"] = "var(--color-info-rgb)";
  Colors2["Inherit"] = "inherit";
  Colors2["Primary"] = "var(--color-primary-rgb)";
  Colors2["Secondary"] = "var(--color-secondary-rgb)";
  Colors2["Success"] = "var(--color-success-rgb)";
  Colors2["Transparent"] = "transparent";
  Colors2["Warning"] = "var(--color-warning-rgb)";
  Colors2["White"] = "var(--color-white-rgb)";
  return Colors2;
})(Colors || {});
var ContrastColors = /* @__PURE__ */ ((ContrastColors2) => {
  ContrastColors2["Black"] = "var(--color-black-contrast-rgb)";
  ContrastColors2["Default"] = "var(--color-default-contrast-rgb)";
  ContrastColors2["Error"] = "var(--color-error-contrast-rgb)";
  ContrastColors2["Info"] = "var(--color-info-contrast-rgb)";
  ContrastColors2["Primary"] = "var(--color-primary-contrast-rgb)";
  ContrastColors2["Secondary"] = "var(--color-secondary-contrast-rgb)";
  ContrastColors2["Success"] = "var(--color-success-contrast-rgb)";
  ContrastColors2["Warning"] = "var(--color-warning-contrast-rgb)";
  ContrastColors2["White"] = "var(--color-white-contrast-rgb)";
  return ContrastColors2;
})(ContrastColors || {});
var BackgroundColorShade = /* @__PURE__ */ ((BackgroundColorShade2) => {
  BackgroundColorShade2["Lightest"] = "var(--bg-color-lightest-rgb)";
  BackgroundColorShade2["Lighter"] = "var(--bg-color-lighter-rgb)";
  BackgroundColorShade2["Light"] = "var(--bg-color-light-rgb)";
  BackgroundColorShade2["Default"] = "var(--bg-color-default-rgb)";
  BackgroundColorShade2["Dark"] = "var(--bg-color-dark-rgb)";
  BackgroundColorShade2["Darker"] = "var(--bg-color-darker-rgb)";
  BackgroundColorShade2["Darkest"] = "var(--bg-color-darkest-rgb)";
  BackgroundColorShade2["Transparent"] = "transparent";
  return BackgroundColorShade2;
})(BackgroundColorShade || {});
var BackgroundColors = ((BackgroundColors2) => {
  BackgroundColors2["Card"] = "var(--bg-color-card-rgb)";
  BackgroundColors2["CloseButton"] = "var(--bg-color-close-button-rgb)";
  BackgroundColors2["DataGrid"] = "var(--bg-color-data-grid-rgb)";
  BackgroundColors2["DataGridHeader"] = "var(--bg-color-data-grid-header-rgb)";
  BackgroundColors2["DataGridColumnHeaders"] = "var(--bg-color-data-grid-column-headers-rgb)";
  BackgroundColors2["DataGridCell"] = "var(--bg-color-data-grid-cell-rgb)";
  BackgroundColors2["DataGridRow"] = "var(--bg-color-data-grid-row-rgb)";
  BackgroundColors2["DropdownMenu"] = "var(--bg-color-dropdown-menu-rgb)";
  BackgroundColors2["InputControl"] = "var(--bg-color-input-control-rgb)";
  BackgroundColors2["Button"] = "var(--bg-color-button-rgb)";
  BackgroundColors2["MenuButton"] = "var(--bg-color-menu-button-rgb)";
  BackgroundColors2["MenuItem"] = "var(--bg-color-menu-item-rgb)";
  BackgroundColors2["MoreMenu"] = "var(--bg-color-more-menu-rgb)";
  BackgroundColors2["NavigationBar"] = "var(--bg-color-navigation-bar-rgb)";
  BackgroundColors2["NavigationMenu"] = "var(--bg-color-navigation-menu-rgb)";
  BackgroundColors2["Page"] = "var(--bg-color-page-rgb)";
  BackgroundColors2["SlidePanel"] = "var(--bg-color-slide-panel-rgb)";
  BackgroundColors2["Workspace"] = "var(--bg-color-workspace-rgb)";
  BackgroundColors2["Lightest"] = "var(--bg-color-lightest-rgb)";
  BackgroundColors2["Lighter"] = "var(--bg-color-lighter-rgb)";
  BackgroundColors2["Light"] = "var(--bg-color-light-rgb)";
  BackgroundColors2["Default"] = "var(--bg-color-default-rgb)";
  BackgroundColors2["Dark"] = "var(--bg-color-dark-rgb)";
  BackgroundColors2["Darker"] = "var(--bg-color-darker-rgb)";
  BackgroundColors2["Darkest"] = "var(--bg-color-darkest-rgb)";
  BackgroundColors2[BackgroundColors2["Black"] = Colors.Black] = "Black";
  BackgroundColors2[BackgroundColors2["BlackContrast"] = ContrastColors.Black] = "BlackContrast";
  BackgroundColors2[BackgroundColors2["Error"] = Colors.Error] = "Error";
  BackgroundColors2[BackgroundColors2["ErrorContrast"] = ContrastColors.Error] = "ErrorContrast";
  BackgroundColors2[BackgroundColors2["Info"] = Colors.Info] = "Info";
  BackgroundColors2[BackgroundColors2["InfoContrast"] = ContrastColors.Info] = "InfoContrast";
  BackgroundColors2[BackgroundColors2["Primary"] = Colors.Primary] = "Primary";
  BackgroundColors2[BackgroundColors2["PrimaryContrast"] = ContrastColors.Primary] = "PrimaryContrast";
  BackgroundColors2[BackgroundColors2["Secondary"] = Colors.Secondary] = "Secondary";
  BackgroundColors2[BackgroundColors2["SecondaryContrast"] = ContrastColors.Secondary] = "SecondaryContrast";
  BackgroundColors2[BackgroundColors2["Success"] = Colors.Success] = "Success";
  BackgroundColors2[BackgroundColors2["SuccessContrast"] = ContrastColors.Success] = "SuccessContrast";
  BackgroundColors2[BackgroundColors2["Transparent"] = Colors.Transparent] = "Transparent";
  BackgroundColors2[BackgroundColors2["Warning"] = Colors.Warning] = "Warning";
  BackgroundColors2[BackgroundColors2["WarningContrast"] = ContrastColors.Warning] = "WarningContrast";
  BackgroundColors2[BackgroundColors2["White"] = Colors.White] = "White";
  BackgroundColors2[BackgroundColors2["WhiteContrast"] = ContrastColors.White] = "WhiteContrast";
  return BackgroundColors2;
})(BackgroundColors || {});
var BackgroundSize = /* @__PURE__ */ ((BackgroundSize2) => {
  BackgroundSize2["Auto"] = "auto";
  BackgroundSize2["Cover"] = "cover";
  BackgroundSize2["Contain"] = "contain";
  BackgroundSize2["Fill"] = "fill";
  BackgroundSize2["FillHorizontal"] = "fill-horizontal";
  BackgroundSize2["FillVertical"] = "fill-vertical";
  return BackgroundSize2;
})(BackgroundSize || {});
var BorderColorShade = /* @__PURE__ */ ((BorderColorShade2) => {
  BorderColorShade2["Lightest"] = "var(--border-color-lightest-rgb)";
  BorderColorShade2["Lighter"] = "var(--border-color-lighter-rgb)";
  BorderColorShade2["Light"] = "var(--border-color-light-rgb)";
  BorderColorShade2["Default"] = "var(--border-color-default-rgb)";
  BorderColorShade2["Dark"] = "var(--border-color-dark-rgb)";
  BorderColorShade2["Darker"] = "var(--border-color-darker-rgb)";
  BorderColorShade2["Darkest"] = "var(--border-color-darkest-rgb)";
  return BorderColorShade2;
})(BorderColorShade || {});
var BorderColors = ((BorderColors2) => {
  BorderColors2["InputControl"] = "var(--border-color-input-control-rgb)";
  BorderColors2["Lightest"] = "var(--border-color-lightest-rgb)";
  BorderColors2["Lighter"] = "var(--border-color-lighter-rgb)";
  BorderColors2["Light"] = "var(--border-color-light-rgb)";
  BorderColors2["Default"] = "var(--border-color-default-rgb)";
  BorderColors2["Dark"] = "var(--border-color-dark-rgb)";
  BorderColors2["Darker"] = "var(--border-color-darker-rgb)";
  BorderColors2["Darkest"] = "var(--border-color-darkest-rgb)";
  BorderColors2[BorderColors2["Black"] = Colors.Black] = "Black";
  BorderColors2[BorderColors2["BlackContrast"] = ContrastColors.Black] = "BlackContrast";
  BorderColors2[BorderColors2["Error"] = Colors.Error] = "Error";
  BorderColors2[BorderColors2["ErrorContrast"] = ContrastColors.Error] = "ErrorContrast";
  BorderColors2[BorderColors2["Info"] = Colors.Info] = "Info";
  BorderColors2[BorderColors2["InfoContrast"] = ContrastColors.Info] = "InfoContrast";
  BorderColors2[BorderColors2["Primary"] = Colors.Primary] = "Primary";
  BorderColors2[BorderColors2["PrimaryContrast"] = ContrastColors.Primary] = "PrimaryContrast";
  BorderColors2[BorderColors2["Secondary"] = Colors.Primary] = "Secondary";
  BorderColors2[BorderColors2["SecondaryContrast"] = ContrastColors.Secondary] = "SecondaryContrast";
  BorderColors2[BorderColors2["Success"] = Colors.Success] = "Success";
  BorderColors2[BorderColors2["SuccessContrast"] = ContrastColors.Success] = "SuccessContrast";
  BorderColors2[BorderColors2["Transparent"] = Colors.Transparent] = "Transparent";
  BorderColors2[BorderColors2["Warning"] = Colors.Warning] = "Warning";
  BorderColors2[BorderColors2["WarningContrast"] = ContrastColors.Warning] = "WarningContrast";
  BorderColors2[BorderColors2["White"] = Colors.White] = "White";
  BorderColors2[BorderColors2["WhiteContrast"] = ContrastColors.White] = "WhiteContrast";
  return BorderColors2;
})(BorderColors || {});
var BorderStyle = /* @__PURE__ */ ((BorderStyle2) => {
  BorderStyle2["Dotted"] = "dotted";
  BorderStyle2["Solid"] = "solid";
  return BorderStyle2;
})(BorderStyle || {});
var Cursor = /* @__PURE__ */ ((Cursor2) => {
  Cursor2["Auto"] = "auto";
  Cursor2["Crosshair"] = "crosshair";
  Cursor2["Default"] = "default";
  Cursor2["Help"] = "help";
  Cursor2["Move"] = "move";
  Cursor2["NotAllowed"] = "not-allowed";
  Cursor2["Pointer"] = "pointer";
  Cursor2["Resize"] = "resize";
  Cursor2["ResizeTopLeft"] = "resize-nw";
  Cursor2["ResizeTop"] = "resize-top";
  Cursor2["ResizeTopRight"] = "resize-ne";
  Cursor2["ResizeRight"] = "resize-right";
  Cursor2["ResizeBottomRight"] = "resize-se";
  Cursor2["ResizeBottom"] = "resize-bottom";
  Cursor2["ResizeBottomLeft"] = "resize-sw";
  Cursor2["ResizeLeft"] = "resize-left";
  Cursor2["Text"] = "text";
  Cursor2["Wait"] = "wait";
  return Cursor2;
})(Cursor || {});
var Depth = /* @__PURE__ */ ((Depth2) => {
  Depth2["Lowest"] = "lowest";
  Depth2["Lower"] = "lower";
  Depth2["Low"] = "low";
  Depth2["Surface"] = "surface";
  Depth2["High"] = "high";
  Depth2["Higher"] = "higher";
  Depth2["Highest"] = "highest";
  return Depth2;
})(Depth || {});
var DepthShadow = /* @__PURE__ */ ((DepthShadow2) => {
  DepthShadow2["Lowest"] = "var(--shadow-depth-lowest)";
  DepthShadow2["Lower"] = "var(--shadow-depth-lower)";
  DepthShadow2["Low"] = "var(--shadow-depth-low)";
  DepthShadow2["Surface"] = "var(--shadow-depth-surface)";
  DepthShadow2["High"] = "var(--shadow-depth-high)";
  DepthShadow2["Higher"] = "var(--shadow-depth-higher)";
  DepthShadow2["Highest"] = "var(--shadow-depth-highest)";
  return DepthShadow2;
})(DepthShadow || {});
var ForegroundColorShade = /* @__PURE__ */ ((ForegroundColorShade2) => {
  ForegroundColorShade2["Lightest"] = "var(--fg-color-lightest-rgb)";
  ForegroundColorShade2["Lighter"] = "var(--fg-color-lighter-rgb)";
  ForegroundColorShade2["Light"] = "var(--fg-color-light-rgb)";
  ForegroundColorShade2["Default"] = "var(--fg-color-default-rgb)";
  ForegroundColorShade2["Dark"] = "var(--fg-color-dark-rgb)";
  ForegroundColorShade2["Darker"] = "var(--fg-color-darker-rgb)";
  ForegroundColorShade2["Darkest"] = "var(--fg-color-darkest-rgb)";
  ForegroundColorShade2["Transparent"] = "transparent";
  return ForegroundColorShade2;
})(ForegroundColorShade || {});
var ForegroundColors = ((ForegroundColors2) => {
  ForegroundColors2["CloseButton"] = "var(--fg-color-close-button-rgb)";
  ForegroundColors2["MoreMenu"] = "var(--fg-color-more-menu-rgb)";
  ForegroundColors2["Lightest"] = "var(--fg-color-lightest-rgb)";
  ForegroundColors2["Lighter"] = "var(--fg-color-lighter-rgb)";
  ForegroundColors2["Light"] = "var(--fg-color-light-rgb)";
  ForegroundColors2["Default"] = "var(--fg-color-default-rgb)";
  ForegroundColors2["Dark"] = "var(--fg-color-dark-rgb)";
  ForegroundColors2["Darker"] = "var(--fg-color-darker-rgb)";
  ForegroundColors2["Darkest"] = "var(--fg-color-darkest-rgb)";
  ForegroundColors2[ForegroundColors2["Black"] = Colors.Black] = "Black";
  ForegroundColors2[ForegroundColors2["BlackContrast"] = ContrastColors.Black] = "BlackContrast";
  ForegroundColors2[ForegroundColors2["Error"] = Colors.Error] = "Error";
  ForegroundColors2[ForegroundColors2["ErrorContrast"] = ContrastColors.Error] = "ErrorContrast";
  ForegroundColors2[ForegroundColors2["Info"] = Colors.Info] = "Info";
  ForegroundColors2[ForegroundColors2["InfoContrast"] = ContrastColors.Info] = "InfoContrast";
  ForegroundColors2[ForegroundColors2["Primary"] = Colors.Primary] = "Primary";
  ForegroundColors2[ForegroundColors2["PrimaryContrast"] = ContrastColors.Primary] = "PrimaryContrast";
  ForegroundColors2[ForegroundColors2["Secondary"] = Colors.Primary] = "Secondary";
  ForegroundColors2[ForegroundColors2["SecondaryContrast"] = ContrastColors.Secondary] = "SecondaryContrast";
  ForegroundColors2[ForegroundColors2["Success"] = Colors.Success] = "Success";
  ForegroundColors2[ForegroundColors2["SuccessContrast"] = ContrastColors.Success] = "SuccessContrast";
  ForegroundColors2[ForegroundColors2["Transparent"] = Colors.Transparent] = "Transparent";
  ForegroundColors2[ForegroundColors2["Warning"] = Colors.Warning] = "Warning";
  ForegroundColors2[ForegroundColors2["WarningContrast"] = ContrastColors.Warning] = "WarningContrast";
  ForegroundColors2[ForegroundColors2["White"] = Colors.White] = "White";
  ForegroundColors2[ForegroundColors2["WhiteContrast"] = ContrastColors.White] = "WhiteContrast";
  return ForegroundColors2;
})(ForegroundColors || {});
var Size = /* @__PURE__ */ ((Size2) => {
  Size2["Smallest"] = "var(--size-smallest)";
  Size2["Smaller"] = "var(--size-smaller)";
  Size2["Small"] = "var(--size-small)";
  Size2["Default"] = "var(--size-default)";
  Size2["Large"] = "var(--size-large)";
  Size2["Larger"] = "var(--size-larger)";
  Size2["Largest"] = "var(--size-largest)";
  return Size2;
})(Size || {});
var DataGridDisplayType = /* @__PURE__ */ ((DataGridDisplayType2) => {
  DataGridDisplayType2["Card"] = "card";
  DataGridDisplayType2["Table"] = "table";
  return DataGridDisplayType2;
})(DataGridDisplayType || {});
var Formatter$1 = /* @__PURE__ */ ((Formatter2) => {
  Formatter2["Currency"] = "currency";
  return Formatter2;
})(Formatter$1 || {});
var AutoComplete = /* @__PURE__ */ ((AutoComplete2) => {
  AutoComplete2["Birthday"] = "bday";
  AutoComplete2["BirthdayDay"] = "bday-day";
  AutoComplete2["BirthdayMonth"] = "bday-month";
  AutoComplete2["BirthdayYear"] = "bday-year";
  AutoComplete2["Country"] = "country";
  AutoComplete2["CountryName"] = "country-name";
  AutoComplete2["CreditCardExpiration"] = "cc-exp";
  AutoComplete2["CreditCardExpirationMonth"] = "cc-exp-month";
  AutoComplete2["CreditCardExpirationYear"] = "cc-exp-year";
  AutoComplete2["CreditCardName"] = "cc-name";
  AutoComplete2["CreditCardNumber"] = "cc-number";
  AutoComplete2["CreditCardSecurityCode"] = "cc-csc";
  AutoComplete2["CreditCardType"] = "cc-type";
  AutoComplete2["CurrentPassword"] = "current-password";
  AutoComplete2["EmailAddress"] = "email";
  AutoComplete2["GivenName"] = "given-name";
  AutoComplete2["Language"] = "language";
  AutoComplete2["FamilyName"] = "family-name";
  AutoComplete2["NewPassword"] = "new-password";
  AutoComplete2["OneTimeCode"] = "one-time-code";
  AutoComplete2["Organization"] = "organization";
  AutoComplete2["PhoneNumber"] = "tel";
  AutoComplete2["PostalCode"] = "postal-code";
  AutoComplete2["Sex"] = "sex";
  AutoComplete2["StreetAddress"] = "street-address";
  AutoComplete2["Username"] = "username";
  return AutoComplete2;
})(AutoComplete || {});
var Align = /* @__PURE__ */ ((Align2) => {
  Align2["Baseline"] = "baseline";
  Align2["Bottom"] = "flex-end";
  Align2["Center"] = "center";
  Align2["Left"] = "flex-start";
  Align2["Right"] = "flex-end";
  Align2["SpaceAround"] = "space-around";
  Align2["SpaceBetween"] = "space-between";
  Align2["SpaceEvenly"] = "space-evenly";
  Align2["Stretch"] = "stretch";
  Align2["Top"] = "flex-start";
  Align2["Justify"] = "justify";
  return Align2;
})(Align || {});
var Orientation = /* @__PURE__ */ ((Orientation2) => {
  Orientation2["Diagonal"] = "diagonal";
  Orientation2["Horizontal"] = "horizontal";
  Orientation2["Vertical"] = "vertical";
  return Orientation2;
})(Orientation || {});
var FillBehavior = /* @__PURE__ */ ((FillBehavior2) => {
  FillBehavior2["FillHorizontal"] = "fill_horizontal";
  FillBehavior2["FillVertical"] = "fill_vertical";
  FillBehavior2["FillBoth"] = "fill_both";
  return FillBehavior2;
})(FillBehavior || {});
var Overflow = /* @__PURE__ */ ((Overflow2) => {
  Overflow2["Hidden"] = "hidden";
  Overflow2["Scroll"] = "scroll";
  Overflow2["ScrollVertical"] = "scroll_x";
  Overflow2["ScrollHorizontal"] = "scroll_y";
  Overflow2["ScrollBoth"] = "scroll_both";
  Overflow2["Clip"] = "clip";
  Overflow2["ClipVertical"] = "clip_x";
  Overflow2["ClipHorizontal"] = "clip_y";
  Overflow2["ClipBoth"] = "clip_both";
  Overflow2["Visible"] = "visible";
  return Overflow2;
})(Overflow || {});
var Position = /* @__PURE__ */ ((Position2) => {
  Position2["Absolute"] = "absolute";
  Position2["Fixed"] = "fixed";
  Position2["Relative"] = "relative";
  Position2["Static"] = "static";
  Position2["Sticky"] = "sticky";
  return Position2;
})(Position || {});
var Amount = /* @__PURE__ */ ((Amount2) => {
  Amount2["None"] = "var(--amount-none)";
  Amount2["Least"] = "var(--amount-least)";
  Amount2["Less"] = "var(--amount-less)";
  Amount2["Default"] = "var(--amount-default)";
  Amount2["More"] = "var(--amount-more)";
  Amount2["Most"] = "var(--amount-most)";
  Amount2["All"] = "var(--amount-all)";
  return Amount2;
})(Amount || {});
var TextColors = ((TextColors2) => {
  TextColors2["DataGridColumnHeaders"] = "var(--text-color-data-grid-column-headers-rgb)";
  TextColors2["DataGridCell"] = "var(--text-color-data-grid-cell-rgb)";
  TextColors2["DropdownMenu"] = "var(--text-color-dropdown-menu-rgb)";
  TextColors2["InputControl"] = "var(--text-color-input-control-rgb)";
  TextColors2["InputPlaceholder"] = "var(--text-color-input-placeholder-rgb)";
  TextColors2["Button"] = "var(--text-color-button-rgb)";
  TextColors2["InputLabel"] = "var(--text-color-input-label-rgb)";
  TextColors2["Link"] = "var(--text-color-link-rgb)";
  TextColors2["MenuButton"] = "var(--text-color-menu-button-rgb)";
  TextColors2["MenuItem"] = "var(--text-color-menu-item-rgb)";
  TextColors2["Paragraph"] = "var(--text-color-paragraph-rgb)";
  TextColors2["Text"] = "var(--text-color-text-rgb)";
  TextColors2["Title"] = "var(--text-color-title-rgb)";
  TextColors2["SubTitle"] = "var(--text-color-sub-title-rgb)";
  TextColors2["WorkspaceTitle"] = "var(--text-color-workspace-title-rgb)";
  TextColors2[TextColors2["Lightest"] = ForegroundColors.Lightest] = "Lightest";
  TextColors2[TextColors2["Lighter"] = ForegroundColors.Lighter] = "Lighter";
  TextColors2[TextColors2["Light"] = ForegroundColors.Light] = "Light";
  TextColors2[TextColors2["Default"] = ForegroundColors.Default] = "Default";
  TextColors2[TextColors2["DefaultContrast"] = ContrastColors.Default] = "DefaultContrast";
  TextColors2[TextColors2["Dark"] = ForegroundColors.Dark] = "Dark";
  TextColors2[TextColors2["Darker"] = ForegroundColors.Darker] = "Darker";
  TextColors2[TextColors2["Darkest"] = ForegroundColors.Darkest] = "Darkest";
  TextColors2[TextColors2["Black"] = Colors.Black] = "Black";
  TextColors2[TextColors2["BlackContrast"] = ContrastColors.Black] = "BlackContrast";
  TextColors2[TextColors2["Error"] = Colors.Error] = "Error";
  TextColors2[TextColors2["ErrorContrast"] = ContrastColors.Error] = "ErrorContrast";
  TextColors2[TextColors2["Info"] = Colors.Info] = "Info";
  TextColors2[TextColors2["InfoContrast"] = ContrastColors.Info] = "InfoContrast";
  TextColors2[TextColors2["Inherit"] = Colors.Inherit] = "Inherit";
  TextColors2[TextColors2["Primary"] = Colors.Primary] = "Primary";
  TextColors2[TextColors2["PrimaryContrast"] = ContrastColors.Primary] = "PrimaryContrast";
  TextColors2[TextColors2["Secondary"] = Colors.Primary] = "Secondary";
  TextColors2[TextColors2["SecondaryContrast"] = ContrastColors.Secondary] = "SecondaryContrast";
  TextColors2[TextColors2["Success"] = Colors.Success] = "Success";
  TextColors2[TextColors2["SuccessContrast"] = ContrastColors.Success] = "SuccessContrast";
  TextColors2[TextColors2["Warning"] = Colors.Warning] = "Warning";
  TextColors2[TextColors2["WarningContrast"] = ContrastColors.Warning] = "WarningContrast";
  TextColors2[TextColors2["White"] = Colors.White] = "White";
  TextColors2[TextColors2["WhiteContrast"] = ContrastColors.White] = "WhiteContrast";
  return TextColors2;
})(TextColors || {});
var TextOverflow = /* @__PURE__ */ ((TextOverflow2) => {
  TextOverflow2["Clip"] = "clip";
  TextOverflow2["Ellipsis"] = "ellipsis";
  return TextOverflow2;
})(TextOverflow || {});
var TextWeight = /* @__PURE__ */ ((TextWeight2) => {
  TextWeight2["Least"] = "var(--text-weight-least)";
  TextWeight2["Less"] = "var(--text-weight-less)";
  TextWeight2["Default"] = "var(--text-weight-default)";
  TextWeight2["More"] = "var(--text-weight-more)";
  TextWeight2["Most"] = "var(--text-weight-most)";
  return TextWeight2;
})(TextWeight || {});
var TextSize = /* @__PURE__ */ ((TextSize2) => {
  TextSize2["Smallest"] = "var(--text-size-smallest)";
  TextSize2["Smaller"] = "var(--text-size-smaller)";
  TextSize2["Small"] = "var(--text-size-small)";
  TextSize2["Default"] = "var(--text-size-default)";
  TextSize2["Large"] = "var(--text-size-large)";
  TextSize2["Larger"] = "var(--text-size-larger)";
  TextSize2["Largest"] = "var(--text-size-largest)";
  return TextSize2;
})(TextSize || {});
var WhiteSpace = /* @__PURE__ */ ((WhiteSpace2) => {
  WhiteSpace2["Normal"] = "normal";
  WhiteSpace2["NoWrap"] = "nowrap";
  WhiteSpace2["Pre"] = "pre";
  WhiteSpace2["PreWrap"] = "pre-wrap";
  WhiteSpace2["PreLine"] = "pre-line";
  return WhiteSpace2;
})(WhiteSpace || {});
const InputContainerStyles = css`
  ${LayoutStyles};
  ${FocusedStyles};
  ${AppearanceStyles};

  ${(props) => props.flat && css`
      background-color: transparent;
      border: 1px solid transparent;
      box-shadow: none;
    `};

  ${(props) => props.focused && css`
      box-shadow: none;
    `};

  ${(props) => props.focused && props.border && css`
      border: 1px solid transparent;
    `};

  ${(props) => props.focused && props.error && (Array.isArray(props.error) && props.error.length > 0) && css`
      &:before {
        border-color: rgb(${BorderColors.Error});
      }
    `};
`;
const InputContainer = memo((_m) => {
  var _n = _m, {
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Least,
    border = {
      color: BorderColors.Default,
      style: BorderStyle.Solid,
      width: 1
    },
    children,
    className = "",
    error,
    size,
    success
  } = _n, props = __objRest(_n, [
    "backgroundColor",
    "borderRadius",
    "border",
    "children",
    "className",
    "error",
    "size",
    "success"
  ]);
  return /* @__PURE__ */ React.createElement(Container$g, __spreadValues({
    backgroundColor,
    borderRadius,
    border: __spreadProps(__spreadValues({}, border), {
      color: error && Array.isArray(error) && error.length > 0 ? BorderColors.Error : border.hasOwnProperty("color") ? border == null ? void 0 : border.color : BorderColors.InputControl
    }),
    className: `${className} input-container`,
    error,
    grow: true,
    orientation: Orientation.Horizontal,
    success
  }, props), children);
});
const Container$g = styled.div`
  ${InputContainerStyles};

  input {
    border: none;
  }
`;
const TextInputStyles = css`
  ${FocusedStyles};
  ${TextStyles};

  outline: none;
  padding: 0 ${Amount.Less};

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
`;
const VerificationCodeInput = memo((_o) => {
  var _p = _o, {
    as,
    className = "",
    defaultValue,
    hidden = false,
    length = 4,
    name,
    onChange,
    onKeyPress,
    placeholder = "",
    size = Size.Larger,
    textColor = TextColors.Dark,
    codeType = "numeric"
  } = _p, props = __objRest(_p, [
    "as",
    "className",
    "defaultValue",
    "hidden",
    "length",
    "name",
    "onChange",
    "onKeyPress",
    "placeholder",
    "size",
    "textColor",
    "codeType"
  ]);
  const [codeParts, setCodeParts] = useState({});
  const [focusedKey, setFocusedKey] = useState(void 0);
  const code = Object.values(codeParts).join("");
  useEffect(() => {
    const typeCondition = () => {
      if (codeType === "alpha") {
        return {
          [Condition.IsAlpha]: true
        };
      }
      if (codeType === "alphanumeric") {
        return {
          [Condition.IsAlphanumeric]: true
        };
      }
      return {
        [Condition.IsNumber]: true
      };
    };
    const validation = __spreadValues({
      [Condition.IsRequired]: true,
      [Condition.IsLengthEqual]: length
    }, typeCondition);
    const probs = validate(code, validation);
    if (onChange)
      onChange({
        problems: probs,
        validated: !probs.length,
        value: code
      });
  }, [code]);
  return /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal,
    alignContent: Align.Center
  }, Array.from(Array(length)).map((_, key) => {
    var _a;
    return /* @__PURE__ */ React.createElement(InputContainer, {
      backgroundColor: BackgroundColors.InputControl,
      focused: focusedKey === key,
      className: `${className} verification-code-input`,
      key,
      marginLeft: Amount.Least,
      marginRight: Amount.Least,
      orientation: Orientation.Horizontal
    }, /* @__PURE__ */ React.createElement(Input$4, {
      id: `${name}-verification-code-input-${key}`,
      lineHeight: size,
      max: codeType === "numeric" ? 9 : "unset",
      min: codeType === "numeric" ? 0 : "unset",
      name,
      onBlur: () => setFocusedKey(void 0),
      onChange: (e) => {
        if (e.nativeEvent.inputType !== "insertFromPaste") {
          const currentCodePart = codeParts == null ? void 0 : codeParts[key];
          if (e.target.value.length === 1 || e.target.value.length === 0) {
            setCodeParts(__spreadProps(__spreadValues({}, codeParts), { [key]: e.target.value }));
          } else {
            setCodeParts(__spreadProps(__spreadValues({}, codeParts), { [key]: void 0 }));
          }
          if (e.target.value.length === 1 && !currentCodePart) {
            const nextElem = document.getElementById(`${name}-verification-code-input-${key + 1}`);
            if (nextElem) {
              nextElem.focus();
            }
          }
        }
      },
      onFocus: () => {
        setFocusedKey(key);
      },
      onKeyDown: (e) => {
        if (e.key === "Delete" || e.key === "Backspace" && !e.target.value) {
          const lastElem = document.getElementById(`${name}-verification-code-input-${key - 1}`);
          if (lastElem) {
            lastElem.focus();
          }
        }
      },
      onPaste: (e) => {
        if (key === 0) {
          const pastedText = e.clipboardData.getData("Text");
          if (pastedText && pastedText.length === length && !Number.isNaN(pastedText)) {
            let obj = {};
            let i = 0;
            for (const val of [...pastedText]) {
              const prop = { [i]: val };
              obj = __spreadValues(__spreadValues({}, obj), prop);
              i += 1;
            }
            setCodeParts(obj);
          }
        }
      },
      placeholder,
      textColor,
      type: codeType === "numeric" ? "number" : "text",
      value: (_a = codeParts == null ? void 0 : codeParts[key]) != null ? _a : ""
    }));
  }));
});
const Input$4 = styled.input`
  ${TextInputStyles};

  background: transparent;
  border: none;
  padding: calc(${(props) => props.size} / 5);
  text-align: center;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
const InputRow = memo((_q) => {
  var _r = _q, {
    children,
    className = "",
    grow = false,
    marginBottom = Amount.More,
    orientation = Orientation.Vertical
  } = _r, props = __objRest(_r, [
    "children",
    "className",
    "grow",
    "marginBottom",
    "orientation"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} input-row`,
    grow,
    marginBottom,
    orientation
  }, props), children);
});
const ProgressSpinner = memo(({ size = Size.Default }) => {
  return /* @__PURE__ */ React.createElement(Container$f, {
    size
  });
});
const Container$f = memo(styled.div`
  animation: loop 0.8s infinite linear;
  border-top: calc(${(props) => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-right: calc(${(props) => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-bottom: calc(${(props) => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-left: calc(${(props) => props.size} / 5) solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: inline-block;
  font-size: 10px;
  height: ${(props) => props.size};
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: ${(props) => props.size};

  &:after {
    border-radius: 50%;
    width: calc(${(props) => props.size} / 3);
    height: calc(${(props) => props.size} / 3);
  }

  @keyframes loop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);
const LoadingOverlay = memo((_s) => {
  var _t = _s, {
    backgroundColor = BackgroundColors.Dark,
    borderRadius = Amount.None,
    className = "",
    spinnerSize,
    visible
  } = _t, props = __objRest(_t, [
    "backgroundColor",
    "borderRadius",
    "className",
    "spinnerSize",
    "visible"
  ]);
  return /* @__PURE__ */ React.createElement(Wrapper$5, __spreadValues({
    backgroundColor,
    backgroundOpacity: 85,
    borderRadius,
    className: `${className} loading-overlay`,
    visible
  }, props), /* @__PURE__ */ React.createElement(ProgressSpinner, {
    size: spinnerSize
  }));
});
const Wrapper$5 = memo(styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};

  align-items: center;
  backdrop-filter: blur(1px);
  border-radius: ${(props) => props.borderRadius};
  bottom: 0;
  display: flex;
  justify-content: center;
  min-height: ${Size.Largest};
  min-width: ${Size.Largest};
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  transition: background 0.2s cubic-bezier(0.2, 0.3, 0.25, 0.9),
    opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
  z-index: 4;

  ${(props) => props.visible && css`
      opacity: 1;
      pointer-events: all;
    `}
`);
const LineBreak = memo((_u) => {
  var _v = _u, {
    className = "",
    size = Size.Default
  } = _v, props = __objRest(_v, [
    "className",
    "size"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} link-break`,
    height: size
  }, props));
});
const Paragraph = memo((_w) => {
  var _x = _w, {
    as = "p",
    children,
    className = "",
    lineHeight = Size.Smaller,
    textColor = TextColors.Paragraph,
    textSize = TextSize.Default
  } = _x, props = __objRest(_x, [
    "as",
    "children",
    "className",
    "lineHeight",
    "textColor",
    "textSize"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    as,
    className: `${className} paragraph`,
    textColor,
    lineHeight,
    textSize
  }, props), children);
});
const Title = memo((_y) => {
  var _z = _y, {
    as = "h1",
    children,
    className = "",
    lineHeight = Size.Small,
    textSize = TextSize.Larger,
    textColor = TextColors.Title,
    textWeight = TextWeight.Most
  } = _z, props = __objRest(_z, [
    "as",
    "children",
    "className",
    "lineHeight",
    "textSize",
    "textColor",
    "textWeight"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    as,
    className: `${className} title`,
    inline: false,
    textColor,
    lineHeight,
    textSize,
    textWeight
  }, props), children);
});
const CodeVerificationForm = memo(({
  backgroundColor = BackgroundColors.Darker,
  borderRadius = Amount.More,
  onVerificationSuccess,
  userId
}) => {
  var _a;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const verificationState = useSelector((state) => {
    var _a2;
    return (_a2 = state.user.authentication) == null ? void 0 : _a2.verification.code;
  });
  const [code, setCode] = useState();
  const [problems, setProblems] = useState();
  useEffect(() => {
    if (userId) {
      dispatch(getVerificationDetails({ userId }));
    }
  }, []);
  useEffect(() => {
    if (onVerificationSuccess && verificationState.verify.success) {
      onVerificationSuccess();
    }
  }, [verificationState.verify.success]);
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: "code-verification-form",
    backgroundColor,
    borderRadius,
    boxShadow: DepthShadow.Highest,
    fadeIn: true,
    grow: false,
    padding: Amount.Most,
    paddingBottom: Amount.Default,
    width: 420
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    borderRadius,
    visible: verificationState.status.inProgress || verificationState.resend.inProgress || verificationState.verify.inProgress
  }), verificationState.verify.success || verificationState.status.state === UserVerificationStatus.Confirmed ? /* @__PURE__ */ React.createElement(Container$h, {
    padding: Amount.Default,
    paddingBottom: Amount.Most
  }, /* @__PURE__ */ React.createElement(Title, {
    alignText: Align.Center
  }, "You're verified!"), /* @__PURE__ */ React.createElement(Container$h, {
    margin: Amount.More
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    alignText: Align.Center
  }, "Thank you for verifying your email address.")), /* @__PURE__ */ React.createElement(Button$1, {
    fullWidth: true,
    onClick: () => navigate("/login"),
    size: Size.Large,
    type: ButtonType.Primary
  }, "Login")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, {
    alignText: Align.Center
  }, "Verification"), /* @__PURE__ */ React.createElement(Container$h, {
    margin: Amount.More
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    alignText: Align.Center
  }, "Enter the confirmation code sent to", " ", /* @__PURE__ */ React.createElement("b", null, (_a = verificationState.delivery) == null ? void 0 : _a.destination), ".")), /* @__PURE__ */ React.createElement(Container$h, {
    padding: Amount.Default,
    paddingLeft: Amount.More,
    paddingRight: Amount.More
  }, /* @__PURE__ */ React.createElement(InputRow, null, /* @__PURE__ */ React.createElement(VerificationCodeInput, {
    autoComplete: AutoComplete.OneTimeCode,
    length: 6,
    name: "verification_code",
    onChange: ({ value, validated, problems: problemos }) => {
      setProblems(problemos);
      if (validated && problemos && problemos.length === 0)
        setCode(value);
    },
    size: Size.Large
  })), /* @__PURE__ */ React.createElement(LineBreak, {
    size: Size.Small
  }), /* @__PURE__ */ React.createElement(Button$1, {
    disabled: problems && problems.length > 0 || !code || verificationState.verify.inProgress || verificationState.resend.inProgress,
    fullWidth: true,
    onClick: () => {
      if (userId && code) {
        dispatch(verifyCode({ code, userId }));
      }
    },
    size: Size.Large,
    type: ButtonType.Primary
  }, "Verify")), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    paddingLeft: Amount.Default,
    paddingRight: Amount.Default,
    paddingTop: Amount.Default
  }, !verificationState.resend.success ? /* @__PURE__ */ React.createElement(Button$1, {
    onClick: () => {
      if (userId) {
        dispatch(resendVerificationCode({ userId }));
      }
    },
    size: Size.Smaller,
    type: ButtonType.Link
  }, "Resend verification code") : /* @__PURE__ */ React.createElement(Label, {
    icon: {
      name: BasicIcons.Checkmark2,
      size: Size.Smaller
    },
    lineHeight: Size.Smaller,
    size: Size.Default,
    textColor: TextColors.Success,
    textWeight: TextWeight.More
  }, "A new code has been sent"))));
});
const Orb = memo((_A) => {
  var _B = _A, {
    color = BackgroundColors.Default,
    className = "",
    size = Size.Smallest
  } = _B, props = __objRest(_B, [
    "color",
    "className",
    "size"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} orb`,
    backgroundColor: color,
    borderRadius: Amount.All,
    height: size,
    width: size
  }, props));
});
const NotificationLabel = memo((_C) => {
  var _D = _C, {
    backgroundColor = BackgroundColors.Dark,
    children,
    className = "",
    grow = false,
    label = "",
    orientation,
    showOrb = true,
    type
  } = _D, props = __objRest(_D, [
    "backgroundColor",
    "children",
    "className",
    "grow",
    "label",
    "orientation",
    "showOrb",
    "type"
  ]);
  const getBackgroundColor2 = () => {
    if (!type)
      return backgroundColor;
    switch (type) {
      case NotificationType.Error:
        return BackgroundColors.Error;
      case NotificationType.Info:
        return BackgroundColors.Info;
      case NotificationType.Success:
        return BackgroundColors.Success;
      case NotificationType.Warning:
        return BackgroundColors.Warning;
    }
  };
  const getTextColor = () => {
    if (!type)
      return TextColors.Default;
    switch (type) {
      case NotificationType.Error:
        return TextColors.Error;
      case NotificationType.Info:
        return TextColors.Info;
      case NotificationType.Success:
        return TextColors.Success;
      case NotificationType.Warning:
        return TextColors.Warning;
    }
  };
  const bgColor = getBackgroundColor2();
  const textColor = getTextColor();
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Center,
    alignContent: Align.Center,
    backgroundColor: bgColor,
    backgroundOpacity: type ? 10 : 100,
    borderRadius: Amount.All,
    className: `${className} notification-label`,
    orientation: Orientation.Horizontal,
    padding: Amount.More,
    paddingBottom: Amount.Less,
    paddingTop: Amount.Less,
    grow
  }, props), showOrb && /* @__PURE__ */ React.createElement(Orb, {
    color: bgColor,
    marginRight: Amount.Less
  }), label && /* @__PURE__ */ React.createElement(Label, {
    textColor,
    lineHeight: Size.Small,
    textWeight: TextWeight.Default
  }, label), children);
});
const ErrorNotification = memo((_E) => {
  var _F = _E, { label, showOrb = true } = _F, props = __objRest(_F, ["label", "showOrb"]);
  return /* @__PURE__ */ React.createElement(NotificationLabel, __spreadValues({
    alignItems: Align.Center,
    label,
    showOrb,
    type: NotificationType.Error
  }, props));
});
const FormActions = memo((_G) => {
  var _H = _G, { children } = _H, props = __objRest(_H, ["children"]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent: Align.SpaceBetween,
    className: "form-actions",
    marginTop: Amount.More,
    orientation: Orientation.Horizontal,
    grow: false
  }, props), children);
});
const JSONEditor = memo((_I) => {
  var props = __objRest(_I, []);
  return /* @__PURE__ */ React.createElement("div", null, "JSONEditor");
});
const ErrorLabel = memo(({
  alignContent = Align.Center,
  alignText = Align.Center,
  children,
  className = "",
  grow = true,
  icon = {
    color: Colors.Error,
    name: BasicIcons.Alert,
    size: Size.Smaller
  },
  lineHeight = Size.Smaller,
  marginBottom = Amount.Least,
  size = Size.Default,
  textColor = TextColors.Error,
  textSize = TextSize.Small
}) => {
  return /* @__PURE__ */ React.createElement(Label, {
    alignContent,
    alignText,
    className: `${className} error-label`,
    grow,
    icon,
    lineHeight,
    marginBottom,
    size,
    textColor,
    textSize
  }, children);
});
const InputLabel = memo((_J) => {
  var _K = _J, {
    alignContent = Align.Left,
    children,
    className = "",
    error,
    lineHeight = Size.Smaller,
    marginBottom = Amount.Least,
    size = Size.Small,
    textColor = TextColors.InputLabel,
    textSize = TextSize.Small
  } = _K, props = __objRest(_K, [
    "alignContent",
    "children",
    "className",
    "error",
    "lineHeight",
    "marginBottom",
    "size",
    "textColor",
    "textSize"
  ]);
  var _a;
  return /* @__PURE__ */ React.createElement(Container$h, {
    grow: false,
    orientation: Orientation.Horizontal
  }, /* @__PURE__ */ React.createElement(Label, __spreadValues({
    alignContent,
    className: `${className} input-label`,
    grow: false,
    lineHeight,
    textSize,
    textColor,
    marginBottom,
    size
  }, props), children), error && /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right,
    size
  }, error instanceof Exception ? error.message : error.length > 0 ? (_a = error[0]) == null ? void 0 : _a.message.long : null));
});
const ToggleInput = memo(({
  backgroundColor = BackgroundColors.InputControl,
  border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1
  },
  className = "",
  defaultValue = false,
  falseLabel,
  label,
  onChange,
  trueLabel,
  size = Size.Default,
  width = 55
}) => {
  var _a;
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [toggleValue, setToggleValue] = useState(defaultValue != null ? defaultValue : false);
  useEffect(() => {
    if (onChange)
      onChange({ problems: [], value: toggleValue });
  }, [toggleValue]);
  useEffect(() => {
    var _a2;
    setToggleValue((_a2 = defaultValue != null ? defaultValue : toggleValue) != null ? _a2 : "");
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal,
    grow: false
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a = problems[0]) == null ? void 0 : _a.message.short) : null), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Left,
    alignItems: Align.Center,
    orientation: Orientation.Horizontal,
    className: `${className} toggle-input`,
    grow: false
  }, falseLabel && /* @__PURE__ */ React.createElement(Button$1, {
    form: "null",
    onClick: () => setToggleValue(false),
    type: ButtonType.Inline
  }, /* @__PURE__ */ React.createElement(Label, {
    className: "toggle-input-falsey-label",
    textColor: !toggleValue ? TextColors.Light : TextColors.Lighter
  }, falseLabel)), /* @__PURE__ */ React.createElement(Toggle, {
    alignItems: Align.Center,
    as: "button",
    backgroundColor,
    border,
    borderRadius: Amount.All,
    form: "null",
    onClick: () => setToggleValue(!toggleValue),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    orientation: Orientation.Horizontal,
    padding: Amount.Least,
    toggleValue,
    size
  }, /* @__PURE__ */ React.createElement(ToggleSwitch, {
    alignItems: Align.Center,
    alignContent: Align.Center,
    backgroundColor: toggleValue ? Colors.Primary : Colors.Error,
    depth: Depth.High,
    focused,
    toggleValue,
    size
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: BackgroundColors.Dark,
    name: toggleValue ? BasicIcons.Checkmark2 : BasicIcons.Close,
    size: Size.Smallest
  }))), trueLabel && /* @__PURE__ */ React.createElement(Button$1, {
    form: "null",
    onClick: () => setToggleValue(true),
    type: ButtonType.Inline
  }, /* @__PURE__ */ React.createElement(Label, {
    className: "toggle-input-truthy-label",
    textColor: toggleValue ? TextColors.Light : TextColors.Lighter
  }, trueLabel))));
});
const Toggle = styled.button`
  ${LayoutStyles};
  ${AppearanceStyles};

  box-shadow: ${DepthShadow.Low};
  border: none;
  cursor: pointer;
  width: calc(${(props) => props.size} * 2 - 2px);
`;
const ToggleSwitch = styled.span`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};

  box-shadow: ${DepthShadow.High};
  border-radius: ${Amount.All};
  height: ${(props) => `calc(${props.size} - 8px)`};
  transform: translateX(0);
  transition: background 0.1s ease-in-out, transform 0.1s ease-in-out;
  width: ${(props) => `calc(${props.size} - 8px)`};

  i.icon {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
  /* 
  @keyframes toggle-animation {
    0% {
      height: 100%;
    }

    50% {
      height: 50%;
      width: 50%;
    }

    100% {
      height: 100%;
    }
  } */

  &:before {
    border-radius: 100%;
  }

  ${(props) => props.toggleValue === true && css`
      transform: translateX(calc(${props.size} - ${Amount.Least}));
      /* animation: toggle-animation 0.2s ease-in-out; */

      i.icon {
        opacity: 1;
      }
    `}

  ${(props) => props.toggleValue === false && css`
      /* */
    `}
`;
var TextInputType = /* @__PURE__ */ ((TextInputType2) => {
  TextInputType2["EmailAddress"] = "email";
  TextInputType2["Text"] = "text";
  TextInputType2["Password"] = "password";
  TextInputType2["Search"] = "search";
  return TextInputType2;
})(TextInputType || {});
const TextInput = memo((_L) => {
  var _M = _L, {
    autoComplete,
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    className = "",
    cursor = Cursor.Text,
    defaultValue,
    error,
    flat = false,
    hidden = false,
    icon,
    inProgress = false,
    inputType = "text",
    label,
    name,
    onChange,
    prefix: prefix2 = "",
    placeholder = "",
    size = Size.Default,
    spellCheck = true,
    suffix: suffix2 = "",
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = {}
  } = _M, props = __objRest(_M, [
    "autoComplete",
    "backgroundColor",
    "boxShadow",
    "border",
    "className",
    "cursor",
    "defaultValue",
    "error",
    "flat",
    "hidden",
    "icon",
    "inProgress",
    "inputType",
    "label",
    "name",
    "onChange",
    "prefix",
    "placeholder",
    "size",
    "spellCheck",
    "suffix",
    "textColor",
    "textWeight",
    "validation"
  ]);
  var _a;
  const [value, setValue] = useState(defaultValue != null ? defaultValue : "");
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [valueChanged, setValueChanged] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value
        });
    } else {
      setProblems([]);
      if (onChange)
        onChange({
          problems: [],
          validated: true,
          value
        });
    }
  }, [value]);
  useEffect(() => {
    var _a2;
    setValue((_a2 = defaultValue != null ? defaultValue : value) != null ? _a2 : "");
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (label || problems.length > 0) && /* @__PURE__ */ React.createElement(InputLabel, {
    error: problems
  }, label), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
    backgroundColor,
    border,
    boxShadow,
    className: `${className} text-input`,
    cursor,
    error: problems,
    focused,
    flat,
    onClick: () => {
      var _a2;
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    },
    orientation: Orientation.Horizontal,
    size
  }, props), icon && /* @__PURE__ */ React.createElement(Icon, __spreadProps(__spreadValues({}, icon), {
    color: value === "" ? TextColors.InputPlaceholder : (_a = icon.color) != null ? _a : textColor,
    marginLeft: Amount.Less
  })), /* @__PURE__ */ React.createElement(Input$3, {
    autoComplete,
    defaultValue,
    hidden,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      setValueChanged(true);
      setValue(prefix2 + e.target.value + suffix2);
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder,
    textColor,
    textWeight,
    type: inputType,
    value,
    ref: inputRef,
    spellCheck
  }), inProgress && /* @__PURE__ */ React.createElement(Container$h, {
    grow: false
  }, /* @__PURE__ */ React.createElement(ProgressSpinner, {
    size: Size.Small
  }))));
});
const Input$3 = styled.input`
  ${TextInputStyles};

  background: transparent;
  border: none;
  width: 100%;

  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
const EmailAddressInput = memo((_N) => {
  var _O = _N, {
    autoComplete,
    defaultValue,
    onChange,
    validation = {}
  } = _O, props = __objRest(_O, [
    "autoComplete",
    "defaultValue",
    "onChange",
    "validation"
  ]);
  const [inProgress, setInProgress] = useState(false);
  const [emailAddress, setEmailAddress] = useState(defaultValue);
  const [error, setError] = useState();
  const validationProps = __spreadProps(__spreadValues({}, validation), {
    [Condition.IsEmailAddress]: Boolean(emailAddress)
  });
  return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
    autoComplete: autoComplete != null ? autoComplete : AutoComplete.EmailAddress,
    error,
    inProgress,
    onChange: async ({ problems, validated, value }) => {
      setError(problems);
      setEmailAddress(value);
      if (onChange)
        onChange({ problems, validated, value });
      if (Object.keys(validation).includes(Condition.IsUsernameAvailable) && validated && !(problems == null ? void 0 : problems.length) && value && value !== "")
        ;
    },
    validation: validationProps
  }, props));
});
const PhoneNumberInput = memo((_P) => {
  var props = __objRest(_P, []);
  return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
    validation: { [Condition.IsPhoneNumber]: true }
  }, props));
});
const getBorderColor = ({
  focused,
  error
}) => {
  if (error && Array.isArray(error) && error.length > 0)
    return BorderColors.Error;
  if (focused)
    return BorderColors.Primary;
  return BorderColors.InputControl;
};
const Wrapper$4 = styled.div`
  background: transparent;
  border: none;
  width: 100%;
  ${BoxShadowStyles};

  .react-date-picker,
  .react-date-picker__wrapper {
    width: 100%;

    .react-calendar {
      color: rgb(${TextColors.Lighter});
      overflow: hidden;
      width: 100%;
    }
  }

  .react-date-picker__wrapper {
    background: transparent;
    box-shadow: 0 0 0 transparent;
    border: none;
    cursor: ${Cursor.Pointer};
    width: 100%;
  }

  .react-date-picker__inputGroup {
    line-height: 26px;
    padding: 0 ${Amount.Least};
  }

  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    color: rgb(${TextColors.InputControl});
    font-size: 14px;
    font-weight: 500;
  }

  .react-date-picker__inputGroup__leadingZero {
    margin-right: 4px;
  }

  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    color: rgb(${TextColors.InputControl});
    height: initial;
    line-height: 24px;
    padding: 2px 6px 3px 6px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      border: 1px solid rgb(${BorderColors.InputControl});
    }

    &:focus {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
      border: 1px solid rgb(${BorderColors.Primary});
    }
  }

  .react-date-picker__inputGroup__divider {
    color: rgb(${ForegroundColors.Default});
  }

  .react-date-picker__calendar {
    background-color: rgb(${BackgroundColors.InputControl});
    border: 2px solid
      rgb(
        ${(props) => getBorderColor({ error: props.error, focused: props.focused })}
      );
    border-top: none;
    border-radius: 0 0 ${Amount.Least} ${Amount.Least};
    /* box-shadow: $ {DepthShadow.Higher}; */
    height: auto !important;
    left: -4px !important;
    padding: ${Amount.Least};
    right: -1px !important;
    top: calc(${(props) => props.size} - 3px) !important;
    transition: border 0.2s ease-in-out, opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
    z-index: 100500;
    width: calc(100% + (${(props) => props.size} + 8px));
  }

  .react-date-picker__calendar.react-date-picker__calendar--closed {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
  }

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__arrow {
      background-color: rgb(${BackgroundColors.Dark});
      border: none;
      border-radius: ${Size.Default};
      color: rgb(${TextColors.Lighter});
      cursor: ${Cursor.Pointer};
      height: ${Size.Default};
      margin: 0 ${Amount.Least};
      text-align: center;
      width: ${Size.Default};

      &:hover {
        background-color: rgb(${BackgroundColors.Darker});
      }
    }

    .react-calendar__navigation__label {
      background-color: transparent;
      border: none;
      border-radius: ${Amount.All};
      color: rgb(${TextColors.Default});
      cursor: ${Cursor.Pointer};
      font-weight: ${TextWeight.More};
      padding: ${Amount.Least} 0;

      &:hover {
        background-color: rgb(${BackgroundColors.Darker});
      }
    }
  }

  .react-calendar__tile {
    background: transparent;
    border: none;
    border-radius: ${Amount.Least};
    color: rgb(${TextColors.Default});
    padding: ${Amount.Less} 0;

    &:hover {
      background-color: rgb(${BackgroundColors.Darker});
      color: rgb(${TextColors.Light});
      cursor: ${Cursor.Pointer};
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: rgb(${BackgroundColors.Primary}) !important;
    color: rgb(${TextColors.InputControl});
  }

  .react-calendar__month-view__weekdays__weekday {
    border: none;
    font-size: ${TextSize.Small};
    padding: ${Amount.Least} 0;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgb(${TextColors.Darker});
  }
`;
const DownArrow = styled.div`
  cursor: ${Cursor.Pointer} !important;

  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
`;
const DateInput = memo((_Q) => {
  var _R = _Q, {
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    className = "",
    error,
    resetIcon,
    defaultValue,
    label,
    onChange,
    size = Size.Default,
    validation = { [Condition.IsDate]: true }
  } = _R, props = __objRest(_R, [
    "backgroundColor",
    "boxShadow",
    "border",
    "className",
    "error",
    "resetIcon",
    "defaultValue",
    "label",
    "onChange",
    "size",
    "validation"
  ]);
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [valueChanged, setValueChanged] = useState(false);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value
        });
    } else {
      setProblems([]);
      if (onChange && value)
        onChange({
          problems: [],
          validated: true,
          value
        });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (label || problems.length > 0) && /* @__PURE__ */ React.createElement(InputLabel, {
    error: problems
  }, label), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
    backgroundColor,
    border,
    boxShadow: !focused ? boxShadow : DepthShadow.Higher,
    className: `${className} date-input`,
    error: problems,
    focused,
    onMouseLeave: () => setFocused(false),
    orientation: Orientation.Horizontal,
    size
  }, props), /* @__PURE__ */ React.createElement(Wrapper$4, {
    error: problems,
    focused,
    size
  }), /* @__PURE__ */ React.createElement(DownArrow, {
    alignItems: Align.Center,
    alignContent: Align.Center,
    border: {
      left: {
        color: BorderColors.InputControl,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    className: "down-arrow",
    grow: false,
    menuVisible: focused,
    height: Size.Small,
    width: size
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: focused ? ForegroundColors.Lightest : ForegroundColors.Lighter,
    name: BasicIcons.CaretDownArrow,
    className: focused ? "up" : "down",
    size: Size.Smallest,
    transform: {
      rotate: focused ? 0 : 0
    }
  }))));
});
const DateTimeInput = memo(({
  error,
  resetIcon,
  defaultValue = new Date().toISOString(),
  onChange,
  validation = { [Condition.IsDate]: true }
}) => {
  return /* @__PURE__ */ React.createElement(InputContainer, null, /* @__PURE__ */ React.createElement(Wrapper$3, null));
});
const Wrapper$3 = styled.div`
  cursor: pointer;

  .react-date-picker,
  .react-date-picker__wrapper {
    border-radius: 6px;
    width: 100%;

    .react-calendar {
      border-radius: 15px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 100%;
    }
  }

  .react-date-picker__wrapper {
    background: white;
    box-shadow: 0 0 0 transparent;
    border: none;
    padding: 6px;
  }

  .react-date-picker__inputGroup {
    line-height: 26px;
  }

  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    color: #5b5b5b;
    font-size: 14px;
    font-weight: 500;
  }

  .react-date-picker__inputGroup__leadingZero {
    margin-right: 4px;
  }
  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    border: 1px solid transparent;
    border-radius: 4px;
    color: #5b5b5b;
    height: initial;
    line-height: 24px;
    padding: 2px 6px 3px 6px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      border: 1px solid #bbb;
    }

    &:focus {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
      border: 1px solid rgba(65, 145, 6, 1);
    }
  }

  select.react-date-picker__inputGroup__input {
    height: 27px;
  }

  .react-date-picker__inputGroup__divider {
    color: #aaa;
  }

  .react-date-picker__calendar {
    top: 45px !important;
    z-index: 100500;
  }

  .react-calendar__tile {
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: rgba(65, 145, 63, 1) !important;
    color: white;
  }
`;
const CurrencyAmountInput = memo(({
  backgroundColor = BackgroundColors.InputControl,
  boxShadow = DepthShadow.Low,
  border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1
  },
  className = "",
  defaultValue,
  label,
  name,
  onChange,
  size = Size.Default,
  textColor = TextColors.InputControl,
  textWeight = TextWeight.Default,
  validation = { [Condition.IsCurrency]: true }
}) => {
  const [value, setValue] = useState(defaultValue != null ? defaultValue : 0);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const inputRef = useRef(null);
  const [valueChanged, setValueChanged] = useState(false);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value
        });
    } else {
      setProblems([]);
      if (onChange && value)
        onChange({
          problems: [],
          validated: true,
          value
        });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (label || problems.length > 0) && /* @__PURE__ */ React.createElement(InputLabel, {
    error: problems
  }, label), /* @__PURE__ */ React.createElement(InputContainer, {
    backgroundColor,
    border,
    boxShadow,
    className: `${className} currency-amount-input`,
    onClick: () => {
      if (inputRef.current)
        inputRef.current.focus();
    },
    error: problems,
    focused
  }, /* @__PURE__ */ React.createElement(Label, {
    marginLeft: Amount.Less,
    marginRight: Amount.Least,
    textColor: !value ? TextColors.InputPlaceholder : textColor
  }, "$"), /* @__PURE__ */ React.createElement(CurrencyInputField, {
    className: "currency-input",
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
    name,
    defaultValue: value ? Number(value).toFixed(2) : 0,
    onValueChange: (v) => {
      setValueChanged(true);
      setValue(Number.parseInt(v != null ? v : "0"));
    },
    style: {
      backgroundColor: "transparent",
      border: "none",
      color: !value ? `rgb(${TextColors.InputPlaceholder})` : `rgb(${TextColors.InputControl})`,
      flexGrow: 1,
      fontWeight: textWeight,
      lineHeight: size
    }
  })));
});
const NavigationLink = memo((_S) => {
  var _T = _S, {
    active,
    activeClassName = "active",
    alignContent,
    alignItems = Align.Left,
    as = "span",
    backgroundColor,
    borderRadius = Amount.Less,
    children,
    className = "",
    focus,
    grow = true,
    hover,
    inline = false,
    label,
    lineHeight = Size.Smaller,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    menu,
    onClick,
    onMouseEnter,
    onMouseLeave,
    orientation = Orientation.Horizontal,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    rel,
    target,
    textColor = TextColors.Primary,
    textSize,
    textWeight,
    to
  } = _T, props = __objRest(_T, [
    "active",
    "activeClassName",
    "alignContent",
    "alignItems",
    "as",
    "backgroundColor",
    "borderRadius",
    "children",
    "className",
    "focus",
    "grow",
    "hover",
    "inline",
    "label",
    "lineHeight",
    "margin",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "menu",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "orientation",
    "padding",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "rel",
    "target",
    "textColor",
    "textSize",
    "textWeight",
    "to"
  ]);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [updatedBackgroundColor, setUpdatedBackgroundColor] = useState(backgroundColor);
  const [updatedTextColor, setUpdatedTextColor] = useState(textColor);
  const resolved = useResolvedPath(to);
  const exactMatch = useMatch({ end: true, path: resolved.pathname });
  useMatch({ end: false, path: resolved.pathname });
  const location = useLocation();
  const setTextColor = () => {
    if (focused && (focus == null ? void 0 : focus.textColor)) {
      setUpdatedTextColor(focus.textColor);
    } else if (exactMatch && (active == null ? void 0 : active.textColor)) {
      setUpdatedTextColor(active.textColor);
    } else if (hovered && (hover == null ? void 0 : hover.textColor)) {
      setUpdatedTextColor(hover.textColor);
    } else {
      setUpdatedTextColor(textColor);
    }
  };
  const setBackgroundColor = () => {
    if (focused && (focus == null ? void 0 : focus.backgroundColor)) {
      setUpdatedBackgroundColor(focus.backgroundColor);
    } else if (exactMatch && (active == null ? void 0 : active.backgroundColor)) {
      setUpdatedBackgroundColor(active.backgroundColor);
    } else if (hovered && (hover == null ? void 0 : hover.backgroundColor)) {
      setUpdatedBackgroundColor(hover.backgroundColor);
    } else {
      setUpdatedBackgroundColor(backgroundColor);
    }
  };
  useEffect(() => {
    setTextColor();
    setBackgroundColor();
  }, [hovered, focused, exactMatch]);
  return /* @__PURE__ */ React.createElement(NavLink, {
    className: `${className} navigation-link`,
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
    rel,
    target,
    to: to + location.search,
    style: {
      display: inline ? "inline-flex" : "flex",
      lineHeight: inline ? Size.Smaller : lineHeight,
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent,
    alignItems: menu ? Align.Stretch : alignItems,
    active,
    as,
    backgroundColor: updatedBackgroundColor,
    borderRadius,
    boxShadow: {
      blurRadius: 8,
      color: backgroundColor,
      offsetX: 0,
      offsetY: 3,
      opacity: 35,
      spreadRadius: 3
    },
    className: `${className} ${exactMatch ? activeClassName : ""} link`,
    focus,
    focused,
    grow,
    hover,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    onClick,
    onMouseEnter: (e) => {
      setHovered(true);
      if (onMouseEnter)
        onMouseEnter(e);
    },
    onMouseLeave: (e) => {
      setHovered(false);
      if (onMouseLeave)
        onMouseLeave(e);
    },
    orientation: menu ? Orientation.Vertical : orientation,
    padding,
    paddingBottom: menu ? paddingLeft : paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  }, props), label ? /* @__PURE__ */ React.createElement(Label, __spreadValues({
    lineHeight,
    textColor: updatedTextColor,
    textSize,
    textWeight
  }, props), label) : children));
});
const MenuItem = memo((_U) => {
  var _V = _U, {
    active,
    as = "div",
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Surface,
    className = "",
    component,
    focus,
    hover,
    icon,
    label,
    lineHeight = Size.Default,
    onClick,
    title,
    to,
    value
  } = _V, props = __objRest(_V, [
    "active",
    "as",
    "backgroundColor",
    "borderRadius",
    "boxShadow",
    "className",
    "component",
    "focus",
    "hover",
    "icon",
    "label",
    "lineHeight",
    "onClick",
    "title",
    "to",
    "value"
  ]);
  var _a;
  const [hovered, setHovered] = useState(false);
  const itemTitle = title ? /* @__PURE__ */ React.createElement(Label, {
    textSize: TextSize.Smaller
  }, title) : null;
  if (to) {
    return /* @__PURE__ */ React.createElement(Container$h, null, itemTitle, /* @__PURE__ */ React.createElement(NavigationLink, {
      active,
      borderRadius: Amount.Least,
      backgroundColor: hovered ? BackgroundColors.Primary : BackgroundColors.Transparent,
      focus,
      hover,
      icon,
      lineHeight,
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick)
          onClick(e);
      },
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textColor: (_a = props.textColor) != null ? _a : TextColors.Default,
      to
    }, component != null ? component : label));
  }
  return /* @__PURE__ */ React.createElement(Container$h, null, itemTitle, /* @__PURE__ */ React.createElement(Button$1, {
    alignContent: Align.Left,
    borderRadius: Amount.Least,
    backgroundColor: hovered ? BackgroundColors.Primary : BackgroundColors.Transparent,
    form: "null",
    icon,
    lineHeight,
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (onClick)
        onClick(e);
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    paddingLeft: Amount.Less,
    paddingRight: Amount.Less,
    type: hovered ? ButtonType.Primary : ButtonType.Transparent
  }, component != null ? component : label));
});
const Menu = memo((_W) => {
  var _X = _W, {
    as = "nav",
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Surface,
    className = "",
    menu,
    menuItemProps = {
      active: {
        backgroundColor: BackgroundColors.Primary,
        boxShadow: {
          blurRadius: 7,
          color: BackgroundColors.Primary,
          offsetX: 0,
          offsetY: 2,
          opacity: 35,
          spreadRadius: 4
        },
        textColor: TextColors.PrimaryContrast
      },
      borderRadius: Amount.Least,
      focus: {
        textColor: TextColors.PrimaryContrast
      },
      hover: {
        backgroundColor: BackgroundColors.Primary,
        textColor: TextColors.PrimaryContrast
      },
      padding: Amount.None,
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textSize: TextSize.Small
    },
    maxHeight = 120,
    onClick,
    onItemClick,
    orientation = Orientation.Vertical,
    minWidth = 80,
    padding = Amount.Least
  } = _X, props = __objRest(_X, [
    "as",
    "backgroundColor",
    "borderRadius",
    "boxShadow",
    "className",
    "menu",
    "menuItemProps",
    "maxHeight",
    "onClick",
    "onItemClick",
    "orientation",
    "minWidth",
    "padding"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    as,
    backgroundColor,
    boxShadow,
    borderRadius,
    className: `${className} menu`,
    maxHeight,
    minWidth,
    orientation,
    overflow: Overflow.ScrollVertical,
    padding
  }, props), menu && menu.map((item, key) => {
    return /* @__PURE__ */ React.createElement(MenuItem, __spreadValues(__spreadValues({
      key,
      onClick: () => {
        if (onItemClick) {
          onItemClick(item);
        }
      }
    }, menuItemProps), item));
  }));
});
const Wrapper$2 = styled.button`
  ${InputContainerStyles};

  z-index: ${(props) => {
  var _a;
  return props.menuVisible ? getDepthZIndex((_a = props.depth) != null ? _a : Depth.Surface) + 3 : "auto";
}};

  ${(props) => props.focused && props.menuVisible && css`
      border-bottom-color: transparent;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &:before {
        border-radius: calc(${Amount.Least} + 3px) calc(${Amount.Least} + 3px) 0
          0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
      }
    `};
`;
const DropdownControl = memo((_Y) => {
  var _Z = _Y, {
    backgroundColor = BackgroundColors.DropdownMenu,
    border = {
      color: BorderColors.Default,
      style: BorderStyle.Solid,
      width: 1
    },
    borderRadius = Amount.Least,
    className = "",
    component,
    error,
    focused,
    icon,
    label,
    menuVisible,
    onFocus,
    onBlur,
    onClick,
    placeholder = "Select an option",
    ref,
    size = Size.Default,
    textColor = TextColors.DropdownMenu
  } = _Z, props = __objRest(_Z, [
    "backgroundColor",
    "border",
    "borderRadius",
    "className",
    "component",
    "error",
    "focused",
    "icon",
    "label",
    "menuVisible",
    "onFocus",
    "onBlur",
    "onClick",
    "placeholder",
    "ref",
    "size",
    "textColor"
  ]);
  var _a;
  return /* @__PURE__ */ React.createElement(Wrapper$2, __spreadValues({
    as: "button",
    alignContent: Align.Stretch,
    alignItems: Align.Center,
    backgroundColor,
    borderRadius,
    border: __spreadProps(__spreadValues({}, border), {
      color: error && Array.isArray(error) && error.length > 0 ? BorderColors.Error : border.hasOwnProperty("color") ? border == null ? void 0 : border.color : BorderColors.InputControl
    }),
    depth: menuVisible ? Depth.Higher : Depth.Surface,
    orientation: Orientation.Horizontal,
    className: `${className} dropdown-control`,
    cursor: Cursor.Pointer,
    error,
    form: "null",
    focused,
    grow: false,
    menuVisible,
    onBlur,
    onFocus,
    onClick,
    ref
  }, props), component ? component : /* @__PURE__ */ React.createElement(Label, {
    alignItems: Align.Center,
    alignContent: Align.Stretch,
    grow: true,
    icon,
    overflow: Overflow.Hidden,
    marginLeft: Amount.None,
    marginRight: Amount.None,
    paddingLeft: Amount.Less,
    paddingRight: Amount.Least,
    size,
    textColor: !label && placeholder ? TextColors.InputPlaceholder : textColor,
    textOverflow: TextOverflow.Ellipsis,
    whiteSpace: WhiteSpace.NoWrap,
    width: "auto"
  }, (_a = label != null ? label : placeholder) != null ? _a : ""), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    alignContent: Align.Center,
    border: {
      left: {
        color: BorderColors.InputControl,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    className: "down-arrow",
    grow: false,
    height: Size.Small,
    width: size
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: menuVisible ? ForegroundColors.Lightest : ForegroundColors.Lighter,
    name: BasicIcons.CaretDownArrow,
    className: menuVisible ? "up" : "down",
    size: Size.Smallest,
    transform: {
      rotate: menuVisible ? -180 : 0
    }
  })));
});
const DropdownPanel = memo((__) => {
  var _$ = __, {
    alignItems = Align.Stretch,
    backgroundColor = BackgroundColors.Lightest,
    border = {
      color: BackgroundColors.Transparent,
      style: BorderStyle.Solid,
      width: 1
    },
    borderRadius = Amount.Less,
    children,
    className = "",
    depth = Depth.Higher,
    focused,
    orientation = Orientation.Vertical,
    visible = false
  } = _$, props = __objRest(_$, [
    "alignItems",
    "backgroundColor",
    "border",
    "borderRadius",
    "children",
    "className",
    "depth",
    "focused",
    "orientation",
    "visible"
  ]);
  return /* @__PURE__ */ React.createElement(Wrapper$1, __spreadValues({
    alignItems,
    backgroundColor,
    border,
    borderRadius,
    className: `${className} dropdown-panel`,
    depth,
    focused,
    orientation,
    visible
  }, props), children);
});
const Wrapper$1 = styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${VisibilityStyles};

  border-radius: ${(props) => `0 0 ${props.borderRadius} ${props.borderRadius}`}; //flex-basis: 115px;
  left: 0;
  opacity: ${(props) => props.visible ? 1 : 0};
  position: absolute;
  right: 0;
  top: calc(100% - 3px);

  &:before {
    border-radius: 0 0 calc(${Amount.Least} + 3px) calc(${Amount.Least} + 3px);
    border-top-color: transparent;
  }
`;
const DropdownInput = memo((_aa) => {
  var _ba = _aa, {
    backgroundColor = BackgroundColors.DropdownMenu,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    borderRadius = Amount.Least,
    className = "",
    defaultValue,
    label,
    menu,
    maxWidth = 300,
    minWidth = 240,
    name,
    onChange,
    padding = 5,
    placeholder,
    size = Size.Default,
    validation
  } = _ba, props = __objRest(_ba, [
    "backgroundColor",
    "border",
    "borderRadius",
    "className",
    "defaultValue",
    "label",
    "menu",
    "maxWidth",
    "minWidth",
    "name",
    "onChange",
    "padding",
    "placeholder",
    "size",
    "validation"
  ]);
  const [focused, setFocused] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [problems, setProblems] = useState([]);
  const [item, setItem] = useState(menu == null ? void 0 : menu.find((i) => i.value === defaultValue));
  const [valueChanged, setValueChanged] = useState(false);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = validate(item, validation);
      setProblems(probs);
      if (onChange)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value: item == null ? void 0 : item.value
        });
    } else {
      setProblems([]);
      if (onChange)
        onChange({
          problems: [],
          validated: true,
          value: item == null ? void 0 : item.value
        });
    }
  }, [item]);
  useEffect(() => {
    var _a, _b;
    setItem((_b = (_a = menu == null ? void 0 : menu.find((i) => i.value === defaultValue)) != null ? _a : item) != null ? _b : void 0);
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (label || problems.length > 0) && /* @__PURE__ */ React.createElement(InputLabel, {
    error: problems
  }, label), /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    boxShadow: menuVisible ? DepthShadow.Higher : DepthShadow.Surface,
    borderRadius,
    className: `${className} dropdown-input`,
    depth: menuVisible ? Depth.Higher : Depth.Surface,
    grow: false,
    minWidth,
    orientation: Orientation.Vertical,
    onMouseLeave: () => setMenuVisible(false),
    height: size
  }, props), /* @__PURE__ */ React.createElement(DropdownControl, {
    backgroundColor,
    border,
    boxShadow: DepthShadow.Low,
    component: item == null ? void 0 : item.component,
    depth: Depth.High,
    error: problems,
    focused,
    icon: item == null ? void 0 : item.icon,
    label: item == null ? void 0 : item.label,
    menuVisible,
    name,
    onBlur: () => {
      setFocused(false);
    },
    onFocus: () => setFocused(true),
    onClick: () => setMenuVisible(!menuVisible),
    placeholder,
    size
  }), /* @__PURE__ */ React.createElement(DropdownPanel, {
    backgroundColor,
    borderRadius,
    focused,
    padding,
    visible: menuVisible
  }, /* @__PURE__ */ React.createElement(Menu, {
    backgroundColor: BackgroundColors.Light,
    borderRadius,
    menu,
    onItemClick: (i) => {
      setValueChanged(true);
      setItem(i);
      setMenuVisible(false);
    },
    padding
  }))));
});
const CountryInput = memo((_ca) => {
  var _da = _ca, {
    defaultValue = CountryCode.UnitedStates,
    menu = Object.entries(Countries.getAlpha2Codes()).map(([alpha2, alpha3]) => ({
      icon: {
        component: /* @__PURE__ */ React.createElement(ReactCountryFlag, {
          svg: true,
          countryCode: alpha2,
          style: { height: Size.Smaller, width: "auto" }
        })
      },
      label: Countries.getName(alpha2, "en", { select: "official" }),
      value: alpha2
    })),
    name = "country",
    onChange,
    placeholder = "Select a country"
  } = _da, props = __objRest(_da, [
    "defaultValue",
    "menu",
    "name",
    "onChange",
    "placeholder"
  ]);
  return /* @__PURE__ */ React.createElement(DropdownInput, __spreadValues({
    defaultValue,
    menu,
    name,
    onChange: ({
      problems,
      value,
      validated
    }) => onChange && onChange({
      problems,
      validated,
      value
    }),
    placeholder
  }, props));
});
const CurrencyInput = memo((_ea) => {
  var _fa = _ea, {
    defaultValue = CurrencyCode.UnitedStatesDollar,
    name = "language",
    onChange,
    placeholder = "Select a currency"
  } = _fa, props = __objRest(_fa, [
    "defaultValue",
    "name",
    "onChange",
    "placeholder"
  ]);
  const currencies = [
    {
      icon: {
        component: /* @__PURE__ */ React.createElement(ReactCountryFlag, {
          svg: true,
          countryCode: CountryCode.UnitedStates,
          style: { height: Size.Smaller, width: "auto" }
        })
      },
      label: "US Dollar (USD)",
      value: CurrencyCode.UnitedStatesDollar
    }
  ];
  return /* @__PURE__ */ React.createElement(DropdownInput, __spreadValues({
    defaultValue,
    menu: currencies,
    name,
    onChange: ({
      problems,
      value,
      validated
    }) => onChange && onChange({
      problems,
      validated,
      value
    }),
    placeholder
  }, props));
});
const LanguageInput = memo((_ga) => {
  var _ha = _ga, {
    defaultValue = LanguageCode.English,
    name,
    onChange,
    placeholder = "Select a language"
  } = _ha, props = __objRest(_ha, [
    "defaultValue",
    "name",
    "onChange",
    "placeholder"
  ]);
  const languages = [
    {
      icon: {
        component: /* @__PURE__ */ React.createElement(ReactCountryFlag, {
          svg: true,
          countryCode: CountryCode.UnitedStates,
          style: { height: Size.Smaller, width: "auto" }
        })
      },
      label: "English (US)",
      value: LanguageCode.English
    }
  ];
  return /* @__PURE__ */ React.createElement(DropdownInput, __spreadValues({
    defaultValue,
    menu: languages,
    name,
    onChange,
    placeholder
  }, props));
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t[p] = s2[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v) {
      return step([n2, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);
  if (typeof f.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h) {
            return h.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}
var _default = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    var fileName = file.name || "";
    var mimeType = (file.type || "").toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || _default(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    accept: Array.isArray(accept) ? accept.filter(function(item) {
      return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
    }).reduce(function(a, b) {
      return _objectSpread$1(_objectSpread$1({}, a), {}, _defineProperty$1({}, b, []));
    }, {}) : {}
  }];
}
var _excluded = ["children"], _excluded2 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ React.createElement(Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  children: PropTypes.func,
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  multiple: PropTypes.bool,
  preventDropOnDocument: PropTypes.bool,
  noClick: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  noDrag: PropTypes.bool,
  noDragEventsBubbling: PropTypes.bool,
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  maxFiles: PropTypes.number,
  disabled: PropTypes.bool,
  getFilesFromEvent: PropTypes.func,
  onFileDialogCancel: PropTypes.func,
  onFileDialogOpen: PropTypes.func,
  useFsAccessApi: PropTypes.bool,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  validator: PropTypes.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread(_objectSpread({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = useRef(null);
  var inputRef = useRef(null);
  var _useReducer = useReducer(reducer, initialState), _useReducer2 = _slicedToArray(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var onWindowFocus = function onWindowFocus2() {
    if (isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  useEffect(function() {
    if (useFsAccessApi && canUseFileSystemAccessAPI()) {
      return function() {
      };
    }
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, useFsAccessApi]);
  var dragTargetsRef = useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e) {
            return e;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = useCallback(function() {
    if (useFsAccessApi && canUseFileSystemAccessAPI()) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        return setFiles(files, null);
      }).catch(function(e) {
        return onFileDialogCancelCb(e);
      }).finally(function() {
        return dispatch({
          type: "closeDialog"
        });
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef, openFileDialog]);
  var onFocusCb = useCallback(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = useCallback(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = useMemo(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: "off",
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread(_objectSpread({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread(_objectSpread({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread({}, initialState);
    default:
      return state;
  }
}
function noop() {
}
const CloseButton = memo((_ia) => {
  var _ja = _ia, {
    backgroundColor = BackgroundColors.CloseButton,
    iconColor = ForegroundColors.CloseButton,
    className = "",
    onClick,
    size = Size.Default
  } = _ja, props = __objRest(_ja, [
    "backgroundColor",
    "iconColor",
    "className",
    "onClick",
    "size"
  ]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const iconHoverColor = hovered ? ForegroundColors.PrimaryContrast : iconColor;
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent: Align.Center,
    alignItems: Align.Center,
    as: "button",
    backgroundColor: hovered ? BackgroundColors.Primary : backgroundColor,
    borderRadius: Amount.All,
    className: `${className} close-button`,
    depth: Depth.Higher,
    focused,
    form: "null",
    grow: false,
    height: size,
    onClick,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    width: size
  }, props), /* @__PURE__ */ React.createElement(Icon, {
    color: iconHoverColor,
    name: BasicIcons.Close,
    size: Size.Smallest
  }));
});
const ImageInput = memo(({
  backgroundColor = BackgroundColors.InputControl,
  border = {
    color: BorderColors.Default,
    style: BorderStyle.Solid,
    width: 1
  },
  borderRadius = Amount.Least,
  button = {
    label: "Choose File"
  },
  defaultValue = [],
  icon = {
    name: BasicIcons.Upload,
    size: Size.Default
  },
  label,
  maxImages = 1,
  name = "images",
  onChange,
  padding = Amount.Default
}) => {
  var _c, _d, _e, _f;
  const [images, setImages] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState();
  const [previewImages, setPreviewImages] = useState([]);
  const [problems, setProblems] = useState([]);
  const validateFileType = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon"
    ];
    if (!validTypes.includes(file.type)) {
      return false;
    }
    return true;
  };
  const validateNotAdded = (file) => {
    const added = previewImages && previewImages.some((f) => {
      return f.hasOwnProperty("path") && f.path === file.name;
    });
    if (added) {
      setErrorMessage("File already added");
      return {
        code: "image-already-added",
        message: `Image already added`
      };
    }
    setErrorMessage(null);
    return null;
  };
  const onDrop = useCallback((files) => {
    for (const file of files) {
      if (validateFileType(file)) {
        if (maxImages > 1) {
          setImages((prevArray) => [...prevArray.slice(-maxImages + 1), file]);
        } else {
          setImages([file]);
        }
      } else {
        file.invalid = true;
        setErrorMessage("File type not permitted");
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    maxFiles: maxImages,
    noClick: true,
    onDrop,
    validator: validateNotAdded
  });
  useEffect(() => {
    if (!images || images.length === 0) {
      setPreviewImages([]);
      return;
    }
    const objectUrls = images.map((image) => {
      if ("size" in image && image.size > 0) {
        return __spreadValues({ url: URL.createObjectURL(image) }, image);
      }
      return image;
    });
    setPreviewImages(objectUrls);
    return () => {
      for (const image of objectUrls) {
        if ("url" in image && image.url) {
          URL.revokeObjectURL(image.url);
        }
      }
    };
  }, [images]);
  useEffect(() => {
    if (onChange)
      onChange({ value: images });
  }, [previewImages]);
  const dragLabel = `Drag ${maxImages > 1 ? "images" : "an image"} here...`;
  const buttonLabel = `Browse files`;
  const _a = getInputProps(), { ref: inputRef } = _a, inputProps = __objRest(_a, ["ref"]);
  const _b = getRootProps(), { ref: rootRef } = _b, rootProps = __objRest(_b, ["ref"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (label || problems.length > 0) && /* @__PURE__ */ React.createElement(InputLabel, {
    error: problems
  }, label, maxImages > 1 && ` (${previewImages.length} of ${maxImages})`), /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Center,
    alignContent: Align.Center,
    backgroundColor: isDragActive ? BackgroundColors.Darker : backgroundColor,
    border: __spreadProps(__spreadValues({}, border), {
      color: problems && Array.isArray(problems) && problems.length > 0 ? BorderColors.Error : border == null ? void 0 : border.color
    }),
    borderRadius,
    boxShadow: DepthShadow.Low,
    grow: false,
    padding
  }, rootProps), /* @__PURE__ */ React.createElement(Container$h, {
    grow: false
  }, /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    alignContent: Align.Center,
    grow: false,
    padding: Amount.Default,
    paddingTop: Amount.Least
  }, /* @__PURE__ */ React.createElement("input", __spreadValues({
    name
  }, inputProps)), errorMessage && /* @__PURE__ */ React.createElement(ErrorLabel, null, errorMessage), previewImages && previewImages.length > 0 ? /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Stretch,
    grow: false,
    marginBottom: Amount.Less
  }, /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Stretch,
    alignContent: Align.Center,
    backgroundColor: BackgroundColors.Lightest,
    borderRadius: Amount.Least,
    lineWrap: true,
    opacity: isDragActive ? 50 : 100,
    orientation: Orientation.Horizontal,
    paddingBottom: Amount.Least,
    paddingLeft: Amount.Least,
    paddingRight: Amount.Least,
    paddingTop: Amount.Least
  }, previewImages.map((image, index) => /* @__PURE__ */ React.createElement(Container$h, {
    grow: false,
    key: index,
    marginBottom: Amount.Least,
    marginLeft: Amount.Least,
    marginRight: Amount.Least,
    marginTop: Amount.Least
  }, /* @__PURE__ */ React.createElement(CloseButton, {
    onClick: () => {
      setImages((files) => files == null ? void 0 : files.filter((e, i) => i !== index));
    },
    position: Position.Absolute,
    right: -7,
    size: Size.Small,
    top: -7
  }), /* @__PURE__ */ React.createElement(Image, {
    alt: "preview",
    borderRadius: Amount.Least,
    fadeIn: true,
    key: index,
    height: 70,
    width: 70,
    url: image.url
  }))))) : /* @__PURE__ */ React.createElement(Icon, {
    marginBottom: Amount.Less,
    name: (_c = icon == null ? void 0 : icon.name) != null ? _c : BasicIcons.FileUpload,
    size: (_d = icon == null ? void 0 : icon.size) != null ? _d : Size.Default
  }), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    orientation: Orientation.Vertical
  }, /* @__PURE__ */ React.createElement(Label, {
    marginBottom: Amount.Least,
    size: Size.Small
  }, dragLabel), button && /* @__PURE__ */ React.createElement(Button$1, __spreadValues({
    form: "null",
    onClick: open,
    size: (_e = button.size) != null ? _e : Size.Small,
    type: (_f = button.type) != null ? _f : ButtonType.Primary
  }, button), buttonLabel))))));
});
const NumberInput = memo((_ka) => {
  var _la = _ka, {
    as,
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    className = "",
    cursor = Cursor.Text,
    defaultValue,
    error,
    hidden = false,
    icon,
    inProgress = false,
    label,
    name,
    onChange,
    onKeyPress,
    placeholder = "",
    prefix: prefix2 = "",
    size = Size.Default,
    suffix: suffix2 = "",
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = {}
  } = _la, props = __objRest(_la, [
    "as",
    "backgroundColor",
    "boxShadow",
    "border",
    "className",
    "cursor",
    "defaultValue",
    "error",
    "hidden",
    "icon",
    "inProgress",
    "label",
    "name",
    "onChange",
    "onKeyPress",
    "placeholder",
    "prefix",
    "size",
    "suffix",
    "textColor",
    "textWeight",
    "validation"
  ]);
  var _a;
  const [value, setValue] = useState(defaultValue);
  const [valueChanged, setValueChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    setValueChanged(true);
    if (valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange && value)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value
        });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a = problems[0]) == null ? void 0 : _a.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
    backgroundColor,
    border,
    boxShadow,
    cursor,
    className: `${className} number-input`,
    error: problems,
    focused,
    onClick: () => {
      var _a2;
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    },
    orientation: Orientation.Horizontal,
    size
  }, props), icon && /* @__PURE__ */ React.createElement(React.Fragment, null, icon), /* @__PURE__ */ React.createElement(Input$2, {
    defaultValue,
    hidden,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      setValueChanged(true);
      setValue(e.target.value);
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder,
    onKeyPress: (e) => e.key,
    ref: inputRef,
    textColor,
    type: "number",
    value
  }), inProgress && /* @__PURE__ */ React.createElement(Container$h, {
    grow: false
  }, /* @__PURE__ */ React.createElement(ProgressSpinner, {
    size: Size.Small
  }))));
});
const Input$2 = styled.input`
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Less};
  width: 100%;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
const SSNInput = memo((_ma) => {
  var _na = _ma, {
    as,
    backgroundColor = BackgroundColors.InputControl,
    boxShadow = DepthShadow.Low,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    className = "",
    cursor = Cursor.Text,
    defaultValue,
    error,
    hidden = false,
    icon,
    inProgress = false,
    label,
    name,
    onChange,
    onKeyPress,
    placeholder = "",
    size = Size.Default,
    textColor = TextColors.InputControl,
    textWeight = TextWeight.Default,
    validation = { [Condition.IsSSN]: true }
  } = _na, props = __objRest(_na, [
    "as",
    "backgroundColor",
    "boxShadow",
    "border",
    "className",
    "cursor",
    "defaultValue",
    "error",
    "hidden",
    "icon",
    "inProgress",
    "label",
    "name",
    "onChange",
    "onKeyPress",
    "placeholder",
    "size",
    "textColor",
    "textWeight",
    "validation"
  ]);
  var _a;
  const [value, setValue] = useState(defaultValue ? [
    Number.parseInt((defaultValue == null ? void 0 : defaultValue.toString().slice(0, 3)) || "000"),
    Number.parseInt((defaultValue == null ? void 0 : defaultValue.toString().slice(3, 5)) || "00"),
    Number.parseInt((defaultValue == null ? void 0 : defaultValue.toString().slice(5)) || "0000")
  ] : []);
  const [valueChanged, setValueChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  useEffect(() => {
    setValueChanged(true);
    if (valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange && value)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value: Number.parseInt(value.join(""))
        });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a = problems[0]) == null ? void 0 : _a.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
    backgroundColor,
    border,
    boxShadow,
    cursor,
    className: `${className} ssn-input`,
    error: problems,
    focused,
    onClick: () => {
      if (!focused && firstInputRef.current) {
        firstInputRef.current.focus();
      }
    },
    orientation: Orientation.Horizontal,
    paddingLeft: Amount.Least,
    paddingRight: Amount.Least,
    size
  }, props), icon && /* @__PURE__ */ React.createElement(React.Fragment, null, icon), /* @__PURE__ */ React.createElement(Input$1, {
    alignText: Align.Center,
    hidden,
    max: 999,
    min: 100,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      var _a2;
      setValueChanged(true);
      setValue([e.target.value, value[1], value[2]]);
      if (e.target.value.length === 3 && secondInputRef.current) {
        (_a2 = secondInputRef.current) == null ? void 0 : _a2.focus();
      }
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "123",
    onKeyPress: (e) => {
      if (e.target.value.length === 3) {
        e.preventDefault();
      }
    },
    ref: firstInputRef,
    textColor,
    type: "number"
  }), /* @__PURE__ */ React.createElement(Label, {
    textSize: TextSize.Larger
  }, "-"), /* @__PURE__ */ React.createElement(Input$1, {
    alignText: Align.Center,
    hidden,
    max: 99,
    min: 1,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      var _a2;
      setValueChanged(true);
      setValue([value[0], e.target.value, value[2]]);
      if (e.target.value.length === 2) {
        (_a2 = thirdInputRef.current) == null ? void 0 : _a2.focus();
      }
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "45",
    onKeyPress: (e) => {
      if (e.target.value.length === 2) {
        e.preventDefault();
      }
    },
    onKeyDown: (e) => {
      var _a2;
      if (e.key === "Backspace" && e.target.value.length === 0) {
        (_a2 = firstInputRef.current) == null ? void 0 : _a2.focus();
      }
    },
    ref: secondInputRef,
    textColor,
    type: "number"
  }), /* @__PURE__ */ React.createElement(Label, {
    textSize: TextSize.Larger
  }, "-"), /* @__PURE__ */ React.createElement(Input$1, {
    alignText: Align.Center,
    hidden,
    max: 9999,
    min: 1e3,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      setValueChanged(true);
      setValue([value[0], value[1], e.target.value]);
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "6789",
    onKeyPress: (e) => {
      if (e.target.value.length === 4) {
        e.preventDefault();
      }
    },
    onKeyDown: (e) => {
      var _a2;
      if (e.key === "Backspace" && e.target.value.length === 0) {
        (_a2 = secondInputRef.current) == null ? void 0 : _a2.focus();
      }
    },
    ref: thirdInputRef,
    textColor,
    type: "number"
  }), inProgress && /* @__PURE__ */ React.createElement(Container$h, {
    grow: false
  }, /* @__PURE__ */ React.createElement(ProgressSpinner, {
    size: Size.Small
  }))));
});
const Input$1 = styled.input`
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Least};
  -moz-appearance: textfield;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const LongTextInput = memo(({
  backgroundColor = BackgroundColors.InputControl,
  border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1
  },
  boxShadow = DepthShadow.Low,
  className = "",
  defaultValue,
  error,
  flat = false,
  hidden = false,
  inProgress = false,
  label,
  lineHeight = Amount.More,
  name,
  onChange,
  placeholder = "",
  size = Size.Default,
  spellCheck = true,
  textColor = TextColors.InputControl,
  validation = {}
}) => {
  var _a;
  const [value, setValue] = useState(defaultValue != null ? defaultValue : "");
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [valueChanged, setValueChanged] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = validate(value, validation);
      setProblems(probs);
      if (onChange)
        onChange({
          problems: probs,
          validated: probs.length === 0,
          value
        });
    } else {
      setProblems([]);
      if (onChange)
        onChange({
          problems: [],
          validated: true,
          value
        });
    }
  }, [value]);
  useEffect(() => {
    var _a2;
    setValue((_a2 = defaultValue != null ? defaultValue : value) != null ? _a2 : "");
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a = problems[0]) == null ? void 0 : _a.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, {
    backgroundColor,
    border,
    boxShadow,
    className: `${className} text-input`,
    error: problems,
    focused,
    flat,
    height: size,
    onClick: () => {
      var _a2;
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    },
    orientation: Orientation.Horizontal,
    padding: Amount.Least,
    paddingLeft: Amount.Less,
    paddingRight: Amount.Least,
    size
  }, /* @__PURE__ */ React.createElement(Input, {
    hidden,
    name,
    onBlur: () => setFocused(false),
    onChange: (e) => {
      setValueChanged(true);
      setValue(prefix + e.target.value + suffix);
    },
    onFocus: () => setFocused(true),
    placeholder,
    ref: inputRef,
    lineHeight,
    textColor,
    value,
    spellCheck
  }), inProgress && /* @__PURE__ */ React.createElement(Container$h, {
    grow: false
  }, /* @__PURE__ */ React.createElement(ProgressSpinner, {
    size: Size.Small
  }))));
});
const Input = styled.textarea`
  ${TextStyles};

  background: transparent;
  border: none;
  width: 100%;

  // &::placeholder,
  // &::-webkit-input-placeholder,
  // &::-moz-placeholder {
  //   );
  // }

  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
const PasswordInput = memo((_oa) => {
  var _pa = _oa, {
    autoComplete = AutoComplete.CurrentPassword,
    confirmPasswordLabel = "Confirm password",
    label = "Password",
    name,
    onChange,
    showConfirmPassword = false,
    showPasswordStrength = false,
    validation = {
      [Condition.IsRequired]: true,
      [Condition.HasLetterCount]: 2,
      [Condition.HasNumberCount]: 1,
      [Condition.HasSymbolCount]: 1,
      [Condition.HasUppercaseCount]: 1,
      [Condition.HasLowercaseCount]: 1,
      [Condition.IsLengthGreaterThanOrEqual]: 8,
      [Condition.IsLengthLessThanOrEqual]: 99
    }
  } = _pa, props = __objRest(_pa, [
    "autoComplete",
    "confirmPasswordLabel",
    "label",
    "name",
    "onChange",
    "showConfirmPassword",
    "showPasswordStrength",
    "validation"
  ]);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  useEffect(() => {
    if (showConfirmPassword) {
      const problems = validate(password, validation);
      if (password !== confirmPassword) {
        problems.push({
          condition: Condition.IsEqual,
          message: {
            long: "Passwords do not match.",
            short: "Passwords do not match"
          }
        });
      }
      if (onChange)
        onChange({
          problems,
          validated: problems.length === 0,
          value: password
        });
    } else {
      const problems = validate(password, validation);
      if (onChange)
        onChange({
          problems,
          validated: problems.length === 0,
          value: password
        });
    }
  }, [password, confirmPassword]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, showPasswordStrength && /* @__PURE__ */ React.createElement(PasswordStrengthBar, {
    className: "password-strength-label",
    password
  }), /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
    autoComplete: showConfirmPassword ? AutoComplete.NewPassword : AutoComplete.CurrentPassword,
    label,
    name,
    onChange: ({ problems, validated, value }) => {
      setPassword(value);
    },
    inputType: TextInputType.Password,
    validation
  }, props)), showConfirmPassword && /* @__PURE__ */ React.createElement(InputRow, {
    marginTop: Amount.More,
    marginBottom: Amount.None
  }, /* @__PURE__ */ React.createElement(InputLabel, null, confirmPasswordLabel), /* @__PURE__ */ React.createElement(TextInput, {
    autoComplete,
    inputType: TextInputType.Password,
    name: "confirmPassword",
    onChange: ({ value }) => {
      setConfirmPassword(value);
    },
    validation: {
      [Condition.IsEqual]: password
    }
  })));
});
function getInputElementByFieldType(field) {
  if (field.system)
    return null;
  switch (field.type) {
    case Primitives.Boolean:
      return /* @__PURE__ */ React.createElement(ToggleInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.CountryCode:
      return /* @__PURE__ */ React.createElement(CountryInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.CurrencyAmount:
      return /* @__PURE__ */ React.createElement(CurrencyAmountInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.CurrencyCode:
      return /* @__PURE__ */ React.createElement(CurrencyInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.Date:
      return /* @__PURE__ */ React.createElement(DateInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.DateTime:
      return /* @__PURE__ */ React.createElement(DateTimeInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.EmailAddress:
      return /* @__PURE__ */ React.createElement(EmailAddressInput, __spreadValues({
        autoComplete: field.autoComplete,
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.Image:
      return /* @__PURE__ */ React.createElement(ImageInput, __spreadValues(__spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field.properties), field));
    case Primitives.JSON:
      return /* @__PURE__ */ React.createElement(JSONEditor, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.LanguageCode:
      return /* @__PURE__ */ React.createElement(LanguageInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.LongText:
      return /* @__PURE__ */ React.createElement(LongTextInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.Menu:
      return /* @__PURE__ */ React.createElement(DropdownInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.Number:
      return /* @__PURE__ */ React.createElement(NumberInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.Password:
      return /* @__PURE__ */ React.createElement(PasswordInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.PhoneNumber:
      return /* @__PURE__ */ React.createElement(PhoneNumberInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.SSN:
      return /* @__PURE__ */ React.createElement(SSNInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.String:
      return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    case Primitives.UUID:
      return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
        defaultValue: field.value,
        hidden: true,
        onChange: field.onChange
      }, field));
    case Primitives.VerificationCode:
      return /* @__PURE__ */ React.createElement(VerificationCodeInput, __spreadValues({
        autoComplete: AutoComplete.OneTimeCode,
        defaultValue: field.value,
        onChange: field.onChange
      }, field));
    default:
      return /* @__PURE__ */ React.createElement(React.Fragment, null, field.type, " is not supported at this time.");
  }
}
const FormFields = memo((_qa) => {
  var _ra = _qa, {
    entity,
    fields,
    onChange
  } = _ra, props = __objRest(_ra, [
    "entity",
    "fields",
    "onChange"
  ]);
  var _a;
  const [fieldValues, setFieldValues] = useState(Object.fromEntries(fields.map((field) => {
    var _a2, _b;
    return [
      field.name,
      __spreadProps(__spreadValues({}, field), {
        value: (_b = (_a2 = entity == null ? void 0 : entity[field.name]) != null ? _a2 : field.value) != null ? _b : field.defaultValue
      })
    ];
  })));
  useEffect(() => {
    setFieldValues(Object.fromEntries(fields.map((field) => [
      field.name,
      __spreadValues(__spreadValues({}, field), fieldValues[field.name])
    ])));
  }, [entity, fields]);
  useEffect(() => {
    if (onChange)
      onChange(fieldValues);
  }, [fieldValues]);
  useEffect(() => {
    setFieldValues(Object.fromEntries(fields.map((field) => {
      var _a2, _b;
      return [
        field.name,
        __spreadProps(__spreadValues({}, field), {
          value: (_b = (_a2 = entity == null ? void 0 : entity[field.name]) != null ? _a2 : field.value) != null ? _b : field.defaultValue
        })
      ];
    })));
  }, [entity]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: "form-fields",
    borderRadius: Amount.More,
    orientation: Orientation.Vertical
  }, props), (_a = Object.entries(fieldValues)) == null ? void 0 : _a.map(([fieldName, field]) => {
    if (field.name === "created_date" || field.name === "updated_date")
      return null;
    return /* @__PURE__ */ React.createElement(InputRow, {
      key: field.name,
      style: {
        height: field.type === Primitives.UUID ? 0 : void 0,
        marginBottom: field.type === Primitives.UUID ? 0 : void 0,
        visibility: field.type === Primitives.UUID ? "hidden" : "visible"
      }
    }, getInputElementByFieldType(__spreadProps(__spreadValues({}, field), {
      onChange: ({
        problems,
        value,
        validated
      }) => setFieldValues(__spreadProps(__spreadValues({}, fieldValues), {
        [field.name]: __spreadProps(__spreadValues({}, field), { problems, validated, value })
      }))
    })));
  }));
});
const Form = memo((_sa) => {
  var _ta = _sa, {
    className = "",
    entity,
    fields,
    inProgress = false,
    onChange,
    onSubmit,
    model,
    name,
    padding = Amount.None,
    submitButton
  } = _ta, props = __objRest(_ta, [
    "className",
    "entity",
    "fields",
    "inProgress",
    "onChange",
    "onSubmit",
    "model",
    "name",
    "padding",
    "submitButton"
  ]);
  var _a, _b;
  const [fieldValues, setFieldValues] = useState({});
  const [validationProblems, setValidationProblems] = useState();
  const [isValidated, setValidated] = useState(false);
  const [requiresValidation, setRequiresValidation] = useState(false);
  const submitButtonProps = __spreadValues({
    fullWidth: false,
    label: "Submit",
    size: Size.Large,
    type: ButtonType.Primary
  }, submitButton);
  useEffect(() => {
    let problems = [];
    let validationRequired = false;
    for (const field of Object.entries(fieldValues)) {
      if (field[1].validation) {
        validationRequired = true;
      }
      if (field[1].problems) {
        problems = [...problems, ...field[1].problems];
      }
    }
    setRequiresValidation(validationRequired);
    setValidationProblems(problems);
    const validated = requiresValidation && Object.values(fieldValues).filter((field) => field.validation && !field.validated).length === 0;
    setValidated(validated);
    if (onChange)
      onChange({ fields: fieldValues, problems, validated });
  }, [fieldValues]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    as: "form",
    borderRadius: Amount.More,
    className: `${className} form`,
    id: name,
    orientation: Orientation.Vertical,
    name,
    padding
  }, props), fields && /* @__PURE__ */ React.createElement(FormFields, {
    entity,
    fields,
    onChange: (ff) => setFieldValues(ff)
  }), submitButton && /* @__PURE__ */ React.createElement(FormActions, null, /* @__PURE__ */ React.createElement(Button$1, {
    disabled: requiresValidation && !isValidated || inProgress,
    form: name,
    fullWidth: submitButtonProps.fullWidth,
    onClick: (e) => {
      e.preventDefault();
      if (onSubmit)
        onSubmit({
          fields: fieldValues,
          problems: validationProblems,
          validated: isValidated,
          values: Object.entries(fieldValues).map(([fieldName, field]) => ({
            [fieldName]: field.value
          }))
        });
    },
    onKeyPress: (e) => {
      if (e.key === "Enter" && onSubmit)
        onSubmit({
          fields: fieldValues,
          problems: validationProblems,
          validated: isValidated
        });
    },
    size: (_a = submitButtonProps.size) != null ? _a : Size.Large,
    type: (_b = submitButtonProps.type) != null ? _b : ButtonType.Primary
  }, submitButton.label)));
});
const Link = memo((_ua) => {
  var _va = _ua, {
    children,
    hover,
    size = Size.Small,
    textColor = TextColors.Link,
    textWeight = TextWeight.Default,
    to,
    underline = true,
    underlineColor = TextColors.Link
  } = _va, props = __objRest(_va, [
    "children",
    "hover",
    "size",
    "textColor",
    "textWeight",
    "to",
    "underline",
    "underlineColor"
  ]);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ React.createElement(Link$1, {
    to,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      alignItems: Align.Center,
      color: textColor,
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: Align.Center,
      outline: "none",
      textDecoration: (underline || hovered && (hover == null ? void 0 : hover.underline)) && !focused ? "underline" : "none"
    }
  }, /* @__PURE__ */ React.createElement(Container$e, {
    alignContent: Align.Center,
    alignItems: Align.Center,
    focused,
    grow: false,
    height: size
  }, /* @__PURE__ */ React.createElement(Label, __spreadValues({
    lineHeight: size,
    textColor,
    textWeight,
    underline: (underline || hovered && (hover == null ? void 0 : hover.underline)) && !focused,
    underlineColor: textColor
  }, props), children)));
});
const Container$e = styled.span`
  ${LayoutStyles};
  ${FocusedStyles};

  cursor: pointer;
  position: relative;

  &:before {
    border-radius: ${Amount.All};
    left: -9px;
    right: -9px;
  }
`;
const Small = memo((_wa) => {
  var _xa = _wa, {
    as = "small",
    className = "",
    children,
    lineHeight = Size.Small,
    textColor = TextColors.Light,
    textSize = TextSize.Small
  } = _xa, props = __objRest(_xa, [
    "as",
    "className",
    "children",
    "lineHeight",
    "textColor",
    "textSize"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    as,
    className: `${className} small`,
    textColor,
    lineHeight
  }, props), children);
});
const ForgotPasswordForm = memo(({
  backgroundColor = BackgroundColors.Darker,
  title = "Forgot your password?",
  showSignupLink,
  signUpLinkLabel,
  signInButtonLabel,
  forgotPasswordLinkLabel
}) => {
  const inProgress = useSelector((state) => {
    var _a;
    return (_a = state.authentication) == null ? void 0 : _a.in_progress;
  });
  const authError = useSelector((state) => {
    var _a;
    return (_a = state.authentication) == null ? void 0 : _a.error;
  });
  const startPasswordReset = async (email) => {
  };
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: "forgot-password-form",
    backgroundColor,
    borderRadius: Amount.More,
    boxShadow: DepthShadow.Highest,
    grow: false,
    padding: Amount.Most,
    paddingBottom: Amount.Default,
    width: 420
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: inProgress
  }), /* @__PURE__ */ React.createElement(Title, {
    alignText: Align.Center
  }, title), /* @__PURE__ */ React.createElement(Container$h, {
    marginBottom: Amount.More,
    marginTop: Amount.More
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    alignText: Align.Center
  }, "Enter the email address associated with your account and we'll send instructions on how to reset your password.")), authError && /* @__PURE__ */ React.createElement(ErrorNotification, {
    label: authError.userFriendlyMessage
  }), /* @__PURE__ */ React.createElement(Form, {
    name: "forgot-password-form",
    fields: [
      {
        autoComplete: AutoComplete.Username,
        label: "Email address",
        name: "emailAddress",
        type: Primitives.EmailAddress,
        validation: {
          [Condition.IsRequired]: true,
          [Condition.IsEmailAddress]: true
        }
      }
    ],
    inProgress,
    onSubmit: ({ fields, validated }) => {
      if (validated)
        startPasswordReset(fields.emailAddress.value);
    },
    submitButton: {
      fullWidth: true,
      label: "Send instructions"
    }
  }), /* @__PURE__ */ React.createElement(Container$h, {
    paddingLeft: Amount.Default,
    paddingRight: Amount.Default,
    paddingTop: Amount.Default
  }, /* @__PURE__ */ React.createElement(Small, {
    alignText: Align.Center
  }, /* @__PURE__ */ React.createElement(Link, {
    hover: { underline: true },
    to: "/login",
    underline: false
  }, "Login"))));
});
const LoginForm = memo((_ya) => {
  var _za = _ya, {
    backgroundColor = BackgroundColors.Darker,
    borderRadius = Amount.More,
    onLoginSuccess,
    title = "Login",
    showSignupLink,
    signUpLinkLabel,
    signInButtonLabel,
    forgotPasswordLinkLabel
  } = _za, props = __objRest(_za, [
    "backgroundColor",
    "borderRadius",
    "onLoginSuccess",
    "title",
    "showSignupLink",
    "signUpLinkLabel",
    "signInButtonLabel",
    "forgotPasswordLinkLabel"
  ]);
  var _a;
  const dispatch = useDispatch();
  const loginState = useSelector((state2) => {
    var _a2;
    return (_a2 = state2.user.authentication) == null ? void 0 : _a2.login;
  });
  const state = useSelector((state2) => state2);
  console.log("state2", state);
  const { error, inProgress, success } = loginState;
  useEffect(() => {
    if (onLoginSuccess && success) {
      onLoginSuccess();
    }
  }, [success]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: "login-form",
    backgroundColor,
    borderRadius,
    boxShadow: DepthShadow.Highest,
    grow: false,
    padding: Amount.Most,
    paddingBottom: Amount.Default,
    width: 420
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    borderRadius,
    visible: inProgress
  }), /* @__PURE__ */ React.createElement(Title, {
    alignContent: Align.Center
  }, title), /* @__PURE__ */ React.createElement(NotificationLabel, {
    alignItems: Align.Center,
    alignSelf: Align.Center,
    backgroundColor: BackgroundColors.Darkest,
    marginTop: Amount.Default,
    marginBottom: Amount.All,
    orientation: Orientation.Vertical,
    grow: false,
    showOrb: false
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    alignText: Align.Center
  }, "Don't have an account yet?", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "/signup",
    hover: { underline: true },
    underline: false
  }, "Sign up for free!"))), error && /* @__PURE__ */ React.createElement(ErrorNotification, {
    label: (_a = error == null ? void 0 : error.friendlyMessage) != null ? _a : "An error occurred unfortunately."
  }), /* @__PURE__ */ React.createElement(Form, {
    fields: [
      {
        autoComplete: AutoComplete.Username,
        label: "Email address",
        name: "username",
        type: Primitives.EmailAddress,
        validation: {
          [Condition.IsRequired]: true
        }
      },
      {
        autoComplete: AutoComplete.CurrentPassword,
        label: "Password",
        name: "password",
        type: Primitives.Password,
        validation: {
          [Condition.IsRequired]: true,
          [Condition.HasLetterCount]: 2,
          [Condition.HasNumberCount]: 1,
          [Condition.HasSymbolCount]: 1,
          [Condition.HasUppercaseCount]: 1,
          [Condition.HasLowercaseCount]: 1,
          [Condition.IsLengthGreaterThanOrEqual]: 8,
          [Condition.IsLengthLessThanOrEqual]: 99
        }
      }
    ],
    inProgress,
    name: "login-form",
    onSubmit: ({
      fields,
      validated
    }) => {
      var _a2, _b;
      console.log("fields", fields);
      if (validated)
        dispatch(login({
          password: (_a2 = fields.password) == null ? void 0 : _a2.value,
          username: (_b = fields.username) == null ? void 0 : _b.value
        }));
    },
    submitButton: {
      fullWidth: true,
      label: "Login"
    }
  }), /* @__PURE__ */ React.createElement(Container$h, {
    paddingLeft: Amount.Default,
    paddingRight: Amount.Default,
    paddingTop: Amount.Default
  }, /* @__PURE__ */ React.createElement(Small, {
    alignText: Align.Center
  }, /* @__PURE__ */ React.createElement(Link, {
    hover: { underline: true },
    to: "/forgot-password",
    underline: false
  }, "Forgot your password?"))));
});
const SignupForm = memo(({
  backgroundColor = BackgroundColors.Darker,
  borderRadius = Amount.More,
  onSignupSuccess,
  title = "Sign up"
}) => {
  var _a;
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => {
    var _a2;
    return (_a2 = state.user.authentication) == null ? void 0 : _a2.signup;
  });
  const { error, inProgress, success } = signUpState;
  useEffect(() => {
    if (onSignupSuccess && success) {
      onSignupSuccess({ userId: signUpState.userId });
    }
  }, [success]);
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: "signup-form",
    backgroundColor,
    borderRadius,
    boxShadow: DepthShadow.Highest,
    grow: false,
    padding: Amount.Most,
    paddingBottom: Amount.Default,
    width: 420
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    borderRadius,
    visible: inProgress
  }), /* @__PURE__ */ React.createElement(Title, {
    alignText: Align.Center
  }, title), /* @__PURE__ */ React.createElement(NotificationLabel, {
    alignItems: Align.Center,
    alignSelf: Align.Center,
    backgroundColor: BackgroundColors.Darkest,
    marginTop: Amount.Default,
    marginBottom: Amount.All,
    orientation: Orientation.Vertical,
    grow: false,
    showOrb: false
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    alignText: Align.Center
  }, "Already have an account?", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "/login",
    hover: { underline: true },
    underline: false
  }, "Sign in"))), error && /* @__PURE__ */ React.createElement(ErrorNotification, {
    label: (_a = error == null ? void 0 : error.friendlyMessage) != null ? _a : "An error occurred unfortunately."
  }), /* @__PURE__ */ React.createElement(Form, {
    fields: [
      {
        autoComplete: AutoComplete.GivenName,
        label: "First name",
        name: "firstName",
        type: Primitives.String,
        validation: {
          [Condition.IsRequired]: true
        }
      },
      {
        autoComplete: AutoComplete.FamilyName,
        label: "Last name",
        name: "lastName",
        type: Primitives.String,
        validation: {
          [Condition.IsRequired]: true
        }
      },
      {
        autoComplete: AutoComplete.Username,
        label: "Email address",
        name: "username",
        type: Primitives.EmailAddress,
        validation: {
          [Condition.IsRequired]: true,
          [Condition.IsEmailAddress]: true
        }
      },
      {
        autoComplete: AutoComplete.NewPassword,
        label: "Password",
        name: "password",
        type: Primitives.Password,
        validation: {
          [Condition.IsRequired]: true,
          [Condition.HasLetterCount]: 2,
          [Condition.HasNumberCount]: 1,
          [Condition.HasSymbolCount]: 1,
          [Condition.HasUppercaseCount]: 1,
          [Condition.HasLowercaseCount]: 1,
          [Condition.IsLengthGreaterThanOrEqual]: 8,
          [Condition.IsLengthLessThanOrEqual]: 99
        }
      }
    ],
    inProgress,
    name: "signup-form",
    onSubmit: ({ fields, validated }) => {
      var _a2, _b, _c, _d;
      if (validated)
        dispatch(signUp({
          firstName: (_a2 = fields.firstName) == null ? void 0 : _a2.value,
          lastName: (_b = fields.lastName) == null ? void 0 : _b.value,
          password: (_c = fields.password) == null ? void 0 : _c.value,
          username: (_d = fields.username) == null ? void 0 : _d.value
        }));
    },
    submitButton: {
      fullWidth: true,
      label: "Sign up"
    }
  }), /* @__PURE__ */ React.createElement(Container$h, {
    paddingLeft: Amount.Default,
    paddingRight: Amount.Default,
    paddingTop: Amount.Default
  }, /* @__PURE__ */ React.createElement(Small, {
    alignText: Align.Center
  }, 'By clicking the "Sign up" button you agree to the', " ", /* @__PURE__ */ React.createElement(Link, {
    hover: { underline: true },
    to: "/privacy",
    underline: false
  }, "Privacy Policy"), ".")));
});
const AddPaymentMethodForm = memo(({
  cancel,
  paymentMethodsCount
}) => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleFormSubmit = async (e) => {
    setInProgress(true);
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createPaymentMethod({
      card: cardElement,
      type: "card"
    });
    const {
      error,
      paymentMethod
    } = result;
    if (error) {
      setHasError(true);
      setErrorMessage(error == null ? void 0 : error.message);
    } else if (paymentMethod && paymentMethod.id) {
      dispatch(getPaymentMethods());
      cancel();
    }
    setInProgress(false);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleFormSubmit
  }, hasError && /* @__PURE__ */ React.createElement(Error$1, null, errorMessage), /* @__PURE__ */ React.createElement(CardInput, {
    disabled: inProgress
  }, /* @__PURE__ */ React.createElement(CardElement, {
    onChange: () => {
      setHasError(false);
      setInProgress(false);
      setErrorMessage("");
    },
    options: {
      iconStyle: "solid",
      style: {
        base: {
          "::placeholder": {
            color: "#aab7c4"
          },
          color: "#424770",
          fontSize: "16px"
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }
  })), inProgress && /* @__PURE__ */ React.createElement(Progress$1, null, /* @__PURE__ */ React.createElement(ProgressSpinner, null)), paymentMethodsCount > 0 && /* @__PURE__ */ React.createElement(GoBack, null, /* @__PURE__ */ React.createElement(Button$1, {
    disabled: inProgress,
    onClick: cancel
  }, "Cancel")));
});
const Error$1 = styled.div`
  background: rgba(255, 65, 54, 0.1);
  border-radius: 8px;
  color: rgba(255, 65, 54, 1);
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 25px 0;
  padding: 15px 20px;
`;
const CardInput = styled.div`
  background: white;
  box-shadow: 0 0 0 transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #5b5b5b;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  margin: 0 0 25px 0;
  padding: 9px;
  transition: border 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border: 1px solid #bbb;
  }

  &:focus {
    border: 1px solid #0074d9 !important;
  }

  &::placeholder {
    color: #9b9b9b;
  }

  ${(props) => props.disabled && css`
      pointer-events: none;
    `};
`;
const Progress$1 = styled.div`
  float: right;
  padding: 0;
`;
const GoBack = styled.div`
  float: right;
`;
const PaymentMethodModal = memo(({
  paymentMethods,
  premium,
  visible
}) => {
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false);
  const [reviewOrder, setReviewOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  useEffect(() => {
    dispatch(getPaymentMethods());
  }, []);
  const confirmPurchase = async () => {
    if (paymentMethod) {
      setInProgress(true);
      setPaymentSuccess(true);
      dispatch(getSubscriptions());
      setInProgress(false);
    }
  };
  return /* @__PURE__ */ React.createElement(Container$d, {
    visible
  }, /* @__PURE__ */ React.createElement(Content$3, {
    visible
  }, /* @__PURE__ */ React.createElement(Close$2, null, /* @__PURE__ */ React.createElement(CloseButton, {
    onClick: () => {
      setReviewOrder(false);
      setPaymentSuccess(false);
      setPaymentMethod(null);
    }
  })), paymentSuccess && /* @__PURE__ */ React.createElement(PaymentSuccess, null, /* @__PURE__ */ React.createElement("h3", null, "Payment Success"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Thank you for subscribing to", " ")), /* @__PURE__ */ React.createElement(Button$1, {
    onClick: () => {
      setReviewOrder(false);
      setPaymentSuccess(false);
      setPaymentMethod(null);
    }
  }, "Close")), reviewOrder && paymentMethod && !paymentSuccess ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Review order"), /* @__PURE__ */ React.createElement(ReviewOrder, null, premium && /* @__PURE__ */ React.createElement(Summary, null, /* @__PURE__ */ React.createElement("b", null, "$14.99/a month"), " will be billed now and every month on", " ", /* @__PURE__ */ React.createElement("b", null, "???"), " using your", " ", /* @__PURE__ */ React.createElement("b", {
    className: "capitalize"
  }, paymentMethod == null ? void 0 : paymentMethod.brand), " ending in ", /* @__PURE__ */ React.createElement("b", null, paymentMethod.last_four_digits), "."), inProgress && /* @__PURE__ */ React.createElement(Progress, null, /* @__PURE__ */ React.createElement(ProgressSpinner, null)), /* @__PURE__ */ React.createElement(Actions, null, /* @__PURE__ */ React.createElement(Button$1, {
    disabled: inProgress,
    id: "cancel",
    onClick: () => {
      setReviewOrder(false);
      setPaymentMethod(null);
    }
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button$1, {
    id: "confirm",
    onClick: confirmPurchase
  }, "Confirm order")))) : /* @__PURE__ */ React.createElement(React.Fragment, null, paymentMethods.length === 0 || showAddPaymentForm || premium === null && !paymentSuccess ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Payment"), /* @__PURE__ */ React.createElement(PaymentForm, null, /* @__PURE__ */ React.createElement("h4", null, "Add a Credit Card"))) : !paymentSuccess && !paymentMethod ? /* @__PURE__ */ React.createElement(PaymentMethods, null, /* @__PURE__ */ React.createElement("h4", null, "Select a payment method"), paymentMethods.map((paymentMethod2) => {
    return /* @__PURE__ */ React.createElement(PaymentMethodItem, {
      key: paymentMethod2.id
    }, /* @__PURE__ */ React.createElement(UseCard, null, /* @__PURE__ */ React.createElement(Button$1, {
      onClick: () => {
        setPaymentMethod(paymentMethod2);
        setReviewOrder(true);
      },
      size: Size.Small
    }, "Use this card")), /* @__PURE__ */ React.createElement(Brand, null, /* @__PURE__ */ React.createElement("img", {
      alt: paymentMethod2.brand,
      src: `/stripe_networks/${paymentMethod2.brand}.svg`
    }), /* @__PURE__ */ React.createElement("span", null, paymentMethod2.brand, " ending in", " ", paymentMethod2.last_four_digits)), /* @__PURE__ */ React.createElement(Expiry, null, "Expires", " ", /* @__PURE__ */ React.createElement("span", null, paymentMethod2.exp_month, "/", paymentMethod2.exp_year)));
  }), !showAddPaymentForm && /* @__PURE__ */ React.createElement(Button$1, {
    id: "show-add-form",
    onClick: () => {
      setShowAddPaymentForm(true);
    }
  }, "Add new card")) : null)));
});
const Container$d = styled.div`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;

  ${(props) => props.visible && css`
      opacity: 1;
      pointer-events: auto;
    `};
`;
const Close$2 = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1000;
`;
const Content$3 = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 15%;
  transform: translate(0, 1900px);
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  h3 {
    margin: 0 0 25px 0;
  }

  ${(props) => props.visible && css`
      transform: translate(0, 0);

      @media (min-width: 992px) {
        transform: translate(-50%, -50%);
      }
    `};
  /* 
  @media (min-width: 992px) {
    border-radius: 15px;
    bottom: auto;
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 690px;
  } */
`;
const PaymentForm = styled.div`
  background: #f2f2f2;
  border-radius: 15px;
  padding: 25px;

  h4 {
    margin: 0 0 25px 0;
  }
`;
const PaymentMethods = styled.div`
  h4 {
    margin: 0 0 25px 0;
  }

  button#show-add-form {
    margin: 20px 0 0 0;
  }
`;
const PaymentMethodItem = styled.div`
  background: white;
  border: 1px solid #ddd;
  line-height: 26px;
  margin-bottom: 6px;
  padding: 15px;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const UseCard = styled.div`
  float: right;
`;
const Brand = styled.div`
  float: left;
  text-transform: capitalize;

  img {
    height: 16px;
    margin: 0 6px 0 0;
    position: relative;
    top: 3px;
  }

  span {
    color: #3b3b3b;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Expiry = styled.div`
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 600;
  float: left;
  line-height: 27px;
  margin: 0 25px;
`;
const ReviewOrder = styled.div`
  padding: 25px 0 0 0;

  button#confirm {
    margin: 0 0 0 0;
  }

  button#cancel {
    margin: 0 15px 0 0;
  }
`;
const Summary = styled.div`
  color: #8b8b8b;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin: 0 0 50px 0;

  b {
    color: #1b1b1b;

    &.capitalize {
      text-transform: capitalize;
    }
  }
`;
const PaymentSuccess = styled.div`
  p {
    line-height: 26px;
    margin: 0 0 15px 0;
  }

  button {
    margin: 35px 15px 0 0;
  }
`;
const Actions = styled.div`
  float: left;
`;
const Progress = styled.div`
  float: right;
  padding: 0;
`;
const ProgressMeter = memo((_Aa) => {
  var _Ba = _Aa, {
    amount,
    borderRadius = Amount.Less,
    children,
    color = BackgroundColors.Primary,
    height = Size.Default,
    label,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding = Amount.None,
    total
  } = _Ba, props = __objRest(_Ba, [
    "amount",
    "borderRadius",
    "children",
    "color",
    "height",
    "label",
    "margin",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "padding",
    "total"
  ]);
  const progressPercent = amount === 0 ? 0 : Number.parseInt(((amount != null ? amount : 0) / (total != null ? total : 0) * 100).toFixed(0));
  return /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor: BackgroundColors.Lighter,
    borderRadius,
    grow: false,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    padding,
    style: {
      borderRadius: `calc(${borderRadius} + 3px)`
    }
  }, /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor: color,
    borderRadius,
    boxShadow: {
      blurRadius: 8,
      color,
      offsetX: 0,
      offsetY: 2,
      opacity: 35,
      spreadRadius: 4
    },
    height,
    width: `${progressPercent}%`
  }, props), children, label && /* @__PURE__ */ React.createElement(Label, {
    alignText: Align.Center,
    textSize: TextSize.Larger,
    textColor: TextColors.Darkest,
    textWeight: TextWeight.More
  }, label)));
});
function formatValue(value, { formatter, options }) {
  var _a;
  switch (formatter) {
    case Formatter$1.Currency:
      return formatCurrency({
        amount: value,
        currency: (_a = options == null ? void 0 : options.currency) != null ? _a : CurrencyCode.UnitedStatesDollar
      });
    default:
      return value;
  }
}
const LinearGauge = memo(({
  amount,
  color,
  formatter,
  showTicks = true,
  showTickLabels = true,
  showValue = true,
  tickCount = 5,
  total
}) => {
  const progressPercent = amount === 0 ? 0 : Number.parseInt((amount / total * 100).toFixed(0));
  const tickPercent = total / tickCount;
  return /* @__PURE__ */ React.createElement(Container$h, null, showTicks && /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal
  }, showValue && /* @__PURE__ */ React.createElement(Container$h, {
    border: {
      left: {
        color,
        style: BorderStyle.Solid,
        width: 3
      }
    },
    height: 9,
    style: {
      left: `calc(${progressPercent}% - 3px)`,
      position: "absolute",
      top: "-3px"
    }
  }, /* @__PURE__ */ React.createElement(Label, {
    alignText: Align.Center,
    lineHeight: Amount.None,
    textColor: color,
    textSize: TextSize.Small,
    textWeight: TextWeight.More,
    style: {
      background: `linear-gradient(45deg, transparent 20%, rgba(var(--bg-color-darker-rgb), 0.5) 80%, transparent 20%)`,
      position: "absolute",
      top: 19,
      transform: "translateX(-50%)",
      zIndex: 5
    }
  }, formatter ? formatValue(amount, formatter) : amount)), new Array(tickCount).fill(0).map((_, index) => {
    const tickValue = tickPercent * index;
    const tickValueFormatted = formatter ? formatValue(tickValue, formatter) : tickValue;
    return /* @__PURE__ */ React.createElement(Container$h, {
      key: index,
      border: {
        left: {
          color: amount >= tickValue ? color : BackgroundColors.Lightest,
          style: BorderStyle.Solid,
          width: 1
        }
      },
      height: 6
    }, showTickLabels && /* @__PURE__ */ React.createElement(Label, {
      alignText: Align.Left,
      textColor: amount >= tickValue ? color : TextColors.Dark,
      textSize: TextSize.Smallest,
      textWeight: TextWeight.More,
      style: {
        position: "absolute",
        transform: "translateX(calc(100% / 2 - 100%))"
      }
    }, tickValueFormatted));
  }), /* @__PURE__ */ React.createElement(Container$h, {
    border: {
      right: {
        color: amount >= total ? color : BackgroundColors.Lightest,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    height: 6,
    style: {
      position: "absolute",
      right: 0
    }
  }, showTickLabels && /* @__PURE__ */ React.createElement(Label, {
    alignText: Align.Right,
    textColor: TextColors.Dark,
    textSize: TextSize.Small,
    textWeight: TextWeight.More
  }, formatter ? formatValue(total, formatter) : total))), /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor: BackgroundColors.Lightest,
    grow: false,
    height: 1
  }, /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor: color,
    height: 1,
    grow: false,
    width: `${progressPercent}%`
  })));
});
const ProgressivePaymentStatus = memo(({
  amountPaid = 0,
  currency = CurrencyCode.UnitedStatesDollar,
  totalDue = 0,
  size = Size.Default
}) => {
  const backgroundColor = amountPaid >= totalDue ? BackgroundColors.Success : BackgroundColors.Warning;
  return /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Vertical,
    paddingBottom: Amount.Default,
    grow: false
  }, /* @__PURE__ */ React.createElement(ProgressMeter, {
    alignContent: Align.Center,
    alignItems: Align.Center,
    amount: amountPaid,
    color: backgroundColor,
    borderRadius: Amount.Default,
    height: size,
    label: formatCurrency({ amount: amountPaid, currency }),
    marginBottom: Amount.Less,
    total: totalDue
  }), /* @__PURE__ */ React.createElement(LinearGauge, {
    amount: amountPaid,
    color: BackgroundColors.Warning,
    formatter: {
      formatter: Formatter$1.Currency,
      options: {
        currency
      }
    },
    total: totalDue
  }));
});
const SubscriptionModal = memo(() => {
  const visible = useSelector((state) => state.app.subscriptionBillingModalVisible);
  return /* @__PURE__ */ React.createElement(Container$c, {
    visible
  }, /* @__PURE__ */ React.createElement(Content$2, {
    visible
  }, /* @__PURE__ */ React.createElement(Close$1, null), /* @__PURE__ */ React.createElement("h3", null, "Subscription Options"), /* @__PURE__ */ React.createElement(Options, null, /* @__PURE__ */ React.createElement(Option, {
    onClick: () => {
    }
  }, /* @__PURE__ */ React.createElement(BottomActions, null, /* @__PURE__ */ React.createElement(Price, null, "$1.49 ", /* @__PURE__ */ React.createElement("span", null, "/a month per account")), /* @__PURE__ */ React.createElement(ActionButton, {
    size: "large",
    secondary: true
  }, "Turn on"))), /* @__PURE__ */ React.createElement(Option, {
    className: "premium",
    onClick: () => {
    }
  }, /* @__PURE__ */ React.createElement("h4", null, "Premium"), /* @__PURE__ */ React.createElement("p", null, "Account Sync available on all of your accounts, and access to additional premium features."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Sync all of your financial accounts"), /* @__PURE__ */ React.createElement("li", null, "All future Premium features included")), /* @__PURE__ */ React.createElement(BottomActions, null, /* @__PURE__ */ React.createElement(Price, null, "$14.99 ", /* @__PURE__ */ React.createElement("span", null, "a/ month")), /* @__PURE__ */ React.createElement(ActionButton, {
    size: "large"
  }, "Upgrade"))))));
});
const Container$c = styled.div`
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;

  ${(props) => props.visible && css`
      opacity: 1;
      pointer-events: auto;
    `};
`;
const Close$1 = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;
const Content$2 = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  bottom: 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 15%;
  transform: translate(0, 1900px);
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  ${(props) => props.visible && css`
      transform: translate(0px, 0px);

      @media (min-width: 992px) {
        transform: translate(-50%, -50%);
      }
    `};

  h3 {
    margin: 0 0 25px 0;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    border-radius: 15px;
    bottom: auto;
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    //width: calc(690px / 2);
    width: 600px;
  }

  @media (min-width: 1200px) {
  }
`;
const Options = styled.div`
  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const Option = styled.div`
  border: 2px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 0 15px 0;
  padding: 15px;
  position: relative;
  text-align: left;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  width: 100%;

  &:first-child {
    margin-right: 10px;
  }

  &:hover {
    background: #fafafa;
    border: 2px solid #7b7b7b;
  }

  &.premium {
    border: 2px solid rgba(65, 145, 64, 1);

    &:hover {
      background: rgba(65, 145, 64, 0.1);
    }
  }

  h4 {
    font-size: 18px;
    margin: 0 0 25px 0;
  }

  p {
    color: #7b7b7b;
    display: none;
    font-size: 14px;
    margin: 0 0 15px 0;
    line-height: 20px;
  }

  ul {
    padding: 0 25px;

    li {
      color: #3b3b3b;
      font-size: 13px;
      line-height: 18px;
      margin: 0 0 8px 0;
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    float: left;
    height: 400px;
    margin: 0;
    width: calc(100% / 2 - 5px);

    h4 {
      margin: 0 0 25px 0;
    }

    p {
      display: block;
      margin: 0 0 25px 0;
    }
  }

  @media (min-width: 1200px) {
  }
`;
const BottomActions = styled.div`
  bottom: 0;
  left: 0;
  margin: 50px 0 0 0;

  right: 0;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    padding: 15px;
    position: absolute;
  }

  @media (min-width: 1200px) {
  }
`;
const Price = styled.div`
  color: #3b3b3b;
  float: left;
  font-size: 32px;
  font-weight: 700;
  line-height: 26px;
  padding: 0 0 0 5px;
  //width: calc(100% - 110px);

  span {
    color: #aaa;
    display: block;
    font-size: 12px;
    font-weight: 500;
  }
`;
const ActionButton = styled.div`
  background: rgba(60, 60, 60, 1);
  border: 2px solid transparent;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  float: right;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 17px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:active {
    background: rgba(0, 0, 0, 1);
  }

  ${(props) => props.disabled && css`
      pointer-events: none;
      opacity: 0.8;
    `};

  ${(props) => props.secondary && css`
      background: white;
      border: 2px solid rgba(220, 220, 220, 1);
      color: rgba(120, 120, 120, 1);
      font-weight: 600;

      &:hover {
        background: transparent;
        border: 2px solid rgba(160, 160, 160, 1);
        color: rgba(100, 100, 100, 1);
      }

      &:active {
        background: transparent;
        border: 2px solid rgba(130, 130, 130, 1);
        color: rgba(80, 80, 80, 1);
      }
    `};

  ${(props) => props.size === "small" && css`
      font-size: 11px;
      padding: 7px 12px;

      @media (min-width: 992px) {
        font-size: 12px;
        padding: 10px 17px;
      }
    `};

  ${(props) => props.size === "large" && css`
      font-size: 13px;
      padding: 10px 17px;

      @media (min-width: 992px) {
        font-size: 15px;
        padding: 15px 22px;
      }
    `};

  ${(props) => props.darkMode && props.secondary && css`
      background: transparent !important;
      border: 2px solid rgba(143, 231, 0, 0.7) !important;
      color: rgba(143, 231, 0, 1) !important;

      &:hover {
        background: rgba(143, 231, 0, 0.1) !important;
        border: 2px solid rgba(143, 231, 0, 0.7) !important;
        color: #1b1b1b;
      }

      &:active {
        background: rgba(143, 231, 0, 0.6) !important;
      }
    `};

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { exception: void 0, hasError: false };
  }
  static getDerivedStateFromError(err) {
    const logger = new Logger();
    const exception = new Exception(err.name + ": " + err.message, {
      cause: err
    });
    logger.exception(exception.toJSON());
    return { exception, hasError: true };
  }
  componentDidCatch(err) {
  }
  render() {
    var _a;
    return this.state.hasError ? /* @__PURE__ */ React.createElement(React.Fragment, null, (_a = this.state.exception) == null ? void 0 : _a.message) : /* @__PURE__ */ React.createElement(React.Fragment, null, this.props.children);
  }
}
const Card = memo((_Ca) => {
  var _Da = _Ca, {
    backgroundColor = BackgroundColors.Card,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Higher,
    children,
    draggable = false,
    id,
    linkTo,
    onClick,
    title,
    width
  } = _Da, props = __objRest(_Da, [
    "backgroundColor",
    "borderRadius",
    "boxShadow",
    "children",
    "draggable",
    "id",
    "linkTo",
    "onClick",
    "title",
    "width"
  ]);
  const content = /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    borderRadius,
    boxShadow,
    className: `card${id ? `-${id}` : ""}`,
    grow: true,
    onClick,
    width: linkTo ? "100%" : width != null ? width : "auto"
  }, props), title && /* @__PURE__ */ React.createElement("h4", null, title), /* @__PURE__ */ React.createElement(ErrorBoundary, null, children));
  if (draggable) {
    return /* @__PURE__ */ React.createElement(DragWrapper, __spreadValues({
      className: "draggable-card"
    }, props), content);
  }
  if (linkTo) {
    return /* @__PURE__ */ React.createElement(NavigationLink, {
      borderRadius,
      grow: true,
      orientation: Orientation.Vertical,
      to: linkTo,
      width
    }, content);
  }
  return content;
});
const DragWrapper = styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  //position: absolute;
  //margin: 0 0 25px 0;
  transition: box-shadow 0.3s ease-in-out;
  //width: 100%;
`;
const TitleCards = memo((_Ea) => {
  var _Fa = _Ea, {
    children,
    className = "title-cards",
    grow = false,
    minHeight = 82,
    orientation = Orientation.Horizontal
  } = _Fa, props = __objRest(_Fa, [
    "children",
    "className",
    "grow",
    "minHeight",
    "orientation"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} title-cards`,
    grow,
    minHeight,
    overflow: Overflow.ScrollHorizontal,
    paddingBottom: Amount.Default
  }, props), /* @__PURE__ */ React.createElement(Container$h, {
    orientation,
    overflow: Overflow.ScrollHorizontal,
    position: Position.Absolute
  }, children));
});
const TitleCard = memo((_Ga) => {
  var _Ha = _Ga, {
    backgroundColor = BackgroundColors.Card,
    borderRadius = Amount.Least,
    boxShadow = DepthShadow.High,
    className = "",
    grow = true,
    flat = false,
    label,
    loading = false,
    marginRight = Amount.Default,
    orientation = Orientation.Horizontal,
    padding = Amount.Default,
    value,
    icon,
    width = 260
  } = _Ha, props = __objRest(_Ha, [
    "backgroundColor",
    "borderRadius",
    "boxShadow",
    "className",
    "grow",
    "flat",
    "label",
    "loading",
    "marginRight",
    "orientation",
    "padding",
    "value",
    "icon",
    "width"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor,
    borderRadius,
    boxShadow,
    className: `${className} title-card`,
    flat,
    grow,
    marginRight,
    orientation,
    padding,
    width
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: loading,
    spinnerSize: Size.Small
  }), icon && /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    alignContent: Align.Center,
    borderRadius: Amount.All,
    grow: false,
    marginRight: Amount.Default,
    paddingLeft: Amount.Less,
    paddingRight: Amount.Less
  }, /* @__PURE__ */ React.createElement(Icon, __spreadValues({}, icon))), !loading && /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    alignItems: Align.Left,
    orientation: Orientation.Vertical
  }, /* @__PURE__ */ React.createElement(Small, null, label), /* @__PURE__ */ React.createElement(Title, null, value)));
});
const PieChart = memo((_Ia) => {
  var props = __objRest(_Ia, []);
  return /* @__PURE__ */ React.createElement(Container$b, __spreadValues({}, props));
});
const Container$b = styled.div`
  height: 200px;
`;
const RadialChart = memo((_Ja) => {
  var _Ka = _Ja, { data } = _Ka, props = __objRest(_Ka, ["data"]);
  return /* @__PURE__ */ React.createElement(Container$a, __spreadValues({}, props));
});
const Container$a = styled.div``;
const RadialGauge = memo(({ color, size, value }) => {
  const getGaugePercent = () => {
    const normalized = 198 - value * 1.98;
    return normalized >= 0 ? normalized : 0;
  };
  const gaugePercent = getGaugePercent();
  return /* @__PURE__ */ React.createElement(Container$9, {
    color,
    size,
    value: gaugePercent
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 105 105"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "grey",
    d: "M30,90 A40,40 0 1,1 80,90",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    id: "value",
    fill: "none",
    className: "value",
    d: "M30,90 A40,40 0 1,1 80,90"
  })));
});
const Container$9 = styled.div`
  margin: 0 auto;
  position: relative;
  width: ${(props) => props.size + 9}px;

  svg {
    display: inline-block;
    height: ${(props) => props.size}px;
    position: relative;
    top: -4px;
    width: ${(props) => props.size}px;
  }

  path {
    stroke-linecap: round;
    stroke-width: 12;
  }

  path.grey {
    stroke: #eee;
  }

  path.value {
    stroke: rgba(162, 192, 80, 1);
    stroke: rgba(${(props) => props.color});
    stroke-dasharray: 198;
    stroke-dashoffset: ${(props) => props.value};
    transition: all 0.3s ease-out;
  }
`;
const Page = memo((_La) => {
  var _Ma = _La, {
    alignContent = Align.Top,
    backgroundColor = BackgroundColors.Page,
    children,
    className = "",
    grow = true,
    layout: Layout,
    loading = false,
    title
  } = _Ma, props = __objRest(_Ma, [
    "alignContent",
    "backgroundColor",
    "children",
    "className",
    "grow",
    "layout",
    "loading",
    "title"
  ]);
  useTitle(title);
  const PageComp = () => /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent,
    backgroundColor,
    className: `${className} page`,
    grow
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: loading
  }), children);
  const Child = () => Layout ? cloneElement(/* @__PURE__ */ React.createElement(Layout, __spreadValues({}, props)), props, /* @__PURE__ */ React.createElement(PageComp, null)) : /* @__PURE__ */ React.createElement(PageComp, null);
  return /* @__PURE__ */ React.createElement(Child, null);
});
function useAuthentication({
  enabled = true,
  redirect = true
}) {
  var _a, _b, _c, _d;
  const [loginRequired, setLoginRequired] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const inProgress = useSelector((state) => state.user.authentication.login.inProgress);
  const loggedIn = useSelector((state) => state.user.authentication.state.loggedIn);
  const routes = useSelector((state) => state.app.routes.list);
  const indexPagePath = (_b = (_a = routes.find((r) => r.role === PageRole.Index)) == null ? void 0 : _a.path) != null ? _b : "/";
  const loginPagePath = (_d = (_c = routes.find((r) => r.role === PageRole.Login)) == null ? void 0 : _c.path) != null ? _d : "login";
  const checkAuth = () => {
    routes.forEach((route) => {
      var _a2, _b2, _c2;
      const routePath = (_a2 = route == null ? void 0 : route.path) != null ? _a2 : "";
      const match2 = matchPath((_b2 = route == null ? void 0 : route.path) != null ? _b2 : "", location.pathname);
      if (match2) {
        setLoginRequired((_c2 = route == null ? void 0 : route.loginRequired) != null ? _c2 : false);
      }
      if (loginPagePath && match2 && routePath === loginPagePath && loggedIn && !inProgress && redirect) {
        navigate(indexPagePath);
      } else if (loginPagePath && routePath !== loginPagePath && match2 && route.loginRequired && !loggedIn && !inProgress && redirect) {
        navigate(loginPagePath);
      }
    });
  };
  useEffect(() => {
    if (enabled)
      checkAuth();
  }, [location.pathname]);
  useEffect(() => {
    if (enabled)
      checkAuth();
  }, [loggedIn]);
  useEffect(() => {
    if (enabled)
      checkAuth();
  }, [inProgress]);
  useEffect(() => {
    if (enabled)
      checkAuth();
  }, []);
  return {
    inProgress,
    loggedIn,
    loginRequired
  };
}
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function pascalCaseTransform(input, index) {
  var firstChar = input.charAt(0);
  var lowerChars = input.substr(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return "_" + firstChar + lowerChars;
  }
  return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}
function camelCaseTransform(input, index) {
  if (index === 0)
    return input.toLowerCase();
  return pascalCaseTransform(input, index);
}
function camelCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
}
function upperCaseFirst(input) {
  return input.charAt(0).toUpperCase() + input.substr(1);
}
function capitalCaseTransform(input) {
  return upperCaseFirst(input.toLowerCase());
}
function capitalCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}
var pluralize$1 = { exports: {} };
(function(module, exports) {
  (function(root, pluralize2) {
    if (typeof commonjsRequire === "function" && true && true) {
      module.exports = pluralize2();
    } else {
      root.pluralize = pluralize2();
    }
  })(commonjsGlobal, function() {
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    function sanitizeRule(rule) {
      if (typeof rule === "string") {
        return new RegExp("^" + rule + "$", "i");
      }
      return rule;
    }
    function restoreCase(word, token2) {
      if (word === token2)
        return token2;
      if (word === word.toLowerCase())
        return token2.toLowerCase();
      if (word === word.toUpperCase())
        return token2.toUpperCase();
      if (word[0] === word[0].toUpperCase()) {
        return token2.charAt(0).toUpperCase() + token2.substr(1).toLowerCase();
      }
      return token2.toLowerCase();
    }
    function interpolate(str, args) {
      return str.replace(/\$(\d{1,2})/g, function(match2, index) {
        return args[index] || "";
      });
    }
    function replace2(word, rule) {
      return word.replace(rule[0], function(match2, index) {
        var result = interpolate(rule[1], arguments);
        if (match2 === "") {
          return restoreCase(word[index - 1], result);
        }
        return restoreCase(match2, result);
      });
    }
    function sanitizeWord(token2, word, rules) {
      if (!token2.length || uncountables.hasOwnProperty(token2)) {
        return word;
      }
      var len = rules.length;
      while (len--) {
        var rule = rules[len];
        if (rule[0].test(word))
          return replace2(word, rule);
      }
      return word;
    }
    function replaceWord(replaceMap, keepMap, rules) {
      return function(word) {
        var token2 = word.toLowerCase();
        if (keepMap.hasOwnProperty(token2)) {
          return restoreCase(word, token2);
        }
        if (replaceMap.hasOwnProperty(token2)) {
          return restoreCase(word, replaceMap[token2]);
        }
        return sanitizeWord(token2, word, rules);
      };
    }
    function checkWord(replaceMap, keepMap, rules, bool) {
      return function(word) {
        var token2 = word.toLowerCase();
        if (keepMap.hasOwnProperty(token2))
          return true;
        if (replaceMap.hasOwnProperty(token2))
          return false;
        return sanitizeWord(token2, token2, rules) === token2;
      };
    }
    function pluralize2(word, count, inclusive) {
      var pluralized = count === 1 ? pluralize2.singular(word) : pluralize2.plural(word);
      return (inclusive ? count + " " : "") + pluralized;
    }
    pluralize2.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
    pluralize2.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
    pluralize2.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
    pluralize2.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
    pluralize2.addPluralRule = function(rule, replacement) {
      pluralRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize2.addSingularRule = function(rule, replacement) {
      singularRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize2.addUncountableRule = function(word) {
      if (typeof word === "string") {
        uncountables[word.toLowerCase()] = true;
        return;
      }
      pluralize2.addPluralRule(word, "$0");
      pluralize2.addSingularRule(word, "$0");
    };
    pluralize2.addIrregularRule = function(single, plural) {
      plural = plural.toLowerCase();
      single = single.toLowerCase();
      irregularSingles[single] = plural;
      irregularPlurals[plural] = single;
    };
    [
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      ["genus", "genera"],
      ["viscus", "viscera"],
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(rule) {
      return pluralize2.addIrregularRule(rule[0], rule[1]);
    });
    [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(rule) {
      return pluralize2.addPluralRule(rule[0], rule[1]);
    });
    [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(rule) {
      return pluralize2.addSingularRule(rule[0], rule[1]);
    });
    [
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      /[^aeiou]ese$/i,
      /deer$/i,
      /fish$/i,
      /measles$/i,
      /o[iu]s$/i,
      /pox$/i,
      /sheep$/i
    ].forEach(pluralize2.addUncountableRule);
    return pluralize2;
  });
})(pluralize$1);
var pluralize = pluralize$1.exports;
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp(token, "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return decodeURIComponent(components.join(""));
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);
    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join("");
      tokens = input.match(singleMatcher);
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  };
  var match2 = multiMatcher.exec(input);
  while (match2) {
    try {
      replaceMap[match2[0]] = decodeURIComponent(match2[0]);
    } catch (err) {
      var result = decode(match2[0]);
      if (result !== match2[0]) {
        replaceMap[match2[0]] = result;
      }
    }
    match2 = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "\uFFFD";
  var entries = Object.keys(replaceMap);
  for (var i = 0; i < entries.length; i++) {
    var key = entries[i];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string, separator) => {
  if (!(typeof string === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [string];
  }
  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length)
  ];
};
var filterObj = function(obj, predicate) {
  var ret = {};
  var keys = Object.keys(obj);
  var isArr = Array.isArray(predicate);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];
    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }
  return ret;
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[]"].join("")];
          }
          return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), ":list="].join("")];
          }
          return [...result, [encode(key, options), ":list=", encode(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
          }
          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode(key, options)];
          }
          return [...result, [encode(key, options), "=", encode(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }
    return hash;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse2(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k of Object.keys(value)) {
          value[k] = parseValue(value[k], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse2;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode(key, options) + "=" + encode(value, options);
    }).filter((x) => x.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash] = splitOnFirst$1(url, "#");
    return Object.assign({
      url: url_.split("?")[0] || "",
      query: parse2(extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {});
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash}`;
  };
  exports.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports.pick(input, exclusionFilter, options);
  };
})(queryString);
function useEntityEditor() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [modelName, setModelName] = useState(null);
  const [entity, setEntity] = useState();
  const [mode, setMode] = useState({
    edit: false,
    new: false,
    view: false
  });
  const [modelDef, setModelDef] = useState(null);
  const models = useSelector((state) => state.models.models);
  useEffect(() => {
    const new_ = searchParams.get("new");
    const edit = searchParams.get("edit");
    const view = searchParams.get("view");
    if (new_) {
      setMode({ edit: false, new: true, view: false });
      setModelName(new_);
      const params = queryString.parse(location.search);
      const _a = params, { new: _new } = _a, props = __objRest(_a, ["new"]);
      setEntity(props);
    } else if (edit) {
      const id = searchParams.get("id");
      setModelName(edit);
      if (id) {
        setEntity({ id });
      }
      setMode({ edit: true, new: false, view: false });
    } else if (view) {
      const id = searchParams.get("id");
      setModelName(view);
      if (id) {
        setEntity({ id });
      }
      setMode({ edit: false, new: false, view: true });
    }
    return () => {
      setMode({ edit: false, new: false, view: false });
      setModelName(null);
      setEntity(void 0);
    };
  }, [location.search]);
  useEffect(() => {
    if (models && modelName) {
      const model = models[modelName];
      if (model) {
        setModelDef(model);
      }
    } else {
      setModelDef(null);
    }
    return () => {
      setModelDef(null);
    };
  }, [models, modelName]);
  const showEntityEditor = ({
    edit,
    new: new_,
    set = {},
    view,
    id
  }) => {
    if (id && edit) {
      setSearchParams({ edit, id });
    } else if (id && view) {
      setSearchParams({ id, view });
    } else if (new_) {
      setSearchParams(__spreadValues({ new: new_ }, set));
    }
  };
  const hideEntityEditor = () => {
    setSearchParams({});
  };
  return {
    entity,
    hideEntityEditor,
    mode,
    model: modelDef,
    showEntityEditor
  };
}
const HoverPanel = memo((_Na) => {
  var _Oa = _Na, {
    alignItems = Align.Stretch,
    alignContent = Align.Stretch,
    backgroundColor = BackgroundColors.Lightest,
    border = {
      color: BackgroundColors.Transparent,
      style: BorderStyle.Solid,
      width: 1
    },
    borderRadius = Amount.Less,
    children,
    className = "",
    depth = Depth.Higher,
    detached = true,
    focused,
    grow = false,
    orientation = Orientation.Vertical,
    visible = true,
    setMenuVisible
  } = _Oa, props = __objRest(_Oa, [
    "alignItems",
    "alignContent",
    "backgroundColor",
    "border",
    "borderRadius",
    "children",
    "className",
    "depth",
    "detached",
    "focused",
    "grow",
    "orientation",
    "visible",
    "setMenuVisible"
  ]);
  return /* @__PURE__ */ React.createElement(Wrapper, __spreadValues({
    alignItems,
    alignContent,
    backgroundColor,
    border,
    borderRadius,
    boxShadow: visible ? DepthShadow.Higher : DepthShadow.Surface,
    className: `${className} hover-panel`,
    depth,
    grow,
    detached,
    focused,
    marginTop: 0,
    orientation,
    visible
  }, props), children);
});
const Wrapper = styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${VisibilityStyles};

  border-radius: ${(props) => props.detached ? props.borderRadius : `0 0 ${props.borderRadius} ${props.borderRadius}`};
  left: ${(props) => props.detached ? props.alignContent === Align.Left ? "-10px" : "auto" : 0};
  position: absolute;
  right: ${(props) => props.detached ? props.alignContent === Align.Right ? "-10px" : "auto" : 0};
  top: ${(props) => props.detached ? "80%" : "calc(100% - 3px)"};

  &:before {
    border-top: 0;
    border-top-left-radius: ${(props) => props.detached ? props.borderRadius : `0 0 ${props.borderRadius} ${props.borderRadius}`};
    border-top-right-radius: ${(props) => props.detached ? props.borderRadius : `0 0 ${props.borderRadius} ${props.borderRadius}`};
  }
`;
const MoreMenu = memo((_Pa) => {
  var _Qa = _Pa, {
    alignContent = Align.Left,
    backgroundColor = BackgroundColors.MoreMenu,
    className = "",
    dotColor = ForegroundColors.MoreMenu,
    orientation = Orientation.Horizontal,
    size = Size.Default,
    menu,
    width = 150
  } = _Qa, props = __objRest(_Qa, [
    "alignContent",
    "backgroundColor",
    "className",
    "dotColor",
    "orientation",
    "size",
    "menu",
    "width"
  ]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dotFillColor = menuVisible || hovered ? ForegroundColors.PrimaryContrast : dotColor;
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} more-menu`,
    grow: false,
    onMouseLeave: () => setMenuVisible(false)
  }, props), /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent: Align.Center,
    alignItems: Align.Center,
    as: "button",
    cursor: Cursor.Pointer,
    backgroundColor: menuVisible ? BackgroundColors.Primary : backgroundColor,
    backgroundOpacity: menuVisible ? 70 : 100,
    borderRadius: size,
    focused,
    depth: Depth.Surface,
    grow: false,
    hover: {
      backgroundColor: BackgroundColors.Primary
    },
    onClick: (e) => {
      e.stopPropagation();
      e.preventDefault();
      setMenuVisible(!menuVisible);
    },
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    orientation,
    height: size,
    width: size
  }, props), /* @__PURE__ */ React.createElement(Dot, {
    borderRadius: Amount.All,
    backgroundColor: dotFillColor
  }), /* @__PURE__ */ React.createElement(Dot, {
    borderRadius: Amount.All,
    backgroundColor: dotFillColor
  }), /* @__PURE__ */ React.createElement(Dot, {
    borderRadius: Amount.All,
    backgroundColor: dotFillColor
  })), /* @__PURE__ */ React.createElement(HoverPanel, {
    alignContent,
    orientation: Orientation.Vertical,
    visible: menuVisible,
    setMenuVisible,
    width
  }, /* @__PURE__ */ React.createElement(Menu, {
    menu,
    onClick: () => setMenuVisible(false)
  })));
});
const Dot = styled.span`
  ${AppearanceStyles};

  background-color: rgb(${(props) => props.fillColor});
  display: inline-block;
  height: 4px;
  margin: 0 1px;
  width: 4px;
`;
const ModalHeader = memo(({
  alignItems = Align.Center,
  className = "",
  onCloseClick,
  marginBottom = Amount.Most,
  moreMenu,
  orientation = Orientation.Horizontal,
  padding = Amount.Default,
  title
}) => {
  return /* @__PURE__ */ React.createElement(Container$h, {
    alignItems,
    className: `${className} modal-header`,
    grow: false,
    flat: true,
    marginBottom,
    orientation,
    padding
  }, /* @__PURE__ */ React.createElement(Title, null, title), /* @__PURE__ */ React.createElement(Container$h, null), moreMenu && /* @__PURE__ */ React.createElement(MoreMenu, __spreadValues({
    alignContent: Align.Right
  }, moreMenu)), /* @__PURE__ */ React.createElement(CloseButton, {
    marginLeft: Amount.Less,
    onClick: onCloseClick
  }));
});
const SlidePanel = memo((_Ra) => {
  var _Sa = _Ra, {
    alignItems = Align.Stretch,
    backgroundColor = BackgroundColors.SlidePanel,
    boxShadow = DepthShadow.Highest,
    borderRadius = Amount.Most,
    children,
    className = "",
    depth = Depth.Highest,
    padding = Amount.Less,
    visible = false,
    width = 380
  } = _Sa, props = __objRest(_Sa, [
    "alignItems",
    "backgroundColor",
    "boxShadow",
    "borderRadius",
    "children",
    "className",
    "depth",
    "padding",
    "visible",
    "width"
  ]);
  return /* @__PURE__ */ React.createElement(Container$8, __spreadValues({
    alignItems,
    backgroundColor,
    boxShadow,
    as: Container$8,
    borderRadius,
    className: `${className} slide-panel`,
    depth,
    padding,
    visible,
    width
  }, props), children);
});
const Container$8 = styled.div`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  bottom: ${Amount.Default};
  opacity: ${(props) => props.visible ? "1" : "0"};
  position: fixed;
  right: ${Amount.Default};
  top: ${Amount.Default};
  transform: ${(props) => props.visible ? "translate(0, 0)" : "translate(0, 1900px)"};
  transition: all 0.3s ease-in-out;
  transform: ${(props) => props.visible ? "translate(0, 0)" : "translate(1600px, 0)"};
  z-index: 6;
`;
function getFormFieldsFromModel({
  entity,
  model
}) {
  let fields = [];
  for (const [fieldName, field] of Object.entries(model.fields)) {
    if (fieldName !== "created_date" && fieldName !== "updated_date") {
      fields = [
        ...fields,
        __spreadProps(__spreadValues({}, field), {
          name: fieldName,
          type: field.type,
          validation: Boolean(field.required) ? {
            [Condition.IsRequired]: Boolean(field.required)
          } : void 0
        })
      ];
    }
  }
  return fields;
}
const EntityEditor = memo(({ actions, className = "", id, model }) => {
  var _a, _b;
  const dispatch = useDispatch();
  const { entity: entityFields, hideEntityEditor } = useEntityEditor();
  const [dispatched, setDispatched] = useState(false);
  const inProgress = useSelector((state) => state[`${model == null ? void 0 : model.name}.inProgress`]);
  const pluralizedCamel = pluralize(((_b = (_a = model == null ? void 0 : model.name) == null ? void 0 : _a[0]) == null ? void 0 : _b.toLowerCase()) + (model == null ? void 0 : model.name.slice(1)));
  const entity = useSelector((state) => state[pluralizedCamel].entities[id != null ? id : ""]);
  useEffect(() => {
    var _a2;
    if (actions && id && !entity && !dispatched) {
      const action = (_a2 = actions[`get${model.name}`]) == null ? void 0 : _a2.call(actions, id);
      setDispatched(true);
      dispatch(action);
    }
  }, [id, entity]);
  if (id && !entity && !inProgress) {
    return /* @__PURE__ */ React.createElement(Container$h, {
      className: `${className} entity-editor`,
      padding: Amount.More
    }, /* @__PURE__ */ React.createElement(ErrorLabel, null, "Entity not found"));
  }
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: `${className} entity-editor`
  }, /* @__PURE__ */ React.createElement(Form, {
    fields: getFormFieldsFromModel({ model }),
    entity: __spreadValues(__spreadValues({}, entity), entityFields),
    inProgress,
    model,
    name: "entity-editor",
    onSubmit: async ({ fields, problems, validated }) => {
      let fieldData = {};
      for (const [key, props] of Object.entries(fields)) {
        fieldData = __spreadProps(__spreadValues({}, fieldData), { [key]: props.value });
      }
      if (id) {
        const editFunction = actions == null ? void 0 : actions[`update${model.name}`];
        if (editFunction)
          await dispatch(editFunction(__spreadValues({ id }, fieldData)));
        hideEntityEditor();
      } else {
        const createFunction = actions == null ? void 0 : actions[`create${model.name}`];
        if (createFunction)
          await dispatch(createFunction(fieldData));
        hideEntityEditor();
      }
    },
    submitButton: {
      label: id ? "Update" : "Create"
    }
  }));
});
const EntityPreview = memo(({ id, model }) => {
  return /* @__PURE__ */ React.createElement(Container$h, {
    "data-testid": "account-pane"
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: false
  }));
});
const EntityPanel = memo((_Ta) => {
  var _Ua = _Ta, { actions } = _Ua, props = __objRest(_Ua, ["actions"]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { entity, model, mode, hideEntityEditor } = useEntityEditor();
  const entityState = useSelector((state) => {
    var _a;
    return state[`${camelCase(pluralize((_a = model == null ? void 0 : model.name) != null ? _a : ""))}`];
  });
  const inProgress = (entityState == null ? void 0 : entityState.action[`create${model == null ? void 0 : model.name}`].inProgress) || (entityState == null ? void 0 : entityState.action[`delete${model == null ? void 0 : model.name}`].inProgress) || (entityState == null ? void 0 : entityState.action[`get${model == null ? void 0 : model.name}`].inProgress) || (entityState == null ? void 0 : entityState.action[`update${model == null ? void 0 : model.name}`].inProgress);
  useEffect(() => {
    if (model) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [model]);
  const getContent = () => {
    if (model && (entity == null ? void 0 : entity.id) && mode.edit) {
      return /* @__PURE__ */ React.createElement(EntityEditor, {
        actions,
        model,
        id: entity.id
      });
    }
    if (model && (entity == null ? void 0 : entity.id) && mode.view) {
      return /* @__PURE__ */ React.createElement(EntityPreview, {
        model,
        id: entity.id
      });
    }
    if (model && !(entity == null ? void 0 : entity.id)) {
      return /* @__PURE__ */ React.createElement(EntityEditor, {
        actions,
        model
      });
    }
    return null;
  };
  const getHeaderTitle = () => {
    if (model && (entity == null ? void 0 : entity.id) && mode.edit) {
      return `Edit ${capitalCase(model.name)}`;
    }
    if (model && (entity == null ? void 0 : entity.id)) {
      return `${capitalCase(model.name)} Preview`;
    }
    if (model && !(entity == null ? void 0 : entity.id)) {
      return `New ${capitalCase(model.name)}`;
    }
    return "";
  };
  return /* @__PURE__ */ React.createElement(SlidePanel, {
    visible
  }, /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    borderRadius: Amount.Default
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: inProgress
  }), /* @__PURE__ */ React.createElement(ModalHeader, {
    onCloseClick: () => hideEntityEditor(),
    moreMenu: (entity == null ? void 0 : entity.id) ? {
      menu: [
        {
          icon: {
            color: Colors.Error,
            name: BasicIcons.TrashCan,
            size: Size.Smaller
          },
          label: "Delete",
          onClick: () => {
            if (model && (entity == null ? void 0 : entity.id)) {
              const deleteFunction = actions == null ? void 0 : actions[`delete${model.name}`];
              if (deleteFunction)
                dispatch(deleteFunction(entity.id));
            }
          },
          textColor: TextColors.Error
        }
      ]
    } : void 0,
    title: getHeaderTitle()
  }), /* @__PURE__ */ React.createElement(Container$h, {
    padding: Amount.Default,
    scrollable: true,
    style: {
      top: "60px !important"
    }
  }, getContent())));
});
const Backdrop = memo((_Va) => {
  var _Wa = _Va, {
    as = "div",
    children,
    className = "",
    onClick,
    visible
  } = _Wa, props = __objRest(_Wa, [
    "as",
    "children",
    "className",
    "onClick",
    "visible"
  ]);
  return /* @__PURE__ */ React.createElement(Container$7, __spreadValues({
    as,
    className: `${className} backdrop`,
    onClick,
    visible
  }, props), children);
});
const Container$7 = styled.div`
  background: var(--bg-color-backdrop-hidden);
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
  transition: background 0.3s ease-in-out;
  z-index: 6000;

  ${(props) => props.visible && css`
      background: var(--bg-color-backdrop-visible);
      pointer-events: all;
    `}
`;
const WebApplication = memo((_Xa) => {
  var _Ya = _Xa, {
    authentication = false,
    actions,
    backgroundColor = BackgroundColors.Dark,
    children,
    className = "",
    httpClient
  } = _Ya, props = __objRest(_Ya, [
    "authentication",
    "actions",
    "backgroundColor",
    "children",
    "className",
    "httpClient"
  ]);
  const { inProgress, loggedIn, loginRequired } = useAuthentication({
    enabled: authentication
  });
  const { current, list } = useSelector((state) => state.ui.themes);
  const loginCondition = authentication ? loggedIn && (loginRequired || !loginRequired) || !loggedIn && !loginRequired : true;
  const showOutlet = !inProgress && loginCondition;
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor,
    className: `${className} web-application`
  }, props), /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme: current,
    themes: list
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: !showOutlet
  }), /* @__PURE__ */ React.createElement(Backdrop, {
    visible: false
  }), showOutlet && /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(EntityPanel, {
    actions,
    httpClient
  })));
});
const SubTitle = memo((_Za) => {
  var __a = _Za, {
    as = "h2",
    children,
    className = "",
    lineHeight = Size.Small,
    marginBottom = Amount.More,
    marginTop = Amount.Default,
    textSize = TextSize.Large,
    textColor = TextColors.SubTitle,
    textWeight = TextWeight.More
  } = __a, props = __objRest(__a, [
    "as",
    "children",
    "className",
    "lineHeight",
    "marginBottom",
    "marginTop",
    "textSize",
    "textColor",
    "textWeight"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    as,
    className: `${className} title`,
    inline: false,
    lineHeight,
    marginBottom,
    marginTop,
    textWeight,
    textColor,
    textSize
  }, props), children != null ? children : "");
});
const Workspace = memo((_$a) => {
  var _ab = _$a, {
    alignContent = Align.Top,
    backgroundColor = BackgroundColors.Workspace,
    className = "",
    children,
    header,
    layout: Layout,
    loading = false,
    loginRequired = false,
    orientation = Orientation.Vertical,
    padding = Amount.Most,
    title
  } = _ab, props = __objRest(_ab, [
    "alignContent",
    "backgroundColor",
    "className",
    "children",
    "header",
    "layout",
    "loading",
    "loginRequired",
    "orientation",
    "padding",
    "title"
  ]);
  useTitle(title);
  const headerTitle = (header == null ? void 0 : header.title) ? typeof header.title === "string" ? /* @__PURE__ */ React.createElement(Title, {
    marginTop: Amount.None
  }, header.title) : header.title : null;
  const WorkspaceComp = (props2) => /* @__PURE__ */ React.createElement(Container$h, __spreadValues(__spreadValues({
    alignContent,
    backgroundColor,
    className: `${className} workspace`,
    grow: true,
    orientation,
    padding,
    scrollable: true
  }, props), props2), ((header == null ? void 0 : header.title) || (header == null ? void 0 : header.actions)) && /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    grow: false,
    marginBottom: Amount.All,
    orientation: Orientation.Horizontal
  }, /* @__PURE__ */ React.createElement(Container$h, null, /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    className: "workspace-title",
    orientation: Orientation.Horizontal
  }, headerTitle), /* @__PURE__ */ React.createElement(Container$h, {
    className: "workspace-sub-title",
    orientation: Orientation.Horizontal
  }, (header == null ? void 0 : header.subTitle) && /* @__PURE__ */ React.createElement(SubTitle, {
    marginTop: Amount.None
  }, header.subTitle))), (header == null ? void 0 : header.actions) && /* @__PURE__ */ React.createElement(Container$h, {
    className: "workspace-actions"
  }, header.actions)), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: loading
  }), children);
  const Child = () => Layout ? cloneElement(/* @__PURE__ */ React.createElement(Layout, __spreadValues({
    scrollable: true
  }, props)), props, /* @__PURE__ */ React.createElement(WorkspaceComp, __spreadValues({}, props))) : /* @__PURE__ */ React.createElement(WorkspaceComp, __spreadValues({}, props));
  return /* @__PURE__ */ React.createElement(Child, null);
});
function fetchFromObject(obj, prop) {
  if (typeof obj === "undefined") {
    return false;
  }
  var _index = prop.indexOf(".");
  if (_index > -1) {
    return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
  }
  return obj[prop];
}
const StringLabel = memo((_bb) => {
  var _cb = _bb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _cb, props = __objRest(_cb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const NumberLabel = memo((_db) => {
  var _eb = _db, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _eb, props = __objRest(_eb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const CurrencyAmountLabel = memo((_fb) => {
  var _gb = _fb, { amount, currency } = _gb, props = __objRest(_gb, ["amount", "currency"]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({}, props), amount === 0 ? "$0" : amount ? `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : "");
});
const PercentLabel = memo((_hb) => {
  var _ib = _hb, { value } = _ib, props = __objRest(_ib, ["value"]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({}, props), value, "%");
});
class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}
const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
const DATE_MED = {
  year: n,
  month: s,
  day: n
};
const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
const DATE_FULL = {
  year: n,
  month: l,
  day: n
};
const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
const TIME_SIMPLE = {
  hour: n,
  minute: n
};
const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale2, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = __spreadValues({ timeZoneName: offsetFormat }, intlOpts);
  const parsed = new Intl.DateTimeFormat(locale2, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === void 0 || v === null)
        continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
const ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const meridiems = ["AM", "PM"];
const erasLong = ["Before Christ", "Anno Domini"];
const erasShort = ["BC", "AD"];
const erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token2 of splits) {
    if (token2.literal) {
      s2 += token2.val;
    } else {
      s2 += tokenToString(token2.val);
    }
  }
  return s2;
}
const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
  static create(locale2, opts = {}) {
    return new Formatter(locale2, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token2) {
    return macroTokenToFormatOpts[token2];
  }
  constructor(locale2, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale2;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.resolvedOptions();
  }
  num(n2, p = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = __spreadValues({}, this.opts);
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token2) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token2);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token2;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token2) => {
      switch (token2) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token2);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token2) => {
      switch (token2[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token2) => {
      const mapped = tokenToField(token2);
      if (mapped) {
        return this.num(lildur.get(mapped), token2.length);
      } else {
        return token2;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}
class Zone {
  get type() {
    throw new ZoneIsAbstractError();
  }
  get name() {
    throw new ZoneIsAbstractError();
  }
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}
let singleton$1 = null;
class SystemZone extends Zone {
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale: locale2 }) {
    return parseZoneInfo(ts, format, locale2);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  equals(otherZone) {
    return otherZone.type === "system";
  }
  get isValid() {
    return true;
  }
}
let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[zone];
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date), filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i], pos = typeToPos[type];
    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
let ianaZoneCache = {};
class IANAZone extends Zone {
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale: locale2 }) {
    return parseZoneInfo(ts, format, locale2, this.name);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name), [year, month, day, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let singleton = null;
class FixedOffsetZone extends Zone {
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
}
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
}
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system")
      return defaultZone2;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
let now = () => Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
class Settings {
  static get now() {
    return now;
  }
  static set now(n2) {
    now = n2;
  }
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  static get defaultLocale() {
    return defaultLocale;
  }
  static set defaultLocale(locale2) {
    defaultLocale = locale2;
  }
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}
let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const _a = opts, { padTo, floor } = _a, otherOpts = __objRest(_a, ["padTo", "floor"]);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = __spreadValues({ useGrouping: false }, opts);
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = __spreadValues({}, this.opts);
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = __spreadValues({ style: "long" }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}
class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale2, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale2 || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale: locale2, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale2, numberingSystem, outputCalendar);
  }
  constructor(locale2, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale2);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: true }));
  }
  redefaultToSystem(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: false }));
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(this, void 0, defaultOK, () => meridiems, () => {
      if (!this.meridiemCache) {
        const intl = { hour: "numeric", hourCycle: "h12" };
        this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
}
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m, cursor);
    return [__spreadValues(__spreadValues({}, mergedVals), val), mergedZone || zone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match2[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`), isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`), sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
const isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
function parseISODate(s2) {
  return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s2) {
  return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}
const INVALID$2 = "Invalid Duration";
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, casualMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix), daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix);
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : __spreadValues(__spreadValues({}, dur.values), alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
class Duration {
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    this.isLuxonDuration = true;
  }
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
  }
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(fmt, opts = {}) {
    const fmtOpts = __spreadProps(__spreadValues({}, opts), {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  toHuman(opts = {}) {
    const l2 = orderedUnits$1.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return this.loc.numberFormatter(__spreadProps(__spreadValues({ style: "unit", unitDisplay: "long" }, opts), { unit: unit.slice(0, -1) })).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter(__spreadValues({ type: "conjunction", style: opts.listStyle || "narrow" }, opts)).format(l2);
  }
  toObject() {
    if (!this.isValid)
      return {};
    return __spreadValues({}, this.values);
  }
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = __spreadValues({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  mapUnits(fn) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = __spreadValues(__spreadValues({}, this.values), normalizeObject(values, Duration.normalizeUnit));
    return clone$1(this, { values: mixed });
  }
  reconfigure({ locale: locale2, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale: locale2, numberingSystem }), opts = { loc };
    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }
    return clone$1(this, opts);
  }
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u) => Duration.normalizeUnit(u));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, { values: built }, true).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}
const INVALID$1 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
  } else {
    return null;
  }
}
class Interval {
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  set({ start, end } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
    let { s: s2 } = this, i = 0;
    while (s2 < this.e) {
      const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i += 1;
    }
    return results;
  }
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(([sofar, current], item) => {
      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]);
    if (final) {
      found.push(final);
    }
    return found;
  }
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i) => [
      { time: i.s, type: "s" },
      { time: i.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
  }
  toString() {
    if (!this.isValid)
      return INVALID$1;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  toISO(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  toISODate() {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}
class Info {
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  static months(length = "long", { locale: locale2 = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale2, numberingSystem, outputCalendar)).months(length);
  }
  static monthsFormat(length = "long", { locale: locale2 = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale2, numberingSystem, outputCalendar)).months(length, true);
  }
  static weekdays(length = "long", { locale: locale2 = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale2, numberingSystem, null)).weekdays(length);
  }
  static weekdaysFormat(length = "long", { locale: locale2 = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale2, numberingSystem, null)).weekdays(length, true);
  }
  static meridiems({ locale: locale2 = null } = {}) {
    return Locale.create(locale2).meridiems();
  }
  static eras(length = "short", { locale: locale2 = null } = {}) {
    return Locale.create(locale2, null, "gregory").eras(length);
  }
  static features() {
    return { relative: hasRelative() };
  }
}
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter((u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0);
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `( |${NBSP})`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token2, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token2.literal) {
      return literal(t);
    }
    switch (t.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token2) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token2;
  return unit;
}
const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function tokenForPart(part, locale2, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token2) => {
    switch (token2) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token2, locale2) {
  if (token2.literal) {
    return token2;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token2.val);
  if (!formatOpts) {
    return token2;
  }
  const formatter = Formatter.create(locale2, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  const tokens = parts.map((p) => tokenForPart(p, locale2, formatOpts));
  if (tokens.includes(void 0)) {
    return token2;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale2) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale2)));
}
function explainFromTokens(locale2, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale2), units = tokens.map((t) => unitForToken(t, locale2)), disqualifyingUnit = units.find((t) => t.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}
function parseFromTokens(locale2, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale2, input, format);
  return [result, zone, specificOffset, invalidReason];
}
const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
  const js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return __spreadValues({ weekYear, weekNumber, weekday }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return __spreadValues({ year, ordinal }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(__spreadProps(__spreadValues(__spreadValues({}, current), alts), { old: current }));
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = __spreadProps(__spreadValues({}, inst.c), {
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }), millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, __spreadProps(__spreadValues({}, opts), {
      zone: interpretationZone,
      specificOffset
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0)
    c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  return c;
}
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"], orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
class DateTime {
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  static now() {
    return new DateTime({});
  }
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
    }
    return inst;
  }
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale: locale2 = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale: locale2,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  get(unit) {
    return this[unit];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(opts = {}) {
    const { locale: locale2, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
    return { locale: locale2, numberingSystem, outputCalendar: calendar };
  }
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  reconfigure({ locale: locale2, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale: locale2, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  setLocale(locale2) {
    return this.reconfigure({ locale: locale2 });
  }
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(__spreadValues(__spreadValues({}, gregorianToWeek(this.c)), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(__spreadValues(__spreadValues({}, gregorianToOrdinal(this.c)), normalized));
    } else {
      mixed = __spreadValues(__spreadValues({}, this.toObject()), normalized);
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      case "quarters":
      case "months":
        o.day = 1;
      case "weeks":
      case "days":
        o.hour = 0;
      case "hours":
        o.minute = 0;
      case "minutes":
        o.second = 0;
      case "seconds":
        o.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    const ext = format === "extended";
    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
    return c;
  }
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended");
  }
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    format = "extended"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    let c = includePrefix ? "T" : "";
    return c + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
  }
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = __spreadValues({}, this.c);
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = __spreadValues({ locale: this.locale, numberingSystem: this.numberingSystem }, opts);
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), __spreadProps(__spreadValues({}, options), {
      numeric: "always",
      units,
      unit
    }));
  }
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, __spreadProps(__spreadValues({}, options), {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale: locale2 = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale: locale2,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  static get DATE_MED() {
    return DATE_MED;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  static get DATE_FULL() {
    return DATE_FULL;
  }
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
  }
}
const DateLabel = memo((_jb) => {
  var _kb = _jb, {
    className = "",
    grow = false,
    format = DateTime.DATE_MED,
    icon,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _kb, props = __objRest(_kb, [
    "className",
    "grow",
    "format",
    "icon",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    className: `${className} date-label`,
    grow: false,
    icon,
    textColor,
    textSize
  }, props), DateTime.fromISO(value).toLocaleString(format));
});
const MenuItemLabel = memo((_lb) => {
  var _mb = _lb, {
    fieldName,
    icon,
    lineHeight = Size.Default,
    model,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _mb, props = __objRest(_mb, [
    "fieldName",
    "icon",
    "lineHeight",
    "model",
    "textColor",
    "textSize",
    "value"
  ]);
  var _a, _b, _c, _d;
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), !fieldName || !model ? value : (_d = (_c = (_b = (_a = model.fields[fieldName]) == null ? void 0 : _a.items) == null ? void 0 : _b.find((i) => i.value === value)) == null ? void 0 : _c.label) != null ? _d : value);
});
function getLabelByFieldType({
  fieldName,
  model,
  props,
  type,
  value
}) {
  switch (type) {
    case Primitives.Boolean:
      return /* @__PURE__ */ React.createElement(BooleanLabel, __spreadValues({
        grow: false,
        value
      }, props));
    case Primitives.CurrencyAmount:
      return /* @__PURE__ */ React.createElement(CurrencyAmountLabel, __spreadValues({
        amount: value,
        currency: CurrencyCode.UnitedStatesDollar
      }, props));
    case Primitives.Date:
      return /* @__PURE__ */ React.createElement(DateLabel, __spreadValues({
        value
      }, props));
    case Primitives.Percent:
      return /* @__PURE__ */ React.createElement(PercentLabel, __spreadValues({
        value
      }, props));
    case Primitives.Menu:
      return /* @__PURE__ */ React.createElement(MenuItemLabel, __spreadValues({
        fieldName,
        model,
        value
      }, props));
    case Primitives.Number:
      return /* @__PURE__ */ React.createElement(NumberLabel, __spreadValues({
        value
      }, props));
    case Primitives.String:
      return /* @__PURE__ */ React.createElement(StringLabel, __spreadValues({
        grow: false,
        value
      }, props));
    default:
      return /* @__PURE__ */ React.createElement(StringLabel, __spreadValues({
        grow: false,
        value
      }, props));
  }
}
const DataGridCell = memo((_nb) => {
  var _ob = _nb, {
    fieldName,
    model,
    type,
    value
  } = _ob, props = __objRest(_ob, [
    "fieldName",
    "model",
    "type",
    "value"
  ]);
  const {
    alignContent,
    textColor,
    textOverflow,
    textSize,
    textWeight,
    maxWidth,
    minWidth,
    width
  } = props;
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    orientation: Orientation.Horizontal,
    overflow: Overflow.Hidden,
    maxWidth,
    minWidth,
    paddingLeft: Amount.Less,
    paddingRight: Amount.Less,
    width
  }, props), getLabelByFieldType({
    fieldName,
    model,
    props: {
      alignContent,
      overflow: Overflow.Hidden,
      textColor,
      textOverflow,
      textSize,
      textWeight
    },
    type,
    value
  }));
});
const SearchInput = memo((_pb) => {
  var _qb = _pb, { onChange } = _qb, props = __objRest(_qb, ["onChange"]);
  return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({
    icon: {
      name: BasicIcons.Search,
      size: Size.Smaller
    },
    inputType: TextInputType.Search,
    onChange,
    spellCheck: false
  }, props));
});
const MenuButton = memo((_rb) => {
  var _sb = _rb, {
    backgroundColor = BackgroundColors.MenuButton,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1
    },
    borderRadius = Amount.Least,
    className = "",
    menu,
    label,
    padding = 5,
    size = Size.Default,
    textColor = TextColors.MenuButton,
    width
  } = _sb, props = __objRest(_sb, [
    "backgroundColor",
    "border",
    "borderRadius",
    "className",
    "menu",
    "label",
    "padding",
    "size",
    "textColor",
    "width"
  ]);
  const [focused, setFocused] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    setFocused(menuVisible);
  }, [menuVisible]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    boxShadow: menuVisible ? DepthShadow.Higher : DepthShadow.Surface,
    borderRadius,
    className: `${className} menu-button`,
    depth: Depth.Higher,
    grow: false,
    orientation: Orientation.Vertical,
    onMouseLeave: () => {
      setMenuVisible(false);
    },
    width
  }, props), /* @__PURE__ */ React.createElement(DropdownControl, {
    backgroundColor,
    borderRadius,
    border,
    depth: Depth.High,
    label: label != null ? label : "",
    focused,
    lineHeight: size,
    menuVisible,
    name: "menu-button-dropdown-control",
    onBlur: () => {
      if (!menuVisible)
        setFocused(false);
    },
    onFocus: () => setFocused(true),
    onClick: () => setMenuVisible(!menuVisible),
    textColor
  }), /* @__PURE__ */ React.createElement(HoverPanel, {
    backgroundColor,
    borderRadius,
    detached: false,
    focused,
    padding,
    visible: menuVisible,
    setMenuVisible,
    width
  }, /* @__PURE__ */ React.createElement(Menu, {
    backgroundColor: BackgroundColors.Light,
    borderRadius,
    menu,
    onClick: (e) => {
      setMenuVisible(false);
    }
  })));
});
const DataGrid = memo((_tb) => {
  var _ub = _tb, {
    backgroundColor = BackgroundColors.DataGrid,
    borderRadius = Amount.Least,
    boxShadow = DepthShadow.Highest,
    className = "",
    columns,
    columnCount = 3,
    data,
    depth = Depth.Highest,
    display = DataGridDisplayType.Table,
    header,
    hideOnProp,
    loaded,
    loading,
    model,
    onItemClick,
    padding = Amount.Less,
    template
  } = _ub, props = __objRest(_ub, [
    "backgroundColor",
    "borderRadius",
    "boxShadow",
    "className",
    "columns",
    "columnCount",
    "data",
    "depth",
    "display",
    "header",
    "hideOnProp",
    "loaded",
    "loading",
    "model",
    "onItemClick",
    "padding",
    "template"
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRow, setHoveredRow] = useState();
  const MIN_COLUMN_WIDTH = 150;
  const MAX_COLUMN_WIDTH = 300;
  if (!columns) {
    return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
      alignContent: Align.Top,
      backgroundColor,
      borderRadius,
      boxShadow,
      className: `${className} data-grid`,
      grow: true,
      overflow: Overflow.Hidden
    }, props), /* @__PURE__ */ React.createElement(Label, null, "No columns defined"));
  }
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent: Align.Top,
    backgroundColor,
    borderRadius,
    boxShadow,
    className: `${className} data-grid`,
    grow: false,
    overflow: Overflow.Hidden
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    borderRadius,
    visible: loading
  }), header && Object.keys(header).length > 0 && /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor: BackgroundColors.DataGridHeader,
    borderRadius: {
      topLeft: Amount.Less,
      topRight: Amount.Less
    },
    className: "data-grid-header",
    orientation: Orientation.Horizontal,
    padding: Amount.Less,
    grow: false
  }, header.search && /* @__PURE__ */ React.createElement(Container$h, {
    width: header.search.width
  }, /* @__PURE__ */ React.createElement(SearchInput, {
    name: "search-input",
    onChange: ({ value }) => {
      setSearchTerm(value != null ? value : "");
    },
    placeholder: header.search.placeholder,
    width: header.search.width
  })), /* @__PURE__ */ React.createElement(Container$h, {
    alignSelf: Align.Stretch
  }), header.export && /* @__PURE__ */ React.createElement(Container$h, {
    width: header.export.width
  }, /* @__PURE__ */ React.createElement(MenuButton, {
    menu: [
      {
        label: "Export to CSV",
        onClick: () => downloadDataAsFile({
          data: formatObjectToCSVData({
            objectType: "EXPENSE"
          }),
          fileName: "expenses"
        })
      }
    ],
    label: "Export"
  })), header.create && /* @__PURE__ */ React.createElement(Button$1, {
    onClick: header.create.onClick,
    size: Size.Small,
    type: ButtonType.Secondary
  }, header.create.label)), /* @__PURE__ */ React.createElement(Container$h, {
    borderRadius: !header ? borderRadius : void 0,
    className: "data-grid-grid",
    onScroll: (e) => e.preventDefault(),
    overflow: Overflow.Scroll
  }, display === DataGridDisplayType.Table ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Left,
    backgroundColor: BackgroundColors.DataGridColumnHeaders,
    className: "data-grid-headers",
    orientation: Orientation.Horizontal,
    paddingBottom: Amount.Least,
    paddingTop: Amount.Least,
    grow: false
  }, columns.map((column, key) => {
    var _a;
    return /* @__PURE__ */ React.createElement(Container$h, {
      alignContent: column.align,
      alignItems: Align.Center,
      backgroundColor: BackgroundColors.DataGridColumnHeaders,
      border: key !== columns.length - 1 ? {
        right: {
          color: BorderColors.Default,
          style: BorderStyle.Solid,
          width: 1
        }
      } : void 0,
      borderRadius: !header ? {
        topLeft: header ? 0 : Amount.Default,
        topRight: header ? 0 : Amount.Default
      } : void 0,
      className: "data-grid-header-cell",
      shrink: false,
      key,
      orientation: Orientation.Horizontal,
      paddingLeft: Amount.Default,
      paddingRight: Amount.Default,
      maxWidth: (_a = column.maxWidth) != null ? _a : MAX_COLUMN_WIDTH,
      minWidth: column.minWidth ? column.minWidth : MIN_COLUMN_WIDTH,
      width: column.width
    }, /* @__PURE__ */ React.createElement(Label, {
      alignContent: column.align,
      alignItems: Align.Center,
      height: Size.Large,
      textColor: TextColors.DataGridColumnHeaders,
      size: Size.Smaller
    }, column.label));
  })), /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor: BackgroundColors.DataGridRow,
    borderRadius: {
      bottomLeft: Amount.Default,
      bottomRight: Amount.Default
    },
    className: "data-grid-rows",
    grow: true,
    lineWrap: true,
    orientation: Orientation.Vertical
  }, data && data.map((row, key) => {
    return /* @__PURE__ */ React.createElement(Container$h, {
      backgroundColor: BackgroundColors.DataGridCell,
      borderRadius: Amount.None,
      className: "data-grid-row",
      cursor: Cursor.Pointer,
      grow: true,
      hover: {
        backgroundColor: BackgroundColors.Primary
      },
      orientation: Orientation.Horizontal,
      key,
      onClick: () => {
        if (onItemClick)
          onItemClick(row);
      },
      onMouseEnter: () => setHoveredRow(key),
      onMouseLeave: () => setHoveredRow(void 0),
      padding: Amount.Least,
      paddingLeft: Amount.Least,
      paddingRight: Amount.Least
    }, columns.map((column, columnKey) => {
      var _a;
      return /* @__PURE__ */ React.createElement(DataGridCell, {
        alignContent: column.align,
        alignItems: Align.Center,
        fieldName: column.field,
        height: Size.Large,
        model,
        textColor: hoveredRow === key ? TextColors.PrimaryContrast : TextColors.DataGridCell,
        type: column.type,
        value: fetchFromObject(row, column.field),
        maxWidth: (_a = column.maxWidth) != null ? _a : MAX_COLUMN_WIDTH,
        minWidth: column.minWidth ? column.minWidth : MIN_COLUMN_WIDTH,
        width: column.width
      });
    }));
  }))) : /* @__PURE__ */ React.createElement(Container$h, null, !loading && loaded && data && data.length === 0 ? /* @__PURE__ */ React.createElement(NoResults, {
    as: Container$h
  }, /* @__PURE__ */ React.createElement(Label, null, "No results")) : data && data.map((row, key) => {
    if (template && template.card) {
      return createElement(template.card, {
        key,
        marginBottom: Amount.Default,
        onClick: () => {
          if (onItemClick)
            onItemClick(row);
        },
        row
      });
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, "Need a card template here");
    }
  }))));
});
const NoResults = styled.div`
  color: #9b9b9b;
  font-size: 13px;
  font-weight: 500;
  padding: 50px 0;
  text-align: center;
`;
const BooleanLabel = memo((_vb) => {
  var _wb = _vb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _wb, props = __objRest(_wb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), /* @__PURE__ */ React.createElement(Icon, {
    color: value ? Colors.Primary : Colors.Error,
    name: value ? BasicIcons.Checkmark2 : BasicIcons.Close,
    size: Size.Smaller
  }), value);
});
const ColorLabel = memo((_xb) => {
  var _yb = _xb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _yb, props = __objRest(_yb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const EmailAddressLabel = memo((_zb) => {
  var _Ab = _zb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _Ab, props = __objRest(_Ab, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const PhoneNumberLabel = memo((_Bb) => {
  var _Cb = _Bb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _Cb, props = __objRest(_Cb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const ProgressLabel = memo((_Db) => {
  var _Eb = _Db, {
    color,
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _Eb, props = __objRest(_Eb, [
    "color",
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  const spent = value[1];
  const total = value[2];
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), /* @__PURE__ */ React.createElement(ProgressMeter, {
    amount: spent,
    backgroundColor: color,
    total
  }));
});
const CountryLabel = memo((_Fb) => {
  var _Gb = _Fb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _Gb, props = __objRest(_Gb, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const LanguageLabel = memo((_Hb) => {
  var _Ib = _Hb, {
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value
  } = _Ib, props = __objRest(_Ib, [
    "icon",
    "lineHeight",
    "textColor",
    "textSize",
    "value"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), value);
});
const PersonLabel = memo((_Jb) => {
  var _Kb = _Jb, {
    image,
    name,
    size = Size.Default,
    textSize = TextSize.Large
  } = _Kb, props = __objRest(_Kb, [
    "image",
    "name",
    "size",
    "textSize"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Center,
    orientation: Orientation.Horizontal
  }, props), /* @__PURE__ */ React.createElement(Image, {
    borderRadius: Amount.All,
    marginRight: getSmallerAmount(convertSizeToAmount(size)),
    path: image == null ? void 0 : image.path,
    url: image == null ? void 0 : image.url,
    size
  }), /* @__PURE__ */ React.createElement(Label, {
    lineHeight: getSmallerAmount(convertSizeToAmount(size)),
    textWeight: TextWeight.More,
    textSize
  }, name));
});
const UserLabel = memo(({
  className = "",
  to,
  id,
  menu = {
    menu: [
      {
        label: "Send message",
        onClick: () => {
          console.log("sendEmail");
        }
      },
      { label: "View Profile", to: `/people/${id}` }
    ]
  },
  messageIcon = {
    name: BasicIcons.BillEnvelope
  },
  name,
  image,
  size = Size.Default,
  textSize = TextSize.Default
}) => {
  return /* @__PURE__ */ React.createElement(NavigationLink, {
    borderRadius: Amount.All,
    className: `${className} user-label`,
    active: {
      backgroundColor: BackgroundColors.Primary,
      backgroundOpacity: 100
    },
    hover: {
      backgroundColor: BackgroundColors.Primary,
      backgroundOpacity: 90
    },
    orientation: Orientation.Horizontal,
    padding: getSmallerAmount(convertSizeToAmount(size)),
    paddingTop: getSmallerAmount(convertSizeToAmount(size)),
    paddingBottom: getSmallerAmount(convertSizeToAmount(size)),
    to: to != null ? to : `/people/${id}`,
    style: {
      position: "relative",
      zIndex: 5
    }
  }, /* @__PURE__ */ React.createElement(PersonLabel, {
    name,
    image,
    lineHeight: size,
    size,
    textSize
  }), messageIcon && /* @__PURE__ */ React.createElement(Icon, __spreadValues({
    grow: false,
    size
  }, messageIcon)), menu && /* @__PURE__ */ React.createElement(MoreMenu, __spreadValues({}, menu)));
});
const MarkdownEditor = memo((_Lb) => {
  var props = __objRest(_Lb, []);
  return /* @__PURE__ */ React.createElement("div", null);
});
function getActivityLabel(activity) {
  switch (activity) {
    case Activities.Comment:
      return "commented";
    case Activities.Create:
      return "created";
    case Activities.Delete:
      return "deleted";
    case Activities.Edit:
      return "edited";
    case Activities.Invoice:
      return "invoiced";
    case Activities.Message:
      return "messaged";
    case Activities.PageView:
      return "viewed";
    case Activities.Paid:
      return "paid";
    case Activities.Payment:
      return "paid";
    case Activities.Purchase:
      return "purchased";
    case Activities.Referral:
      return "referred";
    case Activities.Renewal:
      return "renewed";
    case Activities.Signup:
      return "signed up";
    case Activities.Subscription:
      return "subscribed";
    case Activities.Upgrade:
      return "upgraded";
    default:
      return activity;
  }
}
const ActivityFeedItem = memo(({
  dateFormat = DateTime.DATE_FULL,
  who,
  when,
  what,
  where
}) => {
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: "activity-item",
    grow: false,
    orientation: Orientation.Horizontal
  }, who && /* @__PURE__ */ React.createElement(UserLabel, {
    grow: false,
    image: who.image,
    menu: null,
    name: who.name,
    size: Size.Small,
    to: who.to
  }), what && /* @__PURE__ */ React.createElement(Container$h, {
    grow: false,
    marginLeft: -2,
    orientation: Orientation.Horizontal
  }, /* @__PURE__ */ React.createElement(Label, {
    textSize: TextSize.Default
  }, getActivityLabel(what.name)), what.to ? /* @__PURE__ */ React.createElement(Link, {
    to: what.to,
    hover: {
      underline: true
    },
    marginLeft: 3,
    underline: false
  }, what.label) : what.label), where && /* @__PURE__ */ React.createElement(Label, {
    alignItems: Align.Center,
    grow: false,
    marginLeft: -2,
    textSize: TextSize.Default
  }, where), /* @__PURE__ */ React.createElement(Label, {
    grow: false,
    marginLeft: 3
  }, "on"), when && /* @__PURE__ */ React.createElement(DateLabel, {
    format: dateFormat,
    grow: false,
    marginLeft: 3,
    textSize: TextSize.Default,
    value: when
  }));
});
const ActivityFeed = memo((_Mb) => {
  var _Nb = _Mb, {
    activities,
    className = "",
    dateFormat = DateTime.DATE_MED
  } = _Nb, props = __objRest(_Nb, [
    "activities",
    "className",
    "dateFormat"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} activity-feed`
  }, props), activities.map((activity, key) => {
    return /* @__PURE__ */ React.createElement(Container$h, {
      key
    }, key !== 0 && key !== activities.length && /* @__PURE__ */ React.createElement(Container$h, {
      backgroundColor: BackgroundColors.Lighter,
      borderRadius: Amount.Default,
      height: 12,
      marginLeft: convertSizeToAmount(Size.Default),
      marginBottom: 5,
      marginTop: 5,
      style: {
        transform: "translateX(-2px)"
      },
      width: 5
    }), /* @__PURE__ */ React.createElement(ActivityFeedItem, __spreadValues({}, activity)));
  }), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    alignItems: Align.Center,
    border: {
      top: {
        color: BorderColors.Light,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    marginTop: Amount.Default,
    padding: Amount.Default,
    paddingBottom: Amount.None
  }, /* @__PURE__ */ React.createElement(Button$1, {
    type: ButtonType.Primary,
    size: Size.Small
  }, "Load more")));
});
const HelperButton = memo(({ content }) => {
  const [contentVisible, setContentVisible] = useState(false);
  return /* @__PURE__ */ React.createElement(Container$6, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
    },
    secondary: true,
    onMouseEnter: () => setContentVisible(true),
    onMouseLeave: () => setContentVisible(false)
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: BasicIcons.HelpBubble
  })), /* @__PURE__ */ React.createElement(Content$1, {
    visible: contentVisible
  }, content));
});
const Container$6 = styled.div`
  position: relative;

  &:hover {
    z-index: 50000;
  }
`;
const Button = styled.button`
  background: transparent;
  border: none;
  line-height: 22px;

  svg {
    fill: rgba(162, 192, 80, 1);
    height: 24px;
    vertical-align: middle;
    width: 24px;
  }
`;
const Content$1 = styled.div`
  background: white;
  border: 10px solid rgba(203, 226, 90, 1);
  border-radius: 25px;
  bottom: 30px;
  box-shadow: 0 15px 25px rgba(65, 146, 64, 0.3);
  // color: rgba(65, 146, 64, 1);
  color: rgba(120, 120, 120, 1);
  font-size: 14px;
  opacity: 0;
  padding: 15px;
  pointer-events: none;
  position: absolute;
  transition: all 0.2s ease-in;
  transform: translateX(-100px);
  width: 220px;

  b {
    font-weight: 700;
  }

  ${(props) => props.visible && css`
      opacity: 1;
      pointer-events: all;
    `}
`;
const InputHelper = memo(() => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
});
const Checkbox = memo((_Ob) => {
  var _Pb = _Ob, {
    className = "",
    defaultValue = false,
    onChange,
    size = Size.Small,
    validation = {}
  } = _Pb, props = __objRest(_Pb, [
    "className",
    "defaultValue",
    "onChange",
    "size",
    "validation"
  ]);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const probs = validate(value, validation);
    setProblems(probs);
    if (onChange)
      onChange({
        problems: probs,
        validated: !probs.length,
        value
      });
  }, [value]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignContent: Align.Center,
    as: "button",
    backgroundColor: BackgroundColors.Transparent,
    className: `${className} checkbox`,
    cursor: Cursor.Pointer,
    error: problems,
    form: "null",
    onBlur: () => setFocused(false),
    onClick: () => setValue(!value),
    onFocus: () => setFocused(true),
    orientation: Orientation.Horizontal
  }, props), /* @__PURE__ */ React.createElement(Box, {
    size,
    focused
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: value ? Colors.Success : Colors.White,
    name: BasicIcons.Checkmark2,
    size: Size.Smaller
  })));
});
const Box = styled.span`
  ${FocusedStyles};

  align-items: center;
  background: white;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 4px;
  color: #7b7b7b;
  cursor: pointer;
  display: flex;
  height: ${(props) => props.size};
  justify-content: center;
  margin-right: 5px;
  position: relative;
  text-align: center;
  transition: background 0.2s ease-in-out;
  width: ${(props) => props.size};

  &:before {
    border-radius: ${Amount.Least};
  }

  ${(props) => !props.fixed && css`
      &:hover {
        background: rgba(220, 220, 220, 0.1);
      }
    `}
`;
const hexCharacters = "a-f\\d";
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
function hexRgb(hex, options = {}) {
  if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError("Expected a valid hex string");
  }
  hex = hex.replace(/^#/, "");
  let alphaFromHex = 1;
  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }
  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = number >> 8 & 255;
  const blue = number & 255;
  const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;
  if (options.format === "array") {
    return [red, green, blue, alpha];
  }
  if (options.format === "css") {
    const alphaString = alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`;
    return `rgb(${red} ${green} ${blue}${alphaString})`;
  }
  return { red, green, blue, alpha };
}
function rgbHex(red, green, blue, alpha) {
  const isPercent = (red + (alpha || "")).toString().includes("%");
  if (typeof red === "string") {
    [red, green, blue, alpha] = red.match(/(0?\.?\d{1,3})%?\b/g).map((component) => Number(component));
  } else if (alpha !== void 0) {
    alpha = Number.parseFloat(alpha);
  }
  if (typeof red !== "number" || typeof green !== "number" || typeof blue !== "number" || red > 255 || green > 255 || blue > 255) {
    throw new TypeError("Expected three numbers below 256");
  }
  if (typeof alpha === "number") {
    if (!isPercent && alpha >= 0 && alpha <= 1) {
      alpha = Math.round(255 * alpha);
    } else if (isPercent && alpha >= 0 && alpha <= 100) {
      alpha = Math.round(255 * alpha / 100);
    } else {
      throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
    }
    alpha = (alpha | 1 << 8).toString(16).slice(1);
  } else {
    alpha = "";
  }
  return (blue | green << 8 | red << 16 | 1 << 24).toString(16).slice(1) + alpha;
}
const defaultColors = [
  "244,67,54",
  "233,30,99",
  "156,39,176",
  "103,58,183",
  "63,81,181",
  "33,150,243",
  "3,169,244",
  "0,188,212",
  "0,150,136",
  "76,175,80",
  "139,195,74",
  "205,220,57",
  "255,235,59",
  "255,193,7",
  "255,152,0",
  "255,87,34",
  "121,85,72",
  "96,125,139"
];
const ColorInput = memo(({ defaultValue, onChange }) => {
  var _a;
  const [value, setValue] = useState(defaultValue);
  const [colorName, setColorName] = useState(null);
  useEffect(() => {
    setColorName(colorNamer(`rgb(${value})`).pantone[0].name);
    if (value !== defaultValue) {
      if (onChange)
        onChange({ value });
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement(Container$5, {
    "data-testid": "color-picker"
  }, /* @__PURE__ */ React.createElement(ColorMenu, null, /* @__PURE__ */ React.createElement(ColorName, null, colorName), /* @__PURE__ */ React.createElement(PresetColors, null, defaultColors.map((color, key) => {
    return /* @__PURE__ */ React.createElement(PresetColor, {
      onClick: () => setValue(color),
      color,
      key,
      selected: color === value
    });
  })), /* @__PURE__ */ React.createElement(ColorMixer, null, /* @__PURE__ */ React.createElement(HexColorPicker, {
    color: rgbHex((_a = value == null ? void 0 : value.toString()) != null ? _a : ""),
    onChange: (color) => {
      const rgb = hexRgb(color);
      setValue(`${rgb.red},${rgb.green},${rgb.blue}`);
    }
  }))));
});
const ColorPreview = styled.div`
  border-radius: 4px 4px 0 0;
  padding: 8px;
`;
const ColorMenu = styled.div`
  background: white;

  border-radius: 12px 0 12px 12px;
  height: 250px;
  overflow: hidden;

  /* ${(props) => props.modal && css`
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      display: none;
      position: absolute;
      right: 0;
      width: 220px;
      z-index: 10001;
    `}; */
`;
const Container$5 = styled.div`
  position: relative;

  ${(props) => props.modal && css`
      &:hover {
        ${ColorMenu} {
          display: block;
        }

        ${ColorPreview} {
          background: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      }
    `};
`;
const ColorName = styled.div`
  color: #5b5b5b;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 8px 0;
  text-align: center;
`;
const PresetColors = styled.div`
  height: 60px;
  padding: 9px 4px 9px 9px;
`;
const PresetColor = styled.button`
  background: transparent;
  border-radius: 18px;
  border: ${(props) => props.selected ? `4px solid rgba(${props.color}, 1)` : `9px solid rgba(${props.color}, 1)`};
  cursor: pointer;
  float: left;
  height: 18px;
  outline: none;
  margin: 0 5px 5px 0;
  transform: scale(1);
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 18px;

  &:hover {
    transform: scale(1.2);
  }
`;
const ColorMixer = styled.div`
  height: 190px;
  width: 100%;

  .react-colorful {
    height: 170px;
    width: 220px;
  }
  .react-colorful__saturation {
    border-radius: 3px 3px 0 0;
  }
  .react-colorful__hue {
    height: 30px;
    border-radius: 0 0 3px 3px;
  }
  .react-colorful__saturation-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
  .react-colorful__hue-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
`;
const DynamicInput = memo(({ label, type }) => {
  const getInputComponentByType = () => {
    switch (type) {
      case Primitives.String:
        return /* @__PURE__ */ React.createElement(InputRow, null, /* @__PURE__ */ React.createElement(InputLabel, null, label));
      case Primitives.Menu:
        return /* @__PURE__ */ React.createElement(InputRow, null);
      default:
        return /* @__PURE__ */ React.createElement(NotificationLabel, {
          type: NotificationType.Error
        }, `Unimplemented field type! ${label} : ${type}`);
    }
  };
  return getInputComponentByType();
});
const StreetAddressInput = memo((_Qb) => {
  var props = __objRest(_Qb, []);
  return /* @__PURE__ */ React.createElement(TextInput, __spreadValues({}, props));
});
const AlignLeft = memo((_Rb) => {
  var _Sb = _Rb, { children } = _Sb, props = __objRest(_Sb, ["children"]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Left,
    className: "align-left"
  }, props), children);
});
const AlignRight = memo((_Tb) => {
  var _Ub = _Tb, { children } = _Ub, props = __objRest(_Ub, ["children"]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Right,
    className: "right"
  }, props), children);
});
const ListItem = memo((_Vb) => {
  var _Wb = _Vb, { as = "li", children } = _Wb, props = __objRest(_Wb, ["as", "children"]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    as,
    style: {
      display: as === "li" ? "list-item" : "flex"
    },
    orientation: Orientation.Horizontal
  }, props), children);
});
const OrderedList = memo((_Xb) => {
  var _Yb = _Xb, { as = "ul", children } = _Yb, props = __objRest(_Yb, ["as", "children"]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    as
  }, props), children);
});
const UnorderedList = memo((_Zb) => {
  var __b = _Zb, {
    as = "ul",
    grow = false,
    items,
    marginLeft = Amount.Default
  } = __b, props = __objRest(__b, [
    "as",
    "grow",
    "items",
    "marginLeft"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    as,
    grow,
    orientation: Orientation.Vertical
  }, props), items.map((item, index) => item.props.items ? /* @__PURE__ */ React.createElement(Container$h, {
    grow,
    marginLeft,
    paddingBottom: Amount.Least,
    paddingTop: Amount.Least
  }, item) : /* @__PURE__ */ React.createElement(ListItem, {
    grow: false,
    key: index,
    marginLeft,
    paddingBottom: Amount.Least,
    paddingTop: Amount.Least
  }, item)));
});
const Video = memo((_$b) => {
  var _ac = _$b, {
    className = "",
    height = "100%",
    url,
    width = "100%"
  } = _ac, props = __objRest(_ac, [
    "className",
    "height",
    "url",
    "width"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} video`
  }, props), /* @__PURE__ */ React.createElement(VideoElement, __spreadValues({
    height,
    src: url,
    width
  }, props)));
});
const VideoElement = styled.video`
  ${DimensionStyles};
`;
const MediaGridItem = memo((_bc) => {
  var _cc = _bc, {
    borderRadius = Amount.Default,
    description,
    images,
    minHeight,
    moreMenu,
    onClick,
    title,
    url,
    video
  } = _cc, props = __objRest(_cc, [
    "borderRadius",
    "description",
    "images",
    "minHeight",
    "moreMenu",
    "onClick",
    "title",
    "url",
    "video"
  ]);
  var _a, _b, _c;
  const content = images ? /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Bottom,
    orientation: Orientation.Horizontal,
    padding: Amount.Default
  }, /* @__PURE__ */ React.createElement(Label, {
    textColor: TextColors.White,
    textSize: TextSize.Large,
    textWeight: TextWeight.Most
  }, title), /* @__PURE__ */ React.createElement(Container$h, null), moreMenu && /* @__PURE__ */ React.createElement(MoreMenu, __spreadValues({}, moreMenu))) : video ? /* @__PURE__ */ React.createElement(Video, {
    className: "media-grid-video",
    description: video.description,
    path: video.path,
    url: video.url
  }) : /* @__PURE__ */ React.createElement(Container$h, null, "Image not found");
  return /* @__PURE__ */ React.createElement(Card, __spreadValues({
    alignItems: Align.Stretch,
    alignContent: Align.Stretch,
    backgroundColor: BackgroundColors.Dark,
    backgroundImage: {
      position: Align.Center,
      size: BackgroundSize.Cover,
      url: (_c = (_a = images == null ? void 0 : images[0]) == null ? void 0 : _a.url) != null ? _c : (_b = images == null ? void 0 : images[0]) == null ? void 0 : _b.path
    },
    borderRadius,
    grow: false,
    linkTo: url,
    minHeight: minHeight != null ? minHeight : 220,
    onClick
  }, props), content);
});
const MediaGrid = memo((_dc) => {
  var _ec = _dc, {
    borderRadius = Amount.Default,
    children,
    columns = 3,
    className = "",
    items,
    loading
  } = _ec, props = __objRest(_ec, [
    "borderRadius",
    "children",
    "columns",
    "className",
    "items",
    "loading"
  ]);
  const rows = Array.from({ length: Math.ceil(items.length / columns) }).fill(0);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    borderRadius,
    className: `${className} media-grid`,
    marginBottom: Amount.Default,
    orientation: Orientation.Vertical
  }, props), /* @__PURE__ */ React.createElement(LoadingOverlay, {
    backgroundColor: BackgroundColors.Transparent,
    borderRadius,
    visible: loading
  }), rows.map((x, row) => {
    return /* @__PURE__ */ React.createElement(Container$h, {
      className: "media-grid-row",
      key: row,
      marginBottom: Amount.Default,
      orientation: Orientation.Horizontal
    }, items.slice(columns * row, columns * row + columns).map((i, key) => /* @__PURE__ */ React.createElement(MediaGridItem, __spreadValues({
      marginRight: Amount.Default,
      key,
      width: `calc(100% / ${columns != null ? columns : 1} - ${Amount.Default})`
    }, i))));
  }));
});
const MediaPreview = memo((_fc) => {
  var _gc = _fc, {
    borderRadius = Amount.Less,
    className = "",
    height = 220,
    media,
    orientation = Orientation.Vertical
  } = _gc, props = __objRest(_gc, [
    "borderRadius",
    "className",
    "height",
    "media",
    "orientation"
  ]);
  var _a, _b;
  if (!media || media.length === 0)
    return /* @__PURE__ */ React.createElement(Container$h, null, "No media");
  console.log("media", media);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: `${className} media-preview`,
    height: orientation === Orientation.Horizontal ? height : "auto",
    orientation
  }, props), media && media.length > 0 && media[0] && /* @__PURE__ */ React.createElement(Image, {
    alt: media[0].description,
    borderRadius,
    maxWidth: orientation === Orientation.Horizontal ? 300 : "auto",
    url: (_b = media[0].url) != null ? _b : (_a = media == null ? void 0 : media[0]) == null ? void 0 : _a.path
  }), media && media.slice(1).length > 0 && /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.SpaceBetween,
    orientation: orientation === Orientation.Horizontal ? Orientation.Vertical : Orientation.Horizontal,
    lineWrap: true
  }, media.slice(1).map((item, k) => {
    return /* @__PURE__ */ React.createElement(Image, {
      alt: item.description,
      borderRadius: Amount.Least,
      height: orientation === Orientation.Horizontal ? "47%" : "auto",
      key: k,
      marginLeft: orientation === Orientation.Horizontal ? Amount.Less : Amount.None,
      marginTop: orientation === Orientation.Vertical ? Amount.Less : Amount.None,
      url: item.url,
      width: orientation === Orientation.Vertical ? "31%" : "auto"
    });
  })));
});
const MessagePreview = memo((_hc) => {
  var _ic = _hc, {
    backgroundColor = BackgroundColors.Light,
    body,
    borderRadius = Amount.Least,
    className = "",
    date,
    subject,
    sender
  } = _ic, props = __objRest(_ic, [
    "backgroundColor",
    "body",
    "borderRadius",
    "className",
    "date",
    "subject",
    "sender"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor,
    borderRadius,
    className: `${className} message-preview`,
    grow: true,
    orientation: Orientation.Vertical,
    padding: Amount.Default,
    paddingLeft: Amount.More,
    paddingRight: Amount.More
  }, props), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Top,
    grow: true,
    orientation: Orientation.Horizontal
  }, /* @__PURE__ */ React.createElement(Image, {
    borderRadius: Amount.All,
    marginRight: Amount.More,
    url: "http://localhost:3000/public/assets/images/placeholders/people/person1.png",
    size: Size.Default
  }), /* @__PURE__ */ React.createElement(Label, {
    alignItems: Align.Left,
    grow: true,
    lineHeight: Amount.Default,
    marginBottom: Amount.None,
    textColor: TextColors.Light,
    textSize: TextSize.Small,
    textWeight: TextWeight.Default
  }, "Samanatha Baskin"), /* @__PURE__ */ React.createElement(DateLabel, {
    alignContent: Align.Right,
    grow: false,
    lineHeight: Amount.Default,
    value: date,
    textColor: TextColors.Lighter,
    textSize: TextSize.Smaller
  })), /* @__PURE__ */ React.createElement(Container$h, {
    grow: false,
    orientation: Orientation.Horizontal
  }, /* @__PURE__ */ React.createElement(Container$h, {
    borderRadius: Amount.All,
    marginRight: Amount.More,
    size: Size.Default
  }), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Top,
    alignItems: Align.Left,
    orientation: Orientation.Vertical
  }, /* @__PURE__ */ React.createElement(Title, {
    alignItems: Align.Left,
    grow: true,
    lineHeight: Amount.Less,
    marginTop: Amount.None,
    marginBottom: Amount.Less,
    textSize: TextSize.Large,
    textWeight: TextWeight.More
  }, subject), /* @__PURE__ */ React.createElement(Paragraph, {
    marginBottom: Amount.None
  }, body))));
});
const ConversationList = memo((_jc) => {
  var _kc = _jc, {
    backgroundColor = BackgroundColors.Default,
    borderRadius = Amount.Least,
    className = "",
    overflow = Overflow.ScrollVertical,
    width = 350
  } = _kc, props = __objRest(_kc, [
    "backgroundColor",
    "borderRadius",
    "className",
    "overflow",
    "width"
  ]);
  const items = new Array(5).fill(0);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor,
    borderRadius,
    className: `${className} conversation-list`,
    grow: true,
    orientation: Orientation.Vertical,
    overflow,
    width
  }, props), items.map((_, index) => {
    return /* @__PURE__ */ React.createElement(NavigationLink, {
      to: `conversation/${index}`
    }, /* @__PURE__ */ React.createElement(MessagePreview, {
      backgroundColor: BackgroundColors.Default,
      body: "Lorem ipsum",
      border: index !== items.length - 1 ? {
        bottom: {
          color: BorderColors.Light,
          style: BorderStyle.Solid,
          width: 1
        }
      } : void 0,
      borderRadius: Amount.None,
      date: new Date().toISOString(),
      sender: {
        id: "0",
        name: "Yippy James"
      },
      subject: "Lorem ipsum "
    }));
  }));
});
const NavigationMenu = memo((_lc) => {
  var _mc = _lc, {
    alignContent = Align.Left,
    alignItems = Align.Center,
    backgroundColor = BackgroundColors.NavigationMenu,
    className = "",
    padding = Amount.Less,
    menu = [],
    menuItemProps = {
      active: {
        backgroundColor: BackgroundColors.Primary,
        boxShadow: {
          blurRadius: 5,
          color: BackgroundColors.Primary,
          offsetX: 0,
          offsetY: 1,
          opacity: 35,
          spreadRadius: 3
        },
        textColor: TextColors.PrimaryContrast
      },
      borderRadius: Amount.Least,
      focus: {
        textColor: TextColors.PrimaryContrast
      },
      hover: {
        backgroundColor: BackgroundColors.Light,
        textColor: TextColors.Light
      },
      lineHeight: Size.Default,
      padding: Amount.Least,
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textColor: TextColors.Default,
      textSize: TextSize.Default
    }
  } = _mc, props = __objRest(_mc, [
    "alignContent",
    "alignItems",
    "backgroundColor",
    "className",
    "padding",
    "menu",
    "menuItemProps"
  ]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    alignItems: Align.Stretch,
    alignContent: Align.Top,
    as: "nav",
    backgroundColor,
    className: `${className} navigation-menu`,
    padding: Amount.Less
  }, props), menu.map((item, key) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    return /* @__PURE__ */ React.createElement(NavigationLink, __spreadValues({
      active: (_a = menuItemProps == null ? void 0 : menuItemProps.active) != null ? _a : item.active,
      backgroundColor: (_b = menuItemProps == null ? void 0 : menuItemProps.backgroundColor) != null ? _b : BackgroundColors.Transparent,
      borderRadius: (_d = (_c = menuItemProps.borderRadius) != null ? _c : item.borderRadius) != null ? _d : Amount.Default,
      className: "navigation-menu-item",
      focus: (_e = menuItemProps == null ? void 0 : menuItemProps.focus) != null ? _e : item.focus,
      grow: true,
      hover: (_f = menuItemProps == null ? void 0 : menuItemProps.hover) != null ? _f : item.hover,
      icon: item.icon,
      key,
      label: item.label,
      margin: (_g = menuItemProps.margin) != null ? _g : Amount.None,
      marginBottom: (_h = menuItemProps.marginBottom) != null ? _h : Amount.Least,
      marginLeft: (_i = menuItemProps.marginLeft) != null ? _i : Amount.None,
      marginRight: (_j = menuItemProps.marginRight) != null ? _j : Amount.None,
      marginTop: (_k = menuItemProps.marginTop) != null ? _k : Amount.None,
      padding: (_l = menuItemProps.padding) != null ? _l : Amount.None,
      paddingBottom: (_m = menuItemProps.paddingBottom) != null ? _m : menuItemProps.padding,
      paddingLeft: (_n = menuItemProps.paddingLeft) != null ? _n : menuItemProps.padding,
      paddingRight: (_o = menuItemProps.paddingRight) != null ? _o : menuItemProps.padding,
      paddingTop: (_p = menuItemProps.paddingTop) != null ? _p : menuItemProps.padding,
      textColor: (_q = menuItemProps.textColor) != null ? _q : TextColors.Default,
      to: (_r = item.to) != null ? _r : "#"
    }, menuItemProps));
  }));
});
const ConversationNavigation = memo((_nc) => {
  var props = __objRest(_nc, []);
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({}, props), /* @__PURE__ */ React.createElement(Button$1, {
    alignContent: Align.Center,
    borderRadius: Amount.Least,
    fullWidth: true,
    grow: false,
    icon: {
      name: DualLightIcons.AddCircle,
      size: Size.Small
    },
    marginBottom: Amount.Default,
    onClick: () => navigate("/messages/new"),
    size: Size.Large,
    type: ButtonType.Primary
  }, "New Message"), /* @__PURE__ */ React.createElement(NavigationMenu, {
    backgroundColor: BackgroundColors.Transparent,
    menu: [
      {
        icon: {
          name: DualLightIcons.Inbox,
          size: Size.Small
        },
        label: "Inbox",
        to: "/messages/inbox"
      },
      {
        icon: {
          name: DualLightIcons.Star,
          size: Size.Small
        },
        label: "Starred",
        to: "/messages/starred"
      },
      {
        icon: {
          name: DualLightIcons.Send,
          size: Size.Small
        },
        label: "Sent",
        to: "/messages/sent"
      },
      {
        icon: {
          name: DualLightIcons.Note,
          size: Size.Small
        },
        label: "Drafts",
        to: "/messages/drafts"
      },
      {
        icon: {
          name: DualLightIcons.Trash,
          size: Size.Small
        },
        label: "Trash",
        to: "/messages/trash"
      }
    ]
  }));
});
const Message$1 = memo(({ body, subject, sender }) => {
  return /* @__PURE__ */ React.createElement(Container$h, null);
});
const MessageComposer = memo((_oc) => {
  var props = __objRest(_oc, []);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    backgroundColor: BackgroundColors.Default
  }, props), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    border: {
      bottom: {
        color: BorderColors.Dark,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    grow: false,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(Label, null, "Title")), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    border: {
      bottom: {
        color: BorderColors.Dark,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    grow: false,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(Label, null, "Recipients")), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    border: {
      bottom: {
        color: BorderColors.Dark,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    grow: false,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(Label, null, "Subject")), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Top,
    alignContent: Align.Top,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(Label, {
    grow: false
  }, "Message")), /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Left,
    alignContent: Align.Top,
    grow: false,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(Button$1, {
    grow: false,
    type: ButtonType.Primary
  }, "Send")));
});
const Modal = memo(({ children, visible, setVisible }) => {
  return ReactDOM.createPortal(/* @__PURE__ */ React.createElement(Container$4, {
    className: "modal-container",
    visible,
    onClick: () => {
      setVisible(false);
    }
  }, /* @__PURE__ */ React.createElement(Content, null, children)), document.getElementById("root"));
});
const Container$4 = styled.div`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  opacity: ${(props) => props.visible ? "1" : "0"};
  pointer-events: ${(props) => props.visible ? "auto" : "none"};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;
`;
const Content = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const UserMenu = memo(({ onLogoutSuccess }) => {
  const [loggingOut, setLoggingOut] = useState(false);
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.user.details.attributes);
  const loggedIn = useSelector((state) => state.user.authentication.state.loggedIn);
  useEffect(() => {
    if (loggingOut && !loggedIn && onLogoutSuccess)
      onLogoutSuccess();
  }, [loggedIn]);
  if (!loggedIn) {
    return /* @__PURE__ */ React.createElement(ErrorLabel, null, "Not logged in");
  }
  return /* @__PURE__ */ React.createElement(MenuButton, {
    menu: [
      {
        icon: {
          name: BasicIcons.GearCog,
          size: Size.Smaller
        },
        label: "Settings",
        to: "/settings"
      },
      {
        icon: {
          color: Colors.Error,
          name: BasicIcons.Exit,
          size: Size.Smaller
        },
        label: "Logout",
        onClick: () => {
          setLoggingOut(true);
          dispatch(logout());
        },
        textColor: TextColors.Error
      }
    ],
    label: `${attributes == null ? void 0 : attributes.given_name} ${attributes == null ? void 0 : attributes.family_name}`
  });
});
const NavigationBar = memo(({
  backgroundColor = BackgroundColors.NavigationBar,
  logo
}) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement(Container$h, {
    backgroundColor,
    border: {
      bottom: {
        color: BorderColors.Dark,
        style: BorderStyle.Solid,
        width: 1
      }
    },
    grow: false,
    orientation: Orientation.Horizontal,
    padding: Amount.Default,
    paddingLeft: Amount.More,
    paddingRight: Amount.Most
  }, /* @__PURE__ */ React.createElement(Container$h, {
    alignItems: Align.Center,
    grow: false,
    orientation: Orientation.Horizontal
  }, logo), /* @__PURE__ */ React.createElement(Container$h, null), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    width: 200
  }, /* @__PURE__ */ React.createElement(UserMenu, {
    onLogoutSuccess: () => navigate("/login")
  })));
});
const ObjectLink = memo((_pc) => {
  var _qc = _pc, {
    children,
    disabled,
    onClick
  } = _qc, props = __objRest(_qc, [
    "children",
    "disabled",
    "onClick"
  ]);
  return /* @__PURE__ */ React.createElement(Container$3, __spreadValues({
    onClick
  }, props), children);
});
const Container$3 = styled.button`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  display: block;
  width: 100%;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  &:hover {
    border: 1px solid #eee;
    cursor: pointer !important;
  }

  &:active {
    border: 1px solid rgba(65, 145, 63, 1);
  }

  &.disabled {
    cursor: default !important;
    border: none;
  }
`;
const PageLink = memo(({
  textColor,
  label,
  to,
  icon,
  showArrow = false,
  showUnderline = false
}) => {
  return /* @__PURE__ */ React.createElement(Container$2, {
    showUnderline
  }, /* @__PURE__ */ React.createElement(Link$1, {
    to
  }, /* @__PURE__ */ React.createElement(IconWrapper$1, null, icon), /* @__PURE__ */ React.createElement(Label, {
    textColor: textColor != null ? textColor : TextColors.Primary,
    size: Size.Small
  }, label), showArrow && /* @__PURE__ */ React.createElement(Icon, {
    name: BasicIcons.ChevronRight,
    size: Size.Small,
    color: textColor
  })));
});
const Container$2 = styled.div`
  display: flex;

  a {
    border: ${(props) => props.showUnderline ? `2px solid var(--color-primary)` : "none"};
    text-decoration: none;

    /* &:hover {
      border-bottom: 2px solid rgba(65, 145, 64, 1);
    } */
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    a {
      font-size: 18px;
    }

    svg {
      height: 12px;
      width: 12px;
    }
  }

  @media (min-width: 1200px) {
  }
`;
const IconWrapper$1 = styled.div`
  flex-basis: 20px;
`;
const Tabs = memo(({
  borderRadius = Amount.More,
  className = "",
  children
}) => {
  let initialIndex = 0;
  React.Children.forEach(children, (child, key) => {
    var _a;
    if ((_a = child.props) == null ? void 0 : _a.selected)
      initialIndex = key;
  });
  const [currentTabIndex, setTabIndex] = useState(initialIndex);
  return /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Stretch,
    className: `${className} tabs`,
    orientation: Orientation.Vertical
  }, /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    marginBottom: Amount.Default,
    orientation: Orientation.Horizontal,
    grow: false
  }, React.Children.map(children, (c, key) => {
    if (c.props.visible === false)
      return null;
    return /* @__PURE__ */ React.createElement(TabButton, {
      className: c.props.className,
      current: currentTabIndex === key,
      onClick: () => {
        setTabIndex(key);
        if (c.props.onClick && typeof c.props.onClick === "function")
          c.props.onClick();
      },
      key
    }, /* @__PURE__ */ React.createElement(Label, {
      textColor: currentTabIndex === key ? TextColors.Primary : TextColors.Default
    }, c.props.label));
  })), /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Top,
    backgroundColor: BackgroundColors.Default,
    borderRadius,
    boxShadow: DepthShadow.Highest,
    className: "tab-content",
    grow: false,
    orientation: Orientation.Vertical,
    padding: Amount.Most,
    paddingLeft: Amount.All,
    paddingRight: Amount.All
  }, Children.map(children, (c, key) => {
    if (key !== currentTabIndex)
      return null;
    return React.cloneElement(c);
  })));
});
const TabButton = styled.button`
  ${FocusedStyles};

  background: transparent;
  border: none;
  border-bottom: 3px solid rgba(${BorderColors.Light}, 0.5);
  color: var(--text-color-light);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  height: var(--amount-all);
  line-height: var(--amount-all);
  padding: 0 var(--amount-default);
  position: relative;
  text-align: center;
  transition: background 0.2s ease-out, border 0.2s ease-out,
    color 0.2s ease-out;
  user-select: none;

  &:before {
    border-radius: ${Amount.Least};
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
  }

  * {
    cursor: pointer;
  }

  ${(props) => props.current && css`
      border-bottom: 3px solid var(--color-primary);
      font-weight: 700;
    `}
`;
const Tab = memo(({ className = "", children, label, onClick }) => {
  return /* @__PURE__ */ React.createElement(Container$h, {
    className: `${className} tab`,
    "data-label": label,
    fadeIn: true
  }, children);
});
const ConnectionStatus = memo((_rc) => {
  var props = __objRest(_rc, []);
  return /* @__PURE__ */ React.createElement(NotificationLabel, __spreadValues({
    type: NotificationType.Success,
    label: "Connected"
  }, props));
});
const Badge = memo((_sc) => {
  var _tc = _sc, { children, label } = _tc, props = __objRest(_tc, ["children", "label"]);
  var _a;
  return /* @__PURE__ */ React.createElement(Container$1, __spreadValues({}, props), (_a = label == null ? void 0 : label.toString()) != null ? _a : children);
});
const Container$1 = styled.div`
  background: #f2f2f2;
  color: #7b7b7b;
  border-radius: 4px;
  float: left;
  font-size: 9px;
  margin: 0 10px 0 0;
  padding: 4px 6px 5px 6px;
  position: relative;
  text-transform: capitalize;
`;
const Notifications = memo(() => {
  const notifications = useSelector((state) => state.app.notifications);
  return /* @__PURE__ */ React.createElement(Container, null, notifications.map((notification) => {
    return /* @__PURE__ */ React.createElement(NotificationContainer, {
      key: notification.id
    }, /* @__PURE__ */ React.createElement(IconWrapper, {
      color: notification.color
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: notification.icon
    })), /* @__PURE__ */ React.createElement(Close, null, /* @__PURE__ */ React.createElement(CloseButton, {
      onClick: () => {
      }
    })), /* @__PURE__ */ React.createElement(Message, null, notification.message));
  }));
});
const Container = styled.div`
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 15px;
  width: 475px;
  z-index: 50000;
`;
const NotificationContainer = styled.div`
  background: #2b2b2b;
  border-radius: 60px;
  box-shadow: 0 9px 25px rgba(0, 0, 0, 0.3);
  height: 60px;
  margin: 0 0 25px 0;
  overflow: hidden;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const IconWrapper = styled.div`
  float: left;
  height: 60px;
  line-height: 64px;
  text-align: center;
  width: 64px;

  svg {
    fill: rgb(${(props) => props.color || "235, 235, 235"});
    height: 18px;
    width: 18px;
  }
`;
const Message = styled.div`
  color: #eee;
  font-size: 14px;
  font-weight: 500;
  float: left;
  line-height: 58px;
  width: 291px;
`;
const Close = styled.div`
  float: right;
  height: 60px;
  line-height: 49px;
  text-align: center;
  width: 60px;
`;
const Heading = memo((_uc) => {
  var _vc = _uc, {
    as = "h3",
    alignText = Align.Left,
    children,
    className = "",
    grow = false,
    marginBottom = Amount.More,
    textWeight = TextWeight.More,
    textColor = TextColors.Dark,
    textSize = TextSize.Large
  } = _vc, props = __objRest(_vc, [
    "as",
    "alignText",
    "children",
    "className",
    "grow",
    "marginBottom",
    "textWeight",
    "textColor",
    "textSize"
  ]);
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    alignText,
    as,
    className: `${className} heading`,
    grow,
    marginBottom,
    textColor,
    textWeight,
    textSize
  }, props), children);
});
const UniversalSearch = memo((_wc) => {
  var props = __objRest(_wc, []);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [isFocused, setFocused] = useState(false);
  useEffect(() => {
    if (isFocused && searchValue) {
      setResultsVisible(true);
    } else {
      setResultsVisible(false);
    }
  }, [isFocused, searchValue]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: "universal-search",
    grow: true,
    orientation: Orientation.Vertical
  }, props), /* @__PURE__ */ React.createElement(SearchInput, {
    name: "universal-search",
    flat: true,
    placeholder: "Search everything",
    onChange: ({ value }) => setSearchValue(value),
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    },
    spellCheck: false
  }), /* @__PURE__ */ React.createElement(SearchResults, {
    as: Container$h,
    resultsVisible,
    depth: Depth.Highest,
    padding: Amount.More
  }, /* @__PURE__ */ React.createElement(CloseButton, {
    alignSelf: Align.Right,
    onClick: () => setResultsVisible(false),
    size: Size.Small
  }), /* @__PURE__ */ React.createElement(Heading, null, "Search Results")));
});
const SearchResults = styled.div`
  backdrop-filter: blur(3px);
  background: var(--bg-color-depth-highest-opaque);
  /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2); */
  border-radius: var(--border-radius);
  cursor: default;
  display: none;
  overflow: hidden;
  overflow-y: scroll;
  left: 20px;
  max-height: 390px;
  min-height: 300px;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: 80%;
  transform: translateY(-300px);
  transition: opacity 0.18s ease-in-out, transform 0.18s ease-in-out;
  min-width: 500px;
  max-width: 500px;
  z-index: 3;

  .result {
    margin-bottom: 3px;
  }

  ${(props) => props.resultsVisible && css`
      display: flex;
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    `};

  /* @media (min-width: 992px) {
    border-radius: 0 0 8px 0;
    left: 15px;
    top: 60px;
    width: 480px;
  } */
`;
const ThemeSelector = memo((_xc) => {
  var _yc = _xc, { showLabel = true } = _yc, props = __objRest(_yc, ["showLabel"]);
  const dispatch = useDispatch();
  const { current, list } = useSelector((state) => state.ui.themes);
  return /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.Center,
    grow: false
  }, showLabel && /* @__PURE__ */ React.createElement(InputLabel, null, "Theme"), /* @__PURE__ */ React.createElement(DropdownInput, __spreadValues({
    defaultValue: current,
    name: "theme",
    menu: list.map((i) => {
      return {
        label: i.name,
        value: i.id
      };
    }),
    onChange: ({ value }) => {
      const newTheme = list.find((t) => t.id === value);
      dispatch(setTheme(newTheme.id));
    },
    placeholder: "Choose a theme"
  }, props)));
});
const LogoutButton = memo((_zc) => {
  var _Ac = _zc, {
    icon,
    onLogoutSuccess,
    label,
    showArrow = false,
    textColor = TextColors.Error
  } = _Ac, props = __objRest(_Ac, [
    "icon",
    "onLogoutSuccess",
    "label",
    "showArrow",
    "textColor"
  ]);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  useEffect(() => {
    if (!loggedIn && onLogoutSuccess)
      onLogoutSuccess();
  }, [loggedIn]);
  return /* @__PURE__ */ React.createElement(Button$1, __spreadValues({
    onClick: () => dispatch(logout())
  }, props), icon && /* @__PURE__ */ React.createElement(Icon, __spreadValues({}, icon)), /* @__PURE__ */ React.createElement(Label, {
    textColor,
    size: Size.Small
  }, label != null ? label : "Logout"), showArrow && /* @__PURE__ */ React.createElement(Icon, {
    color: textColor,
    name: BasicIcons.ChevronRight,
    size: Size.Small
  }));
});
const ButtonStyles = css`
  background-color: ${BackgroundColors.Lightest};
  border: 1px solid ${BorderColors.Light};
  /* border-radius: props.borderRadius}; */
  /* box-shadow:  Shadows.Low : 'none'}; */
  padding: 0 calc(${(props) => props.size} / 3);

  /* props 
    props.focused &&
    css
      border 1px solid transparent !important;
    };

  props =>
    props.error &&
    css
      border: 1px solid rgb({BorderColors.Error});
    }; */
`;
async function init() {
  Countries.registerLocale(englishLanguage);
}
init();
export { ActivityFeed, AddPaymentMethodForm, Align, AlignLeft, AlignRight, Amount, AnimationStyles, AppearanceStyles, AutoComplete, Backdrop, BackgroundColorShade, BackgroundColors, BackgroundSize, BackgroundStyles, Badge, BooleanLabel, BorderColorShade, BorderColors, BorderRadiusStyles, BorderStyle, BorderStyles, BoxShadowStyles, Button$1 as Button, ButtonStyles, ButtonType, Card, Checkbox, CloseButton, CodeVerificationForm, ColorInput, ColorLabel, Colors, ConnectionStatus, Container$h as Container, ContrastColors, ConversationList, ConversationNavigation, CountryInput, CountryLabel, CurrencyAmountInput, CurrencyAmountLabel, CurrencyInput, Cursor, DataGrid, DataGridCell, DataGridDisplayType, DateInput, DateLabel, Depth, DepthShadow, DimensionStyles, DropdownInput, DropdownPanel, DynamicInput, EmailAddressInput, EmailAddressLabel, EntityEditor, EntityPanel, EntityPreview, ErrorLabel, ErrorNotification, FillBehavior, FocusedStyles, ForegroundColorShade, ForegroundColors, ForgotPasswordForm, Form, FormActions, FormFields, Formatter$1 as Formatter, Heading, HelperButton, HoverPanel, Icon, Image, InputContainerStyles, InputHelper, InputLabel, InputRow, Label, LanguageInput, LanguageLabel, LayoutStyles, LineBreak, LinearGauge, Link, ListItem, LoadingOverlay, LoginForm, LogoutButton, MarkdownEditor, MediaGrid, MediaPreview, Menu, MenuButton, Message$1 as Message, MessageComposer, MessagePreview, Modal, ModalHeader, MoreMenu, NavigationBar, NavigationLink, NavigationMenu, NotificationLabel, Notifications, NumberInput, NumberLabel, ObjectLink, Orb, OrderedList, Orientation, Overflow, Page, PageLink, Paragraph, PasswordInput, PaymentMethodModal, PersonLabel, PhoneNumberInput, PhoneNumberLabel, PieChart, Position, ProgressLabel, ProgressMeter, ProgressSpinner, ProgressivePaymentStatus, RadialChart, RadialGauge, SearchInput, SignupForm, Size, SlidePanel, Small, StreetAddressInput, SubTitle, SubscriptionModal, Svg, Tab, Tabs, TextColors, TextInput, TextInputStyles, TextOverflow, TextSize, TextStyles, TextWeight, ThemeSelector, Title, TitleCard, TitleCards, ToggleInput, UniversalSearch, UnorderedList, UserLabel, UserMenu, VerificationCodeInput, Video, WebApplication, WhiteSpace, Workspace, convertAmountToSize, convertSizeToAmount, convertSizeToTextSize, getCSSBorderValue, getCSSBoxShadowValue, getCSSMeasurementValue, getFormFieldsFromModel, getInputElementByFieldType, getLabelByFieldType, getLargerAmount, getLargerSize, getSmallerAmount, getSmallerSize, useAuthentication, useEntityEditor };
//# sourceMappingURL=index.es.js.map
