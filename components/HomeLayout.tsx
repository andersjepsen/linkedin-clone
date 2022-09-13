import React from "react";
import { theme } from "../styles/theme";
import { UserInfoCard } from "./UserInfoCard";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "2fr 5fr 3fr",
        padding: "5rem 0",
        gridGap: theme.spacing(3),
      }}
    >
      <aside>
        <UserInfoCard />
      </aside>
      {children}
      <footer>Footer stuff</footer>
    </div>
  );
}
