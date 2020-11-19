import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import Axios from "axios";

const CardList = ({ chooseError }) => {
  const [state, setState] = useState({
    status: "idle",
    farm: [],
    error: null
  });
  const { status, farm, error } = state;

  useEffect(() => {
    console.log("Call API");
    const fetchData = async () => {
      try {
        let url = "https://5d7c82296b8ef80014b29af9.mockapi.io/api/v1/farm";
        url = chooseError ? url + 1 : url;
        setState({ status: "loading", error: null });
        const { data } = await Axios.get(url);

        setState({ farm: data, status: "resolved" });
      } catch (err) {
        setState({ status: "rejected", error: err });
      }
    };

    setState({ status: "loading", error: null });
    fetchData();
  }, [chooseError]);

  if (["idle", "loading"].includes(status)) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="cards-container">
      {farm.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  chooseError: PropTypes.bool.isRequired
};

export default CardList;
