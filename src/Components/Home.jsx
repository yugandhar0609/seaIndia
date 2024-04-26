import img1 from "../assets/Bg.jpeg";
import "../Components/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="relative object-cover">
        <img
          src={img1}
          alt="background"
          className="responsive-image w-full h-[668px] object-cover" 
          // style={{width:"100%",height:"668px"}}
        />
        <div className="overlay-text mobile"> {/* Added "mobile" class for mobile devices */}
          <p>SEAINDIA FREIGHT SYSTEM PRIVATE LIMITED</p>
          <p className="sub-text mobile">Shipping, Clearing and Forwarding Agents</p>
        </div>
      </div>
    </>
  );
};

export default Home;
