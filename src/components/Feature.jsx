import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../constants/animations";
import { exploreVideo, explore1Img, explore2Img } from "../utils";
import gsap from 'gsap';
const Feature = () => {
  useGSAP(() => {
    animateWithGsap("#feature-title", { y: 0, opacity: 1 });
    gsap.to('#exploreVideo', {
        scrollTrigger: {
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
        },
        onComplete: () => {
          videoRef.current.play();
        }
      })
    animateWithGsap(
      ".g_grow",
      {
        opacity: 1,
        ease: "power1",
        scale: 1,
      },
      {
        scrub: 5.5,
      }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      ease: "power1",
      scale: 1,
    });
  }, []);
  const videoRef = useRef([]);
  return (
    <section className="h-full bg-zinc relative overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature-title" className="section-heading">
            Explore the Full Story.
          </h1>
          <div className="flex flex-col justify-center items-center overflow-hidden">
            <div className="mt-32 mb-24 pl-24">
              <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
              <h2 className="text-5xl lg:text-7xl font-semibold">
                Forged in titanium
              </h2>
            </div>
            <div className="flex-center flex-col sm:px-10">
              <div className="relative h-[50vh] w-full flex item-center">
                <video
                  src={exploreVideo}
                  playsInline
                  id="explore-video"
                  className="w-full h-full object-cover object-center"
                  preload="none"
                  muted
                  autoPlay
                  ref={videoRef}
                  type="video/mp4"
                ></video>
              </div>

              <div className="flex flex-col w-full relative">
                <div className="feature-video-container">
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img
                      src={explore1Img}
                      alt="titanium"
                      className="feature-video g_grow"
                    />
                  </div>

                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img
                      src={explore2Img}
                      alt="titanium"
                      className="feature-video g_grow"
                    />
                  </div>

                  <div className="feature-text-container h-full">
                    <div className="flex-1 flex-center">
                      <p className="feature-text g_text">
                        iPhone 15 Pro is{" "}
                        <span className="text-white">
                          the first iPhone to feature an aerospace-grade
                          titanium design
                        </span>
                        , using the same alloy that spacecrafts use for missions
                        to Mars.
                      </p>
                    </div>

                    <div className="flex-1 flex-center">
                      <p className="feature-text g_text">
                        Titanium has one of the best strength-to-weight ratios
                        of any metal, making these our{" "}
                        <span className="text-white">
                          lightest Pro models ever.
                        </span>
                        You'll notice the difference the moment you pick one up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
