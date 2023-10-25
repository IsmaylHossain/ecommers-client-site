/* eslint-disable no-unused-vars */
import Navbar from "../Common_Pages/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext)
 
    const [cartProducts,setCartProducts] = useState([])
    const [products, setProducts] = useState(cartProducts)
     

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log("this is data",data)
            setCartProducts(data)
        })
         
    }, [ user.email])


 

    const handleCartDelete = id => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your product has been removed.',
                        'success'
                    )
                    .then((result) => {
                        console.log(result)
                    })
                    const remainingProduct = cartProducts.filter(product => product._id !== id)
                    setCartProducts(remainingProduct)
                }
            })
    }



    return (
        <div>
            <Navbar></Navbar>      
                <div className="overflow-x-auto ">
                <table className="table">
                    

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            cartProducts.map(product => <tr key={product._id}>
                                <th>#</th>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleCartDelete(product._id)} className="text-red-500 underline font-semibold">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> 


        </div>
    );
};

export default MyCart;