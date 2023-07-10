import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from 'sweetalert2'


const UpdateToys = () => {

    const toy = useLoaderData()

    const {
        _id,
        toyName,
        sellerName,
        sellerEmail,
        price,
        picture,
        rating,
        quantity,
        description,
        category
      } = toy;


  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpdateToy = (event) => {
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

    const updateToyData = {
      toyName,
      sellerName,
      price,
      quantity,
      sellerEmail,
      rating,
      description,
      picture,
      category
    };
    console.log(updateToyData);
    

    fetch(`https://server-rho-virid.vercel.app/addtoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            icon: 'success',
            title: 'Wonderful!',
            text: 'Toy Updated Successfully!',
          })
        }
      });
  };

    return (
        <div>
      <Header></Header>
      <h2 className="text-center text-5xl my-4">Update Toys: {toyName}</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="toy name"
              defaultValue={toyName}
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
              defaultValue={sellerName}
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
              defaultValue={price}
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
              defaultValue={quantity}
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
              defaultValue={sellerEmail}
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
              defaultValue={rating}
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
              defaultValue={description}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input
              type=""
              name="category"
              placeholder="sub category"
              defaultValue={category}
              value={selectedOption}
              onChange={handleOptionChange}
              list="dropdownOptions"
              className="input input-bordered"
            />
            <datalist id="dropdownOptions">
              <option value="Remote-Control" />
              <option value="Die-Cast" />
              <option value="Building" />
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
              defaultValue={picture}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 mx-6">
          <input
            className="btn btn-block mb-4"
            type="submit"
            value="Update Toy"
          />
        </div>
      </form>

      <Footer></Footer>
    </div>
    );
};

export default UpdateToys;