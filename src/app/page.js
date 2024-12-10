// import Image from "next/image";
// import styles from "./page.module.css";
// import Header from "@/components/Header";

// import ProductsData from "@/components/ProductsData";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       {/* <ProductHeader /> */}
//       <ProductsData />
//     </div>
//   );
// }
import { ProductsProvider } from "@/context/ProductsContext";
import ProductsData from "@/components/ProductsData";
import ProductHeader from "@/components/productHeader";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <ProductsProvider initialProducts={products}>
      <ProductHeader />
      <ProductsData />
    </ProductsProvider>
  );
}
