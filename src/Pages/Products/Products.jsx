import { useLoaderData, useParams } from "react-router-dom";
import Advertisement from "../Common_Pages/Advertisement/Advertisement";
import Navbar from "../Common_Pages/Navbar/Navbar";
import ProductCard from "./ProductCard";
import Footer from "../Common_Pages/Footer/Footer";
import { useEffect, useState } from "react";

const Products = () => {
    const [aBrand, setAbrand] = useState([]);
    const { brand } = useParams();
    const allProducts = useLoaderData();
    useEffect(() => {
        const findABrand = allProducts.filter(aBrand => aBrand.brand.toLowerCase() == brand.toLowerCase())
        setAbrand(findABrand)
        console.log(findABrand.length)
    }, [allProducts, brand])

    return (
        <div>
            <Navbar></Navbar>
            <Advertisement></Advertisement>

            {
                aBrand.length > 0 ? 
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-4 lg:mx-14">
                {
                    aBrand.map(product => <ProductCard key={product._id} aBrand={product}></ProductCard>)
                }
                </div> : 
                <div className=" flex flex-col items-center">
                <img src="https://i.ibb.co/H7BjrJ1/no-product-8316266-6632286.png" alt="" />
                <h3 className="text-amber-700 font-bold text-3xl">No products available</h3>
                </div>
            }
            

             



            <Footer></Footer>
        </div>
    );
};

export default Products;