import NavBar from "../../components/Navbar/NavBar";
import Subcribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import InformationHotel from "../../components/InformationHotel/InformationHotel";
const Detail = () => {
  return (
    <>
      <div className="home">
        <header>
          <NavBar />
        </header>
        <div className="container">
          <InformationHotel />
        </div>
        <Subcribe />
        <Footer />
      </div>
    </>
  );
};

export default Detail;
