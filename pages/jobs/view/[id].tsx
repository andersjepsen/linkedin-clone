import Link from "next/link";
import { useRouter } from "next/router";

function JobPage() {
  const router = useRouter();
  const { id } = router.query;

  const companyId = Math.round(Math.random() * 1000);

  return (
    <div
      css={{
        paddingTop: "50px",
      }}
    >
      This has the overview for job id: {id} <br />
      see info about random company id{" "}
      <Link href={`/company/${companyId}`}>
        <a>here</a>
      </Link>
    </div>
  );
}

export default JobPage;
