import NavBar from "../../components/Navbar/NavBar";
import SearchList from "../../components/SearchList/SearchList";
import SearchPopup from "../../components/SearchPopup/SearchPopup";
import "./Search.css";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";

const Search = () => {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <div className="container">
        <div className="search-page">
          <SearchPopup />
          <SearchList />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Search;
