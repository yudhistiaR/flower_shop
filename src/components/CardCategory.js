"use client";

import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardContainer = styled(Card)({
  width: "300px",
  height: "130px",
  position: "relative",
  overflow: "hidden",
  backgroundColor: grey[200],
  "&:hover": {
    backgroundColor: grey[100],
  },
  "&:focus": {
    backgroundColor: grey[200],
  },
  "&:active": {
    backgroundColor: grey[200],
  },
});

const CardImage = styled(CardMedia)({
  width: "110px",
  height: "110px",
  objectFit: "contain",
  objectPosition: "center",
  position: "absolute",
  right: "4%",
  bottom: "8%",
});

const CardCategory = () => {
  const img = [
    {
      imagesUrl: [
        "redRose.png",
        "freshFlowers.png",
        "decorFlower.png",
        "funeralFlower.png",
        "giftFlower.png",
        "wedingFlower.png",
      ],
    },
    {
      name: [
        "Red Rose",
        "Fresh Flowers",
        "Decor Flower",
        "Funeral Flower",
        "Gift Flower",
        "Wedding Flower",
      ],
    },
  ];

  const flowerData = img[0].imagesUrl.map((url, index) => ({
    image: url,
    name: img[1].name[index],
  }));

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-5">
        FEATURED CATEGORIES
      </h1>
      <Box
        sx={{
          boxShadow: 0,
          borderRadius: 0,
          display: "grid",
          gridTemplateColumns: { md: "auto auto auto", sm: "auto" },
          gridTemplateRows: "auto auto",
          gridGap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {flowerData?.map((item, idx) => (
          <CardContainer key={idx}>
            <CardImage image={`/ctg/${item.image}`} />
            <CardContent>
              <Typography variant="p" sx={{ fontWeight: "bold" }} component="">
                {item.name}
              </Typography>
            </CardContent>
          </CardContainer>
        ))}
      </Box>
    </>
  );
};

export default CardCategory;
