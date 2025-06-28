import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-muted-foreground/90 animate-pulse rounded-sm",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
