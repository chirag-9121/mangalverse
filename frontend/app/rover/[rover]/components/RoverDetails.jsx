import { cn } from "@/lib/utils";

import { BadgeInfo } from "lucide-react";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { HyperText } from "@/components/magicui/hyper-text";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const RoverDetails = ({ rover }) => {
  return (
    // Details and Image
    <div className="flex h-[30vh] justify-between gap-16">
      {/* Details */}
      <div className="flex w-1/2 flex-col justify-between">
        <div className="flex items-center justify-between">
          <h1>{rover?.name}</h1>
          <div
            className={cn(
              "flex h-min items-center justify-center rounded-full border-1 px-2 py-1",
              rover?.status === "active"
                ? "text-active border-active"
                : "text-complete border-complete"
            )}
          >
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
              <p className="large-p">
                {rover?.max_sol && <NumberTicker value={rover?.max_sol} />}
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Launch Date</p>
              {rover?.launch_date && (
                <HyperText className="large-p">{rover?.launch_date}</HyperText>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Landing Date</p>
              {rover?.launch_date && (
                <HyperText className="large-p">{rover?.landing_date}</HyperText>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-secondary-foreground">Last Photo Taken</p>
              {rover?.launch_date && (
                <HyperText className="large-p">{rover?.max_date}</HyperText>
              )}
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
