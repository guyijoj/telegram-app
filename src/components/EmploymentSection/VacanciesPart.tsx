import React from "react";
import { AddInfoVacancies } from "./AddInfoVacancies";
import { Forms } from "./Context/Context";

interface VacanciesProps {
  data: Forms;
}
export const VacanciesPart = ({ data }: VacanciesProps) => {
  return (
    <div className="container mx-auto not-odd:w-full p-3  border-1 border-mainColor rounded-lg mb-4.5">
      <div className="main-heading text-mainText mb-1.5">
        {data.proffession}
      </div>
      <div className="sub-heading text-subText mb-1.5">
        {data.isCommerce
          ? `${data.wageFrom}₽ - ${data.wageTo}₽ за месяц`
          : `Не является коммерческим `}
      </div>
      <div className="flex gap-2 mb-6">
        <div className="infoVacancies ">{data.experience}</div>
        <div className="infoVacancies "> {data.workType}</div>
      </div>
      <ul className="list-disc ml-4.5">
        <li className=" sub-heading text-subText"> г. {data.city}</li>
      </ul>
      <p className="sub-heading text-subText mb-4.5">
        {data.expedition
          ? "Есть возможность экспедиции"
          : "Нет возможности экспедиции"}
      </p>

      <a className="sub-heading block p-2 rounded-lg text-center text-subText bg-mainColor">
        Отликнуться
      </a>
    </div>
  );
};
