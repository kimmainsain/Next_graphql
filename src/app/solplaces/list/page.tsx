"use client";
import { useQuery } from "@apollo/client";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/querys";
import Image from "next/image";
import pencli from "@/assets/png/List/pencli.png";

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
    <div>
      <div className="p-4 mb-12 grid grid-cols-2 gap-4">
        {data?.fetchSolplaceLogs?.map((log: any) => {
          const images = JSON.parse(log.images)[0];
          return (
            <div key={log.id} className="bg-white">
              <div className="h-48 w-full relative">
                <Image
                  src={images}
                  alt={log.solplaceName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
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
      <div>
        <button className="flex items-center justify-center fixed rounded-full bottom-16 right-4 w-12 h-12 bg-blue-500">
          <Image src={pencli} alt="pencli" />
        </button>
      </div>
    </div>
  );
};

export default ListPage;
