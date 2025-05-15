import { NavLink } from "react-router-dom";
import { IconComponents } from "../Icon/IconComponents";

interface NavProps {
  path: string;
  iconName: string;
}

export const NavItem = ({ path, iconName }: NavProps) => {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? "text-mainColor" : "text-subText";
        }}
      >
        <IconComponents name={iconName} size={40} />
      </NavLink>
    </div>
  );
};
