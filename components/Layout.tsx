import React from "react";
import { Home, Users, Briefcase, MessageSquare, Bell } from "react-feather";
import { Navbar } from "./Navbar";
import { Navigation } from "./Navigation";
import { SearchField } from "./SearchField";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar>
        <div
          css={(theme) => ({
            display: "grid",
            gridTemplateColumns: `${theme.spacing(6)} 1fr 3fr`,
          })}
        >
          <span>logo</span>
          <SearchField placeholder="Search" />
          <div css={{ marginLeft: "auto" }}>
            <Navigation direction="horizontal">
              <Navigation.Item icon={<Home />} label="Home" active />
              <Navigation.Item icon={<Users />} label="My Network" />
              <Navigation.Item icon={<Briefcase />} label="Jobs" />
              <Navigation.Item icon={<MessageSquare />} label="Messaging" />
              <Navigation.Item icon={<Bell />} label="Notifications" />
            </Navigation>
          </div>
        </div>
      </Navbar>
      {children}
    </>
  );
}
