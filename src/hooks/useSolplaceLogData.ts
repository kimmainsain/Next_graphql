import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerTextState } from "@/recoils/headerState";
import { FETCH_SOLPLACE_LOG_BY_ID } from "@/graphql/queries";

export const useSolplaceLogData = (id: string | string[]) => {
  const { data, loading, error } = useQuery(FETCH_SOLPLACE_LOG_BY_ID, {
    variables: { id },
  }); // 데이터 가져오기
  const setHeaderText = useSetRecoilState(headerTextState);

  useEffect(() => {
    // 헤더 설정
    if (data) {
      setHeaderText(`${data.fetchSolplaceLogById.solplaceName} 수정`);
    }
  }, [data, setHeaderText]);

  return { data, loading, error };
};
