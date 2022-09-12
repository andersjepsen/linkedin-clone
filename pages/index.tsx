import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Avatar } from "../components/Avatar";
import { Card } from "../components/Card";
import { HomeLayout } from "../components/HomeLayout";
import styles from "../styles/Home.module.css";
import { PostData } from "../types";
import { theme } from "../styles/theme";

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/posts`);
  const data: PostData[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<Props> = ({ data }) => {
  return (
    <HomeLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        css={(theme) => ({
          justifyContent: "center",
        })}
      >
        {data.map((post) => (
          <Card key={post.id} padding="lg">
            <Card.Header postdata={post}></Card.Header>
            <Card.Content>
              <p
                css={{
                  fontSize: "14px",
                  lineHeight: "150%",
                  color: theme.colors.blackA[8],
                  margin: "0",
                }}
              >
                {post.text}
              </p>
            </Card.Content>
          </Card>
        ))}
      </main>
    </HomeLayout>
  );
};

export default Home;
