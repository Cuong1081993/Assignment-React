import NavBar from "../../components/Navbar/NavBar";
import City from "../../components/City/City";
import "./Home.css";
import Type from "../../components/Type/Type";
import Hotel from "../../components/Hotel/Hotel";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <div className="body-content">
        <City />
        <Type />
        <Hotel />
       
      </div>
      <Subscribe />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
