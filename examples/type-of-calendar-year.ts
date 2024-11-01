import type { Options } from '@src/types';
import VanillaCalendar from 'vanilla-calendar-pro';

import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  viewType: 'year',
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
