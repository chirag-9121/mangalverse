"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { CalendarIcon } from "lucide-react";
import { Check, ChevronDown } from "lucide-react";
import { BadgeInfo } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PhotoFilters = ({ rover }) => {
  return (
    <div className="flex items-center justify-between">
      <h3>703 captures</h3>

      <div className="flex items-center justify-between gap-4">
        <DateFilter rover={rover} />
        <SolFilter rover={rover} />
        <CameraFilter cameras={rover?.cameras} />
        <ApplyButton />
      </div>
    </div>
  );
};

export default PhotoFilters;

function DateFilter({ rover }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    if (rover) setDate(new Date(rover?.max_date));
  }, [rover]);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="bg-secondary hover:bg-secondary/90 w-40 justify-between border-1 font-normal text-black"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            disabled={{
              before: new Date(rover?.landing_date),
              after: new Date(rover?.max_date),
            }}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function SolFilter({ rover }) {
  return (
    <div className="flex items-center gap-2">
      <Input
        min={0}
        max={rover?.max_sol}
        type="number"
        placeholder="Enter sol"
        className="bg-secondary hover:bg-secondary/90 w-40 justify-between border-1 text-black placeholder:text-black"
      />
      <HoverCard openDelay={300}>
        <HoverCardTrigger>
          <BadgeInfo size={16} className="cursor-pointer" />
        </HoverCardTrigger>
        <HoverCardContent side="top">
          Photos are organized by the sol (Martian rotation or day) on which
          they were taken, counting up from the rover's landing date. A photo
          taken on Curiosity's 1000th Martian sol exploring Mars, for example,
          will have a sol of 1000. <br /> <br />
          Max sol for this rover is
          <span className="font-semibold"> {rover?.max_sol}</span>.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export function CameraFilter({ cameras }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="bg-secondary hover:bg-secondary/90 w-40 justify-between border-1 font-normal text-black"
        >
          {value
            ? cameras.find((camera) => camera.name === value)?.name
            : "Select camera"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search camera..." className="h-9" />
          <CommandList>
            <CommandEmpty>No camera found.</CommandEmpty>
            <CommandGroup>
              {cameras?.map((camera) => (
                <Tooltip key={camera.name}>
                  <TooltipTrigger className="w-full">
                    <CommandItem
                      value={camera.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {camera.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === camera.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{camera.full_name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function ApplyButton() {
  return (
    <Button
      variant="ghost"
      disabled
      className="medium-p font-conthrax hover:bg-secondary h-min px-2 py-2 font-normal"
    >
      Apply
    </Button>
  );
}
