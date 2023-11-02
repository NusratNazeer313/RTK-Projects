import React from "react";
import { useDispatch } from "react-redux";
import { removeAll } from '../../Store/CartSlice'
const RemoveAll = () => {
    const dispatch = useDispatch();
    const removeTocart = () => {
        dispatch(removeAll());
    }
    return (
        <>
            <div className="flex items-center w-2/4 ">
                <a href="#" onClick={removeTocart} className=" w-2/5 flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    remove all
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </>
    )
};
export default RemoveAll;