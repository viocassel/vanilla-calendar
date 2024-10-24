import type { FormatDateString, WeekDayID } from '@package/types';
import setDateModifier from '@scripts/creators/createDates/setDateModifier';
import setDaysAsDisabled from '@scripts/creators/createDates/setDatesAsDisabled';
import getDate from '@scripts/helpers/getDate';
import getWeekNumber from '@scripts/helpers/getWeekNumber';
import type VanillaCalendar from '@src/vanilla-calendar';

const addWeekNumberForDate = (self: VanillaCalendar, dateEl: HTMLElement, dateStr: FormatDateString) => {
  const weekNumber = getWeekNumber(dateStr, self.weekStartDay);
  if (!weekNumber) return;
  dateEl.dataset.vcWeekNumber = String(weekNumber.week);
};

const createDate = (
  self: VanillaCalendar,
  currentYear: number,
  datesEl: HTMLElement,
  dateID: number,
  dateStr: FormatDateString,
  monthType: 'current' | 'prev' | 'next',
) => {
  const dateEl = document.createElement('div');
  dateEl.className = self.CSSClasses.date;
  dateEl.dataset.vcDate = dateStr;
  dateEl.dataset.vcDateMonth = monthType;

  const dateBtnEl = document.createElement('button');
  dateBtnEl.className = self.CSSClasses.dateBtn;
  dateBtnEl.type = 'button';
  dateBtnEl.dataset.vcDateBtn = '';
  dateBtnEl.innerText = String(dateID);

  const dayWeekID = getDate(dateStr).getDay() as WeekDayID;

  if (self.settings.visibility.weekNumbers) addWeekNumberForDate(self, dateEl, dateStr);
  if (monthType !== 'current' ? self.settings.visibility.daysOutside : true) dateEl.appendChild(dateBtnEl);

  setDaysAsDisabled(self, dateStr, dayWeekID);
  setDateModifier(self, currentYear, dateEl, dayWeekID, dateStr, monthType);

  datesEl.appendChild(dateEl);
  if (self.actions.getDays) self.actions.getDays(dateID, dateStr, dateEl, dateBtnEl, self);
};

export default createDate;
