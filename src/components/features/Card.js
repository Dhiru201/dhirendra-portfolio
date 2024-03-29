import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({title, des, icon}) => {
  return (
    <div className="w-full h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gredient-to-b hover:from-black hoveer:to-[#1e2024] transition-colors duration-100 group">
        <div className="h-72 overflow-y-hidden">
            <div className="flex h-full flex-col gap-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                    {/* <span className="text-5xl text-designColor">{icon}</span> */}
                        <img 
                            className="w-[50px] h-[50px]"
                            src={icon}
                            alt="icon"
                        />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
                    <p className="base">{des}</p>
                    <span className="text-2xl text-designColor">
                            <HiArrowRight />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card