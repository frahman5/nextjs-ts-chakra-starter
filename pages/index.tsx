import Layout from "../components/Layout";
import { Box, Heading, Text } from "@chakra-ui/react";

const IndexPage = () => (
  // <Layout title="Home | Next.js + TypeScript Example">
  <Box>
    <Hero />
  </Box>
  // {/* </Layout> */}
);

const Hero = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {/* 
      h1 should be 40px size, 35px line height, weight 400, font Fedra Serif A Std
      On Mobile, that changes to: 
        font size: 25px
        Line height: 35px
      
      */}
      <Text size="3xl">Investing in Technologies of Wellbeing</Text>{" "}
      {/* 
      h4 should be 425px size, 27.5px line height, weight 400, font Fedra Serif A Std
      On Mobile, that changes to: 
        font size: 14px
        Line height: 20px
      
      */}
      <Heading as="h4">ISHA YOGA CENTER, CALIFORNIA</Heading>
    </Box>
  );
};

export default IndexPage;
