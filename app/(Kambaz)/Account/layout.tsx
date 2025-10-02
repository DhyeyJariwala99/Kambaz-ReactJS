import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="wd-content-with-secondary-nav">
      {/* Secondary navigation sidebar - 200px */}
      <div className="wd-secondary-nav">
        <AccountNavigation />
      </div>
      
      {/* Main content area */}
      <div className="wd-main-content">
        {children}
      </div>
    </div>
  );
}