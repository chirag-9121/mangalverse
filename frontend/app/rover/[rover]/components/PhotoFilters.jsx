"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PhotoFilters = ({ rover, setFilterParams, setIsFilterApplied }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <DateFilter rover={rover} setFilterParams={setFilterParams} />
      <CameraFilter
        cameras={rover?.cameras}
        setFilterParams={setFilterParams}
      />
      <ApplyandResetButton setIsFilterApplied={setIsFilterApplied} />
    </div>
  );
};

export default PhotoFilters;

function DateFilter({ rover, setFilterParams }) {
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
            className="bg-secondary hover:bg-secondary/95 h-7 w-36 justify-between border-1 py-0 font-normal text-black"
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
              setFilterParams((prev) => {
                if (!date) {
                  const { earth_date, ...rest } = prev;
                  return rest;
                }

                const formatted = format(new Date(date), "yyyy-MM-dd");
                return { ...prev, earth_date: formatted };
              });
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function CameraFilter({ cameras, setFilterParams }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value) setFilterParams((prev) => ({ ...prev, camera: value }));
    else {
      setFilterParams((prev) => {
        const { camera, ...rest } = prev;
        return rest;
      });
    }
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="bg-secondary hover:bg-secondary/95 h-7 w-36 justify-between border-1 py-0 font-normal text-black"
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

function ApplyandResetButton({ setIsFilterApplied }) {
  return (
    <Button
      variant="ghost"
      // disabled
      onClick={() => setIsFilterApplied((prev) => !prev)}
      className="medium-p text-secondary-foreground font-conthrax hover:text-foreground hover:border-foreground h-min border-1 border-transparent px-2 py-1 font-normal hover:scale-105 hover:bg-transparent"
    >
      Apply
    </Button>
  );
}
