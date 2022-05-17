/* eslint-disable jsx-a11y/alt-text */
import img01 from "../img/01.jpg";
import img02 from "../img/02.jpg";
import img03 from "../img/03.jpg";
import img04 from "../img/04.jpg";
import img05 from "../img/05.jpg";
import img06 from "../img/06.jpg";
import img07 from "../img/07.jpg";
import styled from "styled-components";

function RandomBackground() {
  const images = [img01, img02, img03, img04, img05, img06, img07];
  const randomimgs = images[Math.floor(Math.random() * images.length)];

  return (
    <BackgroundImg>
      <img src={randomimgs} />
    </BackgroundImg>
  );
}

export default RandomBackground;

const BackgroundImg = styled.div`
  img {
    width: 100%;
    height: 100vh;
  }
`;
