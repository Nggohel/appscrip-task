"use client";
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const [sortedProducts, setSortedProducts] = useState(initialProducts);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [filters, setFilters] = useState({});

  const fetchFilteredProducts = async () => {
    try {
      const queryParams = new URLSearchParams();

      // Add filters to query
      Object.keys(filters).forEach((filterKey) => {
        if (filters[filterKey].length > 0) {
          queryParams.append(filterKey, filters[filterKey].join(","));
        }
      });

      // Fetch filtered products
      const response = await fetch(
        `https://fakestoreapi.com/products?${queryParams.toString()}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters]);

  useEffect(() => {
    let sorted = [...products];
    if (selectedOption === "Newest first") {
      sorted.sort((a, b) => a.rating.count - b.rating.count);
    } else if (selectedOption === "Popular") {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (selectedOption === "Price: high to low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (selectedOption === "Price: low to high") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setSortedProducts(sorted);
  }, [selectedOption, products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortedProducts,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
