import { NavItem } from "./NavItem";

export const Navigation = () => {
  const navItems = [
    { to: "/profile", iconName: "profile" },
    { to: "/employment", iconName: "searchingJob" },
    { to: "/lobby", iconName: "searchingTeam" },
    { to: "/responses", iconName: "mail" },
    { to: "/rentals", iconName: "renting" },
  ];

  return (
    <div className=" w-full p-2 bottom-0 fixed ">
      <div className=" flex justify-around py-3 bg-subBackGround rounded-lg">
        {navItems.map((item, index) => (
          <NavItem key={index} iconName={item.iconName} path={item.to} />
        ))}
      </div>
    </div>
  );
};
