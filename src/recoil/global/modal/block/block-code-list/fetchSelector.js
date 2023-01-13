import { selector } from 'recoil';

import { getBlockCategoryCode } from '@/api/content';

const blockCodeListSelector = selector({
  key: 'blockCodeListSelector',
  get: async () => {
    const res = await getBlockCategoryCode();
    if (res.error) {
      throw res.error;
    }
    return res.data.data;
  },
});

export default blockCodeListSelector;
