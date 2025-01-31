import { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutType {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
