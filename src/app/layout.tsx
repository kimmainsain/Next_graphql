"use client";
import React from "react";
import "@/app/globals.css";
import Layout from "@/components/common/Layout";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <ApolloProvider client={client}>
            <Layout>{children}</Layout>
          </ApolloProvider>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
