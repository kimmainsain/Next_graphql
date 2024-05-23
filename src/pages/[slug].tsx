import Link from "next/link";
import { useRouter } from "next/router";

const TestRouter = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Test Router : {router.query.slug}</h1>
      <div>
        <button
          type="button"
          onClick={() =>
            router.push({ pathname: "/[slug]", query: { slug: "test" } })
          }
        >
          Home
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() =>
            router.replace({ pathname: "/[slug]", query: { slug: "test2" } })
          }
        >
          Stores
        </button>
      </div>
      <div>
        <button type="button" onClick={() => router.back()}>
          back
        </button>
      </div>
      <div>
        <button type="button" onClick={() => router.reload()}>
          reload
        </button>
      </div>
      <Link href="/linkTest">linkTest</Link>
      <br />
      <Link href="/hihi">hihi</Link>
    </div>
  );
};

export default TestRouter;
