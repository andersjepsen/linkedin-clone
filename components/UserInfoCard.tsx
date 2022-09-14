import styled from "@emotion/styled";
import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { Seperator } from "./Seperator";

const UserStatWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  "&:hover": {
    backgroundColor: theme.colors.blackA.blackA6,
  },
}));

const UserStatLabel = styled.label(({ theme }) => ({
  color: theme.colors.blackA.blackA11,
  fontWeight: 700,
}));

const UserStatValue = styled.span(({ theme }) => ({
  color: theme.colors.blue.blue10,
  fontWeight: 700,
}));

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
        <UserStatWrapper>
          <UserStatLabel>Who&apos;s viewed your profile</UserStatLabel>
          <UserStatValue>{Math.round(Math.random() * 100)}</UserStatValue>
        </UserStatWrapper>
        <UserStatWrapper>
          <UserStatLabel>Connections</UserStatLabel>
          <UserStatValue>{Math.round(Math.random() * 1000)}</UserStatValue>
        </UserStatWrapper>
      </Card.Content>
    </Card>
  );
}
