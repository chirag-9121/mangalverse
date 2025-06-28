"use client";

import { getRoverData } from "@/api";
import { useState, useEffect } from "react";
import RoverDetails from "./components/RoverDetails";
import PhotoFilters from "./components/PhotoFilters";
import RoverPhotos from "./components/RoverPhotos";

const RoverPage = ({ params }) => {
  const [rover, setRover] = useState(null);
  const [filterParams, setFilterParams] = useState({});
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    async function fetchRoverData() {
      try {
        const { rover } = await params;
        const data = await getRoverData(rover);
        setRover(data.rover);
        setFilterParams({ earth_date: data.rover.max_date, page: 1 });
      } catch (err) {}
    }
    fetchRoverData();
  }, []);

  return (
    <div className="flex h-full flex-col gap-10 px-16 pt-8">
      <RoverDetails rover={rover} />
      <PhotoFilters
        rover={rover}
        setFilterParams={setFilterParams}
        setIsFilterApplied={setIsFilterApplied}
      />
      <RoverPhotos
        roverName={rover?.name}
        filterParams={filterParams}
        isFilterApplied={isFilterApplied}
      />
    </div>
  );
};

export default RoverPage;
