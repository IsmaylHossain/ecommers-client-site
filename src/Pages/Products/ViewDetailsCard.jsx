/* eslint-disable react/prop-types */
import { useContext,   } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const ViewDetailsCard = ({ product }) => {
    const {user} = useContext(AuthContext)
    const { name,brand,price,details,photo } = product || {}

    // const [cart,setCart] = useState();
    // const {email} = useParams();
    // const cartProducts = useLoaderData();
    // useEffect(()=>{
    //     const findCartByEmail = cartProducts.filter(cart => cart.email == email)
    //     setCart(findCartByEmail);
    //     console.log(findCartByEmail)
    // },[cartProducts, email])


    const handleCart = () =>{
        // const form = e.target
        // const name = form.name.name;
        // const brand = form.brand;
        // const type = form.type;
        // const price = form.price;
        // const details = form.details;
        // const rating = form.rating;
        // const photo = form.photo;

        const cartProduct = {user,name,brand,price,details,photo}
        console.log(cartProduct)

        // send to server 
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'product added to cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content gap-10 flex-col lg:flex-row p-10">
                    <img src={photo} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-2">Brand : {brand}</p>
                        <p className="py-2">Details : {details}</p>
                        <p className="py-2">Brand : {brand}</p>
                        <p className="py-2">Price : {price}$</p>
                       <button onClick={handleCart} className="btn bg-amber-700 text-white">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsCard;