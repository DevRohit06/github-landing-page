import Header from "./components/header"
export default function App(){
  return (
    <>
    <div className="relative h-screen overflow-hidden"
    >
      
      {/* <img className="absolute md:-top-9 sm:-top-24 inset-0 -z-10 w-full h-[2200px] object-cover object md:object-[65%]
      lg:object-[65%] overflow-hidden" src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" style={{}} alt="" /> */}
      <div className=" max-w-[1280px] mx-auto relative -z-10">
        <picture className="">
          <source media="(max-width: 768px)" type="image/webp" srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-md.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 2x"/>
          <source media="(min-width: 1280px)" type="image/webp" srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-2x.webp 2x"/>

          <img alt="" aria-hidden="true" width="4377" className="absolute top-0 overflow-hidden pointer-events-none " style={{right: "-1050px", maxWidth: "calc(230vw + 1670px)"}} src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" />
        </picture>
      </div>
      <Header/>
    </div>
    </>
  )
}