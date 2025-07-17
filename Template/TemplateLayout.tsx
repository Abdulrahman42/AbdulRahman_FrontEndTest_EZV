"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default Template;
