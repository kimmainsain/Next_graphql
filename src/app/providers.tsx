"use client";

import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: RootLayoutProps) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RecoilRoot>
  );
}

export default RootProvider;