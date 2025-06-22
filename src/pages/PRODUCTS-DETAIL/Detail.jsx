import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Detail.css'

import item1 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/Item-1.jpg";
import item2 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-2.jpg";
import item3 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-3.jpg";
import item4 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-4.jpg";
import item5 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-5.webp";
import item6 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-6.jpg";
import item7 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-7.webp";
import item8 from "../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-8.webp";

const productList = [
  {
    id: "1",
    title: "Kurta",
    price: 30.00,
    sku: "25-05E60-07TA",
    description: "Embroidered | Leno",
    size: "FREE SIZE",
    details: "A 16 x 16 inch sateen cushion cover featuring a printed design.",
    images: [item1, item1, item1],
  },
  {
    id: "2",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item2, item2, item2],
  },
  {
    id: "3",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item3, item3, item3],
  },
  {
    id: "4",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item4, item4, item4],
  },
  {
    id: "5",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item5, item5, item5],
  },
  {
    id: "6",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item6, item6, item6],
  },
  {
    id: "7",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item7, item7, item7],
  },
  {
    id: "8",
    title: "Shalwar",
    price: 7800,
    sku: "B789100X",
    description: "Cotton | Plain",
    size: "SMALL",
    details: "Simple and comfortable everyday cotton shalwar.",
    images: [item8, item8, item8],
  }
];

const Detail = () => {
  const { id } = useParams(); // ID from URL
  const product = productList.find((p) => p.id === id); // Find product

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setQuantity(1);
    }
  }, [product]);

  const changeImage = (src) => setMainImage(src);
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div>

      <div className="breadcrumb">
        <ol className="custom-breadcrumb">
          <li className="custom-breadcrumb-item">
            <Link to="/" className="link-txt">Home</Link>
          </li>
          <li className="custom-breadcrumb-item">
            <span className="breadcrumb-separator">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00009 1L5.00009 5L1.00009 9" stroke="#2D2B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </li>
          <li className="custom-breadcrumb-item">
            <Link to="/Product" className="link-txt">Products</Link>
          </li>
          <li className="custom-breadcrumb-item">
            <span className="breadcrumb-separator">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00009 1L5.00009 5L1.00009 9" stroke="#2D2B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </li>
          <li className="custom-breadcrumb-item active" aria-current="page">Kurta</li>
        </ol>
      </div>

          <div className="detail-container">
      <div className="product-container">
        <div className="product-images">
          <div className="thumbnail-container">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="thumbnail"
                onClick={() => changeImage(img)}
                alt={`thumb-${idx}`}
              />
            ))}
          </div>
          <img src={mainImage} className="main-image" alt="main" />
        </div>

        <div className="product-info">
          <p className="product-para">{product.description}</p>
          <h2 className="product-title">{product.title}</h2>
          <div className="product-price">GBP {product.price.toFixed(2)}</div>
          <div className="sku">SKU: {product.sku}</div>

          <button className="add-to-bag">ADD TO BAG</button>

          <div className="option-section">
            <div className="option-title">Quantity</div>
            <div className="size-options">
              <div className="size-option minus" onClick={decreaseQty}>
                -
              </div>
              <div className="size-option active">{quantity}</div>
              <div className="size-option plus" onClick={increaseQty}>
                +
              </div>
            </div>
          </div>

          <div className="option-section">
            <div className="option-title">Size</div>
            <div className="size-options">
              <div className="size-option" style={{ fontSize: "12px" }}>
                {product.size}
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="details-title">Details</div>
            <div className="details-content">{product.details}</div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Detail