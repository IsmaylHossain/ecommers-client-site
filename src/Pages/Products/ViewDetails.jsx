import { useEffect, useState } from "react";
import Navbar from "../Common_Pages/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import ViewDetailsCard from "./ViewDetailsCard";



const ViewDetails = () => {
    const [product,setProduct] = useState();
    const {_id} = useParams();
    const allDetails = useLoaderData();
    useEffect(()=>{
        const findDetails = allDetails.find(product => product._id == _id);
        setProduct(findDetails)
    },[_id,allDetails])
    console.log("p id",product)
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <ViewDetailsCard product = {product}></ViewDetailsCard>
            </div>
            
        </div>
    );
};

export default ViewDetails;