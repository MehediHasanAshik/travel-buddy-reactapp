import React from "react";
import { Carousel } from "react-bootstrap";
import bn_sajek from "../../../assets/images/sajek (2).jpg";
import bn_kaptai from "../../../assets/images/kaptai-lake (9).jpg";
import bn_cox from "../../../assets/images/cox-bazar(1).jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bn_sajek} alt="First slide" />
          <Carousel.Caption>
            <h1>Sajek</h1>
            <p>
              Sajek valley is 2000 feet above sea level, known as the Queen of
              Hills & Roof of Rangamati
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bn_kaptai} alt="Second slide" />

          <Carousel.Caption>
            <h1>Kaptai Lake</h1>
            <p>Kaptai Lake is the largest lake in Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bn_cox} alt="Third slide" />

          <Carousel.Caption>
            <h1>Cox's Bazar</h1>
            <p> Longest natural sea beach in the world</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
