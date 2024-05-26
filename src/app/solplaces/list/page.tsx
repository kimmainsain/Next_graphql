"use client";
import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/querys";
import { useState, useEffect } from "react";
import Image from "next/image";
import pencli from "@/assets/png/List/pencli.png";
import { useIntersectionObserver } from "usehooks-ts";
import { SolplaceLog } from "@/types/solplace/solplaceLogType";
import { MAX_SOLPLACE_LOG_PAGES } from "@/constants/solplaceLog";

const ListPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, error, fetchMore } = useQuery(FETCH_SOLPLACE_LOGS, {
    variables: { page },
  });
  // const { isIntersecting, ref } = useIntersectionObserver({
  //   threshold: 0.5,
  // });

  const fetchMoreLogs = async () => {
    if (page < MAX_SOLPLACE_LOG_PAGES) {
      await fetchMore({
        variables: { page: page + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log(prev, fetchMoreResult, "prev, fetchMoreResult");
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
      setPage((prevPage) => prevPage + 1);
    }
  };

  console.log(data, "data");

  // useEffect(() => {
  //   console.log(isIntersecting, "isIntersecting");
  //   if (isIntersecting && !loading) {
  //     fetchMoreLogs();
  //   }
  // }, [isIntersecting, loading]);

  if (loading && page === 1) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const logs = data ? data.fetchSolplaceLogs : [];

  return (
    <div>
      <div className="p-4 mb-12 grid grid-cols-2 gap-4">
        {logs.map((log: SolplaceLog) => {
          const images = JSON.parse(log.images)[0];
          return (
            <div key={log.id} className="bg-white">
              <div className="h-48 w-full relative">
                <Image
                  src={images}
                  alt={log.solplaceName}
                  className="rounded-lg"
                  fill
                />
              </div>
              <div className="py-4">
                <div className="text-mg font-semibold mb-1">
                  {log.solplaceName}
                </div>
                <div className="text-gray-600">{log.introduction}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div ref={ref} className="h-1"></div> */}
      {loading && page > 1 && <div>Loading more...</div>}
      <div>
        <button
          className="flex items-center justify-center fixed rounded-full bottom-16 right-4 w-12 h-12 bg-blue-500"
          onClick={() => fetchMoreLogs()}
        >
          <Image src={pencli} alt="pencli" />
        </button>
      </div>
    </div>
  );
};

export default ListPage;
