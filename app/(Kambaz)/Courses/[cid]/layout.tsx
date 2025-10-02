import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100vh" }}>
      {/* Course Header */}
      <div style={{
        background: "white",
        padding: "12px 20px",
        borderBottom: "1px solid #C7CDD1",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px", color: "#6B7780" }}>≡</span>
          <span style={{ color: "#C83E4D", fontSize: "15px", fontWeight: 600 }}>
            CS{cid} SU1 24 MON/FRI
          </span>
          <span style={{ color: "#6B7780" }}>›</span>
          <span style={{ fontSize: "14px", color: "#6B7780" }}>Modules</span>
        </div>
        <button style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          color: "#6B7780",
          cursor: "pointer",
        }}>
          ⋮
        </button>
      </div>

      {/* Main Content with Navigation */}
      <div className="wd-content-with-secondary-nav">
        <div className="wd-secondary-nav">
          <CourseNavigation />
        </div>
        <div className="wd-main-content">
          {children}
        </div>
      </div>
    </div>
  );
}