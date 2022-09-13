export function Seperator() {
  return (
    <hr
      css={(theme) => ({
        color: theme.colors.blackA.blackA6,
        borderBottom: "none",
      })}
    />
  );
}
