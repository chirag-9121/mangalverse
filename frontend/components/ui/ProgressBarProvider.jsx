"use client";

import { ProgressProvider } from "@bprogress/next/app";

const ProgressBarProvider = ({ children }) => {
  return (
    <ProgressProvider
      height="2px"
      color="#dadada"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBarProvider;
