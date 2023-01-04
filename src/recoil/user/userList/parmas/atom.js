import { atom } from 'recoil';

const userListParamAtom = atom({
  key: 'userListParamAtom',
  default: {
    profile_id: '',
    offset: 0,
    limit: 20,
    date_type: 'register',
    sort: 'register',
    adult_yn: '',
    status: '',
  },
});

export default userListParamAtom;
