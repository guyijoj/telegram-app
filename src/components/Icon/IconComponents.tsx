import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlineSignature } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  color: String;
  hover?: boolean;
};

// Объект с иконками
const icons = {
  location: FaLocationDot,
  education: FaGraduationCap,
  profile: GrUserManager,
  searchingJob: PiListMagnifyingGlassBold,
  searchingTeam: RiTeamLine,
  mail: GoMail,
  renting: AiOutlineSignature,
  telephone: BsFillTelephoneFill,
  no: null,
};

export const IconComponents = ({ name, size, color, hover }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={` text-${color} ${
        hover ? `hover:text-mainColor` : null
      } ease-in duration-300`}
    />
  );
};
