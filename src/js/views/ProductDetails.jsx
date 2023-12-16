import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  console.log(params);

  const getProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      {product ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                   $ {product.price}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      Product Details Productos:{params.id}
    </div>
  );
};

export default ProductsDetails;
