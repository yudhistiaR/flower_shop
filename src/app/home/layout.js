import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default HomeLayout;
