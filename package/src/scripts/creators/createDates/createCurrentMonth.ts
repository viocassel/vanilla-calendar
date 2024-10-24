import createDate from '@scripts/creators/createDates/createDate';
import getDateString from '@scripts/helpers/getDateString';
import type VanillaCalendar from '@src/vanilla-calendar';

const createCurrentMonth = (self: VanillaCalendar, datesEl: HTMLElement, days: number, currentYear: number, currentMonth: number) => {
  for (let dateID = 1; dateID <= days; dateID++) {
    const date = new Date(currentYear, currentMonth, dateID);
    createDate(self, currentYear, datesEl, dateID, getDateString(date), 'current');
  }
};

export default createCurrentMonth;
