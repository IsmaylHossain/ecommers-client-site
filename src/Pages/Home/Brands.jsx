/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brands = ({brands}) => {
    const {brand,brand_logo} = brands
    return (
        <Link to={`/products/${brand}`}>
        <div className="card h-96 pt-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={brand_logo} alt="photo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title flex-grow">{brand}</h2>
                
            </div>
        </div>
        </Link>
    );
};

export default Brands;