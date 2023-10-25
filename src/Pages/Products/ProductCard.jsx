/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ aBrand }) => {
    const { _id, name, brand, type, price, details, rating, photo } = aBrand || {}
    return (
        <div >
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className="h-[200px] md:h-[250px] w-full" src={photo} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand:{brand}</p>
                    <p>Category:{type}</p>
                    <p>Price:{price}$</p>
                    <p>Details:{details}</p>
                    <p>Rating:{rating}/5</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-amber-700 text-white hover:text-amber-700">view details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn bg-amber-700 text-white  hover:text-amber-700">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;