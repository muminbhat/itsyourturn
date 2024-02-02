const InstaFrame = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full shrink-0 text-left text-36xl-1 text-white font-cormorant-garamond">
      <div className="w-[1646px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[107%] shrink-0">
        <div className="w-[1765px] bg-black flex flex-col items-center justify-start pt-[38px] pb-[52px] pr-[134px] pl-5 box-border gap-[53px] max-w-[107%] shrink-0 z-[2] mq450:gap-[53px] mq450:pr-5 mq450:box-border mq800:pt-[25px] mq800:pr-[67px] mq800:pb-[34px] mq800:box-border">
          <img
            className="w-[1763.6px] h-[554px] relative hidden max-w-full"
            alt=""
            src="/rectangle-20.svg"
          />
          <div className="w-[428px] flex flex-row items-start justify-end max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
              <b className="h-[61.3px] relative inline-block z-[3] mq450:text-14xl mq800:text-25xl">
                IT’s Your Turn
              </b>
              <div className="h-[42px] absolute my-0 mx-[!important] bottom-[-29.4px] left-[15.8px] text-17xl-7 font-alex-brush text-peru-200 inline-block z-[4] mq450:text-3xl mq800:text-10xl">
                Events and Weddings
              </div>
            </div>
          </div>
          <div className="w-[627px] flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-4xl-8 font-nunito-sans">
            <div className="w-[536px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
              <div className="h-[22.7px] flex-1 relative flex items-end justify-center max-w-full shrink-0 z-[3] mq450:text-lgi">{`Let’s get in touch `}</div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[15px] max-w-full text-left text-5xl">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-10 relative max-w-full">
                <b className="absolute top-[6.5px] left-[0.2px] text-8xl-6 flex font-cormorant-garamond text-white text-left items-end w-[134.1px] h-[30.2px] z-[3] mq450:text-3xl">{` `}</b>
                <div className="absolute top-[-0.3px] left-[94px] rounded-3xs-7 box-border w-[532px] flex flex-row items-center justify-center pt-[5px] pb-0.5 pr-[22px] pl-5 max-w-full z-[4] border-[1px] border-solid border-gray-300">
                  <div className="h-[33px] relative text-5xl tracking-[0.1em] font-nunito-sans text-white text-left flex items-end z-[3] mq450:text-lgi">
                    NAME
                  </div>
                  <div className="h-10 w-[532.3px] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
                </div>
              </button>
              <div className="w-[532px] rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[3px] pb-1 pr-5 pl-[23px] max-w-full z-[4] border-[1px] border-solid border-gray-300">
                <div className="h-[33px] relative tracking-[0.1em] flex items-end z-[3] mq450:text-lgi">
                  CONTACT NO.
                </div>
                <div className="h-10 w-[532.3px] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
              </div>
              <div className="w-[532px] rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[3px] pb-1 pr-5 pl-[21px] max-w-full z-[4] border-[1px] border-solid border-gray-300">
                <div className="h-[33px] relative tracking-[0.1em] flex items-end z-[3] mq450:text-lgi">
                  EMAIL
                </div>
                <div className="h-10 w-[532.3px] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
              </div>
              <div className="w-[533px] rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[3px] pb-1 pr-[21px] pl-5 max-w-full z-[4] border-[1px] border-solid border-gray-300">
                <div className="h-[33px] relative tracking-[0.1em] flex items-end z-[3] mq450:text-lgi">
                  YOUR QUESTIONS
                </div>
                <div className="h-10 w-[532.3px] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
              </div>
            </div>
          </div>
          <div className="w-[260px] flex flex-row items-start justify-end">
            <button className="cursor-pointer [border:none] pt-[7px] pb-2 pr-[34px] pl-[35px] bg-white h-[38px] rounded-[9.19px] flex flex-row items-center justify-center box-border z-[3] hover:bg-gainsboro-100">
              <div className="h-[37.8px] w-[136.9px] relative rounded-[9.19px] bg-white hidden" />
              <div className="relative text-lg-4 tracking-[0.12em] font-light font-nunito-sans text-black text-left z-[1]">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaFrame;
