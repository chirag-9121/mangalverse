import { NumberTicker } from "@/components/magicui/number-ticker";

const RoverDetails = ({ rover }) => {
  return (
    // Details and Image
    <div className="flex h-2/6 justify-between gap-16">
      {/* Details */}
      <div className="flex w-1/2 flex-col justify-between">
        <div className="flex items-center justify-between">
          <h1>{rover?.name}</h1>
          <div className="text-active border-active flex h-min items-center justify-center rounded-full border-1 px-2 py-1">
            <p className="small-p">Mission {rover?.status}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Cameras</p>
              <p className="large-p">
                {rover?.cameras && (
                  <NumberTicker value={rover?.cameras?.length} />
                )}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Total Photos</p>
              <p className="large-p">
                {rover?.total_photos && (
                  <NumberTicker value={rover?.total_photos} />
                )}
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Launch Date</p>
              <p className="large-p">{rover?.launch_date}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Landing Date</p>
              <p className="large-p">{rover?.landing_date}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Last Photo Taken</p>
              <p className="large-p">{rover?.max_date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="bg-primary h-full w-2/5 rounded-md"></div>
    </div>
  );
};

export default RoverDetails;
