import logo from "../../assets/logo/Screenshot_2024-05-27_212117-removebg-preview.png";

const Footer = () => {
    return (
        <div>
           <div className="grid lg:grid-cols-3 justify-center items-center gap-5 py-10 bg-slate-800 text-center">
        <div className="text-white">
          <h1 className=" text-xl font-bold mt-5">Address</h1>
          <p className="pt-5 text-sm lg:px-20 px-5">
            98/2, Vista Garden, Shenpara Parbata, Mirpur-10, Dhaka, Bangladesh
          </p>
        </div>
        <div className="text-white flex-col justify-center items-center">
          <div className="flex justify-center items-center">
          <img className="w-[100px] items-center" src={logo} alt="" />
          </div>
          
          <p className="pt-1 text-sm lg:px-20 px-5">
            Save your favorite pair of shoes by letting our professionals bring
            them back to life.
          </p>
        </div>

        <div className="text-white">
          <h1 className=" text-xl font-bold mt-5">Phone & Email</h1>
          <p className="pt-5 text-sm">urbanshoe2050@.com</p>
          <p className=" text-sm">(800) 1748 907164</p>
        </div>
      </div>
      <div className="text-center bg-slate-950 py-2">
        <h1 className="text-white">© 2024. All Rights Reserved. MD.Ibrahim Khalilullah</h1>
      </div>
        </div>
    );
};

export default Footer;