import React from "react";
import { DescriptionSection } from "./DescriptionSection";

export const ProfileDescription = () => {
  return (
    <div>
      <DescriptionSection icon="no" type="list">
        Навыки и умения
      </DescriptionSection>
      <DescriptionSection icon="location" type="info" text="Москва">
        Город
      </DescriptionSection>
      <DescriptionSection icon="telephone" type="info" text="+79775936805">
        Номер телефона
      </DescriptionSection>
      <DescriptionSection
        icon="education"
        type="info"
        text="Высшее образования"
      >
        Образования
      </DescriptionSection>

      <DescriptionSection
        icon="no"
        text="blablab lalblablablablablaknahda"
        type="description"
      >
        Доп инфа
      </DescriptionSection>
    </div>
  );
};
