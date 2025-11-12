"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./Lab4/store";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div style={{ width: "200px" }} className="p-3">
          <TOC />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </Provider>
  );
}
