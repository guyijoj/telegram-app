import React, { useState } from "react";
import { IconComponents } from "../Icon/IconComponents";
import { i } from "framer-motion/client";

interface props {
  children: string;
  value: string;
  isSelected: string;
  onSelect: (value: string) => void;
}
export const Experience = ({
  children,
  value,
  isSelected,
  onSelect,
}: props) => {
  const [isExperience, setExperience] = useState(false);

  return (
    <div className="mb-3.5">
      <label className="sub-heading text-subText relative pl-9 checkbox ">
        {children}
        <input
          type="checkbox"
          name="experience"
          value={value}
          checked={isSelected === value}
          onChange={() => {
            onSelect(value);
          }}
          className=" delete-checkbox "
        />
        <span className="custom-checkbox"></span>
      </label>
    </div>
  );
};
