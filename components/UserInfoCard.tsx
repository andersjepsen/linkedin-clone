import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { Seperator } from "./Seperator";

export function UserInfoCard() {
  return (
    <Card>
      <div
        css={(theme) => ({
          display: "flex",
          justifyContent: "center",
          padding: `${theme.spacing(0.5)} 0`,
        })}
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
              color: theme.colors.blackA.blackA11,
            })}
          >
            Gravkospecialist
          </div>
        </div>
        <Seperator />
      </Card.Content>
    </Card>
  );
}
