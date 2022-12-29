const { useEffect } = require("react");
const { useQuery } = require("react-query");
const { useRecoilState } = require("recoil");

/**
 * react-query를 통해 받은 응답값을 곧바로 recoil에 저장할 수 있는 커스텀 훅.
 * 이런식으로 응답값을 저장하고 실제로 사용하는 컴포넌트에서는 recoil에 저장된 값만을 참조한다면
 * 데이터 참조에 나름의 일관성이 생기게 될 것이라 생각.
 * 
 * @param {RecoilState} recoilState 
 * @param {String} key 
 * @callback getFunc 
 * @param {Number} staleTime 
 * @param {Boolean} suspense 
 * @returns 
 */
const useRecoilQuery = (
    recoilState,
    key,
    getFunc,
    staleTime = Infinity,
    suspense = true,
    ) => {
    const [state, setState] = useRecoilState(recoilState);
    const { isLoading, data, refetch } = useQuery(key, getFunc, {
      staleTime,
      suspense,
    });
  
    useEffect(() => {
      if (!data) return;
  
      setState(data);
    }, [data, setState]);
  
    return { state, isLoading, refetch };
  };

  export default useRecoilQuery;