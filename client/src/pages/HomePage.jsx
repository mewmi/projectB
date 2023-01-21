import React from "react";
import Soundwaves from "../images/Soundwaves.webp";
import { Container } from "@mui/system";
import { songLoadRandom } from "../services/songs";
import { useEffect, useState } from "react";
import SongContentHomepage from "../components/SongContentHomepage";
import { useAuthContext } from "../context/authentication";

const HomePage = () => {
  const [song, setSong] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    songLoadRandom().then((data) => setSong(data.song));
  }, []);

  return (
    <Container>
      <div class="float-container">
        <div class="">
          <p
            className="welcome"
            style={{ fontFamily: "Aldrich", fontWeight: "bold" }}
          >
            Welcome to EchoSound
          </p>
          <div className="flex items-center justify-center">
            <img src={Soundwaves} alt="echosound" className="echosound" />
          </div>

          <br />
          <p className="shortText">
            <i>The application which provides you with all sorts of sounds</i>
          </p>
          <br />
          <p className="introText">
            EchoSound is the new music app in which you can find your favourite
            music & podcast. You are able to save you favourites in your own
            summarised playlist, so wherever you go you have your favourite
            music with you. In addition we opened a sample bank, for those who
            work in the field of sound this is the optimal way of finding quick
            new sounds to use. You can download samples and create your own
            samples, with only one click. Create your favorite sample list for
            quick excess. Enjoy your new sounds, which will echo in your ear for
            a while.{" "}
          </p>
        </div>
        <div class="float-child-two">
          {user && song && <SongContentHomepage song={song} />}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
