import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconComponents } from "../Icon/IconComponents";

interface SelectProps {
  options: string[];
  size: string;
  value: string | null;
  onChange: (value: string) => void;
}

export const Select = ({ options, size, value, onChange }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClick = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const width = {
    full: true,
    small: false,
  };
  const setWidth = width[size as keyof typeof width];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropDownRef}
      className={`${setWidth ? "w-full" : "w-40"} relative`}
    >
      <div
        className={`text-subText text-2xl p-2 border-1 rounded-lg  ${
          isOpen ? "border-lightMainColor" : "border-mainColor"
        }  w-full`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!isOpen);
        }}
      >
        {value ? value : "Выбор"}
        <span className="float-right">
          {isOpen ? (
            <IconComponents name="triangleUp" size={35} />
          ) : (
            <IconComponents name="triangleDown" size={35} />
          )}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mb-2 ${
              setWidth ? "w-full" : "w-40"
            } rounded-lg absolute bg-lightBackGround bottom-full max-h-10/2 overflow-y-auto `}
          >
            {options.map((option, index) => (
              <motion.li key={index}>
                <div
                  className="text-xl  text-mainText p-2 active:bg-darkerSubText"
                  onClick={() => {
                    handleClick(option);
                  }}
                >
                  {option}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
