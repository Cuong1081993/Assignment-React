import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../Data/Api";
import { IphoneAndMac, Wireless, Other, All } from "../Data/categories";
import classes from "./ProductList.module.css";

const Produclist = () => {
  const { data } = Api();
  const [type, setType] = useState("all");
  const [value, setValue] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const navigation = useNavigate();

  const handlerCategory = (item) => {
    setType(item.label);

    // reset default value when search and filter end.
    
    setValue("");
    setPriceFilter("");
  };

  const handlerMoveDetail = (id) => {
    navigation("/detail/" + id);
  };

  const handlerFilterProduct = (data) => {
    //lọc sản phẩm theo tìm kiếm của người dùng và mức chọn giá cả
    if (priceFilter !== "" && value !== "") {
      return data.filter(
        (item) =>
          parseInt(item.price) < parseInt(priceFilter) &&
          item.category.includes(value)
      );
    }

    if (value !== "") {
      // lọc sản phẩm theo tìm kiếm người dùng
      return data.filter((item) => item.category.includes(value));
    }

    // Lọc theo giá sản phẩm ở mức giá dưới của người dùng
    if (priceFilter !== "") {
      return data.filter(
        (item) => parseInt(item.price) < parseInt(priceFilter)
      );
    }

    if (type === "all") {
      return data;
    }
    // lọc danh sách sản phẩm tương ứng với danh mục
    return data.filter((item) => item.category === type);
  };

  return (
    <div className={classes.layout}>
      <section className={classes.banner}>
        <p>SHOP</p>
        <p>Shop</p>
      </section>
      <div className="container">
        <div className="row">
          {/* Categories */}
          <section className="col-3">
            <div className={classes.left}>
              <h2>CATEGORIES</h2>
              <div>
                <p className={classes.category_list_apple}>APPLE</p>
                {All.map((item, index) => (
                  <div className={classes.list__title} key={index}>
                    <ul>
                      <li
                        style={type === item.label ? { color: "#8224e3" } : {}}
                        onClick={() => {
                          handlerCategory(item);
                        }}
                      >
                        {item.title}
                      </li>
                    </ul>
                  </div>
                ))}
                <p className={classes.category_list}>IPHONE & MAC</p>
                {IphoneAndMac.map((item, index) => (
                  <ul key={index}>
                    <li
                      style={type === item.label ? { color: "#8224e3" } : {}}
                      onClick={() => {
                        handlerCategory(item);
                      }}
                    >
                      {item.title}
                    </li>
                  </ul>
                ))}
                <p className={classes.category_list}>WIRELESS</p>
                {Wireless.map((item, index) => (
                  <ul key={index}>
                    <li
                      style={type === item.label ? { color: "#8224e3" } : {}}
                      onClick={() => {
                        handlerCategory(item);
                      }}
                    >
                      {item.title}
                    </li>
                  </ul>
                ))}
                <p className={classes.category_list}>Other</p>
                {Other.map((item, index) => (
                  <ul key={index}>
                    <li
                      style={type === item.label ? { color: "#8224e3" } : {}}
                      onClick={() => {
                        handlerCategory(item);
                      }}
                    >
                      {item.title}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </section>
          {/* Products List */}
          <section className="col-9">
            {/* Search and Filter */}
            <div className={classes.search}>
              <input
                placeholder="Enter search ...."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="9999999" selected>
                    Default sorting
                  </option>
                  <option value="1000000">Dưới 1,000,000</option>
                  <option value="5000000">Dưới 5,000,000</option>
                  <option value="8000000">Dưới 8,000,000</option>
                  <option value="15000000">Dưới 15,000,000</option>
                  <option value="20000000">Dưới 20,000,000</option>
                  <option value="100000000">Dưới 100,000,000</option>
                </select>
              </div>
            </div>

            {/* Show product with category */}
            <section className={classes.list}>
              {handlerFilterProduct(data).map((item, index) => (
                <ul key={index}>
                  <li>
                    <img
                      className={classes.imgTopTrending}
                      src={item.img1}
                      alt="img_product"
                      onClick={() => handlerMoveDetail(item._id.$oid)}
                    />
                    <div className={classes.information}>
                      <p>{item.name}</p>
                      <p>{parseInt(item.price).toLocaleString()} VNĐ</p>
                    </div>
                  </li>
                </ul>
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Produclist;
