import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Sauvegarde du token dans localStorage
        localStorage.setItem("token", data.token);

        console.log("✅Login success:", data);

        // Rediriger vers la page d'accueil (ou autre)
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Something went wrong, try again later");
    }
  };

  return (
    <div className='w-[350px] h-[350px] mx-96 my-48'>
      <div className='bg-yellow-100 h-[500px] rounded-2xl w-[700px] mx-[60%] mt-[10%]'>
        <h1 className='text-5xl text-green-500 font-black text-center py-4'>Login</h1>
        <p className='text-center text-sm'>
          You don't have an Account?{" "}
          <Link to='/register'>
            <span className='text-md cursor-pointer font-black'>Register Now</span>
          </Link>
        </p>

        {/* Champs de formulaire */}
        <form onSubmit={handleSubmit}>
          <input
            className='mt-16 mx-32 px-4 h-8 w-[450px] rounded-xl border-0'
            type="text"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input
            className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0'
            type="password"
            placeholder='Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p className='text-sm text-center ml-80 mt-2 cursor-pointer'>Forget Password?</p>
          <br />

          <button
            type="submit"
            className='bg-green-500 text-white py-2 px-32 rounded-xl my-4 ml-48 hover:scale-95 shadow-2xl'
          >
            Login
          </button>
        </form>

        {/* Message d'erreur */}
        {error && <p className="text-red-600 text-center font-bold">{error}</p>}

        <p className='text-center font-bold text-xl'>Or</p>
        <div>
          <ion-icon class="h-12 w-12 ml-72 mt-4 cursor-pointer" name="logo-googleplus"></ion-icon>
          <ion-icon class="h-12 w-12 mx-8 mt-4 cursor-pointer" name="logo-facebook"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Login;
