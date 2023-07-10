import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {

    const {_id, toyName, picture, price, rating} = toy

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-3">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="cars"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyName}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          <Link to={`/viewtoys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
