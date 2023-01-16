// @ts-nocheck
import { selectorFamily } from 'recoil';
import { getContentList } from '@/api/content';

import contentListParamAtom from './parmas';
import { IContentMessageItem } from '@/api/content/type';
import { IApiListResult } from '@/api';

const contentListSelector = selectorFamily<
  IApiListResult<IContentMessageItem>,
  '' | 'list' | 'content' | undefined
>({
  key: 'contentListSelector',
  get:
    (list_type) =>
    async ({ get }) => {
      const param = get(contentListParamAtom);

      if (list_type === 'list') {
        const res = await getContentList(param);
        console.log(res);

        if (res.error) {
          throw res.error;
        }
        return res;
      }
      const res = await getContentList({ ...param, list_type });
      console.log(res);
      if (res.error) {
        throw res.error;
      }
      return res;
    },
});

export default contentListSelector;
