import Image from "next/image";
import { SolplaceLog } from "@/types/solplace/solplaceLogType";
import Link from "next/link";

type SolplaceLogCardProps = {
  log: SolplaceLog;
};

const SolplaceLogCard = ({ log }: SolplaceLogCardProps) => {
  const images = JSON.parse(log.images)[0];
  return (
    <Link
      className="bg-white cursor-pointer"
      href={`/solplaces/update/${log.id}`}
    >
      <div className="h-48 w-full relative">
        <Image
          src={images}
          alt={log.solplaceName}
          className="rounded-lg"
          fill
        />
      </div>
      <div className="py-4">
        <div className="text-mg font-semibold mb-1">{log.solplaceName}</div>
        <div className="text-gray-600">{log.introduction}</div>
      </div>
    </Link>
  );
};

export default SolplaceLogCard;
