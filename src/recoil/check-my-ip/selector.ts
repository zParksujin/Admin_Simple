import { selector } from 'recoil';
import { myIpCheck } from '@/api/auth';
import { IMyIpInfo } from '@/api/auth/type';

const checkMyIp = selector<IMyIpInfo>({
  key: 'checkMyIp',
  get: async () => {
    const res = await myIpCheck();

    if (res?.status) {
      return res.data;
    }
    throw res.error;
  },
});

export default checkMyIp;
