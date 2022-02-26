// import Layout from "../components/Layout";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HeroImage from "../images/index/hero_background.jpg";

const IndexPage = () => (
  // <Layout title="Home | Next.js + TypeScript Example">
  <Box>
    <Hero />
  </Box>
  // {/* </Layout> */}
);

const Hero = () => {
  return (
    <Box
      bgImage={HeroImage.src}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      // Height should be about 450px on desktop, and about 270px on mobile
      py={180}
      textAlign="center"
      color="white"
    >
      {/* <Image src={HeroImage.src} w="100%"> */}
      {/* 
      h1 should be 40px size, 35px line height, weight 400, font Fedra Serif A Std
      On Mobile, that changes to: 
        font size: 25px
        Line height: 35px
      
      */}
      <Text fontSize="4xl">Investing in Technologies of Wellbeing</Text>{" "}
      {/* 
      h4 should be 25px size, 27.5px line height, weight 400, font Fedra Serif A Std
      On Mobile, that changes to: 
        font size: 14px
        Line height: 20px
      
      */}
      <Text fontSize="2xl">ISHA YOGA CENTER, CALIFORNIA</Text>
      {/* </Image> */}
    </Box>
  );
};

export default IndexPage;
