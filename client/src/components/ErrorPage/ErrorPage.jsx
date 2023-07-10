import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="mt-5 pt-5 flex flex-col-reverse md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <img className="" src={errorImg} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center p-3 text-center">
        <h1 className="text-4xl text-[#dc2626]">Error 404</h1>
        <p className="text-xl my-4">
          Oops! The page you are looking for could not be found.
        </p>
        <Link className="text-xl text-decoration-none text-[#64748b]" to="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
