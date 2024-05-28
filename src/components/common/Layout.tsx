import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow mb-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
