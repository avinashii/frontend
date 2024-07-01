import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import  { Skeleton } from "../components/loader";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cart-reducer";


const Home = () => {

  const {data , isLoading , isError} = useLatestProductsQuery(""); 
  const dispatch = useDispatch();

  const addtocartHandler = (cartItem:CartItem) =>{
    
    if(cartItem.stock <1 ) return toast.error("Out Of Stock");

    dispatch(addToCart(cartItem));
    toast.success("Added to Cart");
  };

  if(isError) toast.error("Cannot fetch the products");

  console.log(data?.products[0].photo);
  return (
    <div className="home">
      <section></section>
      

      <h1>Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>

      </h1>
      
      <main> 
        {   
        
          isLoading?(<Skeleton width="80vw"/>) : (data?.products.map( (i) => (<ProductCard 
            key={i._id}
            productId={i._id}
            name={i.name}
            price={i.price}
            photo={i.photo}
            
            stock={i.stock} 
            handler={addtocartHandler} />)))
        }
      </main>
    </div>
  );
};

export default Home 