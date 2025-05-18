import { IconComponents } from "../Icon/IconComponents";
import { VacanciesPart } from "./VacanciesPart";
import { useFormData } from "./Context/Context";
import { useState } from "react";
import { VacancyInfo } from "./VacancyInfo";

const WorkSheetsList = () => {
  const { sheetsList, setCreateSheetSwitch } = useFormData();
  const [vacancyOn, setVacancyOn] = useState<number | null>(null);

  return (
    <>
      {vacancyOn === null ? (
        <div className="p-4 mb-13">
          <div className="flex gap-2 justify-end mb-2">
            <button
              className="text-mainText text-xl bg-mainColor rounded-xl py-1.5 px-3 flex items-center"
              onClick={() => {
                setCreateSheetSwitch(true);
                console.log(sheetsList);
              }}
            >
              Создать анкету
            </button>

            <div className="bg-mainText p-2 rounded-xl ">
              <IconComponents name="filter" color="#8774e1" size={35} />
            </div>
          </div>
          <h2 className="sub-heading text-mainText mb-2.5">
            Всего {sheetsList.length} анкет
          </h2>

          {sheetsList.map((vacancies, index) => (
            <VacanciesPart
              key={index}
              data={vacancies}
              setButton={() => setVacancyOn(index)}
            />
          ))}
        </div>
      ) : (
        <VacancyInfo />
      )}
    </>
  );
};

export default WorkSheetsList;
