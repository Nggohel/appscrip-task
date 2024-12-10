"use client";
import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { ProductsContext } from "@/context/ProductsContext";
import Image from "next/image";
import styles from "./ProductsData.module.css";
import arrow from "../../public/arrow-left.svg";
import check from "../../public/check.svg";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
const dropdownOptions = [
  "Recommended",
  "Newest first",
  "Popular",
  "Price: high to low",
  "Price: low to high",
];
const ProductsData = () => {
  const { sortedProducts, selectedOption, setSelectedOption } =
    useContext(ProductsContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const toggleFilter = useCallback(() => {
    setIsFilterVisible((prev) => !prev);
  }, []);

  const selectOption = (option) => {
    setSelectedOption(option);
    // setIsDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles["products-data"]}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <span className={styles["total-items"]}>1000 items</span>
          <div className={styles["filter"]} onClick={toggleFilter}>
            <Image
              src={arrow}
              alt="arrow"
              className={styles["filter-arrow"]}
              width={16}
              height={16}
            />
            <span className={styles["hide-filter"]}>
              {isFilterVisible ? "Hide Filter" : "Show Filter"}
            </span>
          </div>
        </div>
        <div className={styles.mobileleft}>Filter</div>

        <div className={styles["recommended-wrapper"]} ref={dropdownRef}>
          <div onClick={toggleDropdown} className={styles["dropdown-trigger"]}>
            <span>{selectedOption}</span>
            <Image src={arrow} alt="arrow" width={16} height={16} />
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {dropdownOptions.map((option) => (
                  <div
                    key={option}
                    className={`${styles.option} ${
                      selectedOption === option ? styles.selected : ""
                    }`}
                    onClick={() => selectOption(option)}
                  >
                    {selectedOption === option && (
                      <Image
                        src={check}
                        alt="check"
                        className={styles.tick}
                        width={20}
                        height={20}
                      />
                    )}
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* style={{ display: "flex", gap: "20px", alignItems: "flex-start" }} */}
      <div className={styles.body}>
        {isFilterVisible && <Filters />}
        <ProductCard products={sortedProducts} />
      </div>
    </div>
  );
};

export default ProductsData;
