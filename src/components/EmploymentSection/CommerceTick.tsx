import React, { useState } from "react";

interface CommerceTickProps {
  firstValue: number;
  secondvalue: number;
  onChange: (firstValue: number, secondvalue: number) => void;
}

export const CommerceTick = ({ onChange }: CommerceTickProps) => {
  const [isFocused1, setFocuse1] = useState(false);
  const [isFocused2, setFocuse2] = useState(false);
  const [ValueFrom, setValueFrom] = useState<number>(0);
  const [ValueTo, setValueTo] = useState<number>(0);

  const onChangeFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueFrom(Number(event.target.value.slice(0, 6)));
    onChange(Number(event.target.value.slice(0, 6)), ValueTo);
  };
  const onChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueTo(Number(event.target.value.slice(0, 6)));
    onChange(ValueFrom, Number(event.target.value.slice(0, 6)));
  };

  const handleOnkeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.value.length >= 6 &&
      !event.ctrlKey &&
      event.key !== "Backspace"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h3 className="text-mainText text-2xl mb-2.5 font-medium">Зарплата</h3>
      <div className="flex gap-3">
        <div
          className={`input-salary border-1  ${
            isFocused1 ? "border-lightMainColor" : "border-mainColor"
          } `}
        >
          <div className="flex gap-2">
            <label className="text-2xl text-darkerSubText">от</label>
            <input
              type="number"
              className=" number-input text-2xl w-full text-subText focus:outline-none focus: "
              onFocus={() => {
                setFocuse1(true);
              }}
              onBlur={() => {
                setFocuse1(false);
              }}
              onChange={onChangeFrom}
              onKeyDown={handleOnkeydown} // ограничение по вводам
              inputMode="numeric"
            />
          </div>
          <label className="text-2xl text-darkerSubText">₽</label>
        </div>
        <div
          className={`input-salary border-1  ${
            isFocused2 ? "border-lightMainColor" : "border-mainColor"
          } `}
        >
          <div className="flex gap-2">
            <label className="text-2xl text-darkerSubText">до</label>
            <input
              type="number"
              className=" number-input text-2xl w-full text-subText focus:outline-none "
              onFocus={() => {
                setFocuse2(true);
              }}
              onBlur={() => {
                setFocuse2(false);
              }}
              onChange={onChangeTo}
              onKeyDown={handleOnkeydown}
              inputMode="numeric"
            />
          </div>
          <label className="text-2xl text-darkerSubText">₽</label>
        </div>
      </div>
    </div>
  );
};
