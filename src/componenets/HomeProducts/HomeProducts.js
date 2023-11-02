import React, { useState } from "react";
import { items } from '../Items/Items';
import { Button } from "../Button";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
const HomeProducts = () => {
    const [view, setView] = useState(true);
    const search = useSelector(state => state.cart.search);
    const handleView = () => {
        setView(!view)
    };
    const displayedItems = view ? items.slice(0, 4) : items
    const searchItem = items.filter(item => item.title.includes(search));
    console.log()
    return (
        <>
            <div className="w-full h-screen">
                <section className='py-16'>
                    <div className='container mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-[18px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                            {
                                search ? searchItem.map(item => (
                                    <Card item={item} />
                                )) :
                                    displayedItems.map((item) => {
                                        return (

                                            <Card item={item} />
                                        );
                                    })
                            }
                        </div>
                    </div>
                </section>
                <div className=" w-full  flex justify-center items-center">
                    <Button
                        variant='danger'
                        size=" large"
                        className={'px-3 py-4'}
                        onClick={handleView}>
                        {view ? 'view all products' : 'Hide products'}
                    </Button>
                </div>

            </div>

        </>
    )
};
export default HomeProducts;