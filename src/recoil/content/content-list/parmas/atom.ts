import { atom } from 'recoil';
import { IGetContentMessageListParam } from '@/api/content/type';

const contentListParamAtom = atom<IGetContentMessageListParam>({
  key: 'contentListParamAtom',
  default: {
    profile_id: '',
    offset: 0,
    limit: 20,
    date_type: 'create',
    sort: 'create',
    adult_yn: '',
    status: '',
    list_type: 'list',
  },
});

export default contentListParamAtom;
