import { createContext, SetStateAction, useContext } from "react";

export interface Forms {
  proffession: string;
  workType: string;
  experience: string;
  description: string;
  isCommerce: boolean;
  wageFrom: number;
  wageTo: number;
  dateFrom: Date | null;
  dateTo: Date | null;
  hours: string;
  city: string;
  expedition: boolean;
}

interface FormDate {
  sheetsList: Forms[];
  setSheetsList: React.Dispatch<React.SetStateAction<Forms[]>>;
  setCreateSheetSwitch: React.Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<FormDate | undefined>(undefined);

export const useFormData = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormData must be within FormContextPRovider");
  }
  return context;
};
