"use client";
import Item from "@/components/item";
import { useState } from "react";
import { SCHOOLS } from "@/data/schools";

const Page = () => {
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
