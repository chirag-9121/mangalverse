"use client";

import { getRoverData } from "@/api";
import { useState, useEffect } from "react";

const RoverPage = ({ params }) => {
  const [rover, setRover] = useState({});

  useEffect(() => {
    async function fetchRoverData() {
      try {
        const { rover } = await params;
        const data = await getRoverData(rover);
        console.log(data.rover);
        setRover(data.rover);
      } catch (err) {}
    }
    fetchRoverData();
  }, []);

  return <div className="">Name: {rover.name}</div>;
};

export default RoverPage;
