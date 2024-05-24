import React from "react";
import "@/app/globals.css";
import Layout from "@/components/common/Layout";
import RootProvider from "@/app/providers";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <Layout>{children}</Layout>
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
