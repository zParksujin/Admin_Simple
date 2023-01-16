import { selector } from 'recoil';
import { getMyMenu } from '@/api/menu';

const menuSelector = selector({
  key: 'menuSelector',
  get: async () => {
    const res = await getMyMenu();
    if (typeof res.status === 'number' && res.status === 200) {
      return res;
    }
    return res;
  },
});

export default menuSelector;
