"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";
import { Box, Stack, Button, Chip } from "@mui/material";
import { formatCurrency } from "@/lib/formatCurrency";
import { StarHalf, ShoppingCart, ShoppingBag } from "lucide-react";

const DetailFlower = ({ params }) => {
  const unwarppedParams = use(params);
  const flowerId = unwarppedParams.flower_id;

  const [data, setData] = useState([]);

  const getDetailFlower = async () => {
    const getData = await fetch(`/api/v1/flower/${flowerId}`, {
      method: "GET",
    });

    const result = await getData.json();
    setData(result);
  };

  useEffect(() => {
    getDetailFlower();
  }, []);

  return (
    <Box
      maxWidth="md"
      sx={{
        margin: "0 auto",
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: { md: "2fr 3fr", sm: "1fr" },
        gap: "10px",
        marginY: "20px",
      }}
    >
      {data ? (
        <>
          <div>
            <Image
              src={data?.image}
              height={600}
              width={600}
              alt={data?.name}
            />
          </div>

          <Stack spacing={1} sx={{ height: "100vh", marginX: "20px" }}>
            {data?.isBestSeller ? (
              <Chip
                icon={<StarHalf color="gold" />}
                sx={{ maxWidth: "120px" }}
                color="error"
                label="Best Seller"
              />
            ) : null}
            <h1 className="text-2xl font-bold">{data?.name}</h1>
            <h2>Harga : {formatCurrency(data?.price)}</h2>
            <p className="text-justify">Description : {data?.description}</p>
            <p>Size : {data?.size}</p>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                maxWidth: "500px",
              }}
            >
              <Button
                startIcon={<ShoppingCart />}
                variant="contained"
                fullWidth
                color="error"
              >
                Kerjang
              </Button>
              <Button
                startIcon={<ShoppingBag />}
                variant="contained"
                fullWidth
                color="error"
              >
                Beli
              </Button>
            </Box>
          </Stack>
        </>
      ) : (
        <p className="text-2xl text-center min-h-screen m-auto w-full">
          Loading...
        </p>
      )}
    </Box>
  );
};

export default DetailFlower;
