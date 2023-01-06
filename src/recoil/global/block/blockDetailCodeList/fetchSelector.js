import { selector } from 'recoil';
import blockCodeIdxAtom from '@/recoil/global/block/blockCodeList/blockCodeIdx';
import { getBlockCategoryDetailCode } from '@/api/content';

const blockDetailCodeListSelector = selector({
  key: 'blockDetailCodeListSelector',
  get: async ({ get }) => {
    const idx = get(blockCodeIdxAtom);

    if (idx !== '' && idx !== '선택') {
      const res = await getBlockCategoryDetailCode(idx);
      if (res.error) {
        throw res.error;
      }
      return res?.data?.data;
    }
    return [];
  },
});

export default blockDetailCodeListSelector;
