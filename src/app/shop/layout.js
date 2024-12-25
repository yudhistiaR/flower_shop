import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Container from "@mui/material/Container";

const ShopLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Container maxWidth="xl" component="section">
        {children}
      </Container>
      <Footer />
    </main>
  );
};

export default ShopLayout;
