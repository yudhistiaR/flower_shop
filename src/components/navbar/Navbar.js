"use client";

import dynamic from "next/dynamic";
import { ShoppingCart, User } from "lucide-react";
import { Container } from "@mui/material";
import { Playwrite_AR } from "next/font/google";
import Link from "next/link";
import { styled } from "@mui/material";
import { usePathname } from "next/navigation";

//component
const MobileNavbar = dynamic(() => import("./mobile/navbar"), { ssr: false });
const playwriteAr = Playwrite_AR({ weight: "400", subsets: ["latin"] });

export const NavLink = styled(Link, {
  shouldForwardProps: (prop) => prop !== "active",
})(({ theme, active }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  display: "block",
  padding: "10px",
  textAlign: "center",
  textDecoration: "none",
  color: active ? "red" : "inherit",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: "0",
    transform: "translate(-50%, -50%)",
    width: active ? "100%" : 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    opacity: active ? 1 : 0,
    transition: "width 0.5s ease, opacity 0.5s ease",
    height: "4px",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
  },
  "&:hover::after": {
    width: "100%",
    opacity: 1,
  },
}));

export const Navbar = () => {
  const path = usePathname();

  return (
    <Container maxWidth="md" className="flex justify-center items-center mb-5">
      <div className="md:flex items-center gap-2 py-4 text-sm hidden">
        <Link href="/account" className="flex items-center gap-2">
          <User className="text-red-500" />
          My Account
        </Link>
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-red-500" />
          My Cart
        </div>
      </div>
      <div
        className={`${playwriteAr.className} md:block flex items-center justify-between text-center md:text-3xl text-lg font-bold my-8`}
      >
        <h1>Lestari Flower Shop</h1>
        <MobileNavbar />
      </div>
      <ul className="md:flex justify-between items-center hidden text-xl">
        <NavLink active={path === "/home"} href="/home">
          HOME
        </NavLink>
        <NavLink active={path === "/shop"} href="/shop">
          FLOWERS
        </NavLink>
        <NavLink active={path === "/category"} href="/category">
          CATEGORY
        </NavLink>
        <NavLink active={path === "/contact"} href="/contact">
          CONTACT US
        </NavLink>
      </ul>
    </Container>
  );
};
