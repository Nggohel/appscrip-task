import React, { useState } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import Image from "next/image";
import heart from "../../public/heart.svg";
import fillHeart from "../../public/fill_heart.svg";
import styles from "./ProductCard.module.css";

const ProductCard = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState({});
    // const { products } = useContext(ProductsContext);

  if (!products || !products.length) {
    return <p>Loading products...</p>;
  }
  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles["product-wrapper"]}>
      <div className={styles["product-card-container"]}>
        {products.map((product) => (
          <div key={product.id} className={styles["product-card"]}>
            <img
              src={product.image}
              alt={product.title}
              className={styles["product-img"]}
            />
            <h2 className={styles["product-name"]}>{product.title}</h2>
            <div className={styles["product-des"]}>
              <p className={styles["product-description"]}>
                {/* {product.description} */}
                Sign in or Create an account to see pricing
              </p>
              {/* <Image
                src={heart}
                className={styles["heart-icon"]}
                width={24}
                alt="heart"
              /> */}
              <Image
                src={likedProducts[product.id] ? fillHeart : heart}
                className={styles["heart-icon"]}
                width={24}
                alt="heart"
                onClick={() => toggleLike(product.id)}
              />
            </div>
            {/* <p className={styles["product-price"]}>${product.price}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
