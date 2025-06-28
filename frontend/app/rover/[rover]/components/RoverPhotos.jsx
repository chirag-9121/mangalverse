"use client";

import * as React from "react";
import { getRoverPhotos } from "@/api";
import Pagination from "./Pagination";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Lens } from "@/components/magicui/lens";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import SpinningLoader from "@/components/ui/loader";
import { CircleAlert } from "lucide-react";

const RoverPhotos = ({ roverName, filterParams, isFilterApplied }) => {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(true);

  async function fetchPhotos(page) {
    setIsFetching(true);
    try {
      if (!filterParams.earth_date)
        throw new Error("Date is required to apply filter");
      const photos = await getRoverPhotos(roverName, {
        ...filterParams,
        page: page,
      });
      setPhotos(photos.photos);
    } catch (err) {
      toast.error(err.message, {
        style: {
          background: "#fb2c361a",
          color: "#ffffff",
          border: "1px solid #fb2c36",
        },
      });
    } finally {
      setIsFetching(false);
    }
  }

  React.useEffect(() => {
    if (roverName == "Curiosity" || roverName == "Perseverance") {
      fetchPhotos(page);
    }
  }, [roverName, page, isFilterApplied]);

  if (roverName == "Spirit" || roverName == "Opportunity") {
    return (
      <div className="flex h-full flex-col gap-4">
        <div className="bg-r bg-re flex w-full justify-center gap-2 rounded-xs border-1 border-amber-500 bg-amber-500/10 p-2 md:items-center">
          <CircleAlert size={16} />
          <p className="large-p !font-orbit">
            The images for Spirit and Opportunity rovers are currently removed
            from the NASA API
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[-16px] flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <Pagination
          page={page}
          setPage={setPage}
          photosLength={photos?.length}
        />
      </div>
      {isFetching && <SpinningLoader />}
      {!isFetching && photos.length === 0 && (
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-10">
          <h3 className="font-michroma text-primary-foreground text-center">
            You've hit the end, explorer! Try with a different set of filters.
          </h3>
          <Image
            src="/not-found.svg"
            alt="No photos found"
            width={500}
            height={500}
          />
        </div>
      )}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo) => (
          <BlurFade key={photo.id} className="overflow-hidden rounded shadow">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={photo.img_src}
                alt={`Mars photo ${photo.id}`}
                width={300}
                height={300}
                className="h-40 w-full object-cover md:h-48"
              />
            </Lens>
            <p className="!font-orbit text-secondary-foreground pt-2">
              Sol {photo.sol} | {photo.earth_date} | {photo.camera.name}
            </p>
          </BlurFade>
        ))}
      </div>
      <Toaster richColors position="top-center" className="!font-michroma" />
    </div>
  );
};

export default RoverPhotos;
