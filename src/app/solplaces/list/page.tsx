"use client";
import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/querys";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { SolplaceLog } from "@/types/solplace/solplaceLogType";
import { MAX_SOLPLACE_LOG_PAGES } from "@/constants/solplaceLog";
import { useRouter } from "next/navigation";

import Image from "next/image";
import pencli from "@/assets/png/List/pencli.png";
import SolplaceLogCard from "@/components/solplace/list/SolplaceLogCard";

const ListPage = () => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const { data, loading, error, fetchMore } = useQuery(FETCH_SOLPLACE_LOGS, {
    variables: { page },
  });
  const [logs, setLogs] = useState<SolplaceLog[]>([]);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting && page < MAX_SOLPLACE_LOG_PAGES) {
      fetchMoreLogs();
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (data) {
      setLogs([...logs, ...data.fetchSolplaceLogs]);
      console.log("data", data);
    }
  }, [data]);

  const fetchMoreLogs = async () => {
    await fetchMore({
      variables: { page: page + 1 },
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
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div className="p-4 mb-12 grid grid-cols-2 gap-4">
        {logs.map((log: SolplaceLog) => (
          <SolplaceLogCard key={log.id} log={log} />
        ))}
      </div>
      <div ref={ref} className="h-1"></div>
      {loading && page > 1 && <div>Loading more...</div>}
      <div>
        <button
          className="flex items-center justify-center fixed rounded-full bottom-16 right-4 w-12 h-12 bg-blue-500"
          onClick={() => router.push("/solplaces/create")}
        >
          <Image src={pencli} alt="pencli" />
        </button>
      </div>
    </div>
  );
};

export default ListPage;
