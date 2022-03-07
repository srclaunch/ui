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
import require$$0, { memo } from "react";
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
const Alert = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    id: "applab-icon-basic-alert",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 485.811 485.811",
    enableBackground: "new 0 0 485.811 485.811",
    xmlSpace: "preserve"
  }, props), {
    children: /* @__PURE__ */ jsx("g", {
      children: /* @__PURE__ */ jsx("path", {
        d: "M476.099,353.968l-170.2-294.8c-27.8-48.7-98.1-48.7-125.8,0l-170.3,294.8c-27.8,48.7,6.8,109.2,62.9,109.2h339.9\nC468.699,463.168,503.899,402.068,476.099,353.968z M242.899,397.768c-14.8,0-27.1-12.3-27.1-27.1s12.3-27.1,27.1-27.1\nc14.8,0,27.1,12.3,26.5,27.8C270.099,385.468,257.099,397.768,242.899,397.768z M267.599,222.568c-1.2,21-2.5,41.9-3.7,62.9\nc-0.6,6.8-0.6,13-0.6,19.7c-0.6,11.1-9.3,19.7-20.4,19.7s-19.7-8-20.4-19.1c-1.8-32.7-3.7-64.8-5.5-97.5\nc-0.6-8.6-1.2-17.3-1.9-25.9c0-14.2,8-25.9,21-29.6c13-3.1,25.9,3.1,31.5,15.4c1.9,4.3,2.5,8.6,2.5,13.6\nC269.499,195.468,268.199,209.068,267.599,222.568z"
      })
    })
  }));
});
const CaretDownArrow = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    viewBox: "0 0 292.362 292.362",
    width: "1em",
    height: "1em"
  }, props), {
    children: /* @__PURE__ */ jsx("path", {
      d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
    })
  }));
});
const Checkmark = memo((props) => {
  return /* @__PURE__ */ jsx("svg", {
    id: "applab-icon-basic-checkmark",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "442.533px",
    height: "442.533px",
    viewBox: "0 0 442.533 442.533",
    enableBackground: "new 0 0 442.533 442.533",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ jsx("g", {
      children: /* @__PURE__ */ jsx("path", {
        d: "M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248 l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852 C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828 c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33 c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"
      })
    })
  });
});
const Checkmark2 = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    viewBox: "0 0 442.533 442.533",
    width: "1em",
    height: "1em"
  }, props), {
    children: /* @__PURE__ */ jsx("path", {
      d: "M434.539 98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993-7.618 0-14.093 2.665-19.417 7.993L169.59 247.248l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992-7.616 0-14.087 2.662-19.417 7.992L7.994 201.852C2.664 207.181 0 213.654 0 221.269c0 7.609 2.664 14.088 7.994 19.416l103.351 103.349 38.831 38.828c5.327 5.332 11.8 7.994 19.414 7.994 7.611 0 14.084-2.669 19.414-7.994l38.83-38.828L434.539 137.33c5.325-5.33 7.994-11.802 7.994-19.417.004-7.611-2.669-14.084-7.994-19.414z"
    })
  }));
});
const Close = memo((props) => {
  return /* @__PURE__ */ jsx("svg", {
    id: "applab-icon-basic-close",
    enableBackground: "new 0 0 492 492",
    version: "1.1",
    viewBox: "0 0 492 492",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
    })
  });
});
const Exit = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M361 396c-11.046 0-20 8.954-20 20v56H55V40h286v56c0 11.046 8.954 20 20 20s20-8.954 20-20V20c0-11.046-8.954-20-20-20H35C23.954 0 15 8.954 15 20v472c0 11.046 8.954 20 20 20h326c11.046 0 20-8.954 20-20v-76c0-11.046-8.954-20-20-20z"
    }), /* @__PURE__ */ jsx("path", {
      d: "M491.141 241.858l-53.74-53.74c-7.81-7.811-20.473-7.81-28.284 0s-7.811 20.474 0 28.285L428.715 236l-165.678-.001c-11.045 0-20 8.954-20 20s8.954 20 20 20l165.68.001-19.599 19.599c-7.811 7.809-7.811 20.473 0 28.284 7.81 7.811 20.474 7.809 28.284-.001l53.74-53.74a.022.022 0 01.004-.005c4.024-4.027 5.709-8.682 5.854-14.137 0-5.392-2.291-10.576-5.859-14.142z"
    })]
  }));
});
const FileUpload = memo((props) => {
  return /* @__PURE__ */ jsx("svg", {
    viewBox: "-64 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", {
      d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
    })
  });
});
const GearCog = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em"
  }, props), {
    children: /* @__PURE__ */ jsx("path", {
      d: "M489.514 296.695l-21.3-17.534c-14.59-12.011-14.564-34.335.001-46.322l21.299-17.534a39.878 39.878 0 009.218-50.882l-42.058-72.846A39.88 39.88 0 00408 74.119l-25.835 9.679c-17.696 6.628-37.016-4.551-40.117-23.161l-4.535-27.214A39.874 39.874 0 00298.058 0h-84.115a39.874 39.874 0 00-39.456 33.424l-4.536 27.213c-3.107 18.643-22.453 29.778-40.116 23.162L104 74.119a39.88 39.88 0 00-48.674 17.458l-42.057 72.845a39.875 39.875 0 009.218 50.882l21.299 17.534c14.592 12.012 14.563 34.334 0 46.322l-21.3 17.534a39.876 39.876 0 00-9.218 50.882l42.058 72.846c9.818 17.003 30.286 24.344 48.674 17.458l25.834-9.679c17.699-6.631 37.015 4.556 40.116 23.161l4.536 27.212A39.875 39.875 0 00213.942 512h84.115a39.873 39.873 0 0039.455-33.424l4.535-27.212c3.106-18.638 22.451-29.781 40.117-23.161L408 437.881a39.876 39.876 0 0048.674-17.458l42.059-72.847a39.878 39.878 0 00-9.219-50.881zm-67.481 103.728l-25.835-9.679c-41.299-15.471-86.37 10.63-93.605 54.043L298.058 472h-84.115l-4.536-27.213c-7.249-43.497-52.386-69.484-93.605-54.043l-25.835 9.679-42.057-72.846 21.299-17.534c34.049-28.03 33.978-80.114 0-108.086L47.91 184.423l42.058-72.846 25.834 9.679c41.3 15.47 86.37-10.63 93.605-54.043L213.942 40h84.115l4.535 27.213c7.25 43.502 52.389 69.481 93.605 54.043l25.835-9.679 42.067 72.836-.011.009-21.298 17.534c-34.048 28.028-33.98 80.113-.001 108.086l21.3 17.534zM256 157.333c-54.405 0-98.667 44.262-98.667 98.667s44.262 98.667 98.667 98.667 98.667-44.262 98.667-98.667-44.262-98.667-98.667-98.667zm0 157.334c-32.349 0-58.667-26.318-58.667-58.667s26.318-58.667 58.667-58.667 58.667 26.318 58.667 58.667-26.318 58.667-58.667 58.667z"
    })
  }));
});
var BasicIcons = /* @__PURE__ */ ((BasicIcons2) => {
  BasicIcons2["Airplane"] = "basic/Airplane.svg";
  BasicIcons2["Alert"] = "basic/Alert.svg";
  BasicIcons2["AlertQuestion"] = "basic/AlertQuestion.svg";
  BasicIcons2["AnimalFootprint"] = "basic/AnimalFootprint.svg";
  BasicIcons2["AppStore"] = "basic/AppStore.svg";
  BasicIcons2["AppSubscription"] = "basic/AppSubscription.svg";
  BasicIcons2["Bill"] = "basic/Bill.svg";
  BasicIcons2["BillEnvelope"] = "basic/BillEnvelope.svg";
  BasicIcons2["Books"] = "basic/Books.svg";
  BasicIcons2["Bowling"] = "basic/Bowling.svg";
  BasicIcons2["Briefcase"] = "basic/Briefcase.svg";
  BasicIcons2["Calendar"] = "basic/Calendar.svg";
  BasicIcons2["Car"] = "basic/Car.svg";
  BasicIcons2["CardsView"] = "basic/CardsView.svg";
  BasicIcons2["CaretDownArrow"] = "basic/CaretDownArrow.svg";
  BasicIcons2["Checkmark"] = "basic/Checkmark.svg";
  BasicIcons2["Checkmark2"] = "basic/Checkmark2.svg";
  BasicIcons2["ChevronRight"] = "basic/ChevronRight.svg";
  BasicIcons2["ChevronRight2"] = "basic/ChevronRight2.svg";
  BasicIcons2["CircusTent"] = "basic/CircusTent.svg";
  BasicIcons2["Close"] = "basic/Close.svg";
  BasicIcons2["CreditCard"] = "basic/CreditCard.svg";
  BasicIcons2["CreditCardCheck"] = "basic/CreditCardCheck.svg";
  BasicIcons2["CreditCards"] = "basic/CreditCards.svg";
  BasicIcons2["CupOfTea"] = "basic/CupOfTea.svg";
  BasicIcons2["Dashboard"] = "basic/Dashboard.svg";
  BasicIcons2["DollarInHand"] = "basic/DollarInHand.svg";
  BasicIcons2["DollarRecurring"] = "basic/DollarRecurring.svg";
  BasicIcons2["DollarRecurring2"] = "basic/DollarRecurring2.svg";
  BasicIcons2["DollarRecurring3"] = "basic/DollarRecurring3.svg";
  BasicIcons2["DollarRecurring4"] = "basic/DollarRecurring4.svg";
  BasicIcons2["DollarTransfer"] = "basic/DollarTransfer.svg";
  BasicIcons2["DramaArts"] = "basic/DramaArts.svg";
  BasicIcons2["EatingUtensils"] = "basic/EatingUtensils.svg";
  BasicIcons2["EventTicket"] = "basic/EventTicket.svg";
  BasicIcons2["Exit"] = "basic/Exit.svg";
  BasicIcons2["FileUpload"] = "basic/FileUpload.svg";
  BasicIcons2["Flame"] = "basic/Flame.svg";
  BasicIcons2["FuelPump"] = "basic/FuelPump.svg";
  BasicIcons2["GearCog"] = "basic/GearCog.svg";
  BasicIcons2["Gift"] = "basic/Gift.svg";
  BasicIcons2["Golf"] = "basic/Golf.svg";
  BasicIcons2["GraduationCap"] = "basic/GraduationCap.svg";
  BasicIcons2["HamburgerMenu"] = "basic/HamburgerMenu.svg";
  BasicIcons2["HandHoldingHeart"] = "basic/HandHoldingHeart.svg";
  BasicIcons2["HandHoldingHeart2"] = "basic/HandHoldingHeart2.svg";
  BasicIcons2["HandshakeHeart"] = "basic/HandshakeHeart.svg";
  BasicIcons2["HealthCross"] = "basic/HealthCross.svg";
  BasicIcons2["HeartHealth"] = "basic/HeartHealth.svg";
  BasicIcons2["HeartHealth2"] = "basic/HeartHealth2.svg";
  BasicIcons2["HelpBubble"] = "basic/HelpBubble.svg";
  BasicIcons2["Home"] = "basic/Home.svg";
  BasicIcons2["Institution"] = "basic/Institution.svg";
  BasicIcons2["Investment"] = "basic/Investment.svg";
  BasicIcons2["Island"] = "basic/Island.svg";
  BasicIcons2["LightbulbElectricity"] = "basic/LightbulbElectricity.svg";
  BasicIcons2["MoneyBag"] = "basic/MoneyBag.svg";
  BasicIcons2["MoneyBag2"] = "basic/MoneyBag2.svg";
  BasicIcons2["MoneyBallAndChain"] = "basic/MoneyBallAndChain.svg";
  BasicIcons2["MoreButton"] = "basic/MoreButton.svg";
  BasicIcons2["New"] = "basic/New.svg";
  BasicIcons2["OnlineShopping"] = "basic/OnlineShopping.svg";
  BasicIcons2["PaidBill"] = "basic/PaidBill.svg";
  BasicIcons2["PeopleLiftWorld"] = "basic/PeopleLiftWorld.svg";
  BasicIcons2["PersonalCare"] = "basic/PersonalCare.svg";
  BasicIcons2["PieChart"] = "basic/PieChart.svg";
  BasicIcons2["PieChart2"] = "basic/PieChart2.svg";
  BasicIcons2["PiggyBank"] = "basic/PiggyBank.svg";
  BasicIcons2["Pizza"] = "basic/Pizza.svg";
  BasicIcons2["PlayStore"] = "basic/PlayStore.svg";
  BasicIcons2["RightArrow"] = "basic/RightArrow.svg";
  BasicIcons2["Safe"] = "basic/Safe.svg";
  BasicIcons2["Search"] = "basic/Search.svg";
  BasicIcons2["SearchMagnifyingGlass"] = "basic/SearchMagnifyingGlass.svg";
  BasicIcons2["ServiceVan"] = "basic/ServiceVan.svg";
  BasicIcons2["Shirt"] = "basic/Shirt.svg";
  BasicIcons2["ShoppingBags"] = "basic/ShoppingBags.svg";
  BasicIcons2["ShoppingBasket"] = "basic/ShoppingBasket.svg";
  BasicIcons2["SmartPhone"] = "basic/SmartPhone.svg";
  BasicIcons2["SortNumberAsc"] = "basic/SortNumberAsc.svg";
  BasicIcons2["SortNumberDesc"] = "basic/SortNumberDesc.svg";
  BasicIcons2["SortStringAsc"] = "basic/SortStringAsc.svg";
  BasicIcons2["SortStringDesc"] = "basic/SortStringDesc.svg";
  BasicIcons2["SortUpDown"] = "basic/SortUpDown.svg";
  BasicIcons2["SpaFacial"] = "basic/SpaFacial.svg";
  BasicIcons2["SpaFingernailPolish"] = "basic/SpaFingernailPolish.svg";
  BasicIcons2["StoreFront"] = "basic/StoreFront.svg";
  BasicIcons2["Swimming"] = "basic/Swimming.svg";
  BasicIcons2["Target"] = "basic/Target.svg";
  BasicIcons2["TrashCan"] = "basic/TrashCan.svg";
  BasicIcons2["UmbrellaCheck"] = "basic/UmbrellaCheck.svg";
  BasicIcons2["Upload"] = "basic/Upload.svg";
  BasicIcons2["WaterSpigot"] = "basic/WaterSpigot.svg";
  BasicIcons2["WeatherStorm"] = "basic/WeatherStorm.svg";
  BasicIcons2["WineGlasses"] = "basic/WineGlasses.svg";
  BasicIcons2["WorldWideWeb"] = "basic/WorldWideWeb.svg";
  return BasicIcons2;
})(BasicIcons || {});
const Search = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    viewBox: "0 0 30.239 30.239",
    width: "1em",
    height: "1em"
  }, props), {
    children: /* @__PURE__ */ jsx("path", {
      d: "M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 003.535 0 2.496 2.496 0 000-3.535l-6.718-6.72a2.5 2.5 0 00-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z"
    })
  }));
});
const TrashCan = memo((props) => {
  return /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
    id: "applab-icon-basic-trash-can",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx("path", {
      d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
    })
  }));
});
const Upload$1 = memo((props) => {
  return /* @__PURE__ */ jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 488.4 488.4",
    enableBackground: "new 0 0 488.4 488.4",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ jsxs("g", {
      children: [/* @__PURE__ */ jsx("path", {
        d: "M483.6,295.2l-69.5-107.4c-5.4-8.3-14.5-13.3-24.4-13.3H359c-4.5,0-7.2,5-4.7,8.7l75,116c1,1.5-0.1,3.5-1.9,3.5h-32.9 h-26.8H342c-3.1,0-5.5,2.5-5.7,5.5c-2.9,48.4-43,86.8-92.2,86.8s-89.3-38.4-92.2-86.8c-0.2-3.1-2.6-5.5-5.7-5.5h-25.7h-23H60.9 c-1.8,0-2.8-2-1.9-3.5l75-116c2.4-3.8-0.3-8.7-4.7-8.7H98.6c-9.9,0-19,5-24.4,13.3L4.8,295.2C1.7,300,0,305.7,0,311.5v149.6 c0,14.6,11.9,26.5,26.5,26.5h217.7h217.7c14.6,0,26.5-11.9,26.5-26.5V311.5C488.4,305.7,486.8,300.1,483.6,295.2z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M252.2,4.7c-4.1-5.2-12-5.2-16.1,0l-65.9,83.8c-5.3,6.7-0.5,16.6,8,16.6h26v158.3c0,22.1,17.9,40,40,40l0,0 c22.1,0,40-17.9,40-40V105h26c8.5,0,13.3-9.9,8-16.6L252.2,4.7z"
      })]
    })
  });
});
const Add = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4a1 1 0 011 1v14a1 1 0 11-2 0V5a1 1 0 011-1z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 13,
        y1: 12,
        x2: 11,
        y2: 12,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 11,
        x2: 12,
        y2: 13,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const AddCircle = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: 24,
    height: 24,
    fill: "none",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: 12,
      cy: 12,
      r: 10,
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M13 8a1 1 0 10-2 0v3H8a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V8z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 2,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          className: "prefix__stopColor-1",
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          className: "prefix__stopColor-2",
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 7,
        x2: 12,
        y2: 17,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          className: "prefix__stopColor-3",
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          className: "prefix__stopColor-4",
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  });
});
const Building = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M14 8h3a3 3 0 013 3v11h-6V8z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M4 7.342a3 3 0 012.272-2.91l6-1.5A3 3 0 0116 5.842V22H4V7.342z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 13a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
      fill: "url(#prefix__paint3_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
      fill: "url(#prefix__paint4_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 21a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z",
      fill: "url(#prefix__paint5_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 17,
        y1: 8,
        x2: 17,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 10,
        y1: 2,
        x2: 10,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 10,
        y1: 16,
        x2: 10,
        y2: 18,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint3_linear",
        x1: 10,
        y1: 12,
        x2: 10,
        y2: 14,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint4_linear",
        x1: 10,
        y1: 8,
        x2: 10,
        y2: 10,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint5_linear",
        x1: 12,
        y1: 20,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const ChevronDoubleForward = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.543 19.207a1 1 0 010-1.414L17.336 12l-5.793-5.793a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.293 19.207a1 1 0 010-1.414L11.086 12 5.293 6.207a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 11.25,
        y1: 12,
        x2: 19.336,
        y2: 12,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 5,
        y1: 12,
        x2: 13.086,
        y2: 12,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const Dashboard = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M12 3C6.477 3 2 7.477 2 13c0 2.344.807 4.5 2.158 6.205.18.227.457.351.747.351h14.19c.29 0 .568-.124.747-.35A9.957 9.957 0 0022 13c0-5.523-4.477-10-10-10z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M17.207 9.207a1 1 0 00-1.414-1.414l-3.275 3.275a2 2 0 101.414 1.414l3.275-3.275z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 3,
        x2: 12,
        y2: 19.556,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 13.75,
        y1: 7.5,
        x2: 13.75,
        y2: 15,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Document = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M3 5a3 3 0 013-3h9.757a3 3 0 012.122.879L20.12 5.12A3 3 0 0121 7.243V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 11a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 15a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M17.707 2.707l2.586 2.586C20.746 5.746 21 6.36 21 7h-3a2 2 0 01-2-2V2c.64 0 1.254.254 1.707.707z",
      fill: "url(#prefix__paint3_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 2,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 10,
        x2: 12,
        y2: 12,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 10,
        y1: 14,
        x2: 10,
        y2: 16,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint3_linear",
        x1: 18.5,
        y1: 2,
        x2: 18.5,
        y2: 7,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Gift = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M3 12.874V19a3 3 0 003 3h12a3 3 0 003-3v-6.126A4.01 4.01 0 0120 13H4a4.01 4.01 0 01-1-.126z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M2 8a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.5l-1.189-1.486A2.702 2.702 0 008.701 1H8.5a2.5 2.5 0 000 5H11v16h2V6h2.5a2.5 2.5 0 000-5h-.202c-.82 0-1.596.373-2.11 1.014L12 3.5zM9.839 4l-.59-.737A.702.702 0 008.702 3H8.5a.5.5 0 000 1h1.339zm4.322 0l.59-.737A.701.701 0 0115.298 3h.202a.5.5 0 010 1h-1.339z",
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 12.874,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 6,
        x2: 12,
        y2: 11,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 12,
        y1: 1,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Group = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("circle", {
      cx: 14,
      cy: 7,
      r: 4,
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M12 13a6 6 0 00-6 6 2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5h-5z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M7 13a5 5 0 00-5 5v1a2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5H7z",
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsx("circle", {
      cx: 10,
      cy: 7,
      r: 4,
      fill: "url(#prefix__paint3_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 14,
        y1: 3,
        x2: 14,
        y2: 11,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 14,
        y1: 13,
        x2: 14,
        y2: 21,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 10,
        y1: 13,
        x2: 10,
        y2: 21,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint3_linear",
        x1: 10,
        y1: 3,
        x2: 10,
        y2: 11,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const Growth = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 2a1 1 0 011 1v16a1 1 0 001 1h16a1 1 0 110 2H5a3 3 0 01-3-3V3a1 1 0 011-1z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M17 6.5a1 1 0 100 2h1.586L14.5 12.586 11.914 10a2 2 0 00-2.828 0l-2.793 2.793a1 1 0 101.414 1.414l2.793-2.793L13.086 14a2 2 0 002.828 0L20 9.914V11.5a1 1 0 102 0v-4a1 1 0 00-1-1h-4z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 2,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 14,
        y1: 6.5,
        x2: 14,
        y2: 14.586,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const Home = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 11.336a3 3 0 01.993-2.23l7-6.3a3 3 0 014.014 0l7 6.3a3 3 0 01.993 2.23V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-7.664z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M9 16a2 2 0 012-2h2a2 2 0 012 2v6H9v-6z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 2.036,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 14,
        x2: 12,
        y2: 22,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Inbox = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M2 14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.5 14L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V14Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M7.2629 3C5.92346 3 4.74631 3.88793 4.37833 5.17584L2.07695 13.2307C2.0259 13.4094 2 13.5943 2 13.7801V14C2 13.4477 2.44772 13 3 13H8.38197C8.76074 13 9.107 13.214 9.27639 13.5528L9.99724 14.9945C9.99893 14.9979 10.0024 15 10.0062 15H13.9938C13.9976 15 14.0011 14.9979 14.0028 14.9945L14.7236 13.5528C14.893 13.214 15.2393 13 15.618 13H21C21.5523 13 22 13.4477 22 14V13.7801C22 13.5943 21.9741 13.4094 21.923 13.2307L19.6217 5.17584C19.2537 3.88793 18.0765 3 16.7371 3H7.2629Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "12",
        y1: "13",
        x2: "12",
        y2: "21",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  });
});
var DualLightIcons = /* @__PURE__ */ ((DualLightIcons2) => {
  DualLightIcons2["Activity"] = "dual-light/activity.svg";
  DualLightIcons2["AddCircle"] = "dual-light/add_circled.svg";
  DualLightIcons2["Add"] = "dual-light/add.svg";
  DualLightIcons2["Alarm"] = "dual-light/alarm.svg";
  DualLightIcons2["AlertCircle"] = "dual-light/alert_circled.svg";
  DualLightIcons2["Anchor"] = "dual-light/anchor.svg";
  DualLightIcons2["Android"] = "dual-light/android.svg";
  DualLightIcons2["Apple"] = "dual-light/apple.svg";
  DualLightIcons2["Archive"] = "dual-light/archive.svg";
  DualLightIcons2["ArrowBackward"] = "dual-light/arrow_backward.svg";
  DualLightIcons2["ArrowDown"] = "dual-light/arrow_down.svg";
  DualLightIcons2["ArrowForward"] = "dual-light/arrow_forward.svg";
  DualLightIcons2["ArrowUpDown"] = "dual-light/arrow_up_down.svg";
  DualLightIcons2["ArrowUp"] = "dual-light/arrow_up.svg";
  DualLightIcons2["AtSign"] = "dual-light/at_sign.svg";
  DualLightIcons2["Attachment"] = "dual-light/attachment.svg";
  DualLightIcons2["Badge"] = "dual-light/badge.svg";
  DualLightIcons2["Bank"] = "dual-light/bank.svg";
  DualLightIcons2["BarChart"] = "dual-light/bar_chart.svg";
  DualLightIcons2["Basket"] = "dual-light/basket.svg";
  DualLightIcons2["BatteryCharging"] = "dual-light/battery_charging.svg";
  DualLightIcons2["BatteryFull"] = "dual-light/battery_full.svg";
  DualLightIcons2["BatteryHalf"] = "dual-light/battery_half.svg";
  DualLightIcons2["BatteryLow"] = "dual-light/battery_low.svg";
  DualLightIcons2["Battery"] = "dual-light/battery.svg";
  DualLightIcons2["BluetoothOff"] = "dual-light/bluetooth_off.svg";
  DualLightIcons2["Bluetooth"] = "dual-light/bluetooth.svg";
  DualLightIcons2["Bold"] = "dual-light/bold.svg";
  DualLightIcons2["Book"] = "dual-light/book.svg";
  DualLightIcons2["Bookmark"] = "dual-light/bookmark.svg";
  DualLightIcons2["Box"] = "dual-light/box.svg";
  DualLightIcons2["Briefcase"] = "dual-light/briefcase.svg";
  DualLightIcons2["Brush"] = "dual-light/brush.svg";
  DualLightIcons2["Building"] = "dual-light/building.svg";
  DualLightIcons2["Bulb"] = "dual-light/bulb.svg";
  DualLightIcons2["Calendar"] = "dual-light/calendar.svg";
  DualLightIcons2["Camera"] = "dual-light/camera.svg";
  DualLightIcons2["Cart"] = "dual-light/cart.svg";
  DualLightIcons2["Cast"] = "dual-light/cast.svg";
  DualLightIcons2["Category"] = "dual-light/category.svg";
  DualLightIcons2["CenterAlign"] = "dual-light/center_align.svg";
  DualLightIcons2["CheckAll"] = "dual-light/check_all.svg";
  DualLightIcons2["CheckCircle"] = "dual-light/check_circled.svg";
  DualLightIcons2["Check"] = "dual-light/check.svg";
  DualLightIcons2["ChevronBackward"] = "dual-light/chevron_backward.svg";
  DualLightIcons2["ChevronDoubleBackward"] = "dual-light/chevron_double_backward.svg";
  DualLightIcons2["ChevronDoubleForward"] = "dual-light/chevron_double_forward.svg";
  DualLightIcons2["ChevronDoubleDown"] = "dual-light/chevron_double_down.svg";
  DualLightIcons2["ChevronDoubleUp"] = "dual-light/chevron_double_up.svg";
  DualLightIcons2["ChevronDown"] = "dual-light/chevron_down.svg";
  DualLightIcons2["ChevronForward"] = "dual-light/chevron_forward.svg";
  DualLightIcons2["ChevronUp"] = "dual-light/chevron_up.svg";
  DualLightIcons2["Chip"] = "dual-light/chip.svg";
  DualLightIcons2["Chrome"] = "dual-light/chrome.svg";
  DualLightIcons2["Clipboard"] = "dual-light/clipboard.svg";
  DualLightIcons2["Clock"] = "dual-light/clock.svg";
  DualLightIcons2["CloseCircle"] = "dual-light/close_circled.svg";
  DualLightIcons2["Close"] = "dual-light/close.svg";
  DualLightIcons2["CloudDownload"] = "dual-light/cloud_download.svg";
  DualLightIcons2["CloudOff"] = "dual-light/cloud_off.svg";
  DualLightIcons2["CloudUpload"] = "dual-light/cloud_upload.svg";
  DualLightIcons2["Cloud"] = "dual-light/cloud.svg";
  DualLightIcons2["Code"] = "dual-light/code.svg";
  DualLightIcons2["Coffee"] = "dual-light/coffee.svg";
  DualLightIcons2["Collapse"] = "dual-light/collapse.svg";
  DualLightIcons2["ColorPalette"] = "dual-light/color_palette.svg";
  DualLightIcons2["Command"] = "dual-light/command.svg";
  DualLightIcons2["Compass"] = "dual-light/compass.svg";
  DualLightIcons2["Crop"] = "dual-light/crop.svg";
  DualLightIcons2["Crosshairs"] = "dual-light/crosshairs.svg";
  DualLightIcons2["Cursor"] = "dual-light/cursor.svg";
  DualLightIcons2["Dashboard"] = "dual-light/dashboard.svg";
  DualLightIcons2["Database"] = "dual-light/database.svg";
  DualLightIcons2["Design"] = "dual-light/design.svg";
  DualLightIcons2["Diamond"] = "dual-light/diamond.svg";
  DualLightIcons2["Document"] = "dual-light/document.svg";
  DualLightIcons2["Dollar"] = "dual-light/dollar.svg";
  DualLightIcons2["DonutChart"] = "dual-light/donut_chart.svg";
  DualLightIcons2["Download"] = "dual-light/download.svg";
  DualLightIcons2["Drop"] = "dual-light/drop.svg";
  DualLightIcons2["Edit"] = "dual-light/edit.svg";
  DualLightIcons2["EventAdd"] = "dual-light/event_add.svg";
  DualLightIcons2["EventScheduled"] = "dual-light/event_scheduled.svg";
  DualLightIcons2["Expand"] = "dual-light/expand.svg";
  DualLightIcons2["Facebook"] = "dual-light/facebook.svg";
  DualLightIcons2["FastBackward"] = "dual-light/fast_backward.svg";
  DualLightIcons2["FastForward"] = "dual-light/fast_forward.svg";
  DualLightIcons2["Figma"] = "dual-light/figma.svg";
  DualLightIcons2["FileAdd"] = "dual-light/file_add.svg";
  DualLightIcons2["File"] = "dual-light/file.svg";
  DualLightIcons2["Files"] = "dual-light/files.svg";
  DualLightIcons2["Film"] = "dual-light/film.svg";
  DualLightIcons2["Filter"] = "dual-light/filter.svg";
  DualLightIcons2["Fire"] = "dual-light/fire.svg";
  DualLightIcons2["Flag"] = "dual-light/flag.svg";
  DualLightIcons2["Flashlight"] = "dual-light/flashlight.svg";
  DualLightIcons2["Flight"] = "dual-light/flight.svg";
  DualLightIcons2["FolderAdd"] = "dual-light/folder_add.svg";
  DualLightIcons2["Folder"] = "dual-light/folder.svg";
  DualLightIcons2["Frown"] = "dual-light/frown.svg";
  DualLightIcons2["Fuel"] = "dual-light/fuel.svg";
  DualLightIcons2["Gamepad"] = "dual-light/gamepad.svg";
  DualLightIcons2["Gift"] = "dual-light/gift.svg";
  DualLightIcons2["Grid"] = "dual-light/grid.svg";
  DualLightIcons2["Group"] = "dual-light/group.svg";
  DualLightIcons2["Growth"] = "dual-light/growth.svg";
  DualLightIcons2["HandCursor"] = "dual-light/hand_cursor.svg";
  DualLightIcons2["Headphone"] = "dual-light/headphone.svg";
  DualLightIcons2["Heart"] = "dual-light/heart.svg";
  DualLightIcons2["Help"] = "dual-light/help.svg";
  DualLightIcons2["Hide"] = "dual-light/hide.svg";
  DualLightIcons2["Home"] = "dual-light/home.svg";
  DualLightIcons2["Hourglass"] = "dual-light/hourglass.svg";
  DualLightIcons2["Image"] = "dual-light/image.svg";
  DualLightIcons2["Inbox"] = "dual-light/inbox.svg";
  DualLightIcons2["Info"] = "dual-light/info.svg";
  DualLightIcons2["Instagram"] = "dual-light/instagram.svg";
  DualLightIcons2["Internet"] = "dual-light/internet.svg";
  DualLightIcons2["Italics"] = "dual-light/italics.svg";
  DualLightIcons2["Justify"] = "dual-light/justify.svg";
  DualLightIcons2["Key"] = "dual-light/key.svg";
  DualLightIcons2["Laptop"] = "dual-light/laptop.svg";
  DualLightIcons2["Laugh"] = "dual-light/laugh.svg";
  DualLightIcons2["Layers"] = "dual-light/layers.svg";
  DualLightIcons2["Layout"] = "dual-light/layout.svg";
  DualLightIcons2["Leaderboard"] = "dual-light/leaderboard.svg";
  DualLightIcons2["LeftAlign"] = "dual-light/left_align.svg";
  DualLightIcons2["LineChart"] = "dual-light/line_chart.svg";
  DualLightIcons2["Link"] = "dual-light/link.svg";
  DualLightIcons2["LinkedIn"] = "dual-light/linkedin.svg";
  DualLightIcons2["List"] = "dual-light/list.svg";
  DualLightIcons2["Live"] = "dual-light/live.svg";
  DualLightIcons2["Loader"] = "dual-light/loader.svg";
  DualLightIcons2["Location"] = "dual-light/location.svg";
  DualLightIcons2["Lock"] = "dual-light/lock.svg";
  DualLightIcons2["Login"] = "dual-light/login.svg";
  DualLightIcons2["Logout"] = "dual-light/logout.svg";
  DualLightIcons2["Mail"] = "dual-light/mail.svg";
  DualLightIcons2["Map"] = "dual-light/map.svg";
  DualLightIcons2["Meh"] = "dual-light/meh.svg";
  DualLightIcons2["Menu"] = "dual-light/menu.svg";
  DualLightIcons2["Message"] = "dual-light/message.svg";
  DualLightIcons2["Messages"] = "dual-light/messages.svg";
  DualLightIcons2["MicOff"] = "dual-light/mic_off.svg";
  DualLightIcons2["Mic"] = "dual-light/mic.svg";
  DualLightIcons2["Mobile"] = "dual-light/mobile.svg";
  DualLightIcons2["Moon"] = "dual-light/moon.svg";
  DualLightIcons2["MoreHorizontal"] = "dual-light/more_horizontal.svg";
  DualLightIcons2["MoreVertical"] = "dual-light/more_vertical.svg";
  DualLightIcons2["Mouse"] = "dual-light/mouse.svg";
  DualLightIcons2["Music"] = "dual-light/music.svg";
  DualLightIcons2["New"] = "dual-light/new.svg";
  DualLightIcons2["Next"] = "dual-light/next.svg";
  DualLightIcons2["Note"] = "dual-light/note.svg";
  DualLightIcons2["Notes"] = "dual-light/notes.svg";
  DualLightIcons2["NotificationOff"] = "dual-light/notification_off.svg";
  DualLightIcons2["Notification"] = "dual-light/notification.svg";
  DualLightIcons2["Open"] = "dual-light/open.svg";
  DualLightIcons2["PainRoller"] = "dual-light/pain_roller.svg";
  DualLightIcons2["Pause"] = "dual-light/pause.svg";
  DualLightIcons2["Payment"] = "dual-light/payment.svg";
  DualLightIcons2["Pen"] = "dual-light/pen.svg";
  DualLightIcons2["Percent"] = "dual-light/percent.svg";
  DualLightIcons2["Person"] = "dual-light/person.svg";
  DualLightIcons2["PhoneCallIncoming"] = "dual-light/phone_call_incoming.svg";
  DualLightIcons2["PhoneCallOutgoing"] = "dual-light/phone_call_outgoing.svg";
  DualLightIcons2["PhoneCallRejected"] = "dual-light/phone_call_rejected.svg";
  DualLightIcons2["Phone"] = "dual-light/phone.svg";
  DualLightIcons2["Photos"] = "dual-light/photos.svg";
  DualLightIcons2["PieChart"] = "dual-light/pie_chart.svg";
  DualLightIcons2["Pin"] = "dual-light/pin.svg";
  DualLightIcons2["Pinterest"] = "dual-light/pinterest.svg";
  DualLightIcons2["PlayCircle"] = "dual-light/play_circled.svg";
  DualLightIcons2["Play"] = "dual-light/play.svg";
  DualLightIcons2["Playlist"] = "dual-light/playlist.svg";
  DualLightIcons2["Power"] = "dual-light/power.svg";
  DualLightIcons2["Presentation"] = "dual-light/presentation.svg";
  DualLightIcons2["Previous"] = "dual-light/previous.svg";
  DualLightIcons2["Printer"] = "dual-light/printer.svg";
  DualLightIcons2["ProfileCircle"] = "dual-light/profile_circled.svg";
  DualLightIcons2["Promotion"] = "dual-light/promotion.svg";
  DualLightIcons2["Rain"] = "dual-light/rain.svg";
  DualLightIcons2["Receipt"] = "dual-light/receipt.svg";
  DualLightIcons2["Reload"] = "dual-light/reload.svg";
  DualLightIcons2["Remove"] = "dual-light/remove.svg";
  DualLightIcons2["Repeat"] = "dual-light/repeat.svg";
  DualLightIcons2["RightAlign"] = "dual-light/right_align.svg";
  DualLightIcons2["Rocket"] = "dual-light/rocket.svg";
  DualLightIcons2["Ruler"] = "dual-light/ruler.svg";
  DualLightIcons2["Sad"] = "dual-light/sad.svg";
  DualLightIcons2["Save"] = "dual-light/save.svg";
  DualLightIcons2["Scan"] = "dual-light/scan.svg";
  DualLightIcons2["Schedule"] = "dual-light/schedule.svg";
  DualLightIcons2["Scissors"] = "dual-light/scissors.svg";
  DualLightIcons2["Search"] = "dual-light/search.svg";
  DualLightIcons2["Send"] = "dual-light/send.svg";
  DualLightIcons2["Settings"] = "dual-light/settings.svg";
  DualLightIcons2["Share"] = "dual-light/share.svg";
  DualLightIcons2["ShieldCheck"] = "dual-light/shield_check.svg";
  DualLightIcons2["Shield"] = "dual-light/shield.svg";
  DualLightIcons2["Ship"] = "dual-light/ship.svg";
  DualLightIcons2["ShoppingBag"] = "dual-light/shopping_bag.svg";
  DualLightIcons2["Show"] = "dual-light/show.svg";
  DualLightIcons2["Shuffle"] = "dual-light/shuffle.svg";
  DualLightIcons2["Size"] = "dual-light/size.svg";
  DualLightIcons2["Slack"] = "dual-light/slack.svg";
  DualLightIcons2["Smile"] = "dual-light/smile.svg";
  DualLightIcons2["Snapchat"] = "dual-light/snapchat.svg";
  DualLightIcons2["Snowflake"] = "dual-light/snowflake.svg";
  DualLightIcons2["Sort"] = "dual-light/sort.svg";
  DualLightIcons2["Spotify"] = "dual-light/spotify.svg";
  DualLightIcons2["Star"] = "dual-light/star.svg";
  DualLightIcons2["Stop"] = "dual-light/stop.svg";
  DualLightIcons2["Store"] = "dual-light/store.svg";
  DualLightIcons2["Sun"] = "dual-light/sun.svg";
  DualLightIcons2["Sync"] = "dual-light/sync.svg";
  DualLightIcons2["Tablet"] = "dual-light/tablet.svg";
  DualLightIcons2["Tag"] = "dual-light/tag.svg";
  DualLightIcons2["Target"] = "dual-light/target.svg";
  DualLightIcons2["Thermomter"] = "dual-light/thermomter.svg";
  DualLightIcons2["ThumbsDown"] = "dual-light/thumbs_down.svg";
  DualLightIcons2["ThumbsUp"] = "dual-light/thumbs_up.svg";
  DualLightIcons2["Ticket"] = "dual-light/ticket.svg";
  DualLightIcons2["Timer"] = "dual-light/timer.svg";
  DualLightIcons2["ToggleOff"] = "dual-light/toggle_off.svg";
  DualLightIcons2["ToggleOn"] = "dual-light/toggle_on.svg";
  DualLightIcons2["Tool"] = "dual-light/tool.svg";
  DualLightIcons2["Train"] = "dual-light/train.svg";
  DualLightIcons2["Trash"] = "dual-light/trash.svg";
  DualLightIcons2["TrendingDown"] = "dual-light/trending_down.svg";
  DualLightIcons2["TrendingUp"] = "dual-light/trending_up.svg";
  DualLightIcons2["Trophy"] = "dual-light/trophy.svg";
  DualLightIcons2["Truck"] = "dual-light/truck.svg";
  DualLightIcons2["TV"] = "dual-light/tv.svg";
  DualLightIcons2["Twitch"] = "dual-light/twitch.svg";
  DualLightIcons2["Twitter"] = "dual-light/twitter.svg";
  DualLightIcons2["Umbrella"] = "dual-light/umbrella.svg";
  DualLightIcons2["Underline"] = "dual-light/underline.svg";
  DualLightIcons2["Unlock"] = "dual-light/unlock.svg";
  DualLightIcons2["Update"] = "dual-light/update.svg";
  DualLightIcons2["Upload"] = "dual-light/upload.svg";
  DualLightIcons2["Utensils"] = "dual-light/utensils.svg";
  DualLightIcons2["VideoOff"] = "dual-light/video_off.svg";
  DualLightIcons2["VideoRecorder"] = "dual-light/video_recorder.svg";
  DualLightIcons2["VolumeHigh"] = "dual-light/volume_high.svg";
  DualLightIcons2["VolumeOff"] = "dual-light/volume_off.svg";
  DualLightIcons2["Volume"] = "dual-light/volume.svg";
  DualLightIcons2["Wallet"] = "dual-light/wallet.svg";
  DualLightIcons2["Warning"] = "dual-light/warning.svg";
  DualLightIcons2["Watch"] = "dual-light/watch.svg";
  DualLightIcons2["WifiOff"] = "dual-light/wifi_off.svg";
  DualLightIcons2["Wifi"] = "dual-light/wifi.svg";
  DualLightIcons2["Wind"] = "dual-light/wind.svg";
  DualLightIcons2["Window"] = "dual-light/window.svg";
  DualLightIcons2["YouTube"] = "dual-light/youtube.svg";
  DualLightIcons2["Zap"] = "dual-light/zap.svg";
  DualLightIcons2["ZoomIn"] = "dual-light/zoom_in.svg";
  DualLightIcons2["ZoomOut"] = "dual-light/zoom_out.svg";
  return DualLightIcons2;
})(DualLightIcons || {});
const Message = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M2 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H8l-2.72 2.266C3.978 22.352 2 21.426 2 19.73V6z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 9a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 13a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 3,
        x2: 12,
        y2: 24,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 8,
        x2: 12,
        y2: 10,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 10,
        y1: 12,
        x2: 10,
        y2: 14,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Messages = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M22 13C22 14.6569 20.6569 16 19 16H9C7.34315 16 6 14.6569 6 13V7C6 5.34315 7.34315 4 9 4H16L18.8906 2.07293C20.2197 1.18686 22 2.13964 22 3.73703V13Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M2 11C2 9.34315 3.34315 8 5 8H15C16.6569 8 18 9.34315 18 11V17C18 18.6569 16.6569 20 15 20H7L5.24939 21.4005C3.93986 22.4481 2 21.5158 2 19.8388V11Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 14C6 13.4477 6.44772 13 7 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H7C6.44772 15 6 14.5523 6 14Z",
      fill: "url(#paint2_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "14",
        y1: "16",
        x2: "14",
        y2: "0",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "10",
        y1: "8",
        x2: "10",
        y2: "24",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint2_linear",
        x1: "10",
        y1: "13",
        x2: "10",
        y2: "15",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  });
});
const Note = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H6Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15.6066 4.12132L14.2573 5.47055L18.5 9.71319L19.8492 8.36397C21.0208 7.19239 21.0208 5.2929 19.8492 4.12133C18.6776 2.94975 16.7781 2.94975 15.6066 4.12132Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M8.44125 16.6607L11.7411 16.1893C11.9553 16.1587 12.1538 16.0594 12.3068 15.9064L18.5 9.71322L14.2574 5.47058L8.06413 11.6638C7.91113 11.8168 7.81188 12.0153 7.78128 12.2295L7.30988 15.5293C7.2156 16.1893 7.78128 16.755 8.44125 16.6607Z",
      fill: "url(#paint2_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "17.4926",
        y1: "3.24265",
        x2: "17.4926",
        y2: "9.71319",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint2_linear",
        x1: "12.8998",
        y1: "5.47058",
        x2: "12.8998",
        y2: "16.671",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  });
});
const Open = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M19 9C19 9.55229 19.4477 10 20 10C20.5523 10 21 9.55229 21 9V5C21 3.89543 20.1046 3 19 3H15C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5L17.5858 5L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V9Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 6C3 4.34315 4.34315 3 6 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "16",
        y1: "3",
        x2: "16",
        y2: "13",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "21",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  });
});
const Send = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      "clip-path": "url(#clip0)",
      children: [/* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.1928 6.57843C1.36183 4.08552 3.91013 1.80468 6.29603 2.90587L20.0983 9.27616C22.422 10.3487 22.422 13.6514 20.0983 14.7239L6.29603 21.0941C3.91013 22.1953 1.36184 19.9145 2.19281 17.4216L3.68377 12.9487C3.88904 12.3329 3.88904 11.6672 3.68377 11.0514L2.1928 6.57843Z",
        fill: "url(#paint0_linear)"
      }), /* @__PURE__ */ jsx("path", {
        d: "M3.66677 13L3.68387 12.9487C3.88913 12.3329 3.88913 11.6672 3.68387 11.0514L3.66675 11H14.0001C14.5524 11 15.0001 11.4477 15.0001 12C15.0001 12.5523 14.5524 13 14.0001 13H3.66677Z",
        fill: "url(#paint1_linear)"
      })]
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "13",
        y1: "0",
        x2: "13",
        y2: "24",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "9.33342",
        y1: "11",
        x2: "9.33342",
        y2: "13",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsx("clipPath", {
        id: "clip0",
        children: /* @__PURE__ */ jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      })]
    })]
  });
});
const Settings = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M7.992 4.787c.504-.28.92-.71 1.102-1.257l.388-1.162A2 2 0 0111.379 1h1.242a2 2 0 011.897 1.368l.388 1.162c.182.547.598.977 1.102 1.257.078.044.155.089.232.135.495.297 1.076.442 1.641.327l1.202-.246a2 2 0 012.133.96l.62 1.075a2 2 0 01-.235 2.327l-.815.919c-.382.43-.547 1.005-.538 1.58.002.09.002.181 0 .272-.009.575.156 1.15.538 1.58l.815.92a2 2 0 01.236 2.326l-.621 1.076a2 2 0 01-2.133.96l-1.202-.247c-.565-.115-1.146.03-1.64.327a8.36 8.36 0 01-.233.135c-.504.28-.92.71-1.102 1.257l-.388 1.163A2 2 0 0112.621 23h-1.242a2 2 0 01-1.897-1.367l-.388-1.163c-.182-.547-.598-.977-1.102-1.257a8.377 8.377 0 01-.232-.135c-.495-.297-1.076-.442-1.641-.327l-1.202.246a2 2 0 01-2.133-.96l-.62-1.075a2 2 0 01.235-2.327l.815-.919c.382-.43.547-1.005.538-1.58a8.566 8.566 0 010-.272c.009-.575-.156-1.15-.538-1.58l-.815-.92a2 2 0 01-.236-2.326l.621-1.076a2 2 0 012.133-.96l1.202.247c.565.115 1.146-.03 1.64-.327a8.21 8.21 0 01.233-.135z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 15a3 3 0 100-6 3 3 0 000 6z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 1,
        x2: 12,
        y2: 23,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 9,
        x2: 12,
        y2: 15,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
const Star = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("g", {
      "clip-path": "url(#clip0)",
      children: /* @__PURE__ */ jsx("path", {
        d: "M10.1109 3.43478C10.7335 1.64366 13.2665 1.64366 13.8891 3.43478L14.8347 6.15493C15.1093 6.94508 15.8467 7.48082 16.683 7.49786L19.5622 7.55653C21.4581 7.59517 22.2409 10.0043 20.7298 11.1499L18.4349 12.8897C17.7683 13.3951 17.4867 14.2619 17.7289 15.0626L18.5628 17.819C19.112 19.634 17.0627 21.1229 15.5062 20.0398L13.1424 18.3949C12.4557 17.9171 11.5443 17.9171 10.8576 18.3949L8.49383 20.0398C6.93734 21.1229 4.88805 19.634 5.43715 17.819L6.27107 15.0626C6.51331 14.2619 6.23165 13.3951 5.56506 12.8897L3.27022 11.1499C1.75915 10.0043 2.54191 7.59517 4.43776 7.55653L7.31697 7.49786C8.15331 7.48082 8.89069 6.94508 9.16535 6.15494L10.1109 3.43478Z",
        fill: "url(#paint0_linear)"
      })
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "12",
        y1: "-2",
        x2: "12",
        y2: "26",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsx("clipPath", {
        id: "clip0",
        children: /* @__PURE__ */ jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      })]
    })]
  });
});
const Tool = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M10.999 10.158l2.828 2.829-7.07 7.07a2 2 0 01-2.83-2.828L11 10.16z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M16.829 4.328c.488-.488.338-1.31-.337-1.453a6 6 0 104.618 4.618c-.143-.675-.965-.824-1.453-.336L18.07 8.744a2 2 0 11-2.829-2.829l1.588-1.587z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 8.585,
        y1: 10.158,
        x2: 8.585,
        y2: 20.643,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 15.242,
        y1: 2.744,
        x2: 15.242,
        y2: 14.744,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      })]
    })]
  }));
});
const Trash = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M4 7H20V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 10C9.55228 10 10 10.4477 10 11V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V11C8 10.4477 8.44772 10 9 10Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 10C15.5523 10 16 10.4477 16 11V18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18V11C14 10.4477 14.4477 10 15 10Z",
      fill: "url(#paint2_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7ZM10 4H14C14.5523 4 15 4.44772 15 5H9C9 4.44772 9.44772 4 10 4Z",
      fill: "url(#paint3_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "12",
        y1: "7",
        x2: "12",
        y2: "22",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "9",
        y1: "10",
        x2: "9",
        y2: "19",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint2_linear",
        x1: "15",
        y1: "10",
        x2: "15",
        y2: "19",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint3_linear",
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "7",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  });
});
const Upload = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M17.2071 9.2905C17.5976 9.68103 17.5976 10.3142 17.2071 10.7047C16.8166 11.0952 16.1834 11.0952 15.7929 10.7047L13.0019 7.91377V15C13.0019 15.5523 12.5542 16 12.0019 16C11.4496 16 11.0019 15.5523 11.0019 15V7.91368L8.20894 10.7067C7.81841 11.0972 7.18525 11.0972 6.79472 10.7067C6.4042 10.3161 6.4042 9.68298 6.79472 9.29245L11.2948 4.79241C11.4823 4.60487 11.7367 4.49951 12.0019 4.49951C12.2671 4.49951 12.5214 4.60487 12.709 4.79241L17.2071 9.2905Z",
      fill: "url(#paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z",
      fill: "url(#paint1_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "12.0009",
        y1: "4.49951",
        x2: "12.0009",
        y2: "16",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "white"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear",
        x1: "12",
        y1: "14",
        x2: "12",
        y2: "20",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  });
});
const Warning = memo((props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M9.394 4.574c1.15-2.02 4.062-2.02 5.213 0l6.805 11.94c1.14 2-.305 4.486-2.607 4.486H5.195c-2.302 0-3.746-2.485-2.606-4.485L9.394 4.574z",
      fill: "url(#prefix__paint0_linear)"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 14a1 1 0 001-1V8a1 1 0 10-2 0v5a1 1 0 001 1z",
      fill: "url(#prefix__paint1_linear)"
    }), /* @__PURE__ */ jsx("circle", {
      cx: 12,
      cy: 17,
      r: 1,
      fill: "url(#prefix__paint2_linear)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 12,
        y1: 0,
        x2: 12,
        y2: 21,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#fff"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#D1DAEE"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint1_linear",
        x1: 12,
        y1: 14,
        x2: 12,
        y2: 7,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "prefix__paint2_linear",
        x1: 12,
        y1: 16,
        x2: 12,
        y2: 18,
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#6073D8"
        }), /* @__PURE__ */ jsx("stop", {
          offset: 1,
          stopColor: "#5C5ACA"
        })]
      })]
    })]
  }));
});
function getIcon(name) {
  switch (name) {
    case BasicIcons.Alert:
      return Alert;
    case BasicIcons.CaretDownArrow:
      return CaretDownArrow;
    case BasicIcons.Checkmark:
      return Checkmark;
    case BasicIcons.Checkmark2:
      return Checkmark2;
    case BasicIcons.Close:
      return Close;
    case BasicIcons.Exit:
      return Exit;
    case BasicIcons.FileUpload:
      return FileUpload;
    case BasicIcons.GearCog:
      return GearCog;
    case BasicIcons.Search:
      return Search;
    case BasicIcons.TrashCan:
      return TrashCan;
    case BasicIcons.Upload:
      return Upload$1;
    case DualLightIcons.Add:
      return Add;
    case DualLightIcons.AddCircle:
      return AddCircle;
    case DualLightIcons.Building:
      return Building;
    case DualLightIcons.ChevronDoubleForward:
      return ChevronDoubleForward;
    case DualLightIcons.Dashboard:
      return Dashboard;
    case DualLightIcons.Document:
      return Document;
    case DualLightIcons.Gift:
      return Gift;
    case DualLightIcons.Growth:
      return Growth;
    case DualLightIcons.Group:
      return Group;
    case DualLightIcons.Home:
      return Home;
    case DualLightIcons.Inbox:
      return Inbox;
    case DualLightIcons.Message:
      return Message;
    case DualLightIcons.Messages:
      return Messages;
    case DualLightIcons.Note:
      return Note;
    case DualLightIcons.Open:
      return Open;
    case DualLightIcons.Send:
      return Send;
    case DualLightIcons.Settings:
      return Settings;
    case DualLightIcons.Star:
      return Star;
    case DualLightIcons.Tool:
      return Tool;
    case DualLightIcons.Trash:
      return Trash;
    case DualLightIcons.Upload:
      return Upload;
    case DualLightIcons.Warning:
      return Warning;
    default:
      return null;
  }
}
export { BasicIcons, DualLightIcons, getIcon };
//# sourceMappingURL=index.js.map
