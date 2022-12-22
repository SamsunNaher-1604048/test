import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const Main = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-teal-400 to-teal-900 flex justify-center items-center">
      <div className="h-5/6 w-3/5 bg-white rounded-xl flex flex-row">
        <div className="bg-[url('../public/1.jpg')] w-3/6 h-full bg-cover rounded-l-xl">
          <div className="text-white flex justify-between p-3 text-lg bg-opacity-60 ">
            <p>Photography</p>
            <AiOutlineMenu />
          </div>
          <div className=" mt-24 text-white text-center">
            <p className="font-thin tracking-widest ">CLICK FOR YOUR SHOOT</p>
            <p className="text-3xl font-bold">Photography.</p>
          </div>
          <div className="text-white text-center font-thin mt-72 tracking-widest">
            <p>JOURNY EVERYWHERE</p>
          </div>
        </div>
        <div className=" w-4/6">
          <div className=" text-center mt-10">
            <p className="text-3xl font-extrabold text-teal-600">Registation</p>
            <p className="text-sm font-thin tracking-widest">
              CLICK FOR YOUR SHOOT
            </p>
          </div>
          <div className="pl-16" >
            <div className="flex flex-col  mt-8">
              <label  className="hover:text-teal-600">
                Name:
                <input
                  className="ml-[60px] h-8 w-72 bg-gray-100 outline-none p-3"
                  type="text"
                  name="name"
                />
              </label>

              <label className="mt-5 hover:text-teal-600">
                Email:
                <input
                  className="ml-[63px] h-8 w-72 bg-gray-100 outline-none p-3"
                  type="text"
                  name="Email"
                />
              </label>

              <label className="mt-5 flex   hover:text-teal-600">
                Gerder:
                <button className="ml-14 mr-9 flex">
                  <div className="p-2 rounded-full bg-black text-white hover:bg-teal-600 hover:text-white">
                    <BsGenderMale />
                  </div>
                  <p className="ml-2 text-black">Male</p>
                </button>
                <button className=" flex">
                  <div className="p-2 rounded-full bg-black text-white hover:bg-teal-600 hover:text-white">
                    <BsGenderFemale />
                  </div>
                  <p className="ml-2 text-black">Female</p>
                </button>
              </label>

              <label className="mt-5 hover:text-teal-600">
                Date of Brith:
                <input
                  className=" ml-[10px] h-8 w-72 bg-gray-100 outline-none p-3"
                  type="text"
                  name="Date of Brith"
                />
              </label>

              <label className="mt-5 hover:text-teal-600">
                City:
                <input
                  className=" ml-[70px] h-8 w-72 bg-gray-100 outline-none p-3"
                  type="text"
                  name="City"
                />
              </label>

              <label className="mt-5 hover:text-teal-600">
              Country:
                <input
                  className=" ml-[40px] h-8 w-72 bg-gray-100 outline-none p-3"
                  type="text"
                  name="Country"
                />
              </label>

              <lable className='flex mt-6 text-black hover:text-teal-600'>
                Subscription:
                <div className="ml-[40px] space-x-9">
                  <button className=" text-black hover:text-teal-600">Bronze</button>
                  <button className="  text-black hover:text-teal-600">Silver</button>
                  <button className="  text-black hover:text-teal-600">Gold</button>
                </div>
              </lable>

              <div className="flex justify-end mr-20 mt-6 space-x-4" >
                <button className="px-10 py-2 border bg-indigo-900 text-white text-xs">CANCLE</button>
                <button className="px-8 py-2 border bg-teal-600 text-white text-xs">CONFARM</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
