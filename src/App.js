import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";

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
      <Route exact path='/products' component={Product} />
      <Footer />
    </Router>
  );
}

export default App;
