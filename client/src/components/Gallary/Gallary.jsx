/* eslint-disable react/no-unescaped-entities */
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";

const Gallary = () => {
  return (
    <div>
        <h1 className="text-3xl md:text-5xl my-6 text-center p-1">Take A Look At Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Turbo Thunder</h2>
            <p>Unleash the joy of play with our incredible toy cars!</p>
          </div>
          <figure>
            <img src={car2} alt="Car" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Speed Racer</h2>
            <p>
              Experience endless adventures and imaginative play with our
              captivating toy car collection!
            </p>
          </div>
          <figure>
            <img src={car3} alt="Car" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Lightning Bolt</h2>
            <p>
              Rev up the fun and fuel your child's imagination with our exciting
              toy cars!
            </p>
          </div>
          <figure>
            <img src={car1} alt="Car" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
