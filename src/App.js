import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={ProductDetails} />
      <Route exact path='/products' component={Products} />
      <Route path='/products/:keyword' component={Products} />
      <Route path='/search' component={Search} />
      <Footer />
    </Router>
  );
}

export default App;
