export default {};
// import React from 'react';
// import {
//   daysOfTheMonth,
//   daysOfTheWeek,
//   monthsOfTheYear,
// } from '../../components/data/labels/DueDateLabel';
//
// export const daysOfTheMonth = [
//   {
//     day: 1,
//     label: '1st',
//   },
//   {
//     day: 2,
//     label: '2nd',
//   },
//   {
//     day: 3,
//     label: '3rd',
//   },
//   {
//     day: 4,
//     label: '4th',
//   },
//   {
//     day: 5,
//     label: '5th',
//   },
//   {
//     day: 6,
//     label: '6th',
//   },
//   {
//     day: 7,
//     label: '7th',
//   },
//   {
//     day: 8,
//     label: '8th',
//   },
//   {
//     day: 9,
//     label: '9th',
//   },
//   {
//     day: 10,
//     label: '10th',
//   },
//   {
//     day: 11,
//     label: '11th',
//   },
//   {
//     day: 12,
//     label: '12th',
//   },
//   {
//     day: 13,
//     label: '13th',
//   },
//   {
//     day: 14,
//     label: '14th',
//   },
//   {
//     day: 15,
//     label: '15th',
//   },
//   {
//     day: 16,
//     label: '16th',
//   },
//   {
//     day: 17,
//     label: '17th',
//   },
//   {
//     day: 18,
//     label: '18th',
//   },
//   {
//     day: 19,
//     label: '19th',
//   },
//   {
//     day: 20,
//     label: '20th',
//   },
//   {
//     day: 21,
//     label: '21st',
//   },
//   {
//     day: 22,
//     label: '22nd',
//   },
//   {
//     day: 23,
//     label: '23rd',
//   },
//   {
//     day: 24,
//     label: '24th',
//   },
//   {
//     day: 25,
//     label: '25th',
//   },
//   {
//     day: 26,
//     label: '26th',
//   },
//   {
//     day: 27,
//     label: '27th',
//   },
//   {
//     day: 28,
//     label: '28th',
//   },
//   {
//     day: 29,
//     label: '29th',
//   },
//   {
//     day: 30,
//     label: '30th',
//   },
//   {
//     day: 31,
//     label: '31st',
//   },
// ];
//
// export const daysOfTheWeek: {
//   day: number;
//   label: string;
// }[] = [
//   {
//     day: 0,
//     label: 'Sunday',
//   },
//   {
//     day: 1,
//     label: 'Monday',
//   },
//   {
//     day: 2,
//     label: 'Tuesday',
//   },
//   {
//     day: 3,
//     label: 'Wednesday',
//   },
//   {
//     day: 4,
//     label: 'Thursday',
//   },
//   {
//     day: 5,
//     label: 'Friday',
//   },
//   {
//     day: 6,
//     label: 'Saturday',
//   },
// ];
//
// export const monthsOfTheYear = [
//   {
//     label: 'January',
//     month: 0,
//   },
//   {
//     label: 'February',
//     month: 1,
//   },
//   {
//     label: 'March',
//     month: 2,
//   },
//   {
//     label: 'April',
//     month: 3,
//   },
//   {
//     label: 'May',
//     month: 4,
//   },
//   {
//     label: 'June',
//     month: 5,
//   },
//   {
//     label: 'July',
//     month: 6,
//   },
//   {
//     label: 'August',
//     month: 7,
//   },
//   {
//     label: 'September',
//     month: 8,
//   },
//   {
//     label: 'October',
//     month: 9,
//   },
//   {
//     label: 'November',
//     month: 10,
//   },
//   {
//     label: 'December',
//     month: 11,
//   },
// ];
//
// export function getDueDateLabel(
//   value: [string?, string?, string?, string?, string?],
// ) {
//   const occurrence = value[0];
//   const weeklyDueDate = value[1];
//   const monthlyDueDate = value[2];
//   const yearlyDueDateMonth = value[3];
//   const yearlyDueDateDay = value[4];
//
//   switch (occurrence) {
//     case 'WEEKLY':
//       return daysOfTheWeek.find(d => d.day === weeklyDueDate)?.label;
//     case 'MONTHLY': {
//       if (monthlyDueDate) {
//         return daysOfTheMonth.find(d => d.day === monthlyDueDate)?.label;
//       }
//
//       break;
//     }
//     case 'YEARLY': {
//       const month = monthsOfTheYear.find(m => m.month === yearlyDueDateMonth);
//       const dayOfMonth = daysOfTheMonth.find(d => d.day === yearlyDueDateDay);
//
//       return month && month.label + ' ' + dayOfMonth && dayOfMonth.label;
//     }
//     default:
//       return null;
//   }
// }
//# sourceMappingURL=labels.js.map