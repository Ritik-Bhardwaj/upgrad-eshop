import { Fragment, useContext, useEffect, useState } from "react";
import NavigationBar from "../../common/NavBar/NavBar";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { AuthContext } from "../../common/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

//Toasts
import { ErrorToast, SuccessToast } from "../../common/Toasts/Toasts";

import "./Products.css";
import { ToastContainer } from "react-toastify";

function Products() {
  const { authToken, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const triggerDataFetch = () => {
    // if (authToken !== null) {
    if (localStorage.getItem('token') !== null) {
      axios
        .get("http://localhost:8080/api/products/categories", {
          headers: {
            "x-auth-token": `${authToken}`,
          },
        })
        .then(function (response) {
          setCategoryList(response.data);
        })
        .catch(function () {
          ErrorToast(
            "Error: There was an issue in retrieving categories list."
          );
        });
      axios
        .get("http://localhost:8080/api/products", {
          headers: {
            "x-auth-token": `${authToken}`,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            setOriginalData(response.data);
            setData(response.data);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    triggerDataFetch();
    
  }, []);

  const handleCategoryChange = (event, newCategory) => {
    const newData =
      newCategory === "all"
        ? originalData
        : originalData.filter((item) => item.category === newCategory);
    setCategory(newCategory);
    setData(newData);
  };

  const handleSortChange = (event) => {
    const keyString = event.target.value;
    const temp = [...originalData];
    if (keyString !== "default") {
      setData(
        temp.sort((a, b) =>
          keyString === "lth" ? a.price - b.price : b.price - a.price
        )
      );
    } else {
      setData(temp);
    }
    setSortBy(keyString);
  };

  const handleSearchChange = (event) => {
    const newData = originalData.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(newData);
    setSearchTerm(event.target.value);
  };

  const handleDeleteCall = (id,name) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`, {
        headers: {
          "x-auth-token": `${authToken}`,
        },
      })
      .then(function () {
        SuccessToast(`Product ${name} successfully deleted`);
        triggerDataFetch();
      })
      .catch(function (error) {
        ErrorToast(
          `Error: There was an issue in deleting product, please try again later.`
        );
      });
  };
  return (
    <Fragment>
      <NavigationBar
        isLogged={authToken !== null}
        isAdmin={isAdmin}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {originalData.length > 0 ? (
        <div className="productsContainer">
          <div className="categorySectionStyle">
            <ToggleButtonGroup
              color="primary"
              value={category}
              exclusive
              onChange={handleCategoryChange}
              aria-label="Category"
            >
              <ToggleButton key="all" value="all">
                ALL
              </ToggleButton>
              {categoryList.map((category) => (
                <ToggleButton key={category} value={category}>
                  {category.toUpperCase()}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>

          <div>
            <FormControl className="sortByDropdown">
              <InputLabel id="sort-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"default"}>Default</MenuItem>
                <MenuItem value={"htl"}>Price: High to Low</MenuItem>
                <MenuItem value={"lth"}>Price: Low to High</MenuItem>
                <MenuItem value={"nth"}>New Item</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Grid container spacing={5} style={{ margin: "10px 0" }}>
            {data.map((item) => (
              <ProductCard
                key={item.id}
                productData={item}
                isAdmin={isAdmin}
                handleDeleteCall={() => handleDeleteCall(item.id,item.name)}
                navigate={navigate}
              />
            ))}
          </Grid>
          <ToastContainer />
        </div>
      ) : (
        <Typography gutterBottom variant="body1" component="p">
          There are no products available.
        </Typography>
      )}
    </Fragment>
    
  );
}

export default Products;
