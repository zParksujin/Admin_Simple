import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { globalLoadingCreator } from '@/recoil/global/loading';
import globalLoading from '@/recoil/global/loading/atom';

const useGlobalLoading = () => {
  const setLoading = useSetRecoilState(globalLoadingCreator);
  const closeLoading = useResetRecoilState(globalLoading);

  return { setLoading, closeLoading };
};

export default useGlobalLoading;
