import { Button } from "@/components/ui/button";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        disabled={page <= 1}
        onClick={() => setPage((prev) => prev - 1)}
        className="hover:bg-accent hover:text-background h-min rounded border bg-transparent px-4 py-1 disabled:opacity-50"
      >
        Prev
      </Button>
      <span className="px-4">{page}</span>
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        className="hover:bg-accent hover:text-background h-min rounded border bg-transparent px-4 py-1"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
