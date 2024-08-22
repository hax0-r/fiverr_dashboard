import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="flex justify-center min-h-screen items-center overflow-hidden">
        <div className="max-w-[50%] hidden md:block relative">
          <img src="./Assets/Global/logo.svg" className='absolute top-8 left-6 h-7 z-10' alt="image" />
          <p className='absolute bottom-8 left-6 text-white z-10 max-w-xl text-sm'>StayUKM has saved me countless hours managing properties and has made it easier than ever to handle bookings, payments, and maintenance, all in one place.</p>
          <img src="./Assets/Login/img.webp" alt="Login Image" className="h-screen object-cover brightness-50" />
        </div>
        <form className='md:max-w-[50%] px-6 w-full'>
          <div className="max-w-[373px] mx-auto w-full">
            <h2 className='text-center text-2xl text-heading font-semibold pb-2'>Welcome Back 👋</h2>
            <p className='text-center pb-8 text-para'>Please sign in to continue!</p>
            <Label htmlFor="email" className="font-semibold" >Email</Label>
            <Input
              type="email"
              placeholder="Ex: your@email.com"
              id="email"
              className="placeholder-[#94A3B8] border-[1.5px] mt-1 mb-4 border-[#cbd5e1] focus:border-zinc-400 transition-all focus:outline-none"
            />
            <Label htmlFor="password" className="font-semibold" >Your Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Your Password"
                id="password"
                className="placeholder-[#94A3B8] border-[1.5px] mt-1 mb-5 border-[#cbd5e1] focus:border-zinc-400 transition-all focus:outline-none pr-10" // Added padding for the icon
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
               <img src="./Assets/Login/hidePassword.svg" alt="" />
              </div>
            </div>
            <Button className="w-full bg-blue hover:bg-darkBlue">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
