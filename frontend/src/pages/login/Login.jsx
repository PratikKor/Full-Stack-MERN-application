import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";
const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPaassword] = useState("");

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login 
          <span className="text-blue-500"> Convo</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>

          <div>
            <label className="label">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPaassword(e.target.value)}
            />
          </div>

          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Don't have an Account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "Login"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;