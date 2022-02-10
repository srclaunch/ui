import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import { useDispatch } from '@srclaunch/state';
// import moment from 'moment';
import { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';
import { Size } from '../../../../types';
import { Button } from '../../buttons/Button';
import { Icon } from '../../../media/Icon';
export const monthsOfTheYear = [
    {
        label: 'January',
        month: 0,
    },
    {
        label: 'February',
        month: 1,
    },
    {
        label: 'March',
        month: 2,
    },
    {
        label: 'April',
        month: 3,
    },
    {
        label: 'May',
        month: 4,
    },
    {
        label: 'June',
        month: 5,
    },
    {
        label: 'July',
        month: 6,
    },
    {
        label: 'August',
        month: 7,
    },
    {
        label: 'September',
        month: 8,
    },
    {
        label: 'October',
        month: 9,
    },
    {
        label: 'November',
        month: 10,
    },
    {
        label: 'December',
        month: 11,
    },
];
const Month = memo(({ month, year }) => {
    // const dispatch = useDispatch();
    // const [currentYear, setCurrentYear] = useState(
    // Number(moment().format('YYYY')),
    // );
    return (_jsxs(_Fragment, { children: [_jsxs(YearSelector, { children: [_jsx(Button, { className: "back", size: Size.Small, children: "Back" }, void 0), _jsx(Button, { className: "forward", size: Size.Small, children: "Next" }, void 0)] }, void 0), _jsx(MonthContainer, { children: new Array(12).fill(0).map((m, monthKey) => {
                    // const currentMonth = moment(
                    // `${currentYear}-${monthKey + 1}-01`,
                    // 'YYYY-MM-DD',
                    // );
                    // const lastDayOfMonth = Number(
                    //   currentMonth.endOf('month').format('D'),
                    // );
                    // const days = new Array(lastDayOfMonth).fill('');
                    // const dayOfWeek = Number(currentMonth.format('d'));
                    // const spacerDays = new Array(dayOfWeek).fill(0);
                    return (_jsx(MonthTile
                    // active={
                    // Number(currentMonth.format('M')) === month + 1 &&
                    // year === currentYear
                    // }
                    // onClick={() =>
                    //   dispatch(
                    //     setMonthAndYear({
                    //       month: Number(currentMonth.format('M')) - 1,
                    //       year: currentYear,
                    //     }),
                    //   )
                    // }
                    , { children: _jsx(MonthView, {}, void 0) }, monthKey));
                }) }, void 0)] }, void 0));
});
const MonthSelector = memo(({ month, year }) => {
    // const dispatch = useDispatch();
    const [monthSelectorVisible, setMonthSelectorVisible] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs(CurrentMonthYear, { onClick: () => setMonthSelectorVisible(!monthSelectorVisible), selectorVisible: monthSelectorVisible, children: [_jsx("span", {}, void 0), _jsx(DownArrow, { children: _jsx(Icon, { name: BasicIcons.CaretDownArrow, className: `icon ${monthSelectorVisible ? 'up' : ''}` }, void 0) }, void 0)] }, void 0), _jsx(MonthSelectorContainer, { visible: monthSelectorVisible, children: _jsx(Month, { month: month, year: year }, void 0) }, void 0)] }, void 0));
});
const CurrentMonthYear = styled.div `
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin: 17px 0 0 0;
  padding: 8px;
  text-align: right;
  vertical-align: middle;
  width: 180px;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  &:hover {
    background: #fafafa;
    border: 1px solid #ccc;
  }

  span {
    color: #9b9b9b;
    float: left;
  }

  ${props => props.selectorVisible &&
    css `
      background: #d2d2d2 !important;

      span {
        color: #5b5b5b;
      }
    `}
`;
const DownArrow = styled.div `
  float: right;
  margin: 0 0 0 3px;
  text-align: center;
  transition: all 0.2s ease-in;
  width: 26px;

  &:after {
    content: '';
    clear: both;
    display: block;
  }

  svg {
    fill: rgba(190, 190, 190, 1);
    height: 10px;
    position: relative;
    transition: position 0.2s ease-in, all 0.2s ease-in;
    vertical-align: middle;
    width: 10px;

    &.up {
      top: -1px;
      transform: rotate(-180deg);
    }
  }
`;
const MonthSelectorContainer = styled.div `
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
  opacity: 0;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  margin-left: -135px;
  top: 60px;
  transition: opacity 0.2s ease-in-out;
  width: 400px;
  z-index: 10000;

  ${props => props.visible &&
    css `
      pointer-events: all;
      opacity: 1;
    `}
`;
const YearSelector = styled.div `
  width: 100%;
  button.back {
    position: absolute;
    left: 15px;
    top: 15px;
  }

  button.forward {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
const CurrentYear = styled.div `
  color: #5b5b5b;
  font-size: 13px;
  font-weight: 600;
  line-height: 42px;
  margin-bottom: 10px;
  text-align: center;
  vertical-align: middle;
`;
const MonthContainer = styled.div ``;
const MonthTile = styled.div `
  border-radius: 15px;
  cursor: pointer;
  float: left;
  height: 140px;
  width: calc(100% / 3);

  &:hover {
    background: #f2f2f2;
  }

  ${props => props.active &&
    css `
      background: #ccc !important;
    `}
`;
const MonthName = styled.div `
  font-size: 10px;
  font-weight: 600;
  margin: 10px 0 5px 0;
  text-align: center;
`;
const MonthView = styled.div `
  padding: 10px 3px 0 13px;
  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const SpacerDay = styled.div `
  float: left;
  height: 16px;
  width: 16px;
`;
const Day = styled.div `
  float: left;
  font-size: 7px;
  height: 16px;
  width: 16px;
  text-align: center;
`;
export default MonthSelector;
//# sourceMappingURL=MonthSelector.js.map