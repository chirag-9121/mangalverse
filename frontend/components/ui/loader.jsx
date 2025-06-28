import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const SpinningLoader = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <LineSpinner size="30" stroke="2" speed="1" color="white" />
    </div>
  );
};

export default SpinningLoader;
