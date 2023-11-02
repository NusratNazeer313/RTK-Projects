import { useSelector, useDispatch } from "react-redux";
import Header from "../../componenets/Header/Header";
import CartItems from "../../Pages/CartItems";
import { remove } from '../../Store/CartSlice'
import RemoveAll from "../../componenets/RemoveAll/RemoveAll";
const AddToFavourit = () => {
    const cartProducts = useSelector(state => state.cart.favouriteProducts)
    const dispatch = useDispatch();
    const removeTocart = (id) => {
        dispatch(remove(id))
    }
    return (
        <>
            <Header />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex items-center justify-center ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 w-4/5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 items-start justify-start text-md">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 items-center justify-center text-md">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 items-center justify-center text-md">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 items-end justify-end text-md">
                                Sub Total
                            </th>

                        </tr>
                    </thead>
                    {cartProducts.map((items) => {
                        return (
                            <CartItems items={items} removeTocart={removeTocart} />
                        )
                    })}
                    <div className="flex w-full">
                        <RemoveAll className="flex justify-start " />
                        <RemoveAll className="flex justify-end" />
                    </div>

                </table>

            </div>
        </>


    )
};
export default AddToFavourit;