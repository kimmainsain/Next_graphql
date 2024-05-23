"use client";
import React from "react";
import "@/app/globals.css";
import Layout from "@/components/common/Layout";
import { RecoilRoot } from "recoil";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <Layout>{children}</Layout>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
