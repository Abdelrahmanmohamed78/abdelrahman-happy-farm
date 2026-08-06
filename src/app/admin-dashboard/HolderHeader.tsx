import { ReactNode } from "react";

function HolderHeader({ children }: { children:ReactNode }) {
  return (
    <h3 className="text-center text-3xl font-semibold pb-2.5 border-b-2 border-b-second-bg w-fit mx-auto mb-10">
      {children}
    </h3>
  );
}

export default HolderHeader;
