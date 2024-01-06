import React, { useContext, useState } from 'react'
import '../../css/register/register.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utiles/context/UserContext';


export default function RegisterForm() {
  const [userErorr, setUserErorr] = useState(false)
  const { createUser, updateUser, createUserGoogle } = useContext(AuthContext);
   const navigate = useNavigate();

  // handle sign up from 
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // crate user 
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        // update user profile 
        updateUser(name)
         navigate("/");
        form.reset();
      })
      .catch(error => {
        console.log(error)
        setUserErorr(true)
    })
    
  }

  const handleFromChange = () => {
    setUserErorr(false)
  }

  // handle google sign up 
  const handleGoogle = () => {
    createUserGoogle()
      .then(result => {
      console.log(result.user)
      })
      .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="2xl:py-[120px] xl:py-[100px] md:py-[80px] sm:py-[60px] py-[50px]">
      <div className="container-main">
        <form
          onSubmit={handleSubmit}
          onChange={handleFromChange}
          className="flex flex-col sm:gap-[20px] gap-[16px] max-w-[570px] mx-auto sm:px-[45px] sm:border-[1px] border-[#DAE0E7] rounded-[8px] sm:py-[60px]"
        >
          <div className="flex flex-col gap-[5px]">
            <label className="text-[16px] text-secondary" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full border-[1px] border-[#DAE0E7] py-[15px] px-[20px] rounded-[4px] register-input"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="text-[16px] text-secondary" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full border-[1px] border-[#DAE0E7] py-[15px] px-[20px] rounded-[4px] register-input"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="text-[16px] text-secondary" htmlFor="password">
              Your Password
            </label>
            <input
              className="w-full border-[1px] border-[#DAE0E7] py-[15px] px-[20px] rounded-[4px] register-input"
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              required={true}
            />
            {userErorr && <p className="text-red-500 text-sm">This email alraedy have an account *</p>}
          </div>
          <button
            type="submit"
            className="text-white uppercase text-center bg-primary rounded-[4px] py-[15px]"
          >
            Sign Up
          </button>
          <div className="divider divider-secondary text-secondary">
            Sign Up with social accounts
          </div>
          <div className="flex items-center justify-center gap-[25px]">
            <FcGoogle
              onClick={handleGoogle}
              className="text-[30px] cursor-pointer"
            />
            <FaGithub className="text-[30px] cursor-pointer" />
            <FaFacebook className="text-[30px] text-[#0866ff] cursor-pointer" />
          </div>
          <p className="text-center text-secondary">
            Already have an account yet?{" "}
            <Link className="text-primary">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
