import { ReactNode } from "react";
import Header from "./Header/Header.home";
import Footer from "./Footer/Footer.home";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
