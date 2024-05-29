import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/queries";

export const useSolplaceLogList = (page: number) => {
  const { data, loading, error, fetchMore } = useQuery(FETCH_SOLPLACE_LOGS, {
    variables: { page },
  });

  const fetchMoreLogs = async (nextPage: number) => {
    await fetchMore({
      variables: { page: nextPage },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          fetchSolplaceLogs: [
            ...prev.fetchSolplaceLogs,
            ...fetchMoreResult.fetchSolplaceLogs,
          ],
        };
      },
    });
  };

  return { data, loading, error, fetchMoreLogs };
};
