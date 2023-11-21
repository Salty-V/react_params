import Header from "../component/Header";
import { pageTitle, productSortedByPrice, products } from "../utils/product-utils";
import LateralBar from "../component/LateralBar";
import ProductCard from "../component/ProductCard";

function Home() {
  // je trie product par cat
  // je filtre par id

  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
      <Header pageTitle={"Home"}/>
      <LateralBar textToDisplay={pageTitle}/>
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return (
              <ProductCard productToDisplay = {product}/>
            );
          })}
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <ProductCard productToDisplay = {product}/>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;