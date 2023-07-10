/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ToysRows from "./ToysRows";
import Swal from 'sweetalert2'
import useTitle from "../hooks/useTitle";


const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://server-rho-virid.vercel.app/addtoys?userEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDelete = id => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://server-rho-virid.vercel.app/addtoys/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const remaining = myToys.filter(toy => toy._id !== id)
          setMyToys(remaining);
        }
      })

      }
    })
  }

  return (
    <div>
      <Header></Header>
      <div>
        <h2 className="text-center text-5xl my-6">My Toys Collection</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price $</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                myToys.map(row => <ToysRows
                key={row._id}
                row={row}
                handleDelete={handleDelete}
                ></ToysRows>)
              }              
            </tbody>
            
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyToys;
