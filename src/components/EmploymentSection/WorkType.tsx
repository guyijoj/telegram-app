import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkProps {
  value: string;
  onChange: (value: string) => void;
}

const types = [
  "Студенческий",
  "Короткий метр",
  "Полный метр",
  "Документальный",
  "Художественный сериал",
  "Тв шоу",
  "Трансляций",
];

export const WorkType = ({ value, onChange }: WorkProps) => {
  const [isFocused, setFocuse] = useState(false);

  const onFocus = () => {
    setFocuse(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setFocuse(false);
    }, 200);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleTypeClick = (type: string) => {
    onChange(type);
  };

  return (
    <div className="mb-4.5 relative z-5 ">
      <input
        className="text-subText text-2xl border-1 border-mainColor rounded-lg w-full  p-3 focus:outline-none focus:border-lightMainColor "
        placeholder="Выберите формат проекта"
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-lightBackGround rounded-lg mt-2 absolute"
          >
            {types
              .filter((item) => {
                const searchBar = value.toLowerCase();
                const suggetions = item.toLowerCase();

                return (
                  suggetions.includes(searchBar) && suggetions !== searchBar
                );
              })
              .map((type, index) => (
                <motion.li key={index}>
                  <div
                    onClick={() => handleTypeClick(type)}
                    className="text-subText sub-heading p-2 active:bg-darkerSubText "
                  >
                    {type}
                  </div>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
