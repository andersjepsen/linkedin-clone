import { useRouter } from "next/router";

function CompanyAboutPage() {
  const router = useRouter();
  const { companyId } = router.query;

  return (
    <div
      css={{
        paddingTop: "50px",
      }}
    >
      This has the about page for company id: {companyId}
    </div>
  );
}

export default CompanyAboutPage;
