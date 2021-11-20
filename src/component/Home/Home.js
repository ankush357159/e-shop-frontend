import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "../Product/Product";
import MetaData from "../layout/MetaData";
import "./Home.css";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const product = {
//   name: "Blue T-shirt",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "₹3000",
//   _id: "ankush",
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
            {/* <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} /> */}
            {products &&
              products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
