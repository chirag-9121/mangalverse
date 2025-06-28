import { cn } from "@/lib/utils";

import { BadgeInfo } from "lucide-react";

import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { HyperText } from "@/components/magicui/hyper-text";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ROVERS } from "@/lib/constants";

const RoverDetails = ({ rover }) => {
  const roverData = ROVERS.find((r) => r.name === rover?.name);
  return (
    // Details and Image
    <div className="flex h-[30vh] justify-between gap-16">
      {/* Details */}
      <div className="flex w-1/2 flex-col justify-between">
        <div className="flex items-center justify-between">
          {rover?.name ? (
            <h1>{rover.name}</h1>
          ) : (
            <Skeleton className="h-8 w-[200px]" />
          )}
          {rover?.status && (
            <div
              className={cn(
                "flex h-min items-center justify-center rounded-full border-1 px-2 py-1",
                rover?.status === "active"
                  ? "text-active border-active"
                  : "text-complete border-complete"
              )}
            >
              <p className="small-p">Mission {rover.status}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Cameras</p>
              {rover?.cameras ? (
                <p className="large-p">
                  <NumberTicker value={rover?.cameras?.length} />{" "}
                </p>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Total Photos</p>
              {rover?.total_photos ? (
                <p className="large-p">
                  <NumberTicker value={rover.total_photos} />
                </p>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-secondary-foreground">Max Sol</p>
                <HoverCard openDelay={300}>
                  <HoverCardTrigger>
                    <BadgeInfo size={16} className="cursor-pointer" />
                  </HoverCardTrigger>
                  <HoverCardContent side="top">
                    A sol is a Martian day — the duration of one full rotation
                    of Mars. Sols are counted starting from the day a rover
                    lands on the Martian surface. For example, a photo taken on
                    Curiosity's 1000th sol means it was captured on the 1000th
                    Martian day of its mission.
                  </HoverCardContent>
                </HoverCard>
              </div>
              {rover?.max_sol ? (
                <p className="large-p">
                  {rover?.max_sol && <NumberTicker value={rover?.max_sol} />}
                </p>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Launch Date</p>
              {rover?.launch_date ? (
                <HyperText className="large-p">{rover?.launch_date}</HyperText>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Landing Date</p>
              {rover?.launch_date ? (
                <HyperText className="large-p">{rover?.landing_date}</HyperText>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Last Photo Taken</p>
              {rover?.launch_date ? (
                <HyperText className="large-p">{rover?.max_date}</HyperText>
              ) : (
                <Skeleton className="h-5 w-full" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="bg-primary h-full w-2/5 rounded-md">
        <div className="bg-primary flex h-full w-full items-center justify-center rounded-md p-4">
          {roverData && (
            <Image
              src={roverData.src}
              alt={roverData.name}
              width={300}
              height={300}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoverDetails;
