import React from "react";

interface DescriptionProps {
  children: string;
  list?: boolean;
  text?: string;
}

export const DescriptionSection = ({
  children,
  list = false,
  text,
}: DescriptionProps) => {
  return (
    <div className="text-white m-4 pb-4 border-b border-subText">
      <h2 className=" text-2xl mb-2">{children}</h2>
      {list ? (
        <ul className="list-disc ml-5 ">
          <li>Позитивность</li>
          <li>Позитивность</li>
          <li>Позитивность</li>
        </ul>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
