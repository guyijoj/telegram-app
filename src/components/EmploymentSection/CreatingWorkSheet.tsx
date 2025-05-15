import React, { useState } from "react";
import { Form } from "react-router-dom";
import { IconComponents } from "../Icon/IconComponents";
import { SearchProfessionBar } from "./SearchProfessionBar";
import { CommerceTick } from "./CommerceTick";
import { AboutWork } from "./AboutWork";
import { motion, AnimatePresence } from "framer-motion";
import { WorkType } from "./WorkType";
import { Terms } from "./Terms";
import { Experience } from "./Experience";
import { Select } from "../other/Select";
import "react-datepicker/dist/react-datepicker.css";
import { Forms, useFormData } from "./Context/Context";

export const CreatingWorkSheet = () => {
  const { setSheetsList, setCreateSheetSwitch } = useFormData();

  const [form, setForm] = useState<Forms>({
    proffession: "",
    workType: "",
    experience: "",
    description: "",
    isCommerce: false,
    wageFrom: 0,
    wageTo: 0,
    dateFrom: null,
    dateTo: null,
    hours: "",
    city: "",
    expedition: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm({
      ...form,
      [name]: checked,
    });
  };

  const handleForm = (
    name: string,
    newData: string | boolean | number | Date
  ) => {
    setForm({ ...form, [name]: newData });
  };

  const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSheetsList((prev) => [...prev, form]);
    setCreateSheetSwitch(false);
  };

  const hours = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "24",
  ];

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Екатинбург",
    "Сочи",
    "Казань ",
    "Курск",
    "Ростов-на-Дону",
    "Нижний Новгород",
  ];

  return (
    <div className="p-4 ">
      <div className="flex justify-end mb-3.5 ">
        <button
          className="flex justify-end "
          onClick={() => setCreateSheetSwitch(false)}
        >
          <div className="bg-subText rounded-lg ">
            <IconComponents name="goBack" size={50} color="#8774e1" />
          </div>
        </button>
      </div>
      <Form onSubmit={submitHandle}>
        <SearchProfessionBar
          value={form.proffession}
          onChange={(value) => handleForm("proffession", value)}
        />
        <WorkType
          value={form.workType}
          onChange={(value) => {
            handleForm("workType", value);
          }}
        />
        <div className="mb-3.5">
          <h1 className="text-2xl text-mainText font-medium mb-2.5 block">
            Опыт работы
          </h1>
          <Experience
            value="нет опыта"
            isSelected={form.experience}
            onSelect={(value) => handleForm("experience", value)}
          >
            нет опыта
          </Experience>
          <Experience
            value="от 1 года до 3 лет"
            isSelected={form.experience}
            onSelect={(value) => handleForm("experience", value)}
          >
            от 1 года до 3 лет
          </Experience>
          <Experience
            value="от 3 до 6 лет"
            isSelected={form.experience}
            onSelect={(value) => handleForm("experience", value)}
          >
            от 3 до 6 лет
          </Experience>
          <Experience
            value="более 6 лет"
            isSelected={form.experience}
            onSelect={(value) => handleForm("experience", value)}
          >
            более 6 лет
          </Experience>
        </div>
        <AboutWork
          value={form.description}
          onChange={(value) => handleForm("description", value)}
        />

        <div className="flex gap-2.5 mb-3.5">
          <label className="sub-heading text-subText relative pl-9 checkbox ">
            Коммерция
            <input
              type="checkbox"
              name="isCommerce"
              checked={form.isCommerce}
              onChange={handleInputChange}
              className=" delete-checkbox"
            />
            <span className="custom-checkbox"></span>
          </label>
        </div>
        <AnimatePresence>
          {form.isCommerce && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <CommerceTick
                firstValue={form.wageFrom}
                secondvalue={form.wageTo}
                onChange={(firstValue, secondvalue) => {
                  setForm({
                    ...form,
                    ["wageFrom"]: firstValue,
                    ["wageTo"]: secondvalue,
                  });
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <h1 className="text-2xl text-mainText font-medium mb-2.5 mt-5.5">
          График работы
        </h1>
        <div className="flex flex-col gap-2.5 justify-end mb-3.5">
          <Terms
            date={form.dateFrom}
            onChange={(date) => handleForm("dateFrom", date)}
            text="от"
          />
          <Terms
            date={form.dateTo}
            onChange={(date) => handleForm("dateTo", date)}
            text="до"
          />
        </div>
        <div>
          <h3 className="text-2xl text-mainText mb-3.5 ">
            Рабочие часы в день
          </h3>
          <Select
            value={form.hours}
            onChange={(value) => handleForm("hours", value)}
            options={hours}
            size="small"
          />
        </div>
        <div className="mb-5.5">
          <h1 className="text-2xl text-mainText font-medium mb-3.5 mt-5.5">
            Город
          </h1>
          <Select
            value={form.city}
            onChange={(value) => handleForm("city", value)}
            options={cities}
            size="full"
          />
        </div>

        <div className="mb-5.5">
          <label className="sub-heading text-subText relative pl-9 checkbox ">
            Возможность экспедиции
            <input
              type="checkbox"
              name="expedition"
              checked={form.expedition}
              onChange={handleInputChange}
              className=" delete-checkbox"
            />
            <span className="custom-checkbox"></span>
          </label>
        </div>

        <button
          type="submit"
          className="text-2xl font-medium text-mainText bg-mainColor p-3 w-full rounded-lg active:bg-lightMainColor mb-20"
        >
          Создать анкету
        </button>
      </Form>
    </div>
  );
};
