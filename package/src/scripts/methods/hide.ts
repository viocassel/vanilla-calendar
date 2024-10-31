import type VanillaCalendar from '@src/vanilla-calendar';

const hide = (self: VanillaCalendar) => {
  if (!self.private.currentType) return;
  self.private.mainElement.dataset.vcCalendarHidden = '';
  if (self.actions.hideCalendar) self.actions.hideCalendar(self);
};

export default hide;
