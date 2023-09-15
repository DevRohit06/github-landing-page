import { IoIosArrowForward } from "react-icons/io";
export const Hero = () => {
  return (
    <>
      <section className="px-6 md:px-16 xl:px-36 mx-auto">
        <div className="relative">
          <img
            className="absolute -z-10 top-0 "
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            alt=""
          />
        </div>
        <br />
        <div className="grid">
          <div></div>
          <div className="ml-8 mt-60 sm:mt-72 md:mt-80">
            <div className=" flex items-center gap-4 bg-gradient-to-r from-black to-transparent  rounded-full border-2 border-gray-600 w-5/6 sm:w-7/12">
              <div className="flex items-center">
                <div className="p-4">
                  <img
                    className="sm:w-14 w-10 "
                    src="https://github.githubassets.com/images/modules/site/universe/eyebrow-23@2x.png"
                    alt=""
                  />
                </div>
                <div className="w-full leading-loose">
                  <h1 className="text-white font-semibold text-[11px] sm:text-lg pb-1 leading-tight sm:leading-none">
                    GitHub Universe: Dive in to AI, security, and DevEx
                  </h1>
                  <p className="text-gray-500 text-[11px] sm:text-base leading-tight sm:leading-none">
                    Get your tickets now to join us on Nov. 8-9.
                  </p>
                </div>
              </div>
              <div className="pr-5 ">
                <IoIosArrowForward className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="py-8 text-8xl font-bold text-white">
                Let’s build from here
              </h1>
              <p className="text-3xl text-gray-400 w-5/6">
                The AI-powered developer platform to build, scale, and deliver
                secure software.
              </p>
              <div className="flex gap-4 py-8">
                <a className=" px-6 py-4 bg-white rounded-lg" href="">Explore all features</a>
                <a className=" px-6 py-4 bg-white rounded-lg" href="">Start a free enterprise trail</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};
