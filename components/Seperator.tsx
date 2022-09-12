export function Seperator() {
  return (
    <hr
      css={(theme) => ({ color: theme.colors.blackA[1], borderBottom: "none" })}
    />
  );
}
