import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import STOCK from "../assets/images/stock-graph.png";
import { Image } from "../components/Image";

const CarouselDemo = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1600px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1100px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "800px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "500px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    setProducts([
      {
        id: "1000",
      },
      {
        id: "1001",
      },
      {
        id: "1002",
      },
      {
        id: "1003",
      },
      {
        id: "1004",
      },
      {
        id: "1005",
      },
      {
        id: "1006",
      },
      {
        id: "1007",
      },
      {
        id: "1008",
      },
      {
        id: "1009",
      },
    ]);
  }, []);

  const productTemplate = () => {
    return (
      <div className="product-item-content">
        <Image height="200" src={STOCK} />
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};

export default CarouselDemo;
