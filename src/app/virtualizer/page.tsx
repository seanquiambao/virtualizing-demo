"use client";
import Item from "@/components/item";
import { useState } from "react";
import { useRef } from "react";
import { SCHOOLS } from "@/data/schools";
import { useVirtualizer } from "@tanstack/react-virtual";

const Page = () => {
  const parentRef = useRef(null);
  const { getVirtualItems, getTotalSize } = useVirtualizer({
    count: SCHOOLS.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
  });
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        Open
      </div>
      {open && (
        <div
          ref={parentRef}
          style={{
            overflow: "auto",
            height: "400px",
          }}
        >
          <div
            style={{
              height: `${getTotalSize()}px`,
              position: `relative`,
              width: "100%",
            }}
          >
            {getVirtualItems().map((virtualItem) => (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <Item name={SCHOOLS[virtualItem.index]} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
