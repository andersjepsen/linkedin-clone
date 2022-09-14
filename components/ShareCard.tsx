import { Calendar, Camera, Layout, Video } from "react-feather";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
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
          <div>
            <Avatar source="https://i.pravatar.cc/150" />
          </div>
          <button
            css={(theme) => ({
              borderRadius: theme.radius.pill,
              border: `1px solid ${theme.colors.blackA.blackA11}`,
              width: "100%",
              height: theme.spacing(5),
              paddingLeft: theme.spacing(2),
              fontWeight: 700,
              backgroundColor: theme.colors.common.white,
              textAlign: "left",
              "&:hover": {
                backgroundColor: theme.colors.blackA.blackA6,
              },
            })}
          >
            Start a post
          </button>
        </div>
      </Card.Content>
      <Card.Footer>
        <div css={{ display: "flex", flexDirection: "row" }}>
          <Button
            icon={
              <Camera css={(theme) => ({ color: theme.colors.blue.blue9 })} />
            }
          >
            Photo
          </Button>
          <Button
            icon={
              <Video css={(theme) => ({ color: theme.colors.green.green9 })} />
            }
          >
            Video
          </Button>
          <Button
            icon={
              <Calendar css={(theme) => ({ color: theme.colors.red.red9 })} />
            }
          >
            Event
          </Button>
          <Button
            icon={
              <Layout css={(theme) => ({ color: theme.colors.red.red9 })} />
            }
          >
            Write article
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
