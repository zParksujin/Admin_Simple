import dayjs from 'dayjs';
import { atom } from 'recoil';

const statisticsBuyParamAtom = atom({
  key: 'statisticsBuyParamAtom',
  default: {
    start_date: dayjs(new Date()).subtract(7, 'day').format('YYYY-MM-DD'),
    end_date: dayjs(new Date()).format('YYYY-MM-DD'),
  },
});

export default statisticsBuyParamAtom;
