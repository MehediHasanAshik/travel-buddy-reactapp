import React from "react";
import { Link } from "react-router-dom";
import coxBazar from "../../../assets/images/cox-bazar (5).jpg";
import kuakata from "../../../assets/images/kuakata (2).jpg";
import sajek from "../../../assets/images/sajek (6).jpg";
import kaptai from "../../../assets/images/kaptai-lake (2).jpg";
import "./PopularDestinations.css";

const PopularDestination = () => {
  return (
    <div className="popu-cart">
      <h2>Popular Destinations</h2>
      <Link to="/alldestinations">
        View All Destinations<span>&#8594;</span>
      </Link>
      <div className="popular-destinations">
        <div className="container">
          <img src={coxBazar} alt="" className="img-fluid" />
          <div className="overly">
            <p>
              Cox's Bazar Beach, located at Cox's Bazar, Bangladesh, is the
              longest natural sea beach in the world running 120 kilometres and
              5th longest beach after Praia do Cassino of Brazil. It is the top
              tourist destination of Bangladesh.{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={kuakata} alt="" className="img-fluid" />
          <div className="overly">
            <p>
              Kuakata is a town in southern Bangladesh known for its panoramic
              sea beach. Kuakata beach is a sandy expanse 18 kilometres long and
              3 kilometres wide.{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={sajek} alt="" className="img-fluid" />
          <div className="overly">
            <p>
              Sajek Tripuri Valley is one of the most popular tourist spots in
              Bangladesh situated among the hills of the Kasalong range of
              mountains in Sajek union, Baghaichhari Upazila in Rangamati
              District.{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={kaptai} alt="" className="img-fluid" />
          <div className="overly">
            <p>
              Kaptai Lake is the largest lake in Bangladesh. It is located in
              the Kaptai Upazila under Rangamati District of Chittagong
              Division. The lake was created as a result of building the Kaptai
              Dam on the Karnaphuli River, as part of the Karnaphuli.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
