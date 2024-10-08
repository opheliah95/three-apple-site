import React, { useRef, useState, useEffect } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  let { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);
  // use effect for play change
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else {
        startPlay = true;
        videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // use effect for video transition
  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      // animation video progress
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);
  return (
    <div>
      <div className="flex items-center relative">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id={`slider-${i}`} className="sm:pr-20 pr-10">
            <div className="video-carousel_container w-full h-full overflow-hidden flex-center rounded-3xl bg-black">
              <video
                ref={(el) => (videoRef.current[i] = el)}
                src={list.video}
                type="video/mp4"
                className="video"
                muted
                preload="auto"
                playsInline={true}
                onPlay={() => {
                  setVideo((prevVideo) => ({
                    ...prevVideo,
                    isPlaying: true,
                  }));
                }}
              />
              <div className="absolute top-12 w-full z-10 left-[5%] align-bottom">
                {list.textLists.map((item, i) => (
                  <p
                    key={`text-${i}`}
                    className="md:text-2xl gap-6 text-xl font-medium"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative flex-center mt-10">
              <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full z-20">
                {videoRef.current.map((_, i) => (
                  <span
                    className="mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer relative"
                    key={i}
                    ref={(el) => (videoDivRef.current[i] = el)}
                  >
                    <span
                      className="absoulte h-full w-full rounded-full"
                      key={i}
                      ref={(el) => (videoSpanRef.current[i] = el)}
                    />
                  </span>
                ))}
              </div>

              <button className="control-btn">
                <img src={isLastVideo? replayImg: isPlaying? playImg: pauseImg} alt={isLastVideo? "replay" : isPlaying? "play": "pause"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
