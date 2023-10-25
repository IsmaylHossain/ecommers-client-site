
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item  relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/Wn730LJ/desk-workspace-with-various-elements.jpg
" className="w-full " />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                

            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/MNLJMFc/top-view-mandala-concept.jpg
" className="w-full" />



                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[800px]">
                <img src="https://i.ibb.co/rxLCKrL/cover2.jpg
" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;