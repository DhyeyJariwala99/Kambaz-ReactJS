"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./Lab4/store";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
