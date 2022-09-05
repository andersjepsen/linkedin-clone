import React from "react";
import { Container } from "./Container";

function NavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <header
      css={{
        backgroundColor: "white",
        height: 48,
        position: "fixed",
        top: 0,
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </header>
  );
}

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <NavbarWrapper>
      <Container>{children}</Container>
    </NavbarWrapper>
  );
}
