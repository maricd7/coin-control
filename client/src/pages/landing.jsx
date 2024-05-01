import React from "react";
import CtaButton from "../components/common/Buttons/Cta/CtaButton";
import landingIcon from '../images/landing.png'
import { useNavigate } from "react-router-dom";
function Landing() {

    const navigate = useNavigate()

    //navigate to login 
    function navigateLogin(){
        navigate('/login')
    }
    
    //navigate to signup
    function navigateSignUp(){
        navigate('/signup')
    }


    return (
    <div className="mx-72 flex justify-center items-center h-screen gap-32 ">
      <div className="max-w-1/2 gap-8 flex flex-col">
        <h1 className="text-white font-bold text-6xl">
          Welcome to CoinControl
        </h1>
        <p className="text-gray-400 text-xl max-w-1/4">
          Welcome to CoinControl, your go-to app for mastering your budget.
          Effortlessly track expenses, set budgets, and achieve financial goals
          with ease. Take control of your finances and say hello to a brighter
          financial future. Get started today!
        </p>
        <div className="flex gap-4">
          <CtaButton onClick={navigateLogin} type="button" text="Login" />
          <CtaButton onClick={navigateSignUp} type="button" text="Sign Up" />
        </div>
        
      </div>
      <img src={landingIcon} alt='money-icon' className='w-160 h-160 right-6 top-1/2 '/> 
    </div>
  );
}

export default Landing;
