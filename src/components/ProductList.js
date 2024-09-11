import React, { useState, useEffect } from "react";
import { getProducts } from "../services/product.service";
import { useGlobalState } from "../GlobalProvider";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCardSkeleton from "./ProductCardSkeleton";
function ProductList() {
  const { setGlobalState, globalState } = useGlobalState();
  const [searchKey, setSearchKey] = useState("");
  const params = useParams();
  const [activeCat, setActiveCat] = useState(
    params.category ? params.category : ""
  );
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [productListArr, setProductListArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProductList = async (category) => {
    setIsLoading(true);
    try {
      let query = {
        title: {
          $regex: ".*" + searchKey + ".*",
          $options: "i",
        },
        category: {
          $regex: ".*" + category + ".*",
        },
      };
      // let pageItem = pageNo * 10 - 10;
      let response = await getProducts({ query });
      if (response.status == 200) {
        setProductListArr(response?.data?.data);
        setGlobalState({ ...globalState, productList: response?.data?.data });
        setIsLoading(false);
      }
    } catch (error) {
      // toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    setActiveCat(params.category);
    getProductList(params.category ? params?.category : "");
  }, [activeCat, searchKey, params.category]);
  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>
            Check Our <span>Organic Collection</span>
          </p>
        </div>
        <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
          <div className="tab-pane fade active show" id="#Home-Linen">
            <div className="my-5 d-flex justify-content-center">
              <input
                className="form-control width50-100"
                placeholder="Seach Product"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <i
                className="fa fa-search"
                style={{ position: "relative", top: "10px", right: "30px" }}
              ></i>
            </div>
            <div className="row gy-5">
              {isLoading
                ? [1, 2, 3, 4, 5, 6]?.map((v, i) => {
                    return (
                      <ProductCardSkeleton/>
                    );
                  })
                : productListArr
                    // ?.filter((v) => v?.category === activeCat)
                    .map((v, i) => <ProductCard key={i} v={v} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
