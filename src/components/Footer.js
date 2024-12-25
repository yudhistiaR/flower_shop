import { Container, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white w-full">
      <Container maxWidth="md" sx={{ paddingY: "20px" }}>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          fontWeight="bold"
        >
          MADE WITH LOVE ❤️
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
