import Spotlight from "../ui/Spotlight";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/TextReveal";
import HeroPhoto from "./HeroPhoto";

const Hero = () => {
  return (
    <div id="hero">
      <div
        className=" h-screen w-full dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] 
    relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}

        <div className="lg:flex-row items-center md:flex sm:flex-col lg:gap-20 md:gap-0 sm:gap-0 ">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="lg:h-[40rem] md:h-[40rem] h-[20rem] relative  flex items-center justify-center">
            <HeroPhoto />
          </div>

          <div className="flex items-center justify-center rounded-2xl w-full  ">
            <TextRevealCard
              text="You know the business"
              revealText="I do the business "
            >
              <TextRevealCardTitle>
                Sometimes, you just need to see it.
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                This is a text reveal card. Hover over the card to reveal the
                hidden text.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
      </div>
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={"white"}
        />
        <Spotlight
          className="top-40 left-20 h-[80vh] w-
            [50vw]"
          fill={"white"}
        />
      </div>
    </div>
  );
};

export default Hero;
