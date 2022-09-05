import React from "react";
import { Home, Users, Briefcase, MessageSquare, Bell } from "react-feather";
import { Navbar } from "./Navbar";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar>
        <Navigation direction="horizontal">
          <Navigation.Item icon={<Home />} label="Home" active />
          <Navigation.Item icon={<Users />} label="My Network" />
          <Navigation.Item icon={<Briefcase />} label="Jobs" />
          <Navigation.Item icon={<MessageSquare />} label="Messaging" />
          <Navigation.Item icon={<Bell />} label="Notifications" />
        </Navigation>
      </Navbar>
      {children}
    </>
  );
}
