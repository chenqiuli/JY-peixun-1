import React from "react";

// 特殊的props属性-插槽
export default function Special({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Special
      <div>
        {children}
        {children}
      </div>
    </div>
  );
}
