import { IconComponents } from "../Icon/IconComponents";

interface DescriptionProps {
  icon: "location" | "education" | "telephone" | "no";
  children: string;
  type: "list" | "description" | "info";
  text?: string;
}

export const DescriptionSection = ({
  children,
  type,
  text,
  icon,
}: DescriptionProps) => {
  return (
    <div className="text-white m-4 pb-4 not-last:border-b border-subText">
      <h2 className=" text-2xl mb-2">{children}</h2>
      {type === "list" ? (
        <ul className="list-disc ml-5 text-subText">
          <li>Позитивность</li>
          <li>Позитивность</li>
          <li>Позитивность</li>
        </ul>
      ) : type === "description" ? (
        <p className="border-2 border-mainColor p-3 rounded-lg mb-15 text-subText ">
          {text}
        </p>
      ) : (
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg">
            <IconComponents name={icon} color="mainColor" size={22} />
          </div>
          <p className="text-subText">{text}</p>
        </div>
      )}
    </div>
  );
};
