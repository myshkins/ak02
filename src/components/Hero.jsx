import "./Hero.css";
import Selfie from "../assets/pixel-selfie.png";
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="selfie-wrap">
        <img className="selfie" src={Selfie} />
      </div>
      <div className="hero-desktop-text">
        Hey, I'm Alex Krenitsky, a NYC public school teacher turned software
        developer. Here you can find a collection of projects that I've created.
        I get a lot of joy out of making new things and learning new things, and
        I'm continuously looking to learn more. So let me know if you like
        anything that you see!
      </div>
      {props.children}
    </div>
  );
};

export default Hero;
