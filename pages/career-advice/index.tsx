import Head from "next/head";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import Image from "next/image";
import CareerAdviceItem from "@/components/CareerAdviceItem";


const CareerAdvice: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Browse Jobs</title>
      </Head>

      <div className="container mx-auto mb-5 px-10 min- lg:px-52 mt-14 my-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative"> {/* Removed border and added relative class */}
        <div className="grid grid-cols-1 border-b-2 mb-5 border-b-lightGrey pb-[30px]">
              <h1 className="text-[20px] font-TelkomLight leading-[32px] font-[300]">Get Career Advice</h1>
            </div>

          <div className="justify-content:center align-items:center mb-10 font-TelkomLight ">
            <CareerAdviceItem
                link="https://careeradvice.careers24.com/career-advice/career-growth/before-you-quit-key-considerations-for-a-graceful-exit-20240223"
                imageSrc="https://cdn.24.co.za/files/Cms/General/d/9499/7f2d48bde91c44298eda94c2c98e669f.jpg"
                imageAlt="Search Before You Quit: Key Considerations for a Graceful Exit"
                title="Search Before You Quit: Key Considerations for a Graceful Exit"
                description="Quitting a job is a significant decision that requires careful consideration and planning. By assessing your financial readiness, reflec..."
            />

          </div>

          

        </div>
      </div>

      </>
  );
};

export default CareerAdvice;
