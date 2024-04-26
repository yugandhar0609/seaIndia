import img1 from "../assets/Bg.jpeg";
import "../Components/css/Home.css"
const Home = () => {
  return (
    <>
     
      <div className="relative object-cover">
        <img className="object-cover"
          src={img1}
          alt="background"
          style={{ width: "100%", height: "668px" }}
        />
        <div className="overlay-text">
          <p>SEAINDIA FREIGHT SYSTEM PRIVATE LIMITED</p>
          <p className="sub-text">Shipping, Clearing and Forwarding Agents</p>
        </div>
      </div>
    </>
  );
};
export default Home;
