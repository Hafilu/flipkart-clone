import React from "react";
import "./Product.css";
import { ProductsData } from "../../productData";
import { Link } from "react-router-dom";
import ProductDetailCard from "../../components/productDetailCard/ProductDetailCard";

const Products = () => {
  return (
    <div className="Products">
      <div className="Products-Filters">
        <p className="filter-head">Filters</p>
        <div className="category">
          <p className="filter-categoryHead">Categories</p>
          <div className="filter-category">Mobiles</div>
        </div>
        <div className="Price">
          <p className="priceHead">Price</p>
          <input type="range" name="" id="" className="pricerange" />
          <div className="price-input">
            <input type="" value={1000} className="pricebox" /> <p>to</p>
            <input type="" value={100000} className="pricebox" />
          </div>
        </div>

        <div className="brand">
          <p>Brand</p>
        </div>
      </div>
      <div className="Products-items">
        <p className="totalresults">
          Showing 1-{ProductsData.length} of {ProductsData.length} results
        </p>
        <div className="sortby">
          <p>Sort By</p>
          <div className="sortitems">
            <li className="sortitem">Relevance</li>
            <li className="sortitem">Popularity</li>
            <li className="sortitem">Price -- Low to High</li>
            <li className="sortitem">Price -- High to Low</li>
            <li className="sortitem">Newest First</li>
          </div>
        </div>

        <div className="">
          {ProductsData.map((item, index) => (
            <Link key={index} to={`/productdetails/${item.id}`}>
              <ProductDetailCard Data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;