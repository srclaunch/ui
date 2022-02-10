import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useDebounce } from '@srclaunch/hooks';
// import moment from 'moment';
import { memo,
//  useEffect, useState
 } from 'react';
import styled from 'styled-components';
// import { setMonthAndYear } from '../../slices/app';
import { BasicIcons } from '@srclaunch/icons';
import { Icon } from '../../../media/Icon';
const MonthSlider = memo(() => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const debouncedDate = useDebounce(selectedDate, 100);
    // useEffect(() => {
    // dispatch(
    //   setMonthAndYear({
    //     month: Number(debouncedDate.format('M')) - 1,
    //     year: Number(debouncedDate.format('YYYY')),
    //   }),
    // );
    // }, [debouncedDate]);
    return (_jsx(Container, { "data-testid": "month-slider", children: _jsxs(Content, { children: [_jsx(Month, { children: _jsxs(OverflowContainer, { children: [_jsx(PreviousMonth, {}, void 0), _jsx(NextMonth, {}, void 0)] }, void 0) }, void 0), _jsx(NavButton, { className: "previous", onClick: () => {
                        // const newDate = moment(selectedDate).subtract(1, 'months');
                        // setSelectedDate(newDate);
                    }, children: _jsx(Icon, { name: BasicIcons.ChevronRight }, void 0) }, void 0), _jsx(NavButton, { className: "next", onClick: () => {
                        // const newDate = moment(selectedDate).add(1, 'months');
                        // setSelectedDate(newDate);
                        // dispatch(
                        //   setMonthAndYear({
                        //     month: Number(newDate.format('M')) - 1,
                        //     year: Number(newDate.format('YYYY')),
                        //   }),
                        // );
                    }, children: _jsx(Icon, { name: BasicIcons.ChevronRight }, void 0) }, void 0)] }, void 0) }, void 0));
});
const Container = styled.div `
  position: relative;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    border-radius: 30px;
    float: right;
    height: 42px;
    right: initial;
    margin: 14px 0;
    padding: 1px;
    position: unset;
    top: initial;
    width: 200px;
  }

  @media (min-width: 1200px) {
  }
`;
const Content = styled.div `
  backdrop-filter: blur(3px);
  border-top: 1px solid rgba(244, 245, 250, 1);
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  height: 68px;
  left: 0;
  padding: 13px;
  position: absolute;
  right: 0;
  top: -1px;
  transform: translateY(-300px);
  transition: transform 0.3s ease-in-out;

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
    border-radius: 6px;
    display: block;
    height: 44px;
    padding: 0;
    position: relative;
    transform: translateY(-1px);
  }

  @media (min-width: 1200px) {
  }
`;
const NavButton = styled.button `
  background: #f2f2f2;
  border: none;
  cursor: pointer;
  height: 40px;
  margin: 1px;
  padding: 8px;
  position: relative;
  text-align: center;
  transition: background 0.2s ease-in-out;
  width: 40px;

  svg {
    fill: #9b9b9b;
    width: 14px;
  }

  &:hover {
    background: #e2e2e2;

    svg {
      fill: #7b7b7b;
    }
  }

  &:active {
    background: #d2d2d2;

    svg {
      fill: #5b5b5b;
    }
  }

  &.previous {
    border-radius: 5px 0 0 5px;
    float: left;

    svg {
      left: -1px;
      position: relative;
      transform: rotate(180deg);
    }
  }

  &.next {
    border-radius: 0 5px 5px 0;
    float: right;

    svg {
      left: 1px;
      position: relative;
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
const Month = styled.div `
  color: #5b5b5b;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    div div {
      float: left;
      height: 42px;
      line-height: 42px;
      text-align: center;
      width: 200px;
    }
  }

  @media (min-width: 1200px) {
  }
`;
const OverflowContainer = styled.div `
  overflow: hidden;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
  }
`;
const PreviousMonth = styled.div `
  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    margin-left: -200px;
  }

  @media (min-width: 1200px) {
  }
`;
const CurrentMonth = styled.div `
  font-size: 22px;
  font-weight: 600;
  height: 68px;
  line-height: 68px;
  text-align: center;
  width: 100%;

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    font-size: 12px;
    font-weight: 500;
    float: left;
    height: 42px;
    line-height: 42px;
    text-align: center;
    width: 200px;
  }

  @media (min-width: 1200px) {
  }
`;
const NextMonth = styled.div ``;
export default MonthSlider;
//# sourceMappingURL=MonthSlider.js.map