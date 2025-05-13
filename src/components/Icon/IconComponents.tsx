import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlineSignature } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { IoCalendarOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
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
  filter: VscSettings,
  goBack: IoClose,
  calendar: IoCalendarOutline,
  triangleUp: GoTriangleUp,
  triangleDown: GoTriangleDown,
  no: null,
};

export const IconComponents = ({ name, size, color = "" }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons] || null;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent color={color} size={size} />;
};
