import dynamic from "next/dynamic";
import HeroSection from "@/components/hero/HeroSection";
import { Container } from "@mui/material";

const BestSellerList = dynamic(() => import("@/components/BestsellerList"));
const CardCategory = dynamic(() => import("@/components/CardCategory"));

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="md" sx={{ marginY: "40px" }}>
        <CardCategory />
        <BestSellerList />
      </Container>
    </>
  );
};

export default HomePage;
