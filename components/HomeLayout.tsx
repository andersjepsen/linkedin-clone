import React from "react";
import { theme } from "../styles/theme";
import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { Seperator } from "./Seperator";

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
      <Card>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            padding: `${theme.spacing(0.5)} 0`,
          }}
        >
          <Avatar source="https://i.pravatar.cc/150" size="lg" />
        </div>
        <Card.Content>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href="#">
              <div css={{ fontSize: 16, fontWeight: "bold" }}>John Doe</div>
            </a>
            <div
              css={(theme) => ({
                fontSize: 12,
                marginTop: theme.spacing(0.5),
                color: theme.colors.blackA[6],
              })}
            >
              Gravkospecialist
            </div>
          </div>
          <Seperator />
        </Card.Content>
      </Card>
      {children}
      <footer>Footer stuff</footer>
    </div>
  );
}
