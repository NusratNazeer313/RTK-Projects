import React from "react";
import image from "../../images/delet.jpg"
const CartItems = ({ items, removeTocart }) => {
    return (
        <>
            <tbody className="w-2/4">
                <tr className="text-md text-gray-700 uppercase bg-gray-50  dark:text-gray-400 border border-gray-200 mb-10">
                    <th scope="row" className="  w-10  pl-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={items.image} className="w-20" />
                    </th>
                    <td className="w-10  text-md pl-6">
                        {items.newPrice}
                    </td>
                    <td className="w-10  text-md pl-8">
                        1
                    </td>
                    <td className="w-10  text-md pl-6">
                        $ 456
                    </td>
                    <td className="w-10  text-md pl-6">
                        <img src={image} onClick={() => removeTocart(items.id)} className="w-4" />
                    </td>
                </tr>
            </tbody>


        </>
    )
};
export default CartItems;