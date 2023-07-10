/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ViewToys = () => {
  const toy = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    picture,
    rating,
    availableQuantity,
    detailDescription,
  } = toy;

  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-col-1 md:grid-cols-2">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold py-3">{toyName}</h1>
            <p className="py-3">{detailDescription}</p>
            <p className="py-3">Price: ${price}</p>
            <p className="py-3">Seller: {sellerName}</p>
            <p className="py-3">Email: {sellerEmail}</p>
            <p className="py-3">Rating: {rating}</p>
            <p className="py-3">Available Quantity: {availableQuantity}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewToys;
