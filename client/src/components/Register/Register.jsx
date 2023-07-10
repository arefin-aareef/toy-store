import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from 'sweetalert2'
import useTitle from "../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const {createUser} = useContext(AuthContext)

  const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const formData = {name, email, password, photo} 
        console.log(formData);
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            Swal.fire({
              icon: 'success',
              title: 'Congo...',
              text: 'Registration Successful!',
              footer: 'You Can Login Now'
            })
            navigate('/login')
        })
        .then(error => console.log(error))
    }
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl text-center font-bold">Register</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="label-text-alt">
                Already have an account?
                <span className="ml-1">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover"
                  >
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
