const FrameWithMask = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[24px] max-w-full grid-cols-[repeat(4,_minmax(253px,_1fr))] text-left text-xl-4 text-black font-cinzel-decorative mq800:grid-cols-[minmax(253px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(253px,_439px))]">
      <div className="h-[348px] flex flex-col items-start justify-start gap-[1px] max-w-full text-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="eager"
          alt=""
          src="/rectangle-165@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-end pt-3 pb-[13px] pr-7 pl-[65px] box-border max-w-full whitespace-nowrap z-[1] mq450:pl-5 mq450:box-border">
          <div className="h-[59.4px] w-[337.6px] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[33.93px] z-[2]">
            Wedding Music Party
          </div>
        </div>
      </div>
      <div className="h-[348px] flex flex-col items-start justify-start gap-[1px] max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/rectangle-165-1@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-between pt-3 pb-[13px] pr-[49px] pl-6 box-border gap-[20px] max-w-full mq450:pr-5 mq450:box-border">
          <div className="h-[59.4px] w-[337.6px] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <img
            className="h-[23.8px] w-[23.8px] relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/makeupwomansvgrepocom-1.svg"
          />
          <input
            className="w-[calc(100%_-_96.8px)] [border:none] [outline:none] font-cinzel-decorative text-xl-4 bg-[transparent] h-[34px] relative leading-[33.93px] capitalize text-black text-left inline-block min-w-[99px] z-[1] mq450:text-base mq450:leading-[27px]"
            placeholder="bridal makeup"
            type="text"
          />
        </div>
      </div>
      <div className="h-[348px] flex flex-col items-start justify-start gap-[1px] max-w-full text-base-2">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/rectangle-165-2@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-end justify-start pt-[13px] px-[23px] pb-[19px] box-border gap-[19px] max-w-full whitespace-nowrap">
          <div className="h-[59.4px] w-[337.6px] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <img
            className="h-[24.7px] w-[29px] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/phcamerathin.svg"
          />
          <div className="relative leading-[26.92px] z-[1]">{`Photo &Video graphy`}</div>
        </div>
      </div>
      <div className="h-[348px] flex flex-col items-start justify-start gap-[1px] max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-165-3@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-end justify-start pt-2 pb-[17px] pr-px pl-[27px] box-border gap-[8px] max-w-full whitespace-nowrap">
          <div className="h-[59.4px] w-[337.6px] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <input
            className="m-0 h-[25.4px] w-[25.4px] relative overflow-hidden shrink-0 z-[1]"
            type="checkbox"
          />
          <div className="relative leading-[33.93px] z-[1]">
            Affordable Decoration
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameWithMask;
