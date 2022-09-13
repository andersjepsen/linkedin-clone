interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  icon,
  active = false,
  href = "#",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      css={(theme) => ({
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(0.5),
        color: active
          ? theme.colors.blackA.blackA12
          : theme.colors.blackA.blackA11,
        fontWeight: "bolder",
        fontSize: "14px",
        padding: theme.spacing(1),
        backgroundColor: "Transparent",
        cursor: "pointer",
        border: "none",
        borderRadius: theme.spacing(0.5),
        ":hover": { backgroundColor: theme.colors.blackA.blackA6 },
        ":active": {},
      })}
    >
      <div css={{ flex: 0 }}>{icon}</div>
      {children}
    </button>
  );
}
