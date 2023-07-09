import NavBar from "../../components/Navbar/NavBar";
import City from "../../components/City/City";
import "./Home.css";
import Category from "../../components/Category/Category";
const Home = () => {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>

      <div className="body-content">
        <City />
        
        <Category/>
      </div>
    </div>
  );
};

export default Home;
