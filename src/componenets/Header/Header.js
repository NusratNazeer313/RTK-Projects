import React from 'react'
import image1 from '../../images/Wishlist.png'
import image2 from '../../images/Cart1.png'
import image3 from '../../images/Vector.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { searchTerm } from '../../Store/CartSlice';
const Header = () => {
    const CartProducts = useSelector(state => state.cart.cartProducts);
    const Favourit = useSelector(state => state.cart.favouriteProducts);
    const search = useSelector(state => state.cart.search);
    const dispatch = useDispatch();
    const searchItem = (items) => {
        dispatch(searchTerm(items))
        console.log('search', items)
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex font-Josefin flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-sm ">
                            <li>
                                <a href="#" className="block  pl-6 pr-4 text-black bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-black md:dark:text-black  text-bold text-xl font-mono" aria-current="page">EXCLUSIVE</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden w-full md:block md:w-auto w-20" id="navbar-default">
                        <ul className="font-medium flex font-Josefin flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-sm ">
                            <Link to={'/'}>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red-300 md:p-0 dark:text-black md:dark:hover:text-red-300 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">HOME</a>
                                </li>
                            </Link>
                            <Link to={"/products"}>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-300  md:p-0 dark:text-black md:dark:hover:text-red-300  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">PRODUCTS</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
                        <ul className="font-medium font-Josefin  flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-sm ">
                            <li>
                                <div className="my-2 relative ">
                                    <input id="password" placeholder="What are you looking for" className='mb-2 w-60 h-9 pl-2 bg-gray-100' value={search} onChange={(e) => searchItem(e.target.value)}
                                    />
                                    <span className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer text-black">  <img src={image3} className='md:dark:hover:text-red-300' /> </span>
                                </div>
                            </li>
                            <Link to={"/favourit"}>
                                <li className='mt-3'>
                                    <span className="absolute right-[-40] top-3"> {Favourit.length}</span>
                                    <img src={image1} className='md:dark:hover:text-red-300' />

                                </li>
                            </Link>
                            <Link to={"/addToCart"}>
                                <li className='mt-3'>
                                    <span className="absolute right-[-40] top-3"> {CartProducts.length}</span>
                                    <img src={image2} className='md:dark:hover:text-red-300' />

                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />

        </>
    )
}

export default Header;