import Link from "next/link";

function JobsPage() {
  return (
    <div
      css={{
        paddingTop: "50px",
      }}
    >
      This has the jobs overview page
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
        <div key={id} css={{ padding: 8 }}>
          <Link href={`jobs/view/${id}`}>
            <a>Goto job {id}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobsPage;
