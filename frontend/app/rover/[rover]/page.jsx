"use client";

import { getRoverData } from "@/api";
import { useState, useEffect } from "react";
import RoverDetails from "./components/RoverDetails";

const RoverPage = ({ params }) => {
  const [rover, setRover] = useState({});

  useEffect(() => {
    async function fetchRoverData() {
      try {
        const { rover } = await params;
        const data = await getRoverData(rover);
        console.log(data);

        setRover(data.rover);
      } catch (err) {}
    }
    fetchRoverData();
  }, []);

  return (
    <div className="h-full px-16 pt-8">
      <RoverDetails rover={rover} />
    </div>
  );
};

export default RoverPage;
