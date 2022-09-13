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
          <Avatar source="https://i.pravatar.cc/150" />
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
            label="Photo"
            icon={
              <Camera css={(theme) => ({ color: theme.colors.blue.blue9 })} />
            }
          ></Button>
          <Button
            label="Video"
            icon={
              <Video css={(theme) => ({ color: theme.colors.green.green9 })} />
            }
          ></Button>
          <Button
            label="Event"
            icon={
              <Calendar css={(theme) => ({ color: theme.colors.red.red9 })} />
            }
          ></Button>
          <Button
            label="Write article"
            icon={
              <Layout css={(theme) => ({ color: theme.colors.red.red9 })} />
            }
          ></Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
