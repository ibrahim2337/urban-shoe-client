import "./Banner.css";

const Banner = () => {
    return (
        <div className="image1 flex items-center justify-center py-20">
      <div className="text-center">
        <h3 className=" text-white font-bold text-5xl pb-5">
          Academy of sport
        </h3>

        <h1 className=" text-white font-extrabold text-6xl pb-5">
          SPORTS CENTER URBAN SHOE
        </h1>

        <p className="text-white font-bold text-2xl pb-10">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <button className="text-white py-2 px-5 text-center border border-white ">
          Read more
        </button>
      </div>
    </div>
    );
};

export default Banner;