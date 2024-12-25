"use client";

import { getImageProps } from "next/image";
import { Playwrite_AR } from "next/font/google";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const playwriteAr = Playwrite_AR({ weight: "400", subsets: ["latin"] });

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

const HeroSection = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "hero",
    width: 6000,
    height: 4000,
    src: "/hero2.jpg",
  });

  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    Backdrop: "transparent",
    backgroundImage,
  };

  const ButtonStyled = styled(Button)({
    color: "white",
    width: "100%",
    backgroundColor: red[400],
    border: "none",
    paddingBottom: "10px",
    paddingTop: "10px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: red[500],
      border: "none",
    },
  });

  return (
    <div suppressHydrationWarning style={style}>
      <div className="absolute top-1/2 left-1/2 transform md:-translate-x-full -translate-x-[80%] md:-translate-y-1/2 -translate-y-[40%] md:text-6xl text-5xl overflow-hidden">
        <div className="mb-8">
          <h2 className="text-red-600 text-bold">Inspired By The Beauty</h2>
          <p className={`${playwriteAr.className} text-green-600 text-bold`}>
            Of Nature
          </p>
        </div>
        <ButtonStyled variant="outlined" size="md" className="max-w-96">
          Shop Now
        </ButtonStyled>
      </div>
    </div>
  );
};

export default HeroSection;
