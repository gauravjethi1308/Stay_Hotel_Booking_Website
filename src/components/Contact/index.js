import React from "react";
import "./index.css"
const Contact = () => {
  return (
    <section className="bg-contactimage bg-cover bg-center h-screen w-full  ">
      <div className=" w-full h-screen bg-amber-500/5 bg-opacity-50">
        <br></br>
        <div className=" flex-wrap  font-primaryType text-primaryFont md:flex flex-col place-items-center mt-14 ">
          <div>
            <h1 className=" text-3xl mt-44 md:text-7xl">PREMIUM SERVICES</h1>
          </div>
          <div>
            <p className="text-xs font-light  md:text-xl mt-6">
              We strive to provide our guests with luxury, comfort & tailor-made
              services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
