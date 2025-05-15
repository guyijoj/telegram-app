import { useState } from "react";

import { CreatingWorkSheet } from "./CreatingWorkSheet";
import WorkSheetsList from "./WorkSheetsList";
import { FormContext, Forms } from "./Context/Context";

export const Employment = () => {
  const [sheetsList, setSheetsList] = useState<Forms[]>([]);
  const [CreateSheetSwitch, setCreateSheetSwitch] = useState(false);

  return (
    <div>
      <FormContext.Provider
        value={{ sheetsList, setSheetsList, setCreateSheetSwitch }}
      >
        {CreateSheetSwitch === false ? (
          <WorkSheetsList />
        ) : (
          <CreatingWorkSheet />
        )}
      </FormContext.Provider>
    </div>
  );
};
