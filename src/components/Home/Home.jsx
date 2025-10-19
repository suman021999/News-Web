"use client"
// Home.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Home = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // fade in + left to right move
    tl.fromTo(
      lineRef.current,
      { opacity: 0, x: "-100%" },
      { opacity: 1, x: "0%", duration: 6, ease: "power2.inOut" }
    )
      // fade out
      .to(lineRef.current, {
        opacity: 0,
        duration: 4,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <section className="relative w-full py-6">
      <div className="text-center">
        <h3 className="font-[font1] capitalize mx-4  text-[3vw] text-center leading-3.5 text-neutral-600 ">
          Trans women are women. Trans rights are human rights.{" "}
          <span className="font-[font2]">Fix your heart or die.</span>
        </h3>
      </div>

      {/* Animated underline */}
      <div className="relative flex flex-wrap justify-center mt-8">
        <div
          ref={lineRef}
          className="h-[8px] w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 "
        ></div>
      </div>

      <section className="grid grid-cols-12 relative mt-40">

        <hgroup className="gird  col-span-8  ">

          <h2 className="relative grid col-span-8 row-span-8">
          <span className="text-8xl uppercase text-TXTmain whitespace-nowrap  lg:text-[28vw] leading-0.5   font-[font3]">
            True Terrors
          </span>
          <span className="font-[font2] ofthe left-10 top-10 absolute text-[10vw] lg:text-[8vw]">
            of the
          </span>
          <span className=" text-[9vw] mx-4 uppercase mt-36 text-TXTmain font-[font1]">New Dark Web</span>
        </h2>

        <div className="absolute right-0 z-999 bg-white  top-48   ">
          <img src="/gargoyle.avif"  className="w-[500px] rounded-lg outline-2 mx-2 h-[600px]" alt="Gargoyle"/>
        </div>

        <div className="border-t-2 border-b-2">
          <marquee behavior="scroll" direction="right">48ºF @ N 39º 43’ 31.56” W 104º 58’ 0.94”
            (Denver, Colorado)</marquee>
        </div>

        </hgroup>
     


      </section>
    </section>
  );
};

export default Home;

