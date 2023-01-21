import React from "react";
import echosound from "../images/echosound.png";

const HomePage = () => {
  return (
    <div className="">
      <p className="flex text-align: center">Welcome to EchoSound</p>
      <div className="flex items-center justify-center">
        <img src={echosound} alt="echosound" />
      </div>

      <br />
      <p className=" flex text-align: center">
        <i>The application which provides you with all sorts of sounds</i>
      </p>
      <br />
      <p className="flex text-align: center">
        EchoSound is the new music app in which you can find your favourite
        music & podcast. You are able to save your favourites in your own
        summarised playlist, so wherever you go you have your favourite music
        with you. In addition we opened a sample bank, for those who work in the
        field of sound this is the optimal way of finding quick new sounds to
        use. Create your favorite sample list for quick excess. Enjoy your new
        sounds, which will echo in your ear for a while.{" "}
      </p>
      <br />
      <p className=" flex text-align: center">
        Signup to use all features of EchoSound
      </p>
    </div>
  );
};

export default HomePage;
