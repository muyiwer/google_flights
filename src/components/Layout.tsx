import { FC, PropsWithChildren } from "react";
import { Header } from "./Header";
import { PageTitle } from "./Title";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex flex-col">
      <Header />
      <PageTitle/>
      {children}
    </section>
  );
};
