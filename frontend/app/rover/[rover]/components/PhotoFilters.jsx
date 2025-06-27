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

const PhotoFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <h3>703 captures</h3>

      <div className="flex items-center justify-between gap-4">
        <DateFilter />
        <SolFilter />
        <CameraFilter />
        <ApplyButton />
      </div>
    </div>
  );
};

export default PhotoFilters;

function DateFilter() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);

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

function SolFilter() {
  return (
    <div className="flex items-center gap-2">
      <Input
        min={0}
        type="number"
        placeholder="Enter a Sol"
        className="bg-secondary hover:bg-secondary/90 w-40 justify-between border-1 text-black placeholder:text-black"
      />
      <BadgeInfo size={16} className="cursor-pointer" />
    </div>
  );
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function CameraFilter() {
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
            ? frameworks.find((framework) => framework.value === value)?.label
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
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
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
