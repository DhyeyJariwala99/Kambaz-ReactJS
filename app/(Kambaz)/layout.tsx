import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      {/* Fixed left navigation - 85px wide */}
      <KambazNavigation />
      
      {/* Main content area with offset for fixed sidebar */}
      <div className="wd-main-content-offset">
        {children}
      </div>
    </div>
  );
}