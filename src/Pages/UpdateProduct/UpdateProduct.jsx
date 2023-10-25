import { useLoaderData } from "react-router-dom";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    
    const product = useLoaderData();
    const {_id,name,brand,type,price,rating,photo} = product;


    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = {name,brand,type,price,rating,photo}
        console.log(updatedProduct)

        // send to server 
        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'product updated',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-amber-700 p-24">
            <h2 className="text-2xl text-white text-center font-bold">Update a Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Product name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            defaultValue={name} placeholder="product name"
                                name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Brand Name</span>
                        </label>
                        
                        <select className="h-[46px]" name="brand" defaultValue={brand} id="brand">
                        <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Google">Google</option>
                            <option value="Sony">Sony</option>
                            <option value="Vivo">Vivo</option>
                            <option value="Huawei">Huawei</option>
                        </select>
                    </div>
                </div>
                {/* row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Type</span>
                        </label>


                        <select className="h-[46px]" name="type" defaultValue={type} id="type">
                        <option value="Smartphone">phone</option>
                            <option value="Laptop">laptop</option>
                            <option value="headphone">headphone</option>
                        </select>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* row */}
                <div className="md:flex">

                <div className="form-control md:md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white"> Rating</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={rating} type="text" name="rating" placeholder="Rating(must be a number 1-5)" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="">

                    
                </div>

                <input type="submit" value="Update" className="btn btn-block bg-gray-700 text-white mt-5 " />

            </form>
        </div>
        </div>
    );
};

export default UpdateProduct;