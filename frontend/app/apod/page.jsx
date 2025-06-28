"use client";

import { getApod } from "@/api";
import * as React from "react";

const ApodPage = () => {
  const [apodData, setApodData] = React.useState(null);

  React.useEffect(() => {
    async function fetchApodData() {
      try {
        const data = await getApod();
        setApodData(data);
      } catch (err) {}
    }
    fetchApodData();
  }, []);
  return (
    <div className="mb-6 flex h-full flex-col gap-6 pt-6 sm:gap-10 sm:px-32 sm:pt-8">
      <h1>Astronomy Picture of the Day</h1>
      {apodData && (
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Image or Video */}
            {apodData.media_type === "image" ? (
              <div className="h-auto w-full">
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  width={1000}
                  height={1000}
                />
              </div>
            ) : (
              <div className="h-auto w-full">
                <video src={apodData.url} controls />
              </div>
            )}

            {/* Title, Date, Copyright */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2>{apodData.title}</h2>
                <p className="text-secondary-foreground">{apodData.date}</p>
              </div>
              <p className="text-secondary-foreground">{apodData?.copyright}</p>
            </div>
          </div>

          {/* Explanation */}
          <p className="!font-orbit large-p">{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default ApodPage;
