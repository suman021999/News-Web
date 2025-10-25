"use client";
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
            <span className=" text-[9vw] mx-4 uppercase mt-36 text-TXTmain font-[font1]">
              New Dark Web
            </span>
          </h2>

          <div className="absolute right-0 z-999 bg-white  top-48   ">
            <img
              src="/gargoyle.avif"
              className="w-[500px] rounded-lg outline-2 mx-2 h-[600px]"
              alt="Gargoyle"
            />
          </div>

          <div className="border-t-2 border-b-2">
            <marquee behavior="scroll" direction="right">
              48ºF @ N 39º 43’ 31.56” W 104º 58’ 0.94” (Denver, Colorado)
            </marquee>
          </div>

          {/* ✅ Mapping done in your shown style here */}
          <div className="mx-4">
            <div>
              <h2 className="font-[font4] pt-4 text-gray-400 text-2xl">
                Garden
              </h2>
              <div className="space-y-1 py-4">
                {[
                  {
                    title: "Articles",
                    desc: "Polished, complete guides and essays.",
                  },
                  {
                    title: "Notes",
                    desc: "The tending of seeds and saplings of ideas",
                  },
                  {
                    title: "Case Studies",
                    desc: "Long-form project write-ups",
                  },
                ].map((item, i) => (
                  <div key={i} className="group relative block leading-relaxed">
                    <p className="cursor-pointer inline-block relative text-2xl font-[font4] text-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.title}
                    </p>
                    <span className="opacity-0 text-black/70 translate-x-1 font-[font4] text-xl transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ml-1">
                      — {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-[font4] pb-4 text-gray-400 text-2xl">MEAT</h2>
              <div className="space-y-1">
                {[
                  {
                    title: "About",
                    desc: "A portrait of the author as a young man",
                  },
                  {
                    title: "Now",
                    desc: "Current focus, soaring dreams and steady sightlines",
                  },
                ].map((item, i) => (
                  <div key={i} className="group relative block leading-relaxed">
                    <p className="cursor-pointer inline-block relative text-2xl font-[font4] text-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.title}
                    </p>
                    <span className="opacity-0 text-black/70 translate-x-1 font-[font4] text-xl transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ml-1">
                      — {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </hgroup>
      </section>

      <section className="w-full bg-[#1f1c18] text-center relative home-letter text-white py-24 px-8  mt-32">
        <p className="uppercase tracking-widest text-sm text-gray-300 mb-8">
          A BRIEF LETTER FROM THE EDITOR
        </p>

        <div className="max-w-3xl mx-auto font-[font1] text-2xl leading-relaxed space-y-6">
          <p>
            dear reader{" "}
            <em className="font-[font1]">(and in fact, dear friend)</em>,
          </p>
          <p>
            this version of my website represents my first attempt at growing a{" "}
            <strong>digital garden</strong> — a place for rough drafts and
            indecipherable scrawling; for seedlings of ideas to be tended and
            stand tall in the fields.
          </p>
          <p>
            tread carefully, as the ground <br />
            may have shifted.
          </p>
          <p>
            love, <br />
            henry <em>(from online)</em>
          </p>
        </div>

    <p className="uppercase tracking-widest text-sm text-gray-300 mt-12 transform rotate-180">
  A BRIEF LETTER FROM THE EDITOR
</p>

      </section>
    </section>
  );
};

export default Home;
