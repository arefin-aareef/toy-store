import { useContext, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../hooks/useTitle";

const AddToys = () => {
  useTitle('Add Toys')
  const {user} = useContext(AuthContext)

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const sellerEmail = form.sellerEmail.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const category = form.category.value;
    const picture = form.picture.value;
    const userEmail = user?.email

    const addToyData = {
      toyName,
      sellerName,
      price,
      quantity,
      sellerEmail,
      rating,
      description,
      picture,
      category,
      userEmail
    };
    console.log(addToyData);
    

    fetch("https://server-rho-virid.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            icon: 'success',
            title: 'Wonderful!',
            text: 'Toy Added Successful!',
          })
        }
      });
      form.reset();
  };

  return (
    <div>
      <Header></Header>
      <h2 className="text-center text-5xl my-6">Add New Toys</h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="toy name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="seller name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              placeholder="seller email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="sub category"
              value={selectedOption}
              onChange={handleOptionChange}
              list="dropdownOptions"
              className="input input-bordered"
            />
            <datalist id="dropdownOptions">
              <option value="remote-control" />
              <option value="die-cast" />
              <option value="building" />
            </datalist>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              name="picture"
              placeholder="picture url"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 mx-6">
          <input
            className="btn btn-block mb-4"
            type="submit"
            value="Add New Toy"
          />
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default AddToys;
