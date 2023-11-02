import React from "react";
import image from '../../images/cart.png';
import image1 from '../../images/heart.png';
import { useDispatch } from "react-redux";
import { add, addFavourit } from '../../Store/CartSlice'
const Card = ({ show, item }) => {
    const dispatch = useDispatch();
    const addToCart = (items) => {
        dispatch(add(items))
        console.log('addToCart', items)
    }
    const addToFav = (item) => {
        dispatch(addFavourit(item))
        console.log('addToCart', item)
    }

    return (
        <>
            <div className='flex flex-col' key={item.id}>
                <div className='w-full h-[200px]   border-gray-500 relative overflow-hidden group transition'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className=' relative w-full h-full  mx-auto flex justify-center items-center bg-gray-50 '>
                            <img src={item.image} />
                            <div style={{ position: 'absolute', top: '0', right: '5px' }}>
                                <img src={image1} onClick={() => addToFav(item)} />
                            </div>
                        </div>
                    </div>
                </div>
                {show ? <div onClick={() => addToCart(item)} className="bg-black justify-center flex items-center text-center py-2">
                    <img src={image} className='md:dark:hover:text-red-300 px-2' />
                    <span className=" mt-2 mr-3 cursor-pointer text-white flex"> Add to Cart</span>
                </div> : <></>}

                <div>

                    <div className='font-semibold mb-1'>{item.title}</div>

                    <div className='font-semibold text-red-700'>${item.newPrice}</div>
                </div>
            </div>



        </>
    )
};
export default Card;