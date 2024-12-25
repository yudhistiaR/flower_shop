"use client";

import { Box } from "@mui/material";
import Aside from "@/components/ui/Aside";
import { Card as CardUi } from "@/components/ui/Card";
import { Pagination } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import MobileAside from "@/components/ui/MobileAside";

const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    price: "",
    categories: [],
    size: [],
  });

  const handleFiltersChange = useCallback((updatedFilters) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }));
    setPage(1);
    console.log("Updated Filters:", updatedFilters);
  }, []);

  const fetchItems = async () => {
    setLoading(true);

    try {
      const params = new URLSearchParams({
        ...(filters.price && { price: filters.price }),
        ...(filters.categories.length > 0 && {
          categories: filters.categories.join(","),
        }),
        ...(filters.size.length > 0 && { size: filters.size.join(",") }),
        page,
        limit: 6,
      });

      const res = await fetch(`/api/v1/flower?${params.toString()}`, {
        method: "GET",
      });
      const result = await res.json();

      setItems(result.data);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page, filters]);

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <>
      <MobileAside onChange={handleFiltersChange} />
      <Box
        sx={{
          width: "100%",
          minHeight: "75vh",
          display: "grid",
          justifyContent: "center",
          alignItems: { md: "start", sm: "center" },
          gridTemplateColumns: { md: "1fr 4fr", sm: "auto" },
          gridTemplateRows: "4fr",
          gridGap: "5px",
          marginTop: "20px",
        }}
      >
        <Aside onChange={handleFiltersChange} />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
            gridTemplateRows: "auto auto",
            gridGap: "8px",
          }}
        >
          {!loading && items?.length > 0 ? (
            items.map((item) => (
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
            <p className="md:text-4xl text-2xl text-zinc-300 text-center md:translate-x-full translate-y-full">
              {loading ? "Loading..." : "No items found"}
            </p>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginY: "20px",
        }}
      >
        <Pagination
          size="large"
          shape="rounded"
          color="error"
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Box>
    </>
  );
};

export default ShopPage;
