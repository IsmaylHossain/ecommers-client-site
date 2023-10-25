const TopProduct = () => {

    return (
        <div>
            <h3 className="text-4xl font-extrabold text-gray-600 italic text-center mt-10 mb-10">TOP PRODUCTS</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-14 mt-8" >

         <div className="card h-96 pt-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/MpS2RWw/iphone-13-p1.jpg" alt="photo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title flex-grow">i Phone</h2>
                
            </div>
        </div>

        <div className="card h-96 pt-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/N95TMd1/samsunglaptop.jpg" alt="photo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title flex-grow">Samsung Laptop</h2>
                
            </div>
        </div>

        <div className="card h-96 pt-10 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/VWGmvFL/levitating-product-display-with-headphones.jpg" alt="photo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title flex-grow">Huawei HeadPhone</h2>
                
            </div>
        </div>
    </div>
        </div>
        
    
    );
};

export default TopProduct;