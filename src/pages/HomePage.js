import IvanaTinkleFrame from "../components/IvanaTinkleFrame";
import FrameWithMask from "../components/FrameWithMask";
import FrameComponent1 from "../components/FrameComponent1";
import HeaderContainer from "../components/HeaderContainer";
import FrameComponent from "../components/FrameComponent";
import FrameContainer from "../components/FrameContainer";
import Insta from "../components/Insta";
import InstaFrame from "../components/InstaFrame";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-left text-5xl-1 text-peru-200 font-alex-brush">
      <div className="h-[800px] flex flex-col items-center justify-center py-0 pr-5 pl-0 box-border relative max-w-full">
        <div className="w-[100rem] my-0 absolute top-0 right-[-1580.6px] flex flex-row items-end justify-start py-[65px] px-40 box-border bg-[url('/public/rectangle-7@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[717px]">
          <img
            className="relative max-h-full object-contain hidden"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <div className="w-[549px] rounded-md bg-white shadow-[0px_1.6px_8.04px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start p-[19px] box-border gap-[1px] max-w-full z-[1]">
            <div className="w-[548.9px] h-[233.7px] relative bg-white hidden max-w-full" />
            <div className="w-[495.7px] h-[155.2px] relative inline-block shrink-0 max-w-full z-[1] mq450:text-lgi">
              <p className="m-0">Dream Maker</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-[28.1px] text-black font-cormorant-garamond">
                <span className="font-medium">
                  <span>YOUR PERSONAL DREAM MAKER</span>
                </span>
              </p>
              <p className="m-0 text-lgi-3">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-base-1 font-nunito-sans text-gray-200">
                We believe that it is all about the BIG DREAMS and the small
                details!
              </p>
            </div>
            <button className="cursor-pointer [border:none] rounded-md py-3 mt-5 pr-[37px] pl-[41px] bg-black flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkslategray-100">
              <div className="h-[39.7px] w-[163.8px] relative bg-black hidden" />
              <div className="relative text-xl-1 font-medium font-cormorant-garamond text-white text-left z-[1]">
                Book Now
              </div>
            </button>
          </div>
        </div>
        <IvanaTinkleFrame />
      </div>
      <div className="w-[28.8px] h-[29.9px] relative overflow-hidden shrink-0 hidden z-[1]" />
      <div className="relative text-base-2 leading-[25.13px] capitalize font-medium font-jost text-white hidden z-[2]">
        All Team Member
      </div>
      <div className="self-stretch h-[674px] relative bg-white hidden z-[5]" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[46px] pl-[53px] box-border min-h-[1344px] max-w-full shrink-0 text-center text-[68.4px] text-black font-cinzel-decorative mq800:pl-[26px] mq800:pr-[23px] mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full mq800:gap-[31px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border relative min-h-[212px] max-w-full">
            <div className="w-[693px] flex flex-col items-center justify-start gap-[20px] max-w-full">
              <div className="relative leading-[82.78px] capitalize inline-block max-w-full mq450:text-22xl mq450:leading-[50px] mq800:text-36xl mq800:leading-[66px]">
                Our Services
              </div>
              <div className="self-stretch h-[62px] relative text-lg leading-[30.59px] font-jost text-darkslategray-200 inline-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
            <img
              className="h-[209.1px] w-[306.2px] absolute my-0 mx-[!important] bottom-[22.9px] left-[-156px] object-contain"
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <FrameWithMask />
          <div className="w-full h-[81px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-48xl-6">
            <div className="self-stretch w-80 relative tracking-[0.1em] inline-block z-[1] mq450:text-22xl mq800:text-35xl">
              GALLERY
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <HeaderContainer />
      <FrameComponent />
      {/* <FrameContainer /> */}
      <Insta />
      <img
        className="w-[360px] h-[307.4px] absolute my-0 mx-[!important] top-[1335px] right-[-157px] object-contain z-[3]"
        loading="eager"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="w-[360px] h-[307.4px] absolute my-0 mx-[!important] right-[-95px] bottom-[-46.4px] object-contain z-[2]"
        alt=""
        src="/vector-7.svg"
      />
      <InstaFrame />
      <Footer />
    </div>
  );
};

export default HomePage;
