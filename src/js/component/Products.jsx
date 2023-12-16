import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [listProduct, setListProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setListProduct(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        {listProduct.map((item) => {
          return (
            <>
              <div  className="card">
                <img src={item.image}  className="card-img-top" alt="..." />
                <div  className="card-body">
                  <h5  className="card-title">{item.title}</h5>
                  <p  className="card-text">
                    {item.description}
                  </p>
                  <Link to={`/product/${item.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
