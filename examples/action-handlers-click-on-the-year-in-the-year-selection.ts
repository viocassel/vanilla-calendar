import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  type: 'year',
  actions: {
    clickYear(event, year) {
      console.log(year);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();