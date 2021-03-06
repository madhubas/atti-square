import React from "react";
import "./FirstSection.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Home/images/_hvd1304_1.webp";
import image2 from "../Home/images/_HVD1294_1-min.webp";
import image3 from "../Home/images/_HVD1247_1-min.webp";
import image4 from "../Home/images/_HVD1270_1-min.webp";
import { Button } from "react-bootstrap";
const FirstSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="content">
            <div className="textBox">
              <h2>Taste the Feeling</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                aperiam necessitatibus corporis recusandae ipsum ad nisi sint
                soluta iusto ratione, reiciendis explicabo officiis nesciunt
                odit libero delectus ea reprehenderit amet.
              </p>
              <Button className="button">Read More</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image4}
          alt="Fourth Slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default FirstSection;
