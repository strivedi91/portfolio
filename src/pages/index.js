import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";

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
      <Hero />
    </Layout>
  );
}

export default IndexPage;
