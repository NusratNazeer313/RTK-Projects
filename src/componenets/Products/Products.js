import React from "react";
import { items } from '../Items/Items';
import { useDispatch } from "react-redux";
import { moveAll } from '../../Store/CartSlice'
import { Button } from "../Button";
import Card from "../Card/Card";
const Products = () => {
    const dispatch = useDispatch();
    const addAllToCart = () => {
        dispatch(moveAll(items))
    }

    return (
        <>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <h1>Total Products (8) </h1>
                <div class="flex md:order-2">
                    <Button type="button"
                        variant=" naked"
                        size="large"
                        className="text-black font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 "
                        onClick={addAllToCart}
                    >Move all to Cart</Button>
                </div>

            </div>
            <div className="w-full h-screen">
                <section className='py-4'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-[18px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                            {items.map((item) => {
                                return (
                                    <Card show={true} item={item} />
                                );
                            })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};
export default Products;