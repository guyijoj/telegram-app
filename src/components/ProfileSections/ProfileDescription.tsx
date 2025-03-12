import React from "react";
import { DescriptionSection } from "./DescriptionSection";

export const ProfileDescription = () => {
  return (
    <div>
      <DescriptionSection list={true}>Навыки и умения</DescriptionSection>
      <DescriptionSection text="Москва">Город</DescriptionSection>
      <DescriptionSection text="Высшее образования">
        Образования
      </DescriptionSection>
      <DescriptionSection text="blablablalblablablablabla">
        Доп инфа
      </DescriptionSection>
    </div>
  );
};
