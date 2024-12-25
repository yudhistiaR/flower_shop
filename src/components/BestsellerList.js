import { Box, Typography, Stack } from "@mui/material";
import { Card as CardUi } from "./ui/Card";

const BestSellerList = async () => {
  const getDatas = await fetch(
    `${process.env.PUBLIC_URL}/api/v1/flower?page=1&limit=6`,
    {
      method: "GET",
    },
  );

  const items = await getDatas.json();

  return (
    <Box
      sx={{
        width: "100%",
        marginY: "40px",
      }}
    >
      <Typography
        textAlign="center"
        fontWeight="bold"
        variant="h5"
        component="div"
        marginBottom={4}
      >
        BEST SELLER
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "auto" },
          gridTemplateRows: "auto auto",
          justifyContent: "center",
          alignItems: "center",
          gridGap: "20px",
        }}
      >
        {items ? (
          items?.data.map((item) => (
            <CardUi
              key={item.id}
              id={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              size={item.size}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Box>
  );
};

export default BestSellerList;
