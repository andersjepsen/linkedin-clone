import styled from "@emotion/styled";
import Link from "next/link";

const Menu = styled.ul({
  listStyleType: "none",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

const MenuItem = styled.li(({ theme }) => ({
  display: "flex",
  margin: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  color: theme.colors.blackA.blackA9,
  "&:hover": {
    color: theme.colors.blue.blue10,
    textDecoration: "underline",
  },
}));

export function Footer() {
  return (
    <footer>
      <Menu>
        <MenuItem>
          <Link href="#">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Accessibility</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Help Center</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Privacy & terms</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Ad Choices</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Advertising</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Business Services</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Get the LinkedIn app</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">More</Link>
        </MenuItem>
      </Menu>
      <div css={{ textAlign: "center" }}>
        <span>Kigop IVS © 2022</span>
      </div>
    </footer>
  );
}
