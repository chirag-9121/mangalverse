import { getRoverPhotos } from "@/api";
import * as React from "react";

const RoverPhotos = ({ roverName, filterParams }) => {
  React.useEffect(() => {
    async function fetchPhotos() {
      try {
        const photos = await getRoverPhotos(roverName, filterParams);
        console.log(photos);
      } catch (err) {}
    }

    if (roverName) fetchPhotos();
  }, [roverName]);
  return "no";
};

export default RoverPhotos;
