import React from "react";
import image1 from '../../images/Frame 563.png';
import image2 from '../../images/Hero.png';
import image3 from '../../images/arrow.png';
const Banner = () => {
    return (
        <>

            <div className=" grid grid-cols-3 h-auto w-auto text-white py-24 px-10 object-fill bg-black">
                <div className="md:w-full">
                    <img src={image1} className="pb-5" />
                    <p className="font-bold text-7xl pb-5">UP to 10%  off Voucher </p>
                    <a href="#" className=" pt-10 text-white font-bold uppercase text-xs rounded w-full flex">Shop Now <img src={image3} className="ml-2" /></a>
                </div>
                <div className="md:w-full ">
                    <img src={image2} className="w-full" />
                </div>
            </div>

        </>
    )
};

export default Banner;
