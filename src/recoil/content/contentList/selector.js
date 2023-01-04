import { selectorFamily } from 'recoil';
import { getContentList } from '@/api/content';

import contentListParamAtom from './parmas/atom';

const contentListSelector = selectorFamily({
  key: 'contentListSelector',
  get:
    (list_type) =>
    async ({ get }) => {
      if (list_type === 'list') {
        const param = get(contentListParamAtom);
        const res = await getContentList(param);
        if (res.error) {
          throw res.error;
        }
        return res.data;
      }
      const param = get(contentListParamAtom);

      const res = await getContentList({ ...param, list_type, limit: 50 });
      if (res.error) {
        throw res.error;
      }
      return res.data;
    },
});

export default contentListSelector;
