import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useTitle from "../hooks/useTitle";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://server-rho-virid.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    
    <div>
      <Header></Header>
      <div className="">
        <h2 className="text-center text-5xl my-6">List Of All Available Toys</h2>
        <div className="mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {toys.map((toy) => (
            <AllToysCard key={toy._id} toy={toy}></AllToysCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
