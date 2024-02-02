import Component from "./Component";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-0 box-border gap-[36px] max-w-full text-center text-7xl-9 text-black font-cinzel-decorative mq450:gap-[36px] mq1300:flex-wrap">
      <Component
        maskGroup="/rectangle-162@2x.png"
        ivanaTinkle="Ivana Tinkle"
        chefManager="Chef, Manager"
      />
      <div className="flex-1 box-border flex flex-col items-center justify-start pt-10 px-8 pb-8 gap-[32px] min-w-[281px] max-w-full border-[0.9px] border-solid border-gainsboro-200">
        <div className="w-[350px] h-[350px] relative box-border hidden max-w-full border-[0.9px] border-solid border-gainsboro-200" />
        <img
          className="w-[170.5px] h-[170.5px] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-[9px]">
          <div className="relative leading-[35.9px] capitalize z-[1] mq450:text-3xl mq450:leading-[29px]">
            Brian Baker
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0 text-mid-9 text-darkslategray-200 font-jost">
            <div className="relative leading-[30.51px] z-[1]">Photographer</div>
          </div>
        </div>
      </div>
      <Component
        maskGroup="/mask-group-1@2x.png"
        ivanaTinkle="Regina Phalange"
        chefManager="Videographer"
        propFlex="0.9191"
        propBorderRadius="unset"
      />
      <Component
        maskGroup="/mask-group-2@2x.png"
        ivanaTinkle="Russell Sprout"
        chefManager="Event Planner"
        propFlex="0.7889"
        propBorderRadius="unset"
      />
    </section>
  );
};

export default FrameComponent;
