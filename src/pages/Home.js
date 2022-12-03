
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {

  const { state: { products }, } = useProducts(); //ata akta hook

  // console.log(products);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

      {/* {products.map(product => console.log(product))} */}


      {products.map(product => <ProductCard product={product} key={product._id} />)}

    </div>
  );
};

export default Home;
