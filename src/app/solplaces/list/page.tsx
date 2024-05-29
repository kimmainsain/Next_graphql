"use client";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { SolplaceLog } from "@/types/solplace/solplaceLogType";
import {
  MAX_SOLPLACE_LOG_PAGES,
  SOLPLACE_LOG_PAGES_SCROOL_SIZE,
} from "@/constants/solplaceLog";
import { useSolplaceLogList } from "@/hooks/useSolplaceLogList";

import Image from "next/image";
import pencli from "@/assets/png/List/pencli.png";
import SolplaceLogCard from "@/components/solplace/list/SolplaceLogCard";
import Link from "next/link";

const ListPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, error, fetchMoreLogs } = useSolplaceLogList(1);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log("isIntersecting", isIntersecting);
    console.log("page", page);
    if (
      isIntersecting &&
      page <=
        Math.floor(MAX_SOLPLACE_LOG_PAGES / SOLPLACE_LOG_PAGES_SCROOL_SIZE)
    ) {
      fetchMoreLogs(page + 1);
      setPage((prev) => prev + 1);
    }
  }, [isIntersecting]);

  if (loading && page === 1) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <div>
      <div className="p-4 mb-12 grid grid-cols-2 gap-4">
        {data?.fetchSolplaceLogs?.map((log: SolplaceLog) => (
          <SolplaceLogCard key={log.id} log={log} />
        ))}
      </div>
      <div ref={ref} className="h-1"></div>
      {loading && page > 1 && <div>Loading more...</div>}
      <Link href={`/solplaces/create`}>
        <div className="flex items-center justify-center fixed rounded-full bottom-16 right-4 w-12 h-12 bg-blue-500">
          <Image src={pencli} alt="pencli" />
        </div>
      </Link>
    </div>
  );
};

export default ListPage;
