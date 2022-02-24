import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
  </Layout>
);

const Hero = () => {
  return (
    <Box>
      <p>Hero placeholder</p>
    </Box>
  );
};

export default IndexPage;
