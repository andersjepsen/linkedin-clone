import Link from "next/link";
import { useRouter } from "next/router";

function CompanyPage() {
  const router = useRouter();
  const { companyId } = router.query;

  return (
    <div
      css={{
        paddingTop: "50px",
      }}
    >
      This has the overview for company id: {companyId}
      <div css={{ padding: 8 }}>
        <Link href={`${companyId}/about`}>
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}

export default CompanyPage;
