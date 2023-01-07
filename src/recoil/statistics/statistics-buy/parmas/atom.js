import dayjs from 'dayjs';
import { atom } from 'recoil';

const statisticsBuyParamAtom = atom({
  key: 'statisticsBuyParamAtom',
  default: {
    // start_date: '',
    start_date: dayjs(new Date()).subtract(7, 'day').format('YYYY-MM-DD'),
    // start_date: dayjs(new Date()).subtract(1, 'year').format('YYYY-MM-DD'),
    end_date: dayjs(new Date()).format('YYYY-MM-DD'),
    // end_date: '',
  },
});

export default statisticsBuyParamAtom;
