import { selector } from 'recoil';
import blockCodeIdxAtom from '@/recoil/global/modal/block/block-code-list/block-code-idx';
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
      return res?.data;
    }
    return [];
  },
});

export default blockDetailCodeListSelector;
