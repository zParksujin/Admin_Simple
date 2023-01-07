// import globalLoadingAtom from "@/recoil/global/loading/atom";
import { useSetRecoilState } from 'recoil';
import { globalLoadingClose, globalLoadingCreator } from '@/recoil/global/loading';

const useGlobalLoading = () => {
  const setLoading = useSetRecoilState(globalLoadingCreator);
  const closeLoading = useSetRecoilState(globalLoadingClose);
  // const loading = globalLoadingAtom

  return { setLoading, closeLoading };
};

export default useGlobalLoading;
