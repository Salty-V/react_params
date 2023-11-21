import Header from "../component/Header";
import { productSortedByPrice } from "../utils/product-utils";
import LateralBar from "../component/LateralBar";
import ProductCard from "../component/ProductCard";

function ProductsPage() {
  return (
    <>
      <Header pageTitle={"Tous les produits"} />
      <LateralBar textToDisplay={"Vous consultez la liste des produits"}/>
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((currentProductInLoop) => {
          return (
           <ProductCard productToDisplay = {currentProductInLoop}/>
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;