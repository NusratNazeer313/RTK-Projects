
import { useSelector, useDispatch } from "react-redux";
import { remove } from '../../Store/CartSlice'
import Header from "../Header/Header";
import CartItems from "../../Pages/CartItems";
import { Button } from "../../componenets/Button";
import { Link } from "react-router-dom";
import { removeAll } from '../../Store/CartSlice'
const AddToCart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch();
    const removeTocart = (id) => {
        dispatch(remove(id))
    }

    const removeAllTocart = () => {
        dispatch(removeAll());
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
                        <div class="flex md:order-2">
                            <Link to={"/products"}>
                                <Button type="button"
                                    variant=" naked"
                                    size="large"
                                    className="text-black font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 "
                                >Return to Products</Button>
                            </Link>
                        </div>
                        <Button type="button"
                            variant=" naked"
                            size="large"
                            className="text-black font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 "
                            onClick={removeAllTocart}
                        >Remove All </Button>
                    </div>
                </table>

            </div>
        </>


    )
};
export default AddToCart;