var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
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
import React, { memo, useState, useEffect, useRef, forwardRef, useMemo, createElement, useReducer, useCallback, useImperativeHandle, Fragment, Component, createContext, useContext, cloneElement, useLayoutEffect, Children } from "react";
import Countries from "i18n-iso-countries";
import { getIcon, BasicIcons, DualLightIcons } from "@srclaunch/icons";
import { Condition, UserVerificationStatus, NotificationType, CountryCode, CurrencyCode, LanguageCode, Primitives, PageRole, Activities } from "@srclaunch/types";
import { useNavigate as useNavigate$1, useDispatch, useSelector, getVerificationDetails, verifyCode, resendVerificationCode, useResolvedPath as useResolvedPath$1, useMatch, useLocation as useLocation$1, NavLink as NavLink$1, Link as Link$2, login, signUp, getPaymentMethods, getSubscriptions, matchPath, useSearchParams, Outlet, logout, setTheme } from "@srclaunch/web-application-state";
import styled, { css, createGlobalStyle } from "styled-components";
import { Exception } from "@srclaunch/exceptions";
import PasswordStrengthBar from "react-password-strength-bar";
import { Logger } from "@srclaunch/logger";
import colorNamer from "color-namer";
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
  var _a2, _b, _c;
  return ((_a2 = props.transform) == null ? void 0 : _a2.rotate) && css`
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
  var _a2, _b;
  return props.backgroundColor && css`
      background: ${(_b = getBackgroundColor(props.backgroundColor, (_a2 = props.backgroundOpacity) != null ? _a2 : 100)) != null ? _b : "transparent"};
    `;
}};

  ${(props) => {
  var _a2, _b, _c, _d;
  return props.hover && ((_a2 = props.hover) == null ? void 0 : _a2.backgroundColor) && css`
      &:hover {
        background: ${(_d = getBackgroundColor(props.hover.backgroundColor, (_c = (_b = props.hover) == null ? void 0 : _b.backgroundOpacity) != null ? _c : 100)) != null ? _d : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a2;
  return props.backgroundImage && css`
      background-position: ${(_a2 = props.backgroundImage.position) != null ? _a2 : "center"};
      background-image: url(${props.backgroundImage.url});
      background-size: ${getBackgroundSize(props.backgroundImage.size)};
    `;
}};

  ${(props) => {
  var _a2, _b, _c;
  return props.hover && ((_a2 = props.hover) == null ? void 0 : _a2.backgroundOpacity) && css`
      &:hover {
        background: ${getBackgroundColor((_c = (_b = props.hover.backgroundColor) != null ? _b : props.backgroundColor) != null ? _c : "transparent", props.hover.backgroundOpacity)};
      }
    `;
}};

  ${(props) => {
  var _a2, _b, _c;
  return props.focus && ((_a2 = props.focus) == null ? void 0 : _a2.backgroundColor) && css`
      &:focus {
        background: ${(_c = getBackgroundColor(props.focus.backgroundColor, (_b = props.focus.backgroundOpacity) != null ? _b : 100)) != null ? _c : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a2, _b, _c, _d;
  return props.focus && ((_a2 = props.focus) == null ? void 0 : _a2.backgroundOpacity) && css`
      &:focus {
        background: ${(_d = getBackgroundColor((_b = props.focus.backgroundColor) != null ? _b : props.backgroundColor, (_c = props.focus) == null ? void 0 : _c.backgroundOpacity)) != null ? _d : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a2, _b, _c;
  return props.active && ((_a2 = props.active) == null ? void 0 : _a2.backgroundColor) && css`
      &:active,
      &.active {
        background: ${(_c = getBackgroundColor(props.active.backgroundColor, (_b = props.active.backgroundOpacity) != null ? _b : 100)) != null ? _c : "transparent"};
      }
    `;
}};

  ${(props) => {
  var _a2, _b, _c;
  return props.active && ((_a2 = props.active) == null ? void 0 : _a2.backgroundOpacity) && css`
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
  var _a2, _b, _c;
  if (!val)
    return null;
  if (isBorderStyleProps$1(val)) {
    return `${getCSSMeasurementValue((_a2 = val.width) != null ? _a2 : 1)} ${(_b = val.style) != null ? _b : ""} ${val.color === BorderColors.Transparent ? "transparent" : `rgb(${(_c = val.color) != null ? _c : BorderColors.Default})`}`;
  }
  return null;
}
function getCSSBoxShadowValue(val) {
  if (!val)
    return null;
  const getString = (shadow) => {
    var _a2;
    const offsetX = shadow.offsetX ? `${shadow.offsetX}px` : 0;
    const offsetY = shadow.offsetY ? `${shadow.offsetY}px` : 0;
    const blurRadius = shadow.blurRadius ? `${shadow.blurRadius}px` : "";
    const spreadradius = shadow.spreadRadius ? `${shadow.spreadRadius}px` : "";
    const color = ` rgba(${shadow.color}, ${(_a2 = shadow.opacity) != null ? _a2 : 100}%)`;
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
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
  return props.flat ? css`
          border: 1px solid transparent;
        ` : css`
          ${props.border && isBorderStyleProps(props.border) ? css`
                border: ${(_a2 = getCSSBorderValue(props.border)) != null ? _a2 : "none"};
              ` : css`
                border-bottom: ${(_c = getCSSBorderValue((_b = props.border) == null ? void 0 : _b.bottom)) != null ? _c : "initial"};
                border-left: ${(_e2 = getCSSBorderValue((_d = props.border) == null ? void 0 : _d.left)) != null ? _e2 : "initial"};
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
  var _a2, _b, _c, _d;
  if (!borderRadius)
    return null;
  if (typeof borderRadius === "number") {
    return getCSSMeasurementValue(borderRadius);
  }
  if (typeof borderRadius === "object") {
    const topLeft = typeof borderRadius.topLeft === "number" ? getCSSMeasurementValue(borderRadius.topLeft) : (_a2 = borderRadius.topLeft) != null ? _a2 : "initial";
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
  var _a2;
  return props.active && css`
      &:active,
      &.active {
        border-radius: ${getBorderRadius((_a2 = props.active) == null ? void 0 : _a2.borderRadius)};
      }
    `;
}}

  ${(props) => {
  var _a2;
  return props.focus && css`
      &:focus {
        border-radius: ${getBorderRadius((_a2 = props.focus) == null ? void 0 : _a2.borderRadius)};
      }
    `;
}}

  ${(props) => {
  var _a2;
  return props.hover && css`
      &:hover {
        border-radius: ${getBorderRadius((_a2 = props.hover) == null ? void 0 : _a2.borderRadius)};
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
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
  return props.flat ? css`
          box-shadow: none;
        ` : css`
          ${props.active && ((_a2 = props.active) == null ? void 0 : _a2.boxShadow) && css`
            &:active,
            &.active {
              box-shadow: ${(_c = getCSSBoxShadowValue((_b = props.active) == null ? void 0 : _b.boxShadow)) != null ? _c : "0 0 0 0 transparent"};
            }
          `};

          ${props.focus && ((_d = props.focus) == null ? void 0 : _d.boxShadow) && css`
            &:focus {
              box-shadow: ${(_f = getCSSBoxShadowValue((_e2 = props.focus) == null ? void 0 : _e2.boxShadow)) != null ? _f : "0 0 0 0 transparent"};
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
  var _a2;
  return (_a2 = props.cursor) != null ? _a2 : "inherit";
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
  var _a2;
  return (_a2 = props.alignItems) != null ? _a2 : "center";
}};
  display: flex;
  flex: unset;
  flex-grow: ${(props) => props.grow ? 1 : 0};
  flex-direction: ${(props) => props.orientation && props.orientation === Orientation.Horizontal ? "row" : "column"};
  flex-shrink: ${(props) => props.shrink ? 1 : 0};
  flex-wrap: ${(props) => props.lineWrap ? "wrap" : "nowrap"};
  justify-content: ${(props) => {
  var _a2;
  return (_a2 = props.alignContent) != null ? _a2 : "initial";
}};
  place-self: ${(props) => {
  var _a2;
  return (_a2 = props.alignSelf) != null ? _a2 : "initial";
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
  var _a2;
  return props.margin && css`
      margin: ${(_a2 = getCSSMeasurementValue(props.margin)) != null ? _a2 : 0};
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
  var _a2;
  return props.padding && css`
      padding: ${(_a2 = getCSSMeasurementValue(props.padding)) != null ? _a2 : 0};
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
  var _a2;
  return (_a2 = getPositionProperty(props.bottom)) != null ? _a2 : "auto";
}};
  left: ${(props) => {
  var _a2;
  return (_a2 = getPositionProperty(props.left)) != null ? _a2 : "auto";
}};
  position: ${(props) => {
  var _a2;
  return (_a2 = props.position) != null ? _a2 : "relative";
}};
  right: ${(props) => {
  var _a2;
  return (_a2 = getPositionProperty(props.right)) != null ? _a2 : "auto";
}};
  top: ${(props) => {
  var _a2;
  return (_a2 = getPositionProperty(props.top)) != null ? _a2 : "auto";
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
const Container$h = memo((_a2) => {
  var _b = _a2, {
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
  var _a2;
  return props.textColor === TextColors.Inherit ? TextColors.Inherit : `rgb(${(_a2 = props.textColor) != null ? _a2 : TextColors.Default})`;
}};
  cursor: inherit;
  display: ${(props) => props.inline ? "inline" : "flex"};
  font-size: ${(props) => props.textSize};
  font-weight: ${(props) => props.textWeight};
  line-height: ${(props) => getLineHeight(props.lineHeight)};
  text-align: ${(props) => getTextAlignmentFromAlign(props.alignText)};
  text-decoration: ${(props) => props.underline ? "underline" : "none"};
  text-decoration-color: ${(props) => {
  var _a2;
  return props.underlineColor ? props.underlineColor : props.textColor === TextColors.Inherit ? TextColors.Inherit : `rgb(${(_a2 = props.textColor) != null ? _a2 : TextColors.Default})`;
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
const Svg = memo((_e2) => {
  var _f = _e2, {
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
  var _a2, _b, _c, _d;
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
  const updatedBackgroundColor = hovered ? (hover == null ? void 0 : hover.backgroundColor) ? hover == null ? void 0 : hover.backgroundColor : (_a2 = colors == null ? void 0 : colors.backgroundColor) != null ? _a2 : backgroundColor : (_b = colors == null ? void 0 : colors.backgroundColor) != null ? _b : backgroundColor;
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
    onMouseEnter: (e2) => {
      setHovered(true);
      if (onMouseEnter)
        onMouseEnter(e2);
    },
    onMouseLeave: (e2) => {
      setHovered(false);
      if (onMouseLeave)
        onMouseLeave(e2);
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
var si = Object.create;
var P$1 = Object.defineProperty;
var ui = Object.getOwnPropertyDescriptor;
var ri = Object.getOwnPropertyNames;
var ti = Object.getPrototypeOf, li = Object.prototype.hasOwnProperty;
var mi = (a, l2, c2) => l2 in a ? P$1(a, l2, { enumerable: true, configurable: true, writable: true, value: c2 }) : a[l2] = c2;
var oi = (a) => P$1(a, "__esModule", { value: true });
var U = (a, l2) => () => (l2 || a((l2 = { exports: {} }).exports, l2), l2.exports);
var ci = (a, l2, c2, A2) => {
  if (l2 && typeof l2 == "object" || typeof l2 == "function")
    for (let o of ri(l2))
      !li.call(a, o) && (c2 || o !== "default") && P$1(a, o, { get: () => l2[o], enumerable: !(A2 = ui(l2, o)) || A2.enumerable });
  return a;
}, L$1 = (a, l2) => ci(oi(P$1(a != null ? si(ti(a)) : {}, "default", !l2 && a && a.__esModule ? { get: () => a.default, enumerable: true } : { value: a, enumerable: true })), a);
var h$1 = (a, l2, c2) => (mi(a, typeof l2 != "symbol" ? l2 + "" : l2, c2), c2);
var Ge = U((qe) => {
  var Ii = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  qe.validate = function(a) {
    if (!a || a.length > 254)
      return false;
    var l2 = Ii.test(a);
    if (!l2)
      return false;
    var c2 = a.split("@");
    if (c2[0].length > 64)
      return false;
    var A2 = c2[1].split(".");
    return !A2.some(function(o) {
      return o.length > 63;
    });
  };
});
var F = U((c_, we) => {
  we.exports = { error: { length: "Length should be a valid positive number", password: "Password should be a valid string" }, regex: { digits: "(\\d.*)", letters: "([a-zA-Z].*)", symbols: "([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\'\",<.>\\/\\?\u20AC\xA3\xA5\u20B9\xA7\xB1].*)", spaces: "([\\s].*)" } };
});
var xe = U((A_, Ke) => {
  var M = F().regex;
  function B2(a, l2) {
    if (l2 && l2 > 1) {
      let c2 = parseInt(l2, 10);
      return new RegExp(a + "{" + c2 + ",}").test(this.password) === this.positive;
    }
    return new RegExp(a).test(this.password) === this.positive;
  }
  Ke.exports = { not: function(l2) {
    return this.positive = false, l2 ? B2.call(this, l2) : true;
  }, has: function(l2) {
    return this.positive = true, l2 ? B2.call(this, l2) : true;
  }, is: function() {
    return this.positive = true, true;
  }, min: function(l2) {
    return this.password.length >= l2;
  }, max: function(l2) {
    return this.password.length <= l2;
  }, digits: function(l2) {
    return B2.call(this, M.digits, l2);
  }, letters: function(l2) {
    return B2.call(this, M.letters, l2);
  }, uppercase: function(l2) {
    if (l2 && l2 > 1) {
      let c2 = 0, A2 = 0;
      for (; A2 < l2 && c2 < this.password.length; ) {
        let o = this.password.charAt(c2);
        o !== o.toLowerCase() && A2++, c2++;
      }
      return A2 === l2 === this.positive;
    }
    return this.password !== this.password.toLowerCase() === this.positive;
  }, lowercase: function(l2) {
    if (l2 && l2 > 1) {
      let c2 = 0, A2 = 0;
      for (; A2 < l2 && c2 < this.password.length; ) {
        let o = this.password.charAt(c2);
        o !== o.toUpperCase() && A2++, c2++;
      }
      return A2 === l2 === this.positive;
    }
    return this.password !== this.password.toUpperCase() === this.positive;
  }, symbols: function(l2) {
    return B2.call(this, M.symbols, l2);
  }, spaces: function(l2) {
    return B2.call(this, M.spaces, l2);
  }, oneOf: function(l2) {
    return l2.indexOf(this.password) >= 0 === this.positive;
  } };
});
var He = U((d_, Oe) => {
  Oe.exports = function(a, l2, c2) {
    let A2 = c2 ? gi : hi;
    return A2[a] && A2[a](l2);
  };
  var hi = { min: (a) => `The string should have a minimum length of ${a} character${f2(a)}`, max: (a) => `The string should have a maximum length of ${a} character${f2(a)}`, letters: (a = 1) => `The string should have a minimum of ${a} letter${f2(a)}`, digits: (a = 1) => `The string should have a minimum of ${a} digit${f2(a)}`, uppercase: (a = 1) => `The string should have a minimum of ${a} uppercase letter${f2(a)}`, lowercase: (a = 1) => `The string should have a minimum of ${a} lowercase letter${f2(a)}`, symbols: (a = 1) => `The string should have a minimum of ${a} symbol${f2(a)}`, spaces: (a = 1) => `The string should have a minimum of ${a} space${f2(a)}`, oneOf: (a) => `The string should be ${a.length > 1 ? `one of ${a.slice(0, -1).join(", ")} and ` : ""}${a[a.length - 1]}`, has: (a) => `The string should have pattern '${a}'`, not: (a) => `The string should not have pattern '${a}'` }, gi = { min: (a) => `The string should have a maximum length of ${a} character${f2(a)}`, max: (a) => `The string should have a minimum length of ${a} character${f2(a)}`, letters: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} letter${f2(a)}`, digits: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} digit${f2(a)}`, uppercase: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} uppercase letter${f2(a)}`, lowercase: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} lowercase letter${f2(a)}`, symbols: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} symbol${f2(a)}`, spaces: (a = 0) => `The string should ${a === 0 ? "not have" : `have a maximum of ${a}`} space${f2(a)}`, oneOf: (a) => `The string should not be ${a.length > 1 ? `one of ${a.slice(0, -1).join(", ")} and ` : ""}${a[a.length - 1]}`, has: (a) => `The string should not have pattern '${a}'`, not: (a) => `The string should have pattern '${a}'` };
  function f2(a) {
    return a === 1 ? "" : "s";
  }
});
var We = U((I_, ze) => {
  var fi = xe(), _i = F().error, Ei = He();
  function S(a) {
    let l2 = Number(a);
    if (isNaN(l2) || !Number.isInteger(l2) || l2 < 1)
      throw new Error(_i.length);
  }
  function je(a) {
    return fi[a.method].apply(this, a.arguments);
  }
  function _(a, l2, c2) {
    return this.properties.push({ method: a, arguments: l2, description: c2 }), this;
  }
  var Ve = class {
    constructor() {
      this.properties = [];
    }
    validate(l2, c2) {
      return this.list = Boolean(c2 && c2.list), this.details = Boolean(c2 && c2.details), this.password = String(l2), this.positive = true, this.list || this.details ? this.properties.reduce((A2, o) => {
        if (!je.call(this, o)) {
          var I2 = o.method;
          if (this.details) {
            I2 = { validation: o.method }, o.arguments && o.arguments[0] && (I2.arguments = o.arguments[0]), !this.positive && o.method !== "not" && (I2.inverted = true);
            var d2 = o.arguments && o.arguments[1], g2 = d2 || Ei(o.method, I2.arguments, I2.inverted);
            I2.message = g2;
          }
          return A2.concat(I2);
        }
        return A2;
      }, []) : this.properties.every(je.bind(this));
    }
    letters(l2) {
      return l2 && S(l2), _.call(this, "letters", arguments);
    }
    digits(l2) {
      return l2 && S(l2), _.call(this, "digits", arguments);
    }
    symbols(l2) {
      return l2 && S(l2), _.call(this, "symbols", arguments);
    }
    min(l2) {
      return S(l2), _.call(this, "min", arguments);
    }
    max(l2) {
      return S(l2), _.call(this, "max", arguments);
    }
    lowercase(l2) {
      return l2 && S(l2), _.call(this, "lowercase", arguments);
    }
    uppercase(l2) {
      return l2 && S(l2), _.call(this, "uppercase", arguments);
    }
    spaces(l2) {
      return l2 && S(l2), _.call(this, "spaces", arguments);
    }
    has() {
      return _.call(this, "has", arguments);
    }
    not() {
      return _.call(this, "not", arguments);
    }
    is() {
      return _.call(this, "is", arguments);
    }
    oneOf() {
      return _.call(this, "oneOf", arguments);
    }
  };
  ze.exports = Ve;
});
var q$1;
(function(a) {
  a.Comment = "comment", a.Create = "create", a.Delete = "delete", a.Edit = "edit", a.Invoice = "invoice", a.Message = "message", a.PageView = "pageView", a.Paid = "paid", a.Payment = "payment", a.Purchase = "purchase", a.Referral = "referral", a.Renewal = "renewal", a.Signup = "signup", a.Subscription = "subscription", a.Upgrade = "upgrade";
})(q$1 || (q$1 = {}));
var G$1;
(function(a) {
  a.Business = "business", a.Engineering = "engineering", a.Exception = "exception", a.LogMessage = "log-message", a.Marketing = "marketing", a.PageLeave = "page-leave", a.PageView = "page-view", a.Product = "product", a.QualityManagement = "quality-management", a.UserAccess = "user-access", a.UserLogin = "user-login", a.UserLogout = "user-logout", a.UserSignup = "user-signup", a.UserPreferencesChanged = "user-preferences-changed", a.WebsiteVisit = "website-visit";
})(G$1 || (G$1 = {}));
var w$1;
(function(a) {
  a.CloseTab = "close-tab", a.ExternalLink = "external-link", a.NavigateAway = "navigate-away", a.Unknown = "unknown";
})(w$1 || (w$1 = {}));
var K$1;
(function(a) {
  a.Ecs = "Ecs";
})(K$1 || (K$1 = {}));
var x$1;
(function(a) {
  a.Finished = "Finished", a.Queued = "Queued", a.Running = "Running", a.Started = "Started";
})(x$1 || (x$1 = {}));
var O;
(function(a) {
  a.Mobile = "mobile", a.TV = "tv", a.Watch = "watch", a.Web = "web";
})(O || (O = {}));
var H;
(function(a) {
  a.Development = "Development", a.NonProduction = "NonProduction", a.Production = "Production";
})(H || (H = {}));
var j;
(function(a) {
  a.Completed = "completed", a.Started = "started", a.Uncompleted = "uncompleted";
})(j || (j = {}));
var V$1;
(function(a) {
  a.Build = "Build", a.Deployment = "Deployment", a.Test = "Test";
})(V$1 || (V$1 = {}));
var z$1;
(function(a) {
  a.Canceled = "Canceled", a.Completed = "Completed", a.Failed = "Failed", a.Running = "Running", a.Queued = "Queued", a.Waiting = "Waiting";
})(z$1 || (z$1 = {}));
var W;
(function(a) {
  a.Canceled = "Canceled", a.Completed = "Completed", a.Failed = "Failed", a.Running = "Running", a.Queued = "Queued", a.Waiting = "Waiting";
})(W || (W = {}));
var R$1;
(function(a) {
  a.ForgotPassword = "forgot_password", a.Index = "index", a.Login = "login", a.PageNotFound = "404", a.Signup = "signup", a.VerifyCode = "verify_code";
})(R$1 || (R$1 = {}));
var J$2;
(function(a) {
  a.Info = "info", a.Warning = "warning", a.Error = "error", a.Success = "success";
})(J$2 || (J$2 = {}));
var Z;
(function(a) {
  a.Details = "details", a.Dialog = "dialog";
})(Z || (Z = {}));
var Y;
(function(a) {
  a.Info = "info", a.Warning = "warning", a.Error = "error", a.Success = "success";
})(Y || (Y = {}));
var $$1;
(function(a) {
  a.AccountBalance = "AccountBalance", a.UserAssets = "UserAssets", a.UserCreditCardDebt = "UserCreditCardDebt", a.UserCreditLimit = "UserCreditLimit", a.UserCreditUtilization = "UserCreditUtilization", a.UserDebt = "UserDebt", a.UserInvestments = "UserInvestments", a.UserRetirement = "UserRetirement", a.UserSavings = "UserSavings";
})($$1 || ($$1 = {}));
var Q;
(function(a) {
  a.DateTime = "date_time", a.True = "true", a.False = "false", a.UniqueId = "unique_id";
})(Q || (Q = {}));
var X$1;
(function(a) {
  a.DomainModel = "domain_entity", a.GenericModel = "generic_entity";
})(X$1 || (X$1 = {}));
var C;
(function(a) {
  a.AirportCode = "airport-code", a.BankIDCode = "bank-id-code", a.BitcoinAddress = "bitcoin-address", a.Boolean = "boolean", a.City = "city", a.Color = "color", a.CountryCode = "country-code", a.CreditCard = "credit-card", a.CurrencyAmount = "currency-amount", a.CurrencyCode = "currency-code", a.DataURI = "data-uri", a.Date = "date", a.DateRange = "date-range", a.DateTime = "date-time", a.DayOfMonth = "day-of-month", a.DomainName = "domain-name", a.EmailAddress = "email-address", a.EthereumAddress = "ethereum-address", a.EAN = "european-article-number", a.EIN = "employer-identification-number", a.Float = "float", a.GeographicCoordinate = "geographic-coordinate", a.GeographicCoordinates = "geographic-coordinates", a.GitRepositoryURL = "git-repository-url", a.HSLColor = "hsl-color", a.HexColor = "hex-color", a.Hexadecimal = "hexadecimal", a.IBAN = "international-bank-account-number", a.IMEI = "international-mobile-equipment-identifier", a.IPAddress = "ip-address", a.IPAddressRange = "ip-address-range", a.ISBN = "international-standard-book-number", a.ISIN = "international-stock-number", a.ISMN = "international-standard-music-number", a.ISSN = "international-standard-serial-number", a.ISO8601 = "iso-8601", a.ISO31661Alpha2 = "iso-31661-alpha-2", a.ISO31661Alpha3 = "iso-31661-alpha-3", a.ISO4217 = "iso-4217", a.Image = "image", a.Integer = "integer", a.JSON = "json", a.LanguageCode = "language-code", a.LicensePlateNumber = "license-plate-number", a.LongText = "long-text", a.MD5 = "md5", a.Markdown = "markdown", a.Menu = "menu", a.Number = "number", a.MACAddress = "mac-address", a.MagnetURI = "magnet-uri", a.MimeType = "mime-type", a.Month = "month", a.Password = "password", a.PassportNumber = "passport-number", a.Percent = "percent", a.PhoneNumber = "phone-number", a.Port = "port", a.PostalCode = "postal-code", a.Province = "province", a.RFC3339 = "rfc-3339", a.RGBColor = "rgb-color", a.SemanticVersion = "semantic-version", a.SSN = "social-security-number", a.State = "state", a.StreetAddress = "street-address", a.String = "string", a.Tags = "tags", a.TaxIDNumber = "tax-id-number", a.Time = "time", a.TimeOfDay = "time-of-day", a.TimeRange = "time-range", a.TimezoneRegion = "timezone-region", a.URL = "url", a.URLPath = "url-path", a.UUID = "uuid", a.VATIDNumber = "value-added-tax-id-number", a.VerificationCode = "verification-code", a.Video = "video", a.Weekday = "weekday", a.Year = "year";
})(C || (C = {}));
var aa;
(function(a) {
  a.Critical = "Critical", a.Error = "Error", a.Fatal = "Fatal", a.Warning = "Warning";
})(aa || (aa = {}));
var i$1;
(function(a) {
  a.Contains = "contains", a.HasCharacterCount = "has-character-count", a.HasNumberCount = "has-number-count", a.HasLetterCount = "has-letter-count", a.HasLowercaseCount = "has-lowercase-count", a.HasSpacesCount = "has-spaces-count", a.HasSymbolCount = "has-symbol-count", a.HasUppercaseCount = "has-uppercase-count", a.IsAfter = "is-after", a.IsAfterOrEqual = "is-after-or-equal", a.IsAirport = "is-airport", a.IsAlpha = "is-alpha", a.IsAlphanumeric = "is-alphanumeric", a.IsAlgorithmHash = "is-algorithm-hash", a.IsAscii = "is-ascii", a.IsBase64 = "is-base-64", a.IsBefore = "is-before", a.IsBeforeOrAfter = "is-before-or-after", a.IsBeforeOrEqual = "is-before-or-equal", a.IsBetween = "is-between", a.IsBIC = "is-bic", a.IsBitcoinAddress = "is-bitcoin-address", a.IsBoolean = "is-boolean", a.IsColor = "is-color", a.IsComplexEnough = "is-complex-enough", a.IsCountry = "is-country", a.IsCreditCard = "is-credit-card", a.IsCurrency = "is-currency", a.IsDataURI = "is-data-uri", a.IsDate = "is-date", a.IsDateRange = "is-date-range", a.IsDateTime = "is-date-time", a.IsDayOfMonth = "is-day-of-month", a.IsDecimal = "is-decimal", a.IsDivisibleBy = "is-divisible-by", a.IsDomainName = "is-domain-name", a.IsEmailAddress = "is-email-address", a.IsEthereumAddress = "is-ethereum-address", a.IsEAN = "is-ean", a.IsEIN = "is-ein", a.IsEqual = "is-equal", a.IsEvenNumber = "is-even-number", a.IsFloat = "is-float", a.IsIBAN = "is-iban", a.IsGreaterThan = "greater-than", a.IsGreaterThanOrEqual = "greater-than-or-equal", a.IsHSLColor = "is-hsl-color", a.IsHexColor = "is-hex-color", a.IsHexadecimal = "is-hexadecimal", a.IsIdentityCardCode = "is-identity-card-code", a.IsIMEI = "is-imei", a.IsInIPAddressRange = "is-in-ip-address-range", a.IsInList = "is-in-list", a.IsInTheLast = "is-in-the-last", a.IsInteger = "is-integer", a.IsIPAddress = "is-ip-address", a.IsIPAddressRange = "is-ip-address-range", a.IsISBN = "is-isbn", a.IsISIN = "is-isin", a.IsISMN = "is-ismn", a.IsISRC = "is-isrc", a.IsISSN = "is-issn", a.IsISO4217 = "is-iso-4217", a.IsISO8601 = "is-iso-8601", a.IsISO31661Alpha2 = "is-iso-31661-alpha-2", a.IsISO31661Alpha3 = "is-iso-31661-alpha-3", a.IsJSON = "is-json", a.IsLanguage = "is-language", a.IsLatitude = "is-latitude", a.IsLongitude = "is-longitude", a.IsLengthEqual = "is-length-equal", a.IsLengthGreaterThan = "is-length-greater-than", a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", a.IsLengthLessThan = "is-length-less-than", a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", a.IsLessThan = "less-than", a.IsLessThanOrEqual = "less-than-or-equal", a.IsLicensePlateNumber = "is-license-plate-number", a.IsLowercase = "is-lowercase", a.IsOctal = "is-octal", a.IsMACAddress = "is-mac-address", a.IsMD5 = "is-md5", a.IsMagnetURI = "is-magnet-uri", a.IsMarkdown = "is-markdown", a.IsMimeType = "is-mime-type", a.IsMonth = "is-month", a.IsNegativeNumber = "is-negative-number", a.IsNotDate = "is-not-date", a.IsNotEqual = "is-not-equal", a.IsNotInIPAddressRange = "is-not-in-ip-address-range", a.IsNotInList = "is-not-in-list", a.IsNotNull = "is-not-null", a.IsNotRegexMatch = "is-not-regex-match", a.IsNotToday = "is-not-today", a.IsNumber = "is-number", a.IsNumeric = "is-numeric", a.IsOddNumber = "is-odd-number", a.IsPassportNumber = "is-passport-number", a.IsPhoneNumber = "is-phone-number", a.IsPort = "is-port", a.IsPositiveNumber = "is-positive-number", a.IsPostalCode = "is-postal-code", a.IsProvince = "is-province", a.IsRGBColor = "is-rgb-color", a.IsRegexMatch = "is-regex-match", a.IsRequired = "is-required", a.IsSemanticVersion = "is-semantic-version", a.IsSlug = "is-slug", a.IsSSN = "is-ssn", a.IsState = "is-state", a.IsStreetAddress = "is-street-address", a.IsString = "is-string", a.IsStrongPassword = "is-strong-password", a.IsTags = "is-tags", a.IsTaxIDNumber = "is-tax-id-number", a.IsThisMonth = "is-this-month", a.IsThisQuarter = "is-this-quarter", a.IsThisWeek = "is-this-week", a.IsThisWeekend = "is-this-weekend", a.IsThisYear = "is-this-year", a.IsTime = "is-time", a.IsTimeOfDay = "is-time-of-day", a.IsTimeRange = "is-time-range", a.IsToday = "is-today", a.IsURL = "is-url", a.IsUUID = "is-uuid", a.IsUppercase = "is-uppercase", a.IsUsernameAvailable = "is-username-available", a.IsValidStreetAddress = "is-valid-street-address", a.IsVATIDNumber = "is-vat-id-number", a.IsWeekday = "is-weekday", a.IsWeekend = "is-weekend", a.IsYear = "is-year";
})(i$1 || (i$1 = {}));
var ea;
(function(a) {
  a.IsAuthenticated = "is-authenticated", a.IsNotAuthenticated = "is-not-authenticated", a.IsUsernameAvailable = "is-username-available", a.PasswordMismatch = "password-mismatch";
})(ea || (ea = {}));
var ia;
(function(a) {
  a[a.IsHSLColor = i$1.IsHSLColor] = "IsHSLColor", a[a.IsHexColor = i$1.IsHexColor] = "IsHexColor", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsRGBColor = i$1.IsRGBColor] = "IsRGBColor", a[a.IsString = i$1.IsString] = "IsString";
})(ia || (ia = {}));
var na;
(function(a) {
  a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsCurrency = i$1.IsCurrency] = "IsCurrency", a[a.IsDecimal = i$1.IsDecimal] = "IsDecimal", a[a.IsDivisibleBy = i$1.IsDivisibleBy] = "IsDivisibleBy", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsFloat = i$1.IsFloat] = "IsFloat", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsISO8601 = i$1.IsISO8601] = "IsISO8601", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNegativeNumber = i$1.IsNegativeNumber] = "IsNegativeNumber", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsPositiveNumber = i$1.IsPositiveNumber] = "IsPositiveNumber";
})(na || (na = {}));
var sa;
(function(a) {
  a[a.IsBitcoinAddress = i$1.IsBitcoinAddress] = "IsBitcoinAddress", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(sa || (sa = {}));
var ua;
(function(a) {
  a[a.IsEthereumAddress = i$1.IsEthereumAddress] = "IsEthereumAddress", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(ua || (ua = {}));
var ra;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsJSON = i$1.IsJSON] = "IsJSON", a[a.IsLanguage = i$1.IsLanguage] = "IsLanguage", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(ra || (ra = {}));
var ta;
(function(a) {
  a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ta || (ta = {}));
var la;
(function(a) {
  a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsCountry = i$1.IsCountry] = "IsCountry", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(la || (la = {}));
var ma;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsFloat = i$1.IsFloat] = "IsFloat", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric";
})(ma || (ma = {}));
var oa;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsFloat = i$1.IsFloat] = "IsFloat", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric";
})(oa || (oa = {}));
var ca;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsPostalCode = i$1.IsPostalCode] = "IsPostalCode", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(ca || (ca = {}));
var Aa;
(function(a) {
  a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsProvince = i$1.IsProvince] = "IsProvince", a[a.IsString = i$1.IsString] = "IsString";
})(Aa || (Aa = {}));
var da;
(function(a) {
  a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsState = i$1.IsState] = "IsState", a[a.IsString = i$1.IsString] = "IsString";
})(da || (da = {}));
var Ia;
(function(a) {
  a[a.IsAlphanumeric = i$1.IsAlphanumeric] = "IsAlphanumeric", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsStreetAddress = i$1.IsStreetAddress] = "IsStreetAddress";
})(Ia || (Ia = {}));
var ha;
(function(a) {
  a[a.IsAirport = i$1.IsAirport] = "IsAirport", a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ha || (ha = {}));
var ga;
(function(a) {
  a[a.IsAlgorithmHash = i$1.IsAlgorithmHash] = "IsAlgorithmHash", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ga || (ga = {}));
var fa;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsSemanticVersion = i$1.IsSemanticVersion] = "IsSemanticVersion", a[a.IsString = i$1.IsString] = "IsString";
})(fa || (fa = {}));
var _a;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsUUID = i$1.IsUUID] = "IsUUID";
})(_a || (_a = {}));
var Ea;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsMD5 = i$1.IsMD5] = "IsMD5", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Ea || (Ea = {}));
var Sa;
(function(a) {
  a[a.IsBoolean = i$1.IsBoolean] = "IsBoolean", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(Sa || (Sa = {}));
var Ta;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsDate = i$1.IsDate] = "IsDate", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotDate = i$1.IsNotDate] = "IsNotDate", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotToday = i$1.IsNotToday] = "IsNotToday", a[a.IsThisWeek = i$1.IsThisWeek] = "IsThisWeek", a[a.IsThisMonth = i$1.IsThisMonth] = "IsThisMonth", a[a.IsThisQuarter = i$1.IsThisQuarter] = "IsThisQuarter", a[a.IsThisYear = i$1.IsThisYear] = "IsThisYear", a[a.IsToday = i$1.IsToday] = "IsToday", a[a.IsWeekend = i$1.IsWeekend] = "IsWeekend";
})(Ta || (Ta = {}));
var pa;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrAfter = i$1.IsBeforeOrAfter] = "IsBeforeOrAfter", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsDate = i$1.IsDate] = "IsDate", a[a.IsDateRange = i$1.IsDateRange] = "IsDateRange", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(pa || (pa = {}));
var ba;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsDate = i$1.IsDate] = "IsDate", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotDate = i$1.IsNotDate] = "IsNotDate", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotToday = i$1.IsNotToday] = "IsNotToday", a[a.IsThisWeek = i$1.IsThisWeek] = "IsThisWeek", a[a.IsThisMonth = i$1.IsThisMonth] = "IsThisMonth", a[a.IsThisQuarter = i$1.IsThisQuarter] = "IsThisQuarter", a[a.IsThisYear = i$1.IsThisYear] = "IsThisYear", a[a.IsToday = i$1.IsToday] = "IsToday", a[a.IsWeekend = i$1.IsWeekend] = "IsWeekend";
})(ba || (ba = {}));
var va;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsDayOfMonth = i$1.IsDayOfMonth] = "IsDayOfMonth", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsToday = i$1.IsToday] = "IsToday", a[a.IsWeekday = i$1.IsWeekday] = "IsWeekday", a[a.IsWeekend = i$1.IsWeekend] = "IsWeekend";
})(va || (va = {}));
var Ba;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsMonth = i$1.IsMonth] = "IsMonth", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsThisMonth = i$1.IsThisMonth] = "IsThisMonth";
})(Ba || (Ba = {}));
var Na;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsTime = i$1.IsTime] = "IsTime";
})(Na || (Na = {}));
var Ua;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrAfter = i$1.IsBeforeOrAfter] = "IsBeforeOrAfter", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsTime = i$1.IsTime] = "IsTime", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsTimeRange = i$1.IsTimeRange] = "IsTimeRange";
})(Ua || (Ua = {}));
var Da;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrAfter = i$1.IsBeforeOrAfter] = "IsBeforeOrAfter", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsTimeOfDay = i$1.IsTimeOfDay] = "IsTimeOfDay", a[a.IsTimeRange = i$1.IsTimeRange] = "IsTimeRange";
})(Da || (Da = {}));
var Pa;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsWeekday = i$1.IsWeekday] = "IsWeekday", a[a.IsWeekend = i$1.IsWeekend] = "IsWeekend";
})(Pa || (Pa = {}));
var ka;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsThisYear = i$1.IsThisYear] = "IsThisYear", a[a.IsYear = i$1.IsYear] = "IsYear";
})(ka || (ka = {}));
var Ma;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsHexadecimal = i$1.IsHexadecimal] = "IsHexadecimal", a[a.IsLengthEqual = i$1.IsLengthEqual] = "IsLengthEqual", a[a.IsLengthGreaterThan = i$1.IsLengthGreaterThan] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = i$1.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = i$1.IsLengthLessThan] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = i$1.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Ma || (Ma = {}));
var ya;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsJSON = i$1.IsJSON] = "IsJSON", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(ya || (ya = {}));
var Fa;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsMarkdown = i$1.IsMarkdown] = "IsMarkdown", a[a.IsString = i$1.IsString] = "IsString";
})(Fa || (Fa = {}));
var La;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(La || (La = {}));
var qa;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(qa || (qa = {}));
var Ga;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsDataURI = i$1.IsDataURI] = "IsDataURI", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Ga || (Ga = {}));
var wa;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsDomainName = i$1.IsDomainName] = "IsDomainName", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(wa || (wa = {}));
var Ka;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEmailAddress = i$1.IsEmailAddress] = "IsEmailAddress", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Ka || (Ka = {}));
var xa;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsIPAddress = i$1.IsIPAddress] = "IsIPAddress", a[a.IsInIPAddressRange = i$1.IsInIPAddressRange] = "IsInIPAddressRange", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotInIPAddressRange = i$1.IsNotInIPAddressRange] = "IsNotInIPAddressRange", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(xa || (xa = {}));
var Oa;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsIPAddressRange = i$1.IsIPAddressRange] = "IsIPAddressRange", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotInIPAddressRange = i$1.IsNotInIPAddressRange] = "IsNotInIPAddressRange", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Oa || (Oa = {}));
var Ha;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull";
})(Ha || (Ha = {}));
var ja;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsMACAddress = i$1.IsMACAddress] = "IsMACAddress", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ja || (ja = {}));
var Va;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsMagnetURI = i$1.IsMagnetURI] = "IsMagnetURI", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(Va || (Va = {}));
var za;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsMimeType = i$1.IsMimeType] = "IsMimeType", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(za || (za = {}));
var Wa;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsSlug = i$1.IsSlug] = "IsSlug";
})(Wa || (Wa = {}));
var Ra;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsURL = i$1.IsURL] = "IsURL";
})(Ra || (Ra = {}));
var Ja;
(function(a) {
  a[a.IsAfter = i$1.IsAfter] = "IsAfter", a[a.IsAfterOrEqual = i$1.IsAfterOrEqual] = "IsAfterOrEqual", a[a.IsBefore = i$1.IsBefore] = "IsBefore", a[a.IsBeforeOrEqual = i$1.IsBeforeOrEqual] = "IsBeforeOrEqual", a[a.IsBetween = i$1.IsBetween] = "IsBetween", a[a.IsDecimal = i$1.IsDecimal] = "IsDecimal", a[a.IsDivisibleBy = i$1.IsDivisibleBy] = "IsDivisibleBy", a[a.IsEAN = i$1.IsEAN] = "IsEAN", a[a.IsEIN = i$1.IsEIN] = "IsEIN", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsEvenNumber = i$1.IsEvenNumber] = "IsEvenNumber", a[a.IsFloat = i$1.IsFloat] = "IsFloat", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsInt = i$1.IsInteger] = "IsInt", a[a.IsISBN = i$1.IsISBN] = "IsISBN", a[a.IsISMN = i$1.IsISMN] = "IsISMN", a[a.IsISSN = i$1.IsISSN] = "IsISSN", a[a.IsLatitude = i$1.IsLatitude] = "IsLatitude", a[a.IsLongitude = i$1.IsLongitude] = "IsLongitude", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsMACAddress = i$1.IsMACAddress] = "IsMACAddress", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsNegativeNumber = i$1.IsNegativeNumber] = "IsNegativeNumber", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsOddNumber = i$1.IsOddNumber] = "IsOddNumber", a[a.IsPassportNumber = i$1.IsPassportNumber] = "IsPassportNumber", a[a.IsPhoneNumber = i$1.IsPhoneNumber] = "IsPhoneNumber", a[a.IsPort = i$1.IsPort] = "IsPort", a[a.IsPositiveNumber = i$1.IsPositiveNumber] = "IsPositiveNumber", a[a.IsPostalCode = i$1.IsPostalCode] = "IsPostalCode", a[a.IsSemanticVersion = i$1.IsSemanticVersion] = "IsSemanticVersion", a[a.IsSSN = i$1.IsSSN] = "IsSSN", a[a.IsTaxIDNumber = i$1.IsTaxIDNumber] = "IsTaxIDNumber", a[a.IsUUID = i$1.IsUUID] = "IsUUID", a[a.IsVATIDNumber = i$1.IsVATIDNumber] = "IsVATIDNumber";
})(Ja || (Ja = {}));
var Za;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsFloat = i$1.IsFloat] = "IsFloat", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric";
})(Za || (Za = {}));
var Ya;
(function(a) {
  a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInteger = i$1.IsInteger] = "IsInteger", a[a.IsGreaterThan = i$1.IsGreaterThan] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = i$1.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual", a[a.IsLessThan = i$1.IsLessThan] = "IsLessThan", a[a.IsLessThanOrEqual = i$1.IsLessThanOrEqual] = "IsLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric";
})(Ya || (Ya = {}));
var $a;
(function(a) {
  a[a.IsCreditCard = i$1.IsCreditCard] = "IsCreditCard", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsLengthEqual = i$1.IsLengthEqual] = "IsLengthEqual", a[a.IsLengthGreaterThan = i$1.IsLengthGreaterThan] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = i$1.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = i$1.IsLengthLessThan] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = i$1.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch";
})($a || ($a = {}));
var Qa;
(function(a) {
  a[a.isEmailAddress = i$1.IsEmailAddress] = "isEmailAddress", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsLengthEqual = i$1.IsLengthEqual] = "IsLengthEqual", a[a.IsLengthGreaterThan = i$1.IsLengthGreaterThan] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = i$1.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = i$1.IsLengthLessThan] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = i$1.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch";
})(Qa || (Qa = {}));
var Xa;
(function(a) {
  a[a.IsLicensePlateNumber = i$1.IsLicensePlateNumber] = "IsLicensePlateNumber", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch", a[a.IsString = i$1.IsString] = "IsString", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch";
})(Xa || (Xa = {}));
var Ca;
(function(a) {
  a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsPassportNumber = i$1.IsPassportNumber] = "IsPassportNumber", a[a.IsString = i$1.IsString] = "IsString", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch";
})(Ca || (Ca = {}));
var ae;
(function(a) {
  a[a.IsComplexEnough = i$1.IsComplexEnough] = "IsComplexEnough", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch", a[a.IsLengthGreaterThan = i$1.IsLengthGreaterThan] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = i$1.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = i$1.IsLengthLessThan] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = i$1.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual", a[a.IsStrongPassword = i$1.IsStrongPassword] = "IsStrongPassword", a[a.IsString = i$1.IsString] = "IsString", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch";
})(ae || (ae = {}));
var ee;
(function(a) {
  a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsPhoneNumber = i$1.IsPhoneNumber] = "IsPhoneNumber", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch";
})(ee || (ee = {}));
var ie;
(function(a) {
  a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsSSN = i$1.IsSSN] = "IsSSN", a[a.IsString = i$1.IsString] = "IsString", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch";
})(ie || (ie = {}));
var ne;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsBIC = i$1.IsBIC] = "IsBIC", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ne || (ne = {}));
var se;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEAN = i$1.IsEAN] = "IsEAN", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(se || (se = {}));
var ue;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEIN = i$1.IsEIN] = "IsEIN", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(ue || (ue = {}));
var re;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsIBAN = i$1.IsIBAN] = "IsIBAN", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(re || (re = {}));
var te;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsISBN = i$1.IsISBN] = "IsISBN", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(te || (te = {}));
var le;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsISIN = i$1.IsISIN] = "IsISIN", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(le || (le = {}));
var me;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsISMN = i$1.IsISMN] = "IsISMN", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(me || (me = {}));
var oe;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsISSN = i$1.IsISSN] = "IsISSN", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString";
})(oe || (oe = {}));
var ce;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsTaxIDNumber = i$1.IsTaxIDNumber] = "IsTaxIDNumber";
})(ce || (ce = {}));
var Ae;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsNotEqual = i$1.IsNotEqual] = "IsNotEqual", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsString = i$1.IsString] = "IsString", a[a.IsVATIDNumber = i$1.IsVATIDNumber] = "IsVATIDNumber";
})(Ae || (Ae = {}));
var de;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.HasNumberCount = i$1.HasNumberCount] = "HasNumberCount", a[a.HasLowercaseCount = i$1.HasLowercaseCount] = "HasLowercaseCount", a[a.HasLetterCount = i$1.HasLetterCount] = "HasLetterCount", a[a.HasSpacesCount = i$1.HasSpacesCount] = "HasSpacesCount", a[a.HasSymbolCount = i$1.HasSymbolCount] = "HasSymbolCount", a[a.HasUppercaseCount = i$1.HasUppercaseCount] = "HasUppercaseCount", a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsAlphanumeric = i$1.IsAlphanumeric] = "IsAlphanumeric", a[a.IsAscii = i$1.IsAscii] = "IsAscii", a[a.IsBase64 = i$1.IsBase64] = "IsBase64", a[a.IsColor = i$1.IsColor] = "IsColor", a[a.IsComplexEnough = i$1.IsComplexEnough] = "IsComplexEnough", a[a.IsCreditCard = i$1.IsCreditCard] = "IsCreditCard", a[a.IsDataURI = i$1.IsDataURI] = "IsDataURI", a[a.IsDomainName = i$1.IsDomainName] = "IsDomainName", a[a.IsEmailAddress = i$1.IsEmailAddress] = "IsEmailAddress", a[a.IsEthereumAddress = i$1.IsEthereumAddress] = "IsEthereumAddress", a[a.IsEAN = i$1.IsEAN] = "IsEAN", a[a.IsEIN = i$1.IsEIN] = "IsEIN", a[a.IsEqual = i$1.IsEqual] = "IsEqual", a[a.IsIBAN = i$1.IsIBAN] = "IsIBAN", a[a.IsHSLColor = i$1.IsHSLColor] = "IsHSLColor", a[a.IsHexColor = i$1.IsHexColor] = "IsHexColor", a[a.IsHexadecimal = i$1.IsHexadecimal] = "IsHexadecimal", a[a.IsIdentityCardCode = i$1.IsIdentityCardCode] = "IsIdentityCardCode", a[a.IsIMEI = i$1.IsIMEI] = "IsIMEI", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsIPAddress = i$1.IsIPAddress] = "IsIPAddress", a[a.IsInIPAddressRange = i$1.IsInIPAddressRange] = "IsInIPAddressRange", a[a.IsISBN = i$1.IsISBN] = "IsISBN", a[a.IsISIN = i$1.IsISIN] = "IsISIN", a[a.IsISMN = i$1.IsISMN] = "IsISMN", a[a.IsISRC = i$1.IsISRC] = "IsISRC", a[a.IsISSN = i$1.IsISSN] = "IsISSN", a[a.IsLanguage = i$1.IsLanguage] = "IsLanguage", a[a.IsLatitude = i$1.IsLatitude] = "IsLatitude", a[a.IsLongitude = i$1.IsLongitude] = "IsLongitude", a[a.IsLengthEqual = i$1.IsLengthEqual] = "IsLengthEqual", a[a.IsLengthGreaterThan = i$1.IsLengthGreaterThan] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = i$1.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = i$1.IsLengthLessThan] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = i$1.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual", a[a.IsLicensePlateNumber = i$1.IsLicensePlateNumber] = "IsLicensePlateNumber", a[a.IsLowercase = i$1.IsLowercase] = "IsLowercase", a[a.IsOctal = i$1.IsOctal] = "IsOctal", a[a.IsMACAddress = i$1.IsMACAddress] = "IsMACAddress", a[a.IsMD5 = i$1.IsMD5] = "IsMD5", a[a.IsMagnetURI = i$1.IsMagnetURI] = "IsMagnetURI", a[a.IsMarkdown = i$1.IsMarkdown] = "IsMarkdown", a[a.IsMimeType = i$1.IsMimeType] = "IsMimeType", a[a.IsMonth = i$1.IsMonth] = "IsMonth", a[a.IsNotInIPAddressRange = i$1.IsNotInIPAddressRange] = "IsNotInIPAddressRange", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNotNull = i$1.IsNotNull] = "IsNotNull", a[a.IsNotRegexMatch = i$1.IsNotRegexMatch] = "IsNotRegexMatch", a[a.IsNumber = i$1.IsNumber] = "IsNumber", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric", a[a.IsPassportNumber = i$1.IsPassportNumber] = "IsPassportNumber", a[a.IsPhoneNumber = i$1.IsPhoneNumber] = "IsPhoneNumber", a[a.IsPort = i$1.IsPort] = "IsPort", a[a.IsPostalCode = i$1.IsPostalCode] = "IsPostalCode", a[a.IsProvince = i$1.IsProvince] = "IsProvince", a[a.IsRegexMatch = i$1.IsRegexMatch] = "IsRegexMatch", a[a.IsSemanticVersion = i$1.IsSemanticVersion] = "IsSemanticVersion", a[a.IsSlug = i$1.IsSlug] = "IsSlug", a[a.IsSSN = i$1.IsSSN] = "IsSSN", a[a.IsState = i$1.IsState] = "IsState", a[a.IsStreetAddress = i$1.IsStreetAddress] = "IsStreetAddress", a[a.IsString = i$1.IsString] = "IsString", a[a.IsTaxIDNumber = i$1.IsTaxIDNumber] = "IsTaxIDNumber", a[a.IsURL = i$1.IsURL] = "IsURL", a[a.IsUUID = i$1.IsUUID] = "IsUUID", a[a.IsUppercase = i$1.IsUppercase] = "IsUppercase", a[a.IsVATIDNumber = i$1.IsVATIDNumber] = "IsVATIDNumber", a[a.IsWeekday = i$1.IsWeekday] = "IsWeekday", a[a.IsWeekend = i$1.IsWeekend] = "IsWeekend", a[a.IsYear = i$1.IsYear] = "IsYear";
})(de || (de = {}));
var Ie;
(function(a) {
  a[a.Contains = i$1.Contains] = "Contains", a[a.IsAlpha = i$1.IsAlpha] = "IsAlpha", a[a.IsAlphanumeric = i$1.IsAlphanumeric] = "IsAlphanumeric", a[a.IsInList = i$1.IsInList] = "IsInList", a[a.IsMarkdown = i$1.IsMarkdown] = "IsMarkdown", a[a.IsNotInList = i$1.IsNotInList] = "IsNotInList", a[a.IsNumeric = i$1.IsNumeric] = "IsNumeric", a[a.IsLowercase = i$1.IsLowercase] = "IsLowercase", a[a.IsString = i$1.IsString] = "IsString", a[a.IsUppercase = i$1.IsUppercase] = "IsUppercase";
})(Ie || (Ie = {}));
var he;
(function(a) {
  a.InvalidCharacters = "invalid-characters", a.InvalidPattern = "invalid-pattern", a.NotComplexEnough = "not-complex-enough", a.NotUnique = "not-unique", a.NotValidEmail = "not-valid-email", a.TooLong = "too-long", a.TooShort = "too-short", a.Required = "required";
})(he || (he = {}));
var ge;
(function(a) {
  a[a.Allowed = 0] = "Allowed", a[a.Blocked = 1] = "Blocked";
})(ge || (ge = {}));
var fe;
(function(a) {
  a.Canceled = "Canceled", a.Completed = "Completed", a.Created = "Created", a.Faulted = "Faulted", a.Queued = "Queued", a.Running = "Running", a.Waiting = "Waiting";
})(fe || (fe = {}));
var _e;
(function(a) {
  a.Archived = "ARCHIVED", a.Compromised = "COMPROMISED", a.Confirmed = "CONFIRMED", a.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", a.ResetRequired = "RESET_REQUIRED", a.Unconfirmed = "UNCONFIRMED", a.Unknown = "UNKNOWN";
})(_e || (_e = {}));
var Ee;
(function(a) {
  a.Code = "code", a.Link = "link";
})(Ee || (Ee = {}));
var Se;
(function(a) {
  a.Owner = "Owner", a.Admin = "Admin", a.User = "User", a.Visitor = "Visitor";
})(Se || (Se = {}));
var Te;
(function(a) {
  a.RequiresPaymentMethod = "requires_payment_method", a.RequiresConfirmation = "requires_confirmation", a.RequiresAction = "requires_action", a.Processing = "processing", a.RequiresCapture = "requires_capture", a.Canceled = "canceled", a.Succeeded = "succeeded";
})(Te || (Te = {}));
var pe;
(function(a) {
  a.Incomplete = "incomplete", a.IncompleteExpired = "incomplete_expired", a.Trialing = "trialing", a.Active = "active", a.PastDue = "past_due", a.Canceled = "canceled", a.Unpaid = "unpaid";
})(pe || (pe = {}));
var be;
(function(a) {
  a.Monthly = "monthly", a.Quarterly = "quarterly", a.Yearly = "yearly", a.Lifetime = "lifetime";
})(be || (be = {}));
var ve;
(function(a) {
  a.Delivered = "delivered", a.Read = "read", a.Sending = "sending", a.Sent = "sent";
})(ve || (ve = {}));
var Be;
(function(a) {
  a.Audio = "audio", a.File = "file", a.Image = "image", a.Text = "text", a.Video = "video";
})(Be || (Be = {}));
var Ne;
(function(a) {
  a.Audio = "audio", a.File = "file", a.Image = "image", a.Video = "video";
})(Ne || (Ne = {}));
var Ue;
(function(a) {
  a.Angry = "angry", a.Laugh = "laugh", a.Like = "like", a.Love = "love", a.Sad = "sad", a.Wow = "wow", a.Wink = "wink", a.Yay = "yay";
})(Ue || (Ue = {}));
var De;
(function(a) {
  a.Email = "email", a.PhoneNumber = "phone_number";
})(De || (De = {}));
var v$1;
(function(a) {
  a.Analytics = "analytics", a.Critical = "critical", a.Debug = "debug", a.Exception = "exception", a.Http = "http", a.Info = "info", a.Warning = "warning";
})(v$1 || (v$1 = {}));
var Pe;
(function(a) {
  a.Delete = "delete", a.Get = "get", a.Head = "head", a.Patch = "patch", a.Post = "post", a.Put = "put";
})(Pe || (Pe = {}));
var ke;
(function(a) {
  a[a.CONTINUE = 100] = "CONTINUE", a[a.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", a[a.PROCESSING = 102] = "PROCESSING", a[a.OK = 200] = "OK", a[a.CREATED = 201] = "CREATED", a[a.ACCEPTED = 202] = "ACCEPTED", a[a.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", a[a.NO_CONTENT = 204] = "NO_CONTENT", a[a.RESET_CONTENT = 205] = "RESET_CONTENT", a[a.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", a[a.MULTI_STATUS = 207] = "MULTI_STATUS", a[a.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", a[a.IM_USED = 226] = "IM_USED", a[a.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", a[a.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", a[a.FOUND = 302] = "FOUND", a[a.SEE_OTHER = 303] = "SEE_OTHER", a[a.NOT_MODIFIED = 304] = "NOT_MODIFIED", a[a.USE_PROXY = 305] = "USE_PROXY", a[a.SWITCH_PROXY = 306] = "SWITCH_PROXY", a[a.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", a[a.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", a[a.BAD_REQUEST = 400] = "BAD_REQUEST", a[a.UNAUTHORIZED = 401] = "UNAUTHORIZED", a[a.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", a[a.FORBIDDEN = 403] = "FORBIDDEN", a[a.NOT_FOUND = 404] = "NOT_FOUND", a[a.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", a[a.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", a[a.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", a[a.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", a[a.CONFLICT = 409] = "CONFLICT", a[a.GONE = 410] = "GONE", a[a.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", a[a.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", a[a.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", a[a.URI_TOO_LONG = 414] = "URI_TOO_LONG", a[a.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", a[a.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", a[a.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", a[a.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", a[a.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", a[a.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", a[a.LOCKED = 423] = "LOCKED", a[a.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", a[a.TOO_EARLY = 425] = "TOO_EARLY", a[a.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", a[a.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", a[a.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", a[a.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", a[a.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", a[a.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", a[a.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", a[a.BAD_GATEWAY = 502] = "BAD_GATEWAY", a[a.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", a[a.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", a[a.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", a[a.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", a[a.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", a[a.LOOP_DETECTED = 508] = "LOOP_DETECTED", a[a.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", a[a.NOT_EXTENDED = 510] = "NOT_EXTENDED", a[a.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(ke || (ke = {}));
var r$1;
(function(a) {
  a.Afghanistan = "AF", a.Albania = "AL", a.Algeria = "DZ", a.AmericanSamoa = "AS", a.Andorra = "AD", a.Angola = "AO", a.Anguilla = "AI", a.Antarctica = "AQ", a.AntiguaAndBarbuda = "AG", a.Argentina = "AR", a.Armenia = "AM", a.Aruba = "AW", a.Australia = "AU", a.Austria = "AT", a.Azerbaijan = "AZ", a.Bahamas = "BS", a.Bahrain = "BH", a.Bangladesh = "BD", a.Barbados = "BB", a.Belarus = "BY", a.Belgium = "BE", a.Belize = "BZ", a.Benin = "BJ", a.Bermuda = "BM", a.Bhutan = "BT", a.Bolivia = "BO", a.BosniaAndHerzegovina = "BA", a.Botswana = "BW", a.BouvetIsland = "BV", a.Brazil = "BR", a.BritishIndianOceanTerritory = "IO", a.Brunei = "BN", a.Bulgaria = "BG", a.BurkinaFaso = "BF", a.Burundi = "BI", a.Cambodia = "KH", a.Cameroon = "CM", a.Canada = "CA", a.CapeVerde = "CV", a.CaymanIslands = "KY", a.CentralAfricanRepublic = "CF", a.Chad = "TD", a.Chile = "CL", a.China = "CN", a.ChristmasIsland = "CX", a.CocosKeelingIslands = "CC", a.Colombia = "CO", a.Comoros = "KM", a.Congo = "CG", a.CongoTheDemocraticRepublicOfThe = "CD", a.CookIslands = "CK", a.CostaRica = "CR", a.CoteDIvoire = "CI", a.Croatia = "HR", a.Cuba = "CU", a.Cyprus = "CY", a.CzechRepublic = "CZ", a.Denmark = "DK", a.Djibouti = "DJ", a.Dominica = "DM", a.DominicanRepublic = "DO", a.Ecuador = "EC", a.Egypt = "EG", a.ElSalvador = "SV", a.EquatorialGuinea = "GQ", a.Eritrea = "ER", a.Estonia = "EE", a.Ethiopia = "ET", a.FalklandIslands = "FK", a.FaroeIslands = "FO", a.Fiji = "FJ", a.Finland = "FI", a.France = "FR", a.FrenchGuiana = "GF", a.FrenchPolynesia = "PF", a.FrenchSouthernTerritories = "TF", a.Gabon = "GA", a.Gambia = "GM", a.Georgia = "GE", a.Germany = "DE", a.Ghana = "GH", a.Gibraltar = "GI", a.Greece = "GR", a.Greenland = "GL", a.Grenada = "GD", a.Guadeloupe = "GP", a.Guam = "GU", a.Guatemala = "GT", a.Guernsey = "GG", a.Guinea = "GN", a.GuineaBissau = "GW", a.Guyana = "GY", a.Haiti = "HT", a.HeardIslandMcdonaldIslands = "HM", a.HolySeeVaticanCityState = "VA", a.Honduras = "HN", a.HongKong = "HK", a.Hungary = "HU", a.Iceland = "IS", a.India = "IN", a.Indonesia = "ID", a.Iran = "IR", a.Iraq = "IQ", a.Ireland = "IE", a.IsleOfMan = "IM", a.Israel = "IL", a.Italy = "IT", a.Jamaica = "JM", a.Japan = "JP", a.Jersey = "JE", a.Jordan = "JO", a.Kazakhstan = "KZ", a.Kenya = "KE", a.Kiribati = "KI", a.Kuwait = "KW", a.Kyrgyzstan = "KG", a.Laos = "LA", a.Latvia = "LV", a.Lebanon = "LB", a.Lesotho = "LS", a.Liberia = "LR", a.Libya = "LY", a.Liechtenstein = "LI", a.Lithuania = "LT", a.Luxembourg = "LU", a.Macau = "MO", a.Madagascar = "MG", a.Malawi = "MW", a.Malaysia = "MY", a.Maldives = "MV", a.Mali = "ML", a.Malta = "MT", a.MarshallIslands = "MH", a.Martinique = "MQ", a.Mauritania = "MR", a.Mauritius = "MU", a.Mayotte = "YT", a.Mexico = "MX", a.MicronesiaFederatedStatesOf = "FM", a.Moldova = "MD", a.Monaco = "MC", a.Mongolia = "MN", a.Montenegro = "ME", a.Montserrat = "MS", a.Morocco = "MA", a.Mozambique = "MZ", a.Myanmar = "MM", a.Namibia = "NA", a.Nauru = "NR", a.Nepal = "NP", a.Netherlands = "NL", a.NetherlandsAntilles = "AN", a.NewCaledonia = "NC", a.NewZealand = "NZ", a.NorthKorea = "KP", a.Nicaragua = "NI", a.Niger = "NE", a.Nigeria = "NG", a.Niue = "NU", a.NorfolkIsland = "NF", a.NorthMacedonia = "MK", a.NorthernMarianaIslands = "MP", a.Norway = "NO", a.Oman = "OM", a.Pakistan = "PK", a.Palau = "PW", a.PalestinianTerritoryOccupied = "PS", a.Panama = "PA", a.PapuaNewGuinea = "PG", a.Paraguay = "PY", a.Peru = "PE", a.Philippines = "PH", a.Pitcairn = "PN", a.Poland = "PL", a.Portugal = "PT", a.PuertoRico = "PR", a.Qatar = "QA", a.Reunion = "RE", a.Romania = "RO", a.RussianFederation = "RU", a.Rwanda = "RW", a.SaintBarthelemy = "BL", a.SaintHelena = "SH", a.SaintKittsAndNevis = "KN", a.SaintLucia = "LC", a.SaintMartin = "MF", a.SaintPierreAndMiquelon = "PM", a.SaintVincentAndTheGrenadines = "VC", a.Samoa = "WS", a.SanMarino = "SM", a.SaoTomeAndPrincipe = "ST", a.SaudiArabia = "SA", a.Senegal = "SN", a.Serbia = "RS", a.SerbiaAndMontenegro = "CS", a.Seychelles = "SC", a.SierraLeone = "SL", a.Singapore = "SG", a.Slovakia = "SK", a.Slovenia = "SI", a.SolomonIslands = "SB", a.Somalia = "SO", a.SouthAfrica = "ZA", a.SouthGeorgiaAndTheSouthSandwichIslands = "GS", a.SouthKorea = "KR", a.Spain = "ES", a.SriLanka = "LK", a.Sudan = "SD", a.Suriname = "SR", a.SvalbardAndJanMayen = "SJ", a.Swaziland = "SZ", a.Sweden = "SE", a.Switzerland = "CH", a.Syria = "SY", a.Taiwan = "TW", a.Tajikistan = "TJ", a.Tanzania = "TZ", a.Thailand = "TH", a.TimorLeste = "TL", a.Togo = "TG", a.Tokelau = "TK", a.Tonga = "TO", a.TrinidadAndTobago = "TT", a.Tunisia = "TN", a.Turkey = "TR", a.Turkmenistan = "TM", a.TurksAndCaicosIslands = "TC", a.Tuvalu = "TV", a.Uganda = "UG", a.Ukraine = "UA", a.UnitedArabEmirates = "AE", a.UnitedKingdom = "GB", a.UnitedStates = "US", a.UnitedStatesMinorOutlyingIslands = "UM", a.Uruguay = "UY", a.Uzbekistan = "UZ", a.Vanuatu = "VU", a.Venezuela = "VE", a.Vietnam = "VN", a.VirginIslandsBritish = "VG", a.VirginIslandsUS = "VI", a.WallisAndFutuna = "WF", a.WesternSahara = "EH", a.Yemen = "YE", a.Zambia = "ZM", a.Zimbabwe = "ZW";
})(r$1 || (r$1 = {}));
var m$1;
(function(a) {
  a.AfghanistanAfghani = "AFN", a.AlbaniaLek = "ALL", a.ArmeniaDram = "AMD", a.AlgeriaDinar = "DZD", a.AmericanSamoaTala = "WST", a.AngolaKwanza = "AOA", a.ArgentinaPeso = "ARS", a.AustraliaDollar = "AUD", a.ArubaFlorin = "AWG", a.AzerbaijanNewManat = "AZN", a.BosniaAndHerzegovinaConvertibleMark = "BAM", a.BahrainDinar = "BHD", a.BarbadosDollar = "BBD", a.BangladeshTaka = "BDT", a.BelgiumFranc = "BGN", a.BermudaDollar = "BMD", a.BruneiDollar = "BND", a.BoliviaBoliviano = "BOB", a.BrazilReal = "BRL", a.BahamasDollar = "BSD", a.BhutanNgultrum = "BTN", a.BotswanaPula = "BWP", a.BelarusRuble = "BYN", a.BelizeDollar = "BZD", a.BulgariaLev = "BGN", a.BurundiFranc = "BIF", a.BritishPound = "GBP", a.CanadaDollar = "CAD", a.CambodiaRiel = "KHR", a.ComorosFranc = "KMF", a.CaymanIslandsDollar = "KYD", a.ChilePeso = "CLP", a.ChinaYuan = "CNY", a.ColombiaPeso = "COP", a.CostaRicaColon = "CRC", a.CroatiaKuna = "HRK", a.CubaConvertiblePeso = "CUC", a.CubaPeso = "CUP", a.CapeVerdeEscudo = "CVE", a.CyprusPound = "CYP", a.CzechRepublicKoruna = "CZK", a.DjiboutiFranc = "DJF", a.DenmarkKrone = "DKK", a.DominicaDollar = "XCD", a.DominicanRepublicPeso = "DOP", a.EastCaribbeanDollar = "XCD", a.EgyptPound = "EGP", a.ElSalvadorColon = "SVC", a.EquatorialGuineaEkwele = "GQE", a.EritreaNakfa = "ERN", a.EstoniaKroon = "EEK", a.EthiopiaBirr = "ETB", a.Euro = "EUR", a.FijiDollar = "FJD", a.FalklandIslandsPound = "FKP", a.GambiaDalasi = "GMD", a.GabonFranc = "GMD", a.GeorgiaLari = "GEL", a.GhanaCedi = "GHS", a.GibraltarPound = "GIP", a.GuatemalaQuetzal = "GTQ", a.GuernseyPound = "GGP", a.GuineaBissauPeso = "GWP", a.GuyanaDollar = "GYD", a.HongKongDollar = "HKD", a.HondurasLempira = "HNL", a.HaitiGourde = "HTG", a.HungaryForint = "HUF", a.IndonesiaRupiah = "IDR", a.IsleOfManPound = "IMP", a.IsraelNewShekel = "ILS", a.IndiaRupee = "INR", a.IraqDinar = "IQD", a.IranRial = "IRR", a.IcelandKrona = "ISK", a.JamaicaDollar = "JMD", a.JapanYen = "JPY", a.JerseyPound = "JEP", a.JordanDinar = "JOD", a.KazakhstanTenge = "KZT", a.KenyaShilling = "KES", a.KyrgyzstanSom = "KGS", a.NorthKoreaWon = "KPW", a.SouthKoreaWon = "KRW", a.KuwaitDinar = "KWD", a.LaosKip = "LAK", a.LebanonPound = "LBP", a.LiberiaDollar = "LRD", a.LesothoLoti = "LSL", a.LibyanDinar = "LYD", a.LithuaniaLitas = "LTL", a.LatviaLats = "LVL", a.LibyaDinar = "LYD", a.MacauPataca = "MOP", a.MaldivesRufiyaa = "MVR", a.MalawiKwacha = "MWK", a.MaltaLira = "MTL", a.MauritiusRupee = "MUR", a.MongoliaTughrik = "MNT", a.MoroccoDirham = "MAD", a.MoldovaLeu = "MDL", a.MozambiqueMetical = "MZN", a.MadagascarAriary = "MGA", a.MacedoniaDenar = "MKD", a.MexicoPeso = "MXN", a.MalaysiaRinggit = "MYR", a.MyanmarKyat = "MMK", a.MicronesiaFederatedStatesDollar = "USD", a.NicaraguaCordoba = "NIO", a.NamibiaDollar = "NAD", a.NetherlandsAntillesGuilder = "ANG", a.NewCaledoniaFranc = "XPF", a.NigeriaNaira = "NGN", a.NicaraguaCordobaOro = "NIO", a.NigerCFAFranc = "XOF", a.NorwayKrone = "NOK", a.NepalRupee = "NPR", a.NewZealandDollar = "NZD", a.OmanRial = "OMR", a.PanamaBalboa = "PAB", a.PeruNuevoSol = "PEN", a.PapuaNewGuineaKina = "PGK", a.PhilippinesPeso = "PHP", a.PakistanRupee = "PKR", a.PeruNuevo = "PEN", a.PolandZloty = "PLN", a.ParaguayGuarani = "PYG", a.QatarRial = "QAR", a.RomaniaNewLeu = "RON", a.SerbiaDinar = "RSD", a.SriLankaRupee = "LKR", a.RussiaRuble = "RUB", a.RwandaFranc = "RWF", a.SaudiArabiaRiyal = "SAR", a.SlovakiaKoruna = "SKK", a.SloveniaTolar = "SIT", a.SolomonIslandsDollar = "SBD", a.SeychellesRupee = "SCR", a.SudanPound = "SDG", a.SwedenKrona = "SEK", a.SingaporeDollar = "SGD", a.SaintHelenaPound = "SHP", a.SierraLeoneLeone = "SLL", a.SomaliaShilling = "SOS", a.SurinameDollar = "SRD", a.SintMaartenPound = "SXD", a.SyriaPound = "SYP", a.SwazilandLilangeni = "SZL", a.SwitzerlandFranc = "CHF", a.ThailandBaht = "THB", a.TajikistanSomoni = "TJS", a.TurkmenistanManat = "TMT", a.TunisiaDinar = "TND", a.TongaPaanga = "TOP", a.TurkeyLira = "TRY", a.TrinidadAndTobagoDollar = "TTD", a.TaiwanNewDollar = "TWD", a.TanzaniaShilling = "TZS", a.UnitedArabEmiratesDirham = "AED", a.UkraineHryvnia = "UAH", a.UgandaShilling = "UGX", a.UnitedKingdomPound = "GBP", a.UnitedStatesDollar = "USD", a.UruguayPeso = "UYU", a.UzbekistanSom = "UZS", a.VenezuelaBolivar = "VEF", a.VietnamDong = "VND", a.VanuatuVatu = "VUV", a.SamoaTala = "WST", a.YemenRial = "YER", a.SouthAfricaRand = "ZAR", a.ZambiaKwacha = "ZMW", a.ZimbabweDollar = "ZWL";
})(m$1 || (m$1 = {}));
({ AfghanistanAfghani: { code: m$1.AfghanistanAfghani, countries: [r$1.Afghanistan], decimal_digits: 2, decimal_separator: ".", name: "Afghan Afghani", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u060B", symbol_native: "\u060B", symbol_placement: "before", thousands_separator: "," }, AlbaniaLek: { code: m$1.AlbaniaLek, countries: [r$1.Albania], decimal_digits: 2, decimal_separator: ",", name: "Albanian Lek", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Lek", symbol_native: "Lek", symbol_placement: "before", thousands_separator: "." }, AlgeriaDinar: { code: m$1.AlgeriaDinar, countries: [r$1.Algeria], decimal_digits: 2, decimal_separator: ".", name: "Algerian Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u062F.\u062C", symbol_native: "\u062F.\u062C", symbol_placement: "before", thousands_separator: "," }, ArgentinaPeso: { code: m$1.ArgentinaPeso, countries: [r$1.Argentina], decimal_digits: 2, decimal_separator: ".", name: "Argentine Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, ArmeniaDram: { code: m$1.ArmeniaDram, countries: [r$1.Armenia], decimal_digits: 2, decimal_separator: ",", name: "Armenian Dram", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0564\u0580.", symbol_native: "\u0564\u0580.", symbol_placement: "before", thousands_separator: "." }, ArubaFlorin: { code: m$1.ArubaFlorin, countries: [r$1.Aruba], decimal_digits: 2, decimal_separator: ".", name: "Aruban Florin", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0192", symbol_native: "\u0192", symbol_placement: "before", thousands_separator: "," }, AustraliaDollar: { code: m$1.AustraliaDollar, countries: [r$1.Australia], decimal_digits: 2, decimal_separator: ".", name: "Australian Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, AzerbaijanManat: { code: m$1.AzerbaijanNewManat, countries: [r$1.Azerbaijan], decimal_digits: 2, decimal_separator: ".", name: "Azerbaijani Manat", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u043C\u0430\u043D", symbol_native: "\u043C\u0430\u043D", symbol_placement: "before", thousands_separator: "," }, BahrainDinar: { code: m$1.BahrainDinar, countries: [r$1.Bahrain], decimal_digits: 3, decimal_separator: ".", name: "Bahraini Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: ".\u062F.\u0628", symbol_native: ".\u062F.\u0628", symbol_placement: "before", thousands_separator: "," }, BangladeshTaka: { code: m$1.BangladeshTaka, countries: [r$1.Bangladesh], decimal_digits: 2, decimal_separator: ".", name: "Bangladeshi Taka", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u09F3", symbol_native: "\u09F3", symbol_placement: "before", thousands_separator: "," }, BarbadosDollar: { code: m$1.BarbadosDollar, countries: [r$1.Barbados], decimal_digits: 2, decimal_separator: ".", name: "Barbadian Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, BelarusRuble: { code: m$1.BelarusRuble, countries: [r$1.Belarus], decimal_digits: 2, decimal_separator: ".", name: "Belarusian Ruble", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Br", symbol_native: "Br", symbol_placement: "before", thousands_separator: "." }, BelizeDollar: { code: m$1.BelizeDollar, countries: [r$1.Belize], decimal_digits: 2, decimal_separator: ".", name: "Belize Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "BZ$", symbol_native: "BZ$", symbol_placement: "before", thousands_separator: "," }, BermudaDollar: { code: m$1.BermudaDollar, countries: [r$1.Bermuda], decimal_digits: 2, decimal_separator: ".", name: "Bermudian Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, BoliviaBoliviano: { code: m$1.BoliviaBoliviano, countries: [r$1.Bolivia], decimal_digits: 2, decimal_separator: ".", name: "Bolivian Boliviano", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$b", symbol_native: "$b", symbol_placement: "before", thousands_separator: "," }, BosniaAndHerzegovinaConvertibleMarka: { code: m$1.BosniaAndHerzegovinaConvertibleMark, countries: [r$1.BosniaAndHerzegovina], decimal_digits: 2, decimal_separator: ",", name: "Bosnia and Herzegovina Convertible Marka", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "KM", symbol_native: "KM", symbol_placement: "before", thousands_separator: "." }, BotswanaPula: { code: m$1.BotswanaPula, countries: [r$1.Botswana], decimal_digits: 2, decimal_separator: ".", name: "Botswana Pula", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "P", symbol_native: "P", symbol_placement: "before", thousands_separator: "," }, BrazilReal: { code: m$1.BrazilReal, countries: [r$1.Brazil], decimal_digits: 2, decimal_separator: ",", name: "Brazilian Real", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "R$", symbol_native: "R$", symbol_placement: "before", thousands_separator: "." }, BruneiDollar: { code: m$1.BruneiDollar, countries: [r$1.Brunei], decimal_digits: 2, decimal_separator: ".", name: "Brunei Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, BulgariaLev: { code: m$1.BulgariaLev, countries: [r$1.Bulgaria], decimal_digits: 2, decimal_separator: ".", name: "Bulgarian Lev", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u043B\u0432", symbol_native: "\u043B\u0432", symbol_placement: "before", thousands_separator: "." }, BurundiFranc: { code: m$1.BurundiFranc, countries: [r$1.Burundi], decimal_digits: 0, decimal_separator: ".", name: "Burundian Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "FBu", symbol_native: "FBu", symbol_placement: "before", thousands_separator: "," }, CambodiaRiel: { code: m$1.CambodiaRiel, countries: [r$1.Cambodia], decimal_digits: 2, decimal_separator: ",", name: "Cambodian Riel", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u17DB", symbol_native: "\u17DB", symbol_placement: "before", thousands_separator: "." }, CanadaDollar: { code: m$1.CanadaDollar, countries: [r$1.Canada], decimal_digits: 2, decimal_separator: ".", name: "Canadian Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, CapeVerdeEscudo: { code: m$1.CapeVerdeEscudo, countries: [r$1.CapeVerde], decimal_digits: 2, decimal_separator: ".", name: "Cape Verde Escudo", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Esc", symbol_native: "Esc", symbol_placement: "before", thousands_separator: "," }, CaymanIslandsDollar: { code: m$1.CaymanIslandsDollar, countries: [r$1.CaymanIslands], decimal_digits: 2, decimal_separator: ".", name: "Cayman Islands Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, ChilePeso: { code: m$1.ChilePeso, countries: [r$1.Chile], decimal_digits: 0, decimal_separator: ".", name: "Chilean Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, ChinaYuanRenminbi: { code: m$1.ChinaYuan, countries: [r$1.China], decimal_digits: 2, decimal_separator: ".", name: "Chinese Yuan", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA5", symbol_native: "\xA5", symbol_placement: "before", thousands_separator: "," }, ColombiaPeso: { code: m$1.ColombiaPeso, countries: [r$1.Colombia], decimal_digits: 2, decimal_separator: ".", name: "Colombian Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, ComorosFranc: { code: m$1.ComorosFranc, countries: [r$1.Comoros], decimal_digits: 0, decimal_separator: ".", name: "Comoros Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "CF", symbol_native: "CF", symbol_placement: "before", thousands_separator: "," }, CostaRicaColon: { code: m$1.CostaRicaColon, countries: [r$1.CostaRica], decimal_digits: 2, decimal_separator: ".", name: "Costa Rican Colon", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A1", symbol_native: "\u20A1", symbol_placement: "before", thousands_separator: "," }, CroatiaKuna: { code: m$1.CroatiaKuna, countries: [r$1.Croatia], decimal_digits: 2, decimal_separator: ",", name: "Croatian Kuna", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kn", symbol_native: "kn", symbol_placement: "before", thousands_separator: "." }, CubaConvertiblePeso: { code: m$1.CubaConvertiblePeso, countries: [r$1.Cuba], decimal_digits: 2, decimal_separator: ",", name: "Cuba Convertible Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, CubaPeso: { code: m$1.CubaPeso, countries: [r$1.Cuba], decimal_digits: 2, decimal_separator: ",", name: "Cuba Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, CyprusPound: { code: m$1.CyprusPound, countries: [r$1.Cyprus], decimal_digits: 2, decimal_separator: ",", name: "Cyprus Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, CzechRepublicKoruna: { code: m$1.CzechRepublicKoruna, countries: [r$1.CzechRepublic], decimal_digits: 2, decimal_separator: ",", name: "Czech Republic Koruna", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "K\u010D", symbol_native: "K\u010D", symbol_placement: "before", thousands_separator: "." }, DenmarkKrone: { code: m$1.DenmarkKrone, countries: [r$1.Denmark], decimal_digits: 2, decimal_separator: ",", name: "Denmark Krone", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kr", symbol_native: "kr", symbol_placement: "before", thousands_separator: "." }, DjiboutiFranc: { code: m$1.DjiboutiFranc, countries: [r$1.Djibouti], decimal_digits: 0, decimal_separator: ".", name: "Djibouti Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Fdj", symbol_native: "Fdj", symbol_placement: "before", thousands_separator: "," }, DominicanRepublicPeso: { code: m$1.DominicanRepublicPeso, countries: [r$1.DominicanRepublic], decimal_digits: 2, decimal_separator: ",", name: "Dominican Republic Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "RD$", symbol_native: "RD$", symbol_placement: "before", thousands_separator: "." }, EastCaribbeanDollar: { code: m$1.EastCaribbeanDollar, countries: [r$1.AntiguaAndBarbuda, r$1.Dominica, r$1.Grenada, r$1.SaintKittsAndNevis, r$1.SaintLucia, r$1.SaintVincentAndTheGrenadines], decimal_digits: 2, decimal_separator: ".", name: "East Caribbean Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "," }, EgyptPound: { code: m$1.EgyptPound, countries: [r$1.Egypt], decimal_digits: 2, decimal_separator: ".", name: "Egypt Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "," }, ElSalvadorColon: { code: m$1.ElSalvadorColon, countries: [r$1.ElSalvador], decimal_digits: 2, decimal_separator: ",", name: "El Salvador Colon", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A1", symbol_native: "\u20A1", symbol_placement: "before", thousands_separator: "." }, EquatorialGuineaEkwele: { code: m$1.EquatorialGuineaEkwele, countries: [r$1.EquatorialGuinea], decimal_digits: 0, decimal_separator: ".", name: "Equatorial Guinea Ekwele", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "GQE", symbol_native: "GQE", symbol_placement: "before", thousands_separator: "," }, EritreaNakfa: { code: m$1.EritreaNakfa, countries: [r$1.Eritrea], decimal_digits: 2, decimal_separator: ",", name: "Eritrea Nakfa", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Nfk", symbol_native: "Nfk", symbol_placement: "before", thousands_separator: "." }, EstoniaKroon: { code: m$1.EstoniaKroon, countries: [r$1.Estonia], decimal_digits: 2, decimal_separator: ",", name: "Estonia Kroon", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kr", symbol_native: "kr", symbol_placement: "before", thousands_separator: "." }, EthiopiaBirr: { code: m$1.EthiopiaBirr, countries: [r$1.Ethiopia], decimal_digits: 2, decimal_separator: ",", name: "Ethiopia Birr", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Br", symbol_native: "Br", symbol_placement: "before", thousands_separator: "." }, Euro: { code: m$1.Euro, countries: [r$1.Andorra, r$1.Austria, r$1.Belgium, r$1.Cyprus, r$1.Estonia, r$1.Finland, r$1.France, r$1.Germany, r$1.Greece, r$1.Ireland, r$1.Italy, r$1.Latvia, r$1.Lithuania, r$1.Luxembourg, r$1.Malta, r$1.Monaco, r$1.Netherlands, r$1.Portugal, r$1.Spain, r$1.Sweden, r$1.UnitedKingdom], decimal_digits: 2, decimal_separator: ",", name: "Euro", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AC", symbol_native: "\u20AC", symbol_placement: "before", thousands_separator: "." }, FalklandIslandsPound: { code: m$1.FalklandIslandsPound, countries: [r$1.FalklandIslands], decimal_digits: 2, decimal_separator: ",", name: "Equatorial Guinea Ekwele", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, FijiDollar: { code: m$1.FijiDollar, countries: [r$1.Fiji], decimal_digits: 2, decimal_separator: ",", name: "Fiji Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, GambiaDalasi: { code: m$1.GambiaDalasi, countries: [r$1.Gambia], decimal_digits: 2, decimal_separator: ",", name: "Gambia Dalasi", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "D", symbol_native: "D", symbol_placement: "before", thousands_separator: "." }, GeorgiaLari: { code: m$1.GeorgiaLari, countries: [r$1.Georgia], decimal_digits: 2, decimal_separator: ",", name: "Georgia Lari", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20BE", symbol_native: "\u20BE", symbol_placement: "before", thousands_separator: "." }, GhanaCedi: { code: m$1.GhanaCedi, countries: [r$1.Ghana], decimal_digits: 2, decimal_separator: ",", name: "Ghana Cedi", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B5", symbol_native: "\u20B5", symbol_placement: "before", thousands_separator: "." }, GibraltarPound: { code: m$1.GibraltarPound, countries: [r$1.Gibraltar], decimal_digits: 2, decimal_separator: ",", name: "Gibraltar Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, GuatemalaQuetzal: { code: m$1.GuatemalaQuetzal, countries: [r$1.Guatemala], decimal_digits: 2, decimal_separator: ",", name: "Guatemala Quetzal", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Q", symbol_native: "Q", symbol_placement: "before", thousands_separator: "." }, GuernseyPound: { code: m$1.GuernseyPound, countries: [r$1.Guernsey], decimal_digits: 2, decimal_separator: ",", name: "Guernsey Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, GuineaBissauPeso: { code: m$1.GuineaBissauPeso, countries: [r$1.GuineaBissau], decimal_digits: 2, decimal_separator: ",", name: "Guinea-Bissau Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B5", symbol_native: "\u20B5", symbol_placement: "before", thousands_separator: "." }, GuyanaDollar: { code: m$1.GuyanaDollar, countries: [r$1.Guyana], decimal_digits: 2, decimal_separator: ",", name: "Guyana Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, HaitiGourde: { code: m$1.HaitiGourde, countries: [r$1.Haiti], decimal_digits: 2, decimal_separator: ",", name: "Haiti Gourde", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "G", symbol_native: "G", symbol_placement: "before", thousands_separator: "." }, HondurasLempira: { code: m$1.HondurasLempira, countries: [r$1.Honduras], decimal_digits: 2, decimal_separator: ",", name: "Honduras Lempira", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "L", symbol_native: "L", symbol_placement: "before", thousands_separator: "." }, HongKongDollar: { code: m$1.HongKongDollar, countries: [r$1.HongKong], decimal_digits: 2, decimal_separator: ",", name: "Hong Kong Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, HungaryForint: { code: m$1.HungaryForint, countries: [r$1.Hungary], decimal_digits: 2, decimal_separator: ",", name: "Hungary Forint", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Ft", symbol_native: "Ft", symbol_placement: "before", thousands_separator: "." }, IcelandKrona: { code: m$1.IcelandKrona, countries: [r$1.Iceland], decimal_digits: 0, decimal_separator: ",", name: "Iceland Krona", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kr", symbol_native: "kr", symbol_placement: "before", thousands_separator: "." }, IndianRupee: { code: m$1.IndiaRupee, countries: [r$1.India, r$1.Bhutan], decimal_digits: 2, decimal_separator: ",", name: "Indian Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B9", symbol_native: "\u20B9", symbol_placement: "before", thousands_separator: "." }, IndonesiaRupiah: { code: m$1.IndonesiaRupiah, countries: [r$1.Indonesia], decimal_digits: 0, decimal_separator: ",", name: "Indonesia Rupiah", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Rp", symbol_native: "Rp", symbol_placement: "before", thousands_separator: "." }, IranRial: { code: m$1.IranRial, countries: [r$1.Iran], decimal_digits: 0, decimal_separator: ",", name: "Iran Rial", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, IsleOfManPound: { code: m$1.IsleOfManPound, countries: [r$1.IsleOfMan], decimal_digits: 2, decimal_separator: ",", name: "Isle of Man Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, IsraeliShekel: { code: m$1.IsraelNewShekel, countries: [r$1.Israel], decimal_digits: 2, decimal_separator: ",", name: "Israeli Shekel", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AA", symbol_native: "\u20AA", symbol_placement: "before", thousands_separator: "." }, JamaicaDollar: { code: m$1.JamaicaDollar, countries: [r$1.Jamaica], decimal_digits: 2, decimal_separator: ",", name: "Jamaica Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "J$", symbol_native: "J$", symbol_placement: "before", thousands_separator: "." }, JapanYen: { code: m$1.JapanYen, countries: [r$1.Japan], decimal_digits: 0, decimal_separator: ",", name: "Japan Yen", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA5", symbol_native: "\uFFE5", symbol_placement: "before", thousands_separator: "." }, JerseyPound: { code: m$1.JerseyPound, countries: [r$1.Jersey], decimal_digits: 2, decimal_separator: ",", name: "Jersey Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, JordanDinar: { code: m$1.JordanDinar, countries: [r$1.Jordan], decimal_digits: 3, decimal_separator: ",", name: "Jordan Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "JD", symbol_native: "JD", symbol_placement: "before", thousands_separator: "." }, KazakhstanTenge: { code: m$1.KazakhstanTenge, countries: [r$1.Kazakhstan], decimal_digits: 2, decimal_separator: ",", name: "Kazakhstan Tenge", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B8", symbol_native: "\u20B8", symbol_placement: "before", thousands_separator: "." }, KenyaShilling: { code: m$1.KenyaShilling, countries: [r$1.Kenya], decimal_digits: 2, decimal_separator: ",", name: "Kenya Shilling", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "KSh", symbol_native: "KSh", symbol_placement: "before", thousands_separator: "." }, KuwaitDinar: { code: m$1.KuwaitDinar, countries: [r$1.Kuwait], decimal_digits: 3, decimal_separator: ",", name: "Kuwait Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "KD", symbol_native: "KD", symbol_placement: "before", thousands_separator: "." }, KyrgyzstanSom: { code: m$1.KyrgyzstanSom, countries: [r$1.Kyrgyzstan], decimal_digits: 2, decimal_separator: ",", name: "Kyrgyzstan Som", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "KGS", symbol_native: "KGS", symbol_placement: "before", thousands_separator: "." }, LaosKip: { code: m$1.LaosKip, countries: [r$1.Laos], decimal_digits: 0, decimal_separator: ",", name: "Laos Kip", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AD", symbol_native: "\u20AD", symbol_placement: "before", thousands_separator: "." }, LatviaLats: { code: m$1.LatviaLats, countries: [r$1.Latvia], decimal_digits: 2, decimal_separator: ",", name: "Latvia Lat", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Ls", symbol_native: "Ls", symbol_placement: "before", thousands_separator: "." }, LebanonPound: { code: m$1.LebanonPound, countries: [r$1.Lebanon], decimal_digits: 0, decimal_separator: ",", name: "Lebanon Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, LesothoLoti: { code: m$1.LesothoLoti, countries: [r$1.Lesotho], decimal_digits: 2, decimal_separator: ",", name: "Lesotho Loti", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "M", symbol_native: "M", symbol_placement: "before", thousands_separator: "." }, LiberiaDollar: { code: m$1.LiberiaDollar, countries: [r$1.Liberia], decimal_digits: 2, decimal_separator: ",", name: "Liberia Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, LibyanDinar: { code: m$1.LibyanDinar, countries: [r$1.Libya], decimal_digits: 3, decimal_separator: ",", name: "Libyan Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "LD", symbol_native: "LD", symbol_placement: "before", thousands_separator: "." }, LithuaniaLitas: { code: m$1.LithuaniaLitas, countries: [r$1.Lithuania], decimal_digits: 2, decimal_separator: ",", name: "Lithuania Litas", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Lt", symbol_native: "Lt", symbol_placement: "before", thousands_separator: "." }, MacauPataca: { code: m$1.MacauPataca, countries: [r$1.Macau], decimal_digits: 2, decimal_separator: ",", name: "Macau Pataca", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "MOP$", symbol_native: "MOP$", symbol_placement: "before", thousands_separator: "." }, MacedoniaDenar: { code: m$1.MacedoniaDenar, countries: [r$1.NorthMacedonia], decimal_digits: 2, decimal_separator: ",", name: "Macedonia Denar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0434\u0435\u043D", symbol_native: "\u0434\u0435\u043D", symbol_placement: "before", thousands_separator: "." }, MadagascarAriary: { code: m$1.MadagascarAriary, countries: [r$1.Madagascar], decimal_digits: 0, decimal_separator: ",", name: "Madagascar Ariary", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Ar", symbol_native: "Ar", symbol_placement: "before", thousands_separator: "." }, MalawiKwacha: { code: m$1.MalawiKwacha, countries: [r$1.Malawi], decimal_digits: 2, decimal_separator: ",", name: "Malawi Kwacha", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "MK", symbol_native: "MK", symbol_placement: "before", thousands_separator: "." }, MalaysiaRinggit: { code: m$1.MalaysiaRinggit, countries: [r$1.Malaysia], decimal_digits: 2, decimal_separator: ",", name: "Malaysia Ringgit", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "RM", symbol_native: "RM", symbol_placement: "before", thousands_separator: "." }, MaldivesRufiyaa: { code: m$1.MaldivesRufiyaa, countries: [r$1.Maldives], decimal_digits: 2, decimal_separator: ",", name: "Maldives Rufiyaa", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Rf", symbol_native: "Rf", symbol_placement: "before", thousands_separator: "." }, MaltaLira: { code: m$1.MaltaLira, countries: [r$1.Malta], decimal_digits: 2, decimal_separator: ",", name: "Malta Lira", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Lm", symbol_native: "Lm", symbol_placement: "before", thousands_separator: "." }, MauritiusRupee: { code: m$1.MauritiusRupee, countries: [r$1.Mauritius], decimal_digits: 2, decimal_separator: ",", name: "Mauritius Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A8", symbol_native: "\u20A8", symbol_placement: "before", thousands_separator: "." }, MexicoPeso: { code: m$1.MexicoPeso, countries: [r$1.Mexico], decimal_digits: 2, decimal_separator: ",", name: "Mexico Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, MoldovaLeu: { code: m$1.MoldovaLeu, countries: [r$1.Moldova], decimal_digits: 2, decimal_separator: ",", name: "Moldova Leu", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "L", symbol_native: "L", symbol_placement: "before", thousands_separator: "." }, MongoliaTughrik: { code: m$1.MongoliaTughrik, countries: [r$1.Mongolia], decimal_digits: 2, decimal_separator: ",", name: "Mongolia Tughrik", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AE", symbol_native: "\u20AE", symbol_placement: "before", thousands_separator: "." }, MoroccoDirham: { code: m$1.MoroccoDirham, countries: [r$1.Morocco], decimal_digits: 2, decimal_separator: ",", name: "Morocco Dirham", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "DH", symbol_native: "DH", symbol_placement: "before", thousands_separator: "." }, MozambiqueMetical: { code: m$1.MozambiqueMetical, countries: [r$1.Mozambique], decimal_digits: 2, decimal_separator: ",", name: "Mozambique Metical", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "MT", symbol_native: "MT", symbol_placement: "before", thousands_separator: "." }, MyanmarKyat: { code: m$1.MyanmarKyat, countries: [r$1.Myanmar], decimal_digits: 0, decimal_separator: ",", name: "Myanmar Kyat", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "K", symbol_native: "K", symbol_placement: "before", thousands_separator: "." }, NamibiaDollar: { code: m$1.NamibiaDollar, countries: [r$1.Namibia], decimal_digits: 2, decimal_separator: ",", name: "Namibia Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, NepalRupee: { code: m$1.NepalRupee, countries: [r$1.Nepal], decimal_digits: 2, decimal_separator: ",", name: "Nepal Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A8", symbol_native: "\u20A8", symbol_placement: "before", thousands_separator: "." }, NetherlandsAntillesGuilder: { code: m$1.NetherlandsAntillesGuilder, countries: [r$1.NetherlandsAntilles], decimal_digits: 2, decimal_separator: ",", name: "Netherlands Antilles Guilder", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0192", symbol_native: "\u0192", symbol_placement: "before", thousands_separator: "." }, NewCaledoniaFranc: { code: m$1.NewCaledoniaFranc, countries: [r$1.NewCaledonia], decimal_digits: 0, decimal_separator: ",", name: "New Caledonia Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A3", symbol_native: "\u20A3", symbol_placement: "before", thousands_separator: "." }, NewZealandDollar: { code: m$1.NewZealandDollar, countries: [r$1.NewZealand], decimal_digits: 2, decimal_separator: ",", name: "New Zealand Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, NicaraguaCordoba: { code: m$1.NicaraguaCordoba, countries: [r$1.Nicaragua], decimal_digits: 2, decimal_separator: ",", name: "Nicaragua Cordoba", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "C$", symbol_native: "C$", symbol_placement: "before", thousands_separator: "." }, NigerCFAFranc: { code: m$1.NigerCFAFranc, countries: [r$1.Niger], decimal_digits: 0, decimal_separator: ",", name: "Niger CFA Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "CFA", symbol_native: "CFA", symbol_placement: "before", thousands_separator: "." }, NigeriaNaira: { code: m$1.NigeriaNaira, countries: [r$1.Nigeria], decimal_digits: 2, decimal_separator: ",", name: "Nigeria Naira", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A6", symbol_native: "\u20A6", symbol_placement: "before", thousands_separator: "." }, NorthKoreaWon: { code: m$1.NorthKoreaWon, countries: [r$1.NorthKorea], decimal_digits: 0, decimal_separator: ",", name: "North Korea Won", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A9", symbol_native: "\u20A9", symbol_placement: "before", thousands_separator: "." }, NorwayKrone: { code: m$1.NorwayKrone, countries: [r$1.Norway], decimal_digits: 2, decimal_separator: ",", name: "Norway Krone", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kr", symbol_native: "kr", symbol_placement: "before", thousands_separator: "." }, OmanRial: { code: m$1.OmanRial, countries: [r$1.Oman], decimal_digits: 3, decimal_separator: ",", name: "Oman Rial", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, PakistanRupee: { code: m$1.PakistanRupee, countries: [r$1.Pakistan], decimal_digits: 2, decimal_separator: ",", name: "Pakistan Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A8", symbol_native: "\u20A8", symbol_placement: "before", thousands_separator: "." }, PanamaBalboa: { code: m$1.PanamaBalboa, countries: [r$1.Panama], decimal_digits: 2, decimal_separator: ",", name: "Panama Balboa", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "B/.", symbol_native: "B/.", symbol_placement: "before", thousands_separator: "." }, ParaguayGuarani: { code: m$1.ParaguayGuarani, countries: [r$1.Paraguay], decimal_digits: 0, decimal_separator: ",", name: "Paraguay Guarani", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Gs", symbol_native: "Gs", symbol_placement: "before", thousands_separator: "." }, PeruvianNuevo: { code: m$1.PeruNuevo, countries: [r$1.Peru], decimal_digits: 2, decimal_separator: ",", name: "Peruvian Nuevo", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "S/.", symbol_native: "S/.", symbol_placement: "before", thousands_separator: "." }, PhilippinesPeso: { code: m$1.PhilippinesPeso, countries: [r$1.Philippines], decimal_digits: 2, decimal_separator: ",", name: "Philippines Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B1", symbol_native: "\u20B1", symbol_placement: "before", thousands_separator: "." }, PolandZloty: { code: m$1.PolandZloty, countries: [r$1.Poland], decimal_digits: 2, decimal_separator: ",", name: "Poland Zloty", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "z\u0142", symbol_native: "z\u0142", symbol_placement: "before", thousands_separator: "." }, QatarRial: { code: m$1.QatarRial, countries: [r$1.Qatar], decimal_digits: 2, decimal_separator: ",", name: "Qatar Rial", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, RomaniaNewLeu: { code: m$1.RomaniaNewLeu, countries: [r$1.Romania], decimal_digits: 2, decimal_separator: ",", name: "Romania New Leu", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "lei", symbol_native: "lei", symbol_placement: "before", thousands_separator: "." }, RussiaRuble: { code: m$1.RussiaRuble, countries: [r$1.RussianFederation], decimal_digits: 2, decimal_separator: ",", name: "Russia Ruble", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20BD", symbol_native: "\u20BD", symbol_placement: "before", thousands_separator: "." }, RwandaFranc: { code: m$1.RwandaFranc, countries: [r$1.Rwanda], decimal_digits: 0, decimal_separator: ",", name: "Rwanda Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "RF", symbol_native: "RF", symbol_placement: "before", thousands_separator: "." }, SaudiArabiaRiyal: { code: m$1.SaudiArabiaRiyal, countries: [r$1.SaudiArabia], decimal_digits: 2, decimal_separator: ",", name: "Saudi Arabia Riyal", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, SerbiaDinar: { code: m$1.SerbiaDinar, countries: [r$1.Serbia], decimal_digits: 0, decimal_separator: ",", name: "Serbia Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0414\u0438\u043D.", symbol_native: "\u0414\u0438\u043D.", symbol_placement: "before", thousands_separator: "." }, SeychellesRupee: { code: m$1.SeychellesRupee, countries: [r$1.Seychelles], decimal_digits: 2, decimal_separator: ",", name: "Seychelles Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A8", symbol_native: "\u20A8", symbol_placement: "before", thousands_separator: "." }, SingaporeDollar: { code: m$1.SingaporeDollar, countries: [r$1.Singapore], decimal_digits: 2, decimal_separator: ",", name: "Singapore Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, SlovakiaKoruna: { code: m$1.SlovakiaKoruna, countries: [r$1.Slovakia], decimal_digits: 2, decimal_separator: ",", name: "Slovakia Koruna", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Sk", symbol_native: "Sk", symbol_placement: "before", thousands_separator: "." }, SloveniaTolar: { code: m$1.SloveniaTolar, countries: [r$1.Slovenia], decimal_digits: 2, decimal_separator: ",", name: "Slovenia Tolar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "SIT", symbol_native: "SIT", symbol_placement: "before", thousands_separator: "." }, SolomonIslandsDollar: { code: m$1.SolomonIslandsDollar, countries: [r$1.SolomonIslands], decimal_digits: 2, decimal_separator: ",", name: "Solomon Islands Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, SomaliaShilling: { code: m$1.SomaliaShilling, countries: [r$1.Somalia], decimal_digits: 0, decimal_separator: ",", name: "Somalia Shilling", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "S", symbol_native: "S", symbol_placement: "before", thousands_separator: "." }, SouthAfricaRand: { code: m$1.SouthAfricaRand, countries: [r$1.SouthAfrica], decimal_digits: 2, decimal_separator: ",", name: "South Africa Rand", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "R", symbol_native: "R", symbol_placement: "before", thousands_separator: "." }, SouthKoreaWon: { code: m$1.SouthKoreaWon, countries: [r$1.SouthKorea], decimal_digits: 0, decimal_separator: ",", name: "South Korea Won", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A9", symbol_native: "\u20A9", symbol_placement: "before", thousands_separator: "." }, SriLankaRupee: { code: m$1.SriLankaRupee, countries: [r$1.SriLanka], decimal_digits: 2, decimal_separator: ",", name: "Sri Lanka Rupee", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20A8", symbol_native: "\u20A8", symbol_placement: "before", thousands_separator: "." }, SudanPound: { code: m$1.SudanPound, countries: [r$1.Sudan], decimal_digits: 2, decimal_separator: ",", name: "Sudan Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, SurinameDollar: { code: m$1.SurinameDollar, countries: [r$1.Suriname], decimal_digits: 2, decimal_separator: ",", name: "Suriname Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, SwazilandLilangeni: { code: m$1.SwazilandLilangeni, countries: [r$1.Swaziland], decimal_digits: 2, decimal_separator: ",", name: "Swaziland Lilangeni", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "E", symbol_native: "E", symbol_placement: "before", thousands_separator: "." }, SwedenKrona: { code: m$1.SwedenKrona, countries: [r$1.Sweden], decimal_digits: 2, decimal_separator: ",", name: "Sweden Krona", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "kr", symbol_native: "kr", symbol_placement: "before", thousands_separator: "." }, SwitzerlandFranc: { code: m$1.SwitzerlandFranc, countries: [r$1.Switzerland], decimal_digits: 2, decimal_separator: ",", name: "Switzerland Franc", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "CHF", symbol_native: "CHF", symbol_placement: "before", thousands_separator: "." }, SyriaPound: { code: m$1.SyriaPound, countries: [r$1.Syria], decimal_digits: 2, decimal_separator: ",", name: "Syria Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, TaiwanNewDollar: { code: m$1.TaiwanNewDollar, countries: [r$1.Taiwan], decimal_digits: 2, decimal_separator: ",", name: "Taiwan New Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "NT$", symbol_native: "NT$", symbol_placement: "before", thousands_separator: "." }, TajikistanSomoni: { code: m$1.TajikistanSomoni, countries: [r$1.Tajikistan], decimal_digits: 2, decimal_separator: ",", name: "Tajikistan Somoni", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "TJS", symbol_native: "TJS", symbol_placement: "before", thousands_separator: "." }, TanzaniaShilling: { code: m$1.TanzaniaShilling, countries: [r$1.Tanzania], decimal_digits: 2, decimal_separator: ",", name: "Tanzania Shilling", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "TSh", symbol_native: "TSh", symbol_placement: "before", thousands_separator: "." }, ThailandBaht: { code: m$1.ThailandBaht, countries: [r$1.Thailand], decimal_digits: 2, decimal_separator: ",", name: "Thailand Baht", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u0E3F", symbol_native: "\u0E3F", symbol_placement: "before", thousands_separator: "." }, TunisiaDinar: { code: m$1.TunisiaDinar, countries: [r$1.Tunisia], decimal_digits: 3, decimal_separator: ",", name: "Tunisia Dinar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u062F.\u062A", symbol_native: "\u062F.\u062A", symbol_placement: "before", thousands_separator: "." }, TurkeyLira: { code: m$1.TurkeyLira, countries: [r$1.Turkey], decimal_digits: 2, decimal_separator: ",", name: "Turkey Lira", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20BA", symbol_native: "\u20BA", symbol_placement: "before", thousands_separator: "." }, TurkmenistanManat: { code: m$1.TurkmenistanManat, countries: [r$1.Turkmenistan], decimal_digits: 2, decimal_separator: ",", name: "Turkmenistan Manat", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "m", symbol_native: "m", symbol_placement: "before", thousands_separator: "." }, UgandaShilling: { code: m$1.UgandaShilling, countries: [r$1.Uganda], decimal_digits: 0, decimal_separator: ",", name: "Uganda Shilling", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "USh", symbol_native: "USh", symbol_placement: "before", thousands_separator: "." }, UkraineHryvnia: { code: m$1.UkraineHryvnia, countries: [r$1.Ukraine], decimal_digits: 2, decimal_separator: ",", name: "Ukraine Hryvnia", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20B4", symbol_native: "\u20B4", symbol_placement: "before", thousands_separator: "." }, UnitedArabEmiratesDirham: { code: m$1.UnitedArabEmiratesDirham, countries: [r$1.UnitedArabEmirates], decimal_digits: 2, decimal_separator: ",", name: "United Arab Emirates Dirham", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u062F.\u0625", symbol_native: "\u062F.\u0625", symbol_placement: "before", thousands_separator: "." }, UnitedKingdomPound: { code: m$1.UnitedKingdomPound, countries: [r$1.UnitedKingdom], decimal_digits: 2, decimal_separator: ",", name: "United Kingdom Pound", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\xA3", symbol_native: "\xA3", symbol_placement: "before", thousands_separator: "." }, UnitedStatesDollar: { code: m$1.UnitedStatesDollar, countries: [r$1.UnitedStates], decimal_digits: 2, decimal_separator: ",", name: "United States Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$", symbol_native: "$", symbol_placement: "before", thousands_separator: "." }, UruguayPeso: { code: m$1.UruguayPeso, countries: [r$1.Uruguay], decimal_digits: 2, decimal_separator: ",", name: "Uruguay Peso", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "$U", symbol_native: "$U", symbol_placement: "before", thousands_separator: "." }, UzbekistanSom: { code: m$1.UzbekistanSom, countries: [r$1.Uzbekistan], decimal_digits: 2, decimal_separator: ",", name: "Uzbekistan Som", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "UZS", symbol_native: "UZS", symbol_placement: "before", thousands_separator: "." }, VanuatuVatu: { code: m$1.VanuatuVatu, countries: [r$1.Vanuatu], decimal_digits: 0, decimal_separator: ",", name: "Vanuatu Vatu", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "VT", symbol_native: "VT", symbol_placement: "before", thousands_separator: "." }, VenezuelaBolivar: { code: m$1.VenezuelaBolivar, countries: [r$1.Venezuela], decimal_digits: 2, decimal_separator: ",", name: "Venezuela Bolivar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "Bs. F", symbol_native: "Bs. F", symbol_placement: "before", thousands_separator: "." }, VietnamDong: { code: m$1.VietnamDong, countries: [r$1.Vietnam], decimal_digits: 0, decimal_separator: ",", name: "Vietnam Dong", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AB", symbol_native: "\u20AB", symbol_placement: "before", thousands_separator: "." }, YemenRial: { code: m$1.YemenRial, countries: [r$1.Yemen], decimal_digits: 2, decimal_separator: ",", name: "Yemen Rial", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\uFDFC", symbol_native: "\uFDFC", symbol_placement: "before", thousands_separator: "." }, ZambiaKwacha: { code: m$1.ZambiaKwacha, countries: [r$1.Zambia], decimal_digits: 2, decimal_separator: ",", name: "Zambia Kwacha", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "ZK", symbol_native: "ZK", symbol_placement: "before", thousands_separator: "." }, ZimbabweDollar: { code: m$1.ZimbabweDollar, countries: [r$1.Zimbabwe], decimal_digits: 2, decimal_separator: ",", name: "Zimbabwe Dollar", negative_sign: "-", positive_sign: "", rounding: 0, symbol: "\u20AB", symbol_native: "\u20AB", symbol_placement: "before", thousands_separator: "." } });
var Me;
(function(a) {
  a.Bitcoin = "BTC", a.Ethereum = "ETH", a.Litecoin = "LTC", a.Ripple = "XRP", a.Dash = "DASH", a.Zcash = "ZEC", a.Dogecoin = "DOGE", a.Monero = "XMR", a.BitcoinCash = "BCH", a.EOS = "EOS", a.Binance = "BNB", a.Stellar = "XLM", a.Cardano = "ADA", a.IOTA = "IOTA", a.Tezos = "XTZ", a.NEO = "NEO", a.TRON = "TRX", a.EOSClassic = "EOSC", a.Ontology = "ONT", a.VeChain = "VEN", a.QTUM = "QTUM", a.Lisk = "LSK", a.Waves = "WAVES", a.OmiseGO = "OMG", a.Zilliqa = "ZIL", a.BitcoinGold = "BTG", a.Decred = "DCR", a.Stratis = "STRAT", a.Populous = "PPT", a.Augur = "REP", a.Golem = "GNT", a.Siacoin = "SC", a.BasicAttentionToken = "BAT", a.ZCoin = "XZC", a.StratisHedged = "SNT", a.VeChainHedged = "VEN", a.PowerLedger = "POWR", a.WavesHedged = "WAVE", a.ZilliqaHedged = "ZRX", a.BitcoinDiamond = "BCD", a.DigiByte = "DGB", a.DigiByteHedged = "DGB", a.Bytecoin = "BCN", a.BytecoinHedged = "BCN";
})(Me || (Me = {}));
var t;
(function(a) {
  a.Afrikaans = "af", a.Albanian = "sq", a.Amharic = "am", a.Arabic = "ar", a.Armenian = "hy", a.Azerbaijani = "az", a.Bashkir = "ba", a.Basque = "eu", a.Belarusian = "be", a.Bengali = "bn", a.Berber = "ber", a.Bhutani = "dz", a.Bihari = "bh", a.Bislama = "bi", a.Bosnian = "bs", a.Breten = "br", a.Bulgarian = "bg", a.Burmese = "my", a.Cantonese = "yue", a.Catalan = "ca", a.Chinese = "zh", a.Chuvash = "cv", a.Corsican = "co", a.Croatian = "hr", a.Czech = "cs", a.Danish = "da", a.Dari = "prs", a.Divehi = "dv", a.Dutch = "nl", a.English = "en", a.Esperanto = "eo", a.Estonian = "et", a.Faroese = "fo", a.Farsi = "fa", a.Filipino = "fil", a.Finnish = "fi", a.French = "fr", a.Frisian = "fy", a.Galician = "gl", a.Georgian = "ka", a.German = "de", a.Greek = "el", a.Greenlandic = "kl", a.Gujarati = "gu", a.Haitian = "ht", a.Hausa = "ha", a.Hebrew = "he", a.Hindi = "hi", a.Hungarian = "hu", a.Icelandic = "is", a.Igbo = "ig", a.Indonesian = "id", a.Irish = "ga", a.Italian = "it", a.Japanese = "ja", a.Javanese = "jv", a.Kannada = "kn", a.Karelian = "krl", a.Kazakh = "kk", a.Khmer = "km", a.Komi = "kv", a.Konkani = "kok", a.Korean = "ko", a.Kurdish = "ku", a.Kyrgyz = "ky", a.Lao = "lo", a.Latin = "la", a.Latvian = "lv", a.Lithuanian = "lt", a.Luxembourgish = "lb", a.Ossetian = "os", a.Macedonian = "mk", a.Malagasy = "mg", a.Malay = "ms", a.Malayalam = "ml", a.Maltese = "mt", a.Maori = "mi", a.Marathi = "mr", a.Mari = "mhr", a.Mongolian = "mn", a.Montenegrin = "me", a.Nepali = "ne", a.NorthernSotho = "nso", a.Norwegian = "no", a.NorwegianBokmal = "nb", a.NorwegianNynorsk = "nn", a.Oriya = "or", a.Pashto = "ps", a.Persian = "fa", a.Polish = "pl", a.Portuguese = "pt", a.Punjabi = "pa", a.Quechua = "qu", a.Romanian = "ro", a.Russian = "ru", a.Sakha = "sah", a.Sami = "se", a.Samoan = "sm", a.Sanskrit = "sa", a.Scots = "gd", a.Serbian = "sr", a.SerbianCyrillic = "sr-Cyrl", a.Sesotho = "st", a.Shona = "sn", a.Sindhi = "sd", a.Sinhala = "si", a.Slovak = "sk", a.Slovenian = "sl", a.Somali = "so", a.Spanish = "es", a.Sudanese = "su", a.Sutu = "sx", a.Swahili = "sw", a.Swedish = "sv", a.Syriac = "syr", a.Tagalog = "tl", a.Tajik = "tg", a.Tamazight = "tmh", a.Tamil = "ta", a.Tatar = "tt", a.Telugu = "te", a.Thai = "th", a.Tibetan = "bo", a.Tsonga = "ts", a.Tswana = "tn", a.Turkish = "tr", a.Turkmen = "tk", a.Ukrainian = "uk", a.Urdu = "ur", a.Uzbek = "uz", a.Vietnamese = "vi", a.Welsh = "cy", a.Xhosa = "xh", a.Yiddish = "yi", a.Yoruba = "yo", a.Zulu = "zu";
})(t || (t = {}));
var e;
(function(a) {
  a.Afrikaans = "af", a.AfrikaansSouthAfrica = "af-ZA", a.Albanian = "sq", a.AlbanianAlbania = "sq-AL", a.Amharic = "am", a.AmharicEthiopia = "am-ET", a.Arabic = "ar", a.ArabicAlgeria = "ar-DZ", a.ArabicBahrain = "ar-BH", a.ArabicEgypt = "ar-EG", a.ArabicIraq = "ar-IQ", a.ArabicJordan = "ar-JO", a.ArabicKuwait = "ar-KW", a.ArabicLebanon = "ar-LB", a.ArabicLibya = "ar-LY", a.ArabicMorocco = "ar-MA", a.ArabicOman = "ar-OM", a.ArabicQatar = "ar-QA", a.ArabicSaudiArabia = "ar-SA", a.ArabicSyria = "ar-SY", a.ArabicTunisia = "ar-TN", a.ArabicUnitedArabEmirates = "ar-AE", a.ArabicYemen = "ar-YE", a.Armenian = "hy", a.ArmenianArmenia = "hy-AM", a.Azerbaijani = "az", a.AzerbaijaniAzerbaijan = "az-AZ", a.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", a.Bashkir = "ba", a.Basque = "eu", a.BasqueSpain = "eu-ES", a.Belarusian = "be", a.BelarusianBelarus = "be-BY", a.Bengali = "bn", a.BengaliBangladesh = "bn-BD", a.BengaliIndia = "bn-IN", a.Berber = "ber", a.Bhutani = "dz", a.BhutaniBhutan = "dz-BT", a.Bosnian = "bs", a.BosnianBosniaAndHerzegovina = "bs-BA", a.Breton = "br", a.Bulgarian = "bg", a.BulgarianBosniaAndHerzegovina = "bg-BG", a.BulgarianBulgaria = "bg-BG", a.Burmese = "my", a.BurmeseMyanmar = "my-MM", a.Cantonese = "yue", a.CantoneseHongKong = "yue-HK", a.Catalan = "ca", a.CatalanSpain = "ca-ES", a.Chechen = "ce", a.Cherokee = "chr", a.Chinese = "zh", a.ChineseSimplified = "zh-Hans", a.ChineseSimplifiedChina = "zh-Hans-CN", a.ChineseSimplifiedHongKong = "zh-Hans-HK", a.ChineseSimplifiedMacau = "zh-Hans-MO", a.ChineseSimplifiedSingapore = "zh-Hans-SG", a.ChineseTraditional = "zh-Hant", a.ChineseTraditionalHongKong = "zh-Hant-HK", a.ChineseTraditionalMacau = "zh-Hant-MO", a.ChineseTraditionalSingapore = "zh-Hant-SG", a.ChineseTraditionalTaiwan = "zh-Hant-TW", a.Chuvash = "cv", a.CorsicanFrance = "co-FR", a.Croatian = "hr", a.CroatianBosniaAndHerzegovina = "hr-BA", a.CroatianCroatia = "hr-HR", a.Czech = "cs", a.CzechCzechRepublic = "cs-CZ", a.Danish = "da", a.DanishDenmark = "da-DK", a.Dari = "prs", a.DariAfghanistan = "prs-AF", a.Divehi = "dv", a.DivehiMaldives = "dv-MV", a.Dutch = "nl", a.DutchBelgium = "nl-BE", a.DutchNetherlands = "nl-NL", a.English = "en", a.EnglishAustralia = "en-AU", a.EnglishBelgium = "en-BE", a.EnglishBelize = "en-BZ", a.EnglishCanada = "en-CA", a.EnglishCaribbean = "en-029", a.EnglishIreland = "en-IE", a.EnglishJamaica = "en-JM", a.EnglishNewZealand = "en-NZ", a.EnglishPhilippines = "en-PH", a.EnglishSingapore = "en-SG", a.EnglishSouthAfrica = "en-ZA", a.EnglishTrinidadAndTobago = "en-TT", a.EnglishUnitedKingdom = "en-GB", a.EnglishUnitedStates = "en-US", a.EnglishZimbabwe = "en-ZW", a.Esperanto = "eo", a.Estonian = "et", a.EstonianEstonia = "et-EE", a.Faroese = "fo", a.FaroeseFaroeIslands = "fo-FO", a.Farsi = "fa", a.FarsiIran = "fa-IR", a.Filipino = "fil", a.FilipinoPhilippines = "fil-PH", a.Finnish = "fi", a.FinnishFinland = "fi-FI", a.French = "fr", a.FrenchBelgium = "fr-BE", a.FrenchCanada = "fr-CA", a.FrenchFrance = "fr-FR", a.FrenchLuxembourg = "fr-LU", a.FrenchMonaco = "fr-MC", a.FrenchReunion = "fr-RE", a.FrenchSwitzerland = "fr-CH", a.Frisian = "fy", a.FrisianNetherlands = "fy-NL", a.Galician = "gl", a.GalicianSpain = "gl-ES", a.Georgian = "ka", a.GeorgianGeorgia = "ka-GE", a.German = "de", a.GermanAustria = "de-AT", a.GermanBelgium = "de-BE", a.GermanGermany = "de-DE", a.GermanLiechtenstein = "de-LI", a.GermanLuxembourg = "de-LU", a.GermanSwitzerland = "de-CH", a.Greenlandic = "kl", a.GreenlandicGreenland = "kl-GL", a.Greek = "el", a.GreekGreece = "el-GR", a.Gujarati = "gu", a.GujaratiIndia = "gu-IN", a.Haitian = "ht", a.Hausa = "ha", a.HausaGhana = "ha-GH", a.HausaNiger = "ha-NE", a.HausaNigeria = "ha-NG", a.Hebrew = "he", a.HebrewIsrael = "he-IL", a.Hindi = "hi", a.HindiIndia = "hi-IN", a.Hungarian = "hu", a.HungarianHungary = "hu-HU", a.Icelandic = "is", a.IcelandicIceland = "is-IS", a.Igbo = "ig", a.IgboNigeria = "ig-NG", a.Indonesian = "id", a.IndonesianIndonesia = "id-ID", a.Irish = "ga", a.IrishIreland = "ga-IE", a.Italian = "it", a.ItalianItaly = "it-IT", a.ItalianSwitzerland = "it-CH", a.Japanese = "ja", a.JapaneseJapan = "ja-JP", a.Javanese = "jv", a.Kannada = "kn", a.KannadaIndia = "kn-IN", a.Karelian = "krl", a.Kazakh = "kk", a.KazakhKazakhstan = "kk-KZ", a.Khmer = "km", a.KhmerCambodia = "km-KH", a.KinyarwandaRwanda = "rw-RW", a.Komi = "kv", a.Konkani = "kok", a.KonkaniIndia = "kok-IN", a.Korean = "ko", a.KoreanSouthKorea = "ko-KR", a.Kurdish = "ku", a.KurdishIraq = "ku-IQ", a.KurdishTurkey = "ku-TR", a.Kyrgyz = "ky", a.KyrgyzKyrgyzstan = "ky-KG", a.Lao = "lo", a.LaoLaos = "lo-LA", a.Latin = "la", a.Latvian = "lv", a.LatvianLatvia = "lv-LV", a.Lithuanian = "lt", a.LithuanianLithuania = "lt-LT", a.Luxembourgish = "lb", a.LuxembourgishBelgium = "lb-LU", a.LuxembourgishLuxembourg = "lb-LU", a.Macedonian = "mk", a.MacedonianNorthMacedonia = "mk-MK", a.Malagasy = "mg", a.Malay = "ms", a.MalayBrunei = "ms-BN", a.MalayIndia = "ms-IN", a.MalayMalaysia = "ms-MY", a.MalaySingapore = "ms-SG", a.Malayalam = "ml", a.MalayalamIndia = "ml-IN", a.Maltese = "mt", a.MalteseMalta = "mt-MT", a.Maori = "mi", a.MaoriNewZealand = "mi-NZ", a.Marathi = "mr", a.MarathiIndia = "mr-IN", a.Mari = "chm", a.Mongolian = "mn", a.MongolianMongolia = "mn-MN", a.Montenegrin = "me", a.MontenegrinMontenegro = "me-ME", a.Nepali = "ne", a.NepaliNepal = "ne-NP", a.NorthernSotho = "ns", a.NorthernSothoSouthAfrica = "ns-ZA", a.Norwegian = "nb", a.NorwegianBokmalNorway = "nb-NO", a.NorwegianNynorskNorway = "nn-NO", a.Oriya = "or", a.OriyaIndia = "or-IN", a.Ossetian = "os", a.Pashto = "ps", a.PashtoAfghanistan = "ps-AF", a.Persian = "fa", a.PersianIran = "fa-IR", a.Polish = "pl", a.PolishPoland = "pl-PL", a.Portuguese = "pt", a.PortugueseBrazil = "pt-BR", a.PortuguesePortugal = "pt-PT", a.Punjabi = "pa", a.PunjabiIndia = "pa-IN", a.PunjabiPakistan = "pa-PK", a.Quechua = "qu", a.QuechuaBolivia = "qu-BO", a.QuechuaEcuador = "qu-EC", a.QuechuaPeru = "qu-PE", a.Romanian = "ro", a.RomanianRomania = "ro-RO", a.Russian = "ru", a.RussianKazakhstan = "ru-KZ", a.RussianKyrgyzstan = "ru-KG", a.RussianRussia = "ru-RU", a.RussianUkraine = "ru-UA", a.Sakha = "sah", a.Sanskrit = "sa", a.SanskritIndia = "sa-IN", a.Sami = "se", a.SamiNorway = "se-NO", a.SamiSweden = "se-SE", a.SamiFinland = "se-FI", a.Samoan = "sm", a.SamoanSamoa = "sm-WS", a.Scots = "gd", a.Serbian = "sr", a.SerbianBosniaAndHerzegovina = "sr-BA", a.SerbianSerbiaAndMontenegro = "sr-SP", a.SerbianCyrillic = "sr-SP-Cyrl", a.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", a.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", a.Sesotho = "st", a.SesothoSouthAfrica = "st-ZA", a.Shona = "sn", a.ShonaZimbabwe = "sn-ZW", a.Sindhi = "sd", a.SindhiPakistan = "sd-PK", a.Sinhala = "si", a.SinhalaSriLanka = "si-LK", a.Slovak = "sk", a.SlovakSlovakia = "sk-SK", a.Slovenian = "sl", a.SlovenianSlovenia = "sl-SI", a.Somali = "so", a.SomaliSomalia = "so-SO", a.Spanish = "es", a.SpanishArgentina = "es-AR", a.SpanishBolivia = "es-BO", a.SpanishChile = "es-CL", a.SpanishColombia = "es-CO", a.SpanishCostaRica = "es-CR", a.SpanishCuba = "es-CU", a.SpanishDominicanRepublic = "es-DO", a.SpanishEcuador = "es-EC", a.SpanishEquatorialGuinea = "es-GQ", a.SpanishElSalvador = "es-SV", a.SpanishGuatemala = "es-GT", a.SpanishHonduras = "es-HN", a.SpanishMexico = "es-MX", a.SpanishNicaragua = "es-NI", a.SpanishPanama = "es-PA", a.SpanishParaguay = "es-PY", a.SpanishPeru = "es-PE", a.SpanishPuertoRico = "es-PR", a.SpanishSpain = "es-ES", a.SpanishUnitedStates = "es-US", a.SpanishUruguay = "es-UY", a.SpanishVenezuela = "es-VE", a.Sudanese = "su", a.Sutu = "st", a.SutuSouthAfrica = "st-ZA", a.Swahili = "sw", a.SwahiliKenya = "sw-KE", a.Swedish = "sv", a.SwedishFinland = "sv-FI", a.SwedishSweden = "sv-SE", a.Syriac = "syr", a.SyriacSyria = "syr-SY", a.Tajik = "tg", a.TajikTajikistan = "tg-TJ", a.Tagalog = "tl", a.TagalogPhilippines = "tl-PH", a.Tamazight = "tmh", a.Tamil = "ta", a.TamilIndia = "ta-IN", a.Tatar = "tt", a.Telugu = "te", a.TeluguIndia = "te-IN", a.Thai = "th", a.ThaiThailand = "th-TH", a.Tibetan = "bo", a.TibetanBhutan = "bo-BT", a.TibetanChina = "bo-CN", a.TibetanIndia = "bo-IN", a.Tsonga = "ts", a.Tswana = "tn", a.TswanaSouthAfrica = "tn-ZA", a.Turkish = "tr", a.TurkishTurkey = "tr-TR", a.Turkmen = "tk", a.Ukrainian = "uk", a.UkrainianUkraine = "uk-UA", a.Urdu = "ur", a.UrduAfghanistan = "ur-AF", a.UrduIndia = "ur-IN", a.UrduPakistan = "ur-PK", a.Uzbek = "uz", a.UzbekCyrillic = "uz-Cyrl-UZ", a.UzbekLatin = "uz-Latn-UZ", a.UzbekUzbekistan = "uz-UZ", a.Vietnamese = "vi", a.VietnameseVietnam = "vi-VN", a.Welsh = "cy", a.WelshUnitedKingdom = "cy-GB", a.Xhosa = "xh", a.XhosaSouthAfrica = "xh-ZA", a.Yiddish = "yi", a.Yoruba = "yo", a.YorubaNigeria = "yo-NG", a.ZhuyinMandarinChina = "yue-Hant-CN", a.Zulu = "zu", a.ZuluSouthAfrica = "zu-ZA";
})(e || (e = {}));
var u$1;
(function(a) {
  a.AfricaAbidjan = "Africa/Abidjan", a.AfricaAccra = "Africa/Accra", a.AfricaAddisAbaba = "Africa/Addis_Ababa", a.AfricaAlgiers = "Africa/Algiers", a.AfricaAsmara = "Africa/Asmara", a.AfricaBamako = "Africa/Bamako", a.AfricaBangui = "Africa/Bangui", a.AfricaBanjul = "Africa/Banjul", a.AfricaBissau = "Africa/Bissau", a.AfricaBlantyre = "Africa/Blantyre", a.AfricaBrazzaville = "Africa/Brazzaville", a.AfricaBujumbura = "Africa/Bujumbura", a.AfricaCairo = "Africa/Cairo", a.AfricaCasablanca = "Africa/Casablanca", a.AfricaCeuta = "Africa/Ceuta", a.AfricaConakry = "Africa/Conakry", a.AfricaDakar = "Africa/Dakar", a.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", a.AfricaDjibouti = "Africa/Djibouti", a.AfricaDouala = "Africa/Douala", a.AfricaElAaiun = "Africa/El_Aaiun", a.AfricaFreetown = "Africa/Freetown", a.AfricaGaborone = "Africa/Gaborone", a.AfricaHarare = "Africa/Harare", a.AfricaJohannesburg = "Africa/Johannesburg", a.AfricaJuba = "Africa/Juba", a.AfricaKampala = "Africa/Kampala", a.AfricaKhartoum = "Africa/Khartoum", a.AfricaKigali = "Africa/Kigali", a.AfricaKinshasa = "Africa/Kinshasa", a.AfricaLagos = "Africa/Lagos", a.AfricaLibreville = "Africa/Libreville", a.AfricaLome = "Africa/Lome", a.AfricaLuanda = "Africa/Luanda", a.AfricaLubumbashi = "Africa/Lubumbashi", a.AfricaLusaka = "Africa/Lusaka", a.AfricaMalabo = "Africa/Malabo", a.AfricaMaputo = "Africa/Maputo", a.AfricaMaseru = "Africa/Maseru", a.AfricaMbabane = "Africa/Mbabane", a.AfricaMogadishu = "Africa/Mogadishu", a.AfricaMonrovia = "Africa/Monrovia", a.AfricaNairobi = "Africa/Nairobi", a.AfricaNdjamena = "Africa/Ndjamena", a.AfricaNiamey = "Africa/Niamey", a.AfricaNouakchott = "Africa/Nouakchott", a.AfricaOuagadougou = "Africa/Ouagadougou", a.AfricaPortoNovo = "Africa/Porto-Novo", a.AfricaSaoTome = "Africa/Sao_Tome", a.AfricaTripoli = "Africa/Tripoli", a.AfricaTunis = "Africa/Tunis", a.AfricaWindhoek = "Africa/Windhoek", a.AmericaAdak = "America/Adak", a.AmericaAnchorage = "America/Anchorage", a.AmericaAnguilla = "America/Anguilla", a.AmericaAntigua = "America/Antigua", a.AmericaAraguaina = "America/Araguaina", a.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", a.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", a.AmericaArgentinaCordoba = "America/Argentina/Cordoba", a.AmericaArgentinaJujuy = "America/Argentina/Jujuy", a.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", a.AmericaArgentinaMendoza = "America/Argentina/Mendoza", a.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", a.AmericaArgentinaSalta = "America/Argentina/Salta", a.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", a.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", a.AmericaArgentinaTucuman = "America/Argentina/Tucuman", a.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", a.AmericaAruba = "America/Aruba", a.AmericaAsuncion = "America/Asuncion", a.AmericaAtikokan = "America/Atikokan", a.AmericaAtka = "America/Atka", a.AmericaBahia = "America/Bahia", a.AmericaBahiaBanderas = "America/Bahia_Banderas", a.AmericaBarbados = "America/Barbados", a.AmericaBelem = "America/Belem", a.AmericaBelize = "America/Belize", a.AmericaBlancSablon = "America/Blanc-Sablon", a.AmericaBoaVista = "America/Boa_Vista", a.AmericaBogota = "America/Bogota", a.AmericaBoise = "America/Boise", a.AmericaCambridgeBay = "America/Cambridge_Bay", a.AmericaCampoGrande = "America/Campo_Grande", a.AmericaCancun = "America/Cancun", a.AmericaCaracas = "America/Caracas", a.AmericaCayenne = "America/Cayenne", a.AmericaCayman = "America/Cayman", a.AmericaChicago = "America/Chicago", a.AmericaChihuahua = "America/Chihuahua", a.AmericaCoralHarbour = "America/Coral_Harbour", a.AmericaCordoba = "America/Cordoba", a.AmericaCostaRica = "America/Costa_Rica", a.AmericaCreston = "America/Creston", a.AmericaCuiaba = "America/Cuiaba", a.AmericaCuracao = "America/Curacao", a.AmericaDanmarkshavn = "America/Danmarkshavn", a.AmericaDawson = "America/Dawson", a.AmericaDawsonCreek = "America/Dawson_Creek", a.AmericaDenver = "America/Denver", a.AmericaDetroit = "America/Detroit", a.AmericaDominica = "America/Dominica", a.AmericaEdmonton = "America/Edmonton", a.AmericaEirunepe = "America/Eirunepe", a.AmericaElSalvador = "America/El_Salvador", a.AmericaFortaleza = "America/Fortaleza", a.AmericaGlaceBay = "America/Glace_Bay", a.AmericaGodthab = "America/Godthab", a.AmericaGooseBay = "America/Goose_Bay", a.AmericaGrandTurk = "America/Grand_Turk", a.AmericaGrenada = "America/Grenada", a.AmericaGuadeloupe = "America/Guadeloupe", a.AmericaGuatemala = "America/Guatemala", a.AmericaGuayaquil = "America/Guayaquil", a.AmericaGuyana = "America/Guyana", a.AmericaHalifax = "America/Halifax", a.AmericaHavana = "America/Havana", a.AmericaHermosillo = "America/Hermosillo", a.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", a.AmericaIndianaKnox = "America/Indiana/Knox", a.AmericaIndianaMarengo = "America/Indiana/Marengo", a.AmericaIndianaPetersburg = "America/Indiana/Petersburg", a.AmericaIndianaTellCity = "America/Indiana/Tell_City", a.AmericaIndianaVevay = "America/Indiana/Vevay", a.AmericaIndianaVincennes = "America/Indiana/Vincennes", a.AmericaIndianaWinamac = "America/Indiana/Winamac", a.AmericaInuvik = "America/Inuvik", a.AmericaIqaluit = "America/Iqaluit", a.AmericaJamaica = "America/Jamaica", a.AmericaJuneau = "America/Juneau", a.AmericaKentuckyLouisville = "America/Kentucky/Louisville", a.AmericaKentuckyMonticello = "America/Kentucky/Monticello", a.AmericaKralendijk = "America/Kralendijk", a.AmericaLaPaz = "America/La_Paz", a.AmericaLima = "America/Lima", a.AmericaLosAngeles = "America/Los_Angeles", a.AmericaLouisville = "America/Louisville", a.AmericaLowerPrinces = "America/Lower_Princes", a.AmericaMaceio = "America/Maceio", a.AmericaManagua = "America/Managua", a.AmericaManaus = "America/Manaus", a.AmericaMarigot = "America/Marigot", a.AmericaMartinique = "America/Martinique", a.AmericaMatamoros = "America/Matamoros", a.AmericaMazatlan = "America/Mazatlan", a.AmericaMenominee = "America/Menominee", a.AmericaMerida = "America/Merida", a.AmericaMetlakatla = "America/Metlakatla", a.AmericaMexicoCity = "America/Mexico_City", a.AmericaMiquelon = "America/Miquelon", a.AmericaMoncton = "America/Moncton", a.AmericaMonterrey = "America/Monterrey", a.AmericaMontevideo = "America/Montevideo", a.AmericaMontserrat = "America/Montserrat", a.AmericaMontreal = "America/Montreal", a.AmericaNassau = "America/Nassau", a.AmericaNewYork = "America/New_York", a.AmericaNipigon = "America/Nipigon", a.AmericaNome = "America/Nome", a.AmericaNoronha = "America/Noronha", a.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", a.AmericaNorthDakotaCenter = "America/North_Dakota/Center", a.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", a.AmericaOjinaga = "America/Ojinaga", a.AmericaPanama = "America/Panama", a.AmericaPangnirtung = "America/Pangnirtung", a.AmericaParamaribo = "America/Paramaribo", a.AmericaPhoenix = "America/Phoenix", a.AmericaPortAuPrince = "America/Port-au-Prince", a.AmericaPortOfSpain = "America/Port_of_Spain", a.AmericaPortoVelho = "America/Porto_Velho", a.AmericaPuertoRico = "America/Puerto_Rico", a.AmericaRainyRiver = "America/Rainy_River", a.AmericaRankinInlet = "America/Rankin_Inlet", a.AmericaRecife = "America/Recife", a.AmericaRegina = "America/Regina", a.AmericaResolute = "America/Resolute", a.AmericaRioBranco = "America/Rio_Branco", a.AmericaSantaIsabel = "America/Santa_Isabel", a.AmericaSantarem = "America/Santarem", a.AmericaSantiago = "America/Santiago", a.AmericaSantoDomingo = "America/Santo_Domingo", a.AmericaSaoPaulo = "America/Sao_Paulo", a.AmericaScoresbysund = "America/Scoresbysund", a.AmericaShiprock = "America/Shiprock", a.AmericaSitka = "America/Sitka", a.AmericaStBarthelemy = "America/St_Barthelemy", a.AmericaStJohns = "America/St_Johns", a.AmericaStKitts = "America/St_Kitts", a.AmericaStLucia = "America/St_Lucia", a.AmericaStThomas = "America/St_Thomas", a.AmericaStVincent = "America/St_Vincent", a.AmericaSwiftCurrent = "America/Swift_Current", a.AmericaTegucigalpa = "America/Tegucigalpa", a.AmericaThule = "America/Thule", a.AmericaThunderBay = "America/Thunder_Bay", a.AmericaTijuana = "America/Tijuana", a.AmericaToronto = "America/Toronto", a.AmericaTortola = "America/Tortola", a.AmericaVancouver = "America/Vancouver", a.AmericaWhitehorse = "America/Whitehorse", a.AmericaWinnipeg = "America/Winnipeg", a.AmericaYakutat = "America/Yakutat", a.AmericaYellowknife = "America/Yellowknife", a.AntarcticaCasey = "Antarctica/Casey", a.AntarcticaDavis = "Antarctica/Davis", a.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", a.AntarcticaMacquarie = "Antarctica/Macquarie", a.AntarcticaMawson = "Antarctica/Mawson", a.AntarcticaMcMurdo = "Antarctica/McMurdo", a.AntarcticaPalmer = "Antarctica/Palmer", a.AntarcticaRothera = "Antarctica/Rothera", a.AntarcticaSyowa = "Antarctica/Syowa", a.AntarcticaTroll = "Antarctica/Troll", a.AntarcticaVostok = "Antarctica/Vostok", a.ArcticLongyearbyen = "Arctic/Longyearbyen", a.AsiaAden = "Asia/Aden", a.AsiaAlmaty = "Asia/Almaty", a.AsiaAmman = "Asia/Amman", a.AsiaAnadyr = "Asia/Anadyr", a.AsiaAqtau = "Asia/Aqtau", a.AsiaAqtobe = "Asia/Aqtobe", a.AsiaAshgabat = "Asia/Ashgabat", a.AsiaBaghdad = "Asia/Baghdad", a.AsiaBahrain = "Asia/Bahrain", a.AsiaBaku = "Asia/Baku", a.AsiaBangkok = "Asia/Bangkok", a.AsiaBarnaul = "Asia/Barnaul", a.AsiaBeirut = "Asia/Beirut", a.AsiaBishkek = "Asia/Bishkek", a.AsiaBrunei = "Asia/Brunei", a.AsiaChita = "Asia/Chita", a.AsiaChoibalsan = "Asia/Choibalsan", a.AsiaColombo = "Asia/Colombo", a.AsiaDamascus = "Asia/Damascus", a.AsiaDhaka = "Asia/Dhaka", a.AsiaDili = "Asia/Dili", a.AsiaDubai = "Asia/Dubai", a.AsiaDushanbe = "Asia/Dushanbe", a.AsiaFamagusta = "Asia/Famagusta", a.AsiaGaza = "Asia/Gaza", a.AsiaHebron = "Asia/Hebron", a.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", a.AsiaHongKong = "Asia/Hong_Kong", a.AsiaHovd = "Asia/Hovd", a.AsiaIrkutsk = "Asia/Irkutsk", a.AsiaJakarta = "Asia/Jakarta", a.AsiaJayapura = "Asia/Jayapura", a.AsiaJerusalem = "Asia/Jerusalem", a.AsiaKabul = "Asia/Kabul", a.AsiaKamchatka = "Asia/Kamchatka", a.AsiaKarachi = "Asia/Karachi", a.AsiaKathmandu = "Asia/Kathmandu", a.AsiaKhandyga = "Asia/Khandyga", a.AsiaKolkata = "Asia/Kolkata", a.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", a.AsiaKualaLumpur = "Asia/Kuala_Lumpur", a.AsiaKuching = "Asia/Kuching", a.AsiaKuwait = "Asia/Kuwait", a.AsiaMacau = "Asia/Macau", a.AsiaMagadan = "Asia/Magadan", a.AsiaMakassar = "Asia/Makassar", a.AsiaManila = "Asia/Manila", a.AsiaMuscat = "Asia/Muscat", a.AsiaNicosia = "Asia/Nicosia", a.AsiaNovokuznetsk = "Asia/Novokuznetsk", a.AsiaNovosibirsk = "Asia/Novosibirsk", a.AsiaOmsk = "Asia/Omsk", a.AsiaOral = "Asia/Oral", a.AsiaPhnomPenh = "Asia/Phnom_Penh", a.AsiaPontianak = "Asia/Pontianak", a.AsiaPyongyang = "Asia/Pyongyang", a.AsiaQatar = "Asia/Qatar", a.AsiaQyzylorda = "Asia/Qyzylorda", a.AsiaRangoon = "Asia/Rangoon", a.AsiaRiyadh = "Asia/Riyadh", a.AsiaSakhalin = "Asia/Sakhalin", a.AsiaSamarkand = "Asia/Samarkand", a.AsiaSeoul = "Asia/Seoul", a.AsiaShanghai = "Asia/Shanghai", a.AsiaSingapore = "Asia/Singapore", a.AsiaSrednekolymsk = "Asia/Srednekolymsk", a.AsiaTaipei = "Asia/Taipei", a.AsiaTashkent = "Asia/Tashkent", a.AsiaTbilisi = "Asia/Tbilisi", a.AsiaTehran = "Asia/Tehran", a.AsiaThimphu = "Asia/Thimphu", a.AsiaTokyo = "Asia/Tokyo", a.AsiaTomsk = "Asia/Tomsk", a.AsiaUlaanbaatar = "Asia/Ulaanbaatar", a.AsiaUrumqi = "Asia/Urumqi", a.AsiaUstNera = "Asia/Ust-Nera", a.AsiaVientiane = "Asia/Vientiane", a.AsiaVladivostok = "Asia/Vladivostok", a.AsiaYakutsk = "Asia/Yakutsk", a.AsiaYekaterinburg = "Asia/Yekaterinburg", a.AsiaYerevan = "Asia/Yerevan", a.AtlanticAzores = "Atlantic/Azores", a.AtlanticBermuda = "Atlantic/Bermuda", a.AtlanticCanary = "Atlantic/Canary", a.AtlanticCapeVerde = "Atlantic/Cape_Verde", a.AtlanticFaroe = "Atlantic/Faroe", a.AtlanticMadeira = "Atlantic/Madeira", a.AtlanticReykjavik = "Atlantic/Reykjavik", a.AtlanticSouthGeorgia = "Atlantic/South_Georgia", a.AtlanticStHelena = "Atlantic/St_Helena", a.AtlanticStanley = "Atlantic/Stanley", a.AustraliaAdelaide = "Australia/Adelaide", a.AustraliaBrisbane = "Australia/Brisbane", a.AustraliaBrokenHill = "Australia/Broken_Hill", a.AustraliaCanberra = "Australia/Canberra", a.AustraliaCurrie = "Australia/Currie", a.AustraliaDarwin = "Australia/Darwin", a.AustraliaEucla = "Australia/Eucla", a.AustraliaHobart = "Australia/Hobart", a.AustraliaLindeman = "Australia/Lindeman", a.AustraliaLordHowe = "Australia/Lord_Howe", a.AustraliaMelbourne = "Australia/Melbourne", a.AustraliaPerth = "Australia/Perth", a.AustraliaSydney = "Australia/Sydney", a.EuropeAmsterdam = "Europe/Amsterdam", a.EuropeAndorra = "Europe/Andorra", a.EuropeAthens = "Europe/Athens", a.EuropeBelgrade = "Europe/Belgrade", a.EuropeBerlin = "Europe/Berlin", a.EuropeBratislava = "Europe/Bratislava", a.EuropeBrussels = "Europe/Brussels", a.EuropeBucharest = "Europe/Bucharest", a.EuropeBudapest = "Europe/Budapest", a.EuropeBusingen = "Europe/Busingen", a.EuropeChisinau = "Europe/Chisinau", a.EuropeCopenhagen = "Europe/Copenhagen", a.EuropeDublin = "Europe/Dublin", a.EuropeGibraltar = "Europe/Gibraltar", a.EuropeGuernsey = "Europe/Guernsey", a.EuropeHelsinki = "Europe/Helsinki", a.EuropeIsleOfMan = "Europe/Isle_of_Man", a.EuropeIstanbul = "Europe/Istanbul", a.EuropeJersey = "Europe/Jersey", a.EuropeKaliningrad = "Europe/Kaliningrad", a.EuropeKiev = "Europe/Kiev", a.EuropeKirov = "Europe/Kirov", a.EuropeLisbon = "Europe/Lisbon", a.EuropeLjubljana = "Europe/Ljubljana", a.EuropeLondon = "Europe/London", a.EuropeLuxembourg = "Europe/Luxembourg", a.EuropeMadrid = "Europe/Madrid", a.EuropeMalta = "Europe/Malta", a.EuropeMariehamn = "Europe/Mariehamn", a.EuropeMinsk = "Europe/Minsk", a.EuropeMonaco = "Europe/Monaco", a.EuropeMoscow = "Europe/Moscow", a.EuropeOslo = "Europe/Oslo", a.EuropeParis = "Europe/Paris", a.EuropePodgorica = "Europe/Podgorica", a.EuropePrague = "Europe/Prague", a.EuropeRiga = "Europe/Riga", a.EuropeRome = "Europe/Rome", a.EuropeSamara = "Europe/Samara", a.EuropeSanMarino = "Europe/San_Marino", a.EuropeSarajevo = "Europe/Sarajevo", a.EuropeSimferopol = "Europe/Simferopol", a.EuropeSkopje = "Europe/Skopje", a.EuropeSofia = "Europe/Sofia", a.EuropeStockholm = "Europe/Stockholm", a.EuropeTallinn = "Europe/Tallinn", a.EuropeTirane = "Europe/Tirane", a.EuropeUzhgorod = "Europe/Uzhgorod", a.EuropeVaduz = "Europe/Vaduz", a.EuropeVatican = "Europe/Vatican", a.EuropeVienna = "Europe/Vienna", a.EuropeVilnius = "Europe/Vilnius", a.EuropeVolgograd = "Europe/Volgograd", a.EuropeWarsaw = "Europe/Warsaw", a.EuropeZagreb = "Europe/Zagreb", a.EuropeZaporozhye = "Europe/Zaporozhye", a.EuropeZurich = "Europe/Zurich", a.GMT = "GMT", a.IndianAntananarivo = "Indian/Antananarivo", a.IndianChagos = "Indian/Chagos", a.IndianChristmas = "Indian/Christmas", a.IndianCocos = "Indian/Cocos", a.IndianComoro = "Indian/Comoro", a.IndianKerguelen = "Indian/Kerguelen", a.IndianMahe = "Indian/Mahe", a.IndianMaldives = "Indian/Maldives", a.IndianMauritius = "Indian/Mauritius", a.IndianMayotte = "Indian/Mayotte", a.IndianReunion = "Indian/Reunion", a.PacificApia = "Pacific/Apia", a.PacificAuckland = "Pacific/Auckland", a.PacificBougainville = "Pacific/Bougainville", a.PacificChatham = "Pacific/Chatham", a.PacificChuuk = "Pacific/Chuuk", a.PacificEaster = "Pacific/Easter", a.PacificEfate = "Pacific/Efate", a.PacificEnderbury = "Pacific/Enderbury", a.PacificFakaofo = "Pacific/Fakaofo", a.PacificFiji = "Pacific/Fiji", a.PacificFunafuti = "Pacific/Funafuti", a.PacificGalapagos = "Pacific/Galapagos", a.PacificGambier = "Pacific/Gambier", a.PacificGuadalcanal = "Pacific/Guadalcanal", a.PacificGuam = "Pacific/Guam", a.PacificHonolulu = "Pacific/Honolulu", a.PacificJohnston = "Pacific/Johnston", a.PacificKiritimati = "Pacific/Kiritimati", a.PacificKosrae = "Pacific/Kosrae", a.PacificKwajalein = "Pacific/Kwajalein", a.PacificMajuro = "Pacific/Majuro", a.PacificMarquesas = "Pacific/Marquesas", a.PacificMidway = "Pacific/Midway", a.PacificNauru = "Pacific/Nauru", a.PacificNiue = "Pacific/Niue", a.PacificNorfolk = "Pacific/Norfolk", a.PacificNoumea = "Pacific/Noumea", a.PacificPagoPago = "Pacific/Pago_Pago", a.PacificPalau = "Pacific/Palau", a.PacificPitcairn = "Pacific/Pitcairn", a.PacificPohnpei = "Pacific/Pohnpei", a.PacificPonape = "Pacific/Ponape", a.PacificPortMoresby = "Pacific/Port_Moresby", a.PacificRarotonga = "Pacific/Rarotonga", a.PacificSaipan = "Pacific/Saipan", a.PacificSamoa = "Pacific/Samoa", a.PacificTahiti = "Pacific/Tahiti", a.PacificTarawa = "Pacific/Tarawa", a.PacificTongatapu = "Pacific/Tongatapu", a.PacificTruk = "Pacific/Truk", a.PacificWake = "Pacific/Wake", a.PacificWallis = "Pacific/Wallis", a.PacificYap = "Pacific/Yap";
})(u$1 || (u$1 = {}));
var n$1;
(function(a) {
  a.UTC_MINUS_12 = "UTC-12", a.UTC_MINUS_11_30 = "UTC-11:30", a.UTC_MINUS_11 = "UTC-11", a.UTC_MINUS_10_30 = "UTC-10:30", a.UTC_MINUS_10 = "UTC-10", a.UTC_MINUS_9_30 = "UTC-9:30", a.UTC_MINUS_9 = "UTC-09", a.UTC_MINUS_8_45 = "UTC-8:45", a.UTC_MINUS_8 = "UTC-08", a.UTC_MINUS_7 = "UTC-07", a.UTC_MINUS_6_30 = "UTC-6:30", a.UTC_MINUS_6 = "UTC-06", a.UTC_MINUS_5_45 = "UTC-5:45", a.UTC_MINUS_5_30 = "UTC-5:30", a.UTC_MINUS_5 = "UTC-05", a.UTC_MINUS_4_30 = "UTC-4:30", a.UTC_MINUS_4 = "UTC-04", a.UTC_MINUS_3_30 = "UTC-3:30", a.UTC_MINUS_3 = "UTC-03", a.UTC_MINUS_2_30 = "UTC-2:30", a.UTC_MINUS_2 = "UTC-02", a.UTC_MINUS_1 = "UTC-01", a.UTC_0 = "UTC+00", a.UTC_PLUS_1 = "UTC+01", a.UTC_PLUS_2 = "UTC+02", a.UTC_PLUS_3 = "UTC+03", a.UTC_PLUS_3_30 = "UTC+3:30", a.UTC_PLUS_4 = "UTC+04", a.UTC_PLUS_4_30 = "UTC+4:30", a.UTC_PLUS_5 = "UTC+05", a.UTC_PLUS_5_30 = "UTC+5:30", a.UTC_PLUS_5_45 = "UTC+5:45", a.UTC_PLUS_6 = "UTC+06", a.UTC_PLUS_6_30 = "UTC+6:30", a.UTC_PLUS_7 = "UTC+07", a.UTC_PLUS_8 = "UTC+08", a.UTC_PLUS_8_45 = "UTC+8:45", a.UTC_PLUS_9 = "UTC+09", a.UTC_PLUS_9_30 = "UTC+9:30", a.UTC_PLUS_10 = "UTC+10", a.UTC_PLUS_10_30 = "UTC+10:30", a.UTC_PLUS_11 = "UTC+11", a.UTC_PLUS_11_30 = "UTC+11:30", a.UTC_PLUS_12 = "UTC+12", a.UTC_PLUS_12_45 = "UTC+12:45", a.UTC_PLUS_13 = "UTC+13", a.UTC_PLUS_13_45 = "UTC+13:45", a.UTC_PLUS_14 = "UTC+14";
})(n$1 || (n$1 = {}));
var s$2;
(function(a) {
  a.AcreTime = "ACT", a.AfghanistanTime = "AFT", a.AIXCentralEuropeanTime = "DFT", a.AlaskaDaylightTime = "AKDT", a.AlaskaStandardTime = "AKST", a.AlmaAtaTime = "ALMT", a.AmazonSummerTime = "AMST", a.AmazonTime = "AMT", a.AnadyrTime = "ANAT", a.AqtobeTime = "AQTT", a.ArabiaStandardTime = "AST", a.ArgentinaTime = "ART", a.ArmeniaTime = "AMT", a.ASEANCommonTime = "ASEAN", a.AtlanticDaylightTime = "ADT", a.AtlanticStandardTime = "AST", a.AustralianCentralDaylightSavingTime = "ACDT", a.AustralianCentralStandardTime = "ACST", a.AustralianCentralWesternStandardTime = "ACWST", a.AustralianEasternDaylightSavingTime = "AEDT", a.AustralianEasternStandardTime = "AEST", a.AustralianEasternTime = "AET", a.AustralianWesternStandardTime = "AWST", a.AzerbaijanTime = "AZT", a.AzoresStandardTime = "AZOT", a.AzoresSummerTime = "AZOST", a.BakerIslandTime = "BIT", a.BangladeshStandardTime = "BST", a.BhutanTime = "BTT", a.BoliviaTime = "BOT", a.BougainvilleStandardTime = "BST", a.BrasiliaSummerTime = "BRST", a.BrasiliaTime = "BRT", a.BritishIndianOceanTime = "BIOT", a.BritishSummerTime = "BST", a.BruneiTime = "BNT", a.CapeVerdeTime = "CVT", a.CentralAfricaTime = "CAT", a.CentralDaylightTime = "CDT", a.CentralEuropeanSummerTime = "CEST", a.CentralEuropeanTime = "CET", a.CentralIndonesiaTime = "WITA", a.CentralStandardTime = "CST", a.CentralTime = "CT", a.CentralWesternStandardTime = "CWST", a.ChamorroStandardTime = "CHST", a.ChathamDaylightTime = "CHADT", a.ChathamStandardTime = "CHAST", a.ChileStandardTime = "CLT", a.ChileSummerTime = "CLST", a.ChinaStandardTime = "CST", a.ChoibalsanStandardTime = "CHOT", a.ChoibalsanSummerTime = "CHOST", a.ChristmasIslandTime = "CXT", a.ChuukTime = "CHUT", a.ClipptertonIslandStandardTime = "CIST", a.CocosIslandsTime = "CCT", a.ColombiaSummerTime = "COST", a.ColombiaTime = "COT", a.CookIslandTime = "CKT", a.CoordinatedUniversalTime = "UTC", a.CubaDaylightTime = "CDT", a.CubaStandardTime = "CST", a.DavisTime = "DAVT", a.DumontDUrvilleTime = "DDUT", a.EastAfricaTime = "EAT", a.EasterIslandStandardTime = "EAST", a.EasterIslandSummerTime = "EASST", a.EasternCaribbeanTime = "ECT", a.EasternDaylightTime = "EDT", a.EasternEuropeanSummerTime = "EEST", a.EasternEuropeanTime = "EET", a.EasternGreenlandSummerTime = "EGST", a.EasternGreenlandTime = "EGT", a.EasternIndonesianTime = "WIT", a.EasternStandardTime = "EST", a.EasternTime = "ET", a.EcuadorTime = "ECT", a.FalklandIslandsSummerTime = "FKST", a.FalklandIslandsTime = "FKT", a.FernandoDeNoronhaTime = "FNT", a.FijiTime = "FJT", a.FrenchGuianaTime = "GFT", a.FrenchSouthernAndAntarcticTime = "TFT", a.FurtherEasternEuropeanTime = "FET", a.GalapagosTime = "GALT", a.GambierIslandTime = "GIT", a.GambierIslandsTime = "GAMT", a.GeorgiaStandardTime = "GET", a.GilbertIslandTime = "GILT", a.GreenwichMeanTime = "GMT", a.GulfStandardTime = "GST", a.GuyanaTime = "GYT", a.HawaiiAleutianDaylightTime = "HDT", a.HawaiiAleutianStandardTime = "HST", a.HeardAndMcDonaldIslandsTime = "HMT", a.HeureAvanceeDEuropeCentraleTime = "HAEC", a.HongKongTime = "HKT", a.HovdSummerTime = "HOVST", a.HovdTime = "HOVT", a.IndianOceanTime = "IOT", a.IndianStandardTime = "IST", a.IndochinaTime = "ICT", a.InternationalDayLineWestTime = "IDLW", a.IranDaylightTime = "IRDT", a.IranStandardTime = "IRST", a.IrishStandardTime = "IST", a.IrkutskSummerTime = "IRKST", a.IrkutskTime = "IRKT", a.IsraelDaylightTime = "IDT", a.IsraelStandardTime = "IST", a.JapanStandardTime = "JST", a.KaliningradTime = "KALT", a.KamchatkaTime = "KAMT", a.KoreaStandardTime = "KST", a.KosraeTime = "KOST", a.KrasnoyarskSummerTime = "KRAST", a.KrasnoyarskTime = "KRAT", a.KyrgyzstanTime = "KGT", a.LineIslandsTime = "LINT", a.KazakhstanStandardTime = "KAST", a.LordHoweStandardTime = "LHST", a.LordHoweSummerTime = "LHST", a.MacquarieIslandStationTime = "MIST", a.MagadanTime = "MAGT", a.MalaysiaStandardTime = "MST", a.MalaysiaTime = "MYT", a.MaldivesTime = "MVT", a.MarquesasIslandsTime = "MART", a.MarshallIslandsTime = "MHT", a.MauritiusTime = "MUT", a.MawsonStationTime = "MAWT", a.MiddleEuropeanSummerTime = "MEDT", a.MiddleEuropeanTime = "MET", a.MoscowTime = "MSK", a.MountainDaylightTime = "MDT", a.MountainStandardTime = "MST", a.MyanmarStandardTime = "MMT", a.NepalTime = "NCT", a.NauruTime = "NRT", a.NewCaledoniaTime = "NCT", a.NewZealandDaylightTime = "NZDT", a.NewZealandStandardTime = "NZST", a.NewfoundlandDaylightTime = "NDT", a.NewfoundlandStandardTime = "NST", a.NewfoundlandTime = "NT", a.NiueTime = "NUT", a.NorfolkIslandTime = "NFT", a.NovosibirskTime = "NOVT", a.OmskTime = "OMST", a.OralTime = "ORAT", a.PacificDaylightTime = "PDT", a.PacificStandardTime = "PST", a.PakistanStandardTime = "PKT", a.PalauTime = "PWT", a.PapuaNewGuineaTime = "PGT", a.ParaguaySummerTime = "PYST", a.ParaguayTime = "PYT", a.PeruTime = "PET", a.PhilippineStandardTime = "PHST", a.PhilippineTime = "PHT", a.PhoenixIslandTime = "PHOT", a.PitcairnTime = "PST", a.PohnpeiStandardTime = "PONT", a.ReunionTime = "RET", a.RotheraResearchStationTime = "ROTT", a.SaintPierreAndMiquelonDaylightTime = "PMDT", a.SaintPierreAndMiquelonStandardTime = "PMST", a.SakhalinIslandTime = "SAKT", a.SamaraTime = "SAMT", a.SamoaDaylightTime = "SDT", a.SamoaStandardTime = "SST", a.SeychellesTime = "SCT", a.ShowaStationTime = "SYOT", a.SingaporeStandardTime = "SST", a.SingaporeTime = "SGT", a.SolomonIslandsTime = "SBT", a.SouthAfricanStandardTime = "SAST", a.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", a.SrednekolymskTime = "SRET", a.SriLankaStandardTime = "SLST", a.SurinameTime = "SRT", a.TahitiTime = "TAHT", a.TajikistanTime = "TJT", a.ThailandStandardTime = "THA", a.TimorLesteTime = "TLT", a.TokelauTime = "TKT", a.TongaTime = "TOT", a.TurkeyTime = "TRT", a.TurkmenistanTime = "TMT", a.TuvaluTime = "TVT", a.UlaanbaatarStandardTime = "ULAT", a.UlaanbaatarSummerTime = "ULAST", a.UruguayStandardTime = "UYT", a.UruguaySummerTime = "UYST", a.UzbekistanTime = "UZT", a.VanuatuTime = "VUT", a.VenezuelaStandardTime = "VET", a.VladivostokTime = "VLAT", a.VolgogradTime = "VOLT", a.VostokStationTime = "VOST", a.WakeIslandTime = "WAKT", a.WestAfricaSummerTime = "WAST", a.WestAfricaTime = "WAT", a.WestGreenlandSummerTime = "WGST", a.WestGreenlandTime = "WGT", a.WestKazakhstanTime = "WKT", a.WesternEuropeanSummerTime = "WEDT", a.WesternEuropeanTime = "WET", a.WesternIndonesianTime = "WIT", a.WesternStandardTime = "WST", a.YakutskTime = "YAKT", a.YekaterinburgTime = "YEKT";
})(s$2 || (s$2 = {}));
({ dst: { is: false, uses: true }, id: s$2.AcreTime, name: "Acre Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.AfghanistanTime, name: "Afghanistan Time", offset: n$1.UTC_PLUS_4_30 });
({ dst: { is: false, uses: true }, id: s$2.AIXCentralEuropeanTime, name: "AIX Central European Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: true, uses: true }, id: s$2.AlaskaDaylightTime, name: "Alaska Daylight Time", offset: n$1.UTC_MINUS_8 });
({ dst: { is: false, uses: true }, id: s$2.AlaskaStandardTime, name: "Alaska Standard Time", offset: n$1.UTC_MINUS_9 });
({ dst: { is: false, uses: true }, id: s$2.AlmaAtaTime, name: "Alma-Ata Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.AmazonSummerTime, name: "Amazon Summer Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.AmazonTime, name: "Amazon Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.AnadyrTime, name: "Anadyr Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.AqtobeTime, name: "Aqtobe Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.ArabiaStandardTime, name: "Arabia Standard Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.ArgentinaTime, name: "Argentina Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.ArmeniaTime, name: "Armenia Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: true, uses: true }, id: s$2.AtlanticDaylightTime, name: "Atlantic Daylight Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.AtlanticStandardTime, name: "Atlantic Standard Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: true, uses: true }, id: s$2.AustralianCentralDaylightSavingTime, name: "Australian Central Daylight Saving Time", offset: n$1.UTC_PLUS_10_30 });
({ dst: { is: false, uses: true }, id: s$2.AustralianCentralStandardTime, name: "Australian Central Standard Time", offset: n$1.UTC_PLUS_9_30 });
({ dst: { is: false, uses: true }, id: s$2.AustralianCentralWesternStandardTime, name: "Australian Central Western Standard Time", offset: n$1.UTC_PLUS_8_45 });
({ dst: { is: true, uses: true }, id: s$2.AustralianEasternDaylightSavingTime, name: "Australian Eastern Daylight Saving Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.AustralianEasternStandardTime, name: "Australian Eastern Standard Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.AustralianEasternTime, name: "Australian Eastern Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.AustralianWesternStandardTime, name: "Australian Western Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.AzerbaijanTime, name: "Azerbaijan Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.AzoresStandardTime, name: "Azores Standard Time", offset: n$1.UTC_MINUS_1 });
({ dst: { is: true, uses: true }, id: s$2.AzoresSummerTime, name: "Azores Summer Time", offset: n$1.UTC_0 });
({ dst: { is: false, uses: true }, id: s$2.BakerIslandTime, name: "Baker Island Time", offset: n$1.UTC_MINUS_12 });
({ dst: { is: false, uses: true }, id: s$2.BangladeshStandardTime, name: "Bangladesh Standard Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.BhutanTime, name: "Bhutan Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.BoliviaTime, name: "Bolivia Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.BougainvilleStandardTime, name: "Bougainville Standard Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: true, uses: true }, id: s$2.BrasiliaSummerTime, name: "Brasilia Summer Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.BrasiliaTime, name: "Brasilia Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.BritishIndianOceanTime, name: "British Indian Ocean Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: true, uses: true }, id: s$2.BritishSummerTime, name: "British Summer Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.BruneiTime, name: "Brunei Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.CapeVerdeTime, name: "Cape Verde Time", offset: n$1.UTC_MINUS_1 });
({ dst: { is: false, uses: true }, id: s$2.CentralAfricaTime, name: "Central Africa Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: true, uses: true }, id: s$2.CentralDaylightTime, name: "Central Daylight Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: true, uses: true }, id: s$2.CentralEuropeanSummerTime, name: "Central European Summer Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.CentralEuropeanTime, name: "Central European Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.CentralIndonesiaTime, name: "Central Indonesia Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.CentralStandardTime, name: "Central Standard Time", offset: n$1.UTC_MINUS_6 });
({ dst: { is: false, uses: true }, id: s$2.CentralTime, name: "Central Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.CentralWesternStandardTime, name: "Central Western Standard Time", offset: n$1.UTC_PLUS_8_45 });
({ dst: { is: false, uses: true }, id: s$2.ChamorroStandardTime, name: "Chamorro Standard Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: true, uses: true }, id: s$2.ChathamDaylightTime, name: "Chatham Daylight Time", offset: n$1.UTC_PLUS_13_45 });
({ dst: { is: false, uses: true }, id: s$2.ChathamStandardTime, name: "Chatham Standard Time", offset: n$1.UTC_PLUS_12_45 });
({ dst: { is: false, uses: true }, id: s$2.ChileStandardTime, name: "Chile Standard Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: true, uses: true }, id: s$2.ChileSummerTime, name: "Chile Summer Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.ChinaStandardTime, name: "China Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.ChoibalsanStandardTime, name: "Choibalsan Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: true, uses: true }, id: s$2.ChoibalsanSummerTime, name: "Choibalsan Summer Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.ChristmasIslandTime, name: "Christmas Island Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.ChuukTime, name: "Chuuk Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.ClipptertonIslandStandardTime, name: "Clippterton Island Standard Time", offset: n$1.UTC_MINUS_8 });
({ dst: { is: false, uses: true }, id: s$2.CocosIslandsTime, name: "Cocos Standard Time", offset: n$1.UTC_PLUS_6_30 });
({ dst: { is: true, uses: true }, id: s$2.ColombiaSummerTime, name: "Colombia Summer Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.ColombiaTime, name: "Colombia Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.CookIslandTime, name: "Cook Island Time", offset: n$1.UTC_MINUS_10 });
({ dst: { is: false, uses: true }, id: s$2.CoordinatedUniversalTime, name: "Coordinated Universal Time", offset: n$1.UTC_0 });
({ dst: { is: true, uses: true }, id: s$2.CubaDaylightTime, name: "Cuba Daylight Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.CubaStandardTime, name: "Cuba Standard Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.DavisTime, name: "Davis Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.DumontDUrvilleTime, name: "Dumont D'Urville Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.EastAfricaTime, name: "East Africa Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.EasterIslandStandardTime, name: "Easter Island Standard Time", offset: n$1.UTC_MINUS_6 });
({ dst: { is: true, uses: true }, id: s$2.EasterIslandSummerTime, name: "Easter Island Summer Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.EasternCaribbeanTime, name: "Eastern Caribbean Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: true, uses: true }, id: s$2.EasternDaylightTime, name: "Eastern Daylight Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: true, uses: true }, id: s$2.EasternEuropeanSummerTime, name: "Eastern European Summer Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.EasternEuropeanTime, name: "Eastern European Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: true, uses: true }, id: s$2.EasternGreenlandSummerTime, name: "Eastern Greenland Summer Time", offset: n$1.UTC_0 });
({ dst: { is: false, uses: true }, id: s$2.EasternGreenlandTime, name: "Eastern Greenland Time", offset: n$1.UTC_MINUS_1 });
({ dst: { is: false, uses: true }, id: s$2.EasternIndonesianTime, name: "Eastern Indonesian Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.EasternStandardTime, name: "Eastern Standard Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.EasternTime, name: "Eastern Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.EcuadorTime, name: "Ecuador Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: true, uses: true }, id: s$2.FalklandIslandsSummerTime, name: "Falkland Islands Summer Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.FalklandIslandsTime, name: "Falkland Islands Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.FernandoDeNoronhaTime, name: "Fernando de Noronha Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.FijiTime, name: "Fiji Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.FrenchGuianaTime, name: "French Guiana Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.FrenchSouthernAndAntarcticTime, name: "French Southern and Antarctic Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.FurtherEasternEuropeanTime, name: "Further Eastern European Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.GalapagosTime, name: "Galapagos Time", offset: n$1.UTC_MINUS_6 });
({ dst: { is: false, uses: true }, id: s$2.GambierIslandTime, name: "Gambier Island Time", offset: n$1.UTC_MINUS_9 });
({ dst: { is: false, uses: true }, id: s$2.GambierIslandsTime, name: "Gambier Islands Time", offset: n$1.UTC_MINUS_9 });
({ dst: { is: false, uses: true }, id: s$2.GeorgiaStandardTime, name: "Georgia Standard Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.GilbertIslandTime, name: "Gilbert Island Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.GreenwichMeanTime, name: "Greenwich Mean Time", offset: n$1.UTC_0 });
({ dst: { is: false, uses: true }, id: s$2.GulfStandardTime, name: "Gulf Standard Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.GuyanaTime, name: "Guyana Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: true, uses: true }, id: s$2.HawaiiAleutianDaylightTime, name: "Hawaii-Aleutian Daylight Time", offset: n$1.UTC_MINUS_9 });
({ dst: { is: false, uses: true }, id: s$2.HawaiiAleutianStandardTime, name: "Hawaii-Aleutian Standard Time", offset: n$1.UTC_MINUS_10 });
({ dst: { is: false, uses: true }, id: s$2.HeardAndMcDonaldIslandsTime, name: "Heard and McDonald Islands Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.HongKongTime, name: "Hong Kong Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: true, uses: true }, id: s$2.HovdSummerTime, name: "Hovd Summer Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.HovdTime, name: "Hovd Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.IndianOceanTime, name: "Indian Ocean Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.IndianStandardTime, name: "Indian Standard Time", offset: n$1.UTC_PLUS_5_30 });
({ dst: { is: false, uses: true }, id: s$2.IndochinaTime, name: "Indochina Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.InternationalDayLineWestTime, name: "International Day Line West Time", offset: n$1.UTC_MINUS_12 });
({ dst: { is: true, uses: true }, id: s$2.IranDaylightTime, name: "Iran Daylight Time", offset: n$1.UTC_PLUS_4_30 });
({ dst: { is: false, uses: true }, id: s$2.IranStandardTime, name: "Iran Standard Time", offset: n$1.UTC_PLUS_3_30 });
({ dst: { is: false, uses: true }, id: s$2.IrishStandardTime, name: "Irish Standard Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.IrkutskTime, name: "Irkutsk Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: true, uses: true }, id: s$2.IsraelDaylightTime, name: "Israel Daylight Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.IsraelStandardTime, name: "Israel Standard Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.JapanStandardTime, name: "Japan Standard Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.KaliningradTime, name: "Kaliningrad Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.KamchatkaTime, name: "Kamchatka Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.KoreaStandardTime, name: "Korea Standard Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.KosraeTime, name: "Kosrae Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.KrasnoyarskTime, name: "Krasnoyarsk Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.KyrgyzstanTime, name: "Kyrgyzstan Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.LineIslandsTime, name: "Line Islands Time", offset: n$1.UTC_PLUS_14 });
({ dst: { is: false, uses: true }, id: s$2.LordHoweStandardTime, name: "Lord Howe Standard Time", offset: n$1.UTC_PLUS_10_30 });
({ dst: { is: false, uses: true }, id: s$2.LordHoweSummerTime, name: "Lord Howe Summer Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.MacquarieIslandStationTime, name: "Macquarie Island Station Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.MagadanTime, name: "Magadan Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.MalaysiaStandardTime, name: "Malaysia Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.MalaysiaTime, name: "Malaysia Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.MaldivesTime, name: "Maldives Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.MarquesasIslandsTime, name: "Marquesas Islands Time", offset: n$1.UTC_PLUS_9_30 });
({ dst: { is: false, uses: true }, id: s$2.MarshallIslandsTime, name: "Marshall Islands Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.MauritiusTime, name: "Mauritius Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.MawsonStationTime, name: "Mawson Station Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.MiddleEuropeanSummerTime, name: "Middle European Summer Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.MiddleEuropeanTime, name: "Middle European Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.MoscowTime, name: "Moscow Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.MountainDaylightTime, name: "Mountain Daylight Time", offset: n$1.UTC_MINUS_6 });
({ dst: { is: false, uses: true }, id: s$2.MountainStandardTime, name: "Mountain Standard Time", offset: n$1.UTC_MINUS_7 });
({ dst: { is: false, uses: true }, id: s$2.MyanmarStandardTime, name: "Myanmar Standard Time", offset: n$1.UTC_PLUS_6_30 });
({ dst: { is: false, uses: true }, id: s$2.NepalTime, name: "Nepal Time", offset: n$1.UTC_PLUS_5_45 });
({ dst: { is: false, uses: true }, id: s$2.NauruTime, name: "Nauru Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.NewCaledoniaTime, name: "New Caledonia Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.NewZealandDaylightTime, name: "New Zealand Daylight Time", offset: n$1.UTC_PLUS_13 });
({ dst: { is: false, uses: true }, id: s$2.NewZealandStandardTime, name: "New Zealand Standard Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.NewfoundlandDaylightTime, name: "Newfoundland Daylight Time", offset: n$1.UTC_MINUS_2_30 });
({ dst: { is: false, uses: true }, id: s$2.NewfoundlandTime, name: "Newfoundland Time", offset: n$1.UTC_MINUS_3_30 });
({ dst: { is: false, uses: true }, id: s$2.NiueTime, name: "Niue Time", offset: n$1.UTC_MINUS_11 });
({ dst: { is: false, uses: true }, id: s$2.NorfolkIslandTime, name: "Norfolk Island Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.NovosibirskTime, name: "Novosibirsk Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.OmskTime, name: "Omsk Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.OralTime, name: "Oral Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.PacificDaylightTime, name: "Pacific Daylight Time", offset: n$1.UTC_MINUS_7 });
({ dst: { is: false, uses: true }, id: s$2.PacificStandardTime, name: "Pacific Standard Time", offset: n$1.UTC_MINUS_8 });
({ dst: { is: false, uses: true }, id: s$2.PakistanStandardTime, name: "Pakistan Standard Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.PalauTime, name: "Palau Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.PapuaNewGuineaTime, name: "Papua New Guinea Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.ParaguaySummerTime, name: "Paraguay Summer Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.ParaguayTime, name: "Paraguay Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.PeruTime, name: "Peru Time", offset: n$1.UTC_MINUS_5 });
({ dst: { is: false, uses: true }, id: s$2.PhilippineStandardTime, name: "Philippine Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.PhilippineTime, name: "Philippine Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.PhoenixIslandTime, name: "Phoenix Island Time", offset: n$1.UTC_PLUS_13 });
({ dst: { is: false, uses: true }, id: s$2.PitcairnTime, name: "Pitcairn Time", offset: n$1.UTC_MINUS_8 });
({ dst: { is: false, uses: true }, id: s$2.PohnpeiStandardTime, name: "Pohnpei Standard Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.ReunionTime, name: "Reunion Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.RotheraResearchStationTime, name: "Rothera Research Station Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.SaintPierreAndMiquelonDaylightTime, name: "Saint Pierre and Miquelon Daylight Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.SaintPierreAndMiquelonStandardTime, name: "Saint Pierre and Miquelon Standard Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.SakhalinIslandTime, name: "Sakhalin Island Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.SamaraTime, name: "Samara Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.SamoaDaylightTime, name: "Samoa Daylight Time", offset: n$1.UTC_MINUS_10 });
({ dst: { is: false, uses: true }, id: s$2.SamoaStandardTime, name: "Samoa Standard Time", offset: n$1.UTC_MINUS_11 });
({ dst: { is: false, uses: true }, id: s$2.SeychellesTime, name: "Seychelles Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.ShowaStationTime, name: "Showa Station Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.SingaporeStandardTime, name: "Singapore Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.SingaporeTime, name: "Singapore Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.SolomonIslandsTime, name: "Solomon Islands Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.SouthAfricanStandardTime, name: "South African Standard Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.SouthGeorgiaAndTheSouthSandwichIslandsTime, name: "South Georgia and the South Sandwich Islands Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.SrednekolymskTime, name: "Srednekolymsk Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.SriLankaStandardTime, name: "Sri Lanka Standard Time", offset: n$1.UTC_PLUS_5_30 });
({ dst: { is: false, uses: true }, id: s$2.SurinameTime, name: "Suriname Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.TahitiTime, name: "Tahiti Time", offset: n$1.UTC_MINUS_10 });
({ dst: { is: false, uses: true }, id: s$2.TajikistanTime, name: "Tajikistan Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.ThailandStandardTime, name: "Thailand Standard Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.TimorLesteTime, name: "Timor-Leste Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.TokelauTime, name: "Tokelau Time", offset: n$1.UTC_PLUS_13 });
({ dst: { is: false, uses: true }, id: s$2.TongaTime, name: "Tonga Time", offset: n$1.UTC_PLUS_13 });
({ dst: { is: false, uses: true }, id: s$2.TurkeyTime, name: "Turkey Time", offset: n$1.UTC_PLUS_3 });
({ dst: { is: false, uses: true }, id: s$2.TurkmenistanTime, name: "Turkmenistan Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.TuvaluTime, name: "Tuvalu Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.UlaanbaatarStandardTime, name: "Ulaanbaatar Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.UlaanbaatarSummerTime, name: "Ulaanbaatar Summer Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.UruguayStandardTime, name: "Uruguay Standard Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.UruguaySummerTime, name: "Uruguay Summer Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.UzbekistanTime, name: "Uzbekistan Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.VanuatuTime, name: "Vanuatu Time", offset: n$1.UTC_PLUS_11 });
({ dst: { is: false, uses: true }, id: s$2.VenezuelaStandardTime, name: "Venezuela Standard Time", offset: n$1.UTC_MINUS_4 });
({ dst: { is: false, uses: true }, id: s$2.VladivostokTime, name: "Vladivostok Time", offset: n$1.UTC_PLUS_10 });
({ dst: { is: false, uses: true }, id: s$2.VolgogradTime, name: "Volgograd Time", offset: n$1.UTC_PLUS_4 });
({ dst: { is: false, uses: true }, id: s$2.VostokStationTime, name: "Vostok Station Time", offset: n$1.UTC_PLUS_6 });
({ dst: { is: false, uses: true }, id: s$2.WakeIslandTime, name: "Wake Island Time", offset: n$1.UTC_PLUS_12 });
({ dst: { is: false, uses: true }, id: s$2.WestAfricaSummerTime, name: "West Africa Summer Time", offset: n$1.UTC_PLUS_2 });
({ dst: { is: false, uses: true }, id: s$2.WestAfricaTime, name: "West Africa Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.WestGreenlandSummerTime, name: "West Greenland Summer Time", offset: n$1.UTC_MINUS_2 });
({ dst: { is: false, uses: true }, id: s$2.WestGreenlandTime, name: "West Greenland Time", offset: n$1.UTC_MINUS_3 });
({ dst: { is: false, uses: true }, id: s$2.WestKazakhstanTime, name: "West Kazakhstan Time", offset: n$1.UTC_PLUS_5 });
({ dst: { is: false, uses: true }, id: s$2.WesternEuropeanSummerTime, name: "Western European Summer Time", offset: n$1.UTC_PLUS_1 });
({ dst: { is: false, uses: true }, id: s$2.WesternEuropeanTime, name: "Western European Time", offset: n$1.UTC_0 });
({ dst: { is: false, uses: true }, id: s$2.WesternIndonesianTime, name: "Western Indonesian Time", offset: n$1.UTC_PLUS_7 });
({ dst: { is: false, uses: true }, id: s$2.WesternStandardTime, name: "Western Standard Time", offset: n$1.UTC_PLUS_8 });
({ dst: { is: false, uses: true }, id: s$2.YakutskTime, name: "Yakutsk Time", offset: n$1.UTC_PLUS_9 });
({ dst: { is: false, uses: true }, id: s$2.YekaterinburgTime, name: "Yekaterinburg Time", offset: n$1.UTC_PLUS_5 });
var T$1;
(function(a) {
  a.Africa = "Africa", a.Americas = "Americas", a.Asia = "Asia", a.Europe = "Europe", a.Oceania = "Oceania", a.Polar = "Polar";
})(T$1 || (T$1 = {}));
var p$1;
(function(a) {
  a.CentralAmerica = "Central America", a.EasternAsia = "Eastern Asia", a.EasternEurope = "Eastern Europe", a.EasternAfrica = "Eastern Africa", a.MiddleAfrica = "Middle Africa", a.MiddleEast = "Middle East", a.NorthernAfrica = "Northern Africa", a.NorthernAmerica = "Northern America", a.NorthernEurope = "Northern Europe", a.Polynesia = "Polynesia", a.SouthAmerica = "South America", a.SouthernAfrica = "Southern Africa", a.SouthernAsia = "Southern Asia", a.SouthernEurope = "Southern Europe", a.WesternAfrica = "Western Africa", a.WesternAsia = "Western Asia", a.WesternEurope = "Western Europe", a.WesternAustralia = "Western Australia";
})(p$1 || (p$1 = {}));
({ Afghanistan: { i18n: { calling_codes: [93], currencies: [m$1.AfghanistanAfghani], languages: [e.Pashto, e.Dari, e.Turkmen, e.Uzbek], tz: { offsets: [n$1.UTC_PLUS_4_30], regions: [u$1.AsiaKabul], timezones: [s$2.AfghanistanTime] } }, id: r$1.Afghanistan, info: { flag: { emoji: "\u{1F1E6}\u{1F1EB}", emoji_unicode: "U+1F1E6 U+1F1EB", svg: "https://www.countryflags.io/af/flat/64.svg" }, tld: [".af"] }, iso: { alpha2: r$1.Afghanistan, alpha3: "AFG", numeric: "004" }, name: { alt_spellings: ["AF", "Af\u0121\u0101nist\u0101n"], demonym: "Afghan", native: { endonym: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646" }, official: "Islamic Republic of Afghanistan", short: "Afghanistan", translations: { [e.Afrikaans]: "Afghanistan", [e.Albanian]: "Shqip\xEBri", [e.Amharic]: "\u12A0\u134D\u130B\u1295", [e.Arabic]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", [e.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Basque]: "Afganist\xE1n", [e.Belarusian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Bengali]: "\u0986\u09AB\u0997\u09BE\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8", [e.Berber]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", [e.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F63\u0F7A\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F46\u0F0D", [e.Bosnian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Breton]: "Afganistan", [e.Bulgarian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Burmese]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", [e.Catalan]: "Afganistan", [e.Chinese]: "\u963F\u5BCC\u6C57", [e.Croatian]: "Afganistan", [e.Czech]: "Afganistan", [e.Danish]: "Afghanistan", [e.Dutch]: "Afghanistan", [e.English]: "Afghanistan", [e.Esperanto]: "Afganistan", [e.Estonian]: "Afganistan", [e.Finnish]: "Afghanistan", [e.French]: "Afghanistan", [e.Frisian]: "Afghanistan", [e.Galician]: "Afganist\xE1n", [e.Georgian]: "\u10D0\u10D5\u10E6\u10D0\u10DC\u10D4\u10D7\u10D8", [e.German]: "Afghanistan", [e.Greenlandic]: "Afghanistan", [e.Greek]: "\u0391\u03C6\u03B3\u03B1\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD", [e.Gujarati]: "\u0A85\u0AAB\u0A97\u0ABE\u0AA8\u0ABF\u0AB8\u0ACD\u0AA4\u0ABE\u0AA8", [e.Haitian]: "Afghanistan", [e.Hausa]: "Afghanistan", [e.Hebrew]: "\u05D0\u05E4\u05D2\u05E0\u05D9\u05E1\u05D8\u05DF", [e.Hindi]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", [e.Hungarian]: "Afganistan", [e.Icelandic]: "Afghanistan", [e.Igbo]: "Afghanistan", [e.Indonesian]: "Afghanistan", [e.Irish]: "Afghanistan", [e.Italian]: "Afghanistan", [e.Japanese]: "\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3", [e.Javanese]: "Afghanistan", [e.Kannada]: "\u0C85\u0CAB\u0C97\u0CBE\u0CA8\u0CBF\u0CB8\u0CCD\u0CA4\u0CBE\u0CA8", [e.Kazakh]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Khmer]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17B7\u1780", [e.Korean]: "\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4", [e.Kurdish]: "Afghanistan", [e.Kyrgyz]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Lao]: "\u0EAD\u0EB2\u0E9F\u0EB2\u0EA5\u0EBD\u0E99", [e.Latin]: "Afghanistan", [e.Latvian]: "Afghanistan", [e.Lithuanian]: "Afganistanas", [e.Luxembourgish]: "Afghanistan", [e.Macedonian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Malagasy]: "Afghanistan", [e.Malay]: "Afghanistan", [e.Malayalam]: "\u0D05\u0D2B\u0D17\u0D3E\u0D28\u0D3F\u0D38\u0D4D\u0D24\u0D3E\u0D28", [e.Maltese]: "Afghanistan", [e.Maori]: "Afghanistan", [e.Marathi]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", [e.Mongolian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Nepali]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", [e.Norwegian]: "Afghanistan", [e.Pashto]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", [e.Persian]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", [e.Polish]: "Afganistan", [e.Portuguese]: "Afghanistan", [e.Punjabi]: "Afghanistan", [e.Romanian]: "Afghanistan", [e.Polish]: "Afganistan", [e.Russian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Samoan]: "Afghanistan", [e.Sanskrit]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", [e.Scots]: "Afghanistan", [e.Serbian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Sesotho]: "Afghanistan", [e.Shona]: "Afghanistan", [e.Sindhi]: "Afghanistan", [e.Sinhala]: "\u0D86\u0D9C\u0DCA\u200D\u0DBB\u0DDC\u0D9A\u0DCA\u0D9A\u0DD2\u0DBA\u0DCF\u0DC0", [e.Slovak]: "Afganistan", [e.Slovenian]: "Afganistan", [e.Somali]: "Afghanistan", [e.Spanish]: "Afganist\xE1n", [e.Sudanese]: "Afghanistan", [e.Swahili]: "Afghanistan", [e.Swedish]: "Afghanistan", [e.Tagalog]: "Afghanistan", [e.Tajik]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Tatar]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Tamil]: "\u0B86\u0BAA\u0BCD\u0BAA\u0B95\u0BBE\u0BA9\u0BBF\u0BB8\u0BCD\u0BA4\u0BBE\u0BA9\u0BCD", [e.Telugu]: "\u0C06\u0C2B\u0C4D\u0C18\u0C28\u0C3F\u0C38\u0C4D\u0C24\u0C3E\u0C28\u0C4D", [e.Thai]: "\u0E2D\u0E31\u0E1F\u0E01\u0E32\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", [e.Tibetan]: "\u0F68\u0F55\u0F0B\u0F42\u0F7A\u0F0B\u0F53\u0F72\u0F66\u0F72\u0F0B\u0F4F\u0F7A\u0F53\u0F66\u0F72\u0F0D", [e.Turkish]: "Afganistan", [e.Ukrainian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Urdu]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", [e.Uzbek]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", [e.Vietnamese]: "Afghanistan", [e.Welsh]: "Afghanistan", [e.Xhosa]: "Afghanistan", [e.Yiddish]: "Afghanistan", [e.Yoruba]: "Afghanistan", [e.Zulu]: "Afghanistan" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Kabul", total: 341e5 } }, geography: { area: 652230, region: T$1.Asia, sub_region: p$1.SouthernAsia }, government: { capital: "Kabul", type: "Islamic Emirate" } } }, Albania: { i18n: { calling_codes: [355], currencies: [m$1.AlbaniaLek], languages: [e.Albanian, e.Greek, e.Turkish], tz: { offsets: [n$1.UTC_PLUS_1], regions: [u$1.EuropeBrussels], timezones: [s$2.CentralEuropeanTime] } }, id: r$1.Albania, info: { flag: { emoji: "\u{1F1E6}\u{1F1F1}", emoji_unicode: "U+1F1E6 U+1F1F1", svg: "https://www.countryflags.io/al/flat/64.svg" }, tld: [".al"] }, iso: { alpha2: r$1.Albania, alpha3: "ALB", numeric: "008" }, name: { alt_spellings: ["AL", "Shqip\xEBri", "Shqip\xEBria", "Shqipnia"], demonym: "Albanian", native: { endonym: "Shqip\xEBri" }, official: "Republic of Albania", short: "Albania", translations: { [e.Afrikaans]: "Albania", [e.Albanian]: "Albania", [e.Amharic]: "\u12A0\u120D\u1263\u1295\u12EB", [e.Arabic]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", [e.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Basque]: "Albania", [e.Belarusian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Bengali]: "\u0986\u09B2\u09AC\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE", [e.Berber]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", [e.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B", [e.Bosnian]: "Albanija", [e.Breton]: "Albania", [e.Bulgarian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Burmese]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", [e.Catalan]: "Alb\xE0nia", [e.Chinese]: "\u963F\u5C14\u5DF4\u5C3C\u4E9A", [e.Croatian]: "Albanija", [e.Czech]: "Alb\xE1nie", [e.Danish]: "Albanien", [e.Dutch]: "Albani\xEB", [e.English]: "Albania", [e.Esperanto]: "Albanio", [e.Estonian]: "Albaania", [e.Finnish]: "Albania", [e.French]: "Albanie", [e.Frisian]: "Albani\xEB", [e.Galician]: "Alb\xE2nia", [e.Georgian]: "\u10D0\u10DA\u10D1\u10D0\u10DC\u10D8\u10D0", [e.German]: "Albanien", [e.Greenlandic]: "Albania", [e.Greek]: "\u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1", [e.Gujarati]: "\u0A85\u0AB2\u0AAC\u0AA8\u0ABF\u0AAF\u0ABE", [e.Haitian]: "Albanais", [e.Hausa]: "Albania", [e.Hebrew]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05D4", [e.Hindi]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", [e.Hungarian]: "Alb\xE1nia", [e.Icelandic]: "Alb\xFAnir", [e.Igbo]: "Albania", [e.Indonesian]: "Albania", [e.Irish]: "Alb\xE1in", [e.Italian]: "Albania", [e.Japanese]: "\u30A2\u30EB\u30D0\u30CB\u30A2", [e.Javanese]: "Albania", [e.Kannada]: "\u0C85\u0CB2\u0CCD\u0CAC\u0CBE\u0CA8\u0CBF\u0CAF\u0CBE", [e.Kazakh]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Khmer]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17C1\u179F\u17CA\u17B8", [e.Korean]: "\uC54C\uBC14\uB2C8\uC544", [e.Kurdish]: "\u0622\u0644\u0628\u0627\u0646\u06CC\u0627", [e.Kyrgyz]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Lao]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E99\u0EB5", [e.Latin]: "Albania", [e.Latvian]: "Alb\u0101nija", [e.Lithuanian]: "Albanija", [e.Luxembourgish]: "Albani\xEB", [e.Macedonian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", [e.Malagasy]: "Albania", [e.Malay]: "Albania", [e.Malayalam]: "\u0D05\u0D32\u0D4D\u0D2C\u0D3E\u0D28\u0D3F\u0D2F\u0D3E", [e.Maltese]: "Albania", [e.Maori]: "Albania", [e.Marathi]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", [e.Mongolian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Nepali]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", [e.Norwegian]: "Albania", [e.Pashto]: "\u0627\u0627\u0644\u0628\u0627\u0646\u06CC", [e.Persian]: "\u0622\u0644\u0628\u0627\u0646\u06CC", [e.Polish]: "Albania", [e.Portuguese]: "Alb\xE2nia", [e.Punjabi]: "\u0A05\u0A32\u0A2C\u0A28\u0A40\u0A06", [e.Romanian]: "Alb\u0103n", [e.Russian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Samoan]: "Albania", [e.Sanskrit]: "Albani", [e.Scots]: "Alb\xE0inia", [e.Serbian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", [e.Sesotho]: "Albania", [e.Shona]: "Albania", [e.Sindhi]: "Albania", [e.Sinhala]: "\u0D87\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", [e.Slovak]: "Alb\xE1nsko", [e.Slovenian]: "Albanija", [e.Somali]: "Albania", [e.Spanish]: "Albania", [e.Sudanese]: "Albania", [e.Swahili]: "Albania", [e.Swedish]: "Albanien", [e.Tagalog]: "Albania", [e.Tajik]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Tamil]: "\u0B85\u0BB2\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF\u0BBE", [e.Tatar]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Telugu]: "\u0C05\u0C32\u0C4D\u0C2C\u0C3E\u0C28\u0C3F\u0C2F\u0C3E", [e.Thai]: "\u0E2D\u0E31\u0E25\u0E41\u0E1A\u0E19\u0E34\u0E19\u0E35", [e.Tibetan]: "\u0F68\u0F63\u0F0B\u0F56\u0F72\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F72", [e.Turkish]: "Albaniye", [e.Ukrainian]: "\u0410\u043B\u0431\u0430\u043D\u0456\u044F", [e.Urdu]: "\u0622\u0644\u0628\u0627\u0646\u06CC", [e.Uzbek]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", [e.Vietnamese]: "Albanie", [e.Welsh]: "Albania", [e.Xhosa]: "Albania", [e.Yiddish]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05E9", [e.Yoruba]: "Albania", [e.Zulu]: "Albania" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Tirana", total: 2853e3 } }, geography: { area: 28748, region: T$1.Europe, sub_region: p$1.SouthernEurope }, government: { capital: "Tirana", type: "Republic" } } }, Algeria: { i18n: { calling_codes: [213], currencies: [m$1.AlgeriaDinar], languages: [e.Arabic, e.French, e.Berber, e.Tamazight], tz: { offsets: [n$1.UTC_PLUS_1, n$1.UTC_PLUS_2], regions: [u$1.AfricaAlgiers], timezones: [s$2.CentralEuropeanTime] } }, id: r$1.Algeria, info: { flag: { emoji: "\u{1F1E9}\u{1F1FF}", emoji_unicode: "U+1F1E9 U+1F1FF", svg: "https://www.countryflags.io/dz/flat/64.svg" }, tld: [".dz", ".\u062C\u0632\u0627\u0626\u0631"] }, iso: { alpha2: r$1.Algeria, alpha3: "DZA", numeric: "012" }, name: { alt_spellings: ["DZ", "Dzayer", "Alg\xE9rie"], demonym: "Algerian", native: { endonym: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631" }, official: "People's Democratic Republic of Algeria", short: "Algeria", translations: { [e.Afrikaans]: "Algerije", [e.Albanian]: "Algeria", [e.Amharic]: "\u12A0\u120D\u1300\u122D\u1235", [e.Arabic]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", [e.Armenian]: "\u0531\u056C\u0563\u0578\u0580\u056B\u0561", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u043B\u0436\u0438\u0440", [e.Basque]: "Algeria", [e.Belarusian]: "\u0410\u043B\u0436\u0438\u0440", [e.Bengali]: "\u0986\u09B2\u099C\u09C7\u09B0", [e.Berber]: "\u062C\u0632\u0627\u0626\u0631", [e.Bhutani]: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41", [e.Bosnian]: "Al\u017Eir", [e.Breton]: "Algeria", [e.Bulgarian]: "\u0410\u043B\u0436\u0438\u0440", [e.Burmese]: "\u1021\u102C\u101B\u1015\u103A", [e.Catalan]: "Alg\xE8ria", [e.Chinese]: "\u963F\u5C14\u53CA\u5229\u4E9A", [e.Croatian]: "Al\u017Eir", [e.Czech]: "Al\u017E\xEDrsko", [e.Danish]: "Algeriet", [e.Dutch]: "Algerije", [e.English]: "Algeria", [e.Esperanto]: "Al\u011Derio", [e.Estonian]: "Al\u017Eira", [e.Finnish]: "Algeria", [e.French]: "Alg\xE9rie", [e.Frisian]: "Algeri\xEB", [e.Galician]: "Alxeria", [e.Georgian]: "\u10D0\u10DA\u10D2\u10D8\u10E3\u10E0\u10D8", [e.German]: "Algerien", [e.Greenlandic]: "Algeria", [e.Greek]: "\u0391\u03BB\u03B3\u03B5\u03C1\u03AF\u03B1", [e.Gujarati]: "\u0A86\u0AB2\u0AC7\u0A97\u0AB0\u0ABF\u0AAF\u0ABE", [e.Haitian]: "Alg\xE9rie", [e.Hausa]: "Algeria", [e.Hebrew]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", [e.Hindi]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", [e.Hungarian]: "Alg\xE1r", [e.Icelandic]: "Alg\xFAra", [e.Igbo]: "Algeria", [e.Indonesian]: "Aljir", [e.Irish]: "Alg\xE9rie", [e.Italian]: "Algeria", [e.Japanese]: "\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2", [e.Javanese]: "Aljir", [e.Kannada]: "\u0C86\u0CB2\u0CCD\u0C97\u0CC7\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", [e.Kazakh]: "\u0410\u043B\u0436\u0438\u0440", [e.Khmer]: "\u17A2\u17B6\u179B\u17CB\u1794\u17B6\u1793\u17B8", [e.Korean]: "\uC54C\uC81C\uB9AC", [e.Kurdish]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u062C\u0632\u0627\u06CC\u0631", [e.Kyrgyz]: "\u0410\u043B\u0436\u0438\u0440", [e.Lao]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E88\u0EB5\u0E99", [e.Latin]: "Algeria", [e.Latvian]: "Al\u017E\u012Brija", [e.Lithuanian]: "Al\u017Eyras", [e.Luxembourgish]: "Algeria", [e.Macedonian]: "\u0410\u043B\u0436\u0438\u0440", [e.Malagasy]: "Alg\xE9rie", [e.Malay]: "Aljir", [e.Malayalam]: "\u0D06\u0D32\u0D02\u0D17\u0D47\u0D30\u0D3F\u0D2F\u0D7B", [e.Maltese]: "Alg\xE9rie", [e.Maori]: "Algeria", [e.Marathi]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", [e.Mongolian]: "\u0410\u043B\u0436\u0438\u0440", [e.Nepali]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", [e.Norwegian]: "Algeria", [e.Pashto]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", [e.Persian]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0639\u0631\u0628", [e.Polish]: "Algieria", [e.Portuguese]: "Alg\xE9ria", [e.Punjabi]: "\u0A06\u0A32\u0A47\u0A17\u0A40\u0A06", [e.Romanian]: "Algeria", [e.Russian]: "\u0410\u043B\u0436\u0438\u0440", [e.Samoan]: "Algeria", [e.Sanskrit]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", [e.Scots]: "Algeria", [e.Serbian]: "\u0410\u043B\u0436\u0438\u0440", [e.Sesotho]: "Algeria", [e.Shona]: "Algeria", [e.Sindhi]: "Algeria", [e.Sinhala]: "\u0D86\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", [e.Slovak]: "Al\u017E\xEDrsko", [e.Slovenian]: "Al\u017Eir", [e.Somali]: "Algeria", [e.Spanish]: "Algeria", [e.Sudanese]: "Aljir", [e.Swahili]: "Aljir", [e.Swedish]: "Algeriet", [e.Tagalog]: "Algeria", [e.Tajik]: "\u0410\u043B\u0436\u0438\u0440", [e.Tamil]: "\u0B86\u0BB2\u0BCD\u0B95\u0BC7\u0BB0\u0BBF\u0BAF\u0BBE", [e.Tatar]: "\u0410\u043B\u0436\u0438\u0440", [e.Telugu]: "\u0C06\u0C32\u0C4D\u0C17\u0C47\u0C30\u0C3F\u0C2F\u0C3E", [e.Thai]: "\u0E2D\u0E32\u0E23\u0E32\u0E01\u0E2D\u0E19", [e.Tibetan]: "\u0F68\u0F63\u0F9F\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F61\u0F72", [e.Turkish]: "Cezayir", [e.Ukrainian]: "\u0410\u043B\u0436\u0438\u0440", [e.Urdu]: "\u0622\u0644\u062C\u06CC\u0631", [e.Uzbek]: "\u0410\u043B\u0436\u0438\u0440", [e.Vietnamese]: "\u1EA2\u0301\u1EA1\u1EA3\u1EAD\u1EB5", [e.Welsh]: "Algeria", [e.Xhosa]: "Algeria", [e.Yiddish]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", [e.Yoruba]: "Algeria", [e.Zulu]: "Algeria" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Oran", total: 371e5 } }, geography: { area: 2381740, region: T$1.Africa, sub_region: p$1.NorthernAfrica }, government: { capital: "Algiers", type: "Republic" } } }, AmericanSamoa: { i18n: { calling_codes: [1684], currencies: [m$1.AmericanSamoaTala], languages: [e.English, e.Samoan], tz: { offsets: [n$1.UTC_MINUS_11], regions: [u$1.PacificSamoa], timezones: [s$2.SamoaStandardTime] } }, id: r$1.AmericanSamoa, info: { flag: { emoji: "\u{1F1E6}\u{1F1F8}", emoji_unicode: "U+1F1E6 U+1F1F8", svg: "https://www.countryflags.io/as/flat/64.svg" }, tld: [".as"] }, iso: { alpha2: r$1.AmericanSamoa, alpha3: "ASM", numeric: "016" }, name: { alt_spellings: ["AS", "Amerika S\u0101moa", "Amelika S\u0101moa", "S\u0101moa Amelika"], demonym: "American Samoan", native: { endonym: "American Samoa" }, official: "American Samoa", short: "American Samoa", translations: { [e.Afrikaans]: "Amerikaans Samoa", [e.Albanian]: "Samoa Amerikane", [e.Amharic]: "\u1233\u121E\u12A0\u122D", [e.Arabic]: "\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", [e.Armenian]: "\u054D\u0561\u0570\u0561\u0574\u0561\u056C\u056B\u0561", [e.Azerbaijani]: "Samoa Amerikana", [e.Bashkir]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0421\u0430\u043C\u043E\u0430", [e.Basque]: "Samoa Amerikana", [e.Belarusian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", [e.Bengali]: "\u0986\u09AE\u09C7\u09B0\u09BF\u0995\u09BE\u09A8 \u09B8\u09BE\u09AE\u09CB\u09AF\u09BC\u09BE", [e.Berber]: "\u062C\u0632\u0631 \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", [e.Bhutani]: "\u0F68\u0F62\u0F92\u0FB1\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F58\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F51\u0F0B\u0F46\u0F7A\u0F53\u0F0B\u0F54\u0F7C\u0F0D", [e.Bosnian]: "Ameri\u010Dka Samoa", [e.Breton]: "Samoa Amerikan", [e.Bulgarian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", [e.Burmese]: "\u1021\u1019\u1039\u1038\u1019\u101B\u102D\u102F\u1018\u102C\u101E\u102C", [e.Catalan]: "Samoa Americana", [e.Chinese]: "\u7F8E\u5C5E\u8428\u6469\u4E9A", [e.Croatian]: "Ameri\u010Dka Samoa", [e.Czech]: "Americk\xE1 Samoa", [e.Danish]: "Amerikansk Samoa", [e.Dutch]: "Amerikaans Samoa", [e.English]: "American Samoa", [e.Esperanto]: "Samoa Amerika", [e.Estonian]: "Ameerika Samoa", [e.Finnish]: "Amerikka Samoa", [e.French]: "American Samoa", [e.Frisian]: "Amerikaans Samoa", [e.Galician]: "Samoa Americana", [e.Georgian]: "\u10D0\u10DB\u10D4\u10E0\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D0\u10DB\u10DD\u10D0", [e.German]: "Amerikanisch-Samoa", [e.Greenlandic]: "Amerikaans Samoa", [e.Greek]: "\u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03B1\u03BD\u03B9\u03BA\u03AE \u03A3\u03B1\u03BC\u03CC\u03B1", [e.Gujarati]: "\u0A86\u0AAE\u0AC7\u0AB0\u0ABF\u0A95\u0AA8 \u0AB8\u0ABE\u0AAE\u0ACB\u0AAF\u0ABE", [e.Haitian]: "Amerikaans Samoa", [e.Hausa]: "Amerikaans Samoa", [e.Hebrew]: "\u05D0\u05DE\u05E8\u05D9\u05E7\u05E0\u05D9\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D4", [e.Hindi]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", [e.Hungarian]: "Amerikai Szamoa", [e.Icelandic]: "Amerikai Szamoa", [e.Igbo]: "Ikina Amerika", [e.Indonesian]: "Samoa Amerika", [e.Irish]: "Samoa Amerikana", [e.Italian]: "Samoa Americane", [e.Japanese]: "\u30A2\u30E1\u30EA\u30AB\u9818\u30B5\u30E2\u30A2", [e.Javanese]: "Samoa Amerika", [e.Kannada]: "\u0C85\u0CAE\u0CC7\u0CB0\u0CBF\u0C95\u0CA8\u0CCD \u0CB8\u0CAE\u0CCB\u0C86", [e.Kazakh]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", [e.Khmer]: "\u17A2\u17B6\u1798\u17C9\u17B6\u179A\u17B8\u179F\u17D2\u178F\u1784\u17CB", [e.Korean]: "\uC544\uBA54\uB9AC\uCE74 \uC0AC\uBAA8\uC544", [e.Kurdish]: "Amerikaans Samoa", [e.Kyrgyz]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", [e.Lao]: "\u0EAD\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94", [e.Latin]: "Samoa Amerikana", [e.Latvian]: "Amerikas Samoa", [e.Lithuanian]: "Amerikos Samoa", [e.Luxembourgish]: "Amerikaans Samoa", [e.Macedonian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", [e.Malagasy]: "Samoa Amerika", [e.Malay]: "Amerika Samo", [e.Malayalam]: "\u0D05\u0D2E\u0D47\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D \u0D38\u0D2E\u0D4B\u0D06", [e.Maltese]: "Samoa Amerika", [e.Maori]: "Samoa Amerika", [e.Marathi]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", [e.Mongolian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", [e.Nepali]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", [e.Norwegian]: "Amerikansk Samoa", [e.Pashto]: "\u0627\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", [e.Persian]: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", [e.Polish]: "Samoa Ameryka\u0144skie", [e.Portuguese]: "Samoa Americana", [e.Punjabi]: "\u0A05\u0A2E\u0A30\u0A40\u0A15\u0A40 \u0A38\u0A3E\u0A2E\u0A4B\u0A06", [e.Romanian]: "Samoa americane", [e.Russian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", [e.Samoan]: "Samoa Amerika", [e.Sanskrit]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", [e.Scots]: "Amerikaans Samoa", [e.Serbian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", [e.Sesotho]: "Amerikaans Samoa", [e.Shona]: "Amerikaans Samoa", [e.Sindhi]: "Amerikaans Samoa", [e.Sinhala]: "\u0D86\u0DBB\u0DCA\u0DA2\u0DD2\u0DB1\u0DCF\u0DB1\u0DD4 \u0DC3\u0DD0\u0DB8\u0DD0\u0DBD\u0DCA\u0DC0", [e.Slovak]: "Amerikaans Samoa", [e.Slovenian]: "Amerikaans Samoa", [e.Somali]: "Amerikaans Samoa", [e.Spanish]: "Samoa Americana", [e.Sudanese]: "Amerikaans Samoa", [e.Swahili]: "Amerikaans Samoa", [e.Swedish]: "Amerikansk Samoa", [e.Tagalog]: "Amerikaans Samoa", [e.Tajik]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", [e.Tamil]: "\u0B85\u0BAE\u0BC6\u0BB0\u0BBF\u0B95\u0BCD \u0B9A\u0BAE\u0BCB\u0BB5\u0BBE", [e.Tatar]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", [e.Telugu]: "\u0C05\u0C2E\u0C46\u0C30\u0C3F\u0C15\u0C4D \u0C38\u0C2E\u0C4B\u0C35\u0C3E", [e.Thai]: "\u0E2A\u0E2B\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32", [e.Tibetan]: "\u0F68\u0F7A\u0F0B\u0F62\u0F72\u0F0B\u0F40\u0F0B\u0F68\u0F7A\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F40", [e.Turkish]: "Amerikan Samoas\u0131", [e.Ukrainian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", [e.Urdu]: "\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0627", [e.Uzbek]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", [e.Vietnamese]: "Amerikaans Samoa", [e.Welsh]: "Amerikaans Samoa", [e.Xhosa]: "Amerikaans Samoa", [e.Yiddish]: "Amerikaans Samoa", [e.Yoruba]: "Amerikaans Samoa", [e.Zulu]: "Amerikaans Samoa" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Pago Pago", total: 558e3 } }, geography: { area: 199, region: T$1.Oceania, sub_region: p$1.Polynesia }, government: { capital: "Pago Pago", type: "Nonmetropolitan Territory of the US" } } }, Andorra: { i18n: { calling_codes: [376], currencies: [m$1.Euro], languages: [e.Catalan, e.Spanish], tz: { offsets: [n$1.UTC_PLUS_1, n$1.UTC_PLUS_2], regions: [u$1.EuropeAndorra], timezones: [s$2.CentralEuropeanTime] } }, id: r$1.Andorra, info: { flag: { emoji: "\u{1F1E6}\u{1F1F4}", emoji_unicode: "U+1F1E6 U+1F1F4", svg: "https://www.countryflags.io/ad/flat/64.svg" }, tld: [".ad"] }, iso: { alpha2: r$1.Andorra, alpha3: "AND", numeric: "020" }, name: { alt_spellings: ["AD", "Principality of Andorra", "Principat d'Andorra"], demonym: "Andorran", native: { endonym: "Andorra" }, official: "Principality of Andorra", short: "Andorra", translations: { [e.Afrikaans]: "Andorra", [e.Albanian]: "Andorra", [e.Amharic]: "\u12A0\u1295\u12F6\u122B", [e.Arabic]: "\u0623\u0646\u062F\u0648\u0631\u0627", [e.Armenian]: "\u0540\u0561\u0576\u0564\u0561\u0580\u0561\u057E\u0561\u0575\u0584", [e.Azerbaijani]: "Andorra", [e.Bashkir]: "\u0410\u043D\u0434\u043E\u0440\u0430", [e.Basque]: "Andorra", [e.Belarusian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Bengali]: "\u0985\u09A8\u09CD\u09A1\u09CB\u09B0\u09BE", [e.Berber]: "\u0623\u0646\u062F\u0648\u0631\u0627", [e.Bhutani]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", [e.Bosnian]: "Andora", [e.Breton]: "Andorra", [e.Bulgarian]: "\u0410\u043D\u0434\u043E\u0440\u0430", [e.Burmese]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102D\u102F\u1038", [e.Catalan]: "Andorra", [e.Chinese]: "\u5B89\u9053\u5C14", [e.Croatian]: "Andora", [e.Czech]: "Andorra", [e.Danish]: "Andorra", [e.Dutch]: "Andorra", [e.English]: "Andorra", [e.Esperanto]: "Andora", [e.Estonian]: "Andorra", [e.Finnish]: "Andorra", [e.French]: "Andorra", [e.Frisian]: "Andorra", [e.Galician]: "Andorra", [e.Georgian]: "\u12A0\u1295\u12F6\u122B", [e.German]: "Andorra", [e.Greek]: "\u0391\u03BD\u03B4\u03CC\u03C1\u03B1", [e.Hebrew]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", [e.Hindi]: "\u0905\u0902\u0921\u094B\u0930\u093E", [e.Hungarian]: "Andorra", [e.Icelandic]: "Andorra", [e.Igbo]: "Andorra", [e.Indonesian]: "Andorra", [e.Irish]: "Andorra", [e.Italian]: "Andorra", [e.Japanese]: "\u30A2\u30F3\u30C9\u30E9", [e.Javanese]: "Andorra", [e.Kannada]: "\u0C85\u0C82\u0CA1\u0CCB\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", [e.Kazakh]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Khmer]: "\u17A2\u1784\u17CB\u178A\u17B6\u179A\u17B6", [e.Korean]: "\uC548\uB3C4\uB77C", [e.Kurdish]: "Andorra", [e.Kyrgyz]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Lao]: "\u0EAD\u0EB1\u0E99\u0EC2\u0E94\u0EA3\u0EB2", [e.Latin]: "Andorra", [e.Latvian]: "Andora", [e.Lithuanian]: "Andora", [e.Luxembourgish]: "Andorra", [e.Macedonian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Malagasy]: "Andorra", [e.Malay]: "Andorra", [e.Malayalam]: "\u0D05\u0D02\u0D21\u0D4B\u0D30\u0D3F\u0D2F\u0D28\u0D4D", [e.Maltese]: "Andorra", [e.Maori]: "Andorra", [e.Marathi]: "\u0905\u0902\u0921\u094B\u0930\u093E", [e.Mongolian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Nepali]: "\u0905\u0902\u0921\u094B\u0930\u093E", [e.Norwegian]: "Andorra", [e.Pashto]: "\u0622\u0646\u062F\u0648\u0631\u0627", [e.Persian]: "\u0622\u0646\u062F\u0648\u0631\u0627", [e.Polish]: "Andora", [e.Portuguese]: "Andorra", [e.Punjabi]: "\u0A05\u0A70\u0A21\u0A4B\u0A30\u0A3E", [e.Romanian]: "Andorra", [e.Russian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Samoan]: "Andorra", [e.Sanskrit]: "\u0905\u0902\u0921\u094B\u0930\u093E", [e.Scots]: "Andorra", [e.Serbian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Sesotho]: "Andorra", [e.Shona]: "Andorra", [e.Sindhi]: "\u0905\u0902\u0921\u094B\u0930\u093E", [e.Sinhala]: "\u0D86\u0DB1\u0DCA\u0DAF\u0DDA", [e.Slovak]: "Andorra", [e.Slovenian]: "Andora", [e.Somali]: "Andorra", [e.Spanish]: "Andorra", [e.Sudanese]: "Andorra", [e.Swahili]: "Andorra", [e.Swedish]: "Andorra", [e.Tagalog]: "Andorra", [e.Tajik]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Tamil]: "\u0B85\u0BA9\u0BCB\u0BB0\u0BCD\u0B9F\u0BBE", [e.Tatar]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Telugu]: "\u0C05\u0C02\u0C21\u0C4B\u0C30\u0C4D\u0C30\u0C3E", [e.Thai]: "\u0E2D\u0E31\u0E19\u0E14\u0E2D\u0E23\u0E4C\u0E23\u0E32", [e.Tibetan]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", [e.Turkish]: "Andora", [e.Ukrainian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Urdu]: "\u0622\u0646\u062F\u0648\u0631\u0627", [e.Uzbek]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", [e.Vietnamese]: "Andorra", [e.Welsh]: "Andorra", [e.Xhosa]: "Andorra", [e.Yiddish]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", [e.Yoruba]: "Andorra", [e.Zulu]: "Andorra" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Andorra la Vella", total: 78e3 } }, geography: { area: 468, region: T$1.Europe, sub_region: p$1.SouthernEurope }, government: { capital: "Andorra la Vella", type: "Constitutional Monarchy" } } }, Angola: { i18n: { calling_codes: [244], currencies: [m$1.AngolaKwanza], languages: [e.Portuguese, e.Spanish, e.French, e.Italian, e.German, e.English], tz: { offsets: [n$1.UTC_0, n$1.UTC_PLUS_1, n$1.UTC_PLUS_2], regions: [u$1.AfricaLuanda], timezones: [s$2.WestAfricaTime] } }, id: r$1.Angola, info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ao/flat/64.svg" }, tld: [".ao"] }, iso: { alpha2: r$1.Angola, alpha3: "AGO", numeric: "024" }, name: { alt_spellings: ["AO", "Rep\xFAblica de Angola", "\u0281\u025Bpublika de an"], demonym: "Angolan", native: { endonym: "Angola" }, official: "Republic of Angola", short: "Angola", translations: { [e.Afrikaans]: "Angola", [e.Albanian]: "Ang\xF2la", [e.Amharic]: "\u12A0\u1295\u130E\u120A\u12EB", [e.Arabic]: "\u0623\u0646\u063A\u0648\u0644\u0627", [e.Armenian]: "\u0540\u0561\u0576\u0563\u0561\u056C\u0561\u056F\u0561", [e.Azerbaijani]: "Ang\u0259l", [e.Bashkir]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Basque]: "Angola", [e.Belarusian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Bengali]: "\u0985\u0999\u09CD\u0997\u09B2\u09BE", [e.Berber]: "Angola", [e.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42", [e.Bosnian]: "Angola", [e.Breton]: "Angola", [e.Bulgarian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Burmese]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", [e.Catalan]: "Angola", [e.Chinese]: "\u5B89\u54E5\u62C9", [e.Croatian]: "Angola", [e.Czech]: "Angola", [e.Danish]: "Angola", [e.Dutch]: "Angola", [e.English]: "Angola", [e.Esperanto]: "Angolo", [e.Estonian]: "Angola", [e.Finnish]: "Angola", [e.French]: "Angola", [e.Frisian]: "Angola", [e.Galician]: "Angola", [e.Georgian]: "\u10D0\u10DC\u10D2\u10DD\u10DA\u10D0", [e.German]: "Angola", [e.Greenlandic]: "Angola", [e.Greek]: "\u0391\u03B3\u03BA\u03CC\u03BB\u03B1", [e.Gujarati]: "\u0A85\u0A82\u0A97\u0ACB\u0AB2\u0ABE", [e.Haitian]: "Angola", [e.Hausa]: "Angola", [e.Hebrew]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", [e.Hindi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", [e.Hungarian]: "Angola", [e.Icelandic]: "Angola", [e.Igbo]: "Angola", [e.Indonesian]: "Angola", [e.Irish]: "Angola", [e.Italian]: "Angola", [e.Japanese]: "\u30A2\u30F3\u30B4\u30E9", [e.Javanese]: "Anggol", [e.Kannada]: "\u0C85\u0C82\u0C97\u0CCB\u0CB2\u0CBE", [e.Kazakh]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Khmer]: "\u17A2\u1784\u17CB\u1780\u17B6\u179B\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F", [e.Korean]: "\uC559\uACE8\uB77C", [e.Kurdish]: "Angola", [e.Kyrgyz]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Lao]: "\u0EAD\u0EB0\u0E99\u0EB2\u0E94\u0EB2", [e.Latin]: "Angola", [e.Latvian]: "Angola", [e.Lithuanian]: "Angola", [e.Luxembourgish]: "Angola", [e.Macedonian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Malagasy]: "Angola", [e.Malay]: "Angola", [e.Malayalam]: "\u0D05\u0D02\u0D17\u0D4B\u0D33\u0D3E", [e.Maltese]: "Angola", [e.Maori]: "Angola", [e.Marathi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", [e.Mongolian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Nepali]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", [e.Norwegian]: "Angola", [e.Pashto]: "\u0627\u0646\u06AB\u0648\u0644\u0627", [e.Persian]: "\u0622\u0646\u06AF\u0648\u0644\u0627", [e.Polish]: "Angola", [e.Portuguese]: "Angola", [e.Punjabi]: "\u0A05\u0A19\u0A4D\u0A17\u0A4B\u0A32\u0A3E", [e.Romanian]: "Angole", [e.Russian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Samoan]: "Angola", [e.Sanskrit]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", [e.Scots]: "Angola", [e.Serbian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Sesotho]: "Angola", [e.Shona]: "Angola", [e.Sindhi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", [e.Sinhala]: "\u0D86\u0D9C\u0DBD\u0DD2\u0DBA\u0DCF\u0DC0", [e.Slovak]: "Angola", [e.Slovenian]: "Angola", [e.Somali]: "Angola", [e.Spanish]: "Angola", [e.Sudanese]: "Angola", [e.Swahili]: "Angola", [e.Swedish]: "Angola", [e.Tagalog]: "Angola", [e.Tajik]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Tamil]: "\u0B85\u0B99\u0BCD\u0B95\u0BCB\u0BB2\u0BBE", [e.Tatar]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Telugu]: "\u0C05\u0C02\u0C17\u0C4B\u0C32\u0C3E", [e.Thai]: "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E19\u0E32\u0E21\u0E34\u0E2A\u0E16\u0E32\u0E19", [e.Tibetan]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", [e.Turkish]: "Angola", [e.Ukrainian]: "\u0410\u043D\u0433\u043E\u043B\u0430", [e.Urdu]: "\u0627\u0646\u06AF\u0648\u0644\u0627", [e.Uzbek]: "Angola", [e.Vietnamese]: "Angola", [e.Xhosa]: "Angola", [e.Welsh]: "Angola", [e.Yiddish]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", [e.Yoruba]: "Angola", [e.Zulu]: "Angola" } } }, Anguilla: { i18n: { calling_codes: [1264], currencies: [m$1.DominicaDollar, m$1.EastCaribbeanDollar, m$1.Euro, m$1.UnitedStatesDollar, m$1.BritishPound], languages: [e.English, e.Spanish], tz: { offsets: [n$1.UTC_MINUS_4], regions: [u$1.AmericaAnguilla], timezones: [s$2.AtlanticStandardTime] } }, id: r$1.Anguilla, info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ai/flat/64.svg" }, tld: [".ai"] }, iso: { alpha2: r$1.Anguilla, alpha3: "AIA", numeric: "660" }, name: { alt_spellings: ["AI"], demonym: "Anguillian", native: { endonym: "Anguilla" }, official: "Anguilla", short: "Anguilla", translations: { [e.Afrikaans]: "Anguilla", [e.Albanian]: "Anguilla", [e.Amharic]: "\u12A0\u1295\u1309\u120B", [e.Arabic]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", [e.Armenian]: "\u0531\u0576\u0563\u056B\u056C\u0561", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Basque]: "Angila", [e.Belarusian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Bengali]: "\u0985\u0999\u09CD\u0997\u09C0\u09B2\u09BE", [e.Berber]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", [e.Bhutani]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", [e.Bosnian]: "Angila", [e.Breton]: "Angila", [e.Bulgarian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Burmese]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", [e.Catalan]: "Angilla", [e.Chinese]: "\u5B89\u572D\u62C9", [e.Croatian]: "Angila", [e.Czech]: "Anguilla", [e.Danish]: "Anguilla", [e.Dutch]: "Anguilla", [e.English]: "Anguilla", [e.Esperanto]: "Angila", [e.Estonian]: "Anguilla", [e.Finnish]: "Anguilla", [e.French]: "Anguilla", [e.Frisian]: "Angila", [e.Galician]: "Anguilla", [e.Georgian]: "\u10D0\u10DC\u10D2\u10D8\u10DA\u10D0", [e.German]: "Anguilla", [e.Greenlandic]: "Anguilla", [e.Greek]: "\u0391\u03BD\u03B3\u03BA\u03C5\u03BB\u03AC", [e.Gujarati]: "\u0A85\u0A82\u0A97\u0ACD\u0AAF\u0ABE\u0AB2\u0ABE", [e.Haitian]: "Anguilla", [e.Hausa]: "Anguilla", [e.Hebrew]: "\u05D0\u05E0\u05D2\u05D5\u05D9\u05D0\u05DC\u05D4", [e.Hindi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", [e.Hungarian]: "Anguilla", [e.Icelandic]: "Anguilla", [e.Igbo]: "Anguilla", [e.Indonesian]: "Anguilla", [e.Irish]: "Anguilla", [e.Italian]: "Anguilla", [e.Japanese]: "\u30A2\u30F3\u30AE\u30E9", [e.Javanese]: "Anguilla", [e.Kannada]: "\u0C85\u0C82\u0C97\u0CCD\u0CB5\u0CC7\u0CB2\u0CBE", [e.Kazakh]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Khmer]: "\u17A2\u1784\u17CB\u1780\u17B6\u179A\u17A0\u17D2\u1782\u17B8\u1798", [e.Korean]: "\uC575\uADC8\uB77C", [e.Kurdish]: "Anguilla", [e.Kyrgyz]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Lao]: "\u0EAD\u0EB0\u0E99\u0EB0\u0E88\u0EB3", [e.Latin]: "Anguilla", [e.Latvian]: "Anguilla", [e.Lithuanian]: "Anguilla", [e.Luxembourgish]: "Angilla", [e.Macedonian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Malagasy]: "Angila", [e.Malay]: "Anguilla", [e.Malayalam]: "\u0D05\u0D02\u0D17\u0D4D\u0D35\u0D47\u0D32\u0D3E", [e.Maltese]: "Anguilla", [e.Maori]: "Anguilla", [e.Marathi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", [e.Mongolian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Nepali]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", [e.Norwegian]: "Anguilla", [e.Pashto]: "\u0622\u0646\u06AF\u0648\u0644\u0627", [e.Persian]: "\u0622\u0646\u06AF\u0648\u0644\u0627", [e.Polish]: "Anguilla", [e.Portuguese]: "Anguilla", [e.Punjabi]: "\u0A05\u0A02\u0A17\u0A40\u0A32\u0A3E", [e.Romanian]: "Anguilla", [e.Russian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Samoan]: "Anguilla", [e.Sanskrit]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", [e.Scots]: "Anguilla", [e.Serbian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Sesotho]: "Anguilla", [e.Shona]: "Anguilla", [e.Sindhi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", [e.Sinhala]: "\u0D86\u0D82\u0D9C\u0DD2\u0DBD\u0DCF\u0DC0", [e.Slovak]: "Anguilla", [e.Slovenian]: "Anguilla", [e.Somali]: "Anguilla", [e.Spanish]: "Anguilla", [e.Sudanese]: "Anguilla", [e.Swahili]: "Anguilla", [e.Swedish]: "Anguilla", [e.Tagalog]: "Anguilla", [e.Tajik]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Tamil]: "\u0B85\u0B99\u0BCD\u0B95\u0BC8\u0BB2\u0BBE", [e.Tatar]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Telugu]: "\u0C05\u0C02\u0C17\u0C4D\u0C35\u0C47\u0C32\u0C3E", [e.Thai]: "\u0E2D\u0E31\u0E07\u0E01\u0E32\u0E25\u0E32", [e.Tibetan]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", [e.Turkish]: "Anguilla", [e.Ukrainian]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Urdu]: "\u0622\u0646\u06AF\u0648\u0644\u0627", [e.Uzbek]: "\u0410\u043D\u0433\u0438\u043B\u0438", [e.Vietnamese]: "Anguilla", [e.Welsh]: "Anguilla", [e.Xhosa]: "Anguilla", [e.Yiddish]: "Anguilla", [e.Yoruba]: "Anguilla", [e.Zulu]: "Anguilla" } } }, Antarctica: { i18n: { calling_codes: [672], currencies: [m$1.UnitedStatesDollar, m$1.Euro], languages: [e.English, e.Spanish, e.French, e.Portuguese, e.Italian, e.Dutch, e.German, e.Swedish, e.Norwegian, e.Danish, e.Finnish], tz: { offsets: [n$1.UTC_PLUS_1, n$1.UTC_PLUS_2], regions: [u$1.AntarcticaCasey, u$1.AntarcticaDavis, u$1.AntarcticaMcMurdo, u$1.AntarcticaPalmer, u$1.AntarcticaRothera], timezones: [s$2.AtlanticStandardTime, s$2.CentralTime, s$2.EasternTime, s$2.AtlanticStandardTime, s$2.AzoresStandardTime, s$2.NewfoundlandStandardTime] } }, id: r$1.Antarctica, info: { flag: { emoji: "\u{1F1E6}\u{1F1F6}", emoji_unicode: "U+1F1E6 U+1F1F6", svg: "https://www.countryflags.io/aq/flat/64.svg" }, tld: [".aq"] }, iso: { alpha2: r$1.Antarctica, alpha3: "ATA", numeric: "010" }, name: { alt_spellings: ["AQ"], demonym: "Antarctican", native: { endonym: "Antarctica" }, official: "Antarctica", short: "Antarctica", translations: { [e.Afrikaans]: "Antarctica", [e.Albanian]: "Antarktika", [e.Amharic]: "\u12A0\u1295\u1272\u120D\u12AB\u1293", [e.Arabic]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", [e.Armenian]: "\u0540\u0561\u0576\u0561\u0580\u0561\u057F\u056F\u0578", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Basque]: "Antarktika", [e.Belarusian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Bengali]: "\u0985\u09A8\u09CD\u09A4\u09B0\u09BE\u09B6\u09CD\u09AC\u09C0", [e.Berber]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", [e.Bhutani]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", [e.Bosnian]: "Antarktika", [e.Breton]: "Antarktika", [e.Bulgarian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Burmese]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102E\u1038\u101A\u102C\u1038", [e.Catalan]: "Ant\xE0rtida", [e.Chinese]: "\u5357\u6781\u6D32", [e.Croatian]: "Antarktika", [e.Czech]: "Antarktida", [e.Danish]: "Antarktis", [e.Dutch]: "Antarctica", [e.English]: "Antarctica", [e.Esperanto]: "Antarktika", [e.Estonian]: "Antarktika", [e.Finnish]: "Antarktis", [e.French]: "Antarctica", [e.Frisian]: "Antarktis", [e.Galician]: "Ant\xE1rtida", [e.Georgian]: "\u10D0\u10DC\u10E2\u10D0\u10E0\u10E5\u10E2\u10D8\u10D9\u10D0", [e.German]: "Antarktis", [e.Greenlandic]: "Antarktis", [e.Greek]: "\u0391\u03BD\u03C4\u03B1\u03C1\u03BA\u03C4\u03B9\u03BA\u03AE", [e.Gujarati]: "\u0A85\u0AA8\u0ACD\u0AA4\u0AB0\u0ABE\u0AB6\u0ACD\u0AB5\u0AC0", [e.Haitian]: "Antarctica", [e.Hausa]: "Antarktika", [e.Hebrew]: "\u05D0\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4", [e.Hindi]: "\u0905\u0928\u094D\u0924\u0930\u0915\u094D\u0937\u0947\u0924\u094D\u0930", [e.Hungarian]: "Antarktika", [e.Icelandic]: "Antarktis", [e.Igbo]: "Antarktika", [e.Indonesian]: "Antarktika", [e.Irish]: "Antarktika", [e.Italian]: "Antartide", [e.Japanese]: "\u5357\u6975", [e.Javanese]: "Antarktika", [e.Kannada]: "\u0C85\u0CA8\u0CCD\u0CA4\u0CB0\u0CBE\u0CB6\u0CCD\u0CB5\u0CBF", [e.Kazakh]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Khmer]: "\u17A2\u1784\u17CB\u179F\u17D2\u1780\u179A\u17A2\u17B6\u1798\u17C9\u17BB\u1799", [e.Korean]: "\uC564\uD2F0\uCE74\uD1A0\uB2C9", [e.Kurdish]: "Antarktika", [e.Kyrgyz]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Lao]: "\u0EAD\u0EB0\u0E99\u0EAD\u0EA5\u0EB2\u0E81\u0EB4\u0EAA\u0EB0", [e.Latin]: "Antarctica", [e.Latvian]: "Antarktika", [e.Lithuanian]: "Antarktis", [e.Luxembourgish]: "Antarktis", [e.Macedonian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Malagasy]: "Antarctica", [e.Malay]: "Antarktika", [e.Malayalam]: "\u0D05\u0D28\u0D4D\u0D24\u0D30\u0D3E\u0D36\u0D4D\u0D35\u0D3F", [e.Maltese]: "Antarktika", [e.Maori]: "Antarktika", [e.Marathi]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", [e.Mongolian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Nepali]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", [e.Norwegian]: "Antarktis", [e.Pashto]: "\u0627\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", [e.Persian]: "\u0622\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", [e.Polish]: "Antarktyka", [e.Portuguese]: "Ant\xE1rtida", [e.Punjabi]: "\u0A05\u0A28\u0A4D\u0A24\u0A30\u0A3E\u0A36\u0A3F\u0A15\u0A3E", [e.Romanian]: "Antarctica", [e.Russian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Samoan]: "Antarktika", [e.Sanskrit]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", [e.Scots]: "Antarktika", [e.Serbian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Sesotho]: "Antarktika", [e.Shona]: "Antarktika", [e.Sindhi]: "Antarktika", [e.Sinhala]: "\u0D86\u0DB1\u0DCA\u0DA7\u0DCA\u0DA7\u0DD2\u0D9A\u0DCF\u0DC0", [e.Slovak]: "Antarktika", [e.Slovenian]: "Antarktika", [e.Somali]: "Antarktika", [e.Spanish]: "Ant\xE1rtida", [e.Sudanese]: "Antarktika", [e.Swahili]: "Antarktika", [e.Swedish]: "Antarktis", [e.Tagalog]: "Antarktika", [e.Tajik]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Tamil]: "\u0B85\u0BA9\u0BCD\u0BA4\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0B95\u0BCD", [e.Tatar]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Telugu]: "\u0C05\u0C28\u0C4D\u0C24\u0C30\u0C3E\u0C36\u0C4D\u0C35\u0C3F\u0C15\u0C3E", [e.Thai]: "\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E2D\u0E32\u0E19\u0E31\u0E19\u0E15\u0E34\u0E01\u0E32", [e.Tibetan]: "\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72\u0F0B\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72", [e.Turkish]: "Antarktika", [e.Ukrainian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Urdu]: "\u0627\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", [e.Uzbek]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", [e.Vietnamese]: "\u0110\u1EA5t Antarktik", [e.Welsh]: "Antarktika", [e.Xhosa]: "Antarktika", [e.Yiddish]: "Antarktika", [e.Yoruba]: "Antarktika", [e.Zulu]: "Antarktika" } } }, Armenia: { i18n: { calling_codes: [374], currencies: [m$1.ArmeniaDram], languages: [e.Armenian], tz: { offsets: [n$1.UTC_PLUS_4], regions: [u$1.AsiaJakarta], timezones: [s$2.ArmeniaTime] } }, id: r$1.Armenia, info: { flag: { emoji: "\u{1F1E6}\u{1F1F2}", emoji_unicode: "U+1F1E6 U+1F1F2", svg: "https://www.countryflags.io/am/flat/64.svg" }, tld: [".am"] }, iso: { alpha2: r$1.Armenia, alpha3: "ARM", numeric: "051" }, name: { alt_spellings: ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"], demonym: "Armenian", native: { endonym: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576" }, official: "Republic of Armenia", short: "Armenia", translations: { [e.Afrikaans]: "Armeni\xEB", [e.Albanian]: "Armenia", [e.Amharic]: "\u12A0\u121B\u122D\u129B", [e.Arabic]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", [e.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", [e.Azerbaijani]: "Az\u0259rbaycan", [e.Bashkir]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Basque]: "Arm\xE9nia", [e.Belarusian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Bengali]: "\u0986\u09B0\u09CD\u09AE\u09C7\u09A8\u09BF", [e.Berber]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", [e.Bhutani]: "\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42", [e.Bosnian]: "Armenija", [e.Breton]: "Armeni\xEB", [e.Bulgarian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Burmese]: "\u1021\u102C\u1019\u1010\u102D\u1010\u1039", [e.Catalan]: "Arm\xE8nia", [e.Chinese]: "\u4E9A\u7F8E\u5C3C\u4E9A", [e.Croatian]: "Armenija", [e.Czech]: "Arm\xE9nie", [e.Danish]: "Armenien", [e.Dutch]: "Armeni\xEB", [e.English]: "Armenia", [e.Esperanto]: "Armenia", [e.Estonian]: "Armeenia", [e.Finnish]: "Armenia", [e.French]: "Armenia", [e.Frisian]: "Armeenia", [e.Galician]: "Arm\xE9nia", [e.Georgian]: "\u10D0\u10E0\u10DB\u10DD\u10DC\u10D8", [e.German]: "Armenien", [e.Greenlandic]: "Armenia", [e.Greek]: "\u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1", [e.Gujarati]: "\u0A85\u0AB0\u0ACD\u0AAE\u0AC7\u0AA8\u0ABF", [e.Haitian]: "Armenia", [e.Hausa]: "Armenia", [e.Hebrew]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", [e.Hindi]: "\u0905\u05E8\u05DE\u05E0\u093F\u092F\u093E", [e.Hungarian]: "\xD6rm\xE9nyorsz\xE1g", [e.Icelandic]: "Armenia", [e.Igbo]: "Armenia", [e.Indonesian]: "Armenia", [e.Irish]: "Armenia", [e.Italian]: "Armenia", [e.Japanese]: "\u30A2\u30EB\u30E1\u30CB\u30A2", [e.Javanese]: "Armenia", [e.Kannada]: "\u0C85\u0CB0\u0CCD\u0CAE\u0CC7\u0CA8\u0CBF", [e.Kazakh]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Khmer]: "\u17A2\u17B6\u1798\u17C9\u17C1\u179A\u17B8", [e.Korean]: "\uC544\uB974\uBA54\uB2C8\uC544", [e.Kurdish]: "Armenia", [e.Kyrgyz]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Lao]: "\u0EAD\u0EB2\u0EAB\u0EBC\u0E99\u0EB2", [e.Latin]: "Armenia", [e.Latvian]: "Armeenia", [e.Lithuanian]: "Arm\u0117nija", [e.Luxembourgish]: "Armenien", [e.Macedonian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", [e.Malagasy]: "Armenia", [e.Malay]: "Armenia", [e.Malayalam]: "\u0D05\u0D30\u0D4D\u200D\u0D2E\u0D47\u0D28\u0D3F", [e.Maltese]: "Armenia", [e.Maori]: "Armenia", [e.Marathi]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", [e.Mongolian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Nepali]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", [e.Norwegian]: "Armenia", [e.Pashto]: "\u0622\u0631\u0645\u06CC\u0646\u06CC\u0627", [e.Persian]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", [e.Polish]: "Armenia", [e.Portuguese]: "Armenia", [e.Punjabi]: "\u0A05\u0A30\u0A2E\u0A40\u0A28\u0A40", [e.Romanian]: "Armenia", [e.Russian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Samoan]: "Armenia", [e.Sanskrit]: "Armenia", [e.Scots]: "Armenia", [e.Serbian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", [e.Sesotho]: "Armenia", [e.Shona]: "Armenia", [e.Sindhi]: "Armenia", [e.Sinhala]: "\u0D86\u0DBB\u0DCA\u0DB8\u0DD3\u0DB1\u0DD2", [e.Slovak]: "Armenia", [e.Slovenian]: "Armenija", [e.Somali]: "Armenia", [e.Spanish]: "Armenia", [e.Sudanese]: "Armenia", [e.Swahili]: "Armenia", [e.Swedish]: "Armenien", [e.Tagalog]: "Armenia", [e.Tajik]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Tamil]: "\u0B85\u0BB0\u0BCD\u0BAE\u0BC7\u0BA9\u0BBF\u0BAF\u0BA9\u0BCD", [e.Tatar]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Telugu]: "\u0C05\u0C30\u0C4D\u0C2E\u0C47\u0C28\u0C3F", [e.Thai]: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", [e.Tibetan]: "\u0F68\u0F62\u0F0B\u0F58\u0F7A\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F74\u0F0D", [e.Turkish]: "Ermenistan", [e.Ukrainian]: "\u0410\u0440\u043C\u0435\u043D\u0456\u044F", [e.Urdu]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", [e.Uzbek]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", [e.Vietnamese]: "Armenia", [e.Welsh]: "Armenia", [e.Xhosa]: "Armenia", [e.Yiddish]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", [e.Yoruba]: "Armenia", [e.Zulu]: "Armenia" } } }, SomeCountry: { i18n: { calling_codes: [], currencies: [], languages: [], tz: { offsets: [], regions: [], timezones: [] } }, id: r$1.AmericanSamoa, info: { flag: { emoji: "", emoji_unicode: "", svg: "" }, tld: [] }, iso: { alpha2: r$1.AmericanSamoa, alpha3: "", numeric: "" }, name: { alt_spellings: [], demonym: "", native: { endonym: "" }, official: "", short: "", translations: { [e.Afrikaans]: "", [e.Albanian]: "", [e.Amharic]: "", [e.Arabic]: "", [e.Armenian]: "", [e.Azerbaijani]: "", [e.Bashkir]: "", [e.Basque]: "", [e.Belarusian]: "", [e.Bengali]: "", [e.Berber]: "", [e.Bhutani]: "", [e.Bosnian]: "", [e.Breton]: "", [e.Bulgarian]: "", [e.Burmese]: "", [e.Catalan]: "", [e.Chinese]: "", [e.Croatian]: "", [e.Czech]: "", [e.Danish]: "", [e.Dutch]: "", [e.English]: "", [e.Esperanto]: "", [e.Estonian]: "", [e.Finnish]: "", [e.French]: "", [e.Frisian]: "", [e.Galician]: "", [e.Georgian]: "", [e.German]: "", [e.Greenlandic]: "", [e.Greek]: "", [e.Gujarati]: "", [e.Haitian]: "", [e.Hausa]: "", [e.Hebrew]: "", [e.Hindi]: "", [e.Hungarian]: "", [e.Icelandic]: "", [e.Igbo]: "", [e.Indonesian]: "", [e.Irish]: "", [e.Italian]: "", [e.Japanese]: "", [e.Javanese]: "", [e.Kannada]: "", [e.Kazakh]: "", [e.Khmer]: "", [e.Korean]: "", [e.Kurdish]: "", [e.Kyrgyz]: "", [e.Lao]: "", [e.Latin]: "", [e.Latvian]: "", [e.Lithuanian]: "", [e.Luxembourgish]: "", [e.Macedonian]: "", [e.Malagasy]: "", [e.Malay]: "", [e.Malayalam]: "", [e.Maltese]: "", [e.Maori]: "", [e.Marathi]: "", [e.Mongolian]: "", [e.Nepali]: "", [e.Norwegian]: "", [e.Pashto]: "", [e.Persian]: "", [e.Polish]: "", [e.Portuguese]: "", [e.Punjabi]: "", [e.Romanian]: "", [e.Russian]: "", [e.Samoan]: "", [e.Sanskrit]: "", [e.Scots]: "", [e.Serbian]: "", [e.Sesotho]: "", [e.Shona]: "", [e.Sindhi]: "", [e.Sinhala]: "", [e.Slovak]: "", [e.Slovenian]: "", [e.Somali]: "", [e.Spanish]: "", [e.Sudanese]: "", [e.Swahili]: "", [e.Swedish]: "", [e.Tagalog]: "", [e.Tajik]: "", [e.Tamil]: "", [e.Tatar]: "", [e.Telugu]: "", [e.Thai]: "", [e.Tibetan]: "", [e.Turkish]: "", [e.Ukrainian]: "", [e.Urdu]: "", [e.Uzbek]: "", [e.Vietnamese]: "", [e.Welsh]: "", [e.Xhosa]: "", [e.Yiddish]: "", [e.Yoruba]: "", [e.Zulu]: "" } } } });
({ id: e.Afrikaans, language: { code: t.Afrikaans, name: "Afrikaans", native: "Afrikaans" }, name: "Afrikaans", native_name: "Afrikaans", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.AfrikaansSouthAfrica, language: { code: t.Afrikaans, name: "Afrikaans", native: "Afrikaans" }, name: "Afrikaans (South Africa)", native_name: "Afrikaans (Suid-Afrika)", rtl: false });
({ id: e.Albanian, language: { code: t.Albanian, name: "Albanian", native: "Shqip" }, name: "Albanian", native_name: "Shqip", rtl: false });
({ country: { code: r$1.Albania, name: "Albania", native: "Shqip\xEBria" }, id: e.AlbanianAlbania, language: { code: t.Albanian, name: "Albanian", native: "Shqip" }, name: "Albanian (Albania)", native_name: "Shqip (Shqip\xEBria)", rtl: false });
({ id: e.Amharic, language: { code: t.Amharic, name: "Amharic", native: "\u12A0\u121B\u122D\u129B" }, name: "Amharic", native_name: "\u12A0\u121B\u122D\u129B", rtl: false });
({ country: { code: r$1.Ethiopia, name: "Ethiopia", native: "\u12A2\u1275\u12EE\u1335\u12EB" }, id: e.AmharicEthiopia, language: { code: t.Amharic, name: "Amharic", native: "\u12A0\u121B\u122D\u129B" }, name: "Amharic (Ethiopia)", native_name: "\u12A0\u121B\u122D\u129B (\u12A2\u1275\u12EE\u1335\u12EB)", rtl: false });
({ id: e.Arabic, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", rtl: true });
({ country: { code: r$1.Algeria, name: "Algeria", native: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631" }, id: e.ArabicAlgeria, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Algeria)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u062C\u0632\u0627\u0626\u0631)", rtl: true });
({ country: { code: r$1.Bahrain, name: "Bahrain", native: "\u0627\u0644\u0628\u062D\u0631\u064A\u0646" }, id: e.ArabicBahrain, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Bahrain)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0628\u062D\u0631\u064A\u0646)", rtl: true });
({ country: { code: r$1.Egypt, name: "Egypt", native: "\u0645\u0635\u0631" }, id: e.ArabicEgypt, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Egypt)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0645\u0635\u0631)", rtl: true });
({ country: { code: r$1.Iraq, name: "Iraq", native: "\u0627\u0644\u0639\u0631\u0627\u0642" }, id: e.ArabicIraq, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Iraq)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)", rtl: true });
({ country: { code: r$1.Jordan, name: "Jordan", native: "\u0627\u0644\u0623\u0631\u062F\u0646" }, id: e.ArabicJordan, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Jordan)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0623\u0631\u062F\u0646)", rtl: true });
({ country: { code: r$1.Kuwait, name: "Kuwait", native: "\u0627\u0644\u0643\u0648\u064A\u062A" }, id: e.ArabicKuwait, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Kuwait)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0643\u0648\u064A\u062A)", rtl: true });
({ country: { code: r$1.Lebanon, name: "Lebanon", native: "\u0644\u0628\u0646\u0627\u0646" }, id: e.ArabicLebanon, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Lebanon)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u0628\u0646\u0627\u0646)", rtl: true });
({ country: { code: r$1.Libya, name: "Libya", native: "\u0644\u064A\u0628\u064A\u0627" }, id: e.ArabicLibya, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Libya)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u064A\u0628\u064A\u0627)", rtl: true });
({ country: { code: r$1.Morocco, name: "Morocco", native: "\u0627\u0644\u0645\u063A\u0631\u0628" }, id: e.ArabicMorocco, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Morocco)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u063A\u0631\u0628)", rtl: true });
({ country: { code: r$1.Oman, name: "Oman", native: "\u0639\u0645\u0627\u0646" }, id: e.ArabicOman, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Oman)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0639\u0645\u0627\u0646)", rtl: true });
({ country: { code: r$1.Qatar, name: "Qatar", native: "\u0642\u0637\u0631" }, id: e.ArabicQatar, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Qatar)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0642\u0637\u0631)", rtl: true });
({ country: { code: r$1.SaudiArabia, name: "Saudi Arabia", native: "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629" }, id: e.ArabicSaudiArabia, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Saudi Arabia)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629)", rtl: true });
({ country: { code: r$1.Tunisia, name: "Tunisia", native: "\u062A\u0648\u0646\u0633" }, id: e.ArabicTunisia, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Tunisia)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062A\u0648\u0646\u0633)", rtl: true });
({ country: { code: r$1.UnitedArabEmirates, name: "United Arab Emirates", native: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629" }, id: e.ArabicUnitedArabEmirates, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (United Arab Emirates)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629)", rtl: true });
({ country: { code: r$1.Yemen, name: "Yemen", native: "\u0627\u0644\u064A\u0645\u0646" }, id: e.ArabicYemen, language: { code: t.Arabic, name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, name: "Arabic (Yemen)", native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u064A\u0645\u0646)", rtl: true });
({ id: e.Armenian, language: { code: t.Armenian, name: "Armenian", native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576" }, name: "Armenian", native_name: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576", rtl: false });
({ country: { code: r$1.Armenia, name: "Armenia", native: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576" }, id: e.ArmenianArmenia, language: { code: t.Armenian, name: "Armenian", native: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576" }, name: "Armenian (Armenia)", native_name: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576 (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)", rtl: false });
({ id: e.Azerbaijani, language: { code: t.Azerbaijani, name: "Azeribaijani", native: "Az\u0259rbaycan" }, name: "Azeri", native_name: "Az\u0259rbaycan", rtl: false });
({ country: { code: r$1.Azerbaijan, name: "Azerbaijan", native: "Az\u0259rbaycan" }, id: e.AzerbaijaniAzerbaijan, language: { code: t.Azerbaijani, name: "Azerbaijani", native: "Az\u0259rbaycan" }, name: "Azeri (Azerbaijan)", native_name: "Az\u0259rbaycan (Az\u0259rbaycan)", rtl: false });
({ id: e.Basque, language: { code: t.Basque, name: "Basque", native: "Euskara" }, name: "Basque", native_name: "Euskara", rtl: false });
({ country: { code: r$1.Spain, name: "Spain", native: "Espa\xF1a" }, id: e.BasqueSpain, language: { code: t.Basque, name: "Basque", native: "Euskara" }, name: "Basque (Spain)", native_name: "Euskara (Espa\xF1a)", rtl: false });
({ id: e.Belarusian, language: { code: t.Belarusian, name: "Belarusian", native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F" }, name: "Belarusian", native_name: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F", rtl: false });
({ country: { code: r$1.Belarus, name: "Belarus", native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C" }, id: e.BelarusianBelarus, language: { code: t.Belarusian, name: "Belarusian", native: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F" }, name: "Belarusian (Belarus)", native_name: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)", rtl: false });
({ id: e.Bengali, language: { code: t.Bengali, name: "Bengali", native: "\u09AC\u09BE\u0982\u09B2\u09BE" }, name: "Bengali", native_name: "\u09AC\u09BE\u0982\u09B2\u09BE", rtl: false });
({ country: { code: r$1.Bangladesh, name: "Bangladesh", native: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6" }, id: e.BengaliBangladesh, language: { code: t.Bengali, name: "Bengali", native: "\u09AC\u09BE\u0982\u09B2\u09BE" }, name: "Bengali (Bangladesh)", native_name: "\u09AC\u09BE\u0982\u09B2\u09BE (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", rtl: false });
({ id: e.Bhutani, language: { code: t.Bhutani, name: "Bhutani", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Bhutani", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42", rtl: false });
({ country: { code: r$1.Bhutan, name: "Bhutan", native: "\u0F60\u0F56\u0FB2\u0F74\u0F42" }, id: e.BhutaniBhutan, language: { code: t.Bhutani, name: "Bhutani", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Bhutani (Bhutan)", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F60\u0F56\u0FB2\u0F74\u0F42)", rtl: false });
({ id: e.Bulgarian, language: { code: t.Bulgarian, name: "Bulgarian", native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438" }, name: "Bulgarian", native_name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", rtl: false });
({ country: { code: r$1.Bulgaria, name: "Bulgaria", native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F" }, id: e.BulgarianBulgaria, language: { code: t.Bulgarian, name: "Bulgarian", native: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438" }, name: "Bulgarian (Bulgaria)", native_name: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)", rtl: false });
({ id: e.Burmese, language: { code: t.Burmese, name: "Burmese", native: "\u1017\u1019\u102C\u1005\u102C" }, name: "Burmese", native_name: "\u1017\u1019\u102C\u1005\u102C", rtl: false });
({ country: { code: r$1.Myanmar, name: "Myanmar", native: "\u1019\u103C\u1014\u103A\u1019\u102C" }, id: e.BurmeseMyanmar, language: { code: t.Burmese, name: "Burmese", native: "\u1017\u1019\u102C\u1005\u102C" }, name: "Burmese (Myanmar)", native_name: "\u1017\u1019\u102C\u1005\u102C (\u1019\u103C\u1014\u103A\u1019\u102C)", rtl: false });
({ id: e.Cantonese, language: { code: t.Cantonese, name: "Cantonese", native: "\u5EE3\u6771\u8A71" }, name: "Cantonese", native_name: "\u5EE3\u6771\u8A71", rtl: false });
({ country: { code: r$1.HongKong, name: "Hong Kong", native: "\u9999\u6E2F" }, id: e.CantoneseHongKong, language: { code: t.Cantonese, name: "Cantonese", native: "\u5EE3\u6771\u8A71" }, name: "Cantonese (Hong Kong)", native_name: "\u5EE3\u6771\u8A71 (\u9999\u6E2F)", rtl: false });
({ id: e.Catalan, language: { code: t.Catalan, name: "Catalan", native: "Catal\xE0" }, name: "Catalan", native_name: "Catal\xE0", rtl: false });
({ country: { code: r$1.Spain, name: "Spain", native: "Espa\xF1a" }, id: e.CatalanSpain, language: { code: t.Catalan, name: "Catalan", native: "Catal\xE0" }, name: "Catalan (Spain)", native_name: "Catal\xE0 (Espanya)", rtl: false });
({ id: e.ChineseSimplified, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Simplified)", native_name: "\u4E2D\u6587", rtl: false });
({ country: { code: r$1.China, name: "China", native: "\u4E2D\u56FD" }, id: e.ChineseSimplifiedChina, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Simplified/China)", native_name: "\u4E2D\u6587 (\u4E2D\u56FD)", rtl: false });
({ country: { code: r$1.HongKong, name: "Hong Kong", native: "\u9999\u6E2F" }, id: e.ChineseSimplifiedHongKong, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Simplified/Hong Kong)", native_name: "\u4E2D\u6587 (\u9999\u6E2F)", rtl: false });
({ country: { code: r$1.Macau, name: "Macau", native: "\u6FB3\u9580" }, id: e.ChineseSimplifiedMacau, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Simplified/Macau)", native_name: "\u4E2D\u6587 (\u6FB3\u9580)", rtl: false });
({ country: { code: r$1.Singapore, name: "Singapore", native: "\u65B0\u52A0\u5761" }, id: e.ChineseSimplifiedSingapore, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Simplified/Singapore)", native_name: "\u4E2D\u6587 (\u65B0\u52A0\u5761)", rtl: false });
({ id: e.ChineseTraditional, language: { code: t.Chinese, name: "Chinese", native: "\u4E2D\u6587" }, name: "Chinese (Traditional)", native_name: "\u4E2D\u6587", rtl: false });
({ country: { code: r$1.HongKong, name: "Hong Kong", native: "\u9999\u6E2F" }, id: e.ChineseTraditionalHongKong, language: { code: t.Chinese, name: "Chinese (Traditional/Hong Kong)", native: "\u4E2D\u6587" }, name: "Chinese (Hong Kong)", native_name: "\u4E2D\u6587 (\u9999\u6E2F)", rtl: false });
({ country: { code: r$1.Macau, name: "Macau", native: "\u6FB3\u9580" }, id: e.ChineseTraditionalMacau, language: { code: t.Chinese, name: "Chinese (Traditional/Macau)", native: "\u4E2D\u6587" }, name: "Chinese (Macau)", native_name: "\u4E2D\u6587 (\u6FB3\u9580)", rtl: false });
({ country: { code: r$1.Singapore, name: "Singapore", native: "\u65B0\u52A0\u5761" }, id: e.ChineseTraditionalSingapore, language: { code: t.Chinese, name: "Chinese (Traditional/Singapore)", native: "\u4E2D\u6587" }, name: "Chinese (Singapore)", native_name: "\u4E2D\u6587 (\u65B0\u52A0\u5761)", rtl: false });
({ id: e.Croatian, language: { code: t.Croatian, name: "Croatian", native: "Hrvatski" }, name: "Croatian", native_name: "Hrvatski", rtl: false });
({ country: { code: r$1.BosniaAndHerzegovina, name: "Bosnia and Herzegovina", native: "Bosna i Hercegovina" }, id: e.CroatianBosniaAndHerzegovina, language: { code: t.Croatian, name: "Croatian", native: "Hrvatski" }, name: "Croatian (Bosnia and Herzegovina)", native_name: "Hrvatski (Bosna i Hercegovina)", rtl: false });
({ country: { code: r$1.Croatia, name: "Croatia", native: "Hrvatska" }, id: e.CroatianCroatia, language: { code: t.Croatian, name: "Croatian", native: "Hrvatski" }, name: "Croatian (Croatia)", native_name: "Hrvatski (Hrvatska)", rtl: false });
({ id: e.Czech, language: { code: t.Czech, name: "Czech", native: "\u010Ce\u0161tina" }, name: "Czech", native_name: "\u010Ce\u0161tina", rtl: false });
({ country: { code: r$1.CzechRepublic, name: "Czech Republic", native: "\u010Cesk\xE1 republika" }, id: e.CzechCzechRepublic, language: { code: t.Czech, name: "Czech", native: "\u010Ce\u0161tina" }, name: "Czech (Czech Republic)", native_name: "\u010Ce\u0161tina (\u010Cesk\xE1 republika)", rtl: false });
({ id: e.Danish, language: { code: t.Danish, name: "Danish", native: "Dansk" }, name: "Danish", native_name: "Dansk", rtl: false });
({ country: { code: r$1.Denmark, name: "Denmark", native: "Danmark" }, id: e.DanishDenmark, language: { code: t.Danish, name: "Danish", native: "Dansk" }, name: "Danish (Denmark)", native_name: "Dansk (Danmark)", rtl: false });
({ id: e.Divehi, language: { code: t.Divehi, name: "Divehi", native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0" }, name: "Divehi", native_name: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0", rtl: true });
({ country: { code: r$1.Maldives, name: "Maldives", native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8 \u0783\u07A7\u0787\u07B0\u0796\u07AC" }, id: e.DivehiMaldives, language: { code: t.Divehi, name: "Divehi", native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0" }, name: "Divehi (Maldives)", native_name: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0 (\u078B\u07A8\u0788\u07AC\u0780\u07A8 \u0783\u07A7\u0787\u07B0\u0796\u07AC)", rtl: true });
({ id: e.Dutch, language: { code: t.Dutch, name: "Dutch", native: "Nederlands" }, name: "Dutch", native_name: "Nederlands", rtl: false });
({ country: { code: r$1.Belgium, name: "Belgium", native: "Belgi\xEB" }, id: e.DutchBelgium, language: { code: t.Dutch, name: "Dutch", native: "Nederlands" }, name: "Dutch (Belgium)", native_name: "Nederlands (Belgi\xEB)", rtl: false });
({ country: { code: r$1.Netherlands, name: "Netherlands", native: "Nederland" }, id: e.DutchNetherlands, language: { code: t.Dutch, name: "Dutch", native: "Nederlands" }, name: "Dutch (Netherlands)", native_name: "Nederlands (Nederland)", rtl: false });
({ id: e.English, language: { code: t.English, name: "English", native: "English" }, name: "English", native_name: "English", rtl: false });
({ country: { code: r$1.Australia, name: "Australia", native: "Australia" }, id: e.EnglishAustralia, language: { code: t.English, name: "English", native: "English" }, name: "English (Australia)", native_name: "English (Australia)", rtl: false });
({ country: { code: r$1.Belgium, name: "Belgium", native: "Belgi\xEB" }, id: e.EnglishBelgium, language: { code: t.English, name: "English", native: "English" }, name: "English (Belgium)", native_name: "English (Belgi\xEB)", rtl: false });
({ country: { code: r$1.Canada, name: "Canada", native: "Canada" }, id: e.EnglishCanada, language: { code: t.English, name: "English", native: "English" }, name: "English (Canada)", native_name: "English (Canada)", rtl: false });
({ country: { code: r$1.Ireland, name: "Ireland", native: "\xC9ire" }, id: e.EnglishIreland, language: { code: t.English, name: "English", native: "English" }, name: "English (Ireland)", native_name: "English (\xC9ire)", rtl: false });
({ country: { code: r$1.Jamaica, name: "Jamaica", native: "Jamaica" }, id: e.EnglishJamaica, language: { code: t.English, name: "English", native: "English" }, name: "English (Jamaica)", native_name: "English (Jamaica)", rtl: false });
({ country: { code: r$1.NewZealand, name: "New Zealand", native: "New Zealand" }, id: e.EnglishNewZealand, language: { code: t.English, name: "English", native: "English" }, name: "English (New Zealand)", native_name: "English (New Zealand)", rtl: false });
({ country: { code: r$1.Philippines, name: "Philippines", native: "Philippines" }, id: e.EnglishPhilippines, language: { code: t.English, name: "English", native: "English" }, name: "English (Philippines)", native_name: "English (Philippines)", rtl: false });
({ country: { code: r$1.Singapore, name: "Singapore", native: "Singapore" }, id: e.EnglishSingapore, language: { code: t.English, name: "English", native: "English" }, name: "English (Singapore)", native_name: "English (Singapore)", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.EnglishSouthAfrica, language: { code: t.English, name: "English", native: "English" }, name: "English (South Africa)", native_name: "English (South Africa)", rtl: false });
({ country: { code: r$1.TrinidadAndTobago, name: "Trinidad and Tobago", native: "Trinidad and Tobago" }, id: e.EnglishTrinidadAndTobago, language: { code: t.English, name: "English", native: "English" }, name: "English (Trinidad and Tobago)", native_name: "English (Trinidad and Tobago)", rtl: false });
({ country: { code: r$1.UnitedKingdom, name: "United Kingdom", native: "United Kingdom" }, id: e.EnglishUnitedKingdom, language: { code: t.English, name: "English", native: "English" }, name: "English (United Kingdom)", native_name: "English (United Kingdom)", rtl: false });
({ country: { code: r$1.UnitedStates, name: "United States", native: "United States" }, id: e.EnglishUnitedStates, language: { code: t.English, name: "English", native: "English" }, name: "English (United States)", native_name: "English (United States)", rtl: false });
({ country: { code: r$1.Zimbabwe, name: "Zimbabwe", native: "Zimbabwe" }, id: e.EnglishZimbabwe, language: { code: t.English, name: "English", native: "English" }, name: "English (Zimbabwe)", native_name: "English (Zimbabwe)", rtl: false });
({ id: e.Esperanto, language: { code: t.Esperanto, name: "Esperanto", native: "Esperanto" }, name: "Esperanto", native_name: "Esperanto", rtl: false });
({ id: e.Estonian, language: { code: t.Estonian, name: "Estonian", native: "Eesti" }, name: "Estonian", native_name: "Eesti", rtl: false });
({ country: { code: r$1.Estonia, name: "Estonia", native: "Eesti" }, id: e.EstonianEstonia, language: { code: t.Estonian, name: "Estonian", native: "Eesti" }, name: "Estonian (Estonia)", native_name: "Eesti (Eesti)", rtl: false });
({ id: e.Faroese, language: { code: t.Faroese, name: "Faroese", native: "F\xF8royskt" }, name: "Faroese", native_name: "F\xF8royskt", rtl: false });
({ country: { code: r$1.FaroeIslands, name: "Faroe Islands", native: "F\xF8royar" }, id: e.FaroeseFaroeIslands, language: { code: t.Faroese, name: "Faroese", native: "F\xF8royskt" }, name: "Faroese (Faroe Islands)", native_name: "F\xF8royskt (F\xF8royar)", rtl: false });
({ id: e.Farsi, language: { code: t.Farsi, name: "Farsi", native: "\u0641\u0627\u0631\u0633\u06CC" }, name: "Farsi", native_name: "\u0641\u0627\u0631\u0633\u06CC", rtl: true });
({ country: { code: r$1.Iran, name: "Iran", native: "\u0627\u06CC\u0631\u0627\u0646" }, id: e.FarsiIran, language: { code: t.Farsi, name: "Farsi", native: "\u0641\u0627\u0631\u0633\u06CC" }, name: "Farsi (Iran)", native_name: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u06CC\u0631\u0627\u0646)", rtl: true });
({ id: e.Filipino, language: { code: t.Filipino, name: "Filipino", native: "Filipino" }, name: "Filipino", native_name: "Filipino", rtl: false });
({ country: { code: r$1.Philippines, name: "Philippines", native: "Pilipinas" }, id: e.FilipinoPhilippines, language: { code: t.Filipino, name: "Filipino", native: "Filipino" }, name: "Filipino (Philippines)", native_name: "Filipino (Pilipinas)", rtl: false });
({ id: e.Finnish, language: { code: t.Finnish, name: "Finnish", native: "Suomi" }, name: "Finnish", native_name: "Suomi", rtl: false });
({ country: { code: r$1.Finland, name: "Finland", native: "Suomi" }, id: e.FinnishFinland, language: { code: t.Finnish, name: "Finnish", native: "Suomi" }, name: "Finnish (Finland)", native_name: "Suomi (Suomi)", rtl: false });
({ id: e.French, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French", native_name: "Fran\xE7ais", rtl: false });
({ country: { code: r$1.Belgium, name: "Belgium", native: "Belgique" }, id: e.FrenchBelgium, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Belgium)", native_name: "Fran\xE7ais (Belgique)", rtl: false });
({ country: { code: r$1.Canada, name: "Canada", native: "Canada" }, id: e.FrenchCanada, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Canada)", native_name: "Fran\xE7ais (Canada)", rtl: false });
({ country: { code: r$1.France, name: "France", native: "France" }, id: e.FrenchFrance, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (France)", native_name: "Fran\xE7ais (France)", rtl: false });
({ country: { code: r$1.Luxembourg, name: "Luxembourg", native: "Luxembourg" }, id: e.FrenchLuxembourg, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Luxembourg)", native_name: "Fran\xE7ais (Luxembourg)", rtl: false });
({ country: { code: r$1.Monaco, name: "Monaco", native: "Monaco" }, id: e.FrenchMonaco, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Monaco)", native_name: "Fran\xE7ais (Monaco)", rtl: false });
({ country: { code: r$1.Reunion, name: "Reunion", native: "La R\xE9union" }, id: e.FrenchReunion, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Reunion)", native_name: "Fran\xE7ais (La R\xE9union)", rtl: false });
({ country: { code: r$1.Switzerland, name: "Switzerland", native: "Suisse" }, id: e.FrenchSwitzerland, language: { code: t.French, name: "French", native: "Fran\xE7ais" }, name: "French (Switzerland)", native_name: "Fran\xE7ais (Suisse)", rtl: false });
({ id: e.Frisian, language: { code: t.Frisian, name: "Frisian", native: "Frysk" }, name: "Frisian", native_name: "Frysk", rtl: false });
({ country: { code: r$1.Netherlands, name: "Netherlands", native: "Nederland" }, id: e.FrisianNetherlands, language: { code: t.Frisian, name: "Frisian", native: "Frysk" }, name: "Frisian (Netherlands)", native_name: "Frysk (Nederland)", rtl: false });
({ id: e.Galician, language: { code: t.Galician, name: "Galician", native: "Galego" }, name: "Galician", native_name: "Galego", rtl: false });
({ country: { code: r$1.Spain, name: "Spain", native: "Espa\xF1a" }, id: e.GalicianSpain, language: { code: t.Galician, name: "Galician", native: "Galego" }, name: "Galician (Spain)", native_name: "Galego (Espa\xF1a)", rtl: false });
({ id: e.Georgian, language: { code: t.Georgian, name: "Georgian", native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8" }, name: "Georgian", native_name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8", rtl: false });
({ country: { code: r$1.Georgia, name: "Georgia", native: "\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD" }, id: e.GeorgianGeorgia, language: { code: t.Georgian, name: "Georgian", native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8" }, name: "Georgian (Georgia)", native_name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)", rtl: false });
({ id: e.German, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German", native_name: "Deutsch", rtl: false });
({ country: { code: r$1.Austria, name: "Austria", native: "\xD6sterreich" }, id: e.GermanAustria, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German (Austria)", native_name: "Deutsch (\xD6sterreich)", rtl: false });
({ country: { code: r$1.Belgium, name: "Belgium", native: "Belgi\xEB" }, id: e.GermanBelgium, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German (Belgium)", native_name: "Deutsch (Belgi\xEB)", rtl: false });
({ country: { code: r$1.Switzerland, name: "Switzerland", native: "Suisse" }, id: e.GermanSwitzerland, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German (Switzerland)", native_name: "Deutsch (Suisse)", rtl: false });
({ country: { code: r$1.Liechtenstein, name: "Liechtenstein", native: "Liechtenstein" }, id: e.GermanLiechtenstein, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German (Liechtenstein)", native_name: "Deutsch (Liechtenstein)", rtl: false });
({ country: { code: r$1.Luxembourg, name: "Luxembourg", native: "Luxembourg" }, id: e.GermanLuxembourg, language: { code: t.German, name: "German", native: "Deutsch" }, name: "German (Luxembourg)", native_name: "Deutsch (Luxembourg)", rtl: false });
({ id: e.Greek, language: { code: t.Greek, name: "Greek", native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" }, name: "Greek", native_name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", rtl: false });
({ country: { code: r$1.Greece, name: "Greece", native: "\u0395\u03BB\u03BB\u03AC\u03B4\u03B1" }, id: e.GreekGreece, language: { code: t.Greek, name: "Greek", native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" }, name: "Greek (Greece)", native_name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", rtl: false });
({ id: e.Greenlandic, language: { code: t.Greenlandic, name: "Greenlandic", native: "Kalaallisut" }, name: "Greenlandic", native_name: "Kalaallisut", rtl: false });
({ country: { code: r$1.Greenland, name: "Greenland", native: "Kalaallit Nunaat" }, id: e.GreenlandicGreenland, language: { code: t.Greenlandic, name: "Greenlandic", native: "Kalaallisut" }, name: "Greenlandic (Greenland)", native_name: "Kalaallisut (Kalaallit Nunaat)", rtl: false });
({ id: e.Gujarati, language: { code: t.Gujarati, name: "Gujarati", native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0" }, name: "Gujarati", native_name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.GujaratiIndia, language: { code: t.Gujarati, name: "Gujarati", native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0" }, name: "Gujarati (India)", native_name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 (\u092D\u093E\u0930\u0924)", rtl: false });
({ id: e.Hausa, language: { code: t.Hausa, name: "Hausa", native: "\u0647\u064E\u0648\u064F\u0633\u064E" }, name: "Hausa", native_name: "\u0647\u064E\u0648\u064F\u0633\u064E", rtl: false });
({ country: { code: r$1.Ghana, name: "Ghana", native: "Ghana" }, id: e.HausaGhana, language: { code: t.Hausa, name: "Hausa", native: "\u0647\u064E\u0648\u064F\u0633\u064E" }, name: "Hausa (Ghana)", native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Ghana)", rtl: false });
({ country: { code: r$1.Niger, name: "Niger", native: "Niger" }, id: e.HausaNiger, language: { code: t.Hausa, name: "Hausa", native: "\u0647\u064E\u0648\u064F\u0633\u064E" }, name: "Hausa (Niger)", native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Niger)", rtl: false });
({ country: { code: r$1.Nigeria, name: "Nigeria", native: "Nigeria" }, id: e.HausaNigeria, language: { code: t.Hausa, name: "Hausa", native: "\u0647\u064E\u0648\u064F\u0633\u064E" }, name: "Hausa (Nigeria)", native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Nigeria)", rtl: false });
({ id: e.Hebrew, language: { code: t.Hebrew, name: "Hebrew", native: "\u05E2\u05D1\u05E8\u05D9\u05EA" }, name: "Hebrew", native_name: "\u05E2\u05D1\u05E8\u05D9\u05EA", rtl: true });
({ country: { code: r$1.Israel, name: "Hebrew", native: "" }, id: e.HebrewIsrael, language: { code: t.Hebrew, name: "Hebrew", native: "" }, name: "Hebrew (Israel)", native_name: "", rtl: true });
({ id: e.Hindi, language: { code: t.Hindi, name: "Hindi", native: "\u0939\u093F\u0928\u094D\u0926\u0940" }, name: "Hindi", native_name: "\u0939\u093F\u0928\u094D\u0926\u0940", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.HindiIndia, language: { code: t.Hindi, name: "Hindi", native: "\u092D\u093E\u0930\u0924\u0940\u092F" }, name: "Hindi (India)", native_name: "\u092D\u093E\u0930\u0924\u0940\u092F", rtl: false });
({ id: e.Hungarian, language: { code: t.Hungarian, name: "Hungarian", native: "Magyar" }, name: "Hungarian", native_name: "Magyar", rtl: false });
({ country: { code: r$1.Hungary, name: "Hungary", native: "Magyarorsz\xE1g" }, id: e.HungarianHungary, language: { code: t.Hungarian, name: "Hungarian", native: "Magyar" }, name: "Hungarian (Hungary)", native_name: "Magyar (Magyarorsz\xE1g)", rtl: false });
({ id: e.Icelandic, language: { code: t.Icelandic, name: "Icelandic", native: "\xCDslenska" }, name: "Icelandic", native_name: "\xCDslenska", rtl: false });
({ country: { code: r$1.Iceland, name: "Iceland", native: "\xCDsland" }, id: e.IcelandicIceland, language: { code: t.Icelandic, name: "Icelandic", native: "\xCDslenska" }, name: "Icelandic (Iceland)", native_name: "\xCDslenska (\xCDsland)", rtl: false });
({ id: e.Igbo, language: { code: t.Igbo, name: "Igbo", native: "Igbo" }, name: "Igbo", native_name: "Igbo", rtl: false });
({ id: e.Indonesian, language: { code: t.Indonesian, name: "Indonesian", native: "Bahasa Indonesia" }, name: "Indonesian", native_name: "Bahasa Indonesia", rtl: false });
({ country: { code: r$1.Indonesia, name: "Indonesia", native: "Indonesia" }, id: e.IndonesianIndonesia, language: { code: t.Indonesian, name: "Indonesian", native: "Bahasa Indonesia" }, name: "Indonesian (Indonesia)", native_name: "Bahasa Indonesia (Indonesia)", rtl: false });
({ id: e.Irish, language: { code: t.Irish, name: "Irish", native: "Gaeilge" }, name: "Irish", native_name: "Gaeilge", rtl: false });
({ country: { code: r$1.Ireland, name: "Ireland", native: "\xC9ire" }, id: e.IrishIreland, language: { code: t.Irish, name: "Irish", native: "Gaeilge" }, name: "Irish (Ireland)", native_name: "Gaeilge (\xC9ire)", rtl: false });
({ id: e.Italian, language: { code: t.Italian, name: "Italian", native: "Italiano" }, name: "Italian", native_name: "Italiano", rtl: false });
({ country: { code: r$1.Italy, name: "Italy", native: "Italia" }, id: e.ItalianItaly, language: { code: t.Italian, name: "Italian", native: "Italiano" }, name: "Italian (Italy)", native_name: "Italiano (Italia)", rtl: false });
({ country: { code: r$1.Switzerland, name: "Switzerland", native: "Schweiz" }, id: e.ItalianSwitzerland, language: { code: t.Italian, name: "Italian", native: "Italiano" }, name: "Italian (Switzerland)", native_name: "Italiano (Svizzera)", rtl: false });
({ id: e.Japanese, language: { code: t.Japanese, name: "Japanese", native: "\u65E5\u672C\u8A9E" }, name: "Japanese", native_name: "\u65E5\u672C\u8A9E", rtl: false });
({ country: { code: r$1.Japan, name: "Japan", native: "\u65E5\u672C" }, id: e.JapaneseJapan, language: { code: t.Japanese, name: "Japanese", native: "\u65E5\u672C\u8A9E" }, name: "Japanese (Japan)", native_name: "\u65E5\u672C\u8A9E (\u65E5\u672C)", rtl: false });
({ id: e.Kannada, language: { code: t.Kannada, name: "Kannada", native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" }, name: "Kannada", native_name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u0CAD\u0CBE\u0CB0\u0CA4" }, id: e.KannadaIndia, language: { code: t.Kannada, name: "Kannada", native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" }, name: "Kannada (India)", native_name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (\u0CAD\u0CBE\u0CB0\u0CA4)", rtl: false });
({ id: e.Kazakh, language: { code: t.Kazakh, name: "Kazakh", native: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456" }, name: "Kazakh", native_name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456", rtl: false });
({ country: { code: r$1.Kazakhstan, name: "Kazakhstan", native: "\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D" }, id: e.KazakhKazakhstan, language: { code: t.Kazakh, name: "Kazakh", native: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456" }, name: "Kazakh (Kazakhstan)", native_name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)", rtl: false });
({ id: e.Khmer, language: { code: t.Khmer, name: "Khmer", native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A" }, name: "Khmer", native_name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A", rtl: false });
({ country: { code: r$1.Cambodia, name: "Cambodia", native: "\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6" }, id: e.KhmerCambodia, language: { code: t.Khmer, name: "Khmer", native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A" }, name: "Khmer (Cambodia)", native_name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)", rtl: false });
({ id: e.Konkani, language: { code: t.Konkani, name: "Konkani", native: "\u0915\u094B\u0902\u0915\u0923\u0940" }, name: "Konkani", native_name: "\u0915\u094B\u0902\u0915\u0923\u0940", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.KonkaniIndia, language: { code: t.Konkani, name: "Konkani", native: "\u0915\u094B\u0902\u0915\u0923\u0940" }, name: "Konkani (India)", native_name: "\u0915\u094B\u0902\u0915\u0923\u0940 (\u092D\u093E\u0930\u0924)", rtl: false });
({ id: e.Korean, language: { code: t.Korean, name: "Korean", native: "\uD55C\uAD6D\uC5B4" }, name: "Korean", native_name: "\uD55C\uAD6D\uC5B4", rtl: false });
({ country: { code: r$1.SouthKorea, name: "South Korea", native: "\uB300\uD55C\uBBFC\uAD6D" }, id: e.KoreanSouthKorea, language: { code: t.Korean, name: "Korean", native: "\uD55C\uAD6D\uC5B4" }, name: "Korean (South Korea)", native_name: "\uD55C\uAD6D\uC5B4 (\uB300\uD55C\uBBFC\uAD6D)", rtl: false });
({ id: e.Kurdish, language: { code: t.Kurdish, name: "Kurdish", native: "Kurd\xEE" }, name: "Kurdish", native_name: "Kurd\xEE", rtl: false });
({ country: { code: r$1.Iraq, name: "Iraq", native: "\u0627\u0644\u0639\u0631\u0627\u0642" }, id: e.KurdishIraq, language: { code: t.Kurdish, name: "Kurdish", native: "Kurd\xEE" }, name: "Kurdish (Iraq)", native_name: "Kurd\xEE (\u0627\u0644\u0639\u0631\u0627\u0642)", rtl: false });
({ country: { code: r$1.Turkey, name: "Turkey", native: "T\xFCrkiye" }, id: e.KurdishTurkey, language: { code: t.Kurdish, name: "Kurdish", native: "Kurd\xEE" }, name: "Kurdish (Turkey)", native_name: "Kurd\xEE (T\xFCrkiye)", rtl: false });
({ id: e.Kyrgyz, language: { code: t.Kyrgyz, name: "Kyrgyz", native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430" }, name: "Kyrgyz", native_name: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430", rtl: false });
({ country: { code: r$1.Kyrgyzstan, name: "Kyrgyzstan", native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D" }, id: e.KyrgyzKyrgyzstan, language: { code: t.Kyrgyz, name: "Kyrgyz", native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430" }, name: "Kyrgyz (Kyrgyzstan)", native_name: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430 (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)", rtl: false });
({ id: e.Lao, language: { code: t.Lao, name: "Lao", native: "\u0EA5\u0EB2\u0EA7" }, name: "Lao", native_name: "\u0EA5\u0EB2\u0EA7", rtl: false });
({ country: { code: r$1.Laos, name: "Laos", native: "\u0EAA.\u0E9B.\u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95" }, id: e.LaoLaos, language: { code: t.Lao, name: "Lao", native: "\u0EA5\u0EB2\u0EA7" }, name: "Lao (Laos)", native_name: "\u0EA5\u0EB2\u0EA7 (\u0EAA.\u0E9B.\u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95)", rtl: false });
({ id: e.Latvian, language: { code: t.Latvian, name: "Latvian", native: "Latvie\u0161u" }, name: "Latvian", native_name: "Latvie\u0161u", rtl: false });
({ country: { code: r$1.Latvia, name: "Latvia", native: "Latvija" }, id: e.LatvianLatvia, language: { code: t.Latvian, name: "Latvian", native: "Latvie\u0161u" }, name: "Latvian (Latvia)", native_name: "Latvie\u0161u (Latvija)", rtl: false });
({ id: e.Lithuanian, language: { code: t.Lithuanian, name: "Lithuanian", native: "Lietuvi\u0173" }, name: "Lithuanian", native_name: "Lietuvi\u0173", rtl: false });
({ country: { code: r$1.Lithuania, name: "Lithuania", native: "Lietuva" }, id: e.LithuanianLithuania, language: { code: t.Lithuanian, name: "Lithuanian", native: "Lietuvi\u0173" }, name: "Lithuanian (Lithuania)", native_name: "Lietuvi\u0173 (Lietuva)", rtl: false });
({ id: e.Luxembourgish, language: { code: t.Luxembourgish, name: "Luxembourgish", native: "L\xEBtzebuergesch" }, name: "Luxembourgish", native_name: "L\xEBtzebuergesch", rtl: false });
({ country: { code: r$1.Belgium, name: "Belgium", native: "Belgi\xEB" }, id: e.LuxembourgishBelgium, language: { code: t.Luxembourgish, name: "Luxembourgish", native: "L\xEBtzebuergesch" }, name: "Luxembourgish (Belgium)", native_name: "L\xEBtzebuergesch (Belgi\xEB)", rtl: false });
({ country: { code: r$1.Luxembourg, name: "Luxembourg", native: "Luxembourg" }, id: e.LuxembourgishLuxembourg, language: { code: t.Luxembourgish, name: "Luxembourgish", native: "L\xEBtzebuergesch" }, name: "Luxembourgish (Luxembourg)", native_name: "L\xEBtzebuergesch (Luxembourg)", rtl: false });
({ id: e.Macedonian, language: { code: t.Macedonian, name: "Macedonian", native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438" }, name: "Macedonian", native_name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438", rtl: false });
({ country: { code: r$1.NorthMacedonia, name: "Macedonia", native: "\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430" }, id: e.MacedonianNorthMacedonia, language: { code: t.Macedonian, name: "Macedonian", native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438" }, name: "Macedonian (North Macedonia)", native_name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)", rtl: false });
({ id: e.Malay, language: { code: t.Malay, name: "Malay", native: "Bahasa Melayu" }, name: "Malay", native_name: "Bahasa Melayu", rtl: false });
({ country: { code: r$1.Brunei, name: "Brunei", native: "Negara Brunei Darussalam" }, id: e.MalayBrunei, language: { code: t.Malay, name: "Malay", native: "Bahasa Melayu" }, name: "Malay (Brunei)", native_name: "Bahasa Melayu (Negara Brunei Darussalam)", rtl: false });
({ country: { code: r$1.Malaysia, name: "Malaysia", native: "Malaysia" }, id: e.MalayMalaysia, language: { code: t.Malay, name: "Malay", native: "Bahasa Melayu" }, name: "Malay (Malaysia)", native_name: "Bahasa Melayu (Malaysia)", rtl: false });
({ country: { code: r$1.Singapore, name: "Singapore", native: "Singapore" }, id: e.MalaySingapore, language: { code: t.Malay, name: "Malay", native: "Bahasa Melayu" }, name: "Malay (Singapore)", native_name: "Bahasa Melayu (Singapore)", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.MalayIndia, language: { code: t.Malay, name: "Malay", native: "Bahasa Melayu" }, name: "Malay (India)", native_name: "Bahasa Melayu (\u092D\u093E\u0930\u0924)", rtl: false });
({ id: e.Maltese, language: { code: t.Maltese, name: "Maltese", native: "Malti" }, name: "Maltese", native_name: "Malti", rtl: false });
({ country: { code: r$1.Malta, name: "Malta", native: "Malta" }, id: e.MalteseMalta, language: { code: t.Maltese, name: "Maltese", native: "Malti" }, name: "Maltese (Malta)", native_name: "Malti (Malta)", rtl: false });
({ id: e.Maori, language: { code: t.Maori, name: "Maori", native: "M\u0101ori" }, name: "Maori", native_name: "M\u0101ori", rtl: false });
({ country: { code: r$1.NewZealand, name: "New Zealand", native: "New Zealand" }, id: e.MaoriNewZealand, language: { code: t.Maori, name: "Maori", native: "M\u0101ori" }, name: "Maori (New Zealand)", native_name: "M\u0101ori (New Zealand)", rtl: false });
({ id: e.Marathi, language: { code: t.Marathi, name: "Marathi", native: "\u092E\u0930\u093E\u0920\u0940" }, name: "Marathi", native_name: "\u092E\u0930\u093E\u0920\u0940", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.MarathiIndia, language: { code: t.Marathi, name: "Marathi", native: "\u092E\u0930\u093E\u0920\u0940" }, name: "Marathi (India)", native_name: "\u092E\u0930\u093E\u0920\u0940 (\u092D\u093E\u0930\u0924)", rtl: false });
({ id: e.Mongolian, language: { code: t.Mongolian, name: "Mongolian", native: "\u041C\u043E\u043D\u0433\u043E\u043B" }, name: "Mongolian", native_name: "\u041C\u043E\u043D\u0433\u043E\u043B", rtl: false });
({ country: { code: r$1.Mongolia, name: "Mongolia", native: "\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441" }, id: e.MongolianMongolia, language: { code: t.Mongolian, name: "Mongolian", native: "\u041C\u043E\u043D\u0433\u043E\u043B" }, name: "Mongolian (Mongolia)", native_name: "\u041C\u043E\u043D\u0433\u043E\u043B (\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441)", rtl: false });
({ id: e.Montenegrin, language: { code: t.Montenegrin, name: "Montenegrin", native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A" }, name: "Montenegrin", native_name: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A", rtl: false });
({ country: { code: r$1.Montenegro, name: "Montenegro", native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A" }, id: e.MontenegrinMontenegro, language: { code: t.Montenegrin, name: "Montenegrin", native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A" }, name: "Montenegrin (Montenegro)", native_name: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A (\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A)", rtl: false });
({ id: e.Nepali, language: { code: t.Nepali, name: "Nepali", native: "\u0928\u0947\u092A\u093E\u0932\u0940" }, name: "Nepali", native_name: "\u0928\u0947\u092A\u093E\u0932\u0940", rtl: false });
({ country: { code: r$1.Nepal, name: "Nepal", native: "\u0928\u0947\u092A\u093E\u0932" }, id: e.NepaliNepal, language: { code: t.Nepali, name: "Nepali", native: "\u0928\u0947\u092A\u093E\u0932\u0940" }, name: "Nepali (Nepal)", native_name: "\u0928\u0947\u092A\u093E\u0932\u0940 (\u0928\u0947\u092A\u093E\u0932)", rtl: false });
({ id: e.NorthernSotho, language: { code: t.NorthernSotho, name: "Northern Sotho", native: "Sesotho sa Leboa" }, name: "Northern Sotho", native_name: "Sesotho sa Leboa", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.NorthernSothoSouthAfrica, language: { code: t.NorthernSotho, name: "Northern Sotho", native: "Sesotho sa Leboa" }, name: "Northern Sotho (South Africa)", native_name: "Sesotho sa Leboa (South Africa)", rtl: false });
({ id: e.Norwegian, language: { code: t.Norwegian, name: "Norwegian", native: "Norsk" }, name: "Norwegian", native_name: "Norsk", rtl: false });
({ country: { code: r$1.Norway, name: "Norway", native: "Norge" }, id: e.NorwegianBokmalNorway, language: { code: t.NorwegianBokmal, name: "Norwegian", native: "Norsk" }, name: "Norwegian (Bokmal)", native_name: "Norsk (Bokm\xE5l)", rtl: false });
({ country: { code: r$1.Norway, name: "Norway", native: "Norge" }, id: e.NorwegianNynorskNorway, language: { code: t.NorwegianNynorsk, name: "Norwegian", native: "Norsk" }, name: "Norwegian (Nynorsk)", native_name: "Norsk (Nynorsk)", rtl: false });
({ id: e.Oriya, language: { code: t.Oriya, name: "Oriya", native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06" }, name: "Oriya", native_name: "\u0B13\u0B21\u0B3C\u0B3F\u0B06", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE" }, id: e.OriyaIndia, language: { code: t.Oriya, name: "Oriya", native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06" }, name: "Oriya (India)", native_name: "\u0B13\u0B21\u0B3C\u0B3F\u0B06 (\u0B2D\u0B3E\u0B30\u0B24)", rtl: false });
({ id: e.Pashto, language: { code: t.Pashto, name: "Pashto", native: "\u067E\u069A\u062A\u0648" }, name: "Pashto", native_name: "\u067E\u069A\u062A\u0648", rtl: true });
({ country: { code: r$1.Afghanistan, name: "Afghanistan", native: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646" }, id: e.PashtoAfghanistan, language: { code: t.Pashto, name: "Pashto", native: "\u067E\u069A\u062A\u0648" }, name: "Pashto (Afghanistan)", native_name: "\u067E\u069A\u062A\u0648 (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)", rtl: true });
({ id: e.Persian, language: { code: t.Persian, name: "Persian", native: "\u0641\u0627\u0631\u0633\u06CC" }, name: "Persian", native_name: "\u0641\u0627\u0631\u0633\u06CC", rtl: true });
({ country: { code: r$1.Iran, name: "Iran", native: "\u0627\u06CC\u0631\u0627\u0646" }, id: e.PersianIran, language: { code: t.Persian, name: "Persian", native: "\u0641\u0627\u0631\u0633\u06CC" }, name: "Persian (Iran)", native_name: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u06CC\u0631\u0627\u0646)", rtl: true });
({ id: e.Polish, language: { code: t.Polish, name: "Polish", native: "Polski" }, name: "Polish", native_name: "Polski", rtl: false });
({ country: { code: r$1.Poland, name: "Poland", native: "Polska" }, id: e.PolishPoland, language: { code: t.Polish, name: "Polish", native: "Polski" }, name: "Polish (Poland)", native_name: "Polski (Polska)", rtl: false });
({ id: e.Portuguese, language: { code: t.Portuguese, name: "Portuguese", native: "Portugu\xEAs" }, name: "Portuguese", native_name: "Portugu\xEAs", rtl: false });
({ country: { code: r$1.Brazil, name: "Brazil", native: "Brasil" }, id: e.PortugueseBrazil, language: { code: t.Portuguese, name: "Portuguese", native: "Portugu\xEAs" }, name: "Portuguese (Brazil)", native_name: "Portugu\xEAs (Brasil)", rtl: false });
({ country: { code: r$1.Portugal, name: "Portugal", native: "Portugal" }, id: e.PortuguesePortugal, language: { code: t.Portuguese, name: "Portuguese", native: "Portugu\xEAs" }, name: "Portuguese (Portugal)", native_name: "Portugu\xEAs (Portugal)", rtl: false });
({ id: e.Punjabi, language: { code: t.Punjabi, name: "Punjabi", native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40" }, name: "Punjabi", native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", rtl: true });
({ country: { code: r$1.Pakistan, name: "Pakistan", native: "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646" }, id: e.PunjabiPakistan, language: { code: t.Punjabi, name: "Punjabi", native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40" }, name: "Punjabi (Pakistan)", native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u067E\u0627\u06A9\u0633\u062A\u0627\u0646)", rtl: true });
({ country: { code: r$1.India, name: "India", native: "\u0A2D\u0A3E\u0A30\u0A24" }, id: e.PunjabiIndia, language: { code: t.Punjabi, name: "Punjabi", native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40" }, name: "Punjabi (India)", native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u0A2D\u0A3E\u0A30\u0A24)", rtl: true });
({ id: e.Quechua, language: { code: t.Quechua, name: "Quechua", native: "Runa Simi" }, name: "Quechua", native_name: "Runa Simi", rtl: false });
({ country: { code: r$1.Bolivia, name: "Bolivia", native: "Bolivia" }, id: e.QuechuaBolivia, language: { code: t.Quechua, name: "Quechua", native: "Runa Simi" }, name: "Quechua (Bolivia)", native_name: "Runa Simi (Bolivia)", rtl: false });
({ country: { code: r$1.Ecuador, name: "Ecuador", native: "Ecuador" }, id: e.QuechuaEcuador, language: { code: t.Quechua, name: "Quechua", native: "Runa Simi" }, name: "Quechua (Ecuador)", native_name: "Runa Simi (Ecuador)", rtl: false });
({ country: { code: r$1.Peru, name: "Peru", native: "Per\xFA" }, id: e.QuechuaPeru, language: { code: t.Quechua, name: "Quechua", native: "Runa Simi" }, name: "Quechua (Peru)", native_name: "Runa Simi (Per\xFA)", rtl: false });
({ id: e.Romanian, language: { code: t.Romanian, name: "Romanian", native: "Rom\xE2n\u0103" }, name: "Romanian", native_name: "Rom\xE2n\u0103", rtl: false });
({ country: { code: r$1.Romania, name: "Romania", native: "Rom\xE2nia" }, id: e.RomanianRomania, language: { code: t.Romanian, name: "Romanian", native: "Rom\xE2n\u0103" }, name: "Romanian (Romania)", native_name: "Rom\xE2n\u0103 (Rom\xE2nia)", rtl: false });
({ id: e.Russian, language: { code: t.Russian, name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }, name: "Russian", native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", rtl: false });
({ country: { code: r$1.RussianFederation, name: "Russian Federation", native: "\u0420\u043E\u0441\u0441\u0438\u044F" }, id: e.RussianRussia, language: { code: t.Russian, name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }, name: "Russian (Russia)", native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u0420\u043E\u0441\u0441\u0438\u044F)", rtl: false });
({ country: { code: r$1.Ukraine, name: "Ukraine", native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0430" }, id: e.RussianUkraine, language: { code: t.Russian, name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }, name: "Russian (Ukraine)", native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", rtl: false });
({ country: { code: r$1.Kazakhstan, name: "Kazakhstan", native: "\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D" }, id: e.RussianKazakhstan, language: { code: t.Russian, name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }, name: "Russian (Kazakhstan)", native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)", rtl: false });
({ country: { code: r$1.Kyrgyzstan, name: "Kyrgyzstan", native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430" }, id: e.RussianKyrgyzstan, language: { code: t.Russian, name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }, name: "Russian (Kyrgyzstan)", native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430)", rtl: false });
({ id: e.Sanskrit, language: { code: t.Sanskrit, name: "Sanskrit", native: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D" }, name: "Sanskrit", native_name: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.SanskritIndia, language: { code: t.Sanskrit, name: "Sanskrit", native: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D" }, name: "Sanskrit (India)", native_name: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D (\u092D\u093E\u0930\u0924)", rtl: false });
({ id: e.Sami, language: { code: t.Sami, name: "Sami", native: "S\xE1megiella" }, name: "Sami", native_name: "S\xE1megiella", rtl: false });
({ country: { code: r$1.Finland, name: "Finland", native: "Suomi" }, id: e.SamiFinland, language: { code: t.Sami, name: "Sami", native: "S\xE1megiella" }, name: "Sami (Finland)", native_name: "S\xE1megiella (Suomi)", rtl: false });
({ country: { code: r$1.Norway, name: "Norway", native: "Norge" }, id: e.SamiNorway, language: { code: t.Sami, name: "Sami", native: "S\xE1megiella" }, name: "Sami (Norway)", native_name: "S\xE1megiella (Norge)", rtl: false });
({ country: { code: r$1.Sweden, name: "Sweden", native: "Sverige" }, id: e.SamiSweden, language: { code: t.Sami, name: "Sami", native: "S\xE1megiella" }, name: "Sami (Sweden)", native_name: "S\xE1megiella (Sverige)", rtl: false });
({ id: e.Samoan, language: { code: t.Samoan, name: "Samoan", native: "Gagana fa\u2019a S\u0101moa" }, name: "Samoan", native_name: "Gagana fa\u2019a S\u0101moa", rtl: false });
({ country: { code: r$1.Samoa, name: "Samoa", native: "Samoa" }, id: e.SamoanSamoa, language: { code: t.Samoan, name: "Samoan", native: "Gagana fa\u2019a S\u0101moa" }, name: "Samoan (Samoa)", native_name: "Gagana fa\u2019a S\u0101moa (Samoa)", rtl: false });
({ id: e.Serbian, language: { code: t.Serbian, name: "Serbian (Latin)", native: "Srpski (Latinica)" }, name: "Serbian (Latin)", native_name: "Srpski (Latinica)", rtl: false });
({ country: { code: r$1.BosniaAndHerzegovina, name: "Bosnia and Herzegovina", native: "Bosna i Hercegovina" }, id: e.SerbianBosniaAndHerzegovina, language: { code: t.Serbian, name: "Serbian (Latin)", native: "Srpski (Latinica)" }, name: "Serbian (Latin) (Bosnia and Herzegovina)", native_name: "Srpski (Latinica) (Bosna i Hercegovina)", rtl: false });
({ country: { code: r$1.SerbiaAndMontenegro, name: "Serbia and Montenegro", native: "Srbija i Crna Gora" }, id: e.SerbianSerbiaAndMontenegro, language: { code: t.Serbian, name: "Serbian (Latin)", native: "Srpski (Latinica)" }, name: "Serbian (Latin) (Serbia and Montenegro)", native_name: "Srpski (Latinica) (Srbija i Crna Gora)", rtl: false });
({ id: e.SerbianCyrillic, language: { code: t.SerbianCyrillic, name: "Serbian", native: "\u0421\u0440\u043F\u0441\u043A\u0438" }, name: "Serbian (Cyrillic)", native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)", rtl: false });
({ country: { code: r$1.BosniaAndHerzegovina, name: "Bosnia and Herzegovina", native: "\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430" }, id: e.SerbianCyrillicBosniaAndHerzegovina, language: { code: t.SerbianCyrillic, name: "Serbian", native: "\u0421\u0440\u043F\u0441\u043A\u0438" }, name: "Serbian (Cyrillic, Bosnia and Herzegovina)", native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)", rtl: false });
({ country: { code: r$1.SerbiaAndMontenegro, name: "Serbia and Montenegro", native: "\u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430" }, id: e.SerbianCyrillicSerbiaAndMontenegro, language: { code: t.SerbianCyrillic, name: "Serbian", native: "\u0421\u0440\u043F\u0441\u043A\u0438" }, name: "Serbian (Cyrillic, Serbia and Montenegro)", native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430)", rtl: false });
({ id: e.Slovak, language: { code: t.Slovak, name: "Slovak", native: "Sloven\u010Dina" }, name: "Slovak", native_name: "Sloven\u010Dina", rtl: false });
({ country: { code: r$1.Slovakia, name: "Slovakia", native: "Slovensko" }, id: e.SlovakSlovakia, language: { code: t.Slovak, name: "Slovak", native: "Sloven\u010Dina" }, name: "Slovak (Slovakia)", native_name: "Sloven\u010Dina (Slovensko)", rtl: false });
({ id: e.Slovenian, language: { code: t.Slovenian, name: "Slovenian", native: "Sloven\u0161\u010Dina" }, name: "Slovenian", native_name: "Sloven\u0161\u010Dina", rtl: false });
({ country: { code: r$1.Slovenia, name: "Slovenia", native: "Slovenija" }, id: e.SlovenianSlovenia, language: { code: t.Slovenian, name: "Slovenian", native: "Sloven\u0161\u010Dina" }, name: "Slovenian (Slovenia)", native_name: "Sloven\u0161\u010Dina (Slovenija)", rtl: false });
({ id: e.Somali, language: { code: t.Somali, name: "Somali", native: "Soomaaliga" }, name: "Somali", native_name: "Soomaaliga", rtl: true });
({ country: { code: r$1.Somalia, name: "Somalia", native: "Soomaaliya" }, id: e.SomaliSomalia, language: { code: t.Somali, name: "Somali", native: "Soomaaliga" }, name: "Somali (Somalia)", native_name: "Soomaaliga (Soomaaliya)", rtl: true });
({ id: e.Spanish, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish", native_name: "Espa\xF1ol", rtl: false });
({ country: { code: r$1.Argentina, name: "Argentina", native: "Argentina" }, id: e.SpanishArgentina, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Argentina)", native_name: "Espa\xF1ol (Argentina)", rtl: false });
({ country: { code: r$1.Bolivia, name: "Bolivia", native: "Bolivia" }, id: e.SpanishBolivia, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Bolivia)", native_name: "Espa\xF1ol (Bolivia)", rtl: false });
({ country: { code: r$1.Chile, name: "Chile", native: "Chile" }, id: e.SpanishChile, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Chile)", native_name: "Espa\xF1ol (Chile)", rtl: false });
({ country: { code: r$1.Colombia, name: "Colombia", native: "Colombia" }, id: e.SpanishColombia, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Colombia)", native_name: "Espa\xF1ol (Colombia)", rtl: false });
({ country: { code: r$1.CostaRica, name: "Costa Rica", native: "Costa Rica" }, id: e.SpanishCostaRica, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Costa Rica)", native_name: "Espa\xF1ol (Costa Rica)", rtl: false });
({ country: { code: r$1.Cuba, name: "Cuba", native: "Cuba" }, id: e.SpanishCuba, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Cuba)", native_name: "Espa\xF1ol (Cuba)", rtl: false });
({ country: { code: r$1.DominicanRepublic, name: "Dominican Republic", native: "Rep\xFAblica Dominicana" }, id: e.SpanishDominicanRepublic, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Dominican Republic)", native_name: "Espa\xF1ol (Rep\xFAblica Dominicana)", rtl: false });
({ country: { code: r$1.Ecuador, name: "Ecuador", native: "Ecuador" }, id: e.SpanishEcuador, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Ecuador)", native_name: "Espa\xF1ol (Ecuador)", rtl: false });
({ country: { code: r$1.ElSalvador, name: "El Salvador", native: "El Salvador" }, id: e.SpanishElSalvador, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (El Salvador)", native_name: "Espa\xF1ol (El Salvador)", rtl: false });
({ country: { code: r$1.EquatorialGuinea, name: "Equatorial Guinea", native: "Guinea Ecuatorial" }, id: e.SpanishEquatorialGuinea, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Equatorial Guinea)", native_name: "Espa\xF1ol (Guinea Ecuatorial)", rtl: false });
({ country: { code: r$1.Guatemala, name: "Guatemala", native: "Guatemala" }, id: e.SpanishGuatemala, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Guatemala)", native_name: "Espa\xF1ol (Guatemala)", rtl: false });
({ country: { code: r$1.Honduras, name: "Honduras", native: "Honduras" }, id: e.SpanishHonduras, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Honduras)", native_name: "Espa\xF1ol (Honduras)", rtl: false });
({ country: { code: r$1.Mexico, name: "Mexico", native: "M\xE9xico" }, id: e.SpanishMexico, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Mexico)", native_name: "Espa\xF1ol (M\xE9xico)", rtl: false });
({ country: { code: r$1.Nicaragua, name: "Nicaragua", native: "Nicaragua" }, id: e.SpanishNicaragua, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Nicaragua)", native_name: "Espa\xF1ol (Nicaragua)", rtl: false });
({ country: { code: r$1.Panama, name: "Panama", native: "Panam\xE1" }, id: e.SpanishPanama, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Panama)", native_name: "Espa\xF1ol (Panam\xE1)", rtl: false });
({ country: { code: r$1.Paraguay, name: "Paraguay", native: "Paraguay" }, id: e.SpanishParaguay, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Paraguay)", native_name: "Espa\xF1ol (Paraguay)", rtl: false });
({ country: { code: r$1.Peru, name: "Peru", native: "Per\xFA" }, id: e.SpanishPeru, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Peru)", native_name: "Espa\xF1ol (Per\xFA)", rtl: false });
({ country: { code: r$1.PuertoRico, name: "Puerto Rico", native: "Puerto Rico" }, id: e.SpanishPuertoRico, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Puerto Rico)", native_name: "Espa\xF1ol (Puerto Rico)", rtl: false });
({ country: { code: r$1.Uruguay, name: "Uruguay", native: "Uruguay" }, id: e.SpanishUruguay, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Uruguay)", native_name: "Espa\xF1ol (Uruguay)", rtl: false });
({ country: { code: r$1.Venezuela, name: "Venezuela", native: "Venezuela" }, id: e.SpanishVenezuela, language: { code: t.Spanish, name: "Spanish", native: "Espa\xF1ol" }, name: "Spanish (Venezuela)", native_name: "Espa\xF1ol (Venezuela)", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.SutuSouthAfrica, language: { code: t.Sutu, name: "Sutu", native: "Sesotho" }, name: "Sutu (South Africa)", native_name: "Sesotho (Afrika Borwa)", rtl: false });
({ id: e.Swahili, language: { code: t.Swahili, name: "Swahili", native: "Kiswahili" }, name: "Swahili", native_name: "Kiswahili", rtl: false });
({ country: { code: r$1.Kenya, name: "Kenya", native: "Kenya" }, id: e.SwahiliKenya, language: { code: t.Swahili, name: "Swahili", native: "Kiswahili" }, name: "Swahili (Kenya)", native_name: "Kiswahili (Kenya)", rtl: false });
({ id: e.Swedish, language: { code: t.Swedish, name: "Swedish", native: "Svenska" }, name: "Swedish", native_name: "Svenska", rtl: false });
({ country: { code: r$1.Finland, name: "Finland", native: "Suomi" }, id: e.SwedishFinland, language: { code: t.Swedish, name: "Swedish", native: "Svenska" }, name: "Swedish (Finland)", native_name: "Svenska (Finland)", rtl: false });
({ country: { code: r$1.Sweden, name: "Sweden", native: "Sverige" }, id: e.SwedishSweden, language: { code: t.Swedish, name: "Swedish", native: "Svenska" }, name: "Swedish (Sweden)", native_name: "Svenska (Sverige)", rtl: false });
({ id: e.Syriac, language: { code: t.Syriac, name: "Syriac", native: "\u0723\u0718\u072A\u071D\u071D\u0710" }, name: "Syriac", native_name: "\u0723\u0718\u072A\u071D\u071D\u0710", rtl: true });
({ country: { code: r$1.Syria, name: "Syria", native: "\u0633\u0648\u0631\u064A\u0627" }, id: e.SyriacSyria, language: { code: t.Syriac, name: "Syriac", native: "\u0723\u0718\u072A\u071D\u071D\u0710" }, name: "Syriac (Syria)", native_name: "\u0723\u0718\u072A\u071D\u071D\u0710 (\u0633\u0648\u0631\u064A\u0627)", rtl: true });
({ id: e.Tajik, language: { code: t.Tajik, name: "Tajik", native: "\u0422\u043E\u04B7\u0438\u043A\u04E3" }, name: "Tajik", native_name: "\u0422\u043E\u04B7\u0438\u043A\u04E3", rtl: false });
({ country: { code: r$1.Tajikistan, name: "Tajikistan", native: "\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D" }, id: e.TajikTajikistan, language: { code: t.Tajik, name: "Tajik", native: "\u0422\u043E\u04B7\u0438\u043A\u04E3" }, name: "Tajik (Tajikistan)", native_name: "\u0422\u043E\u04B7\u0438\u043A\u04E3 (\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D)", rtl: false });
({ id: e.Tagalog, language: { code: t.Tagalog, name: "Tagalog", native: "Tagalog" }, name: "Tagalog", native_name: "Tagalog", rtl: false });
({ country: { code: r$1.Philippines, name: "Philippines", native: "Pilipinas" }, id: e.TagalogPhilippines, language: { code: t.Tagalog, name: "Tagalog", native: "Tagalog" }, name: "Tagalog (Philippines)", native_name: "Tagalog (Pilipinas)", rtl: false });
({ id: e.Tamil, language: { code: t.Tamil, name: "Tamil", native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" }, name: "Tamil", native_name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE" }, id: e.TamilIndia, language: { code: t.Tamil, name: "Tamil", native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" }, name: "Tamil (India)", native_name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)", rtl: false });
({ id: e.Telugu, language: { code: t.Telugu, name: "Telugu", native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41" }, name: "Telugu", native_name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u0C2D\u0C3E\u0C30\u0C24\u0C26\u0C47\u0C36\u0C02" }, id: e.TeluguIndia, language: { code: t.Telugu, name: "Telugu", native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41" }, name: "Telugu (India)", native_name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (\u0C2D\u0C3E\u0C30\u0C24\u0C26\u0C47\u0C36\u0C02)", rtl: false });
({ id: e.Thai, language: { code: t.Thai, name: "Thai", native: "\u0E44\u0E17\u0E22" }, name: "Thai", native_name: "\u0E44\u0E17\u0E22", rtl: false });
({ country: { code: r$1.Thailand, name: "Thailand", native: "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22" }, id: e.ThaiThailand, language: { code: t.Thai, name: "Thai", native: "\u0E44\u0E17\u0E22" }, name: "Thai (Thailand)", native_name: "\u0E44\u0E17\u0E22 (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22)", rtl: false });
({ id: e.Tibetan, language: { code: t.Tibetan, name: "Tibetan", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Tibetan", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42", rtl: false });
({ country: { code: r$1.China, name: "China", native: "\u4E2D\u56FD" }, id: e.TibetanChina, language: { code: t.Tibetan, name: "Tibetan", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Tibetan (China)", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42)", rtl: false });
({ country: { code: r$1.Bhutan, name: "Bhutan", native: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7A\u0F53\u0F4C\u0F0D" }, id: e.TibetanBhutan, language: { code: t.Tibetan, name: "Tibetan", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Tibetan (Bhutan)", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7A\u0F53\u0F4C\u0F0D)", rtl: false });
({ country: { code: r$1.India, name: "India", native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE" }, id: e.TibetanIndia, language: { code: t.Tibetan, name: "Tibetan", native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }, name: "Tibetan (India)", native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)", rtl: false });
({ id: e.Tsonga, language: { code: t.Tsonga, name: "Tsonga", native: "Xitsonga" }, name: "Tsonga", native_name: "Xitsonga", rtl: false });
({ id: e.Tswana, language: { code: t.Tswana, name: "Tswana", native: "Setswana" }, name: "Tswana", native_name: "Setswana", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.TswanaSouthAfrica, language: { code: t.Tswana, name: "Tswana", native: "Setswana" }, name: "Tswana (South Africa)", native_name: "Setswana (South Africa)", rtl: false });
({ id: e.Turkish, language: { code: t.Turkish, name: "Turkish", native: "T\xFCrk\xE7e" }, name: "Turkish", native_name: "T\xFCrk\xE7e", rtl: false });
({ country: { code: r$1.Turkey, name: "Turkey", native: "T\xFCrkiye" }, id: e.TurkishTurkey, language: { code: t.Turkish, name: "Turkish", native: "T\xFCrk\xE7e" }, name: "Turkish (Turkey)", native_name: "T\xFCrk\xE7e (T\xFCrkiye)", rtl: false });
({ id: e.Ukrainian, language: { code: t.Ukrainian, name: "Ukrainian", native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" }, name: "Ukrainian", native_name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", rtl: false });
({ country: { code: r$1.Ukraine, name: "Ukraine", native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0430" }, id: e.UkrainianUkraine, language: { code: t.Ukrainian, name: "Ukrainian", native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" }, name: "Ukrainian (Ukraine)", native_name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", rtl: false });
({ id: e.Urdu, language: { code: t.Urdu, name: "Urdu", native: "\u0627\u0631\u062F\u0648" }, name: "Urdu", native_name: "\u0627\u0631\u062F\u0648", rtl: true });
({ country: { code: r$1.Afghanistan, name: "Afghanistan", native: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646" }, id: e.UrduAfghanistan, language: { code: t.Urdu, name: "Urdu", native: "\u0627\u0631\u062F\u0648" }, name: "Urdu (Afghanistan)", native_name: "\u0627\u0631\u062F\u0648 (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)", rtl: true });
({ country: { code: r$1.India, name: "India", native: "\u092D\u093E\u0930\u0924" }, id: e.UrduIndia, language: { code: t.Urdu, name: "Urdu", native: "\u0627\u0631\u062F\u0648" }, name: "Urdu (India)", native_name: "\u0627\u0631\u062F\u0648 (\u092D\u093E\u0930\u0924)", rtl: true });
({ country: { code: r$1.Pakistan, name: "Pakistan", native: "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646" }, id: e.UrduPakistan, language: { code: t.Urdu, name: "Urdu", native: "\u0627\u0631\u062F\u0648" }, name: "Urdu (Pakistan)", native_name: "\u0627\u0631\u062F\u0648 (\u067E\u0627\u06A9\u0633\u062A\u0627\u0646)", rtl: true });
({ id: e.Uzbek, language: { code: t.Uzbek, name: "Uzbek", native: "O\u02BBzbekcha" }, name: "Uzbek", native_name: "O\u02BBzbekcha", rtl: false });
({ country: { code: r$1.Uzbekistan, name: "Uzbekistan", native: "O\u02BBzbekiston" }, id: e.UzbekUzbekistan, language: { code: t.Uzbek, name: "Uzbek", native: "O\u02BBzbekcha" }, name: "Uzbek (Latin, Uzbekistan)", native_name: "O\u02BBzbekcha (O\u02BBzbekiston)", rtl: false });
({ country: { code: r$1.Uzbekistan, name: "Uzbekistan", native: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D" }, id: e.UzbekCyrillic, language: { code: t.Uzbek, name: "Uzbek", native: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D" }, name: "Uzbek (Cyrillic)", native_name: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D (\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D)", rtl: false });
({ id: e.Vietnamese, language: { code: t.Vietnamese, name: "Vietnamese", native: "Ti\u1EBFng Vi\u1EC7t" }, name: "Vietnamese", native_name: "Ti\u1EBFng Vi\u1EC7t", rtl: false });
({ country: { code: r$1.Vietnam, name: "Vietnam", native: "Vi\u1EC7t Nam" }, id: e.VietnameseVietnam, language: { code: t.Vietnamese, name: "Vietnamese", native: "Ti\u1EBFng Vi\u1EC7t" }, name: "Vietnamese (Vietnam)", native_name: "Ti\u1EBFng Vi\u1EC7t (Vi\u1EC7t Nam)", rtl: false });
({ id: e.Welsh, language: { code: t.Welsh, name: "Welsh", native: "Cymraeg" }, name: "Welsh", native_name: "Cymraeg", rtl: false });
({ country: { code: r$1.UnitedKingdom, name: "United Kingdom", native: "United Kingdom" }, id: e.WelshUnitedKingdom, language: { code: t.Welsh, name: "Welsh", native: "Cymraeg" }, name: "Welsh (United Kingdom)", native_name: "Cymraeg (United Kingdom)", rtl: false });
({ id: e.Xhosa, language: { code: t.Xhosa, name: "Xhosa", native: "isiXhosa" }, name: "Xhosa", native_name: "isiXhosa", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.XhosaSouthAfrica, language: { code: t.Xhosa, name: "Xhosa", native: "isiXhosa" }, name: "Xhosa (South Africa)", native_name: "isiXhosa (South Africa)", rtl: false });
({ id: e.Yiddish, language: { code: t.Yiddish, name: "Yiddish", native: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9" }, name: "Yiddish", native_name: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9", rtl: false });
({ id: e.Yoruba, language: { code: t.Yoruba, name: "Yoruba", native: "Yor\xF9b\xE1" }, name: "Yoruba", native_name: "Yor\xF9b\xE1", rtl: false });
({ country: { code: r$1.Nigeria, name: "Nigeria", native: "Nigeria" }, id: e.YorubaNigeria, language: { code: t.Yoruba, name: "Yoruba", native: "Yor\xF9b\xE1" }, name: "Yoruba (Nigeria)", native_name: "Yor\xF9b\xE1 (Nigeria)", rtl: false });
({ id: e.Zulu, language: { code: t.Zulu, name: "Zulu", native: "isiZulu" }, name: "Zulu", native_name: "isiZulu", rtl: false });
({ country: { code: r$1.SouthAfrica, name: "South Africa", native: "South Africa" }, id: e.ZuluSouthAfrica, language: { code: t.Zulu, name: "Zulu", native: "isiZulu" }, name: "Zulu (South Africa)", native_name: "isiZulu (South Africa)", rtl: false });
({ id: u$1.AfricaAbidjan, name: "Africa/Abidjan", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaAccra, name: "Africa/Accra", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaAddisAbaba, name: "Africa/Addis_Ababa", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaAlgiers, name: "Africa/Algiers", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.AfricaAsmara, name: "Africa/Asmara", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaBamako, name: "Africa/Bamako", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaBangui, name: "Africa/Bangui", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaBanjul, name: "Africa/Banjul", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaBissau, name: "Africa/Bissau", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaBlantyre, name: "Africa/Blantyre", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaBrazzaville, name: "Africa/Brazzaville", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaBujumbura, name: "Africa/Bujumbura", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaCairo, name: "Africa/Cairo", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AfricaCasablanca, name: "Africa/Casablanca", offset: n$1.UTC_PLUS_1, timezone: s$2.WesternEuropeanTime });
({ id: u$1.AfricaCeuta, name: "Africa/Ceuta", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.AfricaConakry, name: "Africa/Conakry", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaDakar, name: "Africa/Dakar", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaDarEsSalaam, name: "Africa/Dar_es_Salaam", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaDjibouti, name: "Africa/Djibouti", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaDouala, name: "Africa/Douala", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaElAaiun, name: "Africa/El_Aaiun", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaFreetown, name: "Africa/Freetown", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaGaborone, name: "Africa/Gaborone", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaHarare, name: "Africa/Harare", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaJohannesburg, name: "Africa/Johannesburg", offset: n$1.UTC_PLUS_2, timezone: s$2.SouthAfricanStandardTime });
({ id: u$1.AfricaJuba, name: "Africa/Juba", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaKampala, name: "Africa/Kampala", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaKhartoum, name: "Africa/Khartoum", offset: n$1.UTC_PLUS_2, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaKigali, name: "Africa/Kigali", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaKinshasa, name: "Africa/Kinshasa", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaLagos, name: "Africa/Lagos", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaLibreville, name: "Africa/Libreville", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaLome, name: "Africa/Lome", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaLuanda, name: "Africa/Luanda", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaLubumbashi, name: "Africa/Lubumbashi", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaLusaka, name: "Africa/Lusaka", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaMalabo, name: "Africa/Malabo", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaMaputo, name: "Africa/Maputo", offset: n$1.UTC_PLUS_2, timezone: s$2.CentralAfricaTime });
({ id: u$1.AfricaMaseru, name: "Africa/Maseru", offset: n$1.UTC_PLUS_2, timezone: s$2.SouthAfricanStandardTime });
({ id: u$1.AfricaMbabane, name: "Africa/Mbabane", offset: n$1.UTC_PLUS_2, timezone: s$2.SouthAfricanStandardTime });
({ id: u$1.AfricaMogadishu, name: "Africa/Mogadishu", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaMonrovia, name: "Africa/Monrovia", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaNairobi, name: "Africa/Nairobi", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.AfricaNdjamena, name: "Africa/Ndjamena", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaNiamey, name: "Africa/Niamey", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaNouakchott, name: "Africa/Nouakchott", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.AfricaOuagadougou, name: "Africa/Ouagadougou", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaPortoNovo, name: "Africa/Porto-Novo", offset: n$1.UTC_PLUS_1, timezone: s$2.WestAfricaTime });
({ id: u$1.AfricaSaoTome, name: "Africa/SaoTome", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaTripoli, name: "Africa/Tripoli", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaTunis, name: "Africa/Tunis", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AfricaWindhoek, name: "Africa/Windhoek", offset: n$1.UTC_PLUS_2, timezone: s$2.WestAfricaTime });
({ id: u$1.AmericaAdak, name: "America/Adak", offset: n$1.UTC_PLUS_10, timezone: s$2.HawaiiAleutianStandardTime });
({ id: u$1.AmericaAnchorage, name: "America/Anchorage", offset: n$1.UTC_PLUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaAnguilla, name: "America/Anguilla", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaAntigua, name: "America/Antigua", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaAraguaina, name: "America/Araguaina", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaArgentinaBuenosAires, name: "America/Argentina/Buenos_Aires", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaCatamarca, name: "America/Argentina/Catamarca", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaCordoba, name: "America/Argentina/Cordoba", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaJujuy, name: "America/Argentina/Jujuy", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaLaRioja, name: "America/Argentina/La_Rioja", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaMendoza, name: "America/Argentina/Mendoza", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaRioGallegos, name: "America/Argentina/Rio_Gallegos", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaSalta, name: "America/Argentina/Salta", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaSanJuan, name: "America/Argentina/San_Juan", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaSanLuis, name: "America/Argentina/San_Luis", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaTucuman, name: "America/Argentina/Tucuman", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaArgentinaUshuaia, name: "America/Argentina/Ushuaia", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaAruba, name: "America/Aruba", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaAsuncion, name: "America/Asuncion", offset: n$1.UTC_MINUS_4, timezone: s$2.ParaguayTime });
({ id: u$1.AmericaAtikokan, name: "America/Atikokan", offset: n$1.UTC_0, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaAtka, name: "America/Atka", offset: n$1.UTC_MINUS_10, timezone: s$2.HawaiiAleutianStandardTime });
({ id: u$1.AmericaBahia, name: "America/Bahia", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaBahiaBanderas, name: "America/Bahia_Banderas", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaBarbados, name: "America/Barbados", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaBelem, name: "America/Belem", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaBelize, name: "America/Belize", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaBlancSablon, name: "America/Blanc-Sablon", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaBoaVista, name: "America/Boa_Vista", offset: n$1.UTC_MINUS_4, timezone: s$2.AmazonTime });
({ id: u$1.AmericaBogota, name: "America/Bogota", offset: n$1.UTC_MINUS_5, timezone: s$2.ColombiaTime });
({ id: u$1.AmericaBoise, name: "America/Boise", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaCambridgeBay, name: "America/Cambridge_Bay", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaCampoGrande, name: "America/Campo_Grande", offset: n$1.UTC_MINUS_4, timezone: s$2.AmazonTime });
({ id: u$1.AmericaCancun, name: "America/Cancun", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaCaracas, name: "America/Caracas", offset: n$1.UTC_MINUS_4, timezone: s$2.VenezuelaStandardTime });
({ id: u$1.AmericaCayenne, name: "America/Cayenne", offset: n$1.UTC_MINUS_3, timezone: s$2.FrenchGuianaTime });
({ id: u$1.AmericaCayman, name: "America/Cayman", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaChicago, name: "America/Chicago", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaChihuahua, name: "America/Chihuahua", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaCoralHarbour, name: "America/Coral_Harbour", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaCordoba, name: "America/Cordoba", offset: n$1.UTC_MINUS_3, timezone: s$2.ArgentinaTime });
({ id: u$1.AmericaCostaRica, name: "America/Costa_Rica", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaCreston, name: "America/Creston", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaCuiaba, name: "America/Cuiaba", offset: n$1.UTC_MINUS_4, timezone: s$2.AmazonTime });
({ id: u$1.AmericaCuracao, name: "America/Curacao", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaDanmarkshavn, name: "America/Danmarkshavn", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.AmericaDawson, name: "America/Dawson", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaDawsonCreek, name: "America/Dawson_Creek", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaDenver, name: "America/Denver", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaDetroit, name: "America/Detroit", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaDominica, name: "America/Dominica", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaEdmonton, name: "America/Edmonton", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaEirunepe, name: "America/Eirunepe", offset: n$1.UTC_MINUS_5, timezone: s$2.AcreTime });
({ id: u$1.AmericaElSalvador, name: "America/El_Salvador", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaFortaleza, name: "America/Fortaleza", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaGlaceBay, name: "America/Glace_Bay", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaGodthab, name: "America/Godthab", offset: n$1.UTC_MINUS_3, timezone: s$2.WestGreenlandTime });
({ id: u$1.AmericaGooseBay, name: "America/Goose_Bay", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaGrandTurk, name: "America/Grand_Turk", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaGrenada, name: "America/Grenada", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaGuadeloupe, name: "America/Guadeloupe", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaGuatemala, name: "America/Guatemala", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaGuayaquil, name: "America/Guayaquil", offset: n$1.UTC_MINUS_5, timezone: s$2.EcuadorTime });
({ id: u$1.AmericaGuyana, name: "America/Guyana", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaHalifax, name: "America/Halifax", offset: n$1.UTC_0, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaHavana, name: "America/Havana", offset: n$1.UTC_MINUS_5, timezone: s$2.CubaStandardTime });
({ id: u$1.AmericaHermosillo, name: "America/Hermosillo", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaIndianaIndianapolis, name: "America/Indiana/Indianapolis", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaIndianaKnox, name: "America/Indiana/Knox", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaIndianaMarengo, name: "America/Indiana/Marengo", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaIndianaPetersburg, name: "America/Indiana/Petersburg", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaIndianaTellCity, name: "America/Indiana/Tell_City", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaIndianaVevay, name: "America/Indiana/Vevay", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaIndianaVincennes, name: "America/Indiana/Vincennes", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaIndianaWinamac, name: "America/Indiana/Winamac", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaInuvik, name: "America/Inuvik", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaIqaluit, name: "America/Iqaluit", offset: n$1.UTC_0, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaJamaica, name: "America/Jamaica", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaJuneau, name: "America/Juneau", offset: n$1.UTC_MINUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaKentuckyLouisville, name: "America/Kentucky/Louisville", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaKentuckyMonticello, name: "America/Kentucky/Monticello", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaKralendijk, name: "America/Kralendijk", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaLaPaz, name: "America/La_Paz", offset: n$1.UTC_MINUS_4, timezone: s$2.BoliviaTime });
({ id: u$1.AmericaLima, name: "America/Lima", offset: n$1.UTC_MINUS_5, timezone: s$2.PeruTime });
({ id: u$1.AmericaLosAngeles, name: "America/Los_Angeles", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaLouisville, name: "America/Louisville", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaLowerPrinces, name: "America/Lower_Princes", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaMaceio, name: "America/Maceio", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaManagua, name: "America/Managua", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaManaus, name: "America/Manaus", offset: n$1.UTC_MINUS_4, timezone: s$2.AmazonTime });
({ id: u$1.AmericaMarigot, name: "America/Marigot", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaMartinique, name: "America/Martinique", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaMatamoros, name: "America/Matamoros", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaMazatlan, name: "America/Mazatlan", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaMenominee, name: "America/Menominee", offset: n$1.UTC_MINUS_5, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaMerida, name: "America/Merida", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaMetlakatla, name: "America/Metlakatla", offset: n$1.UTC_MINUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaMexicoCity, name: "America/Mexico_City", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaMiquelon, name: "America/Miquelon", offset: n$1.UTC_MINUS_3, timezone: s$2.SaintPierreAndMiquelonStandardTime });
({ id: u$1.AmericaMoncton, name: "America/Moncton", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaMonterrey, name: "America/Monterrey", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaMontevideo, name: "America/Montevideo", offset: n$1.UTC_MINUS_3, timezone: s$2.UruguayStandardTime });
({ id: u$1.AmericaMontreal, name: "America/Montreal", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaMontserrat, name: "America/Montserrat", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaNassau, name: "America/Nassau", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaNewYork, name: "America/New_York", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaNipigon, name: "America/Nipigon", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaNome, name: "America/Nome", offset: n$1.UTC_MINUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaNoronha, name: "America/Noronha", offset: n$1.UTC_MINUS_2, timezone: s$2.FernandoDeNoronhaTime });
({ id: u$1.AmericaNorthDakotaBeulah, name: "America/North_Dakota/Beulah", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaNorthDakotaCenter, name: "America/North_Dakota/Center", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaNorthDakotaNewSalem, name: "America/North_Dakota/New_Salem", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaOjinaga, name: "America/Ojinaga", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaPanama, name: "America/Panama", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaPangnirtung, name: "America/Pangnirtung", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaParamaribo, name: "America/Paramaribo", offset: n$1.UTC_MINUS_3, timezone: s$2.SurinameTime });
({ id: u$1.AmericaPhoenix, name: "America/Phoenix", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaPortAuPrince, name: "America/Port-au-Prince", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaPortOfSpain, name: "America/Port_of_Spain", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaPortoVelho, name: "America/Porto_Velho", offset: n$1.UTC_MINUS_4, timezone: s$2.AmazonTime });
({ id: u$1.AmericaPuertoRico, name: "America/Puerto_Rico", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaRainyRiver, name: "America/Rainy_River", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaRankinInlet, name: "America/Rankin_Inlet", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaRecife, name: "America/Recife", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaRegina, name: "America/Regina", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaResolute, name: "America/Resolute", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaRioBranco, name: "America/Rio_Branco", offset: n$1.UTC_MINUS_5, timezone: s$2.AcreTime });
({ id: u$1.AmericaSantaIsabel, name: "America/Santa_Isabel", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaSantarem, name: "America/Santarem", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaSantiago, name: "America/Santiago", offset: n$1.UTC_MINUS_4, timezone: s$2.ChileStandardTime });
({ id: u$1.AmericaSantoDomingo, name: "America/Santo_Domingo", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaSaoPaulo, name: "America/Sao_Paulo", offset: n$1.UTC_MINUS_3, timezone: s$2.BrasiliaTime });
({ id: u$1.AmericaScoresbysund, name: "America/Scoresbysund", offset: n$1.UTC_MINUS_1, timezone: s$2.EasternGreenlandTime });
({ id: u$1.AmericaShiprock, name: "America/Shiprock", offset: n$1.UTC_MINUS_7, timezone: s$2.MountainStandardTime });
({ id: u$1.AmericaSitka, name: "America/Sitka", offset: n$1.UTC_MINUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaStBarthelemy, name: "America/St_Barthelemy", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaStJohns, name: "America/St_Johns", offset: n$1.UTC_MINUS_3, timezone: s$2.NewfoundlandStandardTime });
({ id: u$1.AmericaStKitts, name: "America/St_Kitts", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaStLucia, name: "America/St_Lucia", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaStThomas, name: "America/St_Thomas", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaStVincent, name: "America/St_Vincent", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaSwiftCurrent, name: "America/Swift_Current", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaTegucigalpa, name: "America/Tegucigalpa", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaThule, name: "America/Thule", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaThunderBay, name: "America/Thunder_Bay", offset: n$1.UTC_MINUS_4, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaTijuana, name: "America/Tijuana", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaToronto, name: "America/Toronto", offset: n$1.UTC_MINUS_5, timezone: s$2.EasternStandardTime });
({ id: u$1.AmericaTortola, name: "America/Tortola", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AmericaVancouver, name: "America/Vancouver", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaWhitehorse, name: "America/Whitehorse", offset: n$1.UTC_MINUS_8, timezone: s$2.PacificStandardTime });
({ id: u$1.AmericaWinnipeg, name: "America/Winnipeg", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AmericaYakutat, name: "America/Yakutat", offset: n$1.UTC_MINUS_9, timezone: s$2.AlaskaStandardTime });
({ id: u$1.AmericaYellowknife, name: "America/Yellowknife", offset: n$1.UTC_MINUS_6, timezone: s$2.MountainStandardTime });
({ id: u$1.AntarcticaCasey, name: "Antarctica/Casey", offset: n$1.UTC_MINUS_8, timezone: s$2.WesternStandardTime });
({ id: u$1.AntarcticaDavis, name: "Antarctica/Davis", offset: n$1.UTC_MINUS_7, timezone: s$2.NewfoundlandStandardTime });
({ id: u$1.AntarcticaDumontDUrville, name: "Antarctica/DumontDUrville", offset: n$1.UTC_MINUS_10, timezone: s$2.CentralStandardTime });
({ id: u$1.AntarcticaMacquarie, name: "Antarctica/Macquarie", offset: n$1.UTC_MINUS_11, timezone: s$2.CentralStandardTime });
({ id: u$1.AntarcticaMawson, name: "Antarctica/Mawson", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.AntarcticaMcMurdo, name: "Antarctica/McMurdo", offset: n$1.UTC_MINUS_12, timezone: s$2.NewZealandStandardTime });
({ id: u$1.AntarcticaPalmer, name: "Antarctica/Palmer", offset: n$1.UTC_MINUS_4, timezone: s$2.ChathamStandardTime });
({ id: u$1.AntarcticaRothera, name: "Antarctica/Rothera", offset: n$1.UTC_MINUS_3, timezone: s$2.RotheraResearchStationTime });
({ id: u$1.AntarcticaSyowa, name: "Antarctica/Syowa", offset: n$1.UTC_MINUS_3, timezone: s$2.ShowaStationTime });
({ id: u$1.AntarcticaTroll, name: "Antarctica/Troll", offset: n$1.UTC_MINUS_2, timezone: s$2.CentralStandardTime });
({ id: u$1.AntarcticaVostok, name: "Antarctica/Vostok", offset: n$1.UTC_MINUS_6, timezone: s$2.CentralStandardTime });
({ id: u$1.ArcticLongyearbyen, name: "Arctic/Longyearbyen", offset: n$1.UTC_MINUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.AsiaAden, name: "Asia/Aden", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaAlmaty, name: "Asia/Almaty", offset: n$1.UTC_PLUS_6, timezone: s$2.AlmaAtaTime });
({ id: u$1.AsiaAmman, name: "Asia/Amman", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaAnadyr, name: "Asia/Anadyr", offset: n$1.UTC_PLUS_12, timezone: s$2.NewCaledoniaTime });
({ id: u$1.AsiaAqtau, name: "Asia/Aqtau", offset: n$1.UTC_PLUS_5, timezone: s$2.AqtobeTime });
({ id: u$1.AsiaAqtobe, name: "Asia/Aqtobe", offset: n$1.UTC_PLUS_5, timezone: s$2.AqtobeTime });
({ id: u$1.AsiaAshgabat, name: "Asia/Ashgabat", offset: n$1.UTC_PLUS_5, timezone: s$2.TurkmenistanTime });
({ id: u$1.AsiaBaghdad, name: "Asia/Baghdad", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaBahrain, name: "Asia/Bahrain", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaBaku, name: "Asia/Baku", offset: n$1.UTC_PLUS_4, timezone: s$2.AzerbaijanTime });
({ id: u$1.AsiaBangkok, name: "Asia/Bangkok", offset: n$1.UTC_PLUS_7, timezone: s$2.IndochinaTime });
({ id: u$1.AsiaBarnaul, name: "Asia/Barnaul", offset: n$1.UTC_PLUS_7, timezone: s$2.KrasnoyarskTime });
({ id: u$1.AsiaBeirut, name: "Asia/Beirut", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaBishkek, name: "Asia/Bishkek", offset: n$1.UTC_PLUS_6, timezone: s$2.KyrgyzstanTime });
({ id: u$1.AsiaBrunei, name: "Asia/Brunei", offset: n$1.UTC_PLUS_8, timezone: s$2.BruneiTime });
({ id: u$1.AsiaChita, name: "Asia/Chita", offset: n$1.UTC_PLUS_9, timezone: s$2.YakutskTime });
({ id: u$1.AsiaChoibalsan, name: "Asia/Choibalsan", offset: n$1.UTC_PLUS_8, timezone: s$2.ChoibalsanStandardTime });
({ id: u$1.AsiaColombo, name: "Asia/Colombo", offset: n$1.UTC_PLUS_5, timezone: s$2.IndianStandardTime });
({ id: u$1.AsiaDamascus, name: "Asia/Damascus", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaDhaka, name: "Asia/Dhaka", offset: n$1.UTC_PLUS_6, timezone: s$2.BangladeshStandardTime });
({ id: u$1.AsiaDili, name: "Asia/Dili", offset: n$1.UTC_PLUS_9, timezone: s$2.JapanStandardTime });
({ id: u$1.AsiaDubai, name: "Asia/Dubai", offset: n$1.UTC_PLUS_4, timezone: s$2.GulfStandardTime });
({ id: u$1.AsiaDushanbe, name: "Asia/Dushanbe", offset: n$1.UTC_PLUS_5, timezone: s$2.TajikistanTime });
({ id: u$1.AsiaFamagusta, name: "Asia/Famagusta", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaGaza, name: "Asia/Gaza", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaHebron, name: "Asia/Hebron", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaHoChiMinh, name: "Asia/Ho_Chi_Minh", offset: n$1.UTC_PLUS_7, timezone: s$2.IndochinaTime });
({ id: u$1.AsiaHongKong, name: "Asia/Hong_Kong", offset: n$1.UTC_PLUS_8, timezone: s$2.HongKongTime });
({ id: u$1.AsiaHovd, name: "Asia/Hovd", offset: n$1.UTC_PLUS_7, timezone: s$2.HovdTime });
({ id: u$1.AsiaIrkutsk, name: "Asia/Irkutsk", offset: n$1.UTC_PLUS_8, timezone: s$2.IrkutskTime });
({ id: u$1.AsiaJakarta, name: "Asia/Jakarta", offset: n$1.UTC_PLUS_7, timezone: s$2.WesternIndonesianTime });
({ id: u$1.AsiaJayapura, name: "Asia/Jayapura", offset: n$1.UTC_PLUS_9, timezone: s$2.JapanStandardTime });
({ id: u$1.AsiaJerusalem, name: "Asia/Jerusalem", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.AsiaKabul, name: "Asia/Kabul", offset: n$1.UTC_PLUS_4, timezone: s$2.AfghanistanTime });
({ id: u$1.AsiaKamchatka, name: "Asia/Kamchatka", offset: n$1.UTC_PLUS_12, timezone: s$2.KamchatkaTime });
({ id: u$1.AsiaKarachi, name: "Asia/Karachi", offset: n$1.UTC_PLUS_5, timezone: s$2.PakistanStandardTime });
({ id: u$1.AsiaKathmandu, name: "Asia/Kathmandu", offset: n$1.UTC_PLUS_5, timezone: s$2.NepalTime });
({ id: u$1.AsiaKhandyga, name: "Asia/Khandyga", offset: n$1.UTC_PLUS_9, timezone: s$2.YakutskTime });
({ id: u$1.AsiaKolkata, name: "Asia/Kolkata", offset: n$1.UTC_PLUS_5, timezone: s$2.IndianStandardTime });
({ id: u$1.AsiaKrasnoyarsk, name: "Asia/Krasnoyarsk", offset: n$1.UTC_PLUS_7, timezone: s$2.KrasnoyarskTime });
({ id: u$1.AsiaKualaLumpur, name: "Asia/Kuala_Lumpur", offset: n$1.UTC_PLUS_8, timezone: s$2.MalaysiaStandardTime });
({ id: u$1.AsiaKuching, name: "Asia/Kuching", offset: n$1.UTC_PLUS_8, timezone: s$2.MalaysiaStandardTime });
({ id: u$1.AsiaKuwait, name: "Asia/Kuwait", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaMacau, name: "Asia/Macau", offset: n$1.UTC_PLUS_8, timezone: s$2.ChinaStandardTime });
({ id: u$1.AsiaMagadan, name: "Asia/Magadan", offset: n$1.UTC_PLUS_11, timezone: s$2.MagadanTime });
({ id: u$1.AsiaMakassar, name: "Asia/Makassar", offset: n$1.UTC_PLUS_8, timezone: s$2.MalaysiaTime });
({ id: u$1.AsiaManila, name: "Asia/Manila", offset: n$1.UTC_PLUS_8, timezone: s$2.PhilippineTime });
({ id: u$1.AsiaMuscat, name: "Asia/Muscat", offset: n$1.UTC_PLUS_4, timezone: s$2.GulfStandardTime });
({ id: u$1.AsiaNovokuznetsk, name: "Asia/Novokuznetsk", offset: n$1.UTC_PLUS_6, timezone: s$2.NovosibirskTime });
({ id: u$1.AsiaNovosibirsk, name: "Asia/Novosibirsk", offset: n$1.UTC_PLUS_6, timezone: s$2.NovosibirskTime });
({ id: u$1.AsiaOmsk, name: "Asia/Omsk", offset: n$1.UTC_PLUS_6, timezone: s$2.OmskTime });
({ id: u$1.AsiaOral, name: "Asia/Oral", offset: n$1.UTC_PLUS_5, timezone: s$2.OralTime });
({ id: u$1.AsiaPhnomPenh, name: "Asia/Phnom_Penh", offset: n$1.UTC_PLUS_7, timezone: s$2.IndochinaTime });
({ id: u$1.AsiaPontianak, name: "Asia/Pontianak", offset: n$1.UTC_PLUS_7, timezone: s$2.WesternIndonesianTime });
({ id: u$1.AsiaPyongyang, name: "Asia/Pyongyang", offset: n$1.UTC_PLUS_9, timezone: s$2.KoreaStandardTime });
({ id: u$1.AsiaQatar, name: "Asia/Qatar", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaQyzylorda, name: "Asia/Qyzylorda", offset: n$1.UTC_PLUS_5, timezone: s$2.WestKazakhstanTime });
({ id: u$1.AsiaRangoon, name: "Asia/Rangoon", offset: n$1.UTC_PLUS_6, timezone: s$2.MyanmarStandardTime });
({ id: u$1.AsiaRiyadh, name: "Asia/Riyadh", offset: n$1.UTC_PLUS_3, timezone: s$2.ArabiaStandardTime });
({ id: u$1.AsiaSakhalin, name: "Asia/Sakhalin", offset: n$1.UTC_PLUS_11, timezone: s$2.SakhalinIslandTime });
({ id: u$1.AsiaSamarkand, name: "Asia/Samarkand", offset: n$1.UTC_PLUS_5, timezone: s$2.UzbekistanTime });
({ id: u$1.AsiaSeoul, name: "Asia/Seoul", offset: n$1.UTC_PLUS_9, timezone: s$2.KoreaStandardTime });
({ id: u$1.AsiaShanghai, name: "Asia/Shanghai", offset: n$1.UTC_PLUS_8, timezone: s$2.ChinaStandardTime });
({ id: u$1.AsiaSingapore, name: "Asia/Singapore", offset: n$1.UTC_PLUS_8, timezone: s$2.SingaporeStandardTime });
({ id: u$1.AsiaSrednekolymsk, name: "Asia/Srednekolymsk", offset: n$1.UTC_PLUS_11, timezone: s$2.SrednekolymskTime });
({ id: u$1.AsiaTaipei, name: "Asia/Taipei", offset: n$1.UTC_PLUS_8, timezone: s$2.ChinaStandardTime });
({ id: u$1.AsiaTashkent, name: "Asia/Tashkent", offset: n$1.UTC_PLUS_5, timezone: s$2.UzbekistanTime });
({ id: u$1.AsiaTbilisi, name: "Asia/Tbilisi", offset: n$1.UTC_PLUS_4, timezone: s$2.GeorgiaStandardTime });
({ id: u$1.AsiaTehran, name: "Asia/Tehran", offset: n$1.UTC_PLUS_3, timezone: s$2.IranStandardTime });
({ id: u$1.AsiaThimphu, name: "Asia/Thimphu", offset: n$1.UTC_PLUS_6, timezone: s$2.BhutanTime });
({ id: u$1.AsiaTokyo, name: "Asia/Tokyo", offset: n$1.UTC_PLUS_9, timezone: s$2.JapanStandardTime });
({ id: u$1.AsiaTomsk, name: "Asia/Tomsk", offset: n$1.UTC_PLUS_6, timezone: s$2.KrasnoyarskTime });
({ id: u$1.AsiaUlaanbaatar, name: "Asia/Ulaanbaatar", offset: n$1.UTC_PLUS_8, timezone: s$2.UlaanbaatarStandardTime });
({ id: u$1.AsiaUrumqi, name: "Asia/Urumqi", offset: n$1.UTC_PLUS_8, timezone: s$2.ChinaStandardTime });
({ id: u$1.AsiaUstNera, name: "Asia/Ust-Nera", offset: n$1.UTC_PLUS_10, timezone: s$2.VladivostokTime });
({ id: u$1.AsiaVientiane, name: "Asia/Vientiane", offset: n$1.UTC_PLUS_7, timezone: s$2.IndochinaTime });
({ id: u$1.AsiaVladivostok, name: "Asia/Vladivostok", offset: n$1.UTC_PLUS_10, timezone: s$2.VladivostokTime });
({ id: u$1.AsiaYakutsk, name: "Asia/Yakutsk", offset: n$1.UTC_PLUS_9, timezone: s$2.YakutskTime });
({ id: u$1.AsiaYekaterinburg, name: "Asia/Yekaterinburg", offset: n$1.UTC_PLUS_5, timezone: s$2.YekaterinburgTime });
({ id: u$1.AsiaYerevan, name: "Asia/Yerevan", offset: n$1.UTC_PLUS_4, timezone: s$2.ArmeniaTime });
({ id: u$1.AtlanticAzores, name: "Atlantic/Azores", offset: n$1.UTC_MINUS_1, timezone: s$2.AzoresStandardTime });
({ id: u$1.AtlanticBermuda, name: "Atlantic/Bermuda", offset: n$1.UTC_MINUS_4, timezone: s$2.AtlanticStandardTime });
({ id: u$1.AtlanticCanary, name: "Atlantic/Canary", offset: n$1.UTC_MINUS_1, timezone: s$2.WesternEuropeanTime });
({ id: u$1.AtlanticCapeVerde, name: "Atlantic/Cape_Verde", offset: n$1.UTC_0, timezone: s$2.CapeVerdeTime });
({ id: u$1.AtlanticFaroe, name: "Atlantic/Faroe", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.AtlanticMadeira, name: "Atlantic/Madeira", offset: n$1.UTC_0, timezone: s$2.WesternEuropeanTime });
({ id: u$1.AtlanticReykjavik, name: "Atlantic/Reykjavik", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.AtlanticSouthGeorgia, name: "Atlantic/South_Georgia", offset: n$1.UTC_0, timezone: s$2.CoordinatedUniversalTime });
({ id: u$1.AtlanticStHelena, name: "Atlantic/St_Helena", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.AtlanticStanley, name: "Atlantic/Stanley", offset: n$1.UTC_0, timezone: s$2.FalklandIslandsTime });
({ id: u$1.AustraliaAdelaide, name: "Australia/Adelaide", offset: n$1.UTC_PLUS_9_30, timezone: s$2.AustralianCentralStandardTime });
({ id: u$1.AustraliaBrisbane, name: "Australia/Brisbane", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaBrokenHill, name: "Australia/Broken_Hill", offset: n$1.UTC_PLUS_9_30, timezone: s$2.AustralianCentralStandardTime });
({ id: u$1.AustraliaCanberra, name: "Australia/Canberra", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaCurrie, name: "Australia/Currie", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaDarwin, name: "Australia/Darwin", offset: n$1.UTC_PLUS_9_30, timezone: s$2.AustralianCentralStandardTime });
({ id: u$1.AustraliaEucla, name: "Australia/Eucla", offset: n$1.UTC_PLUS_8_45, timezone: s$2.AustralianCentralWesternStandardTime });
({ id: u$1.AustraliaHobart, name: "Australia/Hobart", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaLindeman, name: "Australia/Lindeman", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaLordHowe, name: "Australia/Lord_Howe", offset: n$1.UTC_PLUS_10_30, timezone: s$2.LordHoweStandardTime });
({ id: u$1.AustraliaMelbourne, name: "Australia/Melbourne", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.AustraliaPerth, name: "Australia/Perth", offset: n$1.UTC_PLUS_8, timezone: s$2.AustralianWesternStandardTime });
({ id: u$1.AustraliaSydney, name: "Australia/Sydney", offset: n$1.UTC_PLUS_10, timezone: s$2.AustralianEasternStandardTime });
({ id: u$1.EuropeAmsterdam, name: "Europe/Amsterdam", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeAndorra, name: "Europe/Andorra", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeAthens, name: "Europe/Athens", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeBelgrade, name: "Europe/Belgrade", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeBerlin, name: "Europe/Berlin", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeBratislava, name: "Europe/Bratislava", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeBrussels, name: "Europe/Brussels", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeBucharest, name: "Europe/Bucharest", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeBudapest, name: "Europe/Budapest", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeBusingen, name: "Europe/Busingen", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeChisinau, name: "Europe/Chisinau", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeCopenhagen, name: "Europe/Copenhagen", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeDublin, name: "Europe/Dublin", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.EuropeGibraltar, name: "Europe/Gibraltar", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeGuernsey, name: "Europe/Guernsey", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeHelsinki, name: "Europe/Helsinki", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeIsleOfMan, name: "Europe/Isle_of_Man", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.EuropeIstanbul, name: "Europe/Istanbul", offset: n$1.UTC_PLUS_3, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeJersey, name: "Europe/Jersey", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeKaliningrad, name: "Europe/Kaliningrad", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeKiev, name: "Europe/Kiev", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeLisbon, name: "Europe/Lisbon", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.EuropeLjubljana, name: "Europe/Ljubljana", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeLondon, name: "Europe/London", offset: n$1.UTC_0, timezone: s$2.GreenwichMeanTime });
({ id: u$1.EuropeLuxembourg, name: "Europe/Luxembourg", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeMadrid, name: "Europe/Madrid", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeMalta, name: "Europe/Malta", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeMariehamn, name: "Europe/Mariehamn", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeMinsk, name: "Europe/Minsk", offset: n$1.UTC_PLUS_3, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeMonaco, name: "Europe/Monaco", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeMoscow, name: "Europe/Moscow", offset: n$1.UTC_PLUS_3, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeOslo, name: "Europe/Oslo", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeParis, name: "Europe/Paris", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropePodgorica, name: "Europe/Podgorica", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropePrague, name: "Europe/Prague", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeRiga, name: "Europe/Riga", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeRome, name: "Europe/Rome", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeSamara, name: "Europe/Samara", offset: n$1.UTC_PLUS_4, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeSanMarino, name: "Europe/San_Marino", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeSarajevo, name: "Europe/Sarajevo", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeSimferopol, name: "Europe/Simferopol", offset: n$1.UTC_PLUS_3, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeSkopje, name: "Europe/Skopje", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeSofia, name: "Europe/Sofia", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeStockholm, name: "Europe/Stockholm", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeTallinn, name: "Europe/Tallinn", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeTirane, name: "Europe/Tirane", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeUzhgorod, name: "Europe/Uzhgorod", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeVaduz, name: "Europe/Vaduz", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeVatican, name: "Europe/Vatican", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeVienna, name: "Europe/Vienna", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeVilnius, name: "Europe/Vilnius", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeVolgograd, name: "Europe/Volgograd", offset: n$1.UTC_PLUS_4, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeWarsaw, name: "Europe/Warsaw", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeZagreb, name: "Europe/Zagreb", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.EuropeZaporozhye, name: "Europe/Zaporozhye", offset: n$1.UTC_PLUS_2, timezone: s$2.EasternEuropeanTime });
({ id: u$1.EuropeZurich, name: "Europe/Zurich", offset: n$1.UTC_PLUS_1, timezone: s$2.CentralEuropeanTime });
({ id: u$1.IndianAntananarivo, name: "Indian/Antananarivo", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.IndianChagos, name: "Indian/Chagos", offset: n$1.UTC_PLUS_6, timezone: s$2.IndianOceanTime });
({ id: u$1.IndianChristmas, name: "Indian/Christmas", offset: n$1.UTC_PLUS_7, timezone: s$2.ChristmasIslandTime });
({ id: u$1.IndianCocos, name: "Indian/Cocos", offset: n$1.UTC_PLUS_6, timezone: s$2.CocosIslandsTime });
({ id: u$1.IndianComoro, name: "Indian/Comoro", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.IndianKerguelen, name: "Indian/Kerguelen", offset: n$1.UTC_PLUS_5, timezone: s$2.FrenchSouthernAndAntarcticTime });
({ id: u$1.IndianMahe, name: "Indian/Mahe", offset: n$1.UTC_PLUS_4, timezone: s$2.SeychellesTime });
({ id: u$1.IndianMaldives, name: "Indian/Maldives", offset: n$1.UTC_PLUS_5, timezone: s$2.MaldivesTime });
({ id: u$1.IndianMauritius, name: "Indian/Mauritius", offset: n$1.UTC_PLUS_4, timezone: s$2.MauritiusTime });
({ id: u$1.IndianMayotte, name: "Indian/Mayotte", offset: n$1.UTC_PLUS_3, timezone: s$2.EastAfricaTime });
({ id: u$1.IndianReunion, name: "Indian/Reunion", offset: n$1.UTC_PLUS_4, timezone: s$2.ReunionTime });
({ id: u$1.PacificApia, name: "Pacific/Apia", offset: n$1.UTC_PLUS_13, timezone: s$2.SamoaStandardTime });
({ id: u$1.PacificAuckland, name: "Pacific/Auckland", offset: n$1.UTC_PLUS_13, timezone: s$2.NewZealandStandardTime });
({ id: u$1.PacificChatham, name: "Pacific/Chatham", offset: n$1.UTC_PLUS_13, timezone: s$2.ChathamStandardTime });
({ id: u$1.PacificEaster, name: "Pacific/Easter", offset: n$1.UTC_PLUS_6, timezone: s$2.EasterIslandStandardTime });
({ id: u$1.PacificEfate, name: "Pacific/Efate", offset: n$1.UTC_PLUS_11, timezone: s$2.VanuatuTime });
({ id: u$1.PacificEnderbury, name: "Pacific/Enderbury", offset: n$1.UTC_PLUS_13, timezone: s$2.TongaTime });
({ id: u$1.PacificFakaofo, name: "Pacific/Fakaofo", offset: n$1.UTC_PLUS_13, timezone: s$2.TongaTime });
({ id: u$1.PacificFiji, name: "Pacific/Fiji", offset: n$1.UTC_PLUS_12, timezone: s$2.FijiTime });
({ id: u$1.PacificFunafuti, name: "Pacific/Funafuti", offset: n$1.UTC_PLUS_12, timezone: s$2.TuvaluTime });
({ id: u$1.PacificGalapagos, name: "Pacific/Galapagos", offset: n$1.UTC_PLUS_6, timezone: s$2.GalapagosTime });
({ id: u$1.PacificGambier, name: "Pacific/Gambier", offset: n$1.UTC_PLUS_9, timezone: s$2.GambierIslandTime });
({ id: u$1.PacificGuadalcanal, name: "Pacific/Guadalcanal", offset: n$1.UTC_PLUS_11, timezone: s$2.SolomonIslandsTime });
({ id: u$1.PacificGuam, name: "Pacific/Guam", offset: n$1.UTC_PLUS_10, timezone: s$2.ChamorroStandardTime });
({ id: u$1.PacificHonolulu, name: "Pacific/Honolulu", offset: n$1.UTC_PLUS_10, timezone: s$2.HawaiiAleutianStandardTime });
({ id: u$1.PacificJohnston, name: "Pacific/Johnston", offset: n$1.UTC_PLUS_10, timezone: s$2.HawaiiAleutianStandardTime });
({ id: u$1.PacificKiritimati, name: "Pacific/Kiritimati", offset: n$1.UTC_PLUS_14, timezone: s$2.LineIslandsTime });
({ id: u$1.PacificKosrae, name: "Pacific/Kosrae", offset: n$1.UTC_PLUS_11, timezone: s$2.KosraeTime });
({ id: u$1.PacificKwajalein, name: "Pacific/Kwajalein", offset: n$1.UTC_PLUS_12, timezone: s$2.MarshallIslandsTime });
({ id: u$1.PacificMajuro, name: "Pacific/Majuro", offset: n$1.UTC_PLUS_12, timezone: s$2.MarshallIslandsTime });
({ id: u$1.PacificMarquesas, name: "Pacific/Marquesas", offset: n$1.UTC_PLUS_9, timezone: s$2.MarquesasIslandsTime });
({ id: u$1.PacificMidway, name: "Pacific/Midway", offset: n$1.UTC_PLUS_11, timezone: s$2.SamoaStandardTime });
({ id: u$1.PacificNauru, name: "Pacific/Nauru", offset: n$1.UTC_PLUS_12, timezone: s$2.NauruTime });
({ id: u$1.PacificNiue, name: "Pacific/Niue", offset: n$1.UTC_PLUS_11, timezone: s$2.NiueTime });
({ id: u$1.PacificNorfolk, name: "Pacific/Norfolk", offset: n$1.UTC_PLUS_11, timezone: s$2.NorfolkIslandTime });
({ id: u$1.PacificNoumea, name: "Pacific/Noumea", offset: n$1.UTC_PLUS_11, timezone: s$2.NewCaledoniaTime });
({ id: u$1.PacificPagoPago, name: "Pacific/Pago_Pago", offset: n$1.UTC_PLUS_11, timezone: s$2.SamoaStandardTime });
({ id: u$1.PacificPalau, name: "Pacific/Palau", offset: n$1.UTC_PLUS_9, timezone: s$2.PalauTime });
({ id: u$1.PacificPitcairn, name: "Pacific/Pitcairn", offset: n$1.UTC_PLUS_8, timezone: s$2.PitcairnTime });
({ id: u$1.PacificPonape, name: "Pacific/Ponape", offset: n$1.UTC_PLUS_11, timezone: s$2.PohnpeiStandardTime });
({ id: u$1.PacificPortMoresby, name: "Pacific/Port_Moresby", offset: n$1.UTC_PLUS_10, timezone: s$2.PapuaNewGuineaTime });
({ id: u$1.PacificRarotonga, name: "Pacific/Rarotonga", offset: n$1.UTC_PLUS_10, timezone: s$2.CookIslandTime });
({ id: u$1.PacificSaipan, name: "Pacific/Saipan", offset: n$1.UTC_PLUS_10, timezone: s$2.ChamorroStandardTime });
({ id: u$1.PacificTahiti, name: "Pacific/Tahiti", offset: n$1.UTC_PLUS_10, timezone: s$2.TahitiTime });
({ id: u$1.PacificTarawa, name: "Pacific/Tarawa", offset: n$1.UTC_PLUS_12, timezone: s$2.GilbertIslandTime });
({ id: u$1.PacificTongatapu, name: "Pacific/Tongatapu", offset: n$1.UTC_PLUS_13, timezone: s$2.TongaTime });
({ id: u$1.PacificChuuk, name: "Pacific/Chuuk", offset: n$1.UTC_PLUS_10, timezone: s$2.ChuukTime });
({ id: u$1.PacificPohnpei, name: "Pacific/Pohnpei", offset: n$1.UTC_PLUS_11, timezone: s$2.PohnpeiStandardTime });
({ id: u$1.PacificYap, name: "Pacific/Yap", offset: n$1.UTC_PLUS_10, timezone: s$2.ChuukTime });
var ye = (a = 21) => {
  let l2 = "", c2 = crypto.getRandomValues(new Uint8Array(a));
  for (; a--; ) {
    let A2 = c2[a] & 63;
    A2 < 36 ? l2 += A2.toString(36) : A2 < 62 ? l2 += (A2 - 26).toString(36).toUpperCase() : A2 < 63 ? l2 += "_" : l2 += "-";
  }
  return l2;
};
var Ai = [{ property: "name", enumerable: false }, { property: "message", enumerable: false }, { property: "stack", enumerable: false }, { property: "code", enumerable: true }], y = Symbol(".toJSON was called"), di = (a) => {
  a[y] = true;
  let l2 = a.toJSON();
  return delete a[y], l2;
}, Fe = ({ from: a, seen: l2, to_: c2, forceEnumerable: A2, maxDepth: o, depth: I2 }) => {
  let d2 = c2 || (Array.isArray(a) ? [] : {});
  if (l2.push(a), I2 >= o)
    return d2;
  if (typeof a.toJSON == "function" && a[y] !== true)
    return di(a);
  for (let [g2, E] of Object.entries(a)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(E)) {
      d2[g2] = "[object Buffer]";
      continue;
    }
    if (typeof E != "function") {
      if (!E || typeof E != "object") {
        d2[g2] = E;
        continue;
      }
      if (!l2.includes(a[g2])) {
        I2++, d2[g2] = Fe({ from: a[g2], seen: [...l2], forceEnumerable: A2, maxDepth: o, depth: I2 });
        continue;
      }
      d2[g2] = "[Circular]";
    }
  }
  for (let { property: g2, enumerable: E } of Ai)
    typeof a[g2] == "string" && Object.defineProperty(d2, g2, { value: a[g2], enumerable: A2 ? true : E, configurable: true, writable: true });
  return d2;
};
function Le(a, l2 = {}) {
  let { maxDepth: c2 = Number.POSITIVE_INFINITY } = l2;
  return typeof a == "object" && a !== null ? Fe({ from: a, seen: [], forceEnumerable: true, maxDepth: c2, depth: 0 }) : typeof a == "function" ? `[Function: ${a.name || "anonymous"}]` : a;
}
var b$1;
(function(a) {
  a[a.Warning = 999] = "Warning", a[a.Exception = 1e3] = "Exception", a[a.UnmanagedException = 1001] = "UnmanagedException", a[a.CaughtException = 1002] = "CaughtException", a[a.UncaughtException = 1003] = "UncaughtException", a[a.UnhandledPromiseRejectionException = 1004] = "UnhandledPromiseRejectionException", a[a.AuthenticationException = 2e3] = "AuthenticationException", a[a.AuthenticationExpiredAccessTokenException = 2001] = "AuthenticationExpiredAccessTokenException", a[a.AuthenticationInvalidAccessTokenException = 2002] = "AuthenticationInvalidAccessTokenException", a[a.AuthenticationMissingAccessTokenException = 2003] = "AuthenticationMissingAccessTokenException", a[a.AuthenticationExpiredRefreshTokenException = 2004] = "AuthenticationExpiredRefreshTokenException", a[a.AuthenticationInvalidRefreshTokenException = 2005] = "AuthenticationInvalidRefreshTokenException", a[a.AuthenticationMissingRefreshTokenException = 2006] = "AuthenticationMissingRefreshTokenException", a[a.AuthenticationMissingDeviceKeyException = 2007] = "AuthenticationMissingDeviceKeyException", a[a.AuthenticationUnAuthorizedAccessException = 2008] = "AuthenticationUnAuthorizedAccessException", a[a.AuthenticationCodeMismatchException = 2009] = "AuthenticationCodeMismatchException", a[a.AuthenticationExpiredCodeException = 2010] = "AuthenticationExpiredCodeException", a[a.AuthenticationLoginException = 2011] = "AuthenticationLoginException", a[a.AuthenticationLoginInvalidCredentialsException = 2012] = "AuthenticationLoginInvalidCredentialsException", a[a.AuthenticationLoginTooManyFailedAttemptsException = 2013] = "AuthenticationLoginTooManyFailedAttemptsException", a[a.AuthenticationLimitExceededException = 2014] = "AuthenticationLimitExceededException", a[a.AuthenticationUnauthorizedAccessException = 2015] = "AuthenticationUnauthorizedAccessException", a[a.AuthenticationTooManyRequestsException = 2016] = "AuthenticationTooManyRequestsException", a[a.AuthenticationUserNotFoundException = 2017] = "AuthenticationUserNotFoundException", a[a.AuthenticationSignupException = 2018] = "AuthenticationSignupException", a[a.AuthenticationUsernameAvailabilityCheckException = 2019] = "AuthenticationUsernameAvailabilityCheckException", a[a.AuthenticationUsernameExistsException = 2020] = "AuthenticationUsernameExistsException", a[a.AuthenticationAliasExistException = 2021] = "AuthenticationAliasExistException", a[a.AuthenticationCodeDeliveryFailureException = 2022] = "AuthenticationCodeDeliveryFailureException", a[a.AuthenticationMFAMethodNotFoundException = 2023] = "AuthenticationMFAMethodNotFoundException", a[a.AuthenticationNotAuthorizedException = 2024] = "AuthenticationNotAuthorizedException", a[a.AuthenticationPasswordResetRequiredException = 2025] = "AuthenticationPasswordResetRequiredException", a[a.AuthenticationUserNotConfirmedException = 2026] = "AuthenticationUserNotConfirmedException", a[a.DatabaseException = 3e3] = "DatabaseException", a[a.SequelizeNotInitializedException = 3001] = "SequelizeNotInitializedException", a[a.ProcessException = 4e3] = "ProcessException", a[a.ProcessWarningException = 4001] = "ProcessWarningException", a[a.KillProcessException = 4002] = "KillProcessException", a[a.FatalException = 4003] = "FatalException", a[a.ProcessSigTermException = 4004] = "ProcessSigTermException", a[a.ProcessSigIntException = 4005] = "ProcessSigIntException", a[a.MissingEnvironmentVariable = 4006] = "MissingEnvironmentVariable", a[a.NetworkException = 5e3] = "NetworkException", a[a.HttpException = 5001] = "HttpException", a[a.HttpRequestException = 5002] = "HttpRequestException", a[a.HttpRequestResourceNotFoundException = 5003] = "HttpRequestResourceNotFoundException", a[a.HttpResponseException = 5004] = "HttpResponseException", a[a.ServiceProviderException = 6e3] = "ServiceProviderException", a[a.AWSException = 6001] = "AWSException", a[a.AWSMissingAccessKeyException = 6002] = "AWSMissingAccessKeyException", a[a.AWSMissingSecretKeyException = 6003] = "AWSMissingSecretKeyException", a[a.CognitoException = 6004] = "CognitoException", a[a.CognitoInternalErrorException = 6005] = "CognitoInternalErrorException", a[a.CognitoInvalidEmailRoleAccessPolicyException = 6006] = "CognitoInvalidEmailRoleAccessPolicyException", a[a.CognitoInvalidLambdaResponseException = 6007] = "CognitoInvalidLambdaResponseException", a[a.CognitoUserLambdaValidationException = 6008] = "CognitoUserLambdaValidationException", a[a.CognitoInvalidParameterException = 6009] = "CognitoInvalidParameterException", a[a.CognitoInvalidSmsRoleAccessPolicyException = 6010] = "CognitoInvalidSmsRoleAccessPolicyException", a[a.CognitoInvalidSmsRoleTrustRelationshipException = 6011] = "CognitoInvalidSmsRoleTrustRelationshipException", a[a.CognitoInvalidUserPoolConfigurationException = 6012] = "CognitoInvalidUserPoolConfigurationException", a[a.CognitoResourceNotFoundException = 6013] = "CognitoResourceNotFoundException", a[a.CognitoMissingUserPoolClientIdException = 6014] = "CognitoMissingUserPoolClientIdException", a[a.CognitoMissingUserPoolIdException = 6015] = "CognitoMissingUserPoolIdException", a[a.CognitoUnexpectedLambdaException = 6016] = "CognitoUnexpectedLambdaException", a[a.StripeException = 6017] = "StripeException", a[a.StripeMissingSecretKeyException = 6018] = "StripeMissingSecretKeyException", a[a.StripeSubscriptionCreationFailedException = 6019] = "StripeSubscriptionCreationFailedException", a[a.StripePaymentMethodRequiredException = 6020] = "StripePaymentMethodRequiredException", a[a.UserException = 7e3] = "UserException", a[a.NullUserException = 7001] = "NullUserException", a[a.UserStateConflictException = 7002] = "UserStateConflictException", a[a.NullAccountException = 7003] = "NullAccountException", a[a.ValidationException = 8e3] = "ValidationException", a[a.InvalidTypeException = 8001] = "InvalidTypeException", a[a.MissingArgumentException = 8002] = "MissingArgumentException", a[a.MissingPropertyException = 8003] = "MissingPropertyException", a[a.InvalidArgumentException = 8004] = "InvalidArgumentException", a[a.InvalidPropertyException = 8005] = "InvalidPropertyException", a[a.MissingRequestBodyPropertyException = 8006] = "MissingRequestBodyPropertyException", a[a.MissingRequestUrlParameterException = 8007] = "MissingRequestUrlParameterException", a[a.MissingCookieException = 8008] = "MissingCookieException";
})(b$1 || (b$1 = {}));
var D = class extends Error {
  constructor(l2, c2) {
    super(l2);
    h$1(this, "cause");
    h$1(this, "code", b$1.Exception);
    h$1(this, "context");
    h$1(this, "created");
    h$1(this, "data");
    h$1(this, "description");
    h$1(this, "model");
    h$1(this, "form");
    h$1(this, "friendlyMessage", "An unknown error has occurred. :(");
    h$1(this, "id");
    h$1(this, "logLevel", v$1.Exception);
    h$1(this, "origin");
    h$1(this, "pii");
    h$1(this, "request");
    h$1(this, "response");
    h$1(this, "scope");
    h$1(this, "remediation");
    h$1(this, "tags");
    h$1(this, "task");
    h$1(this, "user");
    h$1(this, "__proto__");
    var o, I2, d2, g2;
    let A2 = new.target.prototype;
    if (this.__proto__ = A2, Error.captureStackTrace && Error.captureStackTrace((o = c2 == null ? void 0 : c2.cause) != null ? o : this, D), this.id = ye(), this.name = this.constructor.name, this.created = new Date().toString(), this.description = (I2 = c2 == null ? void 0 : c2.description) != null ? I2 : this.description, this.remediation = (d2 = c2 == null ? void 0 : c2.remediation) != null ? d2 : this.remediation, this.scope = (g2 = c2 == null ? void 0 : c2.scope) != null ? g2 : this.scope, c2) {
      let { cause: E, context: Je, data: Ze, model: Ye, form: $e, origin: Qe, pii: Xe, request: Ce, response: ai, tags: ei, task: ii, user: ni } = c2;
      this.cause = E, this.context = Je, this.data = Ze, this.model = Ye, this.form = $e, this.origin = Qe, this.pii = Xe, this.request = Ce, this.response = ai, this.task = ii, this.tags = ei, this.user = ni;
    }
  }
  toJSON() {
    return Le(this);
  }
};
var k = class extends D {
  constructor() {
    super(...arguments);
    h$1(this, "code", b$1.InvalidPropertyException);
    h$1(this, "description", "An object property is invalid.");
    h$1(this, "logLevel", v$1.Exception);
    h$1(this, "remediation", { response: { code: 400 }, retry: false });
  }
};
var Re = L$1(Ge(), 1), N$1 = L$1(We(), 1);
function Si(a, l2) {
  return Object.entries(l2).filter((A2) => {
    if (!A2)
      return false;
    let o = A2[0];
    if (!Object.values(i$1).includes(o))
      throw new k(`Configuration property "${A2[0]}" is not supported.`, {});
    return true;
  }).map(([A2, o]) => {
    let I2 = (d2, g2) => ({ condition: d2, message: Ti(d2, g2), value: a });
    switch (A2) {
      case i$1.IsRequired:
        if (typeof o != "boolean")
          throw new TypeError('Configuration property "IsRequired" must be a boolean.');
        if (o === true && (!a || a === ""))
          return I2(A2);
        break;
      case i$1.HasLetterCount:
        {
          if ((Number.isNaN(o) || !Number.isInteger(o)) && typeof o != "boolean")
            throw new TypeError('Configuration property "HasLetterCount" must be a number or boolean');
          let d2 = new N$1.default();
          if (o === 0 || o === false ? d2.has().not().letters() : d2.has().letters(o), !a || typeof a != "string" || !d2.validate(a))
            return I2(A2, { requirement: o });
        }
        break;
      case i$1.HasLowercaseCount:
        {
          if ((Number.isNaN(o) || !Number.isInteger(o)) && typeof o != "boolean")
            throw new TypeError('Configuration property "HasLowercaseCount" must be a number or boolean');
          let d2 = new N$1.default();
          if (o === 0 ? d2.has().not().lowercase() : d2.has().lowercase(o), !a || typeof a != "string" || !d2.validate(a))
            return I2(A2, { requirement: o });
        }
        break;
      case i$1.HasNumberCount:
        {
          if ((Number.isNaN(o) || !Number.isInteger(o)) && typeof o != "boolean")
            throw new TypeError('Configuration property "HasNumberCount" must be a number or boolean');
          let d2 = new N$1.default();
          if (o === 0 ? d2.has().not().digits() : d2.has().digits(o), !a || typeof a != "string" || !d2.validate(a))
            return I2(A2, { requirement: o });
        }
        break;
      case i$1.HasSymbolCount:
        {
          if ((Number.isNaN(o) || !Number.isInteger(o)) && typeof o != "boolean")
            throw new TypeError('Configuration property "HasSymbolCount" must be a number or boolean');
          let d2 = new N$1.default();
          if (o === 0 ? d2.has().not().symbols() : d2.has().symbols(o), !a || typeof a != "string" || !d2.validate(a))
            return I2(A2, { requirement: o });
        }
        break;
      case i$1.HasUppercaseCount:
        {
          if ((Number.isNaN(o) || !Number.isInteger(o)) && typeof o != "boolean")
            throw new TypeError('Configuration property "HasUppercaseCount" must be a number or boolean');
          let d2 = new N$1.default();
          if (o === 0 ? d2.has().not().uppercase() : d2.has().uppercase(o), !a || typeof a != "string" || !d2.validate(a))
            return I2(A2, { requirement: o });
        }
        break;
      case i$1.IsEmailAddress:
        if (typeof o != "boolean")
          throw new TypeError('Configuration property "IsEmailAddress" must be a boolean.');
        if (typeof a != "string" || !Re.default.validate(a))
          return I2(A2);
        break;
      case i$1.IsEqual:
        if (a !== o)
          return I2(A2);
        break;
      case i$1.IsNotNull:
        if (typeof o != "boolean")
          throw new TypeError('Configuration property "IsNotNull" must be a boolean.');
        if (a === null)
          return I2(A2);
        break;
      case i$1.IsLengthEqual:
        if (Number.isNaN(o) || !Number.isInteger(o))
          throw new TypeError('Configuration property "IsLengthEqual" must be a number.');
        if (typeof a != "string" || a.length !== o)
          return I2(A2, { requirement: o });
        break;
      case i$1.IsLengthGreaterThanOrEqual:
        if (!o || Number.isNaN(o) || !Number.isInteger(o))
          throw new TypeError('Configuration property "IsLengthGreaterThanOrEqual" must be a number.');
        if (typeof a != "string" || a.length < o)
          return I2(A2, { requirement: o });
        break;
      case i$1.IsLengthLessThanOrEqual:
        if (!o || Number.isNaN(o) || !Number.isInteger(o))
          throw new TypeError('Configuration property "IsLengthLessThanOrEqual" must be a number.');
        if (typeof a != "string" || a.length > o)
          return I2(A2, { requirement: o });
        break;
    }
  }).filter((A2) => !!A2) || [];
}
function Ti(a, l2) {
  switch (a) {
    case i$1.Contains:
      return { long: "Missing a required pattern.", short: "Missing string pattern" };
    case i$1.HasCharacterCount:
      return { long: "Does not meet character length requirement.", short: "Not enough characters" };
    case i$1.HasNumberCount:
      return { long: "Does not meet number count requirement.", short: "Not enough numbers" };
    case i$1.HasLetterCount:
      return { long: "Does not contain required number of characters.", short: "Not enough letters" };
    case i$1.HasLowercaseCount:
      return { long: "Does not contain enough lowercase letters.", short: "Not enough lowercase letters" };
    case i$1.HasSpacesCount:
      return { long: "Does not contain enough spaces.", short: "Not enough spaces" };
    case i$1.HasSymbolCount:
      return { long: "Does not meet symbol count requirement.", short: "Not enough symbols" };
    case i$1.HasUppercaseCount:
      return { long: "Does not contain enough uppercase letters.", short: "Not enough uppercase letters" };
    case i$1.IsAfter:
      return { long: `Value is not after ${l2 == null ? void 0 : l2.requirement}`, short: `Is not after ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsAfterOrEqual:
      return { long: `Value is not after or equal to ${l2 == null ? void 0 : l2.requirement}`, short: `Is not equal or after ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsAirport:
      return { long: "Value is not a valid airport identifier code.", short: "Invalid airport code" };
    case i$1.IsAlpha:
      return { long: "Value does not consist of only letters.", short: "Only letters allowed" };
    case i$1.IsAlphanumeric:
      return { long: "Provided value is not alphanumeric.", short: "Only letters and numbers allowed" };
    case i$1.IsAlgorithmHash:
      return { long: "Value does not match algorithm hash.", short: "Invalid algorithm hash" };
    case i$1.IsAscii:
      return { long: "Value is not valid ASCII string.", short: "Not valid ASCII" };
    case i$1.IsBase64:
      return { long: "Value is not valid Base64 string.", short: "Not valid Base64" };
    case i$1.IsBefore:
      return { long: `Value is not before ${l2 == null ? void 0 : l2.requirement}.`, short: `Not before ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsBeforeOrAfter:
      return { long: `Value is not before or after ${l2 == null ? void 0 : l2.requirement}.`, short: `Not before or after to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsBeforeOrEqual:
      return { long: `Value is not before or equal to${l2 == null ? void 0 : l2.requirement}.`, short: `Not before or equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsBetween:
      return { long: `Value is not between ${l2 == null ? void 0 : l2.requirement}.`, short: `Value is not between ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsBIC:
      return { long: "Not a valid BIC number.", short: "Invalid BIC ID" };
    case i$1.IsBitcoinAddress:
      return { long: "Not a valid Bitcoin address.", short: "Invalid Bitcoin address" };
    case i$1.IsBoolean:
      return { long: "Not a valid boolean value.", short: "Must be boolean value" };
    case i$1.IsColor:
      return { long: "Not a valid color value.", short: "Invalid color" };
    case i$1.IsComplexEnough:
      return { long: "Does not meet complexity requirements.", short: "Not complex enough" };
    case i$1.IsCountry:
      return { long: "Not a valid country code.", short: "Invalid country code" };
    case i$1.IsCreditCard:
      return { long: "Not a valid credit card number.", short: "Invalid credit card number" };
    case i$1.IsCurrency:
      return { long: "Not a valid currency code.", short: "Invalid currency code" };
    case i$1.IsDataURI:
      return { long: "Not a valid data URI.", short: "Invalid data URI" };
    case i$1.IsDate:
      return { long: "Not a valid date.", short: "Invalid date" };
    case i$1.IsDateRange:
      return { long: "Not a valid date range.", short: "Invalid date range" };
    case i$1.IsDateTime:
      return { long: "Not a valid DateTime value.", short: "Invalid DateTime value" };
    case i$1.IsDayOfMonth:
      return { long: "Not a day of the month.", short: "Not valid day of month" };
    case i$1.IsDecimal:
      return { long: "Not a valid decimal value.", short: "Invalid decimal value" };
    case i$1.IsDivisibleBy:
      return { long: `Not divisible by ${l2 == null ? void 0 : l2.requirement}.`, short: `Not divisible by ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsDomainName:
      return { long: "Not a valid domain name.", short: "Invalid domain name" };
    case i$1.IsEmailAddress:
      return { long: "Not a valid email address.", short: "Invalid email address" };
    case i$1.IsEthereumAddress:
      return { long: "Not a valid Ethereum address.", short: "Invalid Ethereum address" };
    case i$1.IsEAN:
      return { long: "Not a valid EAN number.", short: "Invalid EAN number" };
    case i$1.IsEIN:
      return { long: "Not a valid EIN number.", short: "Invalid EIN number" };
    case i$1.IsEqual:
      return { long: `Value is not equal to ${l2 == null ? void 0 : l2.requirement}.`, short: `Not equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsEvenNumber:
      return { long: "Value is not an even number.", short: "Not an even number" };
    case i$1.IsFloat:
      return { long: "Value is not a floating point integer.", short: "Invalid float value" };
    case i$1.IsIBAN:
      return { long: "Not a valid IBAN number.", short: "Invalid IBAN number" };
    case i$1.IsGreaterThan:
      return { long: `Value is not greater than ${l2 == null ? void 0 : l2.requirement}.`, short: `Not greater than ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsGreaterThanOrEqual:
      return { long: `Value is not greater than or equal to ${l2 == null ? void 0 : l2.requirement}`, short: `Not greater or equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsHSLColor:
      return { long: "Value is not valid HSL color string.", short: "Invalid HSL value" };
    case i$1.IsHexColor:
      return { long: "Not a valid hexadecimal color code string.", short: "Invalid hex color code" };
    case i$1.IsHexadecimal:
      return { long: "Not a valid hexadecimal string.", short: "Not hexadecimal value" };
    case i$1.IsIdentityCardCode:
      return { long: "Not a valid identity card code.", short: "Invalid ID card" };
    case i$1.IsIMEI:
      return { long: "Not a valid IMEI number.", short: "Invalid IMEI number" };
    case i$1.IsInIPAddressRange:
      return { long: `Value is not within ${l2 == null ? void 0 : l2.requirement} IP range`, short: "Not in IP range" };
    case i$1.IsInList:
      return { long: "Value is not included in given list.", short: "Not in list" };
    case i$1.IsInTheLast:
      return { long: "Value is not the last item in given list.", short: "Not last in list" };
    case i$1.IsInteger:
      return { long: "Value is not a valid integer value.", short: "Not an integer" };
    case i$1.IsIPAddress:
      return { long: "Value is not a valid IP address.", short: "Invalid IP address" };
    case i$1.IsIPAddressRange:
      return { long: "Not a valid IP address range.", short: "Invalid IP address range" };
    case i$1.IsISBN:
      return { long: "Value is not valid ISBN number.", short: "Invalid ISBN number" };
    case i$1.IsISIN:
      return { long: "Value is not a valid ISIN number.", short: "Invalid ISIN number" };
    case i$1.IsISMN:
      return { long: "Value is not a valid ISMN number.", short: "Invalid ISMN number" };
    case i$1.IsISRC:
      return { long: "Value is not a valid ISRC number.", short: "Invalid ISRC number" };
    case i$1.IsISSN:
      return { long: "Value is not a valid ISSN number.", short: "Invalid ISSN number" };
    case i$1.IsISO4217:
      return { long: "Value is not ISO-4217 compliant currency code.", short: "Invalid currency code" };
    case i$1.IsISO8601:
      return { long: "Value is not ISO-8601 compliant date string.", short: "Invalid date" };
    case i$1.IsISO31661Alpha2:
      return { long: "Not a valid ISO-3166-1 Alpha 2 country code.", short: "Invalid country code" };
    case i$1.IsISO31661Alpha3:
      return { long: "Not a valid ISO-3166-1 Alpha 3 country code.", short: "Invalid country code" };
    case i$1.IsJSON:
      return { long: "Not valid JSON data.", short: "Invalid JSON" };
    case i$1.IsLanguage:
      return { long: "Value is not a valid language code.", short: "Invalid language code" };
    case i$1.IsLatitude:
      return { long: "Not a valid latitudinal coordinate.", short: "Invalid latitude coordinate" };
    case i$1.IsLongitude:
      return { long: "Not a valid longitudinal coordinate.", short: "Invalid longitude coordinate" };
    case i$1.IsLengthEqual:
      return { long: `Length of value is not equal to ${l2 == null ? void 0 : l2.requirement}.`, short: `Length not equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsLengthGreaterThan:
      return { long: `Length of value is not greater than ${l2 == null ? void 0 : l2.requirement}.`, short: "Not long enough" };
    case i$1.IsLengthGreaterThanOrEqual:
      return { long: `Length of value is not greater than or equal to ${l2 == null ? void 0 : l2.requirement}.`, short: "Not long enough" };
    case i$1.IsLengthLessThan:
      return { long: `Length of value is not less than ${l2 == null ? void 0 : l2.requirement}.`, short: "Too long" };
    case i$1.IsLengthLessThanOrEqual:
      return { long: `Length of value is not less than or equal to ${l2 == null ? void 0 : l2.requirement}.`, short: "Too long" };
    case i$1.IsLessThan:
      return { long: `Value is not less than ${l2 == null ? void 0 : l2.requirement}.`, short: `Not less than ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsLessThanOrEqual:
      return { long: `Value is not less than or equal to ${l2 == null ? void 0 : l2.requirement}.`, short: `Not less or equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsLicensePlateNumber:
      return { long: "Not a valid license plate number.", short: "Invalid license plate number" };
    case i$1.IsLowercase:
      return { long: "Value is not all lowercase.", short: "Not all lowercase" };
    case i$1.IsOctal:
      return { long: "Value is not a valid octal string.", short: "Invalid octal value" };
    case i$1.IsMACAddress:
      return { long: "Value is not a valid MAC address.", short: "Invalid MAC address" };
    case i$1.IsMD5:
      return { long: "Value is not valid MD5 hash string.", short: "Invalid MD5 string" };
    case i$1.IsMagnetURI:
      return { long: "Not a valid Magnet URI string.", short: "Invalid Magnet URI" };
    case i$1.IsMarkdown:
      return { long: "Value is not a valid markdown string.", short: "Invalid Markdown" };
    case i$1.IsMimeType:
      return { long: "Value is not a valid HTTP MIME type.", short: "Invalid MIME type" };
    case i$1.IsMonth:
      return { long: "Value is not a valid month.", short: "Invalid month" };
    case i$1.IsNegativeNumber:
      return { long: "Value is not a negative number.", short: "Number not negative" };
    case i$1.IsNotDate:
      return { long: "Value is not a valid date string.", short: "Invalid date" };
    case i$1.IsNotEqual:
      return { long: `Value is equal to ${l2 == null ? void 0 : l2.requirement}.`, short: `Can't be equal to ${l2 == null ? void 0 : l2.requirement}` };
    case i$1.IsNotInIPAddressRange:
      return { long: "Value is not within IP range.", short: "Not in IP address range" };
    case i$1.IsNotInList:
      return { long: "Value is not allowed.", short: "Not allowed" };
    case i$1.IsNotNull:
      return { long: "Value is required and must not be null.", short: "Cannot be null" };
    case i$1.IsNotRegexMatch:
      return { long: "Value does not match required pattern.", short: "Invalid pattern" };
    case i$1.IsNotToday:
      return { long: "Value must not be same date as current day.", short: "Cannot be today" };
    case i$1.IsNumber:
      return { long: "Value is not a number.", short: "Not a number" };
    case i$1.IsNumeric:
      return { long: "String value must be numeric only.", short: "Not numeric" };
    case i$1.IsOddNumber:
      return { long: "Value must be an odd number.", short: "Not an odd number" };
    case i$1.IsPassportNumber:
      return { long: "Not a valid password number.", short: "Invalid password number" };
    case i$1.IsPhoneNumber:
      return { long: "Not a valid phone number.", short: "Invalid phone number" };
    case i$1.IsPort:
      return { long: "Not a valid port number.", short: "Invalid port number" };
    case i$1.IsPositiveNumber:
      return { long: "Not a positive number.", short: "Not a positive number" };
    case i$1.IsPostalCode:
      return { long: "Not a valid postal code.", short: "Invalid postal code" };
    case i$1.IsProvince:
      return { long: "Not a valid province code.", short: "Invalid province code" };
    case i$1.IsRGBColor:
      return { long: "Not a valid RGB color string.", short: "Invalid RGB color" };
    case i$1.IsRegexMatch:
      return { long: "Value does not match required pattern.", short: "Missing string pattern" };
    case i$1.IsRequired:
      return { long: "Field is required.", short: "Required field" };
    case i$1.IsSemanticVersion:
      return { long: "Value is not a valid semantic version.", short: "Invalid version" };
    case i$1.IsSlug:
      return { long: "Not a valid URL slug string.", short: "Invalid URL slug" };
    case i$1.IsSSN:
      return { long: "Not a valid social security number.", short: "Invalid SSN" };
    case i$1.IsState:
      return { long: "Not a valid state code.", short: "Invalid state code" };
    case i$1.IsStreetAddress:
      return { long: "Not a valid street address.", short: "Invalid street address" };
    case i$1.IsString:
      return { long: "Value is not a valid string.", short: "Must be a string" };
    case i$1.IsStrongPassword:
      return { long: "A stronger password is required.", short: "Password must be stronger" };
    case i$1.IsTags:
      return { long: "Input value is not valid tags.", short: "Invalid tags" };
    case i$1.IsTaxIDNumber:
      return { long: "Value is not a valid tax ID number.", short: "Invalid tax ID number" };
    case i$1.IsThisMonth:
      return { long: "Date is not in the current month.", short: "Not current month" };
    case i$1.IsThisQuarter:
      return { long: "Date is not in the current quarter.", short: "Not current quarter" };
    case i$1.IsThisWeek:
      return { long: "Date is not this week.", short: "Not this week" };
    case i$1.IsThisWeekend:
      return { long: "Date is not date for upcoming weekend.", short: "Not this weekend" };
    case i$1.IsThisYear:
      return { long: "Date is not in the current year.", short: "Not in current year" };
    case i$1.IsTime:
      return { long: "Value is not a valid time string.", short: "Invalid time" };
    case i$1.IsTimeOfDay:
      return { long: "Value is not in required time of day.", short: "Invalid time of day" };
    case i$1.IsTimeRange:
      return { long: "Value is not a valid time range.", short: "Invalid time range" };
    case i$1.IsToday:
      return { long: "Date is not today.", short: "Not today's date" };
    case i$1.IsURL:
      return { long: "Value is not a valid URL string.", short: "Invalid URL" };
    case i$1.IsUUID:
      return { long: "Value is not a valid UUID string.", short: "Invalid UUID" };
    case i$1.IsUppercase:
      return { long: "String is not completely uppercased.", short: "Not uppercase" };
    case i$1.IsUsernameAvailable:
      return { long: "Username is not available.", short: "Username not available" };
    case i$1.IsValidStreetAddress:
      return { long: "Provided address is not valid.", short: "Invalid street address" };
    case i$1.IsVATIDNumber:
      return { long: "Value is not a valid VAT ID number.", short: "Invalid VAT ID" };
    case i$1.IsWeekday:
      return { long: "Date is not a weekday.", short: "Not a weekday" };
    case i$1.IsWeekend:
      return { long: "Date is not on a weekend.", short: "Not a weekend" };
    case i$1.IsYear:
      return { long: "Not a valid year string.", short: "Invalid year" };
  }
}
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
    const probs = Si(code, validation);
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
    var _a2;
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
      onChange: (e2) => {
        if (e2.nativeEvent.inputType !== "insertFromPaste") {
          const currentCodePart = codeParts == null ? void 0 : codeParts[key];
          if (e2.target.value.length === 1 || e2.target.value.length === 0) {
            setCodeParts(__spreadProps(__spreadValues({}, codeParts), { [key]: e2.target.value }));
          } else {
            setCodeParts(__spreadProps(__spreadValues({}, codeParts), { [key]: void 0 }));
          }
          if (e2.target.value.length === 1 && !currentCodePart) {
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
      onKeyDown: (e2) => {
        if (e2.key === "Delete" || e2.key === "Backspace" && !e2.target.value) {
          const lastElem = document.getElementById(`${name}-verification-code-input-${key - 1}`);
          if (lastElem) {
            lastElem.focus();
          }
        }
      },
      onPaste: (e2) => {
        if (key === 0) {
          const pastedText = e2.clipboardData.getData("Text");
          if (pastedText && pastedText.length === length && !Number.isNaN(pastedText)) {
            let obj = {};
            let i2 = 0;
            for (const val of [...pastedText]) {
              const prop = { [i2]: val };
              obj = __spreadValues(__spreadValues({}, obj), prop);
              i2 += 1;
            }
            setCodeParts(obj);
          }
        }
      },
      placeholder,
      textColor,
      type: codeType === "numeric" ? "number" : "text",
      value: (_a2 = codeParts == null ? void 0 : codeParts[key]) != null ? _a2 : ""
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
  var _a2;
  const navigate = useNavigate$1();
  const dispatch = useDispatch();
  const verificationState = useSelector((state) => {
    var _a3;
    return (_a3 = state.user.authentication) == null ? void 0 : _a3.verification.code;
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
  }, "Enter the confirmation code sent to", " ", /* @__PURE__ */ React.createElement("b", null, (_a2 = verificationState.delivery) == null ? void 0 : _a2.destination), ".")), /* @__PURE__ */ React.createElement(Container$h, {
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
  var _a2;
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
  }, error instanceof Exception ? error.message : error.length > 0 ? (_a2 = error[0]) == null ? void 0 : _a2.message.long : null));
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
  var _a2;
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [toggleValue, setToggleValue] = useState(defaultValue != null ? defaultValue : false);
  useEffect(() => {
    if (onChange)
      onChange({ problems: [], value: toggleValue });
  }, [toggleValue]);
  useEffect(() => {
    var _a3;
    setToggleValue((_a3 = defaultValue != null ? defaultValue : toggleValue) != null ? _a3 : "");
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal,
    grow: false
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a2 = problems[0]) == null ? void 0 : _a2.message.short) : null), /* @__PURE__ */ React.createElement(Container$h, {
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
  var _a2;
  const [value, setValue] = useState(defaultValue != null ? defaultValue : "");
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [valueChanged, setValueChanged] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = Si(value, validation);
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
    var _a3;
    setValue((_a3 = defaultValue != null ? defaultValue : value) != null ? _a3 : "");
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
      var _a3;
      (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
    },
    orientation: Orientation.Horizontal,
    size
  }, props), icon && /* @__PURE__ */ React.createElement(Icon, __spreadProps(__spreadValues({}, icon), {
    color: value === "" ? TextColors.InputPlaceholder : (_a2 = icon.color) != null ? _a2 : textColor,
    marginLeft: Amount.Less
  })), /* @__PURE__ */ React.createElement(Input$3, {
    autoComplete,
    defaultValue,
    hidden,
    name,
    onBlur: () => setFocused(false),
    onChange: (e2) => {
      setValueChanged(true);
      setValue(prefix2 + e2.target.value + suffix2);
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
      const probs = Si(value, validation);
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
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || from);
}
var escapeRegExp = function(stringToGoIntoTheRegex) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
var abbrMap = { k: 1e3, m: 1e6, b: 1e9 };
var parseAbbrValue = function(value, decimalSeparator) {
  if (decimalSeparator === void 0) {
    decimalSeparator = ".";
  }
  var reg = new RegExp("(\\d+(" + escapeRegExp(decimalSeparator) + "\\d*)?)([kmb])$", "i");
  var match2 = value.match(reg);
  if (match2) {
    var digits = match2[1], abbr = match2[3];
    var multiplier = abbrMap[abbr.toLowerCase()];
    return Number(digits.replace(decimalSeparator, ".")) * multiplier;
  }
  return void 0;
};
var removeSeparators = function(value, separator) {
  if (separator === void 0) {
    separator = ",";
  }
  var reg = new RegExp(escapeRegExp(separator), "g");
  return value.replace(reg, "");
};
var removeInvalidChars = function(value, validChars) {
  var chars = escapeRegExp(validChars.join(""));
  var reg = new RegExp("[^\\d" + chars + "]", "gi");
  return value.replace(reg, "");
};
var cleanValue = function(_a2) {
  var value = _a2.value, _b = _a2.groupSeparator, groupSeparator = _b === void 0 ? "," : _b, _c = _a2.decimalSeparator, decimalSeparator = _c === void 0 ? "." : _c, _d = _a2.allowDecimals, allowDecimals = _d === void 0 ? true : _d, _e2 = _a2.decimalsLimit, decimalsLimit = _e2 === void 0 ? 2 : _e2, _f = _a2.allowNegativeValue, allowNegativeValue = _f === void 0 ? true : _f, _g = _a2.disableAbbreviations, disableAbbreviations = _g === void 0 ? false : _g, _h = _a2.prefix, prefix2 = _h === void 0 ? "" : _h, _j = _a2.transformRawValue, transformRawValue = _j === void 0 ? function(rawValue) {
    return rawValue;
  } : _j;
  var transformedValue = transformRawValue(value);
  if (transformedValue === "-") {
    return transformedValue;
  }
  var abbreviations = disableAbbreviations ? [] : ["k", "m", "b"];
  var reg = new RegExp("((^|\\D)-\\d)|(-" + escapeRegExp(prefix2) + ")");
  var isNegative = reg.test(transformedValue);
  var _k = RegExp("(\\d+)-?" + escapeRegExp(prefix2)).exec(value) || [], prefixWithValue = _k[0], preValue = _k[1];
  var withoutPrefix = prefix2 ? prefixWithValue ? transformedValue.replace(prefixWithValue, "").concat(preValue) : transformedValue.replace(prefix2, "") : transformedValue;
  var withoutSeparators = removeSeparators(withoutPrefix, groupSeparator);
  var withoutInvalidChars = removeInvalidChars(withoutSeparators, __spreadArray([
    groupSeparator,
    decimalSeparator
  ], abbreviations));
  var valueOnly = withoutInvalidChars;
  if (!disableAbbreviations) {
    if (abbreviations.some(function(letter) {
      return letter === withoutInvalidChars.toLowerCase();
    })) {
      return "";
    }
    var parsed = parseAbbrValue(withoutInvalidChars, decimalSeparator);
    if (parsed) {
      valueOnly = String(parsed);
    }
  }
  var includeNegative = isNegative && allowNegativeValue ? "-" : "";
  if (decimalSeparator && valueOnly.includes(decimalSeparator)) {
    var _l = withoutInvalidChars.split(decimalSeparator), int2 = _l[0], decimals = _l[1];
    var trimmedDecimals = decimalsLimit && decimals ? decimals.slice(0, decimalsLimit) : decimals;
    var includeDecimals = allowDecimals ? "" + decimalSeparator + trimmedDecimals : "";
    return "" + includeNegative + int2 + includeDecimals;
  }
  return "" + includeNegative + valueOnly;
};
var fixedDecimalValue = function(value, decimalSeparator, fixedDecimalLength) {
  if (fixedDecimalLength && value.length > 1) {
    if (value.includes(decimalSeparator)) {
      var _a2 = value.split(decimalSeparator), int2 = _a2[0], decimals = _a2[1];
      if (decimals.length > fixedDecimalLength) {
        return "" + int2 + decimalSeparator + decimals.slice(0, fixedDecimalLength);
      }
    }
    var reg = value.length > fixedDecimalLength ? new RegExp("(\\d+)(\\d{" + fixedDecimalLength + "})") : new RegExp("(\\d)(\\d+)");
    var match2 = value.match(reg);
    if (match2) {
      var int2 = match2[1], decimals = match2[2];
      return "" + int2 + decimalSeparator + decimals;
    }
  }
  return value;
};
var getSuffix = function(value, _a2) {
  var _b = _a2.groupSeparator, groupSeparator = _b === void 0 ? "," : _b, _c = _a2.decimalSeparator, decimalSeparator = _c === void 0 ? "." : _c;
  var suffixReg = new RegExp("\\d([^" + escapeRegExp(groupSeparator) + escapeRegExp(decimalSeparator) + "0-9]+)");
  var suffixMatch = value.match(suffixReg);
  return suffixMatch ? suffixMatch[1] : void 0;
};
var formatValue$1 = function(options) {
  var _value = options.value, decimalSeparator = options.decimalSeparator, intlConfig = options.intlConfig, decimalScale = options.decimalScale, _a2 = options.prefix, prefix2 = _a2 === void 0 ? "" : _a2, _b = options.suffix, suffix2 = _b === void 0 ? "" : _b;
  if (_value === "" || _value === void 0) {
    return "";
  }
  if (_value === "-") {
    return "-";
  }
  var isNegative = new RegExp("^\\d?-" + (prefix2 ? escapeRegExp(prefix2) + "?" : "") + "\\d").test(_value);
  var value = decimalSeparator !== "." ? replaceDecimalSeparator(_value, decimalSeparator, isNegative) : _value;
  var numberFormatter = intlConfig ? new Intl.NumberFormat(intlConfig.locale, intlConfig.currency ? {
    style: "currency",
    currency: intlConfig.currency,
    minimumFractionDigits: decimalScale || 0,
    maximumFractionDigits: 20
  } : void 0) : new Intl.NumberFormat(void 0, {
    minimumFractionDigits: decimalScale || 0,
    maximumFractionDigits: 20
  });
  var parts = numberFormatter.formatToParts(Number(value));
  var formatted = replaceParts(parts, options);
  var intlSuffix = getSuffix(formatted, __assign$1({}, options));
  var includeDecimalSeparator = _value.slice(-1) === decimalSeparator ? decimalSeparator : "";
  var _c = value.match(RegExp("\\d+\\.(\\d+)")) || [], decimals = _c[1];
  if (decimalScale === void 0 && decimals && decimalSeparator) {
    if (formatted.includes(decimalSeparator)) {
      formatted = formatted.replace(RegExp("(\\d+)(" + escapeRegExp(decimalSeparator) + ")(\\d+)", "g"), "$1$2" + decimals);
    } else {
      if (intlSuffix && !suffix2) {
        formatted = formatted.replace(intlSuffix, "" + decimalSeparator + decimals + intlSuffix);
      } else {
        formatted = "" + formatted + decimalSeparator + decimals;
      }
    }
  }
  if (suffix2 && includeDecimalSeparator) {
    return "" + formatted + includeDecimalSeparator + suffix2;
  }
  if (intlSuffix && includeDecimalSeparator) {
    return formatted.replace(intlSuffix, "" + includeDecimalSeparator + intlSuffix);
  }
  if (intlSuffix && suffix2) {
    return formatted.replace(intlSuffix, "" + includeDecimalSeparator + suffix2);
  }
  return [formatted, includeDecimalSeparator, suffix2].join("");
};
var replaceDecimalSeparator = function(value, decimalSeparator, isNegative) {
  var newValue = value;
  if (decimalSeparator && decimalSeparator !== ".") {
    newValue = newValue.replace(RegExp(escapeRegExp(decimalSeparator), "g"), ".");
    if (isNegative && decimalSeparator === "-") {
      newValue = "-" + newValue.slice(1);
    }
  }
  return newValue;
};
var replaceParts = function(parts, _a2) {
  var prefix2 = _a2.prefix, groupSeparator = _a2.groupSeparator, decimalSeparator = _a2.decimalSeparator, decimalScale = _a2.decimalScale, _b = _a2.disableGroupSeparators, disableGroupSeparators = _b === void 0 ? false : _b;
  return parts.reduce(function(prev, _a3, i2) {
    var type = _a3.type, value = _a3.value;
    if (i2 === 0 && prefix2) {
      if (type === "minusSign") {
        return [value, prefix2];
      }
      if (type === "currency") {
        return __spreadArray(__spreadArray([], prev), [prefix2]);
      }
      return [prefix2, value];
    }
    if (type === "currency") {
      return prefix2 ? prev : __spreadArray(__spreadArray([], prev), [value]);
    }
    if (type === "group") {
      return !disableGroupSeparators ? __spreadArray(__spreadArray([], prev), [groupSeparator !== void 0 ? groupSeparator : value]) : prev;
    }
    if (type === "decimal") {
      if (decimalScale !== void 0 && decimalScale === 0) {
        return prev;
      }
      return __spreadArray(__spreadArray([], prev), [decimalSeparator !== void 0 ? decimalSeparator : value]);
    }
    if (type === "fraction") {
      return __spreadArray(__spreadArray([], prev), [decimalScale !== void 0 ? value.slice(0, decimalScale) : value]);
    }
    return __spreadArray(__spreadArray([], prev), [value]);
  }, [""]).join("");
};
var defaultConfig = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
};
var getLocaleConfig = function(intlConfig) {
  var _a2 = intlConfig || {}, locale2 = _a2.locale, currency = _a2.currency;
  var numberFormatter = locale2 ? new Intl.NumberFormat(locale2, currency ? { currency, style: "currency" } : void 0) : new Intl.NumberFormat();
  return numberFormatter.formatToParts(1000.1).reduce(function(prev, curr, i2) {
    if (curr.type === "currency") {
      if (i2 === 0) {
        return __assign$1(__assign$1({}, prev), { currencySymbol: curr.value, prefix: curr.value });
      } else {
        return __assign$1(__assign$1({}, prev), { currencySymbol: curr.value, suffix: curr.value });
      }
    }
    if (curr.type === "group") {
      return __assign$1(__assign$1({}, prev), { groupSeparator: curr.value });
    }
    if (curr.type === "decimal") {
      return __assign$1(__assign$1({}, prev), { decimalSeparator: curr.value });
    }
    return prev;
  }, defaultConfig);
};
var isNumber$1 = function(input) {
  return RegExp(/\d/, "gi").test(input);
};
var padTrimValue = function(value, decimalSeparator, decimalScale) {
  if (decimalSeparator === void 0) {
    decimalSeparator = ".";
  }
  if (decimalScale === void 0 || value === "" || value === void 0) {
    return value;
  }
  if (!value.match(/\d/g)) {
    return "";
  }
  var _a2 = value.split(decimalSeparator), int2 = _a2[0], decimals = _a2[1];
  if (decimalScale === 0) {
    return int2;
  }
  var newValue = decimals || "";
  if (newValue.length < decimalScale) {
    while (newValue.length < decimalScale) {
      newValue += "0";
    }
  } else {
    newValue = newValue.slice(0, decimalScale);
  }
  return "" + int2 + decimalSeparator + newValue;
};
var repositionCursor = function(_a2) {
  var selectionStart = _a2.selectionStart, value = _a2.value, lastKeyStroke = _a2.lastKeyStroke, stateValue = _a2.stateValue, groupSeparator = _a2.groupSeparator;
  var cursorPosition = selectionStart;
  var modifiedValue = value;
  if (stateValue && cursorPosition) {
    var splitValue = value.split("");
    if (lastKeyStroke === "Backspace" && stateValue[cursorPosition] === groupSeparator) {
      splitValue.splice(cursorPosition - 1, 1);
      cursorPosition -= 1;
    }
    if (lastKeyStroke === "Delete" && stateValue[cursorPosition] === groupSeparator) {
      splitValue.splice(cursorPosition, 1);
      cursorPosition += 1;
    }
    modifiedValue = splitValue.join("");
    return { modifiedValue, cursorPosition };
  }
  return { modifiedValue, cursorPosition: selectionStart };
};
var CurrencyInput$1 = forwardRef(function(_a2, ref) {
  var _b = _a2.allowDecimals, allowDecimals = _b === void 0 ? true : _b, _c = _a2.allowNegativeValue, allowNegativeValue = _c === void 0 ? true : _c, id = _a2.id, name = _a2.name, className = _a2.className, customInput = _a2.customInput, decimalsLimit = _a2.decimalsLimit, defaultValue = _a2.defaultValue, _d = _a2.disabled, disabled = _d === void 0 ? false : _d, userMaxLength = _a2.maxLength, userValue = _a2.value, onValueChange = _a2.onValueChange, fixedDecimalLength = _a2.fixedDecimalLength, placeholder = _a2.placeholder, decimalScale = _a2.decimalScale, prefix2 = _a2.prefix, suffix2 = _a2.suffix, intlConfig = _a2.intlConfig, step = _a2.step, min = _a2.min, max = _a2.max, _e2 = _a2.disableGroupSeparators, disableGroupSeparators = _e2 === void 0 ? false : _e2, _f = _a2.disableAbbreviations, disableAbbreviations = _f === void 0 ? false : _f, _decimalSeparator = _a2.decimalSeparator, _groupSeparator = _a2.groupSeparator, onChange = _a2.onChange, onFocus = _a2.onFocus, onBlur = _a2.onBlur, onKeyDown = _a2.onKeyDown, onKeyUp = _a2.onKeyUp, transformRawValue = _a2.transformRawValue, props = __rest(_a2, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue"]);
  if (_decimalSeparator && isNumber$1(_decimalSeparator)) {
    throw new Error("decimalSeparator cannot be a number");
  }
  if (_groupSeparator && isNumber$1(_groupSeparator)) {
    throw new Error("groupSeparator cannot be a number");
  }
  var localeConfig = useMemo(function() {
    return getLocaleConfig(intlConfig);
  }, [intlConfig]);
  var decimalSeparator = _decimalSeparator || localeConfig.decimalSeparator || "";
  var groupSeparator = _groupSeparator || localeConfig.groupSeparator || "";
  if (decimalSeparator && groupSeparator && decimalSeparator === groupSeparator && disableGroupSeparators === false) {
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  }
  var formatValueOptions = {
    decimalSeparator,
    groupSeparator,
    disableGroupSeparators,
    intlConfig,
    prefix: prefix2 || localeConfig.prefix,
    suffix: suffix2
  };
  var cleanValueOptions = {
    decimalSeparator,
    groupSeparator,
    allowDecimals,
    decimalsLimit: decimalsLimit || fixedDecimalLength || 2,
    allowNegativeValue,
    disableAbbreviations,
    prefix: prefix2 || localeConfig.prefix,
    transformRawValue
  };
  var formattedStateValue = defaultValue !== void 0 && defaultValue !== null ? formatValue$1(__assign$1(__assign$1({}, formatValueOptions), { decimalScale, value: String(defaultValue) })) : userValue !== void 0 && userValue !== null ? formatValue$1(__assign$1(__assign$1({}, formatValueOptions), { decimalScale, value: String(userValue) })) : "";
  var _g = useState(formattedStateValue), stateValue = _g[0], setStateValue = _g[1];
  var _h = useState(false), dirty = _h[0], setDirty = _h[1];
  var _j = useState(0), cursor = _j[0], setCursor = _j[1];
  var _k = useState(0), changeCount = _k[0], setChangeCount = _k[1];
  var _l = useState(null), lastKeyStroke = _l[0], setLastKeyStroke = _l[1];
  var inputRef = ref || useRef(null);
  var processChange = function(value, selectionStart) {
    setDirty(true);
    var _a3 = repositionCursor({
      selectionStart,
      value,
      lastKeyStroke,
      stateValue,
      groupSeparator
    }), modifiedValue = _a3.modifiedValue, cursorPosition = _a3.cursorPosition;
    var stringValue = cleanValue(__assign$1({ value: modifiedValue }, cleanValueOptions));
    if (userMaxLength && stringValue.replace(/-/g, "").length > userMaxLength) {
      return;
    }
    if (stringValue === "" || stringValue === "-" || stringValue === decimalSeparator) {
      onValueChange && onValueChange(void 0, name, { float: null, formatted: "", value: "" });
      setStateValue(stringValue);
      return;
    }
    var numberValue = parseFloat(stringValue.replace(decimalSeparator, "."));
    var formattedValue = formatValue$1(__assign$1({ value: stringValue }, formatValueOptions));
    if (cursorPosition !== void 0 && cursorPosition !== null) {
      var newCursor = cursorPosition + (formattedValue.length - value.length);
      newCursor = newCursor <= 0 ? prefix2 ? prefix2.length : 0 : newCursor;
      setCursor(newCursor);
      setChangeCount(changeCount + 1);
    }
    setStateValue(formattedValue);
    if (onValueChange) {
      var values = {
        float: numberValue,
        formatted: formattedValue,
        value: stringValue
      };
      onValueChange(stringValue, name, values);
    }
  };
  var handleOnChange = function(event) {
    var _a3 = event.target, value = _a3.value, selectionStart = _a3.selectionStart;
    processChange(value, selectionStart);
    onChange && onChange(event);
  };
  var handleOnFocus = function(event) {
    onFocus && onFocus(event);
    return stateValue ? stateValue.length : 0;
  };
  var handleOnBlur = function(event) {
    var value = event.target.value;
    var valueOnly = cleanValue(__assign$1({ value }, cleanValueOptions));
    if (valueOnly === "-" || !valueOnly) {
      setStateValue("");
      onBlur && onBlur(event);
      return;
    }
    var fixedDecimals = fixedDecimalValue(valueOnly, decimalSeparator, fixedDecimalLength);
    var newValue = padTrimValue(fixedDecimals, decimalSeparator, decimalScale !== void 0 ? decimalScale : fixedDecimalLength);
    var numberValue = parseFloat(newValue.replace(decimalSeparator, "."));
    var formattedValue = formatValue$1(__assign$1(__assign$1({}, formatValueOptions), { value: newValue }));
    if (onValueChange) {
      onValueChange(newValue, name, {
        float: numberValue,
        formatted: formattedValue,
        value: newValue
      });
    }
    setStateValue(formattedValue);
    onBlur && onBlur(event);
  };
  var handleOnKeyDown = function(event) {
    var key = event.key;
    setLastKeyStroke(key);
    if (step && (key === "ArrowUp" || key === "ArrowDown")) {
      event.preventDefault();
      setCursor(stateValue.length);
      var currentValue = parseFloat(userValue !== void 0 && userValue !== null ? String(userValue).replace(decimalSeparator, ".") : cleanValue(__assign$1({ value: stateValue }, cleanValueOptions))) || 0;
      var newValue = key === "ArrowUp" ? currentValue + step : currentValue - step;
      if (min !== void 0 && newValue < min) {
        return;
      }
      if (max !== void 0 && newValue > max) {
        return;
      }
      var fixedLength = String(step).includes(".") ? Number(String(step).split(".")[1].length) : void 0;
      processChange(String(fixedLength ? newValue.toFixed(fixedLength) : newValue).replace(".", decimalSeparator));
    }
    onKeyDown && onKeyDown(event);
  };
  var handleOnKeyUp = function(event) {
    var key = event.key, selectionStart = event.currentTarget.selectionStart;
    if (key !== "ArrowUp" && key !== "ArrowDown" && stateValue !== "-") {
      var suffix_1 = getSuffix(stateValue, { groupSeparator, decimalSeparator });
      if (suffix_1 && selectionStart && selectionStart > stateValue.length - suffix_1.length) {
        if (inputRef && typeof inputRef === "object" && inputRef.current) {
          var newCursor = stateValue.length - suffix_1.length;
          inputRef.current.setSelectionRange(newCursor, newCursor);
        }
      }
    }
    onKeyUp && onKeyUp(event);
  };
  useEffect(function() {
    if (dirty && stateValue !== "-" && inputRef && typeof inputRef === "object" && inputRef.current) {
      inputRef.current.setSelectionRange(cursor, cursor);
    }
  }, [stateValue, cursor, inputRef, dirty, changeCount]);
  var getRenderValue = function() {
    if (userValue !== void 0 && userValue !== null && stateValue !== "-" && (!decimalSeparator || stateValue !== decimalSeparator)) {
      return formatValue$1(__assign$1(__assign$1({}, formatValueOptions), { decimalScale: dirty ? void 0 : decimalScale, value: String(userValue) }));
    }
    return stateValue;
  };
  var inputProps = __assign$1({
    type: "text",
    inputMode: "decimal",
    id,
    name,
    className,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus,
    onKeyDown: handleOnKeyDown,
    onKeyUp: handleOnKeyUp,
    placeholder,
    disabled,
    value: getRenderValue(),
    ref: inputRef
  }, props);
  if (customInput) {
    var CustomInput = customInput;
    return React.createElement(CustomInput, __assign$1({}, inputProps));
  }
  return React.createElement("input", __assign$1({}, inputProps));
});
CurrencyInput$1.displayName = "CurrencyInput";
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
      const probs = Si(value, validation);
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
  }, "$"), /* @__PURE__ */ React.createElement(CurrencyInput$1, {
    className: "currency-input",
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
    name,
    defaultValue: value ? Number(value).toFixed(2) : 0,
    onValueChange: (v2) => {
      setValueChanged(true);
      setValue(Number.parseInt(v2 != null ? v2 : "0"));
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
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$2 = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"];
var DEFAULT_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";
var DEFAULT_CDN_SUFFIX = "svg";
var OFFSET = 127397;
var ReactCountryFlag = function ReactCountryFlag2(_ref) {
  var _ref$cdnSuffix = _ref.cdnSuffix, cdnSuffix = _ref$cdnSuffix === void 0 ? DEFAULT_CDN_SUFFIX : _ref$cdnSuffix, _ref$cdnUrl = _ref.cdnUrl, cdnUrl = _ref$cdnUrl === void 0 ? DEFAULT_CDN_URL : _ref$cdnUrl, countryCode = _ref.countryCode, style = _ref.style, _ref$svg = _ref.svg, svg = _ref$svg === void 0 ? false : _ref$svg, props = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);
  if (typeof countryCode !== "string") {
    return null;
  }
  if (svg) {
    var flagUrl = "" + cdnUrl + countryCode.toLowerCase() + "." + cdnSuffix;
    return createElement("img", Object.assign({}, props, {
      src: flagUrl,
      style: _extends({
        display: "inline-block",
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }, style)
    }));
  }
  var emoji = countryCode.toUpperCase().replace(/./g, function(_char) {
    return String.fromCodePoint(_char.charCodeAt(0) + OFFSET);
  });
  return createElement("span", Object.assign({
    role: "img"
  }, props, {
    style: _extends({
      display: "inline-block",
      fontSize: "1em",
      lineHeight: "1em",
      verticalAlign: "middle"
    }, style)
  }), emoji);
};
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
  const resolved = useResolvedPath$1(to);
  const exactMatch = useMatch({ end: true, path: resolved.pathname });
  useMatch({ end: false, path: resolved.pathname });
  const location = useLocation$1();
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
  return /* @__PURE__ */ React.createElement(NavLink$1, {
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
    onMouseEnter: (e2) => {
      setHovered(true);
      if (onMouseEnter)
        onMouseEnter(e2);
    },
    onMouseLeave: (e2) => {
      setHovered(false);
      if (onMouseLeave)
        onMouseLeave(e2);
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
  var _a2;
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
      onClick: (e2) => {
        e2.preventDefault();
        e2.stopPropagation();
        if (onClick)
          onClick(e2);
      },
      paddingLeft: Amount.Less,
      paddingRight: Amount.Less,
      textColor: (_a2 = props.textColor) != null ? _a2 : TextColors.Default,
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
    onClick: (e2) => {
      e2.preventDefault();
      e2.stopPropagation();
      if (onClick)
        onClick(e2);
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
  var _a2;
  return props.menuVisible ? getDepthZIndex((_a2 = props.depth) != null ? _a2 : Depth.Surface) + 3 : "auto";
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
  var _a2;
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
  }, (_a2 = label != null ? label : placeholder) != null ? _a2 : ""), /* @__PURE__ */ React.createElement(Container$h, {
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
  const [item, setItem] = useState(menu == null ? void 0 : menu.find((i2) => i2.value === defaultValue));
  const [valueChanged, setValueChanged] = useState(false);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = Si(item, validation);
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
    var _a2, _b;
    setItem((_b = (_a2 = menu == null ? void 0 : menu.find((i2) => i2.value === defaultValue)) != null ? _a2 : item) != null ? _b : void 0);
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
    onItemClick: (i2) => {
      setValueChanged(true);
      setItem(i2);
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
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
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
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i2 = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read(arguments[i2]));
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
  var f2 = withMimeType(file);
  if (typeof f2.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f2, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f2;
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
    return __generator(this, function(_a2) {
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
function isObject(v2) {
  return typeof v2 === "object" && v2 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h2) {
            return h2.getFile();
          }))];
        case 1:
          files = _a2.sent();
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
    return __generator(this, function(_a2) {
      switch (_a2.label) {
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
          files = _a2.sent();
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
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
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
    return __generator(this, function(_a2) {
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
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a2.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a2.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a2.label = 6;
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
    return __generator(this, function(_a2) {
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
function ownKeys$2(object, enumerableOnly) {
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
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
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
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e2;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e2;
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
    }).reduce(function(a, b2) {
      return _objectSpread$1(_objectSpread$1({}, a), {}, _defineProperty$2({}, b2, []));
    }, {}) : {}
  }];
}
var _excluded$1 = ["children"], _excluded2$1 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
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
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
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
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e2;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e2;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
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
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
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
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded$1);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2$1);
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
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop$1;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop$1;
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
          errors: errors.filter(function(e2) {
            return e2;
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
      }).catch(function(e2) {
        return onFileDialogCancelCb(e2);
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
      return _objectSpread(_objectSpread(_defineProperty$1({
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
      var inputProps = _defineProperty$1({
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
function noop$1() {
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
  var _c, _d, _e2, _f;
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
    const added = previewImages && previewImages.some((f2) => {
      return f2.hasOwnProperty("path") && f2.path === file.name;
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
  const _a2 = getInputProps(), { ref: inputRef } = _a2, inputProps = __objRest(_a2, ["ref"]);
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
      setImages((files) => files == null ? void 0 : files.filter((e2, i2) => i2 !== index));
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
    size: (_e2 = button.size) != null ? _e2 : Size.Small,
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
  var _a2;
  const [value, setValue] = useState(defaultValue);
  const [valueChanged, setValueChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    setValueChanged(true);
    if (valueChanged) {
      const probs = Si(value, validation);
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
  }, (_a2 = problems[0]) == null ? void 0 : _a2.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
    backgroundColor,
    border,
    boxShadow,
    cursor,
    className: `${className} number-input`,
    error: problems,
    focused,
    onClick: () => {
      var _a3;
      (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
    },
    orientation: Orientation.Horizontal,
    size
  }, props), icon && /* @__PURE__ */ React.createElement(React.Fragment, null, icon), /* @__PURE__ */ React.createElement(Input$2, {
    defaultValue,
    hidden,
    name,
    onBlur: () => setFocused(false),
    onChange: (e2) => {
      setValueChanged(true);
      setValue(e2.target.value);
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder,
    onKeyPress: (e2) => e2.key,
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
  var _a2;
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
      const probs = Si(value, validation);
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
  }, (_a2 = problems[0]) == null ? void 0 : _a2.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, __spreadValues({
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
    onChange: (e2) => {
      var _a3;
      setValueChanged(true);
      setValue([e2.target.value, value[1], value[2]]);
      if (e2.target.value.length === 3 && secondInputRef.current) {
        (_a3 = secondInputRef.current) == null ? void 0 : _a3.focus();
      }
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "123",
    onKeyPress: (e2) => {
      if (e2.target.value.length === 3) {
        e2.preventDefault();
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
    onChange: (e2) => {
      var _a3;
      setValueChanged(true);
      setValue([value[0], e2.target.value, value[2]]);
      if (e2.target.value.length === 2) {
        (_a3 = thirdInputRef.current) == null ? void 0 : _a3.focus();
      }
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "45",
    onKeyPress: (e2) => {
      if (e2.target.value.length === 2) {
        e2.preventDefault();
      }
    },
    onKeyDown: (e2) => {
      var _a3;
      if (e2.key === "Backspace" && e2.target.value.length === 0) {
        (_a3 = firstInputRef.current) == null ? void 0 : _a3.focus();
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
    onChange: (e2) => {
      setValueChanged(true);
      setValue([value[0], value[1], e2.target.value]);
    },
    onFocus: () => setFocused(true),
    lineHeight: size,
    placeholder: "6789",
    onKeyPress: (e2) => {
      if (e2.target.value.length === 4) {
        e2.preventDefault();
      }
    },
    onKeyDown: (e2) => {
      var _a3;
      if (e2.key === "Backspace" && e2.target.value.length === 0) {
        (_a3 = secondInputRef.current) == null ? void 0 : _a3.focus();
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
  var _a2;
  const [value, setValue] = useState(defaultValue != null ? defaultValue : "");
  const [focused, setFocused] = useState(false);
  const [problems, setProblems] = useState([]);
  const [valueChanged, setValueChanged] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (validation && valueChanged) {
      const probs = Si(value, validation);
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
    var _a3;
    setValue((_a3 = defaultValue != null ? defaultValue : value) != null ? _a3 : "");
  }, [defaultValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container$h, {
    orientation: Orientation.Horizontal
  }, label && /* @__PURE__ */ React.createElement(InputLabel, null, label), problems.length > 0 ? /* @__PURE__ */ React.createElement(ErrorLabel, {
    alignContent: Align.Right
  }, (_a2 = problems[0]) == null ? void 0 : _a2.message.short) : null), /* @__PURE__ */ React.createElement(InputContainer, {
    backgroundColor,
    border,
    boxShadow,
    className: `${className} text-input`,
    error: problems,
    focused,
    flat,
    height: size,
    onClick: () => {
      var _a3;
      (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
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
    onChange: (e2) => {
      setValueChanged(true);
      setValue(prefix + e2.target.value + suffix);
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
      const problems = Si(password, validation);
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
      const problems = Si(password, validation);
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
  var _a2;
  const [fieldValues, setFieldValues] = useState(Object.fromEntries(fields.map((field) => {
    var _a3, _b;
    return [
      field.name,
      __spreadProps(__spreadValues({}, field), {
        value: (_b = (_a3 = entity == null ? void 0 : entity[field.name]) != null ? _a3 : field.value) != null ? _b : field.defaultValue
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
      var _a3, _b;
      return [
        field.name,
        __spreadProps(__spreadValues({}, field), {
          value: (_b = (_a3 = entity == null ? void 0 : entity[field.name]) != null ? _a3 : field.value) != null ? _b : field.defaultValue
        })
      ];
    })));
  }, [entity]);
  return /* @__PURE__ */ React.createElement(Container$h, __spreadValues({
    className: "form-fields",
    borderRadius: Amount.More,
    orientation: Orientation.Vertical
  }, props), (_a2 = Object.entries(fieldValues)) == null ? void 0 : _a2.map(([fieldName, field]) => {
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
  var _a2, _b;
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
    onClick: (e2) => {
      e2.preventDefault();
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
    onKeyPress: (e2) => {
      if (e2.key === "Enter" && onSubmit)
        onSubmit({
          fields: fieldValues,
          problems: validationProblems,
          validated: isValidated
        });
    },
    size: (_a2 = submitButtonProps.size) != null ? _a2 : Size.Large,
    type: (_b = submitButtonProps.type) != null ? _b : ButtonType.Primary
  }, submitButton.label)));
});
const Link$1 = memo((_ua) => {
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
  return /* @__PURE__ */ React.createElement(Link$2, {
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
    var _a2;
    return (_a2 = state.authentication) == null ? void 0 : _a2.in_progress;
  });
  const authError = useSelector((state) => {
    var _a2;
    return (_a2 = state.authentication) == null ? void 0 : _a2.error;
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
  }, /* @__PURE__ */ React.createElement(Link$1, {
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
  var _a2;
  const dispatch = useDispatch();
  const loginState = useSelector((state2) => {
    var _a3;
    return (_a3 = state2.user.authentication) == null ? void 0 : _a3.login;
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
  }, "Don't have an account yet?", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link$1, {
    to: "/signup",
    hover: { underline: true },
    underline: false
  }, "Sign up for free!"))), error && /* @__PURE__ */ React.createElement(ErrorNotification, {
    label: (_a2 = error == null ? void 0 : error.friendlyMessage) != null ? _a2 : "An error occurred unfortunately."
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
      var _a3, _b;
      console.log("fields", fields);
      if (validated)
        dispatch(login({
          password: (_a3 = fields.password) == null ? void 0 : _a3.value,
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
  }, /* @__PURE__ */ React.createElement(Link$1, {
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
  var _a2;
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => {
    var _a3;
    return (_a3 = state.user.authentication) == null ? void 0 : _a3.signup;
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
  }, "Already have an account?", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link$1, {
    to: "/login",
    hover: { underline: true },
    underline: false
  }, "Sign in"))), error && /* @__PURE__ */ React.createElement(ErrorNotification, {
    label: (_a2 = error == null ? void 0 : error.friendlyMessage) != null ? _a2 : "An error occurred unfortunately."
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
      var _a3, _b, _c, _d;
      if (validated)
        dispatch(signUp({
          firstName: (_a3 = fields.firstName) == null ? void 0 : _a3.value,
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
  }, 'By clicking the "Sign up" button you agree to the', " ", /* @__PURE__ */ React.createElement(Link$1, {
    hover: { underline: true },
    to: "/privacy",
    underline: false
  }, "Privacy Policy"), ".")));
});
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var usePrevious = function usePrevious2(value) {
  var ref = React.useRef(value);
  React.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray)
    return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject)
    return false;
  if (!leftPlainObject && !leftArray)
    return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length)
    return false;
  var keySet = {};
  for (var i2 = 0; i2 < leftKeys.length; i2 += 1) {
    keySet[leftKeys[i2]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l2 = left;
  var r2 = right;
  var pred = function pred2(key) {
    return isEqual2(l2[key], r2[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var ElementsContext = /* @__PURE__ */ React.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
({
  stripe: PropTypes.any,
  options: PropTypes.object
});
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = React.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useElements = function useElements2() {
  var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
  return elements;
};
var useStripe = function useStripe2() {
  var _useElementsContextWi2 = useElementsContextWithUseCase("calls useStripe()"), stripe = _useElementsContextWi2.stripe;
  return stripe;
};
({
  children: PropTypes.func.isRequired
});
var useCallbackReference = function useCallbackReference2(cb) {
  var ref = React.useRef(cb);
  React.useEffect(function() {
    ref.current = cb;
  }, [cb]);
  return function() {
    if (ref.current) {
      ref.current.apply(ref, arguments);
    }
  };
};
var noop = function noop2() {
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, _ref$onBlur = _ref.onBlur, onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur, _ref$onFocus = _ref.onFocus, onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus, _ref$onReady = _ref.onReady, onReady = _ref$onReady === void 0 ? noop : _ref$onReady, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onEscape = _ref.onEscape, onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? noop : _ref$onClick;
    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")), elements = _useElementsContextWi.elements;
    var elementRef = React.useRef(null);
    var domNode = React.useRef(null);
    var callOnReady = useCallbackReference(onReady);
    var callOnBlur = useCallbackReference(onBlur);
    var callOnFocus = useCallbackReference(onFocus);
    var callOnClick = useCallbackReference(onClick);
    var callOnChange = useCallbackReference(onChange);
    var callOnEscape = useCallbackReference(onEscape);
    React.useLayoutEffect(function() {
      if (elementRef.current == null && elements && domNode.current != null) {
        var element = elements.create(type, options);
        elementRef.current = element;
        element.mount(domNode.current);
        element.on("ready", function() {
          return callOnReady(element);
        });
        element.on("change", callOnChange);
        element.on("blur", callOnBlur);
        element.on("focus", callOnFocus);
        element.on("escape", callOnEscape);
        element.on("click", callOnClick);
      }
    });
    var prevOptions = usePrevious(options);
    React.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    React.useLayoutEffect(function() {
      return function() {
        if (elementRef.current) {
          elementRef.current.destroy();
        }
      };
    }, []);
    return /* @__PURE__ */ React.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return /* @__PURE__ */ React.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onReady: PropTypes.func,
    onClick: PropTypes.func,
    options: PropTypes.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
createElementComponent("cardNumber", isServer);
createElementComponent("cardExpiry", isServer);
createElementComponent("cardCvc", isServer);
createElementComponent("fpxBank", isServer);
createElementComponent("iban", isServer);
createElementComponent("idealBank", isServer);
createElementComponent("p24Bank", isServer);
createElementComponent("epsBank", isServer);
createElementComponent("payment", isServer);
createElementComponent("paymentRequestButton", isServer);
createElementComponent("linkAuthentication", isServer);
createElementComponent("shippingAddress", isServer);
createElementComponent("affirmMessage", isServer);
createElementComponent("afterpayClearpayMessage", isServer);
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
  const handleFormSubmit = async (e2) => {
    setInProgress(true);
    e2.preventDefault();
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
function formatCurrency({ amount, currency }) {
  switch (currency) {
    case CurrencyCode.UnitedStatesDollar:
      return `$${amount.toFixed(amount % 1 !== 0 ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    default:
      return `$${amount.toFixed(amount % 1 !== 0 ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
}
function formatValue(value, { formatter, options }) {
  var _a2;
  switch (formatter) {
    case Formatter$1.Currency:
      return formatCurrency({
        amount: value,
        currency: (_a2 = options == null ? void 0 : options.currency) != null ? _a2 : CurrencyCode.UnitedStatesDollar
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
    var _a2;
    return this.state.hasError ? /* @__PURE__ */ React.createElement(React.Fragment, null, (_a2 = this.state.exception) == null ? void 0 : _a2.message) : /* @__PURE__ */ React.createElement(React.Fragment, null, this.props.children);
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
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp2.call(target, key) && (copyDefault || key !== "default"))
        __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp2(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
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
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
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
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty2.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});
var require_react_development = __commonJS({
  "../../node_modules/React/cjs/react.development.js"(exports) {
    {
      (function() {
        var _assign = require_object_assign();
        var ReactVersion = "17.0.2";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          exports.StrictMode = symbolFor("react.strict_mode");
          exports.Profiler = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          exports.Suspense = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          symbolFor("react.scope");
          symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: 0
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component2.prototype.isReactComponent = {};
        Component2.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component2.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component2.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component2.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case exports.Profiler:
              return "Profiler";
            case exports.StrictMode:
              return "StrictMode";
            case exports.Suspense:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentName(init2(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty2.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty2.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i2 = 0; i2 < childrenLength; i2++) {
              childArray[i2] = arguments[i2 + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps2 = type.defaultProps;
            for (propName in defaultProps2) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps2[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement2(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps2;
            if (element.type && element.type.defaultProps) {
              defaultProps2 = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps2 !== void 0) {
                  props[propName] = defaultProps2[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i2 = 0; i2 < childrenLength; i2++) {
              childArray[i2] = arguments[i2 + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match2) {
            return escaperLookup[match2];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c2) {
                return c2;
              });
            } else if (mappedChild != null) {
              if (isValidElement2(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i2 = 0; i2 < children.length; i2++) {
              child = children[i2];
              nextName = nextNamePrefix + getElementKey(child, i2);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n2 = 0;
          mapChildren(children, function() {
            n2++;
          });
          return n2;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement2(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext2(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === void 0) {
                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function(error2) {
              if (payload._status === Pending) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps2;
            var propTypes2;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps2;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps2 = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes2;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes2 = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef2(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo2(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState5(initialState2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState2);
        }
        function useReducer2(reducer2, initialArg, init2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer2, initialArg, init2);
        }
        function useRef4(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect5(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect3(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback3(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo3(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle2(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match2 = x2.stack.trim().match(/\n( *(at )?)/);
                prefix2 = match2 && match2[1] || "";
              }
            }
            return "\n" + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component22) {
          var prototype = Component22.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i2 = 0; i2 < node.length; i2++) {
              var child = node[i2];
              if (isValidElement2(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement2(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement2(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes2;
            if (typeof type === "function") {
              propTypes2 = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes2 = type.propTypes;
            } else {
              return;
            }
            if (propTypes2) {
              var name = getComponentName(type);
              checkPropTypes(propTypes2, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i2 = 2; i2 < arguments.length; i2++) {
              validateChildKeys(arguments[i2], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement2.apply(this, arguments);
          for (var i2 = 2; i2 < arguments.length; i2++) {
            validateChildKeys(arguments[i2], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            /* @__PURE__ */ new Map([[frozenObject, null]]);
            /* @__PURE__ */ new Set([frozenObject]);
          } catch (e2) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children2 = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children2;
        exports.Component = Component2;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef2;
        exports.isValidElement = isValidElement2;
        exports.lazy = lazy;
        exports.memo = memo2;
        exports.useCallback = useCallback3;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect5;
        exports.useImperativeHandle = useImperativeHandle2;
        exports.useLayoutEffect = useLayoutEffect3;
        exports.useMemo = useMemo3;
        exports.useReducer = useReducer2;
        exports.useRef = useRef4;
        exports.useState = useState5;
        exports.version = ReactVersion;
      })();
    }
  }
});
var require_React = __commonJS({
  "../../node_modules/React/index.js"(exports, module) {
    {
      module.exports = require_react_development();
    }
  }
});
function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}
var r;
var B$1 = r || (r = {});
B$1.Pop = "POP";
B$1.Push = "PUSH";
B$1.Replace = "REPLACE";
function I(b2) {
  var h2 = b2.pathname;
  h2 = h2 === void 0 ? "/" : h2;
  var e2 = b2.search;
  e2 = e2 === void 0 ? "" : e2;
  b2 = b2.hash;
  b2 = b2 === void 0 ? "" : b2;
  e2 && e2 !== "?" && (h2 += e2.charAt(0) === "?" ? e2 : "?" + e2);
  b2 && b2 !== "#" && (h2 += b2.charAt(0) === "#" ? b2 : "#" + b2);
  return h2;
}
function J$1(b2) {
  var h2 = {};
  if (b2) {
    var e2 = b2.indexOf("#");
    0 <= e2 && (h2.hash = b2.substr(e2), b2 = b2.substr(0, e2));
    e2 = b2.indexOf("?");
    0 <= e2 && (h2.search = b2.substr(e2), b2 = b2.substr(0, e2));
    b2 && (h2.pathname = b2);
  }
  return h2;
}
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
var NavigationContext = /* @__PURE__ */ createContext(null);
{
  NavigationContext.displayName = "Navigation";
}
var LocationContext = /* @__PURE__ */ createContext(null);
{
  LocationContext.displayName = "Location";
}
var RouteContext = /* @__PURE__ */ createContext({
  outlet: null,
  matches: []
});
{
  RouteContext.displayName = "Route";
}
function useHref(to) {
  !useInRouterContext() ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : void 0;
  return useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match2) => match2.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to) {
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match2) => match2.pathnameBase));
  return useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? J$1(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? J$1(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J$1(to).pathname : to.pathname;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = /* @__PURE__ */ forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace: replace2 = false,
    state,
    target,
    to
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ createElement("a", _extends2({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
{
  Link.displayName = "Link";
}
var NavLink = /* @__PURE__ */ forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /* @__PURE__ */ createElement(Link, _extends2({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});
{
  NavLink.displayName = "NavLink";
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace2 = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace: replace2,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
__toESM(require_React(), 1);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
var styles$1 = "html,\nbody,\n#root {\n  background-color: var(--bg-color-default);\n\n  /* Proportions */\n  --amount-none: 0px;\n  --amount-least: 5.5px;\n  --amount-less: 11px;\n  --amount-default: 16.5px;\n  --amount-more: 22px;\n  --amount-most: 27.5px;\n  --amount-all: 33px;\n\n  --size-smallest: 10px;\n  --size-smaller: 14px;\n  --size-small: 24px;\n  --size-default: 32px;\n  --size-large: 42px;\n  --size-larger: 52px;\n  --size-largest: 56px;\n\n  /* Colors */\n  --color-primary-rgb: 76, 62, 196;\n  --color-primary: rgb(var(--color-primary-rgb));\n  --color-primary-contrast-rgb: 255, 255, 255;\n  --color-primary-contrast: rgb(var(--color-primary-contrast-rgb));\n  --color-default-rgb: var(--color-black-rgb);\n  --color-default: rgb(var(--color-default-rgb));\n  --color-default-contrast-rgb: var(--color-default-rgb);\n  --color-default-contrast: var(--color-default-rgb);\n  --color-secondary-rgb: 230, 232, 235;\n  --color-secondary: rgb(var(--color-secondary-rgb));\n  --color-secondary-contrast-rgb: 35, 37, 40;\n  --color-secondary-contrast: rgb(var(--color-secondary-contrast-rgb));\n  --color-black-rgb: 50, 52, 55;\n  --color-black: rgb(var(--color-black-rgb));\n  --color-black-contrast-rgb: var(--color-white-rgb);\n  --color-black-contrast: rgb(var(--color-black-contrast-rgb));\n  --color-white-rgb: 238, 240, 243;\n  --color-white: rgb(var(--color-white-rgb));\n  --color-white-contrast-rgb: var(--color-white-rgb);\n  --color-white-contrast: rgb(var(--color-white-contrast-rgb));\n  --color-error-rgb: 236, 79, 79;\n  --color-error: rgb(var(--color-error-rgb));\n  --color-error-contrast-rgb: var(--color-white-rgb);\n  --color-error-contrast: rgb(var(--color-error-contrast-rgb));\n  --color-info-rgb: 15, 193, 223;\n  --color-info: rgb(var(--color-info-rgb));\n  --color-info-contrast-rgb: var(--color-white-rgb);\n  --color-info-contrast: rgb(var(--color-info-contrast-rgb));\n  --color-success-rgb: 131, 210, 126;\n  --color-success: rgb(var(--color-success-rgb));\n  --color-success-contrast-rgb: var(--color-white-rgb);\n  --color-success-contrast: rgb(var(--color-success-contrast-rgb));\n  --color-warning-rgb: 255, 209, 0;\n  --color-warning: rgb(var(--color-warning-rgb));\n  --color-warning-contrast-rgb: var(--color-white-rgb);\n  --color-warning-contrast: rgb(var(--color-warning-contrast-rgb));\n\n  --bg-color-lightest-rgb: 245, 245, 245;\n  --bg-color-lightest: rgb(var(--bg-color-lightest-rgb));\n  --bg-color-lighter-rgb: 235, 235, 235;\n  --bg-color-lighter: rgb(var(--bg-color-lighter-rgb));\n  --bg-color-light-rgb: 225, 225, 225;\n  --bg-color-light: rgb(var(--bg-color-light-rgb));\n  --bg-color-default-rgb: 220, 220, 220;\n  --bg-color-default: rgb(var(--bg-color-default-rgb));\n  --bg-color-dark-rgb: 200, 200, 200;\n  --bg-color-dark: rgb(var(--bg-color-dark-rgb));\n  --bg-color-darker-rgb: 190, 190, 190;\n  --bg-color-darker: rgb(var(--bg-color-darker-rgb));\n  --bg-color-darkest-rgb: 180, 180, 180;\n  --bg-color-darkest: rgb(var(--bg-color-darkest-rgb));\n\n  --border-color-lightest-rgb: 240, 243, 247;\n  --border-color-lightest: rgb(var(--border-color-lightest-rgb));\n  --border-color-lighter-rgb: 230, 233, 237;\n  --border-color-lighter: rgb(var(--border-color-lighter-rgb));\n  --border-color-light-rgb: 220, 223, 227;\n  --border-color-light: rgb(var(--border-color-light-rgb));\n  --border-color-default-rgb: 210, 213, 217;\n  --border-color-default: rgb(var(--border-color-default-rgb));\n  --border-color-dark-rgb: 200, 203, 207;\n  --border-color-dark: rgb(var(--border-color-dark-rgb));\n  --border-color-darker-rgb: 190, 193, 197;\n  --border-color-darker: rgb(var(--border-color-darker-rgb));\n  --border-color-darkest-rgb: 180, 183, 187;\n  --border-color-darkest: rgb(var(--border-color-darkest-rgb));\n\n  --fg-color-lightest-rgb: 210, 212, 215;\n  --fg-color-lightest: rgb(var(--fg-color-lightest-rgb));\n  --fg-color-lighter-rgb: 190, 192, 195;\n  --fg-color-lighter: rgb(var(--fg-color-lighter-rgb));\n  --fg-color-light-rgb: 160, 162, 165;\n  --fg-color-light: rgb(var(--fg-color-light-rgb));\n  --fg-color-default-rgb: 130, 132, 135;\n  --fg-color-default: rgb(var(--fg-color-default-rgb));\n  --fg-color-dark-rgb: 100, 102, 105;\n  --fg-color-dark: rgb(var(--fg-color-dark-rgb));\n  --fg-color-darker-rgb: 60, 62, 65;\n  --fg-color-darker: rgb(var(--fg-color-darker-rgb));\n  --fg-color-darkest-rgb: var(--color-black-rgb);\n  --fg-color-darkest: rgb(var(--fg-color-darkest-rgb));\n\n  /* Text */\n  --text-color-lightest-rgb: var(--color-white-rgb);\n  --text-color-lightest: rgb(var(--text-color-lightest-rgb));\n  --text-color-lighter-rgb: 170, 172, 175;\n  --text-color-lighter: rgb(var(--text-color-lighter-rgb));\n  --text-color-light-rgb: 140, 142, 145;\n  --text-color-light: rgb(var(--text-color-light-rgb));\n  --text-color-default-rgb: 90, 92, 95;\n  --text-color-default: rgb(var(--text-color-default-rgb));\n  --text-color-dark-rgb: 70, 72, 75;\n  --text-color-dark: rgb(var(--text-color-dark-rgb));\n  --text-color-darker-rgb: 50, 52, 55;\n  --text-color-darker: rgb(var(--text-color-darker-rgb));\n  --text-color-darkest-rgb: var(--color-black-rgb);\n  --text-color-darkest: rgb(var(--text-color-darkest-rgb));\n\n  --text-font-button: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n  --text-font-text: 'Helvetica Neue', -apple-system, blinkmacsystemfont,\n    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', sans-serif;\n\n  /* Text sizes */\n  --text-size-smallest: 9px;\n  --text-size-smaller: 11px;\n  --text-size-small: 12px;\n  --text-size-default: 13px;\n  --text-size-large: 18px;\n  --text-size-larger: 20px;\n  --text-size-largest: 24px;\n\n  --text-weight-least: 300;\n  --text-weight-less: 400;\n  --text-weight-default: 500;\n  --text-weight-more: 600;\n  --text-weight-most: 700;\n\n  /* Shadows */\n  --shadow-depth-lowest: inset 0 -20px 60px rgba(0, 0, 0, 0.1);\n  --shadow-depth-lower: inset 0 2px 5px rgba(0, 0, 0, 0.1);\n  --shadow-depth-low: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n  --shadow-depth-surface: none;\n  --shadow-depth-high: 0 1px 3px rgba(0, 0, 0, 0.05);\n  --shadow-depth-higher: 0 4px 27px rgba(0, 0, 0, 0.16);\n  --shadow-depth-highest: 0 10px 62px rgba(0, 0, 0, 0.1);\n\n  /* Layout */\n  --z-index-depth-lowest: -300;\n  --z-index-depth-lower: -200;\n  --z-index-depth-low: -100;\n  --z-index-depth-surface: 0;\n  --z-index-depth-high: 100;\n  --z-index-depth-higher: 200;\n  --z-index-depth-highest: 300;\n\n  /* Element styles */\n  --bg-color-card-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-close-button-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-header-rgb: var(--bg-color-default-rgb);\n  --bg-color-data-grid-column-headers-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-data-grid-cell-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-data-grid-row-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-dropdown-menu-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-input-control-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-menu-button-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-more-menu-rgb: var(--bg-color-default-rgb);\n  --bg-color-navigation-bar-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-navigation-menu-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-page-rgb: var(--bg-color-lighter-rgb);\n  --bg-color-slide-panel-rgb: var(--bg-color-lightest-rgb);\n  --bg-color-workspace-rgb: var(--bg-color-lighter-rgb);\n\n  --border-color-input-control-rgb: var(--border-color-default-rgb);\n\n  --fg-color-close-button-rgb: var(--fg-color-dark-rgb);\n  --fg-color-more-menu-rgb: var(--fg-color-dark-rgb);\n\n  --text-color-data-grid-column-headers-rgb: var(--text-color-lighter-rgb);\n  --text-color-data-grid-cell-rgb: var(--text-color-light-rgb);\n  --text-color-dropdown-menu-rgb: var(--text-color-light-rgb);\n  --text-color-input-control-rgb: var(--text-color-default-rgb);\n  --text-color-input-label-rgb: var(--text-color-light-rgb);\n  --text-color-input-placeholder-rgb: var(--text-color-lighter-rgb);\n  --text-color-link-rgb: var(--color-primary-rgb);\n  --text-color-menu-button-rgb: var(--text-color-light-rgb);\n  --text-color-paragraph-rgb: var(--text-color-lighter-rgb);\n  --text-color-text-rgb: var(--text-color-default-rgb);\n  --text-color-title-rgb: var(--text-color-dark-rgb);\n  --text-color-sub-title-rgb: var(--text-color-default-rgb);\n}\n";
const AppLabLightTheme = {
  css: styles$1,
  description: "Default AppLab Light theme",
  id: "applab-light",
  name: "AppLab Light"
};
const ThemeProvider = memo(({
  className = "",
  children,
  theme,
  themes
}) => {
  var _a2;
  const [currentTheme, setTheme2] = useState((_a2 = themes == null ? void 0 : themes.find((t2) => t2.id === theme)) != null ? _a2 : AppLabLightTheme);
  useEffect(() => {
    if (theme && themes) {
      const match2 = themes.find((t2) => t2.id === theme);
      if (match2) {
        setTheme2(match2);
      } else {
        setTheme2(AppLabLightTheme);
      }
    } else {
      setTheme2(AppLabLightTheme);
    }
  }, [theme]);
  return /* @__PURE__ */ React.createElement("div", {
    className: `${currentTheme.id} ${className} theme-provider`
  }, /* @__PURE__ */ React.createElement(GlobalStyle, {
    theme: currentTheme
  }), children);
});
const GlobalStyle = createGlobalStyle`
  ${(props) => props.theme.css};

`;
function useAuthentication({
  enabled = true,
  redirect = true
}) {
  var _a2, _b, _c, _d;
  const [loginRequired, setLoginRequired] = useState(true);
  const location = useLocation$1();
  const navigate = useNavigate$1();
  const inProgress = useSelector((state) => state.user.authentication.login.inProgress);
  const loggedIn = useSelector((state) => state.user.authentication.state.loggedIn);
  const routes = useSelector((state) => state.app.routes.list);
  const indexPagePath = (_b = (_a2 = routes.find((r2) => r2.role === PageRole.Index)) == null ? void 0 : _a2.path) != null ? _b : "/";
  const loginPagePath = (_d = (_c = routes.find((r2) => r2.role === PageRole.Login)) == null ? void 0 : _c.path) != null ? _d : "login";
  const checkAuth = () => {
    routes.forEach((route) => {
      var _a3, _b2, _c2;
      const routePath = (_a3 = route == null ? void 0 : route.path) != null ? _a3 : "";
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
  var _a2 = options.splitRegexp, splitRegexp = _a2 === void 0 ? DEFAULT_SPLIT_REGEXP : _a2, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re2, value) {
  if (re2 instanceof RegExp)
    return input.replace(re2, value);
  return re2.reduce(function(input2, re3) {
    return input2.replace(re3, value);
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
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
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
    for (var i2 = 1; i2 < tokens.length; i2++) {
      input = decodeComponents(tokens, i2).join("");
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
  for (var i2 = 0; i2 < entries.length; i2++) {
    var key = entries[i2];
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
  for (var i2 = 0; i2 < keys.length; i2++) {
    var key = keys[i2];
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
      return keysSorter(Object.keys(input)).sort((a, b2) => Number(a) - Number(b2)).map((key) => input[key]);
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
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
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
    }).filter((x2) => x2.length > 0).join("&");
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
  const location = useLocation$1();
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
      const _a2 = params, { new: _new } = _a2, props = __objRest(_a2, ["new"]);
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
    onClick: (e2) => {
      e2.stopPropagation();
      e2.preventDefault();
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
  var _a2, _b;
  const dispatch = useDispatch();
  const { entity: entityFields, hideEntityEditor } = useEntityEditor();
  const [dispatched, setDispatched] = useState(false);
  const inProgress = useSelector((state) => state[`${model == null ? void 0 : model.name}.inProgress`]);
  const pluralizedCamel = pluralize(((_b = (_a2 = model == null ? void 0 : model.name) == null ? void 0 : _a2[0]) == null ? void 0 : _b.toLowerCase()) + (model == null ? void 0 : model.name.slice(1)));
  const entity = useSelector((state) => state[pluralizedCamel].entities[id != null ? id : ""]);
  useEffect(() => {
    var _a3;
    if (actions && id && !entity && !dispatched) {
      const action = (_a3 = actions[`get${model.name}`]) == null ? void 0 : _a3.call(actions, id);
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
    var _a2;
    return state[`${camelCase(pluralize((_a2 = model == null ? void 0 : model.name) != null ? _a2 : ""))}`];
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
var fileDownload = function(data, filename, mime, bom) {
  var blobData = typeof bom !== "undefined" ? [bom, data] : [data];
  var blob = new Blob(blobData, { type: mime || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var blobURL = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
    var tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    setTimeout(function() {
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(blobURL);
    }, 200);
  }
};
function downloadDataAsFile({
  data,
  fileName
}) {
  fileDownload(data, `${fileName}.csv`);
}
function formatObjectToCSVData({
  objectType
}) {
  switch (objectType) {
    case "something":
      return "";
    default:
      return "";
  }
}
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
const n = "numeric", s$1 = "short", l = "long";
const DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
const DATE_MED = {
  year: n,
  month: s$1,
  day: n
};
const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s$1,
  day: n,
  weekday: s$1
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
  timeZoneName: s$1
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
  timeZoneName: s$1
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
  month: s$1,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s$1,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s$1,
  day: n,
  weekday: s$1,
  hour: n,
  minute: n
};
const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s$1
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s$1
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
  } catch (e2) {
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
  return keys.reduce((a, k2) => {
    a[k2] = obj[k2];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x2, n2) {
  return x2 - n2 * Math.floor(x2 / n2);
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
    const f2 = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f2);
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
  let d2 = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d2 = new Date(d2);
    d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
  }
  return +d2;
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
  const parsed = new Intl.DateTimeFormat(locale2, modified).formatToParts(date).find((m2) => m2.type.toLowerCase() === "timezonename");
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
  for (const u2 in obj) {
    if (hasOwnProperty(obj, u2)) {
      const v2 = obj[u2];
      if (v2 === void 0 || v2 === null)
        continue;
      normalized[normalizer(u2)] = asNumber(v2);
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
    for (let i2 = 0; i2 < fmt.length; i2++) {
      const c2 = fmt.charAt(i2);
      if (c2 === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c2;
      } else if (c2 === current) {
        currentFull += c2;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c2;
        current = c2;
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
  num(n2, p2 = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p2);
    }
    const opts = __spreadValues({}, this.opts);
    if (p2 > 0) {
      opts.padTo = p2;
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
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2));
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
  for (let i2 = 0; i2 < formatted.length; i2++) {
    const { type, value } = formatted[i2], pos = typeToPos[type];
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
    } catch (e2) {
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
      const r2 = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r2) {
        return new FixedOffsetZone(signedOffset(r2[1], r2[2]));
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
  static set throwOnInvalid(t2) {
    throwOnInvalid = t2;
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
  const _a2 = opts, { base } = _a2, cacheKeyOpts = __objRest(_a2, ["base"]);
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
    } catch (e2) {
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
function mapMonths(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 12; i2++) {
    const dt = DateTime.utc(2016, i2, 1);
    ms.push(f2(dt));
  }
  return ms;
}
function mapWeekdays(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 7; i2++) {
    const dt = DateTime.utc(2016, 11, 13 + i2);
    ms.push(f2(dt));
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
    const _a2 = opts, { padTo, floor } = _a2, otherOpts = __objRest(_a2, ["padTo", "floor"]);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = __spreadValues({ useGrouping: false }, opts);
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i2) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i2) : i2;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i2) : roundTo(i2, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z2;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z2 = offsetZ;
        this.dt = dt;
      } else {
        z2 = "UTC";
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
      z2 = dt.zone.name;
    }
    const intlOpts = __spreadValues({}, this.opts);
    if (z2) {
      intlOpts.timeZone = z2;
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
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m2) => m2.type.toLowerCase() === field);
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
  const full = regexes.reduce((f2, r2) => f2 + r2.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m2) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m2, cursor);
    return [__spreadValues(__spreadValues({}, mergedVals), val), mergedZone || zone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m2 = regex.exec(s2);
    if (m2) {
      return extractor(m2);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i2;
    for (i2 = 0; i2 < keys.length; i2++) {
      ret[keys[i2]] = parseInteger(match2[cursor + i2]);
    }
    return [ret, null, cursor + i2];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`), isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`), sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m2 = match2[pos];
  return isUndefined(m2) ? fallback : parseInteger(m2);
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
    for (const k2 of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k2) || hasOwnProperty(this.values, k2)) {
        result[k2] = dur.get(k2) + this.get(k2);
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
    for (const k2 of Object.keys(this.values)) {
      result[k2] = asNumber(fn(this.values[k2], k2));
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
    units = units.map((u2) => Duration.normalizeUnit(u2));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k2 of orderedUnits$1) {
      if (units.indexOf(k2) >= 0) {
        lastUnit = k2;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k2] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k2])) {
          own += vals[k2];
        }
        const i2 = Math.trunc(own);
        built[k2] = i2;
        accumulated[k2] = (own * 1e3 - i2 * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k2)) {
            convert(this.matrix, vals, down, built, k2);
          }
        }
      } else if (isNumber(vals[k2])) {
        accumulated[k2] = vals[k2];
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
    for (const k2 of Object.keys(this.values)) {
      negated[k2] = this.values[k2] === 0 ? 0 : -this.values[k2];
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
    for (const u2 of orderedUnits$1) {
      if (!eq(this.values[u2], other.values[u2])) {
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
    const [s2, e2] = (text || "").split("/", 2);
    if (s2 && e2) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e3) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e2, opts);
        endIsValid = end.isValid;
      } catch (e3) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e2, opts);
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
    const sorted = dateTimes.map(friendlyDateTime).filter((d2) => this.contains(d2)).sort(), results = [];
    let { s: s2 } = this, i2 = 0;
    while (s2 < this.e) {
      const added = sorted[i2] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i2 += 1;
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
      const added = this.start.plus(dur.mapUnits((x2) => x2 * idx));
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
    const s2 = this.s > other.s ? this.s : other.s, e2 = this.e < other.e ? this.e : other.e;
    if (s2 >= e2) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e2);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e2 = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e2);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b2) => a.s - b2.s).reduce(([sofar, current], item) => {
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
    const results = [], ends = intervals.map((i2) => [
      { time: i2.s, type: "s" },
      { time: i2.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b2) => a.time - b2.time);
    for (const i2 of arr) {
      currentCount += i2.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i2.time;
      } else {
        if (start && +start !== +i2.time) {
          results.push(Interval.fromDateTimes(start, i2.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
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
    ["years", (a, b2) => b2.year - a.year],
    ["quarters", (a, b2) => b2.quarter - a.quarter],
    ["months", (a, b2) => b2.month - a.month + (b2.year - a.year) * 12],
    [
      "weeks",
      (a, b2) => {
        const days = dayDiff(a, b2);
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
  const lowerOrderUnits = units.filter((u2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0);
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
    for (let i2 = 0; i2 < str.length; i2++) {
      const code = str.charCodeAt(i2);
      if (str[i2].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i2]);
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
function intUnit(regex, post = (i2) => i2) {
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
      deser: ([s2]) => strings.findIndex((i2) => stripInsensitivities(s2) === stripInsensitivities(i2)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h2, m2]) => signedOffset(h2, m2), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token2, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s2]) => s2, literal: true }), unitate = (t2) => {
    if (token2.literal) {
      return literal(t2);
    }
    switch (t2.val) {
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
        return literal(t2);
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
  const re2 = units.map((u2) => u2.regex).reduce((f2, r2) => `${f2}(${r2.source})`, "");
  return [`^${re2}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i2 in handlers) {
      if (hasOwnProperty(handlers, i2)) {
        const h2 = handlers[i2], groups = h2.groups ? h2.groups + 1 : 1;
        if (!h2.literal && h2.token) {
          all[h2.token.val[0]] = h2.deser(matches.slice(matchIndex, matchIndex + groups));
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
  const vals = Object.keys(matches).reduce((r2, k2) => {
    const f2 = toField(k2);
    if (f2) {
      r2[f2] = matches[k2];
    }
    return r2;
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
  const tokens = parts.map((p2) => tokenForPart(p2, locale2, formatOpts));
  if (tokens.includes(void 0)) {
    return token2;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale2) {
  return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale2)));
}
function explainFromTokens(locale2, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale2), units = tokens.map((t2) => unitForToken(t2, locale2)), disqualifyingUnit = units.find((t2) => t2.invalidReason);
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
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i2) => i2 < ordinal), day = ordinal - table[month0];
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
  const d2 = new Date(ts);
  return {
    year: d2.getUTCFullYear(),
    month: d2.getUTCMonth() + 1,
    day: d2.getUTCDate(),
    hour: d2.getUTCHours(),
    minute: d2.getUTCMinutes(),
    second: d2.getUTCSeconds(),
    millisecond: d2.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = __spreadProps(__spreadValues({}, inst.c), {
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
  }).as("milliseconds"), localTS = objToLocalTS(c2);
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
  let c2 = "";
  if (longFormat && o.c.year >= 0)
    c2 += "+";
  c2 += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c2 += "-";
    c2 += padStart(o.c.month);
    c2 += "-";
    c2 += padStart(o.c.day);
  } else {
    c2 += padStart(o.c.month);
    c2 += padStart(o.c.day);
  }
  return c2;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
  let c2 = padStart(o.c.hour);
  if (extended) {
    c2 += ":";
    c2 += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c2 += ":";
    }
  } else {
    c2 += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c2 += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c2 += ".";
      c2 += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0) {
      c2 += "Z";
    } else if (o.o < 0) {
      c2 += "-";
      c2 += padStart(Math.trunc(-o.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(-o.o % 60));
    } else {
      c2 += "+";
      c2 += padStart(Math.trunc(o.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(o.o % 60));
    }
  }
  return c2;
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
    for (const u2 of orderedUnits) {
      if (isUndefined(obj[u2])) {
        obj[u2] = defaultUnitValues[u2];
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
  const round = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
    c2 = roundTo(c2, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c2, unit);
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
    let c2 = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c2, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c2 = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
        c2 = invalid ? null : c2;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c2;
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
    for (const u2 of units) {
      const v2 = normalized[u2];
      if (!isUndefined(v2)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u2] = defaultValues[u2];
      } else {
        normalized[u2] = objNow[u2];
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
      const q2 = Math.ceil(this.month / 3);
      o.month = (q2 - 1) * 3 + 1;
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
    let c2 = toISODate(this, ext);
    c2 += "T";
    c2 += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
    return c2;
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
    let c2 = includePrefix ? "T" : "";
    return c2 + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
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
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.max);
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
  var _a2, _b, _c, _d;
  return /* @__PURE__ */ React.createElement(Label, __spreadValues({
    icon,
    lineHeight,
    textColor,
    textSize
  }, props), !fieldName || !model ? value : (_d = (_c = (_b = (_a2 = model.fields[fieldName]) == null ? void 0 : _a2.items) == null ? void 0 : _b.find((i2) => i2.value === value)) == null ? void 0 : _c.label) != null ? _d : value);
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
    onClick: (e2) => {
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
    onScroll: (e2) => e2.preventDefault(),
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
    var _a2;
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
      maxWidth: (_a2 = column.maxWidth) != null ? _a2 : MAX_COLUMN_WIDTH,
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
      var _a2;
      return /* @__PURE__ */ React.createElement(DataGridCell, {
        alignContent: column.align,
        alignItems: Align.Center,
        fieldName: column.field,
        height: Size.Large,
        model,
        textColor: hoveredRow === key ? TextColors.PrimaryContrast : TextColors.DataGridCell,
        type: column.type,
        value: fetchFromObject(row, column.field),
        maxWidth: (_a2 = column.maxWidth) != null ? _a2 : MAX_COLUMN_WIDTH,
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
  }, getActivityLabel(what.name)), what.to ? /* @__PURE__ */ React.createElement(Link$1, {
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
    const probs = Si(value, validation);
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
function u() {
  return (u = Object.assign || function(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = arguments[r2];
      for (var n2 in t2)
        Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c(e2, r2) {
  if (e2 == null)
    return {};
  var t2, n2, o = {}, a = Object.keys(e2);
  for (n2 = 0; n2 < a.length; n2++)
    r2.indexOf(t2 = a[n2]) >= 0 || (o[t2] = e2[t2]);
  return o;
}
function i(e2) {
  var t2 = useRef(e2), n2 = useRef(function(e3) {
    t2.current && t2.current(e3);
  });
  return t2.current = e2, n2.current;
}
var s = function(e2, r2, t2) {
  return r2 === void 0 && (r2 = 0), t2 === void 0 && (t2 = 1), e2 > t2 ? t2 : e2 < r2 ? r2 : e2;
}, f = function(e2) {
  return "touches" in e2;
}, v = function(e2) {
  return e2 && e2.ownerDocument.defaultView || self;
}, d = function(e2, r2, t2) {
  var n2 = e2.getBoundingClientRect(), o = f(r2) ? function(e3, r3) {
    for (var t3 = 0; t3 < e3.length; t3++)
      if (e3[t3].identifier === r3)
        return e3[t3];
    return e3[0];
  }(r2.touches, t2) : r2;
  return { left: s((o.pageX - (n2.left + v(e2).pageXOffset)) / n2.width), top: s((o.pageY - (n2.top + v(e2).pageYOffset)) / n2.height) };
}, h = function(e2) {
  !f(e2) && e2.preventDefault();
}, m = React.memo(function(o) {
  var a = o.onMove, l2 = o.onKey, s2 = c(o, ["onMove", "onKey"]), m2 = useRef(null), g2 = i(a), p2 = i(l2), b2 = useRef(null), _ = useRef(false), x2 = useMemo(function() {
    var e2 = function(e3) {
      h(e3), (f(e3) ? e3.touches.length > 0 : e3.buttons > 0) && m2.current ? g2(d(m2.current, e3, b2.current)) : t2(false);
    }, r2 = function() {
      return t2(false);
    };
    function t2(t3) {
      var n2 = _.current, o2 = v(m2.current), a2 = t3 ? o2.addEventListener : o2.removeEventListener;
      a2(n2 ? "touchmove" : "mousemove", e2), a2(n2 ? "touchend" : "mouseup", r2);
    }
    return [function(e3) {
      var r3 = e3.nativeEvent, n2 = m2.current;
      if (n2 && (h(r3), !function(e4, r4) {
        return r4 && !f(e4);
      }(r3, _.current) && n2)) {
        if (f(r3)) {
          _.current = true;
          var o2 = r3.changedTouches || [];
          o2.length && (b2.current = o2[0].identifier);
        }
        n2.focus(), g2(d(n2, r3, b2.current)), t2(true);
      }
    }, function(e3) {
      var r3 = e3.which || e3.keyCode;
      r3 < 37 || r3 > 40 || (e3.preventDefault(), p2({ left: r3 === 39 ? 0.05 : r3 === 37 ? -0.05 : 0, top: r3 === 40 ? 0.05 : r3 === 38 ? -0.05 : 0 }));
    }, t2];
  }, [p2, g2]), C2 = x2[0], E = x2[1], H2 = x2[2];
  return useEffect(function() {
    return H2;
  }, [H2]), React.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m2, onKeyDown: E, tabIndex: 0, role: "slider" }));
}), g = function(e2) {
  return e2.filter(Boolean).join(" ");
}, p = function(r2) {
  var t2 = r2.color, n2 = r2.left, o = r2.top, a = o === void 0 ? 0.5 : o, l2 = g(["react-colorful__pointer", r2.className]);
  return React.createElement("div", { className: l2, style: { top: 100 * a + "%", left: 100 * n2 + "%" } }, React.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t2 } }));
}, b = function(e2, r2, t2) {
  return r2 === void 0 && (r2 = 0), t2 === void 0 && (t2 = Math.pow(10, r2)), Math.round(t2 * e2) / t2;
}, x = function(e2) {
  return e2[0] === "#" && (e2 = e2.substr(1)), e2.length < 6 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 1 } : { r: parseInt(e2.substr(0, 2), 16), g: parseInt(e2.substr(2, 2), 16), b: parseInt(e2.substr(4, 2), 16), a: 1 };
}, N = function(e2) {
  var r2 = e2.s, t2 = e2.v, n2 = e2.a, o = (200 - r2) * t2 / 100;
  return { h: b(e2.h), s: b(o > 0 && o < 200 ? r2 * t2 / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: b(o / 2), a: b(n2, 2) };
}, w = function(e2) {
  var r2 = N(e2);
  return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
}, q = function(e2) {
  var r2 = e2.h, t2 = e2.s, n2 = e2.v, o = e2.a;
  r2 = r2 / 360 * 6, t2 /= 100, n2 /= 100;
  var a = Math.floor(r2), l2 = n2 * (1 - t2), u2 = n2 * (1 - (r2 - a) * t2), c2 = n2 * (1 - (1 - r2 + a) * t2), i2 = a % 6;
  return { r: b(255 * [n2, u2, l2, l2, c2, n2][i2]), g: b(255 * [c2, n2, n2, u2, l2, l2][i2]), b: b(255 * [l2, l2, c2, n2, n2, u2][i2]), a: b(o, 2) };
}, z = function(e2) {
  var r2 = e2.toString(16);
  return r2.length < 2 ? "0" + r2 : r2;
}, B = function(e2) {
  var r2 = e2.r, t2 = e2.g, n2 = e2.b, o = e2.a, a = Math.max(r2, t2, n2), l2 = a - Math.min(r2, t2, n2), u2 = l2 ? a === r2 ? (t2 - n2) / l2 : a === t2 ? 2 + (n2 - r2) / l2 : 4 + (r2 - t2) / l2 : 0;
  return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a ? l2 / a * 100 : 0), v: b(a / 255 * 100), a: o };
}, K = React.memo(function(r2) {
  var t2 = r2.hue, n2 = r2.onChange, o = g(["react-colorful__hue", r2.className]);
  return React.createElement("div", { className: o }, React.createElement(m, { onMove: function(e2) {
    n2({ h: 360 * e2.left });
  }, onKey: function(e2) {
    n2({ h: s(t2 + 360 * e2.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuetext": b(t2) }, React.createElement(p, { className: "react-colorful__hue-pointer", left: t2 / 360, color: w({ h: t2, s: 100, v: 100, a: 1 }) })));
}), L = React.memo(function(r2) {
  var t2 = r2.hsva, n2 = r2.onChange, o = { backgroundColor: w({ h: t2.h, s: 100, v: 100, a: 1 }) };
  return React.createElement("div", { className: "react-colorful__saturation", style: o }, React.createElement(m, { onMove: function(e2) {
    n2({ s: 100 * e2.left, v: 100 - 100 * e2.top });
  }, onKey: function(e2) {
    n2({ s: s(t2.s + 100 * e2.left, 0, 100), v: s(t2.v - 100 * e2.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t2.s) + "%, Brightness " + b(t2.v) + "%" }, React.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t2.v / 100, left: t2.s / 100, color: w(t2) })));
}), A = function(e2, r2) {
  if (e2 === r2)
    return true;
  for (var t2 in e2)
    if (e2[t2] !== r2[t2])
      return false;
  return true;
};
function T(e2, t2, l2) {
  var u2 = i(l2), c2 = useState(function() {
    return e2.toHsva(t2);
  }), s2 = c2[0], f2 = c2[1], v2 = useRef({ color: t2, hsva: s2 });
  useEffect(function() {
    if (!e2.equal(t2, v2.current.color)) {
      var r2 = e2.toHsva(t2);
      v2.current = { hsva: r2, color: t2 }, f2(r2);
    }
  }, [t2, e2]), useEffect(function() {
    var r2;
    A(s2, v2.current.hsva) || e2.equal(r2 = e2.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
  }, [s2, e2, u2]);
  var d2 = useCallback(function(e3) {
    f2(function(r2) {
      return Object.assign({}, r2, e3);
    });
  }, []);
  return [s2, d2];
}
var P = typeof window != "undefined" ? useLayoutEffect : useEffect, X = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : void 0;
}, R = /* @__PURE__ */ new Map(), V = function(e2) {
  P(function() {
    var r2 = e2.current ? e2.current.ownerDocument : document;
    if (r2 !== void 0 && !R.has(r2)) {
      var t2 = r2.createElement("style");
      t2.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, R.set(r2, t2);
      var n2 = X();
      n2 && t2.setAttribute("nonce", n2), r2.head.appendChild(t2);
    }
  }, []);
}, $ = function(t2) {
  var n2 = t2.className, o = t2.colorModel, a = t2.color, l2 = a === void 0 ? o.defaultColor : a, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = useRef(null);
  V(f2);
  var v2 = T(o, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
  return React.createElement("div", u({}, s2, { ref: f2, className: m2 }), React.createElement(L, { hsva: d2, onChange: h2 }), React.createElement(K, { hue: d2.h, onChange: h2, className: "react-colorful__last-control" }));
}, G = { defaultColor: "000", toHsva: function(e2) {
  return B(x(e2));
}, fromHsva: function(e2) {
  return t2 = (r2 = q(e2)).g, n2 = r2.b, "#" + z(r2.r) + z(t2) + z(n2);
  var r2, t2, n2;
}, equal: function(e2, r2) {
  return e2.toLowerCase() === r2.toLowerCase() || A(x(e2), x(r2));
} }, J = function(r2) {
  return React.createElement($, u({}, r2, { colorModel: G }));
};
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
  var _a2;
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
  })), /* @__PURE__ */ React.createElement(ColorMixer, null, /* @__PURE__ */ React.createElement(J, {
    color: rgbHex((_a2 = value == null ? void 0 : value.toString()) != null ? _a2 : ""),
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
  var _a2, _b, _c;
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
      url: (_c = (_a2 = images == null ? void 0 : images[0]) == null ? void 0 : _a2.url) != null ? _c : (_b = images == null ? void 0 : images[0]) == null ? void 0 : _b.path
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
  }), rows.map((x2, row) => {
    return /* @__PURE__ */ React.createElement(Container$h, {
      className: "media-grid-row",
      key: row,
      marginBottom: Amount.Default,
      orientation: Orientation.Horizontal
    }, items.slice(columns * row, columns * row + columns).map((i2, key) => /* @__PURE__ */ React.createElement(MediaGridItem, __spreadValues({
      marginRight: Amount.Default,
      key,
      width: `calc(100% / ${columns != null ? columns : 1} - ${Amount.Default})`
    }, i2))));
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
  var _a2, _b;
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
    url: (_b = media[0].url) != null ? _b : (_a2 = media == null ? void 0 : media[0]) == null ? void 0 : _a2.path
  }), media && media.slice(1).length > 0 && /* @__PURE__ */ React.createElement(Container$h, {
    alignContent: Align.SpaceBetween,
    orientation: orientation === Orientation.Horizontal ? Orientation.Vertical : Orientation.Horizontal,
    lineWrap: true
  }, media.slice(1).map((item, k2) => {
    return /* @__PURE__ */ React.createElement(Image, {
      alt: item.description,
      borderRadius: Amount.Least,
      height: orientation === Orientation.Horizontal ? "47%" : "auto",
      key: k2,
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
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    return /* @__PURE__ */ React.createElement(NavigationLink, __spreadValues({
      active: (_a2 = menuItemProps == null ? void 0 : menuItemProps.active) != null ? _a2 : item.active,
      backgroundColor: (_b = menuItemProps == null ? void 0 : menuItemProps.backgroundColor) != null ? _b : BackgroundColors.Transparent,
      borderRadius: (_d = (_c = menuItemProps.borderRadius) != null ? _c : item.borderRadius) != null ? _d : Amount.Default,
      className: "navigation-menu-item",
      focus: (_e2 = menuItemProps == null ? void 0 : menuItemProps.focus) != null ? _e2 : item.focus,
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
  const navigate = useNavigate$1();
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
  const navigate = useNavigate$1();
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
  }, /* @__PURE__ */ React.createElement(Link$2, {
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
    var _a2;
    if ((_a2 = child.props) == null ? void 0 : _a2.selected)
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
  }, React.Children.map(children, (c2, key) => {
    if (c2.props.visible === false)
      return null;
    return /* @__PURE__ */ React.createElement(TabButton, {
      className: c2.props.className,
      current: currentTabIndex === key,
      onClick: () => {
        setTabIndex(key);
        if (c2.props.onClick && typeof c2.props.onClick === "function")
          c2.props.onClick();
      },
      key
    }, /* @__PURE__ */ React.createElement(Label, {
      textColor: currentTabIndex === key ? TextColors.Primary : TextColors.Default
    }, c2.props.label));
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
  }, Children.map(children, (c2, key) => {
    if (key !== currentTabIndex)
      return null;
    return React.cloneElement(c2);
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
  var _a2;
  return /* @__PURE__ */ React.createElement(Container$1, __spreadValues({}, props), (_a2 = label == null ? void 0 : label.toString()) != null ? _a2 : children);
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
    menu: list.map((i2) => {
      return {
        label: i2.name,
        value: i2.id
      };
    }),
    onChange: ({ value }) => {
      const newTheme = list.find((t2) => t2.id === value);
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
export { ActivityFeed, AddPaymentMethodForm, Align, AlignLeft, AlignRight, Amount, AnimationStyles, AppearanceStyles, AutoComplete, Backdrop, BackgroundColorShade, BackgroundColors, BackgroundSize, BackgroundStyles, Badge, BooleanLabel, BorderColorShade, BorderColors, BorderRadiusStyles, BorderStyle, BorderStyles, BoxShadowStyles, Button$1 as Button, ButtonStyles, ButtonType, Card, Checkbox, CloseButton, CodeVerificationForm, ColorInput, ColorLabel, Colors, ConnectionStatus, Container$h as Container, ContrastColors, ConversationList, ConversationNavigation, CountryInput, CountryLabel, CurrencyAmountInput, CurrencyAmountLabel, CurrencyInput, Cursor, DataGrid, DataGridCell, DataGridDisplayType, DateInput, DateLabel, Depth, DepthShadow, DimensionStyles, DropdownInput, DropdownPanel, DynamicInput, EmailAddressInput, EmailAddressLabel, EntityEditor, EntityPanel, EntityPreview, ErrorLabel, ErrorNotification, FillBehavior, FocusedStyles, ForegroundColorShade, ForegroundColors, ForgotPasswordForm, Form, FormActions, FormFields, Formatter$1 as Formatter, Heading, HelperButton, HoverPanel, Icon, Image, InputContainerStyles, InputHelper, InputLabel, InputRow, Label, LanguageInput, LanguageLabel, LayoutStyles, LineBreak, LinearGauge, Link$1 as Link, ListItem, LoadingOverlay, LoginForm, LogoutButton, MarkdownEditor, MediaGrid, MediaPreview, Menu, MenuButton, Message$1 as Message, MessageComposer, MessagePreview, Modal, ModalHeader, MoreMenu, NavigationBar, NavigationLink, NavigationMenu, NotificationLabel, Notifications, NumberInput, NumberLabel, ObjectLink, Orb, OrderedList, Orientation, Overflow, Page, PageLink, Paragraph, PasswordInput, PaymentMethodModal, PersonLabel, PhoneNumberInput, PhoneNumberLabel, PieChart, Position, ProgressLabel, ProgressMeter, ProgressSpinner, ProgressivePaymentStatus, RadialChart, RadialGauge, SearchInput, SignupForm, Size, SlidePanel, Small, StreetAddressInput, SubTitle, SubscriptionModal, Svg, Tab, Tabs, TextColors, TextInput, TextInputStyles, TextOverflow, TextSize, TextStyles, TextWeight, ThemeSelector, Title, TitleCard, TitleCards, ToggleInput, UniversalSearch, UnorderedList, UserLabel, UserMenu, VerificationCodeInput, Video, WebApplication, WhiteSpace, Workspace, convertAmountToSize, convertSizeToAmount, convertSizeToTextSize, getCSSBorderValue, getCSSBoxShadowValue, getCSSMeasurementValue, getFormFieldsFromModel, getInputElementByFieldType, getLabelByFieldType, getLargerAmount, getLargerSize, getSmallerAmount, getSmallerSize, useAuthentication, useEntityEditor };
//# sourceMappingURL=index.es.js.map
