// import CashFlowByDay from '../components/dashboard/CashFlowByDay';
import { Primitives } from '@srclaunch/types';
// import { useTitle } from '@srclaunch/react-hooks';
// import { useDispatch } from '@srclaunch/state';
import { DateTime } from 'luxon';
import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  DataGrid,
  Depth,
  Page,
  Workspace,
} from '../../../index';
// import Muuri from 'muuri';
// import { useEffect, useRef } from 'react';
// import { connect } from 'react-redux';
// import styled from 'styled-components';
import { Documentation } from '../../layouts/Documentation';

// import { getLocalizedStrings } from '../translations';

export const DataLabelPage = memo((): ReactElement => {
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

  return (
    <Workspace
      backgroundColor={BackgroundColors.Default}
      depth={Depth.Low}
      layout={Documentation}
      padding={Amount.Most}
      title="Data"
    >
      <DataGrid
        columns={[
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
        ]}
        data={[
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
        ]}
      />
    </Workspace>
  );
});

// const Container = styled.div`
//   background: rgba(248, 249, 251, 1);
//   padding: 76px 15px 150px 15px;
//   bottom: 0;
//   left: 0;
//   overflow: hidden;
//   overflow-y: scroll;
//   position: fixed;
//   right: 0;
//   top: 0;
//   width: 100%;
//   z-index: 301;

//   .page-title {
//     padding: 0 5px;
//   }

//   @media (min-width: 992px) {
//     bottom: 0;
//     left: 270px;
//     overflow: hidden;
//     overflow-y: scroll !important;
//     padding: 95px 25px 25px 25px;
//     position: fixed;
//     right: 0;
//     top: 0;
//     transform: none;
//     width: calc(100% - 270px);
//   }
// `;

// const Grid = styled.div`
//   position: relative;
//   width: 100%;

//   .item {
//     display: block;
//     margin: 0 0 15px 0;
//     position: absolute;
//     touch-action: manipulation !important;
//     width: 100%;
//     z-index: 1;

//     &.card-dragging {
//       box-shadow: 0 10px 35px -5px rgba(0, 0, 0, 0.2) !important;
//       cursor: move;
//       pointer-events: none;
//       z-index: 3;
//     }

//     &.card-releasing {
//       z-index: 2;
//     }
//   }

//   @media (min-width: 480px) {
//     width: calc(100% + 10px);

//     .item {
//       margin: 0 15px 15px 0;
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 768px) {
//     .item {
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 992px) {
//     .item {
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 1200px) {
//     .item {
//       width: calc(100% / 3 - 15px);
//     }
//   }
// `;
