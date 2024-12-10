"use client";

import FilterAccordion from "./FilterAccordion";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.customizable}>
        <input type="checkbox" className={styles.checkbox} />
        Customizable
      </div>

      <FilterAccordion
        title="IDEAL FOR"
        options={["All Unselected", "Men", "Women", "Baby & Kids"]}
      />

      <FilterAccordion
        title="Occasion"
        options={[
          "AllUnselected",
          "Casual",
          "Formal",
          "Semi-Formal",
          "Festive Occasions",
        ]}
      />
      <FilterAccordion
        title="Work"
        options={["AllUnselected", "Casual", "Formal", "Semi-Formal"]}
      />
      <FilterAccordion
        title="Fabric"
        options={["AllUnselected", "Cotton", "RAYON", "SPANDEX", "Polyester"]}
      />
      <FilterAccordion
        title="Segment"
        options={["AllUnselected", "Men", "Women", "Baby", "Kids"]}
      />
      <FilterAccordion
        title="Suitable For"
        options={["AllUnselected", "Men", "Women", "Baby", "Kids"]}
      />
      <FilterAccordion
        title="Raw Materials"
        options={["AllUnselected", "Men", "Women", "Baby", "Kids"]}
      />
      <FilterAccordion
        title="Pattern"
        options={["AllUnselected", "Stripes", "Checks", "Plaids", "Dots"]}
      />
    </div>
  );
};

export default Filters;
