/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import Banner from "../Common_Pages/Banner/Banner";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Brands from "./Brands";
import Footer from "../Common_Pages/Footer/Footer";
import Review from "../Common_Pages/Review/Review";
import TopProduct from "../Common_Pages/TopProduct/TopProduct";
const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-4xl font-extrabold text-gray-600 italic text-center mt-10 mb-10">Our Brands</h3>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-14"  >
                {
                    brands.map(abrand => <Brands key={brands.id}
                        brands={abrand}
                    ></Brands>)
                }
            </div>

            
                <TopProduct></TopProduct>

            
             
            <Review></Review>

            <Footer></Footer>
        </div>
    );
};

export default Home;