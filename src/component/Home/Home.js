import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "../Product/Product";
import MetaData from "../layout/MetaData";
import "./Home.css";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Blue T-shirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "₹3000",
  _id: "ankush",
};

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <MetaData title='E-Shop' />
      <div className='banner'>
        <p>Welcome to E-Shop</p>
        <h1>Find Amazing Products below</h1>

        <a href='#container'>
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className='homeHeading'>Featured Products</h2>

      <div className='container' id='container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
