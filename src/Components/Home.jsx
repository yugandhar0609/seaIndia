import img1 from "../assets/Bg.jpeg";
import image from "../assets/choose.jpeg";
import "../Components/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="relative object-cover">
        <img
          src={img1}
          alt="background"
          className=" w-full h-[450px] md:h-[490px]"
        />
        <div className=" absolute overlay-text mobile">
          <p>SEAINDIA FREIGHT SYSTEM PRIVATE LIMITED</p>
          <p className="sub-text mobile">
            Shipping, Clearing and Forwarding Agents
          </p>
        </div>
      </div>
      <div className="mt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <p className=" title text-center text-3xl font-extrabold text-orange-500">
          Welcome to SEAINDIA Freight System Private Limited!
        </p>
        <p className="mt-10 text-lg">
          At <b className="text-xl text-orange-500">SEAINDIA</b> Freight System
          Private Limited, we stand as a stalwart fortress, guarding your
          shipping needs with unwavering dedication and expertise. With years of
          experience and a deep understanding of the intricacies of the shipping
          industry, we provide you and your cargo with a distinct advantage in
          the competitive market landscape.
        </p>
        <p className="mt-10 text-lg">
          Just as the verse from Deuteronomy 1:11 implores, we too pray for
          abundant blessings and prosperity for our esteemed customers and
          ourselves. May the Lord, the God of your fathers, multiply your
          success a thousandfold and bestow upon you the blessings He has
          promised.
        </p>
        <p className="mt-10 text-lg">
          In every shipment we handle, we strive to embody the spirit of
          excellence and integrity, ensuring that your goods reach their
          destination safely and efficiently. With our comprehensive range of
          services encompassing shipping, clearing, and forwarding, we offer a
          seamless solution tailored to meet your specific requirements.
        </p>
        <p className="mt-10 text-lg">
          As your trusted partner in logistics, we are committed to going above
          and beyond to exceed your expectations. Whether you're navigating the
          complexities of international trade or seeking reliable transportation
          solutions, you can rely on SEAINDIA Freight System Private Limited to
          deliver results that propel your business forward.
        </p>
        <p className="mt-10 text-lg">
          With gratitude for the trust you place in us and a steadfast
          commitment to your success, we look forward to continuing our journey
          together, guided by faith and fueled by dedication.
        </p>
      </div>
      <div className="relative">
        <img
          src={image}
          alt="background"
          className="w-full md:h-[400px] object-cover opacity-80"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-extrabold text-black">
            We Provide
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-black">
            THE BEST SEA FREIGHT SYSTEMS
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500">
            For Book Your Shipping From Any Country
          </p>
          <button className="mt-3 bg-orange-500 font-bold text-white text-lg rounded-3xl p-2 md:mt-10 hover:bg-orange-600 hover:border hover:border-white">
            Contact With Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
