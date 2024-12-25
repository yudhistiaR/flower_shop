import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { IconButton } from "@mui/material";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "../Navbar";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
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
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: { md: "block", lg: "none" } }}>
      <IconButton onClick={toggleDrawer(true)} size="large">
        <Menu />
      </IconButton>
      <Drawer
        sx={{
          borderRadius: 10,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
