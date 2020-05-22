import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `sachin`,
          `react developer`,
          `full stack developer`,
          `dotnet`,
        ]}
        title="Home"
      />
    </Layout>
  );
}

export default IndexPage;
