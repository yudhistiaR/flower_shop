import { Box } from "@mui/material";
import { cookies } from "next/headers";
import TabAccount from "@/components/TabAccount";
import { User, Mail, Bookuser, Map } from "lucide-react";

const AccountPage = async () => {
  const cookiesStore = (await cookies()).get("auth");

  const data = await fetch(
    `http://localhost:3000/api/v1/user/${cookiesStore.value}`,
    {
      method: "GET",
    },
  );

  const user = await data.json();

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundColor: "red",
          paddingX: "20px",
          paddingY: "5px",
          color: "#fff",
        }}
      >
        <h1 className="font-bold text-2xl">{user?.username}</h1>
        <p>{user?.email}</p>
        <p>{user?.telpon}</p>
        <p>{user?.address}</p>
      </Box>
      <TabAccount />
    </div>
  );
};

export default AccountPage;
