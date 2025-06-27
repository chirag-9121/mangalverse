"use client";

import { getRoverData } from "@/api";
import { useState, useEffect } from "react";
import RoverDetails from "./components/RoverDetails";
import PhotoFilters from "./components/PhotoFilters";

const RoverPage = ({ params }) => {
  const [rover, setRover] = useState(null);

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
    <div className="flex h-full flex-col gap-10 px-16 pt-8">
      <RoverDetails rover={rover} />
      <PhotoFilters rover={rover} />
    </div>
  );
};

export default RoverPage;
