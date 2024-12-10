"use client";

import { useState, useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import styles from "./FilterAccordion.module.css";

const FilterAccordion = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters } = useContext(ProductsContext);

  const handleCheckboxChange = (option) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const currentFilter = updatedFilters[title] || [];

      if (currentFilter.includes(option)) {
        updatedFilters[title] = currentFilter.filter((item) => item !== option);
      } else {
        updatedFilters[title] = [...currentFilter, option];
      }

      return updatedFilters;
    });
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={styles.headertitle}>
          {title} <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
        </div>
        <div>ALL</div>
      </div>
      {isOpen && (
        <div className={styles.body}>
          {options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
