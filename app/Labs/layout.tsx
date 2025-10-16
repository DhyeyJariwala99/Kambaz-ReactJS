import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-light" style={{ minHeight: '100vh' }}>
          <TOC />
        </div>
        <div className="col-10">
          {children}
        </div>
      </div>
    </div>
  );
}