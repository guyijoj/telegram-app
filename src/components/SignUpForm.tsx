import React from "react";

export const SignUpForm = () => {
  return (
    <div className="p-4 bg-subBackGround rounded-lg ">
      <p className="main-heading mb-4 font-medium text-center">Sign up </p>
      <div>
        <input type="text" placeholder="ФИО" className="signUp-input-form " />

        <input
          type="number"
          placeholder="Номер телефона"
          className="signUp-input-form"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="signUp-input-form"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="signUp-input-form"
        />
        <button className="btn-primary bg-main w-full mt-3.5">
          Продолжить
        </button>
      </div>
    </div>
  );
};
