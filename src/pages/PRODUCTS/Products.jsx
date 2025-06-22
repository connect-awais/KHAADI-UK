import React from "react";
import './Products.css'
import { Link } from 'react-router-dom';
import categoryimg1 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img1.png'
import categoryimg2 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img2.png'
import categoryimg3 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img3.png'
import categoryimg4 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img4.png'
import categoryimg5 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img5.png'
import categoryimg6 from '../../assets/PRODUCT IMG/CATEGORY IMG/category-img6.png'
import item1 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/Item-1.jpg'
import item2 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-2.jpg'
import item3 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-3.jpg'
import item4 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-4.jpg'
import item5 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-5.webp'
import item6 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-6.jpg'
import item7 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-7.webp'
import item8 from '../../assets/PRODUCT IMG/PRODUCT-ITEM IMG/item-8.webp'

const ProductsData = [
  {
    id: 1,
    image: item1,
    category: "Embroidered | Leno",
    title: "Kurta",
    price: "GBP 30.00"
  },
  {
    id: 2,
    image: item2,
    category: "Embroidered | Crosshatch Poplin",
    title: "Kurta",
    price: "GBP 35.00"
  },
  {
    id: 3,
    image: item3,
    category: "Embroidered | Crosshatch Poplin",
    title: "Kurta",
    price: "GBP 30.99"
  },
  {
    id: 4,
    image: item4,
    category: "Embroidered | Crosshatch Poplin",
    title: "Kurta",
    price: "GBP 45.00"
  },
  {
    id: 5,
    image: item5,
    category: "Embroidered | Cambric",
    title: "Kurta",
    price: "GBP 15.00"
  },
  {
    id: 6,
    image: item6,
    category: "Embroidered | Lurex Stripes",
    title: "Kurta",
    price: "GBP 35.00"
  },
  {
    id: 7,
    image: item7,
    category: "Embroidered | Lurex Stripes",
    title: "Kurta",
    price: "GBP 35.00"
  },
  {
    id: 8,
    image: item8,
    category: "Embroidered | Cambric",
    title: "Kurta",
    price: "GBP 25.00"
  }
];

const Products = () => {

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
          <li className="custom-breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </div>

      <div className="category-holder">
        <div className="category-img">
          <div className="category-img-txt">
            <img src={categoryimg1} />
            <p>Monochrome</p>
          </div>
          <div className="category-img-txt">
            <img src={categoryimg2} />
            <p>Red Hot <br />Summer</p>
          </div>
          <div className="category-img-txt">
            <img src={categoryimg3} />
            <p>This just in</p>
          </div>
          <div className="category-img-txt">
            <img src={categoryimg4} />
            <p>Eat. Sleep. <br />.Repeat</p>
          </div>
          <div className="category-img-txt">
            <img src={categoryimg5} />
            <p>The Latest <br />Eid</p>
          </div>
          <div className="category-img-txt">
            <img src={categoryimg6} />
            <p>Best Sellers</p>
          </div>
        </div>
      </div>

      <div className="filterbar">
        <div className="filterbar-left">
          <div className="custom-select-wrapper">
            <select className="dropdown">
              <option>Filter by</option>
            </select>
          </div>

          <div className="custom-select-wrapper">
            <select className="dropdown">
              <option>New Arrival</option>
              <option>Top Sellers</option>
              <option>Most Popular</option>
              <option>New Arrival</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Recommended</option>
            </select>
          </div>

          <div className="item-count">
            <span className="count">244</span>
            <span className="label">items</span>
          </div>
        </div>

        <div className="view-toggle">
          {/* 1-column icon */}
          <button className="view-btn">
            <div className="one-col"></div>
          </button>

          {/* 2-column icon */}
          <button className="view-btn">
            <div className="two-col">
              <span></span>
              <span></span>
            </div>
          </button>

          {/* 3-column icon */}
          <button className="view-btn">
            <div className="three-col">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Grid icon */}
          <button className="view-btn">
            <div className="grid-icon">
              <span></span><span></span>
              <span></span><span></span>
            </div>
          </button>
        </div>
      </div>


      <div className="product-item">
        {ProductsData.map((product, index) => (
          <div className="item" key={index}>
            <Link to={`/Product/${product.id}`}>
              <img src={product.image} />
            </Link>
            <div className="product-item-txt">
              <p>{product.category}</p>
              <h4>{product.title}</h4>
              <h5 className="price-txt">{product.price}</h5>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Products