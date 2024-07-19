import React from "react";
import hero from "../assets/hero.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container d-flex w-100 flex-column justify-content-center fw-light text-secondary-subtle">
      <p className="font text-center fs-2 pt-5 m-5">
        Epic Games : An American video game and software developer
        <br /> And publisher based in Cary, North Carolina.
      </p>
      <img src={hero} alt="" />
      <p className=" headers text-center fs-5 pt-5">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>

      <div className=" d-flex justify-content-center mt-5">
        {" "}
        <button className="web">Visit Website</button>
      </div>
    </div>
  );
};

export default Header;
