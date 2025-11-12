import { ReactNode } from "react";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <h1>Dhyey Jariwala</h1>
      
      {children}
    </div>
  );
}