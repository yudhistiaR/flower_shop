import Container from "@mui/material/Container";

const AccountLayout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <section>{children}</section>
    </Container>
  );
};

export default AccountLayout;
