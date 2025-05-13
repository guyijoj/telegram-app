import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface searchBarProp {
  value: string;
  onChange: (value: string) => void;
}

const professions = [
  "Режиссер постановщик",
  "Оператор Постановщик",
  "Сценарист",
  "Художник постановщик",
  "Звукорежиссер постпродакшн",
  "Продюсер",
  "Директор Площадки",
  "Администратор",
  "Кастинг-директор",
  "Локейшн менеджер",
  "Второй режиссер",
  "Асситент по актерам",
  "Режиссер монтажа",
  "Механик камеры",
  "Гафер",
  "Осветитель",
  "Гример",
  "Костюмер",
  "Декоратор",
];

export const SearchProfessionBar = ({ value, onChange }: searchBarProp) => {
  const [isFocused, setFocuse] = useState(false);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const onFocus = () => {
    setFocuse(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setFocuse(false), 200;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleProfessionClick = (profession: string) => {
    onChange(profession);
  };
  return (
    <div className="relative mb-4.5">
      <input
        type="text"
        placeholder="Выберите профессию"
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="text-mainText text-2xl w-full p-3 input-form"
      ></input>

      <AnimatePresence>
        {isFocused && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-lg bg-lightBackGround absolute w-full max-h-18/4 overflow-y-auto z-10"
          >
            {professions
              .filter((item) => {
                const searchBar = value.toLowerCase();
                const suggetions = item.toLowerCase();

                return (
                  suggetions.includes(searchBar) && suggetions !== searchBar
                );
              })
              .map((profession, index) => (
                <motion.li key={index}>
                  <div
                    onClick={() => handleProfessionClick(profession)}
                    className="text-subText sub-heading p-2  active:bg-darkerSubText "
                  >
                    {profession}
                  </div>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
