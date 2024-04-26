import img1 from "../assets/Bg.jpeg";
import "../Components/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="relative object-cover">
        <img
          src={img1}
          alt="background"
          className=" w-full h-[450px] md:h-[668px]"
        />
        <div className=" absolute overlay-text mobile">
          <p>SEAINDIA FREIGHT SYSTEM PRIVATE LIMITED</p>
          <p className="sub-text mobile">
            Shipping, Clearing and Forwarding Agents
          </p>
  
        </div>
      </div>
    </>
  );
};

export default Home;
