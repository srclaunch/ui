import { jsx as _jsx } from "react/jsx-runtime";
// import CashFlowByDay from '../components/dashboard/CashFlowByDay';
import { Primitives } from '@srclaunch/types';
import { memo } from 'react';
import { Amount, BackgroundColors, DataGrid, Depth, Workspace, } from '../../../index';
// import Muuri from 'muuri';
// import { useEffect, useRef } from 'react';
// import { connect } from 'react-redux';
// import styled from 'styled-components';
import { Documentation } from '../../layouts/Documentation';
// import { getLocalizedStrings } from '../translations';
export const DataLabelPage = memo(() => {
    // const dispatch = useDispatch();
    // const localizations = getLocalizedStrings(['PAGES.OVERVIEW.TITLE']);
    // const scrollRef = useRef<HTMLDivElement>(null);
    // const todaysDate = new Date();
    // const month = todaysDate.getMonth();
    // const year = todaysDate.getFullYear();
    // useTitle('BudgetBloom - Overview');
    // useEffect(() => {
    // dispatch(getExpensesByDate(month, year, { budget_id: active_budget_id }));
    // }, [dispatch, month, year]);
    // useEffect(() => {
    //   // sendPageLoad('overview');
    //   const muuri = new Muuri('.grid', {
    //     dragAutoScroll: {
    //       targets: [
    //         {
    //           axis: Muuri.AutoScroller.AXIS_Y,
    //           // @ts-ignore
    //           element: scrollRef.current,
    //         },
    //       ],
    //     },
    //     dragEnabled: true,
    //     dragStartPredicate(item, hammerEvent) {
    //       if (hammerEvent.pointerType === 'mouse') {
    //         // For mouse interactions let's just start dragging immediately.
    //         if (hammerEvent.distance >= 20) {
    //           return true;
    //         }
    //       } else if (hammerEvent.deltaTime >= 100) {
    //         return true;
    //       }
    //       return false;
    //     },
    //     itemDraggingClass: 'card-dragging',
    //     itemHiddenClass: 'card-hidden',
    //     itemReleasingClass: 'card-releasing',
    //     items: '.card',
    //     layout: {
    //       fillGaps: true,
    //     },
    //     // showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    //   });
    //   //
    //   // grid.sort(function (itemA, itemB) {
    //   //   var aId = parseInt(itemA.getElement().getAttribute('data-id'));
    //   //   var bId = parseInt(itemB.getElement().getAttribute('data-id'));
    //   //   return aId - bId;
    //   // });
    //   // muuri.on('layoutEnd', items => {
    //   //   const activeItems = items.filter(item => {
    //   //     return item.isActive();
    //   //   });
    //   // });
    //   const ro = new ResizeObserver(entries => {
    //     muuri.refreshItems();
    //     muuri.layout();
    //   });
    //   // Observe one or multiple elements
    //   document.querySelectorAll('.card').forEach(card => {
    //     ro.observe(card);
    //   });
    //   return () => {
    //     // @ts-ignore
    //     muuri.destroy();
    //     ro.disconnect();
    //   };
    // }, []);
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Data", children: _jsx(DataGrid, { columns: [
                {
                    field: 'date',
                    label: 'Date',
                    type: Primitives.Date,
                    width: 150,
                },
                {
                    field: 'name',
                    label: 'Name',
                    type: Primitives.String,
                    width: 150,
                },
                {
                    field: 'description',
                    label: 'Description',
                    minWidth: 300,
                    type: Primitives.LongText,
                },
            ], data: [
                {
                    date: new Date().toISOString(),
                    description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    name: 'Testing 123',
                },
                {
                    date: new Date().toISOString(),
                    description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
                    name: 'Testing 456',
                },
            ] }, void 0) }, void 0));
});
//# sourceMappingURL=DataLabel.js.map