"use client";
import Item from "@/components/item";
import { useState } from "react";
// import { useRef } from "react";
import { SCHOOLS } from "@/data/schools";
// import { useVirtualizer } from "@tanstack/react-virtual";

const Page = () => {
  // const parentRef = useRef(null);
  // const { getVirtualItems, getTotalSize } = useVirtualizer({
  //   count: SCHOOLS.length,
  //   getScrollElement: () => parentRef.current,
  //   estimateSize: () => 80,
  // });
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        Open
      </div>
      {open &&
        SCHOOLS.map((school, index) => <Item name={school} key={index} />)}
    </div>
  );
};

export default Page;
