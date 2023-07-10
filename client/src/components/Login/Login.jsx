import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from 'sweetalert2'
import useTitle from "../hooks/useTitle";

function showAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Congo...',
    text: 'Login Successful!',
  })
}

const Login = () => {
  useTitle('Login')
  const {signIn, GoogleSignIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = {email, password} 
        console.log(formData);
        signIn(email, password)
        .then(result => {
          const user = result.user
          console.log(user);
          showAlert()
          navigate(from, { replace: true });
        })
        .catch(error => {
          console.log(error)
          alert('Login Failed! Check your credentials again!')
        })
        
    }

    const handleGoogleSignIn = () => {
      GoogleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        showAlert()
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
    }
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
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
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary mt-2 w-full">Login With Google</button>

              </form>
              <p className="label-text-alt">
                New to Pyrates Toy?
                <span className="ml-1">
                  <Link to="/register" className="label-text-alt link link-hover">
                    Register
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

export default Login;
