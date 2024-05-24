"use client";
import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/querys";
import Image from "next/image";

const ListPage = () => {
  const { data, loading, error } = useQuery(FETCH_SOLPLACE_LOGS, {
    variables: {
      page: 1,
    },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <div className="p-4 mb-12 grid grid-cols-2 gap-6">
      {data?.fetchSolplaceLogs?.map((log: any) => {
        const images = JSON.parse(log.images)[0];
        return (
          <div
            key={log.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 w-full relative">
              <Image
                src={images}
                alt={log.solplaceName}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-mg font-semibold mb-2">{log.solplaceName}</h3>
              <p className="text-gray-600">{log.introduction}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPage;
