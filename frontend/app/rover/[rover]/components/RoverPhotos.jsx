"use client";

import * as React from "react";
import { getRoverPhotos } from "@/api";
import Pagination from "./Pagination";

const RoverPhotos = ({ roverName, filterParams }) => {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  async function fetchPhotos(page) {
    try {
      const photos = await getRoverPhotos(roverName, {
        ...filterParams,
        page: page,
      });
      console.log(photos);
      setPhotos(photos.photos);
    } catch (err) {}
  }

  React.useEffect(() => {
    if (roverName && page > 0) fetchPhotos(page);
  }, [roverName, page]);

  return (
    <div className="mt-[-16px] flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <Pagination page={page} setPage={setPage} />
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded shadow">
            <img
              src={photo.img_src}
              alt={`Mars photo ${photo.id}`}
              width={300}
              height={300}
              className="h-48 w-full object-cover"
            />
            <p className="!font-orbit text-secondary-foreground pt-2">
              Sol {photo.sol} | {photo.earth_date} | {photo.camera.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoverPhotos;
