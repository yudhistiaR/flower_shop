import { Playwrite_AR } from "next/font/google";
import { Typography } from "@mui/material";
import Image from "next/image";

const playwriteAr = Playwrite_AR({ weight: "400", subsets: ["latin"] });

export default function AuthView({ children }) {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-[60%] h-screen relative hidden md:block">
        <Image fill objectFit="cover" alt="bg" src={"/ctg/login-bg.jpg"} />
        <div className="absolute top-1/2 left-[10%] space-y-6">
          <Typography color="red" variant="h4" component="div">
            Welcome to
          </Typography>
          <div className={`${playwriteAr.className} text-4xl`}>
            LESTARI FLOWER SHOP
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start md:w-[40%] w-full h-full px-7 space-y-8">
        {children}
      </div>
    </section>
  );
}
