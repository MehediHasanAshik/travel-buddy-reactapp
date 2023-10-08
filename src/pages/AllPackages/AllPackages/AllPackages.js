import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import SinglePageDetail from "../SinglePackageDetail/SinglePackageDetail";
import "./AllPackages.css";

const AllPackages = () => {
  const [loading, setLoading] = useState(false);

  const [packages, setPackages] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch("https://reactravelbuddy.up.railway.app/package_detail")
      // fetch('package_detail.json')
      .then((res) => res.json())
      .then((data) => setPackages(data[0]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Available Packages</h1>
      {loading && (
        <CircularProgress
          size="4rem"
          color="inherit"
          style={{ margin: "auto" }}
        />
      )}
      <div className="single-cart">
        {packages.details?.map((detail) => (
          <SinglePageDetail key={detail.p_id} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
