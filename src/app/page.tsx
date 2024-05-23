import Link from "next/link";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Link href="/linkTest">linkTest</Link>
        <br />
        <Link href="/hihi">hihi</Link>
      </Layout>
    </div>
  );
};

export default Home;
