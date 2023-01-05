import { selector } from 'recoil';
import { getBlockCategoryDetailCode } from '@/api/content';
import blockCodeIdxAtom from '@/recoil/global/blockCodeList/blockCodeIdx/atom';

const blockDetailCodeListSelector = selector({
  key: 'blockDetailCodeListSelector',
  get: async ({ get }) => {
    const idx = get(blockCodeIdxAtom);
    if (idx !== '') {
      const res = await getBlockCategoryDetailCode(idx);
      if (res.error) {
        throw res.error;
      }
      return res.data;
    }
    return [];
  },
});

export default blockDetailCodeListSelector;
