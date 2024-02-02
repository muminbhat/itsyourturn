const HeaderContainer = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-5 pl-0 box-border min-h-[270px] max-w-full shrink-0 text-center text-49xl-2 text-black font-cinzel-decorative">
      <div className="w-[1540px] flex flex-row items-end justify-between gap-[20px] max-w-[102%] shrink-0 mq1125:flex-wrap">
        <div className="h-[226px] w-[229px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
          <img
            className="self-stretch h-[134.4px] relative max-w-full overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="h-[166px] w-[571.6px] relative leading-[82.56px] capitalize inline-block shrink-0 max-w-full mq450:text-22xl mq450:leading-[50px] mq800:text-36xl mq800:leading-[66px]">
          our event planner team
        </div>
        <div className="h-[116px] flex flex-col items-start justify-start">
          <button className="cursor-pointer [border:none] pt-3 pb-2.5 pr-8 pl-[35px] bg-peru-100 h-[45px] flex flex-row items-center justify-center box-border whitespace-nowrap z-[1] hover:bg-saddlebrown">
            <img
              className="h-[44.9px] w-[178.6px] relative hidden"
              alt=""
              src="/rectangle-13.svg"
            />
            <div className="relative text-mini-1 leading-[21.99px] capitalize font-medium font-jost text-white text-left z-[2]">
              All Team Member
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderContainer;
