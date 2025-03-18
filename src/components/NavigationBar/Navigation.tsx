import React, { useState } from "react";
import { IconComponents } from "../Icon/IconComponents";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className=" w-full p-2 bottom-0 fixed ">
      <div className=" flex justify-around py-3 bg-subBackGround rounded-lg">
        <Link to="/profile">
          <IconComponents
            name="profile"
            color="subText"
            hover={true}
            size={40}
          />
        </Link>
        <Link to="/employment">
          <IconComponents
            name="searchingJob"
            color="subText"
            hover={true}
            size={40}
          />
        </Link>

        <Link to="/error">
          <IconComponents
            name="searchingTeam"
            color="subText"
            hover={true}
            size={40}
          />
        </Link>

        <IconComponents name="mail" color="subText" hover={true} size={40} />
        <IconComponents name="renting" color="subText" hover={true} size={40} />
      </div>
    </div>
  );
};
