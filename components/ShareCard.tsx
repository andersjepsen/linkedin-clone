import { Avatar } from "./Avatar";
import { Card } from "./Card";

export function ShareCard() {
  return (
    <Card padding="md">
      <Card.Content>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing(2),
          })}
        >
          <Avatar source="https://i.pravatar.cc/150" />
          <button
            css={(theme) => ({
              borderRadius: theme.radius.pill,
              border: `1px solid ${theme.colors.blackA[5]}`,
              width: "100%",
              height: theme.spacing(5),
              paddingLeft: theme.spacing(2),
              fontWeight: 700,
              backgroundColor: theme.colors.common.white,
              textAlign: "left",
              "&:hover": {
                backgroundColor: theme.colors.blackA[1],
              },
            })}
          >
            Start a post
          </button>
        </div>
      </Card.Content>
      <Card.Footer>
        <div css={{ display: "flex", flexDirection: "row" }}>
          <button>Photo</button>
          <button>Video</button>
          <button>Event</button>
          <button>Write article</button>
        </div>
      </Card.Footer>
    </Card>
  );
}
