import React, { useState } from "react";
import Header from "../../componenets/Header/Header";
import Banner from "../../componenets/Banner/Banner";
import HomeProducts from "../../componenets/HomeProducts/HomeProducts";

const HomePage = () => {
    // const [search, setSearch] = useState('')
    return (
        <>
            <Header
            // search={search} setSearch={setSearch} 
            />
            <Banner />
            <HomeProducts
            // search={search}
            />
        </>
    )
};
export default HomePage;