import { Link } from "react-router-dom";

const AllToysCard = ({ toy }) => {
  const {
    _id,
    toyName,
    sellerName,
    price,
    picture,
    rating,
    quantity,
    category
  } = toy;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="cars"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {toyName}</h2>
        <p>Seller: {sellerName}</p>
        <p>Sub Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <p>Available Quantity: {quantity}</p>
        <div className="card-actions">
          <Link to={`/viewtoys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
