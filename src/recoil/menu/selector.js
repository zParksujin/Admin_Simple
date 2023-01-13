import { selector } from 'recoil';
import { getMyMenu } from '@/api/menu';
// import atom from "."

const menuSelector = selector({
  key: 'menuSelector',
  get: async () => {
    const res = await getMyMenu();
    if (res.status === 200) {
      return res.data;
    }
    return res;
  },
});

export default menuSelector;
