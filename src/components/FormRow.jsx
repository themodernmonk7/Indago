import React from "react"
import GirlImage from "../assets/girlForm.png"

const FormRow = () => {
  return (
    <>
      <section className="md:mx-8 my-10 flex justify-start items-center ">
        <div className="flex justify-center items-center">
          <div className="space-y-4 xl:border-2 px-4 xl:px-8 py-6 rounded-xl xl:shadow-xl  xl:w-1/2">
            <h2 className="text-3xl text-center font-medium text-gray-700">
              Job Details
            </h2>
            <form className=" space-y-8 grid grid-cols-2 gap-x-4 md:gap-x-10 ">
              {/* Job title / Position / Department */}
              <div className=" space-y-2 col-span-2 ">
                <label className="text-lg font-medium text-gray-700">
                  Job title
                </label>
                <input
                  type="text"
                  className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                  placeholder="E.g: UI/UX Designer"
                />
              </div>

              {/* Company */}
              <div className=" space-y-2  ">
                <label className="text-lg font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                  placeholder="Designer"
                />
              </div>

              {/* Job type */}
              <div className=" space-y-2  ">
                <label className="text-lg font-medium text-gray-700">
                  Job Type
                </label>
                <select
                  name=""
                  id=""
                  className=" rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border capitalize text-gray-400 w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                >
                  <option value="full-time">full-time</option>
                  <option value="part-time">part-time</option>
                  <option value="internship">internship</option>
                </select>
              </div>

              {/* Job Status */}
              <div className=" space-y-2  ">
                <label className="text-lg font-medium text-gray-700">
                  Job Status
                </label>
                <select
                  name=""
                  id=""
                  className=" rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border capitalize text-gray-400 w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200 "
                >
                  <option value="interview">interview</option>
                  <option value="declined">declined</option>
                  <option value="pending">pending</option>
                </select>
              </div>

              {/* Job Location */}
              <div className=" space-y-2  ">
                <label className="text-lg font-medium text-gray-700">
                  Job Location
                </label>
                <input
                  type="text"
                  className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                  placeholder="Job Location"
                />
              </div>

              {/* JOb Description */}
              <div className="space-y-2 col-span-2 ">
                <label className="text-lg font-medium text-gray-700">
                  Job Description
                </label>
                <textarea
                  name=""
                  id=""
                  cols="200"
                  rows="3"
                  className="resize-none rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border w-full py-4 hover:border-gray-200 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                ></textarea>
              </div>
            </form>

            <div className="mt-5 space-x-6 flex flex-row justify-between items-center ">
              <button className="border border-transparent  bg-primary text-white px-4 py-2 font-medium hover:bg-primary/80 rounded-md w-1/2">
                Submit
              </button>
              <button className="border border-gray-300 font-medium px-4 py-2 rounded-md w-1/2 hover:bg-gray-100/50 ">
                Clear
              </button>
            </div>
          </div>
          {/* <img src={GirlImage} alt="" className="w-1/2 bg-red- scale-90" /> */}
        </div>
      </section>
    </>
  )
}

export default FormRow